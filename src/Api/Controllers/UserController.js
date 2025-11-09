const fs = require('fs');
const path = require('path');
const userService = require('../Services/UserService');
const UserDocument = require('../Models/UserDocument');
const FRONTEND_URL = process.env.FRONTEND_URL;
const UPLOAD_DIR = process.env.UPLOAD_DIR || path.join(__dirname, '../../..', 'UPLOAD_DIR');

module.exports = {
  checkExistsEmail: async (req, res) => {
    try {
      const { email } = req.body;
      //console.log(email);
      if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required' });
      }
      const user = await userService.checkExistsEmail(email);
      if (user) {
        return res.status(200).json({
          success: true,
          exists: true,
          message: 'Email already exists',
          user: {
            id: user.id,
            full_namename: user.name,
            email: user.email,
          },
        });
      } else {
        return res.status(200).json({
          success: true,
          exists: false,
          message: 'Email not found',
        });
      }
    } catch (error) {
      // console.error('Error checking email:', error);
      res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
  },

  createUser: async (req, res) => {
    try {
      const newUser = await userService.createUser(req.body);
      res.status(201).json({ success: true, message: 'User created successfully', user: newUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  resendVerification: async (req, res) => {
    try {
      const { userId } = req.query;
      const newUser = await userService.resendVerification(userId);
      res.status(200).json({ message: 'Resend verification link !', user: newUser });
    } catch (error) {
      res.status(500).json({ message: 'Resend failed: ' + error.message });
    }
  },

  verifyCreateUser: async (req, res) => {
    try {
      const { userId, otp } = req.query;
      const newUser = await userService.verifyCreateUser(userId, otp);
      res.status(200).json({ message: 'Account verified successfully!', user: newUser });
    } catch (error) {
      res.status(500).json({ message: 'Verification failed: ' + error.message });
    }
  },

  getAllUsersV2: async (req, res) => {
    try {
      const { page, limit, search, searchFields, ...filters } = req.body;
      const users = await userService.getAllUsersV2({ page, limit, search, searchFields, ...filters });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
      // res.status(200).json({ message: 'Fetch all users successfully', user: users });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(200).json({ message: 'User found successfully', user: user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const updatedUser = await userService.updateUser(req.params.id, req.body);
      if (updatedUser[0] === 0) return res.status(404).json({ message: 'User not found' });
      res.status(200).json({ message: 'User updated successfully', user: req.body });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const deleted = await userService.deleteUser(req.params.id);
      if (!deleted) return res.status(404).json({ message: 'User not found' });
      res.status(200).json({ message: 'User deleted successfully', user: req.params.id });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteUserRanges: async (req, res) => {
    try {
      const { start_id, end_id } = req.params;
      const start = parseInt(start_id, 10);
      const end = parseInt(end_id, 10);
      if (isNaN(start) || isNaN(end) || start > end) {
        return res.status(400).json({ error: 'Invalid ID range' });
      }
      const deletedCount = await userService.deleteUserRanges(start, end);
      return res.status(200).json({ message: `${deletedCount} users deleted successfully.` });
    } catch (error) {
      // console.error('Error deleting users:', error);
      return res.status(500).json({ error: 'An error occurred while deleting users' });
    }
  },

  // Get merged PDF file
  getMergedPdf: async (req, res) => {
    try {
      const { userId } = req.params;

      // Get the merged PDF from UserDocument table
      const mergedDocument = await UserDocument.findOne({
        where: {
          user_id: userId,
          document_type: 'merged_court_document',
          is_active: true,
        },
        order: [['createdAt', 'DESC']],
      });

      if (!mergedDocument) {
        return res.status(404).json({ error: 'Merged PDF not found' });
      }

      if (!fs.existsSync(mergedDocument.file_path)) {
        return res.status(404).json({ error: 'Merged PDF file not found on server' });
      }

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `inline; filename="${mergedDocument.file_name}"`);

      const fileStream = fs.createReadStream(mergedDocument.file_path);
      fileStream.pipe(res);
    } catch (error) {
      // console.error('Error getting merged PDF:', error);
      return res.status(500).json({ error: error.message });
    }
  },

  // Check merge status
  checkMergeStatus: async (req, res) => {
    try {
      const { userId } = req.params;
      const jobStatus = pdfMergeService.getJobStatus(userId);

      // Get the merged document from database
      const mergedDocument = await UserDocument.findOne({
        where: {
          user_id: userId,
          document_type: 'merged_court_document',
          is_active: true,
        },
        order: [['createdAt', 'DESC']],
      });

      return res.status(200).json({
        userId,
        jobStatus,
        mergedFile: mergedDocument
          ? {
              fileName: mergedDocument.file_name,
              fileSize: mergedDocument.file_size,
              description: mergedDocument.description,
              createdAt: mergedDocument.createdAt,
              documentType: mergedDocument.document_type,
            }
          : null,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      // console.error('Error checking merge status:', error);
      return res.status(500).json({ error: error.message });
    }
  },

  // Manual trigger for merge (for testing)
  triggerMerge: async (req, res) => {
    try {
      const { userId } = req.params;

      const mergeResult = await pdfMergeService.mergeUserPDFs(userId);
      return res.status(200).json(mergeResult);
    } catch (error) {
      // console.error('Error triggering merge:', error);
      return res.status(500).json({ error: error.message });
    }
  },

  // Manual trigger for cleanup (for testing)
  triggerCleanup: async (req, res) => {
    try {
      const { userId } = req.params;

      const cleanupResult = await pdfMergeService.cleanupOriginalPDFs(userId);
      return res.status(200).json(cleanupResult);
    } catch (error) {
      // console.error('Error triggering cleanup:', error);
      return res.status(500).json({ error: error.message });
    }
  },

  // Generate court document only (for testing)
  generateCourtDoc: async (req, res) => {
    try {
      const { userId } = req.params;

      // Get user data from database
      const userData = await userService.getUserById(userId);
      const caseData = await userService.getCaseByUserId(userId);

      const courtDocBuffer = await courtPdfService.generateSimplifiedCourtDocument(userData, caseData);

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="court_document_${userId}.pdf"`);
      res.send(courtDocBuffer);
    } catch (error) {
      // console.error('Error generating court document:', error);
      return res.status(500).json({ error: error.message });
    }
  },

  // Test environment
  testEnv: async (req, res) => {
    try {
      return res.status(200).json({
        UPLOAD_DIR,
        FRONTEND_URL,
        NODE_ENV: process.env.NODE_ENV,
        uploadPathExists: fs.existsSync(UPLOAD_DIR),
        currentDir: __dirname,
        rootDir: path.join(__dirname, '../../..'),
      });
    } catch (error) {
      // console.error('Error in testEnv:', error);
      return res.status(500).json({ error: error.message });
    }
  },

  // NEW: Clean up all temporary files for a user (manual cleanup endpoint)
  cleanupUserFiles: async (req, res) => {
    try {
      const { userId } = req.params;

      const userFolder = path.join(UPLOAD_DIR, userId.toString());
      let deletedCount = 0;
      let errorCount = 0;

      if (fs.existsSync(userFolder)) {
        // console.log(`🧹 Manual cleanup for user ${userId}`);

        // Delete all files in user folder except merged court documents
        const files = fs.readdirSync(userFolder);
        files.forEach(file => {
          try {
            const filePath = path.join(userFolder, file);
            if (fs.statSync(filePath).isFile() && !file.includes('merged_court_document')) {
              fs.unlinkSync(filePath);
              deletedCount++;
              // console.log(`  ✅ Deleted: ${file}`);
            }
          } catch (error) {
            errorCount++;
            // console.error(`  ❌ Failed to delete ${file}:`, error.message);
          }
        });

        // ✅ OPTIMIZED: Delete entire temp_documents directory at once
        const tempDocsFolder = path.join(userFolder, 'temp_documents');
        if (fs.existsSync(tempDocsFolder)) {
          // console.log(`  🗑️ Deleting entire temp_documents directory`);
          fs.rmSync(tempDocsFolder, { recursive: true, force: true });
          // console.log(`  ✅ Successfully deleted temp_documents directory`);
          deletedCount++; // Count the directory deletion as one operation
        }
      }

      return res.status(200).json({
        message: 'Manual cleanup completed',
        deletedCount,
        errorCount,
        userId,
      });
    } catch (error) {
      // console.error('Error in manual cleanup:', error);
      return res.status(500).json({ error: error.message });
    }
  },
};

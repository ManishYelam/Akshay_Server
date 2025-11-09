const studentService = require('../Services/studentService');

module.exports = {
  // 📊 Get Student Dashboard
  getDashboard: async (req, res) => {
    try {
      const data = await studentService.getDashboard(req.user);
      res.json({ success: true, data });
    } catch (error) {
      console.error('❌ Error in getDashboard:', error);
      res.status(500).json({ success: false, message: 'Failed to load dashboard', error: error.message });
    }
  },

  // 📚 Get My Courses
  getMyCourses: async (req, res) => {
    try {
      const data = await studentService.getMyCourses(req.user, req.query);
      res.json({ success: true, data: data.enrollments, pagination: data.pagination });
    } catch (error) {
      console.error('❌ Error in getMyCourses:', error);
      res.status(500).json({ success: false, message: 'Failed to load courses', error: error.message });
    }
  },

  // 🎯 Get Course Progress
  getCourseProgress: async (req, res) => {
    try {
      const { courseId } = req.params;
      const result = await studentService.getCourseProgress(req.user, courseId);

      if (!result) {
        return res.status(404).json({ success: false, message: 'Enrollment not found' });
      }

      res.json({ success: true, data: result });
    } catch (error) {
      console.error('❌ Error in getCourseProgress:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch course progress', error: error.message });
    }
  },

  // 🔄 Update Progress
  updateProgress: async (req, res) => {
    try {
      const { courseId } = req.params;
      const { progress } = req.body;

      const enrollment = await studentService.updateProgress(req.user, courseId, progress);

      if (!enrollment) {
        return res.status(404).json({ success: false, message: 'Enrollment not found' });
      }

      res.json({ success: true, message: 'Progress updated successfully', data: enrollment });
    } catch (error) {
      console.error('❌ Error in updateProgress:', error);
      res.status(500).json({ success: false, message: 'Failed to update progress', error: error.message });
    }
  },

  // 🎓 Get Certificates
  getCertificates: async (req, res) => {
    try {
      const data = await studentService.getCertificates(req.user);
      res.json({ success: true, data });
    } catch (error) {
      console.error('❌ Error in getCertificates:', error);
      res.status(500).json({ success: false, message: 'Failed to load certificates', error: error.message });
    }
  },
};

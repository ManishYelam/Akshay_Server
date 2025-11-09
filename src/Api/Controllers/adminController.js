const adminService = require('../Services/adminService');

module.exports = {
  // ----- 📊 Dashboard -----
  getDashboard: async (req, res) => {
    try {
      const dashboardData = await adminService.getDashboardData();
      res.status(200).json({
        success: true,
        data: dashboardData,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to load dashboard data',
      });
    }
  },

  // ----- 🎓 Get Students -----
  getStudents: async (req, res) => {
    try {
      const data = await adminService.getStudentsList(req.query);
      res.status(200).json({
        success: true,
        ...data,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to fetch students list',
      });
    }
  },
};

const CourseService = require('../Services/courseService');

module.exports = {
  // 📘 Get all courses
  getAllCourses: async (req, res) => {
    try {
      let { page = 1, limit = 10, search = '', searchFields = [], filters = {} } = req.body;

      page = parseInt(page);
      limit = parseInt(limit);

      if (typeof searchFields === 'string') {
        searchFields = searchFields.split(',').map(f => f.trim());
      }

      if (typeof filters !== 'object') {
        filters = {};
      }

      const response = await CourseService.getAllCourses({
        page,
        limit,
        search,
        searchFields,
        filters,
      });

      return res.status(200).json(response);
    } catch (error) {
      console.error('❌ Error in getAllCourses:', error);
      return res.status(500).json({
        message: '❌ Error fetching courses.',
        error: error.message,
      });
    }
  },

  // 🎓 Get course by ID
  getCourseById: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await CourseService.getCourseById(id);

      if (!course) {
        return res.status(404).json({
          success: false,
          message: 'Course not found',
        });
      }

      res.json({
        success: true,
        data: course,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message || 'Error retrieving course',
      });
    }
  },

  // 🧭 Get course by slug
  getCourseBySlug: async (req, res) => {
    try {
      const { slug } = req.params;
      const course = await CourseService.getCourseBySlug(slug);

      if (!course) {
        return res.status(404).json({
          success: false,
          message: 'Course not found',
        });
      }

      res.json({
        success: true,
        data: course,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message || 'Error retrieving course',
      });
    }
  },

  // ✏️ Create new course
  createCourse: async (req, res) => {
    try {
      const course = await CourseService.createCourse(req.body);

      res.status(201).json({
        success: true,
        message: 'Course created successfully',
        data: course,
      });
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({
          success: false,
          message: 'Course with this title already exists',
        });
      }
      res.status(500).json({
        success: false,
        message: error.message || 'Error creating course',
      });
    }
  },

  // 🔄 Update course
  updateCourse: async (req, res) => {
    try {
      const course = await CourseService.updateCourse(req.params, req.body);
      if (!course) {
        return res.status(404).json({
          success: false,
          message: 'Course not found',
        });
      }

      res.json({
        success: true,
        message: 'Course updated successfully',
        data: course,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message || 'Error updating course',
      });
    }
  },

  // 🌟 Get featured courses
  getFeaturedCourses: async (req, res) => {
    try {
      const courses = await CourseService.getFeaturedCourses();
      res.json({
        success: true,
        data: courses,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message || 'Error fetching featured courses',
      });
    }
  },
};

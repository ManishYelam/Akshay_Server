const { Op } = require('sequelize');
const slugify = require('slugify');
const { Course, Testimonial, User } = require('../Models/Association');

module.exports = {
  // 📘 Get all courses (with pagination, filters, and search)
  getAllCourses: async ({ page, limit, search, searchFields, filters }) => {
    try {
      const whereClause = {
        is_active: true,
      };

      const offset = (page - 1) * limit;

      const { level, mode, featured, sortBy = 'course_id', sortOrder = 'DESC' } = filters;

      if (level) whereClause.level = level;
      if (mode) whereClause.mode = mode;
      if (featured !== undefined) whereClause.featured = featured === true;

      if (search && Array.isArray(searchFields) && searchFields.length > 0) {
        whereClause[Op.or] = searchFields.map(field => ({
          [field]: { [Op.like]: `%${search}%` },
        }));
      }

      const { count, rows: courses } = await Course.findAndCountAll({
        where: whereClause,
        limit,
        offset,
        order: [[sortBy, sortOrder]],
        attributes: {
          exclude: ['metadata', 'syllabus_pdf'],
        },
      });

      return {
        success: true,
        courses,
        pagination: {
          page,
          limit,
          totalItems: count,
          totalPages: Math.ceil(count / limit),
        },
      };
    } catch (error) {
      console.error('❌ Error in CourseService.getAllCourses:', error);
      throw new Error(error.message);
    }
  },

  // 🎓 Get course by ID
  getCourseById: async id => {
    const course = await Course.findByPk(id, {
      include: [
        {
          model: Testimonial,
          as: 'testimonials',
          where: { is_approved: true },
          required: false,
          include: [
            {
              model: User,
              attributes: ['name', 'company', 'profile_image'],
            },
          ],
        },
      ],
    });

    if (!course) return null;

    await course.increment('view_count', { by: 1 });
    return course;
  },

  // 🧭 Get course by slug
  getCourseBySlug: async slug => {
    const course = await Course.findOne({
      where: { slug },
      include: [
        {
          model: Testimonial,
          as: 'testimonials',
          where: { is_approved: true },
          required: false,
          include: [
            {
              model: User,
              attributes: ['name', 'company', 'profile_image'],
            },
          ],
        },
      ],
    });

    if (!course) return null;

    await course.increment('view_count', { by: 1 });
    return course;
  },

  // ✏️ Create new course
  createCourse: async value => {
    const slug = slugify(value.title, {
      lower: true,
      strict: true,
    });

    const courseData = { ...value, slug };
    const course = await Course.create(courseData);
    return course;
  },

  // 🔄 Update course
  updateCourse: async (id, value) => {
    const course = await Course.findByPk(id);
    if (!course) return null;

    if (value.title && value.title !== course.title) {
      value.slug = slugify(value.title, {
        lower: true,
        strict: true,
      });
    }

    await course.update(value);
    return course;
  },

  // 🌟 Get featured courses
  getFeaturedCourses: async () => {
    const courses = await Course.findAll({
      where: {
        featured: true,
        is_active: true,
      },
      limit: 6,
      order: [['created_at', 'DESC']],
      attributes: {
        exclude: ['metadata', 'syllabus_pdf'],
      },
    });

    return courses;
  },
};

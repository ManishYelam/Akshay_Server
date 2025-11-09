const { Enrollment, Course, Payment, User } = require('../Models/Association');

module.exports = {
  // 📊 Get Student Dashboard
  getDashboard: async user => {
    const userId = user.id;

    const enrollments = await Enrollment.findAll({
      where: { user_id: userId },
      include: [
        {
          model: Course,
          attributes: ['id', 'title', 'slug', 'thumbnail_image', 'duration', 'level'],
        },
      ],
      order: [['enrollment_date', 'DESC']],
    });

    const activeCourses = enrollments.filter(e => e.status === 'active').length;
    const completedCourses = enrollments.filter(e => e.status === 'completed').length;

    const recentPayments = await Payment.findAll({
      include: [
        {
          model: Enrollment,
          as: 'enrollment',
          where: { user_id: userId },
          include: [{ model: Course, attributes: ['title'] }],
        },
      ],
      limit: 5,
      order: [['created_at', 'DESC']],
    });

    const totalProgress = enrollments.reduce((sum, e) => sum + e.progress, 0);
    const averageProgress = enrollments.length > 0 ? totalProgress / enrollments.length : 0;

    return {
      overview: {
        total_courses: enrollments.length,
        active_courses: activeCourses,
        completed_courses: completedCourses,
        average_progress: Math.round(averageProgress),
        next_class: null,
      },
      recent_enrollments: enrollments.slice(0, 5),
      recent_payments: recentPayments,
      learning_stats: {
        total_study_hours: 0,
        last_active: user.last_login,
        streak_days: 0,
      },
    };
  },

  // 📚 Get My Courses
  getMyCourses: async (user, { status, page = 1, limit = 10 }) => {
    const userId = user.id;
    const offset = (page - 1) * limit;

    const whereClause = { user_id: userId };
    if (status) whereClause.status = status;

    const { count, rows: enrollments } = await Enrollment.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: Course,
          attributes: ['id', 'title', 'slug', 'thumbnail_image', 'duration', 'level', 'mode'],
        },
      ],
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['enrollment_date', 'DESC']],
    });

    return {
      enrollments,
      pagination: {
        current: parseInt(page),
        total: Math.ceil(count / limit),
        totalItems: count,
        itemsPerPage: parseInt(limit),
      },
    };
  },

  // 🎯 Get Course Progress
  getCourseProgress: async (user, courseId) => {
    const userId = user.id;

    const enrollment = await Enrollment.findOne({
      where: { user_id: userId, course_id: courseId },
      include: [
        {
          model: Course,
          include: [
            {
              model: User,
              as: 'instructor',
              attributes: ['id', 'name', 'email', 'profile_image'],
            },
          ],
        },
        {
          model: Payment,
          attributes: ['amount', 'payment_date', 'status'],
        },
      ],
    });

    if (!enrollment) return null;

    const learningData = {
      progress: enrollment.progress,
      completed_modules: Math.floor(enrollment.progress / 20),
      total_modules: 5,
      last_accessed: new Date(),
      time_spent: '15h 30m',
      assignments_completed: 3,
      total_assignments: 8,
      next_deadline: '2024-12-30',
      recent_activities: [
        {
          type: 'video_watch',
          title: 'ABAP Data Types and Declarations',
          time: '2 hours ago',
          duration: '45 min',
        },
        {
          type: 'assignment',
          title: 'Module 1 Assignment Submitted',
          time: '1 day ago',
          status: 'graded',
        },
      ],
    };

    return { enrollment, learning_data: learningData };
  },

  // 🔄 Update Progress
  updateProgress: async (user, courseId, progress) => {
    const userId = user.id;

    const enrollment = await Enrollment.findOne({
      where: { user_id: userId, course_id: courseId },
    });

    if (!enrollment) return null;

    const newProgress = Math.min(Math.max(progress, 0), 100);

    await enrollment.update({
      progress: newProgress,
      ...(newProgress === 100 && { status: 'completed', completion_date: new Date() }),
    });

    return enrollment;
  },

  // 🎓 Get Certificates
  getCertificates: async user => {
    const userId = user.id;

    const completedEnrollments = await Enrollment.findAll({
      where: { user_id: userId, status: 'completed' },
      include: [
        {
          model: Course,
          attributes: ['id', 'title', 'duration', 'level'],
        },
      ],
      order: [['completion_date', 'DESC']],
    });

    return completedEnrollments.map(enrollment => ({
      id: `CERT-${enrollment.id}`,
      course_title: enrollment.Course.title,
      student_name: user.name,
      completion_date: enrollment.completion_date,
      certificate_url: `/certificates/${enrollment.id}.pdf`,
      verification_code: `VER-${enrollment.id.toString().slice(0, 8).toUpperCase()}`,
    }));
  },
};

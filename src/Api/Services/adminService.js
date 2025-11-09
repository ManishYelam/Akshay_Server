const { User, Course, Enrollment, Payment, Testimonial } = require('../Models/Association');
const { Op, Sequelize } = require('sequelize');

const adminService = {
  // ----- Dashboard -----
  getDashboardData: async () => {
    const totalStudents = await User.count({ where: { role: 'student' } });
    const totalCourses = await Course.count();
    const totalEnrollments = await Enrollment.count();
    const totalRevenue = await Payment.sum('amount', { where: { status: 'completed' } });

    const recentEnrollments = await Enrollment.findAll({
      include: [
        { model: User, attributes: ['name', 'email'] },
        { model: Course, attributes: ['title'] },
      ],
      limit: 10,
      order: [['enrollment_date', 'DESC']],
    });

    const revenueData = await Payment.findAll({
      attributes: [
        [Sequelize.fn('DATE_FORMAT', Sequelize.col('payment_date'), '%Y-%m'), 'month'],
        [Sequelize.fn('SUM', Sequelize.col('amount')), 'revenue'],
      ],
      where: {
        status: 'completed',
        payment_date: {
          [Op.gte]: new Date(new Date().setMonth(new Date().getMonth() - 6)),
        },
      },
      group: ['month'],
      order: [['month', 'ASC']],
    });

    const coursePerformance = await Course.findAll({
      attributes: [
        'id',
        'title',
        [Sequelize.fn('COUNT', Sequelize.col('enrollments.id')), 'enrollment_count'],
        [Sequelize.fn('AVG', Sequelize.col('enrollments.progress')), 'avg_progress'],
      ],
      include: [{ model: Enrollment, attributes: [] }],
      group: ['Course.id'],
      order: [[Sequelize.literal('enrollment_count'), 'DESC']],
      limit: 5,
    });

    const pendingApprovals = await Testimonial.count({ where: { is_approved: false } });

    return {
      overview: {
        total_students: totalStudents,
        total_courses: totalCourses,
        total_enrollments: totalEnrollments,
        total_revenue: totalRevenue || 0,
        monthly_revenue: 0,
        conversion_rate: 0,
      },
      recent_enrollments: recentEnrollments,
      revenue_analytics: revenueData,
      course_performance: coursePerformance,
      quick_stats: {
        pending_approvals: pendingApprovals,
        active_sessions: 0,
        support_tickets: 0,
      },
    };
  },

  // ----- Student List -----
  getStudentsList: async query => {
    const { page = 1, limit = 10, search, status, sortBy = 'created_at', sortOrder = 'DESC' } = query;

    const offset = (page - 1) * limit;
    const whereClause = { role: 'student' };

    if (search) {
      whereClause[Op.or] = [
        { name: { [Op.like]: `%${search}%` } },
        { email: { [Op.like]: `%${search}%` } },
        { company: { [Op.like]: `%${search}%` } },
      ];
    }

    if (status === 'active') whereClause.is_active = true;
    if (status === 'inactive') whereClause.is_active = false;

    const { count, rows: students } = await User.findAndCountAll({
      where: whereClause,
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Enrollment,
          attributes: ['id', 'status', 'enrollment_date'],
          include: [{ model: Course, attributes: ['title'] }],
        },
      ],
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [[sortBy, sortOrder.toUpperCase()]],
    });

    return {
      students,
      pagination: {
        current: parseInt(page),
        total: Math.ceil(count / limit),
        totalItems: count,
        itemsPerPage: parseInt(limit),
      },
    };
  },
};

module.exports = adminService;

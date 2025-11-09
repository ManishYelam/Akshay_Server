// seeders/course-seeders.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../Config/Database/sequelize.config');
const Course = require('./Course');

const courseSeedData = [
  {
    course_id: 1,
    title: 'SAP ABAP Programming for Beginners',
    slug: 'sap-abap-programming-beginners',
    description:
      'Learn SAP ABAP programming from scratch. This comprehensive course covers all the fundamental concepts of ABAP programming including data types, internal tables, modularization techniques, and dialog programming. Perfect for beginners with no prior SAP experience.',
    short_description: 'Master SAP ABAP programming fundamentals with hands-on exercises and real-world examples.',
    duration: '3 Months',
    fee: 15000.0,
    original_fee: 20000.0,
    mode: 'online_live',
    level: 'beginner',
    syllabus_pdf: '/syllabus/abap-beginners-syllabus.pdf',
    thumbnail_image: '/images/courses/abap-beginners.jpg',
    featured: true,
    is_active: true,
    seats_available: 30,
    view_count: 245,
    metadata: {
      modules: [
        'Introduction to SAP and ABAP',
        'ABAP Data Types and Variables',
        'Internal Tables and Work Areas',
        'Modularization Techniques',
        'Debugging and Error Handling',
      ],
      prerequisites: ['Basic programming knowledge', 'Understanding of database concepts', 'No prior SAP experience required'],
      learning_objectives: [
        'Write basic ABAP programs',
        'Understand SAP data dictionary',
        'Create reports using internal tables',
        'Implement modularization techniques',
        'Debug and troubleshoot ABAP code',
      ],
      curriculum: [
        {
          module: 'Introduction',
          topics: ['SAP Architecture', 'ABAP Workbench', 'First ABAP Program'],
        },
        {
          module: 'Data Types',
          topics: ['Elementary Data Types', 'Complex Data Types', 'Type Groups'],
        },
      ],
    },
  },
  {
    course_id: 2,
    title: 'Advanced ABAP Programming and Performance Optimization',
    slug: 'advanced-abap-programming-performance',
    description:
      'Take your ABAP skills to the next level with advanced programming techniques, performance optimization, and best practices. Learn about object-oriented ABAP, ALV reporting, BAPIs, RFCs, and performance tuning methods.',
    short_description: 'Advanced ABAP techniques, performance optimization, and enterprise-level programming.',
    duration: '4 Months',
    fee: 25000.0,
    original_fee: 30000.0,
    mode: 'online_live',
    level: 'advanced',
    syllabus_pdf: '/syllabus/advanced-abap-syllabus.pdf',
    thumbnail_image: '/images/courses/advanced-abap.jpg',
    featured: true,
    is_active: true,
    seats_available: 25,
    view_count: 187,
    metadata: {
      modules: [
        'Object-Oriented ABAP',
        'ALV Reporting Advanced Techniques',
        'Performance Optimization',
        'BAPIs and RFC Programming',
        'Enhancement Framework',
      ],
      prerequisites: ['Basic ABAP knowledge', '6 months of ABAP experience', 'Understanding of SAP modules'],
      learning_objectives: [
        'Implement OO ABAP concepts',
        'Create advanced ALV reports',
        'Optimize ABAP program performance',
        'Develop and consume BAPIs',
        'Use enhancement framework',
      ],
      curriculum: [
        {
          module: 'OO ABAP',
          topics: ['Classes and Objects', 'Inheritance', 'Polymorphism', 'Interfaces'],
        },
        {
          module: 'Performance',
          topics: ['SQL Optimization', 'Buffer Settings', 'Runtime Analysis'],
        },
      ],
    },
  },
  {
    course_id: 3,
    title: 'SAP ABAP on HANA',
    slug: 'sap-abap-hana',
    description:
      'Master ABAP programming in SAP HANA environment. Learn about Code Pushdown, AMDP, CDS views, and new programming paradigms in S/4HANA. This course focuses on optimizing ABAP code for HANA database.',
    short_description: 'ABAP programming optimized for SAP HANA with Code Pushdown and new S/4HANA paradigms.',
    duration: '3 Months',
    fee: 30000.0,
    original_fee: 35000.0,
    mode: 'hybrid',
    level: 'intermediate',
    syllabus_pdf: '/syllabus/abap-hana-syllabus.pdf',
    thumbnail_image: '/images/courses/abap-hana.jpg',
    featured: false,
    is_active: true,
    seats_available: 20,
    view_count: 156,
    metadata: {
      modules: [
        'Introduction to SAP HANA',
        'Code Pushdown Techniques',
        'AMDP (ABAP Managed Database Procedures)',
        'CDS Views in ABAP',
        'Optimizing for S/4HANA',
      ],
      prerequisites: ['Intermediate ABAP knowledge', 'Basic understanding of databases', 'Familiarity with SAP NetWeaver'],
      learning_objectives: [
        'Understand HANA architecture',
        'Implement Code Pushdown',
        'Create and use AMDPs',
        'Develop CDS views',
        'Optimize programs for HANA',
      ],
      curriculum: [
        {
          module: 'HANA Basics',
          topics: ['HANA Architecture', 'In-Memory Computing', 'Column vs Row Storage'],
        },
        {
          module: 'Code Pushdown',
          topics: ['Open SQL Enhancements', 'ABAP CDS', 'Database Procedures'],
        },
      ],
    },
  },
  {
    course_id: 4,
    title: 'ABAP Web Dynpro and Fiori Development',
    slug: 'abap-web-dynpro-fiori',
    description:
      'Learn to develop modern user interfaces using ABAP Web Dynpro and integrate with SAP Fiori apps. This course covers UI development, OData services, and Fiori elements for creating responsive business applications.',
    short_description: 'Modern UI development with ABAP Web Dynpro and SAP Fiori integration.',
    duration: '2.5 Months',
    fee: 18000.0,
    original_fee: 22000.0,
    mode: 'online_self_paced',
    level: 'intermediate',
    syllabus_pdf: '/syllabus/web-dynpro-fiori-syllabus.pdf',
    thumbnail_image: '/images/courses/web-dynpro-fiori.jpg',
    featured: false,
    is_active: true,
    seats_available: 35,
    view_count: 98,
    metadata: {
      modules: [
        'Web Dynpro Fundamentals',
        'UI Element Programming',
        'OData Service Development',
        'Fiori Apps Configuration',
        'UI5 Integration',
      ],
      prerequisites: ['Basic ABAP knowledge', 'Understanding of MVC pattern', 'Web development basics'],
      learning_objectives: [
        'Create Web Dynpro components',
        'Develop OData services',
        'Configure Fiori apps',
        'Integrate with UI5',
        'Deploy web applications',
      ],
      curriculum: [
        {
          module: 'Web Dynpro',
          topics: ['Component Structure', 'Context Programming', 'UI Elements', 'Navigation'],
        },
        {
          module: 'OData',
          topics: ['Service Creation', 'Entity Types', 'Associations', 'Function Imports'],
        },
      ],
    },
  },
  {
    course_id: 5,
    title: 'SAP Workflow and BRF+ in ABAP',
    slug: 'sap-workflow-brf-abap',
    description:
      'Comprehensive course on implementing business workflows and business rules in SAP using Workflow and BRF+. Learn to automate business processes and create flexible rule-based applications.',
    short_description: 'Automate business processes with SAP Workflow and implement business rules with BRF+.',
    duration: '2 Months',
    fee: 22000.0,
    original_fee: 28000.0,
    mode: 'online_live',
    level: 'advanced',
    syllabus_pdf: '/syllabus/workflow-brf-syllabus.pdf',
    thumbnail_image: '/images/courses/workflow-brf.jpg',
    featured: true,
    is_active: true,
    seats_available: 15,
    view_count: 76,
    metadata: {
      modules: [
        'SAP Workflow Foundation',
        'Workflow Builder and Custom Tasks',
        'BRF+ Rule Modeling',
        'Integration with ABAP',
        'Monitoring and Troubleshooting',
      ],
      prerequisites: ['Intermediate ABAP programming', 'Understanding of business processes', 'Basic knowledge of SAP modules'],
      learning_objectives: [
        'Design and implement workflows',
        'Create custom workflow tasks',
        'Model business rules in BRF+',
        'Integrate workflows with ABAP',
        'Monitor workflow processes',
      ],
      curriculum: [
        {
          module: 'Workflow Basics',
          topics: ['Workflow Architecture', 'Standard Tasks', 'Container Elements', 'Agents Determination'],
        },
        {
          module: 'BRF+',
          topics: ['Rule Modeling', 'Decision Tables', 'Expressions', 'Rule Execution'],
        },
      ],
    },
  },
  {
    course_id: 6,
    title: 'ABAP Debugging and Testing Techniques',
    slug: 'abap-debugging-testing',
    description:
      'Master debugging techniques and testing methodologies for ABAP programs. Learn systematic approaches to identify and fix bugs, implement unit testing, and ensure code quality.',
    short_description: 'Comprehensive debugging and testing strategies for ABAP developers.',
    duration: '1.5 Months',
    fee: 12000.0,
    original_fee: 15000.0,
    mode: 'online_self_paced',
    level: 'beginner',
    syllabus_pdf: '/syllabus/debugging-testing-syllabus.pdf',
    thumbnail_image: '/images/courses/debugging-testing.jpg',
    featured: false,
    is_active: true,
    seats_available: 50,
    view_count: 134,
    metadata: {
      modules: [
        'ABAP Debugger Advanced Features',
        'Systematic Debugging Approaches',
        'ABAP Unit Testing',
        'Test-Driven Development',
        'Code Quality and Performance',
      ],
      prerequisites: ['Basic ABAP knowledge', 'Familiarity with ABAP Workbench', 'Understanding of programming concepts'],
      learning_objectives: [
        'Use ABAP debugger effectively',
        'Implement systematic debugging',
        'Write ABAP unit tests',
        'Apply test-driven development',
        'Ensure code quality standards',
      ],
      curriculum: [
        {
          module: 'Debugging',
          topics: ['New Debugger Features', 'Watchpoints', 'Breakpoints', 'Debugging Script'],
        },
        {
          module: 'Testing',
          topics: ['ABAP Unit Framework', 'Test Classes', 'Mock Objects', 'Test Coverage'],
        },
      ],
    },
  },
  {
    course_id: 7,
    title: 'SAP ABAP for SAP FICO Integration',
    slug: 'abap-fico-integration',
    description:
      'Learn to develop custom ABAP programs for SAP FICO module. Focus on integration techniques, custom reports, enhancements, and interfaces specific to Financial Accounting and Controlling.',
    short_description: 'ABAP development specifically for SAP FICO module integration and customization.',
    duration: '3 Months',
    fee: 28000.0,
    original_fee: 32000.0,
    mode: 'online_live',
    level: 'intermediate',
    syllabus_pdf: '/syllabus/abap-fico-syllabus.pdf',
    thumbnail_image: '/images/courses/abap-fico.jpg',
    featured: false,
    is_active: true,
    seats_available: 18,
    view_count: 89,
    metadata: {
      modules: [
        'FICO Module Overview',
        'Financial Data Structures',
        'Custom Reports for Accounting',
        'Enhancement Techniques',
        'Interface Development',
      ],
      prerequisites: ['Intermediate ABAP skills', 'Basic understanding of SAP FICO', 'Knowledge of accounting principles'],
      learning_objectives: [
        'Understand FICO data structures',
        'Develop custom financial reports',
        'Implement FICO enhancements',
        'Create accounting interfaces',
        'Integrate with financial processes',
      ],
      curriculum: [
        {
          module: 'FICO Basics',
          topics: ['GL Accounts', 'Cost Centers', 'Profit Centers', 'Financial Documents'],
        },
        {
          module: 'Development',
          topics: ['BAPI for Accounting', 'User Exits', 'BADI Implementation', 'IDoc Processing'],
        },
      ],
    },
  },
  {
    course_id: 8,
    title: 'ABAP Data Dictionary and Database Programming',
    slug: 'abap-data-dictionary-database',
    description:
      'Deep dive into ABAP Data Dictionary concepts and advanced database programming techniques. Learn to create and maintain database objects, optimize SQL statements, and implement complex data models.',
    short_description: 'Master ABAP Data Dictionary and advanced database programming techniques.',
    duration: '2 Months',
    fee: 16000.0,
    original_fee: 20000.0,
    mode: 'online_self_paced',
    level: 'intermediate',
    syllabus_pdf: '/syllabus/dictionary-database-syllabus.pdf',
    thumbnail_image: '/images/courses/dictionary-database.jpg',
    featured: false,
    is_active: true,
    seats_available: 40,
    view_count: 112,
    metadata: {
      modules: [
        'Data Dictionary Fundamentals',
        'Database Table Design',
        'Views and Maintenance Views',
        'SQL Optimization',
        'Database Locks and Consistency',
      ],
      prerequisites: ['Basic ABAP knowledge', 'Understanding of database concepts', 'Familiarity with SQL'],
      learning_objectives: [
        'Design and create database tables',
        'Implement data dictionary objects',
        'Optimize database access',
        'Handle database locks',
        'Ensure data consistency',
      ],
      curriculum: [
        {
          module: 'Data Dictionary',
          topics: ['Table Types', 'Domains and Data Elements', 'Search Helps', 'Lock Objects'],
        },
        {
          module: 'Database Programming',
          topics: ['Open SQL', 'Native SQL', 'Database Cursors', 'Performance Tuning'],
        },
      ],
    },
  },
];

const seedCourses = async () => {
  try {
    // Sync the model
    await sequelize.MAIN_DB_NAME.sync({ force: false });

    console.log('Starting course seeding...');

    // Bulk create courses
    for (const courseData of courseSeedData) {
      const existingCourse = await Course.findOne({
        where: { slug: courseData.slug },
      });

      if (!existingCourse) {
        await Course.create(courseData);
        console.log(`Created course: ${courseData.title}`);
      } else {
        console.log(`Course already exists: ${courseData.title}`);
      }
    }

    console.log('Course seeding completed successfully!');

    // Test the discount percentage method
    const testCourse = await Course.findOne();
    if (testCourse) {
      console.log(`Discount for ${testCourse.title}: ${testCourse.getDiscountPercentage()}%`);
    }
  } catch (error) {
    console.error('Error seeding courses:', error);
  } finally {
    await sequelize.MAIN_DB_NAME.close();
  }
};

seedCourses();

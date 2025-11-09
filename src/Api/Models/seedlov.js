// seeders/list-of-values-seed.js

const ListOfValues = require('./List.Of.values');

const generateLOVSeedData = () => {
  return [
    // Course Related LOVs
    {
      category: 'COURSE_LEVEL',
      code: 'BEGINNER',
      description: 'Beginner Level Courses',
      isActive: true,
    },
    {
      category: 'COURSE_LEVEL',
      code: 'INTERMEDIATE',
      description: 'Intermediate Level Courses',
      isActive: true,
    },
    {
      category: 'COURSE_LEVEL',
      code: 'ADVANCED',
      description: 'Advanced Level Courses',
      isActive: true,
    },
    {
      category: 'COURSE_MODE',
      code: 'ONLINE_LIVE',
      description: 'Online Live Sessions',
      isActive: true,
    },
    {
      category: 'COURSE_MODE',
      code: 'ONLINE_SELF_PACED',
      description: 'Self-Paced Online Learning',
      isActive: true,
    },
    {
      category: 'COURSE_MODE',
      code: 'HYBRID',
      description: 'Hybrid (Online + Offline)',
      isActive: true,
    },
    {
      category: 'COURSE_MODE',
      code: 'CLASSROOM',
      description: 'Classroom Training',
      isActive: false,
    },

    // User Management LOVs
    {
      category: 'USER_ROLE',
      code: 'STUDENT',
      description: 'Student User',
      isActive: true,
    },
    {
      category: 'USER_ROLE',
      code: 'INSTRUCTOR',
      description: 'Instructor/Teacher',
      isActive: true,
    },
    {
      category: 'USER_ROLE',
      code: 'ADMIN',
      description: 'Administrator',
      isActive: true,
    },
    {
      category: 'USER_STATUS',
      code: 'ACTIVE',
      description: 'Active User',
      isActive: true,
    },
    {
      category: 'USER_STATUS',
      code: 'INACTIVE',
      description: 'Inactive User',
      isActive: true,
    },
    {
      category: 'USER_STATUS',
      code: 'SUSPENDED',
      description: 'Suspended User',
      isActive: true,
    },

    // Enrollment & Payment LOVs
    {
      category: 'ENROLLMENT_STATUS',
      code: 'PENDING',
      description: 'Enrollment Pending',
      isActive: true,
    },
    {
      category: 'ENROLLMENT_STATUS',
      code: 'ACTIVE',
      description: 'Active Enrollment',
      isActive: true,
    },
    {
      category: 'ENROLLMENT_STATUS',
      code: 'COMPLETED',
      description: 'Course Completed',
      isActive: true,
    },
    {
      category: 'ENROLLMENT_STATUS',
      code: 'CANCELLED',
      description: 'Enrollment Cancelled',
      isActive: true,
    },
    {
      category: 'ENROLLMENT_STATUS',
      code: 'EXPIRED',
      description: 'Enrollment Expired',
      isActive: true,
    },
    {
      category: 'PAYMENT_STATUS',
      code: 'PENDING',
      description: 'Payment Pending',
      isActive: true,
    },
    {
      category: 'PAYMENT_STATUS',
      code: 'COMPLETED',
      description: 'Payment Completed',
      isActive: true,
    },
    {
      category: 'PAYMENT_STATUS',
      code: 'FAILED',
      description: 'Payment Failed',
      isActive: true,
    },
    {
      category: 'PAYMENT_STATUS',
      code: 'REFUNDED',
      description: 'Payment Refunded',
      isActive: true,
    },
    {
      category: 'PAYMENT_METHOD',
      code: 'RAZORPAY',
      description: 'Razorpay Payment Gateway',
      isActive: true,
    },
    {
      category: 'PAYMENT_METHOD',
      code: 'STRIPE',
      description: 'Stripe Payment Gateway',
      isActive: true,
    },
    {
      category: 'PAYMENT_METHOD',
      code: 'PAYPAL',
      description: 'PayPal Payment Gateway',
      isActive: true,
    },
    {
      category: 'PAYMENT_METHOD',
      code: 'BANK_TRANSFER',
      description: 'Bank Transfer',
      isActive: true,
    },

    // Course Categories & Topics LOVs
    {
      category: 'COURSE_CATEGORY',
      code: 'CORE_ABAP',
      description: 'Core ABAP Programming',
      isActive: true,
    },
    {
      category: 'COURSE_CATEGORY',
      code: 'OO_ABAP',
      description: 'Object-Oriented ABAP',
      isActive: true,
    },
    {
      category: 'COURSE_CATEGORY',
      code: 'ABAP_HANA',
      description: 'ABAP on HANA',
      isActive: true,
    },
    {
      category: 'COURSE_CATEGORY',
      code: 'ADVANCED_ABAP',
      description: 'Advanced ABAP Concepts',
      isActive: true,
    },
    {
      category: 'COURSE_CATEGORY',
      code: 'SAP_UI5',
      description: 'SAP UI5/Fiori Development',
      isActive: true,
    },
    {
      category: 'TECHNOLOGY',
      code: 'SAP_ECC',
      description: 'SAP ECC',
      isActive: true,
    },
    {
      category: 'TECHNOLOGY',
      code: 'SAP_S4HANA',
      description: 'SAP S/4HANA',
      isActive: true,
    },
    {
      category: 'TECHNOLOGY',
      code: 'SAP_FIORI',
      description: 'SAP Fiori',
      isActive: true,
    },
    {
      category: 'TECHNOLOGY',
      code: 'SAP_BTP',
      description: 'SAP Business Technology Platform',
      isActive: true,
    },

    // Assessment & Progress LOVs
    {
      category: 'ASSESSMENT_TYPE',
      code: 'QUIZ',
      description: 'Multiple Choice Quiz',
      isActive: true,
    },
    {
      category: 'ASSESSMENT_TYPE',
      code: 'ASSIGNMENT',
      description: 'Practical Assignment',
      isActive: true,
    },
    {
      category: 'ASSESSMENT_TYPE',
      code: 'PROJECT',
      description: 'Project Work',
      isActive: true,
    },
    {
      category: 'ASSESSMENT_TYPE',
      code: 'EXAM',
      description: 'Final Examination',
      isActive: true,
    },
    {
      category: 'GRADE',
      code: 'A_PLUS',
      description: 'A+ (90-100%)',
      isActive: true,
    },
    {
      category: 'GRADE',
      code: 'A',
      description: 'A (80-89%)',
      isActive: true,
    },
    {
      category: 'GRADE',
      code: 'B_PLUS',
      description: 'B+ (70-79%)',
      isActive: true,
    },
    {
      category: 'GRADE',
      code: 'B',
      description: 'B (60-69%)',
      isActive: true,
    },
    {
      category: 'GRADE',
      code: 'C',
      description: 'C (50-59%)',
      isActive: true,
    },
    {
      category: 'GRADE',
      code: 'F',
      description: 'Fail (Below 50%)',
      isActive: true,
    },

    // Content Management LOVs
    {
      category: 'CONTENT_TYPE',
      code: 'VIDEO',
      description: 'Video Lecture',
      isActive: true,
    },
    {
      category: 'CONTENT_TYPE',
      code: 'PDF',
      description: 'PDF Document',
      isActive: true,
    },
    {
      category: 'CONTENT_TYPE',
      code: 'PRESENTATION',
      description: 'Presentation Slides',
      isActive: true,
    },
    {
      category: 'CONTENT_TYPE',
      code: 'CODE_EXAMPLE',
      description: 'Code Examples',
      isActive: true,
    },
    {
      category: 'CONTENT_TYPE',
      code: 'QUIZ',
      description: 'Interactive Quiz',
      isActive: true,
    },
    {
      category: 'BLOG_CATEGORY',
      code: 'TECHNICAL',
      description: 'Technical Articles',
      isActive: true,
    },
    {
      category: 'BLOG_CATEGORY',
      code: 'CAREER_GUIDANCE',
      description: 'Career Guidance',
      isActive: true,
    },
    {
      category: 'BLOG_CATEGORY',
      code: 'INDUSTRY_NEWS',
      description: 'Industry News',
      isActive: true,
    },
    {
      category: 'BLOG_CATEGORY',
      code: 'TUTORIAL',
      description: 'Step-by-step Tutorials',
      isActive: true,
    },

    // Support & Communication LOVs
    {
      category: 'SUPPORT_TICKET_STATUS',
      code: 'OPEN',
      description: 'Ticket Open',
      isActive: true,
    },
    {
      category: 'SUPPORT_TICKET_STATUS',
      code: 'IN_PROGRESS',
      description: 'Ticket in Progress',
      isActive: true,
    },
    {
      category: 'SUPPORT_TICKET_STATUS',
      code: 'RESOLVED',
      description: 'Ticket Resolved',
      isActive: true,
    },
    {
      category: 'SUPPORT_TICKET_STATUS',
      code: 'CLOSED',
      description: 'Ticket Closed',
      isActive: true,
    },
    {
      category: 'SUPPORT_TICKET_PRIORITY',
      code: 'LOW',
      description: 'Low Priority',
      isActive: true,
    },
    {
      category: 'SUPPORT_TICKET_PRIORITY',
      code: 'MEDIUM',
      description: 'Medium Priority',
      isActive: true,
    },
    {
      category: 'SUPPORT_TICKET_PRIORITY',
      code: 'HIGH',
      description: 'High Priority',
      isActive: true,
    },
    {
      category: 'SUPPORT_TICKET_PRIORITY',
      code: 'URGENT',
      description: 'Urgent Priority',
      isActive: true,
    },
    {
      category: 'TICKET_CATEGORY',
      code: 'TECHNICAL_ISSUE',
      description: 'Technical Issue',
      isActive: true,
    },
    {
      category: 'TICKET_CATEGORY',
      code: 'PAYMENT_ISSUE',
      description: 'Payment Related Issue',
      isActive: true,
    },
    {
      category: 'TICKET_CATEGORY',
      code: 'CONTENT_ISSUE',
      description: 'Course Content Issue',
      isActive: true,
    },
    {
      category: 'TICKET_CATEGORY',
      code: 'ACCOUNT_ISSUE',
      description: 'Account Related Issue',
      isActive: true,
    },
    {
      category: 'TICKET_CATEGORY',
      code: 'GENERAL_QUERY',
      description: 'General Query',
      isActive: true,
    },

    // Notification & Communication LOVs
    {
      category: 'NOTIFICATION_TYPE',
      code: 'ENROLLMENT_CONFIRMATION',
      description: 'Enrollment Confirmation',
      isActive: true,
    },
    {
      category: 'NOTIFICATION_TYPE',
      code: 'PAYMENT_CONFIRMATION',
      description: 'Payment Confirmation',
      isActive: true,
    },
    {
      category: 'NOTIFICATION_TYPE',
      code: 'COURSE_REMINDER',
      description: 'Course Reminder',
      isActive: true,
    },
    {
      category: 'NOTIFICATION_TYPE',
      code: 'ASSIGNMENT_DEADLINE',
      description: 'Assignment Deadline',
      isActive: true,
    },
    {
      category: 'NOTIFICATION_TYPE',
      code: 'SYSTEM_ANNOUNCEMENT',
      description: 'System Announcement',
      isActive: true,
    },
    {
      category: 'NOTIFICATION_TYPE',
      code: 'PROMOTIONAL',
      description: 'Promotional Message',
      isActive: true,
    },
    {
      category: 'NOTIFICATION_CHANNEL',
      code: 'EMAIL',
      description: 'Email Notification',
      isActive: true,
    },
    {
      category: 'NOTIFICATION_CHANNEL',
      code: 'SMS',
      description: 'SMS Notification',
      isActive: true,
    },
    {
      category: 'NOTIFICATION_CHANNEL',
      code: 'PUSH',
      description: 'Push Notification',
      isActive: true,
    },
    {
      category: 'NOTIFICATION_CHANNEL',
      code: 'WHATSAPP',
      description: 'WhatsApp Message',
      isActive: true,
    },

    // Demo & Inquiry LOVs
    {
      category: 'DEMO_STATUS',
      code: 'PENDING',
      description: 'Demo Request Pending',
      isActive: true,
    },
    {
      category: 'DEMO_STATUS',
      code: 'SCHEDULED',
      description: 'Demo Scheduled',
      isActive: true,
    },
    {
      category: 'DEMO_STATUS',
      code: 'COMPLETED',
      description: 'Demo Completed',
      isActive: true,
    },
    {
      category: 'DEMO_STATUS',
      code: 'CANCELLED',
      description: 'Demo Cancelled',
      isActive: true,
    },
    {
      category: 'DEMO_STATUS',
      code: 'NO_SHOW',
      description: 'Demo No Show',
      isActive: true,
    },
    {
      category: 'INQUIRY_SOURCE',
      code: 'WEBSITE',
      description: 'Website Inquiry',
      isActive: true,
    },
    {
      category: 'INQUIRY_SOURCE',
      code: 'REFERRAL',
      description: 'Referral',
      isActive: true,
    },
    {
      category: 'INQUIRY_SOURCE',
      code: 'SOCIAL_MEDIA',
      description: 'Social Media',
      isActive: true,
    },
    {
      category: 'INQUIRY_SOURCE',
      code: 'EMAIL_CAMPAIGN',
      description: 'Email Campaign',
      isActive: true,
    },
    {
      category: 'INQUIRY_SOURCE',
      code: 'GOOGLE_ADS',
      description: 'Google Ads',
      isActive: true,
    },

    // Certificate & Achievement LOVs
    {
      category: 'CERTIFICATE_TYPE',
      code: 'COURSE_COMPLETION',
      description: 'Course Completion Certificate',
      isActive: true,
    },
    {
      category: 'CERTIFICATE_TYPE',
      code: 'ACHIEVEMENT',
      description: 'Achievement Certificate',
      isActive: true,
    },
    {
      category: 'CERTIFICATE_TYPE',
      code: 'PARTICIPATION',
      description: 'Participation Certificate',
      isActive: true,
    },
    {
      category: 'CERTIFICATE_TYPE',
      code: 'MERIT',
      description: 'Merit Certificate',
      isActive: true,
    },
    {
      category: 'BADGE_TYPE',
      code: 'QUIZ_MASTER',
      description: 'Quiz Master Badge',
      isActive: true,
    },
    {
      category: 'BADGE_TYPE',
      code: 'ASSIGNMENT_EXCELLENCE',
      description: 'Assignment Excellence Badge',
      isActive: true,
    },
    {
      category: 'BADGE_TYPE',
      code: 'PROJECT_CHAMPION',
      description: 'Project Champion Badge',
      isActive: true,
    },
    {
      category: 'BADGE_TYPE',
      code: 'PERFECT_ATTENDANCE',
      description: 'Perfect Attendance Badge',
      isActive: true,
    },
    {
      category: 'BADGE_TYPE',
      code: 'FAST_LEARNER',
      description: 'Fast Learner Badge',
      isActive: true,
    },

    // System & Configuration LOVs
    {
      category: 'CONFIG_GROUP',
      code: 'EMAIL_SETTINGS',
      description: 'Email Configuration Settings',
      isActive: true,
    },
    {
      category: 'CONFIG_GROUP',
      code: 'PAYMENT_SETTINGS',
      description: 'Payment Gateway Settings',
      isActive: true,
    },
    {
      category: 'CONFIG_GROUP',
      code: 'SMS_SETTINGS',
      description: 'SMS Gateway Settings',
      isActive: true,
    },
    {
      category: 'CONFIG_GROUP',
      code: 'STORAGE_SETTINGS',
      description: 'File Storage Settings',
      isActive: true,
    },
    {
      category: 'CONFIG_GROUP',
      code: 'NOTIFICATION_SETTINGS',
      description: 'Notification Settings',
      isActive: true,
    },
    {
      category: 'FILE_TYPE',
      code: 'IMAGE',
      description: 'Image Files',
      isActive: true,
    },
    {
      category: 'FILE_TYPE',
      code: 'DOCUMENT',
      description: 'Document Files',
      isActive: true,
    },
    {
      category: 'FILE_TYPE',
      code: 'VIDEO',
      description: 'Video Files',
      isActive: true,
    },
    {
      category: 'FILE_TYPE',
      code: 'AUDIO',
      description: 'Audio Files',
      isActive: true,
    },
    {
      category: 'FILE_TYPE',
      code: 'ARCHIVE',
      description: 'Archive Files',
      isActive: true,
    },

    // Country & Location LOVs (Sample countries)
    {
      category: 'COUNTRY',
      code: 'IN',
      description: 'India',
      isActive: true,
    },
    {
      category: 'COUNTRY',
      code: 'US',
      description: 'United States',
      isActive: true,
    },
    {
      category: 'COUNTRY',
      code: 'UK',
      description: 'United Kingdom',
      isActive: true,
    },
    {
      category: 'COUNTRY',
      code: 'CA',
      description: 'Canada',
      isActive: true,
    },
    {
      category: 'COUNTRY',
      code: 'AU',
      description: 'Australia',
      isActive: true,
    },
    {
      category: 'COUNTRY',
      code: 'DE',
      description: 'Germany',
      isActive: true,
    },
    {
      category: 'TIMEZONE',
      code: 'IST',
      description: 'Indian Standard Time (UTC+5:30)',
      isActive: true,
    },
    {
      category: 'TIMEZONE',
      code: 'EST',
      description: 'Eastern Standard Time (UTC-5)',
      isActive: true,
    },
    {
      category: 'TIMEZONE',
      code: 'PST',
      description: 'Pacific Standard Time (UTC-8)',
      isActive: true,
    },
    {
      category: 'TIMEZONE',
      code: 'GMT',
      description: 'Greenwich Mean Time (UTC+0)',
      isActive: true,
    },
    {
      category: 'TIMEZONE',
      code: 'CET',
      description: 'Central European Time (UTC+1)',
      isActive: true,
    },

    // Currency LOVs
    {
      category: 'CURRENCY',
      code: 'INR',
      description: 'Indian Rupee',
      isActive: true,
    },
    {
      category: 'CURRENCY',
      code: 'USD',
      description: 'US Dollar',
      isActive: true,
    },
    {
      category: 'CURRENCY',
      code: 'EUR',
      description: 'Euro',
      isActive: true,
    },
    {
      category: 'CURRENCY',
      code: 'GBP',
      description: 'British Pound',
      isActive: true,
    },
    {
      category: 'CURRENCY',
      code: 'CAD',
      description: 'Canadian Dollar',
      isActive: true,
    },
    {
      category: 'CURRENCY',
      code: 'AUD',
      description: 'Australian Dollar',
      isActive: true,
    },

    // Language LOVs
    {
      category: 'LANGUAGE',
      code: 'EN',
      description: 'English',
      isActive: true,
    },
    {
      category: 'LANGUAGE',
      code: 'HI',
      description: 'Hindi',
      isActive: true,
    },
    {
      category: 'LANGUAGE',
      code: 'ES',
      description: 'Spanish',
      isActive: true,
    },
    {
      category: 'LANGUAGE',
      code: 'FR',
      description: 'French',
      isActive: true,
    },
    {
      category: 'LANGUAGE',
      code: 'DE',
      description: 'German',
      isActive: true,
    },

    // Industry & Experience LOVs
    {
      category: 'INDUSTRY',
      code: 'IT_SOFTWARE',
      description: 'IT & Software',
      isActive: true,
    },
    {
      category: 'INDUSTRY',
      code: 'MANUFACTURING',
      description: 'Manufacturing',
      isActive: true,
    },
    {
      category: 'INDUSTRY',
      code: 'HEALTHCARE',
      description: 'Healthcare',
      isActive: true,
    },
    {
      category: 'INDUSTRY',
      code: 'FINANCE',
      description: 'Finance & Banking',
      isActive: true,
    },
    {
      category: 'INDUSTRY',
      code: 'RETAIL',
      description: 'Retail',
      isActive: true,
    },
    {
      category: 'INDUSTRY',
      code: 'EDUCATION',
      description: 'Education',
      isActive: true,
    },
    {
      category: 'EXPERIENCE_LEVEL',
      code: 'FRESHER',
      description: 'Fresher (0-1 years)',
      isActive: true,
    },
    {
      category: 'EXPERIENCE_LEVEL',
      code: 'JUNIOR',
      description: 'Junior (1-3 years)',
      isActive: true,
    },
    {
      category: 'EXPERIENCE_LEVEL',
      code: 'MID_LEVEL',
      description: 'Mid-Level (3-7 years)',
      isActive: true,
    },
    {
      category: 'EXPERIENCE_LEVEL',
      code: 'SENIOR',
      description: 'Senior (7+ years)',
      isActive: true,
    },
    {
      category: 'EXPERIENCE_LEVEL',
      code: 'EXPERT',
      description: 'Expert (10+ years)',
      isActive: true,
    },

    // Job Role LOVs
    {
      category: 'JOB_ROLE',
      code: 'ABAP_DEVELOPER',
      description: 'SAP ABAP Developer',
      isActive: true,
    },
    {
      category: 'JOB_ROLE',
      code: 'SAP_CONSULTANT',
      description: 'SAP Consultant',
      isActive: true,
    },
    {
      category: 'JOB_ROLE',
      code: 'TECHNICAL_LEAD',
      description: 'Technical Lead',
      isActive: true,
    },
    {
      category: 'JOB_ROLE',
      code: 'PROJECT_MANAGER',
      description: 'Project Manager',
      isActive: true,
    },
    {
      category: 'JOB_ROLE',
      code: 'SOLUTION_ARCHITECT',
      description: 'Solution Architect',
      isActive: true,
    },
    {
      category: 'JOB_ROLE',
      code: 'FUNCTIONAL_CONSULTANT',
      description: 'Functional Consultant',
      isActive: true,
    },

    // Course Duration & Schedule LOVs
    {
      category: 'DURATION_UNIT',
      code: 'HOURS',
      description: 'Hours',
      isActive: true,
    },
    {
      category: 'DURATION_UNIT',
      code: 'DAYS',
      description: 'Days',
      isActive: true,
    },
    {
      category: 'DURATION_UNIT',
      code: 'WEEKS',
      description: 'Weeks',
      isActive: true,
    },
    {
      category: 'DURATION_UNIT',
      code: 'MONTHS',
      description: 'Months',
      isActive: true,
    },
    {
      category: 'SESSION_TYPE',
      code: 'LIVE_CLASS',
      description: 'Live Classroom Session',
      isActive: true,
    },
    {
      category: 'SESSION_TYPE',
      code: 'RECORDED_LECTURE',
      description: 'Recorded Lecture',
      isActive: true,
    },
    {
      category: 'SESSION_TYPE',
      code: 'DOUBT_SESSION',
      description: 'Doubt Clearing Session',
      isActive: true,
    },
    {
      category: 'SESSION_TYPE',
      code: 'WORKSHOP',
      description: 'Hands-on Workshop',
      isActive: true,
    },
    {
      category: 'SESSION_TYPE',
      code: 'ASSESSMENT',
      description: 'Assessment Session',
      isActive: true,
    },
  ];
};

const seedListOfValues = async () => {
  try {
    console.log('Starting ListOfValues seeding...');

    const lovData = generateLOVSeedData();

    // Clear existing data
    await ListOfValues.destroy({ where: {} });

    // Insert new data
    await ListOfValues.bulkCreate(lovData);

    console.log('✅ ListOfValues seeded successfully!');
    console.log(`📊 Total LOV records created: ${lovData.length}`);

    // Display summary by category
    const categorySummary = lovData.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});

    console.log('\n📈 LOV Categories Summary:');
    Object.entries(categorySummary).forEach(([category, count]) => {
      console.log(`   ${category}: ${count} records`);
    });
  } catch (error) {
    console.error('❌ ListOfValues seeding failed:', error);
    throw error;
  }
};

seedListOfValues();

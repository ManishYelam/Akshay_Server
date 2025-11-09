// seeders/application-properties-seed.js
const { v4: uuidv4 } = require('uuid');
const ApplicationProperties = require('./Application.Prop');

const generateApplicationPropertiesSeedData = () => {
  return [
    // Email Configuration
    {
      app_prop_id: uuidv4(),
      property_name: 'app_email',
      property_value: 'akshay@sapabap.com',
      desc: 'Primary application email for communications',
      metadata: {
        smtp_host: 'smtp.gmail.com',
        smtp_port: 587,
        smtp_secure: false,
        from_name: 'Learn SAP ABAP with Akshay',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'app_email',
      property_value: 'support@sapabap.com',
      desc: 'Support email address (inactive)',
      metadata: {
        smtp_host: 'smtp.gmail.com',
        smtp_port: 587,
        smtp_secure: false,
        from_name: 'SAP ABAP Support',
      },
      status: 'inactive',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'noreply_email',
      property_value: 'noreply@sapabap.com',
      desc: 'No-reply email for system notifications',
      metadata: {
        smtp_host: 'smtp.gmail.com',
        smtp_port: 587,
        smtp_secure: false,
      },
      status: 'active',
    },

    // Payment Gateway Configuration
    {
      app_prop_id: uuidv4(),
      property_name: 'razorpay_key_id',
      property_value: 'rzp_test_your_test_key_id',
      desc: 'Razorpay Test Key ID',
      metadata: {
        environment: 'test',
        currency: 'INR',
        gateway: 'razorpay',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'razorpay_key_secret',
      property_value: 'your_razorpay_test_secret',
      desc: 'Razorpay Test Key Secret',
      metadata: {
        environment: 'test',
        secure: true,
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'payment_gateway',
      property_value: 'razorpay',
      desc: 'Active payment gateway',
      metadata: {
        supported_gateways: ['razorpay', 'stripe', 'paypal'],
      },
      status: 'active',
    },

    // Application Settings
    {
      app_prop_id: uuidv4(),
      property_name: 'app_name',
      property_value: 'Learn SAP ABAP with Akshay',
      desc: 'Application display name',
      metadata: {
        short_name: 'SAP ABAP',
        version: '1.0.0',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'app_url',
      property_value: 'https://learnsapabap.com',
      desc: 'Main application URL',
      metadata: {
        protocol: 'https',
        domain: 'learnsapabap.com',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'app_env',
      property_value: 'development',
      desc: 'Application environment',
      metadata: {
        debug: true,
        logging_level: 'debug',
      },
      status: 'active',
    },

    // Course & Learning Configuration
    {
      app_prop_id: uuidv4(),
      property_name: 'default_course_duration',
      property_value: '3',
      desc: 'Default course duration in months',
      metadata: {
        unit: 'months',
        min_duration: 1,
        max_duration: 12,
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'max_students_per_batch',
      property_value: '25',
      desc: 'Maximum students allowed per course batch',
      metadata: {
        type: 'limit',
        enforce: true,
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'course_completion_threshold',
      property_value: '80',
      desc: 'Minimum percentage required for course completion',
      metadata: {
        unit: 'percentage',
        min_value: 0,
        max_value: 100,
      },
      status: 'active',
    },

    // Email Templates Configuration
    {
      app_prop_id: uuidv4(),
      property_name: 'email_welcome_template',
      property_value: 'welcome-email-v1',
      desc: 'Welcome email template ID',
      metadata: {
        template_type: 'welcome',
        version: '1.0',
        subject: 'Welcome to Learn SAP ABAP!',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'email_enrollment_template',
      property_value: 'enrollment-confirmation-v1',
      desc: 'Course enrollment confirmation template',
      metadata: {
        template_type: 'enrollment',
        version: '1.0',
        subject: 'Course Enrollment Confirmation',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'email_payment_template',
      property_value: 'payment-receipt-v1',
      desc: 'Payment receipt email template',
      metadata: {
        template_type: 'payment',
        version: '1.0',
        subject: 'Payment Receipt - Learn SAP ABAP',
      },
      status: 'active',
    },

    // File Upload Configuration
    {
      app_prop_id: uuidv4(),
      property_name: 'max_upload_size',
      property_value: '10485760',
      desc: 'Maximum file upload size in bytes (10MB)',
      metadata: {
        unit: 'bytes',
        display: '10MB',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'allowed_file_types',
      property_value: 'jpg,jpeg,png,pdf,mp4,doc,docx',
      desc: 'Comma-separated list of allowed file types',
      metadata: {
        images: ['jpg', 'jpeg', 'png'],
        documents: ['pdf', 'doc', 'docx'],
        videos: ['mp4'],
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'upload_storage_path',
      property_value: './uploads',
      desc: 'Base path for file uploads',
      metadata: {
        type: 'local',
        backup_enabled: true,
      },
      status: 'active',
    },

    // Notification Settings
    {
      app_prop_id: uuidv4(),
      property_name: 'email_notifications_enabled',
      property_value: 'true',
      desc: 'Enable/disable email notifications',
      metadata: {
        type: 'boolean',
        default: true,
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'sms_notifications_enabled',
      property_value: 'false',
      desc: 'Enable/disable SMS notifications',
      metadata: {
        type: 'boolean',
        default: false,
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'push_notifications_enabled',
      property_value: 'true',
      desc: 'Enable/disable push notifications',
      metadata: {
        type: 'boolean',
        default: true,
      },
      status: 'active',
    },

    // Security & Authentication
    {
      app_prop_id: uuidv4(),
      property_name: 'jwt_secret',
      property_value: 'your_super_secure_jwt_secret_key_here',
      desc: 'JWT secret key for token generation',
      metadata: {
        algorithm: 'HS256',
        expires_in: '30d',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'jwt_expires_in',
      property_value: '30d',
      desc: 'JWT token expiration time',
      metadata: {
        unit: 'days',
        numeric_value: 30,
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'bcrypt_rounds',
      property_value: '12',
      desc: 'BCrypt salt rounds for password hashing',
      metadata: {
        min_rounds: 10,
        max_rounds: 15,
      },
      status: 'active',
    },

    // Session Management
    {
      app_prop_id: uuidv4(),
      property_name: 'session_timeout',
      property_value: '3600',
      desc: 'Session timeout in seconds (1 hour)',
      metadata: {
        unit: 'seconds',
        display: '1 hour',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'max_login_attempts',
      property_value: '5',
      desc: 'Maximum login attempts before lockout',
      metadata: {
        lockout_duration: 900,
        unit: 'seconds',
      },
      status: 'active',
    },

    // Business Logic Configuration
    {
      app_prop_id: uuidv4(),
      property_name: 'free_demo_duration',
      property_value: '30',
      desc: 'Free demo session duration in minutes',
      metadata: {
        unit: 'minutes',
        max_slots_per_day: 10,
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'refund_policy_days',
      property_value: '7',
      desc: 'Number of days for refund policy',
      metadata: {
        unit: 'days',
        conditions: ['unused_course', 'technical_issues'],
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'certificate_issuance_days',
      property_value: '3',
      desc: 'Days to issue certificate after course completion',
      metadata: {
        unit: 'days',
        auto_generate: true,
      },
      status: 'active',
    },

    // UI/UX Configuration
    {
      app_prop_id: uuidv4(),
      property_name: 'theme_primary_color',
      property_value: '#2A4B7C',
      desc: 'Primary brand color',
      metadata: {
        type: 'color',
        category: 'branding',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'theme_accent_color',
      property_value: '#00A2FF',
      desc: 'Accent color for CTAs',
      metadata: {
        type: 'color',
        category: 'branding',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'pagination_limit',
      property_value: '10',
      desc: 'Default items per page for pagination',
      metadata: {
        min_limit: 5,
        max_limit: 100,
      },
      status: 'active',
    },

    // Analytics & Tracking
    {
      app_prop_id: uuidv4(),
      property_name: 'google_analytics_id',
      property_value: 'GA-XXXXXXXXXX',
      desc: 'Google Analytics tracking ID',
      metadata: {
        service: 'google_analytics',
        version: 'GA4',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'hotjar_site_id',
      property_value: '1234567',
      desc: 'Hotjar site ID for user behavior tracking',
      metadata: {
        service: 'hotjar',
        enabled: true,
      },
      status: 'active',
    },

    // Social Media & Marketing
    {
      app_prop_id: uuidv4(),
      property_name: 'facebook_page_url',
      property_value: 'https://facebook.com/learnsapabap',
      desc: 'Facebook page URL',
      metadata: {
        platform: 'facebook',
        type: 'page',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'linkedin_company_url',
      property_value: 'https://linkedin.com/company/learn-sap-abap',
      desc: 'LinkedIn company page URL',
      metadata: {
        platform: 'linkedin',
        type: 'company',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'youtube_channel_url',
      property_value: 'https://youtube.com/c/LearnSAPABAP',
      desc: 'YouTube channel URL',
      metadata: {
        platform: 'youtube',
        type: 'channel',
      },
      status: 'active',
    },

    // Support & Contact Information
    {
      app_prop_id: uuidv4(),
      property_name: 'support_phone',
      property_value: '+91-9876543210',
      desc: 'Customer support phone number',
      metadata: {
        country_code: '+91',
        available_hours: '9:00 AM - 6:00 PM IST',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'support_whatsapp',
      property_value: '+91-9876543210',
      desc: 'WhatsApp support number',
      metadata: {
        country_code: '+91',
        business_account: true,
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'office_address',
      property_value: '123 Tech Park, Bangalore, Karnataka - 560001',
      desc: 'Registered office address',
      metadata: {
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560001',
      },
      status: 'active',
    },

    // System Maintenance
    {
      app_prop_id: uuidv4(),
      property_name: 'maintenance_mode',
      property_value: 'false',
      desc: 'Enable/disable maintenance mode',
      metadata: {
        type: 'boolean',
        scheduled: false,
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'backup_schedule',
      property_value: '0 2 * * *',
      desc: 'Cron schedule for database backups',
      metadata: {
        type: 'cron',
        description: 'Daily at 2 AM',
      },
      status: 'active',
    },

    // Feature Flags
    {
      app_prop_id: uuidv4(),
      property_name: 'feature_blog',
      property_value: 'true',
      desc: 'Enable/disable blog feature',
      metadata: {
        type: 'feature_flag',
        category: 'content',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'feature_certificates',
      property_value: 'true',
      desc: 'Enable/disable certificate generation',
      metadata: {
        type: 'feature_flag',
        category: 'learning',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'feature_live_chat',
      property_value: 'false',
      desc: 'Enable/disable live chat support',
      metadata: {
        type: 'feature_flag',
        category: 'support',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'feature_advanced_analytics',
      property_value: 'false',
      desc: 'Enable/disable advanced analytics dashboard',
      metadata: {
        type: 'feature_flag',
        category: 'analytics',
      },
      status: 'active',
    },

    // Cache Configuration
    {
      app_prop_id: uuidv4(),
      property_name: 'cache_ttl',
      property_value: '300',
      desc: 'Cache time-to-live in seconds',
      metadata: {
        unit: 'seconds',
        description: '5 minutes',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'redis_host',
      property_value: 'localhost',
      desc: 'Redis server host',
      metadata: {
        service: 'redis',
        port: 6379,
      },
      status: 'active',
    },

    // Rate Limiting
    {
      app_prop_id: uuidv4(),
      property_name: 'rate_limit_requests',
      property_value: '100',
      desc: 'Maximum requests per window',
      metadata: {
        window_ms: 900000,
        description: '100 requests per 15 minutes',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'rate_limit_window',
      property_value: '900000',
      desc: 'Rate limit window in milliseconds (15 minutes)',
      metadata: {
        unit: 'milliseconds',
        description: '15 minutes',
      },
      status: 'active',
    },

    // SEO Configuration
    {
      app_prop_id: uuidv4(),
      property_name: 'meta_description',
      property_value:
        'Learn SAP ABAP with industry expert Akshay. Comprehensive training, real-world projects, and career support. Start your SAP career today!',
      desc: 'Default meta description for SEO',
      metadata: {
        type: 'seo',
        max_length: 160,
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'meta_keywords',
      property_value: 'SAP ABAP, ABAP training, SAP course, learn ABAP, ABAP programming, SAP career',
      desc: 'Default meta keywords for SEO',
      metadata: {
        type: 'seo',
        separator: ',',
      },
      status: 'active',
    },

    // Third-party Integrations
    {
      app_prop_id: uuidv4(),
      property_name: 'aws_access_key',
      property_value: 'your_aws_access_key',
      desc: 'AWS access key for S3 storage',
      metadata: {
        service: 'aws_s3',
        region: 'ap-south-1',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'aws_secret_key',
      property_value: 'your_aws_secret_key',
      desc: 'AWS secret key for S3 storage',
      metadata: {
        service: 'aws_s3',
        secure: true,
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'cloudflare_api_key',
      property_value: 'your_cloudflare_api_key',
      desc: 'Cloudflare API key for CDN',
      metadata: {
        service: 'cloudflare',
        zone_id: 'your_zone_id',
      },
      status: 'active',
    },

    // Localization
    {
      app_prop_id: uuidv4(),
      property_name: 'default_language',
      property_value: 'en',
      desc: 'Default application language',
      metadata: {
        supported_languages: ['en', 'hi'],
        rtl_support: false,
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'default_timezone',
      property_value: 'Asia/Kolkata',
      desc: 'Default timezone for the application',
      metadata: {
        offset: '+05:30',
        display: 'IST',
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'default_currency',
      property_value: 'INR',
      desc: 'Default currency for payments',
      metadata: {
        symbol: '₹',
        decimal_places: 2,
      },
      status: 'active',
    },

    // Instructor & Admin Settings
    {
      app_prop_id: uuidv4(),
      property_name: 'instructor_commission_rate',
      property_value: '30',
      desc: 'Default commission rate for instructors (percentage)',
      metadata: {
        unit: 'percentage',
        min_rate: 10,
        max_rate: 50,
      },
      status: 'active',
    },
    {
      app_prop_id: uuidv4(),
      property_name: 'admin_notification_email',
      property_value: 'admin@sapabap.com',
      desc: 'Email for admin notifications and alerts',
      metadata: {
        notification_types: ['payments', 'support', 'system'],
      },
      status: 'active',
    },
  ];
};

const seedApplicationProperties = async () => {
  try {
    console.log('🚀 Starting ApplicationProperties seeding...');

    // 1️⃣ Generate seed data
    const appPropsData = generateApplicationPropertiesSeedData();

    // 2️⃣ Clear existing records
    await ApplicationProperties.destroy({ where: {} });

    // 3️⃣ Attach user_id to each record
    const dataWithUser = appPropsData.map(item => ({
      ...item,
      user_id: 1,
    }));

    // 4️⃣ Insert new records
    await ApplicationProperties.bulkCreate(dataWithUser);

    console.log('✅ ApplicationProperties seeded successfully!');
    console.log(`📊 Total application properties created: ${dataWithUser.length}`);

    // 5️⃣ Summary by property category
    const propertySummary = dataWithUser.reduce((acc, item) => {
      const category = item.property_name.split('_')[0];
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});

    console.log('\n📈 Application Properties Categories Summary:');
    Object.entries(propertySummary).forEach(([category, count]) => {
      console.log(`   ${category}: ${count} properties`);
    });
  } catch (error) {
    console.error('❌ ApplicationProperties seeding failed:', error);
    throw error;
  }
};

seedApplicationProperties();

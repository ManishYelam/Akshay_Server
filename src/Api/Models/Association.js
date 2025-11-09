const User = require('./User');
const Organization = require('./Organization');
const ApplicationProperties = require('./Application.Prop');
const ListOfValues = require('./List.Of.values');
const Course = require('./Course');
const Contact = require('./Contacts');
const Payment = require('./Payment');
const UserDocument = require('./UserDocument');
const { SupportTicket, TicketMessage, TicketAttachment, FAQ } = require('./SupportCenter');
const Feedback = require('./Feedback');
const Enrollment = require('./Enrollment');
const Testimonial = require('./Testimonial');
const Blog = require('./Blog');
const DemoRequest = require('./DemoRequest');

// Define associations
User.hasMany(Enrollment, { foreignKey: 'user_id', as: 'enrollments' });
Enrollment.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

Course.hasMany(Enrollment, { foreignKey: 'course_id', as: 'enrollments' });
Enrollment.belongsTo(Course, { foreignKey: 'course_id', as: 'course' });

Enrollment.hasOne(Payment, { foreignKey: 'enrollment_id', as: 'payment' });
Payment.belongsTo(Enrollment, { foreignKey: 'enrollment_id', as: 'enrollment' });

User.hasMany(Testimonial, { foreignKey: 'user_id', as: 'testimonials' });
Testimonial.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

Course.hasMany(Testimonial, { foreignKey: 'course_id', as: 'testimonials' });
Testimonial.belongsTo(Course, { foreignKey: 'course_id', as: 'course' });

User.hasMany(Blog, { foreignKey: 'author_id', as: 'blogs' });
Blog.belongsTo(User, { foreignKey: 'author_id', as: 'author' });

User.hasMany(DemoRequest, { foreignKey: 'user_id', as: 'demo_requests' });
DemoRequest.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

Course.hasMany(DemoRequest, { foreignKey: 'course_id', as: 'demo_requests' });
DemoRequest.belongsTo(Course, { foreignKey: 'course_id', as: 'course' });

// One client can have many Course
User.hasMany(Course, { foreignKey: 'client_id', as: 'Course' });
Course.belongsTo(User, { foreignKey: 'client_id', as: 'client' });

// Optionally, if you want an advocate to be assigned (for multi-advocate scenario)
User.hasMany(Course, { foreignKey: 'advocate_id', as: 'assignedCourse' });
Course.belongsTo(User, { foreignKey: 'advocate_id', as: 'advocate' });

Course.hasMany(Payment, { foreignKey: 'course_id', as: 'payments' });
Payment.belongsTo(Course, { foreignKey: 'client_id', as: 'course' });

// User has many Documents
User.hasMany(UserDocument, {
  foreignKey: 'user_id',
  as: 'userDocuments', // Changed from 'documents'
});

UserDocument.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

// course has many Documents
Course.hasMany(UserDocument, {
  foreignKey: 'course_id',
  as: 'courseDocuments', // Changed from 'documents'
});

UserDocument.belongsTo(Course, {
  foreignKey: 'course_id',
  as: 'course',
});

// SupportTicket Associations
SupportTicket.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

SupportTicket.belongsTo(User, {
  foreignKey: 'assigned_to',
  as: 'assigned_agent',
});

SupportTicket.belongsTo(Course, {
  foreignKey: 'course_id',
  as: 'related_course',
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE',
});

SupportTicket.hasMany(TicketMessage, {
  foreignKey: 'ticket_id',
  as: 'messages',
});

SupportTicket.hasMany(TicketAttachment, {
  foreignKey: 'ticket_id',
  as: 'ticket_attachments',
});

// TicketMessage Associations
TicketMessage.belongsTo(SupportTicket, {
  foreignKey: 'ticket_id',
  as: 'ticket',
});

TicketMessage.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

TicketMessage.hasMany(TicketAttachment, {
  foreignKey: 'message_id',
  as: 'attachments',
});

// TicketAttachment Associations
TicketAttachment.belongsTo(SupportTicket, {
  foreignKey: 'ticket_id',
  as: 'ticket',
});

TicketAttachment.belongsTo(TicketMessage, {
  foreignKey: 'message_id',
  as: 'message',
});

TicketAttachment.belongsTo(User, {
  foreignKey: 'uploaded_by',
  as: 'uploader',
});

// FAQ Associations
FAQ.belongsTo(User, {
  foreignKey: 'created_by',
  as: 'author',
});

// Reverse Associations from existing models
User.hasMany(SupportTicket, {
  foreignKey: 'user_id',
  as: 'support_tickets',
});

User.hasMany(SupportTicket, {
  foreignKey: 'assigned_to',
  as: 'assigned_support_tickets',
});

User.hasMany(TicketMessage, {
  foreignKey: 'user_id',
  as: 'ticket_messages',
});

User.hasMany(TicketAttachment, {
  foreignKey: 'uploaded_by',
  as: 'uploaded_attachments',
});

User.hasMany(FAQ, {
  foreignKey: 'created_by',
  as: 'created_faqs',
});

Course.hasMany(SupportTicket, {
  foreignKey: 'course_id',
  as: 'support_tickets',
});

// Generate unique ticket number
// In your SupportTicket model definition, ensure the hook is properly set
// SupportTicket.beforeCreate(async (ticket) => {
//   try {
//     const timestamp = Date.now().toString().slice(-6);
//     const random = Math.random().toString(36).substring(2, 5).toUppercourse();
//     ticket.ticket_number = `TKT-${timestamp}-${random}`;

//     // Ensure it's set
//     console.log('Generated ticket number:', ticket.ticket_number);
//   } catch (error) {
//     console.error('Error generating ticket number:', error);
//     // Fallback generation
//     const timestamp = Date.now();
//     const random = Math.floor(Math.random() * 1000);
//     ticket.ticket_number = `TKT-${timestamp}-${random}`;
//   }
// });
Feedback.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

module.exports = {
  User,
  Organization,
  ApplicationProperties,
  ListOfValues,
  Course,
  Enrollment,
  Testimonial,
  Blog,
  DemoRequest,
  Contact,
  Payment,
  UserDocument,

  // Support models
  SupportTicket,
  TicketMessage,
  TicketAttachment,
  FAQ,

  Feedback,
};

# 🎯 Digital Philately Platform

## 📖 Project Overview

The Digital Philately Platform addresses the fragmentation in India's stamp collecting community by providing a centralized digital solution. The platform combines e-commerce functionality with social features, enabling philatelists to purchase authentic stamps, register interest in upcoming releases, participate in community discussions, and attend philatelic events.

**Project Type**: College Final Year Project 
**Domain**: Web Development, E-commerce, Community Platform  
**Development Period**: 2025

---

## ✨ Key Features

### 🛒 E-Commerce
- Searchable stamp catalog with 10+ categories (Independence, Wildlife, Heritage, etc.)
- Advanced filtering by category, price range, and release date
- NPDA Wallet for secure digital transactions
- Real-time order tracking and management
- Redux-powered shopping cart

### 👥 Community Engagement
- Forum system with posts, comments, and likes
- Events calendar for exhibitions and workshops
- RSVP functionality for philatelic meetups
- Interest registration for upcoming stamp releases
- Personalized user dashboards

### 🔐 Admin Panel
- Complete stamp inventory management (CRUD operations)
- Order processing and delivery tracking
- User management and account control
- Forum moderation (pin/lock posts, content management)
- Event creation and management
- Analytics dashboard with revenue and user statistics

---

## 🛠️ Tech Stack

**Frontend**: React 18.2, Redux Toolkit, React Router, Tailwind CSS, Axios  
**Backend**: Node.js, Express.js, MongoDB, Mongoose  
**Authentication**: JWT + bcryptjs  
**Tools**: Vite, Git, ESLint

---

## 🌐 API Endpoints Overview

### Authentication
`POST /api/auth/register` - User registration  
`POST /api/auth/login` - User login  
`GET /api/auth/me` - Get current user  
`PUT /api/auth/profile` - Update profile

### Products
`GET /api/products` - Get all products with filters  
`GET /api/products/:id` - Get single product  
`POST /api/products` - Create product (Admin)  
`PUT /api/products/:id` - Update product (Admin)

### Orders
`POST /api/orders` - Create order  
`GET /api/orders/my-orders` - Get user orders  
`PUT /api/orders/:id/status` - Update order status (Admin)

### Forum
`GET /api/forum` - Get all posts  
`POST /api/forum` - Create post  
`POST /api/forum/:id/comments` - Add comment  
`POST /api/forum/:id/like` - Toggle like

### Events
`GET /api/events` - Get all events  
`POST /api/events/:id/rsvp` - RSVP to event  
`POST /api/events` - Create event (Admin)

### Wallet & Users
`GET /api/users/wallet` - Get wallet balance  
`POST /api/users/wallet/add` - Add money to wallet  
`GET /api/users/transactions` - Get transaction history

---

## 🔐 Security Features

- JWT token-based authentication
- bcrypt password hashing (10 salt rounds)
- Protected routes with middleware
- Role-based access control (User/Admin)
- Input validation and sanitization
- CORS configuration

---

## 🎯 Key Technical Highlights

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **State Management**: Centralized Redux store with multiple slices
- **Database Transactions**: Atomic operations for order processing
- **RESTful API**: Well-structured endpoints with error handling
- **Code Organization**: Clean separation of concerns with MVC pattern

---

## 🧪 Testing Credentials

**Admin Account:**  
Email: `admin@philately.com`  
Password: `Admin@123`

**User Account:**  
Create via registration with any valid email

---

## 🔮 Future Enhancements

- Payment gateway integration (Razorpay/Stripe)
- Email notifications system
- Cloud-based image upload
- Real-time chat functionality
- Auction system for rare stamps
- AI-powered stamp recognition
- Mobile PWA and native apps

---

## 📚 Learning Outcomes

This project demonstrates:
- Full-stack MERN development expertise
- RESTful API design and implementation
- Authentication and authorization systems
- Advanced state management with Redux
- Database design and optimization
- Responsive UI/UX development
- Version control with Git
---

## 🙏 Acknowledgments

- India Post Philately Bureau for inspiration
- Open-source community for libraries and frameworks
- College faculty for guidance and support

---

Give a ⭐️ if this project helped you!
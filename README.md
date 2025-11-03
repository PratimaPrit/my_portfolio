# Pratima Prit - Portfolio Website

A modern, full-stack portfolio website built with React, Vite, Node.js, and Express.

## 🚀 Features

- **Modern UI/UX**: Sleek design with smooth animations using Framer Motion
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Theme**: Eye-friendly dark color scheme with gradient accents
- **Interactive Components**: Typing animations, hover effects, and smooth scrolling
- **Contact Form**: Functional contact form with backend integration and email notifications
- **Project Showcase**: Dynamic project display with API integration
- **Skills & Experience**: Comprehensive display of technical skills and work experience
- **Achievements Section**: Highlight of awards and certifications

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database (optional)
- **Nodemailer** - Email service
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing

## 📦 Project Structure

```
portfolio/
├── frontend/                # React frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── backend/                 # Node.js backend API
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── projects.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── package.json            # Root package.json for workspace
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (optional, for contact form storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

   Or install manually:
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```bash
   cd backend
   cp .env.example .env
   ```

   Edit `.env` and add your credentials:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio  # Optional
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   FRONTEND_URL=http://localhost:5173
   NODE_ENV=development
   ```

   **Note**: For Gmail, you need to create an [App Password](https://support.google.com/accounts/answer/185833)

### Running the Application

#### Development Mode (Both Frontend & Backend)

```bash
npm run dev
```

This will start:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

#### Run Frontend Only

```bash
npm run dev:frontend
```

#### Run Backend Only

```bash
npm run dev:backend
```

### Building for Production

Build the frontend:
```bash
npm run build
```

The production-ready files will be in `frontend/dist/`

## 📧 Setting Up Email Service

To enable the contact form email functionality:

1. **Using Gmail:**
   - Enable 2-Factor Authentication in your Google Account
   - Generate an [App Password](https://support.google.com/accounts/answer/185833)
   - Add the credentials to your `.env` file

2. **Using Other Email Services:**
   - Update the transporter configuration in `backend/routes/contact.js`
   - Refer to [Nodemailer documentation](https://nodemailer.com/)

## 🎨 Customization

### Update Personal Information

1. **Resume Data**: Edit the content in components to reflect your information
2. **Projects**: Update the projects array in `backend/routes/projects.js`
3. **Skills**: Modify the skillCategories in `frontend/src/components/Skills.jsx`
4. **Colors**: Customize the theme in `frontend/tailwind.config.js`

### Add Your Resume PDF

Place your resume PDF file in `frontend/public/resume.pdf`

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

### Backend Deployment (Heroku/Railway/Render)

1. Ensure all environment variables are set in your hosting platform
2. Deploy the `backend` directory
3. Update the `VITE_API_URL` in your frontend to point to the deployed backend

### Full-Stack Deployment Options

- **Vercel** (Frontend) + **Railway** (Backend)
- **Netlify** (Frontend) + **Render** (Backend)
- **Single Server**: Deploy both using PM2 or Docker

## 🔒 Security Notes

- Never commit `.env` files to version control
- Use environment variables for sensitive data
- Enable CORS only for trusted domains in production
- Implement rate limiting on API endpoints (already configured)
- Use HTTPS in production

## 📝 Features to Add

- [ ] Blog section
- [ ] Admin dashboard for managing projects
- [ ] Analytics integration
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Light/Dark theme toggle
- [ ] Download resume functionality
- [ ] Project filtering and search

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Pratima Prit**
- Email: pratimaprit11@gmail.com
- Phone: +91-6206177636
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Made with ❤️ by Pratima Prit

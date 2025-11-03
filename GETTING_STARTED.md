# 🚀 Quick Start Guide

## First Time Setup

1. **Install Dependencies** (if not already done)
   ```bash
   npm run install:all
   ```

2. **Configure Email Service** (Optional but recommended)
   
   Edit `backend/.env` and add your Gmail credentials:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```
   
   💡 **How to get Gmail App Password:**
   - Go to Google Account Settings
   - Enable 2-Factor Authentication
   - Go to Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the password to your `.env` file

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
   
   Or use the convenient script:
   ```bash
   ./start.sh
   ```

4. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 🎨 Customization Checklist

### 1. Personal Information
- [ ] Update name and contact info in `Hero.jsx`
- [ ] Update About section in `About.jsx`
- [ ] Update work experience in `Experience.jsx`
- [ ] Update achievements in `Achievements.jsx`

### 2. Projects
- [ ] Add your projects in `backend/routes/projects.js`
- [ ] Add project images to `frontend/public/projects/`
- [ ] Update GitHub/demo links

### 3. Skills
- [ ] Update skills list in `Skills.jsx`
- [ ] Add/remove technology icons as needed

### 4. Social Links
- [ ] Update GitHub URL in `Hero.jsx` and `Footer.jsx`
- [ ] Update LinkedIn URL
- [ ] Verify email and phone numbers

### 5. Resume
- [ ] Add your resume PDF to `frontend/public/resume.pdf`
- [ ] Or update the download link in `Hero.jsx`

### 6. Styling (Optional)
- [ ] Customize colors in `tailwind.config.js`
- [ ] Update favicon in `frontend/public/`
- [ ] Modify animations in components

## 🔧 Available Scripts

### Root Directory
```bash
npm run dev              # Start both frontend and backend
npm run dev:frontend     # Start only frontend
npm run dev:backend      # Start only backend
npm run build           # Build frontend for production
npm run install:all     # Install all dependencies
```

### Frontend Directory
```bash
cd frontend
npm run dev             # Start Vite dev server
npm run build          # Build for production
npm run preview        # Preview production build
```

### Backend Directory
```bash
cd backend
npm run dev            # Start with nodemon (auto-restart)
npm start             # Start without auto-restart
```

## 🧪 Testing the Contact Form

1. Make sure backend is running on port 5000
2. Configure email credentials in `backend/.env`
3. Fill out the contact form on your portfolio
4. Check your email inbox for the message

**Without MongoDB:** Form submissions will only send emails
**With MongoDB:** Form submissions are saved to database AND emails are sent

## 🚀 Production Deployment

### Option 1: Separate Hosting

**Frontend (Vercel):**
1. Push code to GitHub
2. Import project in Vercel
3. Set root directory to `frontend`
4. Deploy

**Backend (Railway/Render):**
1. Create new project
2. Set root directory to `backend`
3. Add environment variables
4. Deploy

### Option 2: Single Server (VPS)

1. Build frontend: `npm run build`
2. Serve frontend with Nginx
3. Run backend with PM2
4. Set up reverse proxy

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173 (frontend)
lsof -ti:5173 | xargs kill -9

# Kill process on port 5000 (backend)
lsof -ti:5000 | xargs kill -9
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules frontend/node_modules backend/node_modules
rm package-lock.json frontend/package-lock.json backend/package-lock.json
npm run install:all
```

### Email Not Sending
- Verify Gmail credentials in `.env`
- Enable "Less secure app access" or use App Password
- Check spam folder
- Look at backend console for error messages

### MongoDB Connection Error
- MongoDB is optional for basic functionality
- To use MongoDB: Install and run MongoDB locally
- Or use MongoDB Atlas (cloud) and update connection string

## 📚 Project Structure Explained

```
portfolio/
├── frontend/               # React application
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── App.jsx        # Main app component
│   │   └── index.css      # Global styles
│   └── public/            # Static assets
│
├── backend/               # Express API
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── server.js         # Entry point
│
└── package.json          # Workspace config
```

## 🎯 Next Steps

1. ✅ Run `npm run dev` to start development
2. ✅ Customize content with your information
3. ✅ Add your projects and update links
4. ✅ Test the contact form
5. ✅ Deploy to production

## 💡 Tips

- Use Lighthouse for performance audits
- Test on multiple devices and browsers
- Optimize images before uploading
- Keep your resume PDF up to date
- Regular git commits for version control

## 🤝 Need Help?

- Check the main README.md for detailed documentation
- Review component files for inline comments
- Test API endpoints using Postman or curl
- Check browser console for frontend errors
- Check terminal for backend errors

Happy coding! 🎉

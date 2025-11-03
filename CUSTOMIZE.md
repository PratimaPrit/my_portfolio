# 🎯 TODO: Customize Your Portfolio

This checklist will help you personalize your portfolio with your information.

## ⚡ Priority 1 - Essential Updates (Do First)

### 1. Social Media Links
- [ ] **File**: `frontend/src/components/Hero.jsx` (lines ~10-13)
- [ ] Update GitHub URL: Currently set to `https://github.com`
- [ ] Update LinkedIn URL: Currently set to `https://linkedin.com`
- [ ] Verify email: `pratimaprit11@gmail.com`
- [ ] Verify phone: `+91-6206177636`

### 2. Resume PDF
- [ ] Add your resume PDF to `frontend/public/resume.pdf`
- [ ] Or update the download link in `Hero.jsx` (line ~86)

### 3. Email Configuration (For Contact Form)
- [ ] Open `backend/.env`
- [ ] Add your Gmail: `EMAIL_USER=your-email@gmail.com`
- [ ] Add App Password: `EMAIL_PASS=your-app-password`
- [ ] Get App Password from: https://myaccount.google.com/apppasswords

### 4. Project Details
- [ ] **File**: `backend/routes/projects.js`
- [ ] Add GitHub URLs for your projects (currently empty strings)
- [ ] Add demo/live URLs for your projects (currently empty strings)
- [ ] Update descriptions if needed

---

## 🎨 Priority 2 - Optional Customization

### 5. Project Images
- [ ] Create folder: `frontend/public/projects/`
- [ ] Add images:
  - `claims.jpg` - Claims Management System
  - `studynotion.jpg` - Study Notion
  - `vehicle.jpg` - Vehicle Tracking Dashboard
  - `learning.jpg` - Skill Development Platform

### 6. Update About Section (Optional)
- [ ] **File**: `frontend/src/components/About.jsx`
- [ ] Customize the introduction paragraphs if you want
- [ ] Update the stats (2+ years, 10+ projects, 300+ DSA)

### 7. Add More Projects
- [ ] **File**: `backend/routes/projects.js`
- [ ] Add more projects to the array
- [ ] Follow the same structure

### 8. Update Footer Links
- [ ] **File**: `frontend/src/components/Footer.jsx`
- [ ] Verify social links match Hero section

---

## 🎨 Priority 3 - Advanced Customization

### 9. Color Scheme (Optional)
- [ ] **File**: `frontend/tailwind.config.js`
- [ ] Customize primary colors (currently blue)
- [ ] Adjust dark theme colors

### 10. Favicon & Meta Tags
- [ ] Add favicon to `frontend/public/favicon.ico`
- [ ] Update meta tags in `frontend/index.html`
- [ ] Add Open Graph images for social sharing

### 11. Google Analytics (Optional)
- [ ] Create GA4 property
- [ ] Add tracking code to `frontend/index.html`

### 12. Additional Skills
- [ ] **File**: `frontend/src/components/Skills.jsx`
- [ ] Add/remove skills as needed
- [ ] Update competencies list

---

## 🔍 Testing Checklist

Before deploying, test these:

- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] Email notifications arrive
- [ ] All social media links open correctly
- [ ] Resume downloads properly
- [ ] Mobile responsive on all pages
- [ ] All animations work smoothly
- [ ] No console errors in browser
- [ ] Backend API responds correctly

---

## 📝 Quick Reference

### Files You'll Edit Most Often

1. **Personal Info**: 
   - `frontend/src/components/Hero.jsx`
   - `frontend/src/components/About.jsx`

2. **Experience**: 
   - `frontend/src/components/Experience.jsx`

3. **Projects**: 
   - `backend/routes/projects.js`

4. **Skills**: 
   - `frontend/src/components/Skills.jsx`

5. **Achievements**: 
   - `frontend/src/components/Achievements.jsx`

6. **Config**: 
   - `backend/.env`
   - `frontend/tailwind.config.js`

---

## 🚀 After Customization

Once you've completed the customization:

1. **Test locally**:
   ```bash
   npm run dev
   # Visit http://localhost:5173
   ```

2. **Test contact form**:
   - Fill out the form
   - Check your email

3. **Review on mobile**:
   - Use browser DevTools
   - Or test on actual device

4. **Commit changes**:
   ```bash
   git add .
   git commit -m "Customize portfolio with personal information"
   git push
   ```

5. **Deploy** (see DEPLOYMENT.md)

---

## 💡 Tips

- **Start simple**: Get the essentials working first
- **Test often**: Check after each major change
- **Keep backups**: Commit to Git frequently
- **Mobile first**: Always test mobile view
- **Ask for feedback**: Share with friends/colleagues

---

## ❓ Common Questions

**Q: Do I need MongoDB?**
A: No, it's optional. The contact form will work without it (email only).

**Q: Can I change colors easily?**
A: Yes! Edit `frontend/tailwind.config.js` → `colors` section

**Q: How do I add more projects?**
A: Edit `backend/routes/projects.js` and add to the array

**Q: Where do I add my photo?**
A: Add to `frontend/public/` and reference in components

**Q: Can I add more sections?**
A: Yes! Create new components and import them in `App.jsx`

---

## 📚 Resources

- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **Icons**: https://react-icons.github.io/react-icons

---

## ✅ Quick Start Command

```bash
# After updating the files above, restart the server:
npm run dev
```

---

**Remember**: This is YOUR portfolio. Feel free to customize everything to match your style and brand!

Good luck! 🎉

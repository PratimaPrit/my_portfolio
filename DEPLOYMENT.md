# 🚀 Deployment Guide

## Quick Deployment Options

### Option 1: Vercel (Frontend) + Railway (Backend) ⭐ RECOMMENDED

This is the easiest and most reliable option for beginners.

#### Deploy Frontend to Vercel

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: Vite
     - Root Directory: `frontend`
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Add Environment Variable:
     - `VITE_API_URL` = Your backend URL (you'll get this from Railway)
   - Click "Deploy"

#### Deploy Backend to Railway

1. **Go to [railway.app](https://railway.app)**
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Configure:
   - Root Directory: `backend`
   - Start Command: `node server.js`
5. Add Environment Variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_uri
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   FRONTEND_URL=your_vercel_url
   NODE_ENV=production
   ```
6. Deploy!

---

### Option 2: Netlify (Frontend) + Render (Backend)

#### Deploy Frontend to Netlify

1. **Push to GitHub** (same as Option 1)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repo
   - Configure:
     - Base directory: `frontend`
     - Build command: `npm run build`
     - Publish directory: `frontend/dist`
   - Environment variables:
     - `VITE_API_URL` = Your backend URL
   - Click "Deploy"

#### Deploy Backend to Render

1. **Go to [render.com](https://render.com)**
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - Name: portfolio-backend
   - Root Directory: `backend`
   - Runtime: Node
   - Build Command: `npm install`
   - Start Command: `node server.js`
5. Add Environment Variables (same as Railway)
6. Click "Create Web Service"

---

### Option 3: All-in-One VPS Deployment

#### Using DigitalOcean, AWS EC2, or Similar

1. **Create a server** (Ubuntu 22.04 LTS recommended)

2. **SSH into your server**
   ```bash
   ssh root@your_server_ip
   ```

3. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Install Nginx**
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

5. **Clone your repository**
   ```bash
   cd /var/www
   git clone YOUR_REPO_URL portfolio
   cd portfolio
   ```

6. **Install dependencies**
   ```bash
   npm run install:all
   ```

7. **Build frontend**
   ```bash
   cd frontend
   npm run build
   ```

8. **Configure environment**
   ```bash
   cd ../backend
   cp .env.example .env
   nano .env  # Edit with your values
   ```

9. **Install PM2**
   ```bash
   sudo npm install -g pm2
   ```

10. **Start backend with PM2**
    ```bash
    pm2 start server.js --name portfolio-backend
    pm2 save
    pm2 startup
    ```

11. **Configure Nginx**
    ```bash
    sudo nano /etc/nginx/sites-available/portfolio
    ```
    
    Add:
    ```nginx
    server {
        listen 80;
        server_name your_domain.com;

        # Frontend
        root /var/www/portfolio/frontend/dist;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }

        # Backend API
        location /api {
            proxy_pass http://localhost:5000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```

12. **Enable site and restart Nginx**
    ```bash
    sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl restart nginx
    ```

13. **Set up SSL with Let's Encrypt**
    ```bash
    sudo apt install certbot python3-certbot-nginx
    sudo certbot --nginx -d your_domain.com
    ```

---

## Database Setup (MongoDB Atlas)

1. **Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)**
2. Create a free account
3. Create a new cluster (Free tier is fine)
4. Create a database user:
   - Username: portfolio_user
   - Password: (generate strong password)
5. Add IP whitelist: `0.0.0.0/0` (Allow from anywhere)
6. Get connection string:
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
7. Add to your backend `.env`:
   ```
   MONGODB_URI=mongodb+srv://portfolio_user:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

---

## Domain Configuration

### Setting up Custom Domain

1. **Purchase domain** from Namecheap, GoDaddy, or Google Domains

2. **For Vercel/Netlify:**
   - Go to your project settings
   - Add custom domain
   - Follow DNS configuration instructions

3. **For VPS:**
   - Point A record to your server IP
   - Update Nginx configuration with your domain

### DNS Records Example
```
Type    Name    Value           TTL
A       @       your_server_ip  3600
A       www     your_server_ip  3600
```

---

## Environment Variables Checklist

### Backend Production Environment
```env
PORT=5000
MONGODB_URI=mongodb+srv://...
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FRONTEND_URL=https://yourdomain.com
NODE_ENV=production
```

### Frontend Production Environment
```env
VITE_API_URL=https://api.yourdomain.com
```

---

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test contact form submission
- [ ] Verify email notifications work
- [ ] Check mobile responsiveness
- [ ] Test all links (GitHub, LinkedIn, etc.)
- [ ] Verify resume download works
- [ ] Test API endpoints
- [ ] Check SSL certificate (HTTPS)
- [ ] Run Lighthouse audit
- [ ] Set up monitoring (optional)
- [ ] Configure analytics (optional)

---

## Performance Optimization

### Frontend
- Images already optimized with lazy loading
- Code splitting enabled by Vite
- Minification enabled in production build
- Google Fonts loaded asynchronously

### Backend
- Rate limiting configured
- CORS properly set up
- Helmet security headers enabled
- Consider adding Redis for caching (optional)

---

## Monitoring & Analytics

### Google Analytics (Optional)

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get measurement ID
3. Add to `frontend/index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Error Monitoring (Optional)

Consider adding:
- [Sentry](https://sentry.io) for error tracking
- [LogRocket](https://logrocket.com) for session replay
- [UptimeRobot](https://uptimerobot.com) for uptime monitoring

---

## Continuous Deployment (CI/CD)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: cd frontend && npm install && npm run build
      # Add deployment steps for your hosting

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: cd backend && npm install
      # Add deployment steps for your hosting
```

---

## Cost Estimation

### Free Tier Options (Perfect for Portfolio)
- **Vercel**: Free for personal projects
- **Netlify**: Free tier available
- **Railway**: $5/month credit (usually enough)
- **Render**: Free tier available (with limitations)
- **MongoDB Atlas**: Free tier (512MB)
- **Domain**: $10-15/year

**Total**: ~$0-10/month (if using all free tiers)

### Paid Options (Better performance)
- **VPS (DigitalOcean)**: $6/month
- **Domain**: $12/year
- **MongoDB Atlas**: Free tier works fine

**Total**: ~$7-10/month

---

## Backup Strategy

1. **Code**: Already backed up on GitHub
2. **Database**: MongoDB Atlas auto-backups (on paid tiers)
3. **Environment Variables**: Keep a secure copy locally
4. **Media Files**: Use cloud storage (AWS S3, Cloudinary)

---

## Troubleshooting Deployment Issues

### Build Fails on Vercel/Netlify
- Check Node.js version compatibility
- Verify all dependencies in package.json
- Check build logs for specific errors
- Try building locally first

### API Not Connecting
- Verify CORS settings
- Check environment variables
- Confirm backend is running
- Check API URL in frontend

### Database Connection Fails
- Verify MongoDB connection string
- Check IP whitelist in MongoDB Atlas
- Confirm database user credentials
- Check network connectivity

### Email Not Sending
- Verify Gmail App Password
- Check email in backend logs
- Confirm Nodemailer configuration
- Test with a simple script first

---

## Security Best Practices

1. **Never commit `.env` files**
2. **Use strong passwords**
3. **Keep dependencies updated**
4. **Enable HTTPS**
5. **Set proper CORS origins**
6. **Use rate limiting**
7. **Sanitize user inputs**
8. **Monitor for vulnerabilities**

---

## Recommended Deployment: Vercel + Railway

This combination offers:
- ✅ Easy setup
- ✅ Automatic deployments from Git
- ✅ Free SSL certificates
- ✅ Great performance
- ✅ Built-in monitoring
- ✅ Generous free tiers
- ✅ Perfect for portfolios

**Estimated setup time**: 30-45 minutes

---

## Need Help?

- Check hosting provider documentation
- Review error logs carefully
- Test locally before deploying
- Use browser DevTools for debugging
- Check GitHub Issues for similar problems

---

Good luck with your deployment! 🚀

Your portfolio will be live and accessible to the world soon!

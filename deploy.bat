@echo off
REM DevMaster AI - Windows Deployment Script

echo.
echo ============================================
echo   DEVMASTER AI - DEPLOYMENT WIZARD
echo ============================================
echo.
echo Choose your deployment platform:
echo.
echo 1. Vercel (Recommended - Easiest)
echo 2. Railway.app
echo 3. Netlify
echo 4. Heroku
echo 5. Render.com
echo 6. Local Docker
echo 7. Show Deployment Guide
echo.

set /p choice="Enter your choice (1-7): "

if "%choice%"=="1" (
    echo.
    echo === VERCEL DEPLOYMENT ===
    echo.
    echo 1. Go to https://vercel.com
    echo 2. Sign up with GitHub
    echo 3. Click 'New Project'
    echo 4. Import your repository
    echo 5. Click 'Deploy'
    echo.
    echo Your app will be live in 2-3 minutes!
    echo.
    set /p vercel_cli="Want to install Vercel CLI? (y/n): "
    if "%vercel_cli%"=="y" (
        npm install -g vercel
        vercel
    )
) else if "%choice%"=="2" (
    echo.
    echo === RAILWAY.APP DEPLOYMENT ===
    echo.
    echo 1. Go to https://railway.app
    echo 2. Sign up with GitHub
    echo 3. Create 'New Project'
    echo 4. Deploy from GitHub
    echo 5. Select your repository
    echo.
    echo Your app will be live in 2-3 minutes!
) else if "%choice%"=="3" (
    echo.
    echo === NETLIFY DEPLOYMENT ===
    echo.
    echo 1. Go to https://netlify.com
    echo 2. Sign up with GitHub
    echo 3. Click 'New site from Git'
    echo 4. Connect GitHub repository
    echo 5. Click 'Deploy site'
    echo.
    echo Your app will be live in 2-3 minutes!
) else if "%choice%"=="4" (
    echo.
    echo === HEROKU DEPLOYMENT ===
    echo.
    echo Installing Heroku CLI...
    npm install -g heroku
    heroku login
    heroku create
    git push heroku main
    heroku open
) else if "%choice%"=="5" (
    echo.
    echo === RENDER.COM DEPLOYMENT ===
    echo.
    echo 1. Go to https://render.com
    echo 2. Sign up with GitHub
    echo 3. Create 'New Web Service'
    echo 4. Connect to your GitHub repo
    echo 5. Auto-deploy!
    echo.
    echo Your app will be live in 2-3 minutes!
) else if "%choice%"=="6" (
    echo.
    echo === DOCKER DEPLOYMENT ===
    echo.
    echo Building Docker image...
    docker build -t devmaster-ai .
    echo.
    echo Running container...
    docker run -p 3000:3000 devmaster-ai
    echo.
    echo Your app is running at http://localhost:3000
) else if "%choice%"=="7" (
    echo.
    echo Opening deployment guide...
    type DEPLOY.md
) else (
    echo Invalid choice. Please run the script again.
)

pause

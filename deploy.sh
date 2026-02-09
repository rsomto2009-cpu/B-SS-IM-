#!/bin/bash

# DevMaster AI - Quick Deployment Script
# This script helps you deploy to different platforms

echo "🚀 DevMaster AI - Deployment Helper"
echo "===================================="
echo ""
echo "Choose your deployment platform:"
echo ""
echo "1) Vercel (Recommended - Easiest)"
echo "2) Railway.app"
echo "3) Netlify"
echo "4) Heroku"
echo "5) Render.com"
echo "6) Local Docker"
echo "7) Show Deployment Guide"
echo ""
read -p "Enter your choice (1-7): " choice

case $choice in
  1)
    echo ""
    echo "📋 VERCEL DEPLOYMENT"
    echo "===================="
    echo ""
    echo "1. Go to https://vercel.com"
    echo "2. Sign up with GitHub"
    echo "3. Click 'New Project'"
    echo "4. Import your repository"
    echo "5. Click 'Deploy'"
    echo ""
    echo "Your app will be live in 2-3 minutes!"
    echo ""
    echo "Want to install Vercel CLI? (Optional)"
    read -p "Install vercel CLI? (y/n): " install_vercel
    if [ "$install_vercel" = "y" ]; then
      npm install -g vercel
      vercel
    fi
    ;;
  2)
    echo ""
    echo "📋 RAILWAY.APP DEPLOYMENT"
    echo "========================="
    echo ""
    echo "1. Go to https://railway.app"
    echo "2. Sign up with GitHub"
    echo "3. Create 'New Project'"
    echo "4. Deploy from GitHub"
    echo "5. Select your repository"
    echo ""
    echo "Your app will be live in 2-3 minutes!"
    ;;
  3)
    echo ""
    echo "📋 NETLIFY DEPLOYMENT"
    echo "===================="
    echo ""
    echo "1. Go to https://netlify.com"
    echo "2. Sign up with GitHub"
    echo "3. Click 'New site from Git'"
    echo "4. Connect GitHub repository"
    echo "5. Click 'Deploy site'"
    echo ""
    echo "Your app will be live in 2-3 minutes!"
    ;;
  4)
    echo ""
    echo "📋 HEROKU DEPLOYMENT"
    echo "==================="
    echo ""
    echo "Installing Heroku CLI..."
    npm install -g heroku
    heroku login
    heroku create
    git push heroku main
    heroku open
    ;;
  5)
    echo ""
    echo "📋 RENDER.COM DEPLOYMENT"
    echo "======================="
    echo ""
    echo "1. Go to https://render.com"
    echo "2. Sign up with GitHub"
    echo "3. Create 'New Web Service'"
    echo "4. Connect to your GitHub repo"
    echo "5. Auto-deploy!"
    echo ""
    echo "Your app will be live in 2-3 minutes!"
    ;;
  6)
    echo ""
    echo "🐳 DOCKER DEPLOYMENT"
    echo "===================="
    echo ""
    echo "Building Docker image..."
    docker build -t devmaster-ai .
    echo ""
    echo "Running container..."
    docker run -p 3000:3000 devmaster-ai
    echo ""
    echo "Your app is running at http://localhost:3000"
    ;;
  7)
    echo ""
    echo "📖 Opening deployment guide..."
    cat DEPLOY.md
    ;;
  *)
    echo "Invalid choice. Please run the script again."
    ;;
esac

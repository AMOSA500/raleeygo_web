#!/bin/bash

# RaleeyGo Website - Quick Start Script
# Run this script to set up and start your website

echo "🚀 RaleeyGo Website Setup"
echo "========================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    echo "Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Check if we're in the website directory
if [ ! -f "package.json" ]; then
    echo "⚠️  Warning: package.json not found"
    echo "Make sure you're in the /website directory"
    echo ""
    echo "Run: cd /repo/website"
    exit 1
fi

echo "📦 Installing dependencies..."
echo ""
npm install

if [ $? -ne 0 ]; then
    echo "❌ Installation failed"
    exit 1
fi

echo ""
echo "✅ Installation complete!"
echo ""
echo "🎨 Starting development server..."
echo ""
echo "Your website will open at: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""
echo "========================="
echo ""

# Start the development server
npm run dev

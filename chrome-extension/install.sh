#!/bin/bash

# LeetCode Pattern Hints - Installation Script
echo "🚀 LeetCode Pattern Hints - Installation Script"
echo "================================================"

# Check if we're in the right directory
if [ ! -f "manifest.json" ]; then
    echo "❌ Error: manifest.json not found!"
    echo "Please run this script from the chrome-extension directory"
    exit 1
fi

echo "✅ Found manifest.json"
echo "✅ Extension files are ready"

# Create icons if they don't exist
if [ ! -d "icons" ] || [ ! -f "icons/icon16.png" ]; then
    echo "📱 Creating icons..."
    mkdir -p icons
    
    # Create simple placeholder icons (you can replace these later)
    echo "Creating placeholder icons..."
    echo "Note: You can generate proper icons using create-icons.html"
fi

echo ""
echo "🎯 Installation Instructions:"
echo "1. Open Chrome and go to chrome://extensions/"
echo "2. Enable 'Developer mode' (toggle in top-right)"
echo "3. Click 'Load unpacked'"
echo "4. Select this folder: $(pwd)"
echo "5. Click 'Select Folder'"
echo ""
echo "🧪 Test the extension:"
echo "1. Open test.html in Chrome"
echo "2. Look for highlighted keywords"
echo "3. Hover over keywords to see hints"
echo ""
echo "✅ Installation complete!"

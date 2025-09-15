# 🚀 LeetCode Pattern Hints - Installation Guide

## Quick Start (5 minutes)

### Step 1: Download the Extension
1. Clone or download this repository
2. Navigate to the `chrome-extension` folder

### Step 2: Install in Chrome
1. Open Google Chrome
2. Go to `chrome://extensions/`
3. Enable **Developer mode** (toggle in top-right corner)
4. Click **Load unpacked**
5. Select the `chrome-extension` folder
6. The extension should now appear in your extensions list

### Step 3: Test the Extension
1. Visit [LeetCode](https://leetcode.com/problems/two-sum/)
2. Look for highlighted keywords in the problem statement
3. Hover over any highlighted keyword to see hints
4. Click the extension icon to open the popup

## 🎯 What You'll See

### Keyword Highlighting
- Keywords like "array", "sum", "find" will be highlighted
- Hover over them to see instant hints
- Click for persistent hint display

### Hint Popup
- **Pattern**: Algorithm pattern name
- **Algorithm**: Specific algorithm to use
- **Complexity**: Time and space complexity
- **Template**: Ready-to-use code template
- **Hints**: Implementation tips and tricks

### Extension Popup
- Toggle hints on/off
- View statistics
- See supported patterns
- Access settings

## 🔧 Troubleshooting

### Extension Not Working?
1. **Check if it's enabled**: Go to `chrome://extensions/` and ensure the extension is enabled
2. **Refresh the page**: Reload the LeetCode page after installing
3. **Check permissions**: Ensure the extension has access to the current site
4. **Try a different site**: Test on HackerRank or Codeforces

### Keywords Not Highlighted?
1. **Enable the extension**: Click the extension icon and ensure it's toggled on
2. **Check the site**: Make sure you're on a supported site
3. **Look for keywords**: Not all text will be highlighted, only relevant keywords
4. **Refresh the page**: Try reloading the page

### Hints Not Showing?
1. **Hover properly**: Make sure you're hovering over highlighted keywords
2. **Check popup blockers**: Ensure popup blockers aren't interfering
3. **Try clicking**: Click on keywords if hovering doesn't work
4. **Check console**: Open DevTools and look for errors

## 🌐 Supported Sites

The extension works on these sites:
- ✅ **LeetCode**: leetcode.com, leetcode.cn
- ✅ **HackerRank**: hackerrank.com
- ✅ **Codeforces**: codeforces.com
- ✅ **AtCoder**: atcoder.jp
- ✅ **Any site** with coding problems

## 📱 Browser Compatibility

- ✅ **Chrome**: 88+ (Recommended)
- ✅ **Edge**: 88+ (Chromium-based)
- ✅ **Brave**: 1.20+
- ❌ **Firefox**: Not supported (different extension format)
- ❌ **Safari**: Not supported (different extension format)

## 🚀 Advanced Usage

### Custom Keywords
To add custom keywords, edit `keyword-database.js`:

```javascript
"your keyword": {
  pattern: "Your Pattern",
  algorithm: "Your Algorithm",
  template: "your code template",
  complexity: "O(n) time, O(1) space",
  color: "🔴",
  hints: ["Hint 1", "Hint 2"]
}
```

### Disable on Specific Sites
1. Go to `chrome://extensions/`
2. Click **Details** on the extension
3. Click **Site access**
4. Choose **On specific sites**
5. Add sites to exclude

### Reset Extension
1. Go to `chrome://extensions/`
2. Click **Remove** on the extension
3. Reinstall following the installation steps

## 🎨 Customization

### Change Highlight Colors
Edit `styles.css` and modify the `.leetcode-hint-keyword` class:

```css
.leetcode-hint-keyword {
  background: your-gradient-here;
  /* other styles */
}
```

### Modify Popup Design
Edit `popup.html` and `styles.css` in the popup section.

### Add New Patterns
Edit `keyword-database.js` to add new algorithm patterns.

## 📊 Performance

### Memory Usage
- **Lightweight**: ~2MB memory usage
- **Fast**: Instant keyword detection
- **Efficient**: Only processes visible text

### Battery Impact
- **Minimal**: No background processes
- **On-demand**: Only activates when needed
- **Optimized**: Efficient DOM scanning

## 🔒 Privacy & Security

### Data Collection
- **No data collected**: Extension doesn't send data anywhere
- **Local storage only**: Settings stored locally
- **No tracking**: No user behavior tracking

### Permissions
- **Active tab**: To read page content
- **Storage**: To save settings
- **Host permissions**: To work on coding sites

## 🆘 Support

### Getting Help
1. **Check this guide**: Most issues are covered here
2. **GitHub Issues**: Report bugs on GitHub
3. **Email**: Contact support@exponentlabs.com

### Common Issues

**Q: Extension icon not showing?**
A: Check if the extension is enabled in chrome://extensions/

**Q: Keywords not highlighting?**
A: Make sure you're on a supported site and the extension is enabled

**Q: Hints not appearing?**
A: Try clicking on keywords instead of hovering

**Q: Extension crashes?**
A: Try refreshing the page or reinstalling the extension

## 🎉 Success!

If everything is working correctly, you should see:
- ✅ Keywords highlighted on LeetCode problems
- ✅ Hover hints appearing instantly
- ✅ Extension popup working
- ✅ Statistics tracking

**Happy coding! 🚀**

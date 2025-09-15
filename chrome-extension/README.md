# LeetCode Pattern Hints Chrome Extension

A comprehensive Chrome extension that provides instant LeetCode pattern hints and algorithm suggestions when you hover over keywords in coding problems.

## 🚀 Features

- **Instant Hints**: Hover over any LeetCode-related keyword to see pattern hints
- **Comprehensive Database**: 50+ keywords with detailed algorithm information
- **Rich UI**: Beautiful popup with templates, complexity analysis, and hints
- **Multi-Site Support**: Works on LeetCode, HackerRank, Codeforces, and more
- **Smart Detection**: Automatically detects and highlights relevant keywords
- **Pattern Recognition**: Covers all major algorithm patterns from the README

## 📦 Installation

### From Source (Developer Mode)

1. Clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the `chrome-extension` folder
5. The extension will be installed and ready to use

### From Chrome Web Store (Coming Soon)

The extension will be available on the Chrome Web Store soon.

## 🎯 Supported Keywords

The extension recognizes 50+ keywords including:

### Data Structures
- `array`, `string`, `linked list`, `tree`, `graph`, `hash`

### Operations
- `sum`, `running sum`, `find`, `search`, `traverse`, `generate`

### Constraints
- `without repeating`, `longest substring`, `sorted`, `unique`, `duplicate`

### Optimization
- `longest`, `shortest`, `maximum`, `minimum`

### Sequences
- `substring`, `subarray`, `subsequence`, `contiguous`

### Frequency
- `frequency`, `count`, `occurrence`, `track`

### Generation
- `generate all`, `permutations`, `combinations`, `subsets`

### Search
- `find target`, `rotated`, `peak element`, `binary search`

### Advanced Patterns
- `top k`, `kth largest`, `priority`, `how many ways`, `valid parentheses`

## 🔧 How It Works

1. **Keyword Detection**: Scans the page for LeetCode-related keywords
2. **Pattern Matching**: Matches keywords to algorithm patterns
3. **Hint Display**: Shows rich popup with:
   - Pattern name and algorithm
   - Time/space complexity
   - Code template
   - Implementation hints
4. **Smart Highlighting**: Highlights keywords with visual feedback

## 🎨 UI Components

### Keyword Highlighting
- Gradient background with hover effects
- Smooth animations and transitions
- Visual feedback on interaction

### Hint Popup
- Clean, modern design
- Color-coded patterns
- Syntax-highlighted code templates
- Organized information hierarchy

### Extension Popup
- Toggle on/off functionality
- Statistics and usage tracking
- Pattern overview
- Settings and preferences

## 🌐 Supported Sites

- **LeetCode**: leetcode.com, leetcode.cn
- **HackerRank**: hackerrank.com
- **Codeforces**: codeforces.com
- **AtCoder**: atcoder.jp
- **And more**: Any site with coding problems

## 🛠️ Development

### Project Structure
```
chrome-extension/
├── manifest.json          # Extension manifest
├── content.js            # Content script for keyword detection
├── popup.html            # Extension popup UI
├── popup.js              # Popup functionality
├── styles.css            # Styling for hints and popup
├── keyword-database.js   # Comprehensive keyword database
├── icons/                # Extension icons
└── README.md            # This file
```

### Key Files

- **`manifest.json`**: Extension configuration and permissions
- **`content.js`**: Main logic for keyword detection and hint display
- **`keyword-database.js`**: Database of patterns, algorithms, and templates
- **`popup.html/js`**: Extension popup interface
- **`styles.css`**: Styling for all UI components

### Adding New Keywords

To add new keywords, edit `keyword-database.js`:

```javascript
"new keyword": {
  pattern: "Pattern Name",
  algorithm: "Algorithm Name", 
  template: "code template here",
  complexity: "O(n) time, O(1) space",
  color: "🔴",
  hints: ["Hint 1", "Hint 2", "Hint 3"]
}
```

## 🚀 Usage

1. **Install the extension** following the installation steps above
2. **Visit any supported site** (LeetCode, HackerRank, etc.)
3. **Look for highlighted keywords** in problem statements
4. **Hover over keywords** to see instant hints
5. **Click keywords** for persistent hint display
6. **Use the extension popup** to toggle on/off or view statistics

## 🎯 Benefits

- **Faster Problem Solving**: Instant pattern recognition
- **Learning Aid**: Learn algorithms through keyword association
- **Interview Prep**: Practice with real LeetCode problems
- **Pattern Mastery**: Build intuition for algorithm selection
- **Time Saving**: No need to look up patterns manually

## 🔮 Future Features

- [ ] **AI-Powered Hints**: Context-aware suggestions
- [ ] **Custom Keywords**: User-defined keyword patterns
- [ ] **Problem Analysis**: Automatic problem difficulty assessment
- [ ] **Progress Tracking**: Learning progress and statistics
- [ ] **Dark Mode**: Theme customization
- [ ] **Mobile Support**: Responsive design improvements

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by the comprehensive LeetCode preparation system
- Built on the keyword-to-algorithm mapping approach
- Thanks to the LeetCode community for feedback and suggestions

## 📞 Support

If you encounter any issues or have suggestions, please:

1. Check the [Issues](https://github.com/exponentlabshq/leetcode-prep/issues) page
2. Create a new issue with detailed information
3. Contact us at [support@exponentlabs.com](mailto:support@exponentlabs.com)

---

**Happy Coding! 🚀**

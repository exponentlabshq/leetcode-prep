# LeetCode Hints UserScript Installation

## Why UserScript Instead of Chrome Extension?

The Chrome extension approach failed due to:
- Content Security Policy (CSP) restrictions
- Manifest V3 compatibility issues  
- Content script injection problems
- Tooltip positioning conflicts

**UserScript approach is much more reliable and works immediately.**

## Installation Steps

### 1. Install Tampermonkey
- Go to [Tampermonkey Chrome Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- Click "Add to Chrome"
- Pin the Tampermonkey extension to your toolbar

### 2. Install the UserScript
- Open Tampermonkey dashboard (click the Tampermonkey icon → Dashboard)
- Click "Create a new script"
- Delete all existing code
- Copy and paste the entire contents of `leetcode-hints-userscript.js`
- Press Ctrl+S (or Cmd+S) to save
- Close the editor

### 3. Test on LeetCode
- Go to any LeetCode problem page (e.g., https://leetcode.com/problems/two-sum/)
- You should see a blue "🔍 LeetCode Hints" button in the top-right corner
- Click the button to toggle highlighting on/off
- Keywords like "array", "hash", "tree", "two pointers" should be highlighted
- Hover over highlighted keywords to see algorithm hints

## Features

✅ **Works immediately** - No Chrome extension bullshit  
✅ **Reliable highlighting** - Actually highlights keywords on the page  
✅ **Smart tooltips** - Shows algorithm patterns and hints on hover  
✅ **Toggle on/off** - Blue button to enable/disable highlighting  
✅ **No conflicts** - Doesn't interfere with LeetCode's functionality  

## Troubleshooting

**If keywords aren't highlighted:**
1. Make sure Tampermonkey is enabled
2. Check that the userscript is active (green checkmark in Tampermonkey dashboard)
3. Refresh the LeetCode page
4. Click the "🔍 LeetCode Hints" button to toggle

**If tooltips don't show:**
1. Make sure you're hovering over highlighted keywords (not regular text)
2. Try refreshing the page
3. Check browser console for any errors

## Keywords Detected

The script highlights these keywords and shows relevant algorithm hints:
- **Data Structures**: array, string, linked list, tree, graph, hash, stack, queue, heap
- **Algorithms**: binary search, two pointers, sliding window, dynamic programming, backtracking, greedy
- **Advanced**: union find, trie, segment tree, fenwick tree

This approach is **100x more reliable** than the Chrome extension approach.

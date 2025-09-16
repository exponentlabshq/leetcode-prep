// ==UserScript==
// @name         LeetCode Pattern Hints
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Highlight LeetCode keywords and show algorithm hints
// @author       You
// @match        https://leetcode.com/*
// @match        https://*.leetcode.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Pattern Database
    const PATTERN_DATABASE = {
        "array": { pattern: "Array/String", color: "🔴", hints: ["Use two pointers for sorted arrays", "Consider prefix sum for range queries"] },
        "string": { pattern: "Array/String", color: "🔴", hints: ["Use sliding window for substrings", "Consider hash map for character counting"] },
        "linked list": { pattern: "Linked List", color: "🔵", hints: ["Use two pointers for cycle detection", "Consider dummy head for edge cases"] },
        "tree": { pattern: "Tree/Graph", color: "🟡", hints: ["Use BFS for level-order traversal", "Consider DFS for path problems"] },
        "graph": { pattern: "Tree/Graph", color: "🟡", hints: ["Use BFS for shortest path", "Consider DFS for connected components"] },
        "hash": { pattern: "Hash Map/Set", color: "🟢", hints: ["Use for O(1) lookups", "Consider for frequency counting"] },
        "hash map": { pattern: "Hash Map/Set", color: "🟢", hints: ["Use for O(1) lookups", "Consider for frequency counting"] },
        "hash set": { pattern: "Hash Map/Set", color: "🟢", hints: ["Use for O(1) lookups", "Consider for duplicate detection"] },
        "stack": { pattern: "Stack/Queue", color: "🟠", hints: ["Use for LIFO operations", "Consider for parentheses matching"] },
        "queue": { pattern: "Stack/Queue", color: "🟠", hints: ["Use for FIFO operations", "Consider for BFS traversal"] },
        "heap": { pattern: "Heap/Priority Queue", color: "🟣", hints: ["Use for priority-based operations", "Consider for kth largest/smallest"] },
        "priority queue": { pattern: "Heap/Priority Queue", color: "🟣", hints: ["Use for priority-based operations", "Consider for kth largest/smallest"] },
        "binary search": { pattern: "Binary Search", color: "🔵", hints: ["Use on sorted arrays", "Consider for search problems"] },
        "two pointers": { pattern: "Two Pointers", color: "🔵", hints: ["Use on sorted arrays", "Consider for palindromes"] },
        "sliding window": { pattern: "Sliding Window", color: "🟡", hints: ["Use for substring problems", "Consider for subarray problems"] },
        "dynamic programming": { pattern: "Dynamic Programming", color: "🟣", hints: ["Use for optimization problems", "Consider for overlapping subproblems"] },
        "backtracking": { pattern: "Backtracking", color: "🟠", hints: ["Use for combination problems", "Consider for permutation problems"] },
        "greedy": { pattern: "Greedy", color: "🟢", hints: ["Use for optimization problems", "Consider for scheduling problems"] },
        "union find": { pattern: "Union Find", color: "🟣", hints: ["Use for connectivity problems", "Consider for cycle detection"] },
        "trie": { pattern: "Trie", color: "🟡", hints: ["Use for prefix problems", "Consider for word search"] },
        "segment tree": { pattern: "Segment Tree", color: "🟣", hints: ["Use for range queries", "Consider for range updates"] },
        "fenwick tree": { pattern: "Fenwick Tree", color: "🟣", hints: ["Use for prefix sum queries", "Consider for range sum updates"] }
    };

    const keywords = Object.keys(PATTERN_DATABASE);
    let isEnabled = true;

    // Inject CSS
    function injectCSS() {
        const style = document.createElement('style');
        style.id = 'leetcode-hints-styles';
        style.textContent = `
            .leetcode-hint-keyword {
                background: linear-gradient(120deg, #a8edea 0%, #fed6e3 100%) !important;
                padding: 1px 3px !important;
                border-radius: 2px !important;
                cursor: pointer !important;
                transition: all 0.2s ease !important;
                position: relative !important;
                display: inline !important;
                margin: 0 1px !important;
            }
            
            .leetcode-hint-keyword:hover {
                background: linear-gradient(120deg, #ff9a9e 0%, #fecfef 100%) !important;
                transform: scale(1.02) !important;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2) !important;
            }
            
            .leetcode-hint-tooltip {
                position: fixed !important;
                background: #1a1a1a !important;
                color: #ffffff !important;
                padding: 8px 12px !important;
                border-radius: 6px !important;
                font-size: 12px !important;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
                z-index: 99999 !important;
                box-shadow: 0 4px 12px rgba(0,0,0,0.4) !important;
                opacity: 0 !important;
                pointer-events: none !important;
                transition: opacity 0.2s ease !important;
                max-width: 250px !important;
                white-space: normal !important;
                line-height: 1.4 !important;
                border: 1px solid #333 !important;
            }
            
            .hint-pattern {
                font-weight: bold !important;
                color: #4CAF50 !important;
                margin-bottom: 2px !important;
                display: block !important;
            }
            
            .hint-tips {
                font-size: 11px !important;
                color: #ccc !important;
                margin-top: 4px !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Highlight keywords in text
    function highlightText(text) {
        let highlighted = text;
        for (const keyword of keywords) {
            const regex = new RegExp(`\\b(${keyword})\\b`, 'gi');
            highlighted = highlighted.replace(regex, (match) => {
                const data = PATTERN_DATABASE[keyword.toLowerCase()];
                return `<span class="leetcode-hint-keyword" data-keyword="${keyword.toLowerCase()}">${match}</span>`;
            });
        }
        return highlighted;
    }

    // Process text nodes
    function processTextNode(textNode) {
        if (!isEnabled) return false;
        
        const text = textNode.textContent;
        if (!text || text.trim().length === 0) return false;

        // Check if text contains any keywords
        let hasKeyword = false;
        for (const keyword of keywords) {
            if (text.toLowerCase().includes(keyword)) {
                hasKeyword = true;
                break;
            }
        }

        if (!hasKeyword) return false;

        const parent = textNode.parentNode;
        if (!parent || parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE') return false;
        if (parent.dataset.leetcodeHints === 'processed') return false;

        // Create highlighted content
        const highlighted = highlightText(text);
        if (highlighted === text) return false;

        // Replace text node
        const wrapper = document.createElement('span');
        wrapper.innerHTML = highlighted;
        wrapper.dataset.leetcodeHints = 'processed';
        
        // Add hover events
        wrapper.querySelectorAll('.leetcode-hint-keyword').forEach(span => {
            span.addEventListener('mouseenter', showTooltip);
            span.addEventListener('mouseleave', hideTooltip);
        });

        parent.replaceChild(wrapper, textNode);
        return true;
    }

    // Show tooltip
    function showTooltip(event) {
        const keyword = event.target.dataset.keyword;
        const data = PATTERN_DATABASE[keyword];
        if (!data) return;

        // Remove existing tooltip
        hideTooltip();

        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'leetcode-hint-tooltip';
        tooltip.innerHTML = `
            <div class="hint-pattern">${data.color} ${data.pattern}</div>
            <div class="hint-tips">${data.hints.join(' • ')}</div>
        `;

        // Position tooltip
        const rect = event.target.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - 10}px`;
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.opacity = '1';

        document.body.appendChild(tooltip);
    }

    // Hide tooltip
    function hideTooltip() {
        const tooltips = document.querySelectorAll('.leetcode-hint-tooltip');
        tooltips.forEach(tooltip => tooltip.remove());
    }

    // Scan page for keywords
    function scanPage() {
        if (!isEnabled) return;
        
        console.log('🔍 Scanning page for keywords...');
        
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        let processedCount = 0;
        let node;
        while (node = walker.nextNode()) {
            if (processTextNode(node)) {
                processedCount++;
            }
        }
        
        console.log(`✅ Processed ${processedCount} text nodes`);
    }

    // Clear highlights
    function clearHighlights() {
        const highlighted = document.querySelectorAll('[data-leetcode-hints="processed"]');
        highlighted.forEach(element => {
            if (element.parentNode) {
                element.parentNode.replaceChild(
                    document.createTextNode(element.textContent),
                    element
                );
            }
        });
        hideTooltip();
    }

    // Toggle function
    function toggle() {
        isEnabled = !isEnabled;
        if (isEnabled) {
            scanPage();
        } else {
            clearHighlights();
        }
        console.log('Toggle:', isEnabled ? 'ON' : 'OFF');
    }

    // Add toggle button
    function addToggleButton() {
        const button = document.createElement('button');
        button.textContent = '🔍 LeetCode Hints';
        button.style.cssText = `
            position: fixed !important;
            top: 20px !important;
            right: 20px !important;
            z-index: 100000 !important;
            background: #007bff !important;
            color: white !important;
            border: none !important;
            padding: 10px 15px !important;
            border-radius: 5px !important;
            cursor: pointer !important;
            font-size: 14px !important;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2) !important;
        `;
        button.onclick = toggle;
        document.body.appendChild(button);
    }

    // Initialize
    function init() {
        console.log('🚀 LeetCode Hints UserScript loaded!');
        
        injectCSS();
        addToggleButton();
        
        // Wait for page to load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(scanPage, 1000);
            });
        } else {
            setTimeout(scanPage, 1000);
        }
    }

    // Start
    init();
})();

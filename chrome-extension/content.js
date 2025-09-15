// LeetCode Pattern Hints - Content Script
// Detects keywords and shows hints on hover

class LeetCodeHintExtension {
  constructor() {
    this.keywords = new Set();
    this.hintPopup = null;
    this.isEnabled = true;
    this.highlightedElements = new Set();
    this.init();
  }

  async init() {
    // Load keyword database
    await this.loadKeywordDatabase();
    
    // Set up mutation observer to handle dynamic content
    this.setupMutationObserver();
    
    // Initial scan of the page
    this.scanPage();
    
    // Listen for messages from popup
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === 'toggle') {
        this.toggle();
        sendResponse({enabled: this.isEnabled});
      } else if (request.action === 'getStatus') {
        sendResponse({enabled: this.isEnabled});
      }
    });
  }

  async loadKeywordDatabase() {
    try {
      // Load the keyword database
      const response = await fetch(chrome.runtime.getURL('keyword-database.js'));
      const text = await response.text();
      
      // Execute the script to get the database
      const script = document.createElement('script');
      script.textContent = text;
      document.head.appendChild(script);
      
      // Wait for the script to execute
      await new Promise(resolve => setTimeout(resolve, 100));
      
      this.patternDatabase = window.PATTERN_DATABASE;
      
      if (this.patternDatabase) {
        this.extractKeywords();
        console.log('Content script: Pattern database loaded with', Object.keys(this.patternDatabase).length, 'keywords');
      } else {
        console.error('Content script: PATTERN_DATABASE not found');
      }
      
    } catch (error) {
      console.error('Content script: Failed to load pattern database:', error);
    }
  }

  extractKeywords() {
    if (!this.patternDatabase) return;
    
    // Extract all keywords from the database
    Object.keys(this.patternDatabase).forEach(keyword => {
      this.keywords.add(keyword.toLowerCase());
    });
    
    // Add variations and synonyms
    this.addKeywordVariations();
  }

  addKeywordVariations() {
    const variations = {
      'array': ['arrays', 'list', 'lists'],
      'string': ['strings', 'text', 'characters'],
      'linked list': ['linkedlist', 'linked-list', 'list node'],
      'tree': ['trees', 'binary tree', 'bst', 'binary search tree'],
      'graph': ['graphs', 'nodes', 'vertices'],
      'hash': ['hashmap', 'hash map', 'hashtable', 'hash table', 'dictionary', 'map'],
      'sum': ['sums', 'addition', 'total'],
      'running sum': ['running-sum', 'cumulative sum', 'prefix sum'],
      'find': ['finding', 'search', 'locate'],
      'search': ['searching', 'lookup', 'find'],
      'traverse': ['traversal', 'walk', 'visit'],
      'generate': ['generating', 'create', 'build'],
      'without repeating': ['no duplicates', 'unique characters', 'distinct'],
      'longest substring': ['longest-substring', 'max substring', 'longest string'],
      'sorted': ['sort', 'ordered', 'ascending', 'descending'],
      'unique': ['distinct', 'different', 'no duplicates'],
      'duplicate': ['duplicates', 'repeated', 'same'],
      'longest': ['maximum length', 'max length', 'longest possible'],
      'shortest': ['minimum length', 'min length', 'shortest possible'],
      'maximum': ['max', 'highest', 'largest'],
      'minimum': ['min', 'lowest', 'smallest'],
      'substring': ['substrings', 'sub-string', 'string segment'],
      'subarray': ['sub-arrays', 'sub-array', 'array segment'],
      'subsequence': ['sub-sequences', 'sub-sequence', 'sequence subset'],
      'contiguous': ['consecutive', 'adjacent', 'continuous'],
      'frequency': ['frequencies', 'count', 'occurrence'],
      'count': ['counting', 'number of', 'how many'],
      'occurrence': ['occurrences', 'instances', 'appearances'],
      'track': ['tracking', 'monitor', 'follow'],
      'generate all': ['generate-all', 'all combinations', 'all permutations'],
      'permutations': ['permutation', 'arrangements', 'orderings'],
      'combinations': ['combination', 'selections', 'subsets'],
      'subsets': ['subset', 'sub-sets', 'sub collections'],
      'find target': ['find-target', 'search target', 'locate target'],
      'rotated': ['rotation', 'rotated array', 'shifted'],
      'peak element': ['peak', 'peak elements', 'local maximum'],
      'binary search': ['binary-search', 'bisection', 'divide and conquer'],
      'top k': ['top-k', 'k largest', 'k smallest'],
      'kth largest': ['k-th largest', 'kth biggest', 'k largest element'],
      'priority': ['priorities', 'priority queue', 'heap'],
      'how many ways': ['number of ways', 'count ways', 'possible ways'],
      'valid parentheses': ['valid-parentheses', 'balanced parentheses', 'matching brackets'],
      'matching': ['match', 'matches', 'paired'],
      'brackets': ['parentheses', 'braces', 'square brackets']
    };

    Object.entries(variations).forEach(([key, variants]) => {
      variants.forEach(variant => {
        this.keywords.add(variant.toLowerCase());
      });
    });
  }

  setupMutationObserver() {
    const observer = new MutationObserver((mutations) => {
      if (!this.isEnabled) return;
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.scanElement(node);
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  scanPage() {
    if (!this.isEnabled) return;
    
    // Scan all text nodes in the page
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    let node;
    while (node = walker.nextNode()) {
      this.scanTextNode(node);
    }
  }

  scanElement(element) {
    if (!this.isEnabled) return;
    
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    let node;
    while (node = walker.nextNode()) {
      this.scanTextNode(node);
    }
  }

  scanTextNode(textNode) {
    if (!this.patternDatabase || !textNode.textContent) return;
    
    const text = textNode.textContent.toLowerCase();
    const parent = textNode.parentElement;
    
    // Skip if already processed or in code blocks
    if (parent.classList.contains('leetcode-hint-processed') || 
        parent.closest('code') || 
        parent.closest('pre') ||
        parent.closest('.monaco-editor')) {
      return;
    }

    // Find keywords in the text
    const foundKeywords = [];
    this.keywords.forEach(keyword => {
      if (text.includes(keyword)) {
        foundKeywords.push(keyword);
      }
    });

    if (foundKeywords.length > 0) {
      this.highlightKeywords(textNode, foundKeywords);
    }
  }

  highlightKeywords(textNode, keywords) {
    const parent = textNode.parentElement;
    parent.classList.add('leetcode-hint-processed');
    
    let html = textNode.textContent;
    
    // Sort keywords by length (longest first) to avoid partial matches
    keywords.sort((a, b) => b.length - a.length);
    
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
      html = html.replace(regex, `<span class="leetcode-hint-keyword" data-keyword="${keyword}">$1</span>`);
    });
    
    // Replace the text node with HTML
    const wrapper = document.createElement('span');
    wrapper.innerHTML = html;
    textNode.parentNode.replaceChild(wrapper, textNode);
    
    // Add event listeners to highlighted keywords
    wrapper.querySelectorAll('.leetcode-hint-keyword').forEach(span => {
      span.addEventListener('mouseenter', (e) => this.showHint(e));
      span.addEventListener('mouseleave', (e) => this.hideHint(e));
      span.addEventListener('click', (e) => this.showHint(e));
    });
  }

  showHint(event) {
    if (!this.isEnabled) return;
    
    const keyword = event.target.getAttribute('data-keyword');
    const pattern = this.patternDatabase[keyword];
    
    if (!pattern) return;
    
    // Remove existing popup
    this.hideHint();
    
    // Create hint popup
    this.hintPopup = document.createElement('div');
    this.hintPopup.className = 'leetcode-hint-popup';
    this.hintPopup.innerHTML = this.createHintHTML(keyword, pattern);
    
    // Position the popup
    this.positionPopup(event.target, this.hintPopup);
    
    // Add to document
    document.body.appendChild(this.hintPopup);
    
    // Add click outside to close
    setTimeout(() => {
      document.addEventListener('click', this.hideHint.bind(this));
    }, 100);
  }

  createHintHTML(keyword, pattern) {
    return `
      <div class="leetcode-hint-header">
        <span class="leetcode-hint-color">${pattern.color}</span>
        <span class="leetcode-hint-keyword-name">${keyword}</span>
        <button class="leetcode-hint-close">&times;</button>
      </div>
      <div class="leetcode-hint-content">
        <div class="leetcode-hint-pattern">
          <strong>Pattern:</strong> ${pattern.pattern}
        </div>
        <div class="leetcode-hint-algorithm">
          <strong>Algorithm:</strong> ${pattern.algorithm}
        </div>
        <div class="leetcode-hint-complexity">
          <strong>Complexity:</strong> ${pattern.complexity}
        </div>
        <div class="leetcode-hint-template">
          <strong>Template:</strong>
          <pre><code>${pattern.template}</code></pre>
        </div>
        <div class="leetcode-hint-hints">
          <strong>Hints:</strong>
          <ul>
            ${pattern.hints.map(hint => `<li>${hint}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  positionPopup(target, popup) {
    const rect = target.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    
    let top = rect.bottom + window.scrollY + 5;
    let left = rect.left + window.scrollX;
    
    // Adjust if popup goes off screen
    if (left + popupRect.width > window.innerWidth) {
      left = window.innerWidth - popupRect.width - 10;
    }
    
    if (top + popupRect.height > window.innerHeight + window.scrollY) {
      top = rect.top + window.scrollY - popupRect.height - 5;
    }
    
    popup.style.position = 'absolute';
    popup.style.top = `${top}px`;
    popup.style.left = `${left}px`;
    popup.style.zIndex = '10000';
  }

  hideHint(event) {
    if (this.hintPopup) {
      this.hintPopup.remove();
      this.hintPopup = null;
    }
    
    if (event) {
      document.removeEventListener('click', this.hideHint.bind(this));
    }
  }

  toggle() {
    this.isEnabled = !this.isEnabled;
    
    if (this.isEnabled) {
      this.scanPage();
    } else {
      // Remove all highlights
      document.querySelectorAll('.leetcode-hint-keyword').forEach(el => {
        const parent = el.parentNode;
        parent.replaceWith(parent.textContent);
      });
      
      // Remove processed class
      document.querySelectorAll('.leetcode-hint-processed').forEach(el => {
        el.classList.remove('leetcode-hint-processed');
      });
      
      this.hideHint();
    }
  }
}

// Initialize the extension when the page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', async () => {
    const extension = new LeetCodeHintExtension();
    await extension.init();
  });
} else {
  const extension = new LeetCodeHintExtension();
  extension.init();
}

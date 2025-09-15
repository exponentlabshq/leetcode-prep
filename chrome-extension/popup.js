// LeetCode Pattern Hints - Popup Script

class PopupController {
  constructor() {
    this.isEnabled = true;
    this.stats = {
      keywords: 0,
      patterns: 0,
      hintsShown: 0,
      sitesSupported: 8
    };
    this.patternDatabase = null;
    this.init();
  }

  async init() {
    // Load pattern database
    await this.loadPatternDatabase();
    
    // Set up event listeners
    this.setupEventListeners();
    
    // Load current state
    await this.loadState();
    
    // Update UI
    this.updateUI();
  }

  async loadPatternDatabase() {
    try {
      // Load the keyword database
      const response = await fetch(chrome.runtime.getURL('keyword-database.js'));
      const text = await response.text();
      
      // Execute the script to get the database
      const script = document.createElement('script');
      script.textContent = text;
      document.head.appendChild(script);
      
      // Wait a bit for the script to execute
      await new Promise(resolve => setTimeout(resolve, 100));
      
      this.patternDatabase = window.PATTERN_DATABASE;
      
      if (this.patternDatabase) {
        this.stats.keywords = Object.keys(this.patternDatabase).length;
        this.stats.patterns = new Set(Object.values(this.patternDatabase).map(p => p.pattern)).size;
        console.log('Pattern database loaded:', this.stats);
      } else {
        console.error('PATTERN_DATABASE not found on window object');
        this.showError('Pattern database not found');
      }
      
    } catch (error) {
      console.error('Failed to load pattern database:', error);
      this.showError('Failed to load pattern database');
    }
  }

  setupEventListeners() {
    // Toggle switch
    const toggleSwitch = document.getElementById('toggleSwitch');
    toggleSwitch.addEventListener('click', () => this.toggleExtension());
  }

  async loadState() {
    try {
      // Get current state from storage
      const result = await chrome.storage.local.get(['enabled', 'hintsShown']);
      this.isEnabled = result.enabled !== false; // Default to true
      this.stats.hintsShown = result.hintsShown || 0;
      
      // Update toggle switch
      const toggleSwitch = document.getElementById('toggleSwitch');
      if (this.isEnabled) {
        toggleSwitch.classList.add('active');
      } else {
        toggleSwitch.classList.remove('active');
      }
      
    } catch (error) {
      console.error('Failed to load state:', error);
    }
  }

  async toggleExtension() {
    try {
      this.isEnabled = !this.isEnabled;
      
      // Update storage
      await chrome.storage.local.set({ enabled: this.isEnabled });
      
      // Update toggle switch
      const toggleSwitch = document.getElementById('toggleSwitch');
      if (this.isEnabled) {
        toggleSwitch.classList.add('active');
      } else {
        toggleSwitch.classList.remove('active');
      }
      
      // Send message to content script
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab) {
        chrome.tabs.sendMessage(tab.id, { action: 'toggle' });
      }
      
      // Update UI
      this.updateUI();
      
    } catch (error) {
      console.error('Failed to toggle extension:', error);
      this.showError('Failed to toggle extension');
    }
  }

  updateUI() {
    // Update statistics
    document.getElementById('keywordsCount').textContent = this.stats.keywords;
    document.getElementById('patternsCount').textContent = this.stats.patterns;
    document.getElementById('hintsShown').textContent = this.stats.hintsShown;
    document.getElementById('sitesSupported').textContent = this.stats.sitesSupported;
    
    // Update pattern list
    this.updatePatternList();
    
    console.log('Popup UI updated with stats:', this.stats);
  }

  updatePatternList() {
    const patternList = document.getElementById('patternList');
    
    if (!this.patternDatabase) {
      patternList.innerHTML = '<div class="loading">Loading patterns...</div>';
      return;
    }
    
    // Group patterns by type
    const patternGroups = {};
    Object.entries(this.patternDatabase).forEach(([keyword, data]) => {
      const pattern = data.pattern;
      if (!patternGroups[pattern]) {
        patternGroups[pattern] = [];
      }
      patternGroups[pattern].push({ keyword, ...data });
    });
    
    // Create pattern list HTML
    let html = '';
    Object.entries(patternGroups).forEach(([pattern, items]) => {
      html += `
        <div class="pattern-item">
          <span class="pattern-color">${items[0].color}</span>
          <span class="pattern-name">${pattern}</span>
          <span class="pattern-count">${items.length}</span>
        </div>
      `;
    });
    
    patternList.innerHTML = html;
  }

  showError(message) {
    const content = document.querySelector('.content');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
    content.insertBefore(errorDiv, content.firstChild);
    
    // Remove error after 5 seconds
    setTimeout(() => {
      if (errorDiv.parentNode) {
        errorDiv.parentNode.removeChild(errorDiv);
      }
    }, 5000);
  }
}

// Initialize popup when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PopupController();
});

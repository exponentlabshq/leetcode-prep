// Comprehensive LeetCode Pattern Database
// Extracted from README.md patterns and expanded

const PATTERN_DATABASE = {
  // Data Structure Keywords
  "array": {
    pattern: "Array/String",
    algorithm: "Array Manipulation",
    template: "for (let i = 0; i < arr.length; i++) { /* process arr[i] */ }",
    complexity: "O(n) time, O(1) space",
    color: "🔴",
    hints: ["Use two pointers for sorted arrays", "Consider prefix sum for range queries", "Think about sliding window for subarrays"]
  },
  "string": {
    pattern: "Array/String", 
    algorithm: "String Manipulation",
    template: "for (let i = 0; i < str.length; i++) { /* process str[i] */ }",
    complexity: "O(n) time, O(1) space",
    color: "🔴",
    hints: ["Use sliding window for substrings", "Consider hash map for character counting", "Think about two pointers for palindromes"]
  },
  "linked list": {
    pattern: "Linked List",
    algorithm: "Linked List Traversal",
    template: "while (current) { /* process current.val */ current = current.next; }",
    complexity: "O(n) time, O(1) space",
    color: "🔵",
    hints: ["Use two pointers for cycle detection", "Consider dummy head for edge cases", "Think about recursion for complex operations"]
  },
  "tree": {
    pattern: "Tree/Graph",
    algorithm: "BFS/DFS",
    template: "function dfs(node) { if (!node) return; /* process node */ dfs(node.left); dfs(node.right); }",
    complexity: "O(V + E) time, O(h) space",
    color: "🟡",
    hints: ["Use BFS for level-order traversal", "Consider DFS for path problems", "Think about recursion vs iteration"]
  },
  "graph": {
    pattern: "Tree/Graph",
    algorithm: "BFS/DFS",
    template: "function dfs(node) { if (visited.has(node)) return; visited.add(node); /* process node */ }",
    complexity: "O(V + E) time, O(V) space",
    color: "🟡",
    hints: ["Use BFS for shortest path", "Consider DFS for connected components", "Think about topological sort"]
  },
  "hash": {
    pattern: "Hash Map/Set",
    algorithm: "Hash-based Lookup",
    template: "const map = new Map(); map.set(key, value); if (map.has(key)) { /* process */ }",
    complexity: "O(1) average, O(k) space",
    color: "⚫",
    hints: ["Use for O(1) lookups", "Consider for frequency counting", "Think about space vs time tradeoff"]
  },

  // Operation Keywords
  "sum": {
    pattern: "Prefix Sum",
    algorithm: "Cumulative Sum",
    template: "for (let i = 1; i < nums.length; i++) { nums[i] += nums[i-1]; }",
    complexity: "O(n) time, O(1) space",
    color: "🔴",
    hints: ["Use for range sum queries", "Consider prefix sum array", "Think about cumulative operations"]
  },
  "running sum": {
    pattern: "Prefix Sum",
    algorithm: "Running Sum Array",
    template: "for (let i = 1; i < nums.length; i++) { result[i] = result[i-1] + nums[i]; }",
    complexity: "O(n) time, O(1) space",
    color: "🔴",
    hints: ["Perfect for cumulative operations", "Use in-place for space efficiency", "Consider for range queries"]
  },
  "find": {
    pattern: "Search",
    algorithm: "Linear/Binary Search",
    template: "for (let i = 0; i < arr.length; i++) { if (arr[i] === target) return i; }",
    complexity: "O(n) time, O(1) space",
    color: "🔵",
    hints: ["Use binary search if sorted", "Consider hash map for O(1) lookup", "Think about two pointers"]
  },
  "search": {
    pattern: "Search",
    algorithm: "Search Algorithm",
    template: "function search(arr, target) { /* implement search logic */ }",
    complexity: "O(log n) to O(n) time",
    color: "🔵",
    hints: ["Binary search for sorted arrays", "Linear search for unsorted", "Consider hash map for O(1) lookup"]
  },
  "traverse": {
    pattern: "Traversal",
    algorithm: "BFS/DFS",
    template: "function traverse(node) { if (!node) return; /* process */ traverse(node.left); traverse(node.right); }",
    complexity: "O(V + E) time, O(h) space",
    color: "🟡",
    hints: ["Use BFS for level-order", "Consider DFS for deep traversal", "Think about iterative vs recursive"]
  },
  "generate": {
    pattern: "Generation",
    algorithm: "Backtracking",
    template: "function backtrack(path, choices) { if (baseCase) { result.push([...path]); return; } for (let choice of choices) { path.push(choice); backtrack(path, newChoices); path.pop(); } }",
    complexity: "O(2^n) time, O(n) space",
    color: "🟤",
    hints: ["Use for all combinations/permutations", "Consider pruning for optimization", "Think about state management"]
  },

  // Constraint Keywords
  "without repeating": {
    pattern: "Sliding Window",
    algorithm: "Two Pointers + Hash Set",
    template: "let left = 0, set = new Set(); for (let right = 0; right < s.length; right++) { while (set.has(s[right])) { set.delete(s[left++]); } set.add(s[right]); }",
    complexity: "O(n) time, O(k) space",
    color: "🟢",
    hints: ["Use sliding window technique", "Hash set for O(1) duplicate check", "Expand right, contract left"]
  },
  "longest substring": {
    pattern: "Sliding Window",
    algorithm: "Two Pointers + Hash Set",
    template: "let left = 0, maxLen = 0, set = new Set(); for (let right = 0; right < s.length; right++) { while (set.has(s[right])) { set.delete(s[left++]); } set.add(s[right]); maxLen = Math.max(maxLen, right - left + 1); }",
    complexity: "O(n) time, O(k) space",
    color: "🟢",
    hints: ["Classic sliding window problem", "Track maximum length", "Use hash set for duplicates"]
  },
  "sorted": {
    pattern: "Binary Search",
    algorithm: "Binary Search",
    template: "let left = 0, right = arr.length - 1; while (left <= right) { let mid = Math.floor((left + right) / 2); if (arr[mid] === target) return mid; else if (arr[mid] < target) left = mid + 1; else right = mid - 1; }",
    complexity: "O(log n) time, O(1) space",
    color: "🔵",
    hints: ["Perfect for binary search", "Consider two pointers", "Think about rotated arrays"]
  },
  "unique": {
    pattern: "Hash Set",
    algorithm: "Duplicate Detection",
    template: "const set = new Set(); for (let item of arr) { if (set.has(item)) return false; set.add(item); }",
    complexity: "O(n) time, O(n) space",
    color: "⚫",
    hints: ["Use hash set for O(1) lookup", "Consider space vs time tradeoff", "Think about alternative approaches"]
  },
  "duplicate": {
    pattern: "Hash Set",
    algorithm: "Duplicate Detection",
    template: "const set = new Set(); for (let item of arr) { if (set.has(item)) return true; set.add(item); }",
    complexity: "O(n) time, O(n) space",
    color: "⚫",
    hints: ["Hash set for O(1) duplicate check", "Consider sorting for O(1) space", "Think about bit manipulation"]
  },

  // Optimization Keywords
  "longest": {
    pattern: "Optimization",
    algorithm: "Dynamic Programming/Sliding Window",
    template: "let maxLen = 0; for (let i = 0; i < arr.length; i++) { /* update maxLen */ }",
    complexity: "O(n) time, O(1) space",
    color: "🟡",
    hints: ["Track maximum during iteration", "Consider sliding window", "Think about DP for complex cases"]
  },
  "shortest": {
    pattern: "Optimization",
    algorithm: "BFS/Dynamic Programming",
    template: "let minLen = Infinity; for (let i = 0; i < arr.length; i++) { /* update minLen */ }",
    complexity: "O(n) time, O(1) space",
    color: "🟡",
    hints: ["BFS for shortest path", "Track minimum during iteration", "Consider DP for complex cases"]
  },
  "maximum": {
    pattern: "Optimization",
    algorithm: "Greedy/Dynamic Programming",
    template: "let maxVal = -Infinity; for (let i = 0; i < arr.length; i++) { maxVal = Math.max(maxVal, arr[i]); }",
    complexity: "O(n) time, O(1) space",
    color: "🟠",
    hints: ["Track maximum during iteration", "Consider Kadane's algorithm", "Think about DP for complex cases"]
  },
  "minimum": {
    pattern: "Optimization",
    algorithm: "Greedy/Dynamic Programming",
    template: "let minVal = Infinity; for (let i = 0; i < arr.length; i++) { minVal = Math.min(minVal, arr[i]); }",
    complexity: "O(n) time, O(1) space",
    color: "🟠",
    hints: ["Track minimum during iteration", "Consider greedy approach", "Think about DP for complex cases"]
  },

  // Sequence Keywords
  "substring": {
    pattern: "Sliding Window",
    algorithm: "Two Pointers",
    template: "let left = 0; for (let right = 0; right < s.length; right++) { /* process window */ }",
    complexity: "O(n) time, O(k) space",
    color: "🟢",
    hints: ["Use sliding window technique", "Expand right, contract left", "Consider hash map for tracking"]
  },
  "subarray": {
    pattern: "Sliding Window/Prefix Sum",
    algorithm: "Two Pointers/Prefix Sum",
    template: "let left = 0; for (let right = 0; right < arr.length; right++) { /* process subarray */ }",
    complexity: "O(n) time, O(1) space",
    color: "🟢",
    hints: ["Sliding window for contiguous", "Prefix sum for range queries", "Consider Kadane's algorithm"]
  },
  "subsequence": {
    pattern: "Dynamic Programming",
    algorithm: "DP/Two Pointers",
    template: "let dp = new Array(n).fill(0); for (let i = 0; i < n; i++) { /* fill dp[i] */ }",
    complexity: "O(n²) time, O(n) space",
    color: "🟠",
    hints: ["Use DP for longest subsequence", "Consider two pointers for sorted", "Think about state transitions"]
  },
  "contiguous": {
    pattern: "Sliding Window",
    algorithm: "Two Pointers",
    template: "let left = 0; for (let right = 0; right < arr.length; right++) { /* process contiguous window */ }",
    complexity: "O(n) time, O(1) space",
    color: "🟢",
    hints: ["Perfect for sliding window", "Consider prefix sum", "Think about Kadane's algorithm"]
  },

  // Frequency Keywords
  "frequency": {
    pattern: "Hash Map",
    algorithm: "Frequency Counting",
    template: "const freq = new Map(); for (let item of arr) { freq.set(item, (freq.get(item) || 0) + 1); }",
    complexity: "O(n) time, O(k) space",
    color: "⚫",
    hints: ["Use hash map for counting", "Consider space optimization", "Think about sorting for O(1) space"]
  },
  "count": {
    pattern: "Hash Map",
    algorithm: "Counting",
    template: "let count = 0; for (let item of arr) { if (condition) count++; }",
    complexity: "O(n) time, O(1) space",
    color: "⚫",
    hints: ["Simple counting with loop", "Use hash map for frequency", "Consider two pointers"]
  },
  "occurrence": {
    pattern: "Hash Map",
    algorithm: "Frequency Tracking",
    template: "const occurrences = new Map(); for (let item of arr) { occurrences.set(item, (occurrences.get(item) || 0) + 1); }",
    complexity: "O(n) time, O(k) space",
    color: "⚫",
    hints: ["Hash map for frequency tracking", "Consider space vs time tradeoff", "Think about alternative data structures"]
  },
  "track": {
    pattern: "Hash Map/Set",
    algorithm: "State Tracking",
    template: "const tracker = new Set(); for (let item of arr) { if (tracker.has(item)) { /* process */ } tracker.add(item); }",
    complexity: "O(n) time, O(k) space",
    color: "⚫",
    hints: ["Use hash set for O(1) lookup", "Consider space optimization", "Think about alternative approaches"]
  },

  // Generation Keywords
  "generate all": {
    pattern: "Backtracking",
    algorithm: "Generate All Combinations",
    template: "function generateAll(path, choices) { if (baseCase) { result.push([...path]); return; } for (let choice of choices) { path.push(choice); generateAll(path, newChoices); path.pop(); } }",
    complexity: "O(2^n) time, O(n) space",
    color: "🟤",
    hints: ["Classic backtracking problem", "Use recursion with state management", "Consider pruning for optimization"]
  },
  "permutations": {
    pattern: "Backtracking",
    algorithm: "Generate Permutations",
    template: "function permute(path, choices) { if (path.length === choices.length) { result.push([...path]); return; } for (let i = 0; i < choices.length; i++) { if (path.includes(choices[i])) continue; path.push(choices[i]); permute(path, choices); path.pop(); } }",
    complexity: "O(n!) time, O(n) space",
    color: "🟤",
    hints: ["Use backtracking with visited tracking", "Consider iterative approach", "Think about optimization techniques"]
  },
  "combinations": {
    pattern: "Backtracking",
    algorithm: "Generate Combinations",
    template: "function combine(path, start, n, k) { if (path.length === k) { result.push([...path]); return; } for (let i = start; i <= n; i++) { path.push(i); combine(path, i + 1, n, k); path.pop(); } }",
    complexity: "O(C(n,k)) time, O(k) space",
    color: "🟤",
    hints: ["Use backtracking with start index", "Consider iterative approach", "Think about mathematical formula"]
  },
  "subsets": {
    pattern: "Backtracking",
    algorithm: "Generate Subsets",
    template: "function subsets(path, start, nums) { result.push([...path]); for (let i = start; i < nums.length; i++) { path.push(nums[i]); subsets(path, i + 1, nums); path.pop(); } }",
    complexity: "O(2^n) time, O(n) space",
    color: "🟤",
    hints: ["Use backtracking with start index", "Include empty subset", "Consider bit manipulation"]
  },

  // Search Keywords
  "find target": {
    pattern: "Binary Search",
    algorithm: "Binary Search",
    template: "let left = 0, right = arr.length - 1; while (left <= right) { let mid = Math.floor((left + right) / 2); if (arr[mid] === target) return mid; else if (arr[mid] < target) left = mid + 1; else right = mid - 1; }",
    complexity: "O(log n) time, O(1) space",
    color: "🔵",
    hints: ["Perfect for sorted arrays", "Consider rotated arrays", "Think about edge cases"]
  },
  "rotated": {
    pattern: "Binary Search",
    algorithm: "Modified Binary Search",
    template: "let left = 0, right = arr.length - 1; while (left < right) { let mid = Math.floor((left + right) / 2); if (arr[mid] > arr[right]) left = mid + 1; else right = mid; }",
    complexity: "O(log n) time, O(1) space",
    color: "🔵",
    hints: ["Modified binary search", "Find pivot point first", "Consider both halves"]
  },
  "peak element": {
    pattern: "Binary Search",
    algorithm: "Peak Finding",
    template: "let left = 0, right = arr.length - 1; while (left < right) { let mid = Math.floor((left + right) / 2); if (arr[mid] < arr[mid + 1]) left = mid + 1; else right = mid; }",
    complexity: "O(log n) time, O(1) space",
    color: "🔵",
    hints: ["Binary search for peak", "Compare with neighbors", "Consider edge cases"]
  },
  "binary search": {
    pattern: "Binary Search",
    algorithm: "Binary Search",
    template: "let left = 0, right = arr.length - 1; while (left <= right) { let mid = Math.floor((left + right) / 2); if (arr[mid] === target) return mid; else if (arr[mid] < target) left = mid + 1; else right = mid - 1; }",
    complexity: "O(log n) time, O(1) space",
    color: "🔵",
    hints: ["Requires sorted array", "Halve search space each iteration", "Consider edge cases carefully"]
  },

  // Advanced Patterns
  "top k": {
    pattern: "Heap",
    algorithm: "Priority Queue",
    template: "const heap = new MinHeap(); for (let num of nums) { heap.push(num); if (heap.size() > k) heap.pop(); }",
    complexity: "O(n log k) time, O(k) space",
    color: "🟣",
    hints: ["Use min heap for top k largest", "Use max heap for top k smallest", "Consider quick select for O(n) average"]
  },
  "kth largest": {
    pattern: "Heap",
    algorithm: "Priority Queue",
    template: "const heap = new MinHeap(); for (let num of nums) { heap.push(num); if (heap.size() > k) heap.pop(); } return heap.peek();",
    complexity: "O(n log k) time, O(k) space",
    color: "🟣",
    hints: ["Min heap of size k", "Pop smallest when size > k", "Consider quick select for O(n) average"]
  },
  "priority": {
    pattern: "Heap",
    algorithm: "Priority Queue",
    template: "const pq = new PriorityQueue(); for (let item of items) { pq.enqueue(item, priority); }",
    complexity: "O(n log n) time, O(n) space",
    color: "🟣",
    hints: ["Use for priority-based processing", "Consider custom comparator", "Think about space optimization"]
  },
  "how many ways": {
    pattern: "Dynamic Programming",
    algorithm: "Counting DP",
    template: "let dp = new Array(n + 1).fill(0); dp[0] = 1; for (let i = 1; i <= n; i++) { dp[i] = dp[i-1] + dp[i-2]; }",
    complexity: "O(n) time, O(n) space",
    color: "🟠",
    hints: ["Classic DP counting problem", "Define state transitions", "Consider space optimization"]
  },
  "valid parentheses": {
    pattern: "Stack",
    algorithm: "Stack Matching",
    template: "const stack = []; for (let char of s) { if (char === '(' || char === '[' || char === '{') { stack.push(char); } else { if (stack.length === 0) return false; const open = stack.pop(); if (!isMatch(open, char)) return false; } } return stack.length === 0;",
    complexity: "O(n) time, O(n) space",
    color: "🟢",
    hints: ["Use stack for matching", "Check for empty stack", "Consider all bracket types"]
  },
  "matching": {
    pattern: "Stack",
    algorithm: "Stack-based Matching",
    template: "const stack = []; for (let char of s) { if (isOpen(char)) { stack.push(char); } else { if (stack.length === 0 || !isMatch(stack.pop(), char)) return false; } } return stack.length === 0;",
    complexity: "O(n) time, O(n) space",
    color: "🟢",
    hints: ["Stack for bracket matching", "Check for balanced pairs", "Consider edge cases"]
  },
  "brackets": {
    pattern: "Stack",
    algorithm: "Bracket Matching",
    template: "const stack = []; for (let char of s) { if (char === '(' || char === '[' || char === '{') { stack.push(char); } else { if (stack.length === 0) return false; const open = stack.pop(); if (!isMatch(open, char)) return false; } } return stack.length === 0;",
    complexity: "O(n) time, O(n) space",
    color: "🟢",
    hints: ["Stack for bracket validation", "Check for balanced pairs", "Consider all bracket types"]
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PATTERN_DATABASE;
}

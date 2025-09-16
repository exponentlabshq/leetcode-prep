# LeetCode Decision Trees: Exhaustive Pattern Recognition Guide

## 🎯 **Universal Problem-Solving Decision Trees**

This document provides exhaustive decision trees for quickly identifying the correct algorithm and data structure approach for any LeetCode problem.

---

## **📋 Table of Contents**

1. [Array/String Patterns](#arraystring-patterns)
2. [Linked List Patterns](#linked-list-patterns)
3. [Tree/Graph Patterns](#treegraph-patterns)
4. [Heap/Priority Queue Patterns](#heappriority-queue-patterns)
5. [Stack/Queue Patterns](#stackqueue-patterns)
6. [Dynamic Programming Patterns](#dynamic-programming-patterns)
7. [Backtracking Patterns](#backtracking-patterns)
8. [Binary Search Patterns](#binary-search-patterns)
9. [Two Pointers Patterns](#two-pointers-patterns)
10. [Sliding Window Patterns](#sliding-window-patterns)

---

## **Array/String Patterns**

### **📝 Quick Decision Tree: Array/String Problems**

```
Is it an ARRAY/STRING problem?
├─ YES → Check operation type
│   ├─ Sum/Count operations?
│   │   ├─ "running sum", "prefix sum" → Prefix Sum Array
│   │   ├─ "subarray sum" → Prefix Sum + Hash Map
│   │   └─ "range sum queries" → Prefix Sum Array
│   ├─ Search operations?
│   │   ├─ "X sum" (two sum, three sum) → Two Pointers
│   │   ├─ "find target" → Hash Map
│   │   └─ "rotated sorted" → Modified Binary Search
│   ├─ Sequence operations?
│   │   ├─ "substring" → Sliding Window
│   │   ├─ "longest substring" → Sliding Window
│   │   └─ "palindrome" → Two Pointers
│   ├─ Optimization operations?
│   │   ├─ "maximum subarray" → Kadane's Algorithm
│   │   ├─ "top k elements" → Heap
│   │   └─ "minimum/maximum" → Greedy/DP
│   └─ Manipulation operations?
│       ├─ "reverse array" → Two Pointers
│       ├─ "rotate array" → Array Reversal
│       └─ "merge arrays" → Two Pointers
└─ NO → Check other data structures
```

### **🔍 Array/String Keyword Mapping**

| **Keywords** | **Algorithm** | **Implementation** |
|--------------|---------------|-------------------|
| "running sum", "prefix sum" | Prefix Sum Array | `prefix[i] = prefix[i-1] + nums[i]` |
| "subarray sum" | Prefix Sum + Hash Map | `sum_map[prefix_sum] = index` |
| "X sum" | Two Pointers | `left = 0, right = len-1` |
| "substring" | Sliding Window | `while right < len: expand/contract` |
| "palindrome" | Two Pointers | `while left < right: check chars` |
| "maximum subarray" | Kadane's Algorithm | `max_ending_here = max(nums[i], max_ending_here + nums[i])` |

---

## **Linked List Patterns**

### **📝 Quick Decision Tree: Linked List Problems**

```
Is it a LINKED LIST problem?
├─ YES → Check operation type
│   ├─ Arithmetic operations?
│   │   ├─ "add two numbers" → Two Pointers + Carry
│   │   ├─ "multiply" → Two Pointers + Carry
│   │   └─ "subtract" → Two Pointers + Borrow
│   ├─ Traversal operations?
│   │   ├─ "find middle" → Fast & Slow Pointers
│   │   ├─ "detect cycle" → Fast & Slow Pointers
│   │   └─ "reverse list" → In-place Reversal
│   ├─ Manipulation operations?
│   │   ├─ "merge lists" → Two Pointers
│   │   ├─ "remove duplicates" → Single Pointer
│   │   └─ "partition" → Two Pointers
│   └─ Position operations?
│       ├─ "remove nth from end" → Fast & Slow Pointers
│       ├─ "swap nodes" → Pointer Manipulation
│       └─ "rotate list" → Find Tail + Connect
└─ NO → Check other data structures
```

### **🔍 Linked List Keyword Mapping**

| **Keywords** | **Algorithm** | **Implementation** |
|--------------|---------------|-------------------|
| "add two numbers" | Two Pointers + Carry | `total = val1 + val2 + carry` |
| "find middle" | Fast & Slow Pointers | `slow = slow.next, fast = fast.next.next` |
| "detect cycle" | Fast & Slow Pointers | `while fast and fast.next:` |
| "reverse list" | In-place Reversal | `prev, curr, next = None, head, None` |
| "merge lists" | Two Pointers | `if l1.val <= l2.val: curr.next = l1` |
| "remove nth from end" | Fast & Slow Pointers | `fast moves n steps ahead` |

---

## **Tree/Graph Patterns**

### **📝 Quick Decision Tree: Tree/Graph Problems**

```
Is it a TREE/GRAPH problem?
├─ YES → Check structure type
│   ├─ Binary Tree?
│   │   ├─ Traversal needed?
│   │   │   ├─ "level order" → BFS (Queue)
│   │   │   ├─ "pre/in/post order" → DFS (Recursive)
│   │   │   └─ "zigzag" → BFS + Level tracking
│   │   ├─ Path problems?
│   │   │   ├─ "path sum" → DFS
│   │   │   ├─ "longest path" → DFS + Global max
│   │   │   └─ "path to leaf" → DFS
│   │   ├─ Structure problems?
│   │   │   ├─ "validate BST" → DFS + Range
│   │   │   ├─ "symmetric tree" → DFS (Two nodes)
│   │   │   └─ "balanced tree" → DFS + Height
│   │   └─ Construction problems?
│   │       ├─ "build from array" → DFS + Index
│   │       ├─ "serialize/deserialize" → DFS + String
│   │       └─ "clone tree" → DFS + Hash Map
│   ├─ Graph?
│   │   ├─ Traversal needed?
│   │   │   ├─ "shortest path" → BFS
│   │   │   ├─ "all paths" → DFS + Backtracking
│   │   │   └─ "connected components" → DFS/BFS
│   │   ├─ Cycle detection?
│   │   │   ├─ "detect cycle" → DFS + Visited set
│   │   │   └─ "topological sort" → DFS + Stack
│   │   └─ Shortest path?
│   │       ├─ "unweighted" → BFS
│   │       ├─ "weighted" → Dijkstra
│   │       └─ "negative weights" → Bellman-Ford
│   └─ Matrix as Graph?
│       ├─ "islands" → DFS/BFS
│       ├─ "word search" → DFS + Backtracking
│       └─ "shortest path in grid" → BFS
└─ NO → Check other data structures
```

### **🔍 Tree/Graph Keyword Mapping**

| **Keywords** | **Algorithm** | **Implementation** |
|--------------|---------------|-------------------|
| "level order" | BFS | `queue = [root], while queue:` |
| "path sum" | DFS | `def dfs(node, target):` |
| "validate BST" | DFS + Range | `def dfs(node, min_val, max_val):` |
| "shortest path" | BFS | `queue = [start], visited = set()` |
| "detect cycle" | DFS + Visited | `visited = set(), rec_stack = set()` |
| "islands" | DFS/BFS | `def dfs(i, j): mark as visited` |

---

## **Heap/Priority Queue Patterns**

### **📝 Quick Decision Tree: Heap Problems**

```
Is it a HEAP/PRIORITY QUEUE problem?
├─ YES → Check operation type
│   ├─ Top K problems?
│   │   ├─ "top k elements" → Min/Max Heap
│   │   ├─ "kth largest" → Min Heap (size k)
│   │   ├─ "k closest points" → Max Heap (size k)
│   │   └─ "k frequent elements" → Min Heap + Counter
│   ├─ Merge problems?
│   │   ├─ "merge k sorted lists" → Min Heap
│   │   ├─ "merge k sorted arrays" → Min Heap
│   │   └─ "external merge" → Min Heap
│   ├─ Median problems?
│   │   ├─ "find median" → Two Heaps (Min + Max)
│   │   ├─ "streaming median" → Two Heaps
│   │   └─ "median in data stream" → Two Heaps
│   └─ Scheduling problems?
│       ├─ "task scheduler" → Max Heap + Cooldown
│       ├─ "meeting rooms" → Min Heap
│       └─ "cpu scheduling" → Max Heap
└─ NO → Check other data structures
```

### **🔍 Heap Keyword Mapping**

| **Keywords** | **Algorithm** | **Implementation** |
|--------------|---------------|-------------------|
| "top k" | Min/Max Heap | `heapq.nlargest(k, nums)` |
| "kth largest" | Min Heap (size k) | `if len(heap) > k: heapq.heappop(heap)` |
| "merge k sorted" | Min Heap | `heapq.heappush(heap, (val, i, j))` |
| "find median" | Two Heaps | `max_heap (left), min_heap (right)` |
| "task scheduler" | Max Heap + Cooldown | `heapq.heappop(heap) + cooldown` |

---

## **Stack/Queue Patterns**

### **📝 Quick Decision Tree: Stack/Queue Problems**

```
Is it a STACK/QUEUE problem?
├─ YES → Check operation type
│   ├─ Stack problems?
│   │   ├─ Parentheses problems?
│   │   │   ├─ "valid parentheses" → Stack
│   │   │   ├─ "generate parentheses" → Backtracking
│   │   │   └─ "min remove parentheses" → Stack + String
│   │   ├─ Monotonic problems?
│   │   │   ├─ "next greater element" → Monotonic Stack
│   │   │   ├─ "daily temperatures" → Monotonic Stack
│   │   │   └─ "largest rectangle" → Monotonic Stack
│   │   ├─ Expression problems?
│   │   │   ├─ "evaluate expression" → Stack
│   │   │   ├─ "infix to postfix" → Stack
│   │   │   └─ "calculator" → Stack
│   │   └─ Undo/Redo problems?
│   │       ├─ "browser history" → Stack
│   │       ├─ "text editor" → Stack
│   │       └─ "command pattern" → Stack
│   ├─ Queue problems?
│   │   ├─ "level order traversal" → Queue
│   │   ├─ "sliding window max" → Deque
│   │   ├─ "first non-repeating" → Queue + Counter
│   │   └─ "circular queue" → Array + Head/Tail
│   └─ Deque problems?
│       ├─ "sliding window" → Deque
│       ├─ "palindrome" → Deque
│       └─ "max in window" → Deque
└─ NO → Check other data structures
```

### **🔍 Stack/Queue Keyword Mapping**

| **Keywords** | **Algorithm** | **Implementation** |
|--------------|---------------|-------------------|
| "valid parentheses" | Stack | `if char in '([{': stack.append(char)` |
| "next greater element" | Monotonic Stack | `while stack and nums[i] > stack[-1]:` |
| "evaluate expression" | Stack | `if op: b, a = stack.pop(), stack.pop()` |
| "level order" | Queue | `queue = [root], while queue:` |
| "sliding window max" | Deque | `while deque and nums[i] > deque[-1]:` |

---

## **Dynamic Programming Patterns**

### **📝 Quick Decision Tree: DP Problems**

```
Is it a DYNAMIC PROGRAMMING problem?
├─ YES → Check problem type
│   ├─ Optimization problems?
│   │   ├─ "maximum/minimum" → DP
│   │   ├─ "longest/shortest" → DP
│   │   └─ "optimal" → DP
│   ├─ Counting problems?
│   │   ├─ "how many ways" → DP
│   │   ├─ "number of paths" → DP
│   │   └─ "count combinations" → DP
│   ├─ Decision problems?
│   │   ├─ "can you reach" → DP
│   │   ├─ "is possible" → DP
│   │   └─ "can partition" → DP
│   ├─ Sequence problems?
│   │   ├─ "longest increasing subsequence" → DP
│   │   ├─ "longest common subsequence" → DP
│   │   └─ "edit distance" → DP
│   ├─ Array problems?
│   │   ├─ "house robber" → DP
│   │   ├─ "climbing stairs" → DP
│   │   └─ "coin change" → DP
│   ├─ String problems?
│   │   ├─ "word break" → DP
│   │   ├─ "palindrome partitioning" → DP
│   │   └─ "decode ways" → DP
│   └─ Matrix problems?
│       ├─ "unique paths" → DP
│       ├─ "minimum path sum" → DP
│       └─ "maximal square" → DP
└─ NO → Check other patterns
```

### **🔍 DP Keyword Mapping**

| **Keywords** | **Algorithm** | **Implementation** |
|--------------|---------------|-------------------|
| "maximum/minimum" | DP | `dp[i] = max/min(dp[i-1], ...)` |
| "how many ways" | DP | `dp[i] = dp[i-1] + dp[i-2]` |
| "longest subsequence" | DP | `dp[i][j] = dp[i-1][j-1] + 1` |
| "house robber" | DP | `dp[i] = max(dp[i-1], dp[i-2] + nums[i])` |
| "word break" | DP | `dp[i] = any(dp[j] and s[j:i] in wordDict)` |
| "unique paths" | DP | `dp[i][j] = dp[i-1][j] + dp[i][j-1]` |

---

## **Backtracking Patterns**

### **📝 Quick Decision Tree: Backtracking Problems**

```
Is it a BACKTRACKING problem?
├─ YES → Check problem type
│   ├─ Generation problems?
│   │   ├─ "generate all subsets" → Backtracking
│   │   ├─ "generate permutations" → Backtracking
│   │   ├─ "generate combinations" → Backtracking
│   │   └─ "generate parentheses" → Backtracking
│   ├─ Constraint problems?
│   │   ├─ "N-Queens" → Backtracking
│   │   ├─ "Sudoku solver" → Backtracking
│   │   ├─ "word search" → Backtracking
│   │   └─ "letter combinations" → Backtracking
│   ├─ Partition problems?
│   │   ├─ "palindrome partitioning" → Backtracking
│   │   ├─ "restore IP addresses" → Backtracking
│   │   └─ "split string" → Backtracking
│   └─ Path problems?
│       ├─ "all paths" → Backtracking
│       ├─ "path sum II" → Backtracking
│       └─ "word ladder" → BFS + Backtracking
└─ NO → Check other patterns
```

### **🔍 Backtracking Keyword Mapping**

| **Keywords** | **Algorithm** | **Implementation** |
|--------------|---------------|-------------------|
| "generate all" | Backtracking | `def backtrack(path, choices):` |
| "N-Queens" | Backtracking | `def is_safe(row, col, board):` |
| "word search" | Backtracking | `def dfs(i, j, word, visited):` |
| "palindrome partitioning" | Backtracking | `def is_palindrome(s):` |
| "all paths" | Backtracking | `path.append(node), backtrack(), path.pop()` |

---

## **Binary Search Patterns**

### **📝 Quick Decision Tree: Binary Search Problems**

```
Is it a BINARY SEARCH problem?
├─ YES → Check problem type
│   ├─ Search problems?
│   │   ├─ "find target" → Binary Search
│   │   ├─ "search in rotated array" → Modified Binary Search
│   │   └─ "search 2D matrix" → Binary Search
│   ├─ Position problems?
│   │   ├─ "find first/last occurrence" → Binary Search
│   │   ├─ "insert position" → Binary Search
│   │   └─ "find peak element" → Binary Search
│   ├─ Range problems?
│   │   ├─ "search range" → Binary Search (twice)
│   │   ├─ "find missing number" → Binary Search
│   │   └─ "find duplicate" → Binary Search
│   └─ Optimization problems?
│       ├─ "minimize maximum" → Binary Search on Answer
│       ├─ "maximize minimum" → Binary Search on Answer
│       └─ "kth smallest" → Binary Search on Answer
└─ NO → Check other patterns
```

### **🔍 Binary Search Keyword Mapping**

| **Keywords** | **Algorithm** | **Implementation** |
|--------------|---------------|-------------------|
| "find target" | Binary Search | `while left <= right: mid = (left + right) // 2` |
| "rotated array" | Modified Binary Search | `if nums[left] <= nums[mid]:` |
| "first occurrence" | Binary Search | `if nums[mid] == target: right = mid` |
| "insert position" | Binary Search | `if nums[mid] < target: left = mid + 1` |
| "peak element" | Binary Search | `if nums[mid] > nums[mid+1]: right = mid` |

---

## **Two Pointers Patterns**

### **📝 Quick Decision Tree: Two Pointers Problems**

```
Is it a TWO POINTERS problem?
├─ YES → Check problem type
│   ├─ Array problems?
│   │   ├─ "two sum" → Two Pointers
│   │   ├─ "three sum" → Two Pointers + Fixed
│   │   ├─ "four sum" → Two Pointers + Two Fixed
│   │   └─ "container with most water" → Two Pointers
│   ├─ String problems?
│   │   ├─ "palindrome" → Two Pointers
│   │   ├─ "valid palindrome" → Two Pointers
│   │   └─ "reverse string" → Two Pointers
│   ├─ Linked list problems?
│   │   ├─ "detect cycle" → Fast & Slow Pointers
│   │   ├─ "find middle" → Fast & Slow Pointers
│   │   └─ "remove duplicates" → Two Pointers
│   └─ Sorted array problems?
│       ├─ "remove duplicates" → Two Pointers
│       ├─ "move zeros" → Two Pointers
│       └─ "sort colors" → Three Pointers
└─ NO → Check other patterns
```

### **🔍 Two Pointers Keyword Mapping**

| **Keywords** | **Algorithm** | **Implementation** |
|--------------|---------------|-------------------|
| "two sum" | Two Pointers | `left = 0, right = len-1` |
| "palindrome" | Two Pointers | `while left < right:` |
| "detect cycle" | Fast & Slow | `slow = slow.next, fast = fast.next.next` |
| "remove duplicates" | Two Pointers | `if nums[i] != nums[j]: nums[j+1] = nums[i]` |
| "sort colors" | Three Pointers | `left, mid, right = 0, 0, len-1` |

---

## **Sliding Window Patterns**

### **📝 Quick Decision Tree: Sliding Window Problems**

```
Is it a SLIDING WINDOW problem?
├─ YES → Check problem type
│   ├─ String problems?
│   │   ├─ "longest substring" → Sliding Window
│   │   ├─ "minimum window" → Sliding Window
│   │   ├─ "substring with concatenation" → Sliding Window
│   │   └─ "longest repeating character" → Sliding Window
│   ├─ Array problems?
│   │   ├─ "maximum sum subarray" → Sliding Window
│   │   ├─ "longest subarray" → Sliding Window
│   │   ├─ "subarray product" → Sliding Window
│   │   └─ "fruit into baskets" → Sliding Window
│   ├─ Fixed size problems?
│   │   ├─ "maximum in window" → Sliding Window
│   │   ├─ "average of subarray" → Sliding Window
│   │   └─ "sliding window median" → Sliding Window + Heap
│   └─ Variable size problems?
│       ├─ "longest substring without repeating" → Sliding Window
│       ├─ "minimum window substring" → Sliding Window
│       └─ "longest substring with at most K" → Sliding Window
└─ NO → Check other patterns
```

### **🔍 Sliding Window Keyword Mapping**

| **Keywords** | **Algorithm** | **Implementation** |
|--------------|---------------|-------------------|
| "longest substring" | Sliding Window | `while right < len: expand/contract` |
| "minimum window" | Sliding Window | `while valid: shrink window` |
| "maximum sum subarray" | Sliding Window | `while sum > target: left += 1` |
| "maximum in window" | Sliding Window | `while deque and nums[i] > deque[-1]:` |
| "longest without repeating" | Sliding Window | `while char in window: left += 1` |

---

## **🎯 Universal Decision Framework**

### **Master Decision Tree**

```
What is the PRIMARY data structure?
├─ Array/String → Check Array/String Patterns
├─ Linked List → Check Linked List Patterns  
├─ Tree/Graph → Check Tree/Graph Patterns
├─ Heap → Check Heap Patterns
├─ Stack/Queue → Check Stack/Queue Patterns
└─ Other → Check DP/Backtracking/Binary Search

What is the PRIMARY operation?
├─ Search → Binary Search/Two Pointers
├─ Traversal → BFS/DFS
├─ Optimization → DP/Greedy
├─ Generation → Backtracking
├─ Arithmetic → Two Pointers + Carry
└─ Window → Sliding Window

What are the KEYWORDS?
├─ "sum" → Prefix Sum/Two Pointers
├─ "substring" → Sliding Window
├─ "palindrome" → Two Pointers
├─ "tree" → BFS/DFS
├─ "top k" → Heap
├─ "how many ways" → DP
└─ "generate all" → Backtracking
```

---

## **📚 Quick Reference Summary**

| **Pattern** | **Keywords** | **Algorithm** | **Time Complexity** |
|-------------|--------------|---------------|-------------------|
| **Prefix Sum** | "running sum", "prefix sum" | Prefix Sum Array | O(n) |
| **Two Pointers** | "X sum", "palindrome" | Two Pointers | O(n) |
| **Sliding Window** | "substring", "window" | Sliding Window | O(n) |
| **BFS/DFS** | "tree", "graph", "level order" | BFS/DFS | O(V + E) |
| **Heap** | "top k", "kth largest" | Heap | O(n log k) |
| **DP** | "how many ways", "maximum" | Dynamic Programming | O(n) to O(n²) |
| **Backtracking** | "generate all", "N-Queens" | Backtracking | O(2^n) |
| **Binary Search** | "find target", "rotated" | Binary Search | O(log n) |

---

This exhaustive decision tree guide provides a systematic approach to identifying the correct algorithm and data structure for any LeetCode problem based on keywords and problem characteristics.

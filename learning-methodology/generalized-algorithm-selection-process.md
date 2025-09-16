# Generalized Algorithm Selection Process

## 🎯 **Universal Problem-Solving Framework**

Based on the comprehensive keyword-to-algorithm mapping system, here's the generalized process for any LeetCode problem:

---

## **Step 1: Problem Analysis & Keyword Detection**

### **1.1 Read Problem Statement**
- Identify the **core operation** being asked
- Look for **data structure hints** (array, string, tree, matrix, etc.)
- Note **constraints** and **edge cases**

### **1.2 Extract Keywords & Problem Hints**
Scan for these **high-impact keywords**:

| **Category** | **Keywords** | **Immediate Algorithm Signal** |
|--------------|--------------|--------------------------------|
| **Sum/Count** | "running sum", "prefix sum", "cumulative", "subarray sum" | **Prefix Sum Array** |
| **Search** | "X Sum", "two sum", "three sum", "four sum" | **Two Pointers** |
| **Sequences** | "substring", "longest substring", "window" | **Sliding Window** |
| **Ordering** | "palindrome", "reverse", "sorted" | **Two Pointers, Stack** |
| **Hierarchy** | "tree", "binary tree", "level order" | **BFS, DFS** |
| **Grouping** | "parentheses", "brackets", "matching" | **Stack** |
| **Optimization** | "top k", "kth largest", "k closest" | **Heap/Priority Queue** |
| **Intervals** | "overlapping", "merge intervals", "meeting rooms" | **Greedy/Sorting** |
| **Search** | "rotated sorted", "peak element", "first/last occurrence" | **Modified Binary Search** |
| **Paths** | "shortest path", "word ladder", "islands" | **BFS, DFS** |
| **Combinations** | "how many ways", "all subsets", "permutations" | **DFS, Backtracking, DP** |
| **Optimization** | "maximum", "minimum", "longest", "shortest" | **DP, Greedy** |
| **Partitioning** | "split", "partition", "divide" | **DFS, DP** |
| **Relationships** | "connected components", "groups", "transitive" | **Union Find, BFS** |
| **Games** | "game", "winning strategy", "optimal play" | **DP** |

---

## **Step 2: Keyword → Algorithm Mapping**

### **2.1 Primary Pattern Recognition**
```
Keywords identified → Pattern Category → Specific Algorithm
```

### **2.2 Multi-Keyword Analysis**
When multiple keywords are present, prioritize by:
1. **Specificity** (more specific keywords override general ones)
2. **Data structure** (array vs tree vs graph)
3. **Problem type** (optimization vs search vs counting)

### **2.3 Algorithm Selection Decision Tree**

```
Is it a SUM/COUNT problem?
├─ YES → Prefix Sum Array
│
Is it a SEARCH problem?
├─ "X Sum" → Two Pointers
├─ "rotated sorted" → Modified Binary Search
│
Is it a SEQUENCE problem?
├─ "substring" → Sliding Window
├─ "palindrome" → Two Pointers + Stack
│
Is it a HIERARCHY problem?
├─ "tree" → BFS/DFS
├─ "level order" → BFS
│
Is it a GROUPING problem?
├─ "parentheses" → Stack
├─ "intervals" → Greedy/Sorting
│
Is it an OPTIMIZATION problem?
├─ "top k" → Heap
├─ "max/min" → DP/Greedy
│
Is it a COMBINATION problem?
├─ "how many ways" → DP/DFS
├─ "all subsets" → Backtracking
│
Is it a RELATIONSHIP problem?
├─ "connected" → Union Find
├─ "transitive" → BFS/Union Find
```

---

## **Step 3: Approach Refinement**

### **3.1 Data Structure Selection**
Based on the algorithm, choose appropriate data structure:
- **Array/String** → Index manipulation, two pointers
- **Tree** → Recursive DFS or iterative BFS
- **Graph** → Adjacency list/matrix + BFS/DFS
- **Heap** → Priority queue for top-k problems
- **Stack** → LIFO for parentheses, monotonic operations
- **Hash Map** → Frequency counting, lookups

### **3.2 Space-Time Trade-offs**
Consider implementation options:
- **In-place** vs **new data structure**
- **Iterative** vs **recursive**
- **Memoization** vs **tabulation** (for DP)

---

## **Step 4: Implementation Strategy**

### **4.1 Template Selection**
Choose the appropriate template based on the algorithm:

| **Algorithm** | **Template Pattern** | **Key Implementation** |
|---------------|---------------------|----------------------|
| **Prefix Sum** | `result[i] = result[i-1] + nums[i]` | Cumulative sum |
| **Two Pointers** | `left = 0, right = len-1` | Opposite ends |
| **Sliding Window** | `while right < len: expand/contract` | Dynamic window |
| **BFS** | `queue = [start], while queue:` | Level-by-level |
| **DFS** | `def dfs(node): if not node: return` | Recursive traversal |
| **Heap** | `heapq.heappush/pop` | Priority operations |
| **Stack** | `stack.append/pop` | LIFO operations |
| **DP** | `dp[i] = max/min(dp[i-1], ...)` | State transitions |

### **4.2 Edge Case Handling**
- **Empty inputs**
- **Single element**
- **All same elements**
- **Boundary conditions**

---

## **Step 5: Complexity Analysis**

### **5.1 Time Complexity**
- **Single pass** → O(n)
- **Two pointers** → O(n)
- **Sliding window** → O(n)
- **BFS/DFS** → O(V + E)
- **Heap operations** → O(n log k)
- **DP** → O(n) to O(n²)

### **5.2 Space Complexity**
- **In-place** → O(1)
- **New array** → O(n)
- **Recursion stack** → O(h) where h is height
- **DP table** → O(n) to O(n²)

---

## **Step 6: Verification & Testing**

### **6.1 Test Cases**
- **Example cases** from problem
- **Edge cases** (empty, single element, all same)
- **Boundary cases** (maximum constraints)

### **6.2 Code Review**
- **Correctness** of algorithm choice
- **Efficiency** of implementation
- **Readability** and maintainability

---

## **🎯 Universal Decision Framework**

```
1. READ → Extract keywords and data structure hints
2. MAP → Keywords → Algorithm category
3. REFINE → Choose specific algorithm and data structure
4. IMPLEMENT → Use appropriate template
5. ANALYZE → Verify time/space complexity
6. TEST → Run through test cases
```

---

## **📝 Quick Reference: Keyword → Algorithm Cheat Sheet**

| **See This** | **Think This** | **Use This** |
|--------------|----------------|--------------|
| "running sum" | Prefix Sum | `result[i] = result[i-1] + nums[i]` |
| "X sum" | Two Pointers | `left = 0, right = len-1` |
| "substring" | Sliding Window | `while right < len: expand/contract` |
| "tree" | BFS/DFS | `queue = [root]` or `def dfs(node)` |
| "parentheses" | Stack | `stack.append/pop` |
| "top k" | Heap | `heapq.heappush/pop` |
| "intervals" | Greedy | Sort by start/end time |
| "how many ways" | DP | `dp[i] = dp[i-1] + dp[i-2]` |
| "connected" | Union Find | `parent[x] = find(parent[x])` |
| "game" | DP | Optimal strategy with memoization |

---

This generalized process works for **any LeetCode problem** by systematically mapping keywords to algorithms and providing a structured approach to problem-solving.

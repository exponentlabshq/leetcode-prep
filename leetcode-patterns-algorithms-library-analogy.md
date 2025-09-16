# 🔧 Patterns & Algorithms: The Library's Operating System

*How data structures work together with patterns and algorithms in real LeetCode problems*

---

## From Mental Models to Problem-Solving

In our [previous guide](leetcode-mental-models-library-analogy.md), we built mental models for data structures using library analogies. Now let's see how these structures work together with **patterns** and **algorithms** to solve real problems.

Think of it this way: if data structures are the **furniture** in our library, then patterns and algorithms are the **procedures** and **workflows** that make the library function efficiently.

---

## 🎯 The Two-Pointer Pattern → The Librarian's Scanning Technique

**The Problem:** Find two books that add up to a specific value.

**The Library Analogy:** A librarian uses two bookmarks to scan the shelf efficiently:
- Start with one bookmark at the beginning, another at the end
- If the current books are too heavy (sum too large), move the right bookmark left
- If they're too light (sum too small), move the left bookmark right
- Keep adjusting until you find the perfect pair

**The Pattern:**
```python
# Two pointers: left at start, right at end
left, right = 0, len(books) - 1

while left < right:
    current_sum = books[left] + books[right]
    if current_sum == target:
        return [left, right]  # Found the pair!
    elif current_sum < target:
        left += 1  # Need heavier books
    else:
        right -= 1  # Need lighter books
```

**Why This Works:** Instead of checking every possible pair (O(n²)), we eliminate half the possibilities with each comparison (O(n)).

---

## 🔍 Sliding Window → The Librarian's Reading Glasses

**The Problem:** Find the longest sequence of consecutive books without any duplicates.

**The Library Analogy:** A librarian uses reading glasses that can only see a certain number of books at once. She slides these glasses along the shelf, expanding when she sees new books and contracting when she finds duplicates.

**The Pattern:**
```python
# Two pointers: left and right of our "reading glasses"
left = 0
unique_books = set()  # What's currently visible
max_length = 0

for right in range(len(books)):
    # Expand the window
    while books[right] in unique_books:
        unique_books.remove(books[left])
        left += 1  # Contract from left
    
    unique_books.add(books[right])
    max_length = max(max_length, right - left + 1)
```

**Why This Works:** We only look at each book twice (once when adding, once when removing), making it O(n) instead of O(n²).

---

## 🌳 Depth-First Search → The Librarian's Systematic Exploration

**The Problem:** Find all possible paths through the library's section system.

**The Library Analogy:** A librarian explores each section completely before moving to the next. She goes deep into one section, explores all its subsections, then backtracks to try other sections.

**The Pattern:**
```python
def explore_section(current_section, visited):
    if current_section in visited:
        return  # Already explored
    
    visited.add(current_section)
    # Process this section
    
    for next_section in current_section.connections:
        explore_section(next_section, visited)
    
    visited.remove(current_section)  # Backtrack
```

**Why This Works:** We systematically explore every possible path without missing any, and backtracking ensures we don't get stuck in loops.

---

## 🌊 Breadth-First Search → The Librarian's Level-by-Level Tour

**The Problem:** Find the shortest path from the entrance to any specific book.

**The Library Analogy:** A librarian gives tours level by level. She visits all sections on the first floor, then all on the second floor, then the third, etc. This guarantees she finds the shortest path.

**The Pattern:**
```python
from collections import deque

def find_shortest_path(start, target):
    queue = deque([start])
    visited = set()
    level = 0
    
    while queue:
        for _ in range(len(queue)):  # Process entire level
            current = queue.popleft()
            
            if current == target:
                return level  # Found it!
            
            for neighbor in current.connections:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
        
        level += 1  # Move to next level
```

**Why This Works:** By exploring level by level, the first time we reach our target, we know it's the shortest path.

---

## 🔄 Dynamic Programming → The Librarian's Memoization System

**The Problem:** Calculate how many ways to arrange books on a shelf with certain constraints.

**The Library Analogy:** A librarian keeps a notebook of calculations she's already done. When she needs to calculate something she's done before, she just looks it up instead of recalculating.

**The Pattern:**
```python
def count_arrangements(n, memo={}):
    if n in memo:
        return memo[n]  # Look it up!
    
    if n <= 1:
        return 1  # Base case
    
    # Calculate and remember
    result = count_arrangements(n-1, memo) + count_arrangements(n-2, memo)
    memo[n] = result
    return result
```

**Why This Works:** Instead of recalculating the same subproblems over and over (exponential time), we solve each subproblem once and reuse the answer (linear time).

---

## 🎲 Greedy Algorithms → The Librarian's "Best Choice Now" Strategy

**The Problem:** Schedule the maximum number of book club meetings in the library's meeting rooms.

**The Library Analogy:** A librarian always picks the meeting that ends earliest among the available options. This greedy choice leads to the optimal solution.

**The Pattern:**
```python
def schedule_meetings(meetings):
    # Sort by end time (greedy choice)
    meetings.sort(key=lambda x: x.end_time)
    
    scheduled = []
    last_end_time = 0
    
    for meeting in meetings:
        if meeting.start_time >= last_end_time:
            scheduled.append(meeting)
            last_end_time = meeting.end_time
    
    return scheduled
```

**Why This Works:** The greedy choice (earliest ending meeting) doesn't prevent us from making optimal choices later. Sometimes the obvious choice is the right choice.

---

## 🔗 How Patterns Work Together

Real LeetCode problems often combine multiple patterns:

**Example: "Find the longest substring with at most K distinct characters"**

1. **Data Structure:** Use a hash map to count characters (the magic catalog)
2. **Pattern:** Sliding window to maintain the substring (reading glasses)
3. **Algorithm:** Expand right, contract left when we exceed K distinct characters

```python
def longest_substring_with_k_distinct(s, k):
    char_count = {}  # Hash map: character -> count
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        # Expand window
        char_count[s[right]] = char_count.get(s[right], 0) + 1
        
        # Contract window if needed
        while len(char_count) > k:
            char_count[s[left]] -= 1
            if char_count[s[left]] == 0:
                del char_count[s[left]]
            left += 1
        
        max_length = max(max_length, right - left + 1)
    
    return max_length
```

---

## 🧠 The Mental Framework in Action

When you see a new problem, ask these questions in order:

1. **"What am I looking for?"** (target, count, existence, etc.)
2. **"What data structure fits this?"** (array for positions, hash map for lookups, set for uniqueness)
3. **"What pattern might work?"** (two pointers, sliding window, DFS/BFS)
4. **"How do I combine them?"** (use the data structure to support the pattern)

---

## 🎯 Practice Progression

Start with these problem types to build intuition:

**Beginner:**
- Two Sum (Two Pointers + Hash Map)
- Valid Parentheses (Stack)
- Contains Duplicate (Set)

**Intermediate:**
- Longest Substring Without Repeating Characters (Sliding Window + Set)
- Binary Tree Level Order Traversal (BFS + Queue)
- Climbing Stairs (Dynamic Programming)

**Advanced:**
- Word Ladder (BFS + Graph)
- Longest Increasing Subsequence (Dynamic Programming + Binary Search)
- Course Schedule (DFS + Graph Cycle Detection)

---

## 🚀 The Big Picture

Data structures are your **tools**. Patterns are your **techniques**. Algorithms are your **strategies**. 

Just like a librarian doesn't just know where books are stored, but also knows how to efficiently find, organize, and process them, you need to understand not just what each data structure does, but how to use them together to solve complex problems.

The library analogy gives you the **intuition**. These patterns give you the **methodology**. Combined, they turn abstract coding problems into concrete, solvable puzzles.

---

*Ready to start implementing? Begin with the beginner problems and work your way up. Each solved problem builds your pattern recognition muscle, making the next one easier to spot and solve.*

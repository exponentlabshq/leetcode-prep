# LeetCode 3 Cheatsheet: Longest Substring Without Repeating Characters

## 📋 **Full Problem Statement**

**3. Longest Substring Without Repeating Characters**  
**Difficulty:** 🟡 Medium  
**Status:** Solved

### **Problem Description**
Given a **<span style="color: #ff6b6b; font-weight: bold;">string s</span>**, find the **<span style="color: #4ecdc4; font-weight: bold;">length</span>** of the **<span style="color: #45b7d1; font-weight: bold;">longest substring</span>** **<span style="color: #96ceb4; font-weight: bold;">without duplicate characters</span>**.

### **Examples**

**Example 1:**
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**
```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

### **Constraints**
- 0 <= s.length <= 5 * 10^4
- s consists of English letters, digits, symbols and spaces.

---

## 🎯 **Problem Analysis**

**Problem:** Find the length of the longest substring without repeating characters.

**Difficulty:** 🟡 Medium

---

## **Step 1: Problem Analysis & Keyword Detection**

### **1.1 Core Operation Identified**
- **Operation:** Find longest substring
- **Data Structure:** String
- **Output:** Integer (length)

### **1.2 Keywords Extracted**
```
Keywords Found:
✅ "longest substring" → Sliding Window
✅ "without repeating characters" → Character Frequency Tracking
✅ "substring" → Contiguous Sequence
✅ "duplicate characters" → Hash Set/Map
✅ "length" → Optimization Problem
✅ "string" → String Manipulation
```

### **🔍 Keywords to Look For (Highlighted)**

| **Keyword Category** | **Keywords to Watch For** | **Algorithm Signal** | **Why Important** |
|---------------------|---------------------------|---------------------|-------------------|
| **Data Structure** | `"string"`, `"substring"` | **Sliding Window** | Tells you to use window technique |
| **Operation** | `"longest"`, `"maximum"` | **Optimization** | Indicates need to track maximum |
| **Constraint** | `"without repeating"`, `"duplicate"` | **Character Tracking** | Need to track character frequency |
| **Sequence** | `"substring"`, `"contiguous"` | **Window Management** | Must be contiguous, not subsequence |
| **Output** | `"length"`, `"size"` | **Counter/Tracker** | Track maximum length found |

### **🎯 Critical Keywords in Problem Statement**
> **"Given a string s, find the length of the longest substring without duplicate characters."**

**Highlighted Analysis:**
- 🔴 **"longest substring"** → Use sliding window technique
- 🔴 **"without repeating characters"** → Track character frequency
- 🔴 **"substring"** → Contiguous sequence (not subsequence)
- 🔴 **"duplicate characters"** → Use hash set/map for tracking
- 🔴 **"length"** → Track maximum length found

### **🔍 Keyword Analysis for Algorithm & Data Structure Selection**

| **Keyword** | **Color** | **Algorithm Hint** | **Data Structure Hint** | **Why This Matters** |
|-------------|-----------|-------------------|------------------------|---------------------|
| **"longest substring"** | 🔴 Red | **Sliding Window** | **Two Pointers** | Classic sliding window problem |
| **"without repeating"** | 🟢 Green | **Character Tracking** | **Hash Set** | Need to track unique characters |
| **"substring"** | 🔵 Blue | **Contiguous Sequence** | **Window Management** | Must be contiguous, not subsequence |
| **"duplicate characters"** | 🟡 Yellow | **Frequency Tracking** | **Hash Map/Set** | Track character occurrences |
| **"length"** | 🟣 Purple | **Optimization** | **Counter** | Track maximum length found |

### **🧠 Mental Model from Keywords**
```
"longest substring" → Think: "I need sliding window"
"without repeating" → Think: "Track character frequency"  
"substring" → Think: "Contiguous sequence, not subsequence"
"duplicate characters" → Think: "Use hash set for tracking"
"length" → Think: "Track maximum length"
```

### **⚡ Algorithm Selection Process**
1. **See "longest substring"** → **Algorithm**: Sliding Window
2. **See "without repeating"** → **Data Structure**: Hash Set
3. **See "substring"** → **Processing**: Contiguous sequence
4. **See "duplicate characters"** → **Implementation**: Character frequency tracking
5. **See "length"** → **Pattern**: Maximum length optimization

### **1.3 Data Structure Hints**
- **Input:** String (characters)
- **Output:** Integer (maximum length)
- **Constraints:** Up to 50,000 characters, various character types

---

## **Step 2: Keyword → Algorithm Mapping**

### **2.1 Primary Pattern Recognition**
```
Keywords identified → "longest substring" + "without repeating characters"
↓
Pattern Category → Sliding Window + Character Tracking
↓
Specific Algorithm → Sliding Window + Hash Set
```

### **2.2 Algorithm Selection Decision Tree**
```
Is it a STRING problem?
├─ YES → Check operation type
│   ├─ "substring" → Sliding Window
│   ├─ "longest substring" → Sliding Window + Optimization
│   └─ "without repeating" → Hash Set + Character Tracking
│
Is it an OPTIMIZATION problem?
├─ YES → Track maximum length
│
Is it a FREQUENCY problem?
├─ YES → Use Hash Set/Map
│
Combined → Sliding Window + Hash Set + Maximum Tracking
```

### **2.3 Multi-Keyword Analysis**
- **"longest substring"** → Primary pattern (Sliding Window)
- **"without repeating characters"** → Constraint (Character Tracking)
- **"substring"** → Sequence type (Contiguous)
- **"length"** → Output type (Integer optimization)

---

## **Step 3: Approach Refinement**

### **3.1 Data Structure Selection**
- **Primary:** Sliding Window (two pointers)
- **Auxiliary:** Hash Set (character tracking)
- **Output:** Integer (maximum length)

### **3.2 Space-Time Trade-offs**
- **Space:** O(min(m,n)) where m is charset size, n is string length
- **Time:** O(n) for single pass
- **Approach:** Expand right, contract left when duplicate found

---

## **Step 4: Implementation Strategy**

### **4.1 Template Selection**
**Algorithm:** Sliding Window + Hash Set

**Template Pattern:**
```python
# Sliding window with character tracking
left = 0
char_set = set()
max_length = 0

for right in range(len(s)):
    # Expand window
    # Contract window if duplicate
    # Update maximum
```

### **4.2 Key Implementation Details**

#### **Core Logic:**
1. **Initialize:** Two pointers, hash set, maximum length
2. **Expand:** Move right pointer, add character to set
3. **Contract:** Remove characters from left until no duplicates
4. **Update:** Track maximum length found
5. **Repeat:** Continue until end of string

#### **Character Tracking:**
```python
while s[right] in char_set:
    char_set.remove(s[left])
    left += 1
char_set.add(s[right])
max_length = max(max_length, right - left + 1)
```

---

## **Step 5: Complexity Analysis**

### **5.1 Time Complexity**
- **O(n)** where n is the length of the string
- **Single pass** through the string
- **Each character** visited at most twice (once by right, once by left)

### **5.2 Space Complexity**
- **O(min(m,n))** where m is charset size, n is string length
- **Hash set** stores unique characters in current window
- **Worst case** O(n) if all characters are unique

---

## **Step 6: Implementation Template**

### **6.1 Complete Solution Template**
```python
def lengthOfLongestSubstring(self, s):
    # Initialize pointers and tracking
    left = 0
    char_set = set()
    max_length = 0
    
    # Expand window with right pointer
    for right in range(len(s)):
        # Contract window if duplicate found
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        
        # Add current character to set
        char_set.add(s[right])
        
        # Update maximum length
        max_length = max(max_length, right - left + 1)
    
    return max_length
```

### **6.2 Edge Case Handling**
- **Empty string** → Return 0
- **Single character** → Return 1
- **All same characters** → Return 1
- **All unique characters** → Return string length

---

## **🎯 Mental Model: Step-by-Step Breakdown**

### **Pattern Recognition:**
1. **See "longest substring"** → Think "Sliding Window"
2. **See "without repeating"** → Think "Character Tracking"
3. **See "substring"** → Think "Contiguous sequence"

### **Algorithm Selection Process:**
```
Keywords identified → "longest substring" + "without repeating"
↓
Algorithm: Sliding Window + Hash Set
↓
Approach: Expand right, contract left when duplicate
↓
Implementation: while duplicate: remove from left, add to right
```

---

## **📝 Quick Decision Tree**

```
Is it a sliding window problem?
├─ YES → Use two pointers
│   ├─ Character tracking needed? → Use hash set
│   └─ Optimization needed? → Track maximum
└─ NO → Look for other patterns
```

---

## **🔗 Related Patterns to Remember**

- **Sliding Window** → Two pointers, expand/contract
- **Character Tracking** → Hash set/map for frequency
- **String Optimization** → Track maximum/minimum
- **Contiguous Sequences** → Window management

---

## **⚡ Key Insights**

1. **Sliding Window Pattern** → Expand right, contract left
2. **Character Tracking** → Use hash set for O(1) lookup
3. **Optimization** → Track maximum length continuously
4. **Window Management** → Remove from left until valid

---

## **🎯 Universal Template for Sliding Window String Problems**

```python
def slidingWindowString(s):
    left = 0
    char_set = set()
    max_length = 0
    
    for right in range(len(s)):
        # Handle constraint violation
        while constraint_violated:
            char_set.remove(s[left])
            left += 1
        
        # Add current character
        char_set.add(s[right])
        
        # Update optimization metric
        max_length = max(max_length, right - left + 1)
    
    return max_length
```

---

## **⚡ Quick Keyword Scanner**

### **When You See These Keywords → Think This:**

| **See This** | **Think This** | **Action** |
|--------------|----------------|------------|
| `"longest substring"` | **Sliding window** | Use two pointers, expand/contract |
| `"without repeating"` | **Character tracking** | Use hash set for frequency |
| `"substring"` | **Contiguous sequence** | Must be contiguous, not subsequence |
| `"duplicate characters"` | **Hash set/map** | Track character occurrences |
| `"maximum length"` | **Optimization** | Track maximum continuously |
| `"string"` | **Character processing** | Process character by character |

### **🚨 Red Flag Keywords (High Priority)**
- 🔴 **"longest substring"** → Always use sliding window
- 🔴 **"without repeating"** → Always track character frequency
- 🔴 **"substring"** → Always ensure contiguous sequence
- 🔴 **"maximum length"** → Always track optimization metric

### **💡 Pattern Recognition Cheat Sheet**
```
IF you see "longest substring" + "without repeating"
THEN use: Sliding window + hash set + maximum tracking

IF you see "substring" + "string"
THEN process: Contiguous sequence (not subsequence)

IF you see "without repeating" + "characters"
THEN handle: Character frequency with hash set
```

---

## **🎨 Visual Keyword → Implementation Mapping**

### **Keyword-Driven Implementation Decisions**

| **Problem Keyword** | **Visual** | **Implementation Decision** | **Code Pattern** |
|-------------------|------------|----------------------------|------------------|
| **"longest substring"** | 🔴 | Use sliding window | `for right in range(len(s)):` |
| **"without repeating"** | 🟢 | Track character frequency | `char_set = set()` |
| **"substring"** | 🔵 | Ensure contiguous sequence | `while s[right] in char_set:` |
| **"duplicate characters"** | 🟡 | Remove from left when duplicate | `char_set.remove(s[left])` |
| **"maximum length"** | 🟣 | Track optimization metric | `max_length = max(max_length, right - left + 1)` |

### **🔗 Keyword Chain → Complete Algorithm**
```
"longest substring" → Sliding window
    ↓
"without repeating" → Character tracking  
    ↓
"substring" → Contiguous sequence
    ↓
"duplicate characters" → Hash set management
    ↓
"maximum length" → Optimization tracking
    ↓
RESULT: Sliding window + hash set + maximum tracking
```

### **🚨 Critical Keyword Combinations**
- **"longest substring" + "without repeating"** → **Sliding window + hash set**
- **"substring" + "string"** → **Contiguous sequence processing**
- **"without repeating" + "characters"** → **Character frequency tracking**
- **"maximum length"** → **Optimization with continuous tracking**

---

## **🎯 Key Takeaway**

**"Longest substring" + "without repeating" = Sliding window + hash set**

The moment you see sliding window string problems, immediately think:
1. Two pointers for window management
2. Hash set for character tracking
3. Expand right, contract left when constraint violated
4. Track maximum optimization metric continuously

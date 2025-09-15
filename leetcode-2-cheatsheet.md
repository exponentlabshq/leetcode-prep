# LeetCode 2 Cheatsheet: Add Two Numbers

## 📋 **Full Problem Statement**

**2. Add Two Numbers**  
**Difficulty:** 🟡 Medium  
**Status:** Solved

### **Problem Description**
You are given two **<span style="color: #ff6b6b; font-weight: bold;">linked lists</span>** representing two non-negative integers. The digits are stored in **<span style="color: #4ecdc4; font-weight: bold;">reverse order</span>**, and each of their nodes contains a **<span style="color: #45b7d1; font-weight: bold;">single digit</span>**. **<span style="color: #96ceb4; font-weight: bold;">Add the two numbers</span>** and return the sum as a **<span style="color: #feca57; font-weight: bold;">linked list</span>**.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### **Examples**

**Example 1:**
```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

**Example 2:**
```
Input: l1 = [0], l2 = [0]
Output: [0]
```

**Example 3:**
```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

### **Constraints**
- The number of nodes in each linked list is in the range [1, 100].
- 0 <= Node.val <= 9
- It is guaranteed that the list represents a number that does not have leading zeros.

---

## 🎯 **Problem Analysis**

---

## **Step 1: Problem Analysis & Keyword Detection**

### **1.1 Core Operation Identified**
- **Operation:** Addition of two numbers
- **Data Structure:** Linked Lists (singly-linked)
- **Output:** New linked list representing the sum

### **1.2 Keywords Extracted**
```
Keywords Found:
✅ "linked lists" → Linked List Manipulation
✅ "add two numbers" → Arithmetic Operation
✅ "reverse order" → Digit Processing Order
✅ "single digit" → Node Value Constraint (0-9)
✅ "carry" → Implicit (addition with carry)
✅ "non-negative integers" → No negative numbers
```

### **🔍 Keywords to Look For (Highlighted)**

| **Keyword Category** | **Keywords to Watch For** | **Algorithm Signal** | **Why Important** |
|---------------------|---------------------------|---------------------|-------------------|
| **Data Structure** | `"linked lists"`, `"singly-linked"`, `"nodes"` | **Linked List Traversal** | Tells you to use pointer manipulation |
| **Operation** | `"add"`, `"sum"`, `"two numbers"` | **Arithmetic with Carry** | Indicates digit-by-digit addition |
| **Order** | `"reverse order"`, `"stored in reverse"` | **Left-to-Right Processing** | Processing direction matters |
| **Constraints** | `"single digit"`, `"0-9"`, `"non-negative"` | **Carry Handling** | Each node = one digit, handle overflow |
| **Edge Cases** | `"no leading zeros"`, `"non-empty"` | **Dummy Head Pattern** | Simplifies edge case handling |
| **Output** | `"return as linked list"` | **New List Construction** | Build result list as you go |

### **🎯 Critical Keywords in Problem Statement**
> **"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list."**

### **🔍 Keyword Analysis for Algorithm & Data Structure Selection**

| **Keyword** | **Color** | **Algorithm Hint** | **Data Structure Hint** | **Why This Matters** |
|-------------|-----------|-------------------|------------------------|---------------------|
| **"linked lists"** | 🔴 Red | **Linked List Traversal** | **Two Pointers** | Tells you to use pointer manipulation, not array indexing |
| **"reverse order"** | 🟢 Teal | **Sequential Processing** | **Left-to-Right Traversal** | Processing direction matters - start from head, not tail |
| **"single digit"** | 🔵 Blue | **Carry Handling** | **Integer Overflow Management** | Each node = 0-9, so sum can be 0-18, need carry |
| **"add two numbers"** | 🟢 Green | **Arithmetic with Carry** | **Digit-by-Digit Addition** | Core operation - not just concatenation |
| **"return as linked list"** | 🟡 Yellow | **New List Construction** | **Dummy Head Pattern** | Build result as you go, don't modify input |

### **🧠 Mental Model from Keywords**
```
"linked lists" → Think: "I need pointer traversal"
"reverse order" → Think: "Process left to right, not right to left"  
"single digit" → Think: "Handle carry overflow (0-18 range)"
"add two numbers" → Think: "Arithmetic, not string manipulation"
"return as linked list" → Think: "Build new list with dummy head"
```

### **⚡ Algorithm Selection Process**
1. **See "linked lists"** → **Data Structure**: Two pointers + dummy head
2. **See "add two numbers"** → **Algorithm**: Arithmetic with carry handling
3. **See "reverse order"** → **Processing**: Left-to-right traversal
4. **See "single digit"** → **Implementation**: `digit = sum % 10, carry = sum // 10`
5. **See "return as linked list"** → **Pattern**: New list construction

### **1.3 Data Structure Hints**
- **Input:** Two linked lists (ListNode objects)
- **Output:** One linked list (ListNode object)
- **Constraints:** 1-100 nodes, values 0-9, no leading zeros

---

## **Step 2: Keyword → Algorithm Mapping**

### **2.1 Primary Pattern Recognition**
```
Keywords identified → "linked lists" + "add two numbers" + "carry"
↓
Pattern Category → Linked List Manipulation + Arithmetic
↓
Specific Algorithm → Linked List Traversal + Carry Handling
```

### **2.2 Algorithm Selection Decision Tree**
```
Is it a LINKED LIST problem?
├─ YES → Linked List Traversal
│
Is it an ARITHMETIC problem?
├─ YES → Digit-by-digit addition with carry
│
Is it a SEQUENTIAL problem?
├─ YES → Process nodes in order (left to right)
│
Combined → Linked List Traversal + Carry Handling
```

### **2.3 Multi-Keyword Analysis**
- **"linked lists"** → Primary data structure (Linked List)
- **"add two numbers"** → Core operation (Arithmetic)
- **"reverse order"** → Processing direction (Left to right)
- **"carry"** → Implicit requirement (Handle overflow)

---

## **Step 3: Approach Refinement**

### **3.1 Data Structure Selection**
- **Primary:** Linked List traversal (two pointers)
- **Auxiliary:** Carry variable (integer)
- **Output:** New linked list construction

### **3.2 Space-Time Trade-offs**
- **Space:** O(max(m,n)) for result list
- **Time:** O(max(m,n)) for single pass
- **Approach:** Iterative (preferred) vs Recursive

---

## **Step 4: Implementation Strategy**

### **4.1 Template Selection**
**Algorithm:** Linked List Traversal + Carry Handling

**Template Pattern:**
```python
# Two pointers + carry handling
current1, current2 = l1, l2
carry = 0
dummy = ListNode(0)
current = dummy

while current1 or current2 or carry:
    # Process digits and carry
    # Create new node
    # Move pointers
```

### **4.2 Key Implementation Details**

#### **Core Logic:**
1. **Initialize:** Two pointers, carry = 0, dummy head
2. **Traverse:** While either list has nodes OR carry exists
3. **Process:** Extract values, calculate sum, handle carry
4. **Create:** New node with result digit
5. **Advance:** Move all pointers forward

#### **Carry Handling:**
```python
total = val1 + val2 + carry
digit = total % 10
carry = total // 10
```

---

## **Step 5: Complexity Analysis**

### **5.1 Time Complexity**
- **O(max(m,n))** where m, n are lengths of input lists
- **Single pass** through both lists
- **Constant time** per node processed

### **5.2 Space Complexity**
- **O(max(m,n))** for the result linked list
- **O(1)** extra space for variables (carry, pointers)

---

## **Step 6: Implementation Template**

### **6.1 Complete Solution Template**
```python
def addTwoNumbers(self, l1, l2):
    # Initialize pointers and carry
    current1, current2 = l1, l2
    carry = 0
    dummy = ListNode(0)
    current = dummy
    
    # Traverse both lists
    while current1 or current2 or carry:
        # Extract values (0 if node is None)
        val1 = current1.val if current1 else 0
        val2 = current2.val if current2 else 0
        
        # Calculate sum and carry
        total = val1 + val2 + carry
        digit = total % 10
        carry = total // 10
        
        # Create new node
        current.next = ListNode(digit)
        current = current.next
        
        # Move pointers
        current1 = current1.next if current1 else None
        current2 = current2.next if current2 else None
    
    return dummy.next
```

### **6.2 Edge Case Handling**
- **Different lengths** → Handle None nodes gracefully
- **Final carry** → Create additional node if carry > 0
- **Empty lists** → Constraint says non-empty, but handle gracefully
- **Single digits** → Works with basic logic

---

## **🎯 Mental Model: Step-by-Step Breakdown**

### **Pattern Recognition:**
1. **See "linked lists"** → Think "Linked List Traversal"
2. **See "add two numbers"** → Think "Arithmetic with carry"
3. **See "reverse order"** → Think "Left to right processing"

### **Algorithm Selection Process:**
```
Keywords identified → "linked lists" + "add two numbers"
↓
Algorithm: Linked List Traversal + Carry Handling
↓
Approach: Two pointers + carry variable
↓
Implementation: while (l1 or l2 or carry): process digits
```

---

## **📝 Quick Decision Tree**

```
Is it linked list manipulation?
├─ YES → Use two pointers
│   ├─ Addition involved? → Handle carry
│   └─ Sequential processing? → while loop
└─ NO → Look for other patterns
```

---

## **🔗 Related Patterns to Remember**

- **Linked List Traversal** → Two pointers, dummy head
- **Arithmetic Operations** → Carry handling, digit processing
- **Sequential Processing** → while loops, pointer advancement
- **Node Creation** → ListNode construction, pointer linking

---

## **⚡ Key Insights**

1. **Dummy Head Pattern** → Simplifies edge cases
2. **Carry Handling** → Always check for final carry
3. **Null Safety** → Check if nodes exist before accessing
4. **Pointer Advancement** → Move all pointers consistently

---

## **🎯 Universal Template for Linked List Arithmetic**

```python
def linkedListArithmetic(l1, l2):
    dummy = ListNode(0)
    current = dummy
    carry = 0
    
    while l1 or l2 or carry:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        
        total = val1 + val2 + carry
        digit = total % 10
        carry = total // 10
        
        current.next = ListNode(digit)
        current = current.next
        
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None
    
    return dummy.next
```

---

## **🎯 Key Takeaway**

**"Linked lists" + "arithmetic" = Two pointers + carry handling**

The moment you see linked list arithmetic problems, immediately think:
1. Two pointers for traversal
2. Carry variable for overflow
3. Dummy head for edge cases
4. while loop for sequential processing

---

## **⚡ Quick Keyword Scanner**

### **When You See These Keywords → Think This:**

| **See This** | **Think This** | **Action** |
|--------------|----------------|------------|
| `"linked lists"` | **Pointer manipulation** | Use two pointers, dummy head |
| `"add two numbers"` | **Arithmetic with carry** | Handle digit overflow |
| `"reverse order"` | **Left-to-right processing** | Process nodes sequentially |
| `"single digit"` | **Carry handling** | Each node = 0-9, track overflow |
| `"return as linked list"` | **New list construction** | Build result as you traverse |
| `"non-empty"` | **Edge case handling** | Use dummy head pattern |
| `"no leading zeros"` | **Clean output** | Handle final carry properly |

### **🚨 Red Flag Keywords (High Priority)**
- 🔴 **"linked lists"** → Always use pointer traversal
- 🔴 **"add"** + **"numbers"** → Always handle carry
- 🔴 **"reverse order"** → Always process left to right
- 🔴 **"single digit"** → Always handle overflow

### **💡 Pattern Recognition Cheat Sheet**
```
IF you see "linked lists" + "arithmetic operation"
THEN use: Two pointers + carry handling + dummy head

IF you see "reverse order" + "digits"
THEN process: Left to right (not right to left)

IF you see "single digit" + "add"
THEN handle: Carry overflow (digit = sum % 10, carry = sum // 10)
```

---

## **🎨 Visual Keyword → Implementation Mapping**

### **Keyword-Driven Implementation Decisions**

| **Problem Keyword** | **Visual** | **Implementation Decision** | **Code Pattern** |
|-------------------|------------|----------------------------|------------------|
| **"linked lists"** | 🔴 | Use pointer traversal | `current1, current2 = l1, l2` |
| **"reverse order"** | 🟢 | Process left to right | `while current1 or current2:` |
| **"single digit"** | 🔵 | Handle carry overflow | `digit = total % 10, carry = total // 10` |
| **"add two numbers"** | 🟢 | Arithmetic operation | `total = val1 + val2 + carry` |
| **"return as linked list"** | 🟡 | Build new list | `current.next = ListNode(digit)` |

### **🔗 Keyword Chain → Complete Algorithm**
```
"linked lists" → Two pointers
    ↓
"reverse order" → Left-to-right traversal  
    ↓
"single digit" → Carry handling
    ↓
"add two numbers" → Arithmetic operation
    ↓
"return as linked list" → New list construction
    ↓
RESULT: Two pointers + carry + dummy head + while loop
```

### **🚨 Critical Keyword Combinations**
- **"linked lists" + "add"** → **Two pointers + carry handling**
- **"reverse order" + "digits"** → **Sequential processing (not recursive)**
- **"single digit" + "numbers"** → **Overflow management (0-18 range)**
- **"return as linked list"** → **Dummy head pattern**

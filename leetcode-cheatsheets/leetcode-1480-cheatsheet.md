# LeetCode 1480 Cheatsheet: Running Sum of 1d Array

## 🎯 **Problem Analysis**

**Problem:** Given an array `nums`, return the running sum where `runningSum[i] = sum(nums[0]…nums[i])`

**Difficulty:** 🟢 Easy

---

## 🔍 **Keyword Detection & Algorithm Mapping**

### **Step 1: Identify Keywords**
```
Keywords Found:
✅ "running sum" → Prefix Sum Pattern
✅ "sum(nums[0]…nums[i])" → Cumulative Sum
✅ "array" → Array manipulation
✅ "return array" → In-place or new array creation
```

### **Step 2: Keyword → Algorithm Mapping**
| **Keyword** | **Algorithm** | **Reasoning** |
|-------------|---------------|---------------|
| **"running sum"** | **Prefix Sum Array** | Classic prefix sum pattern - each element is sum of all previous elements |
| **"sum(nums[0]…nums[i])"** | **Cumulative Sum** | Explicitly asking for cumulative sum from start to current index |
| **"array"** | **Array Traversal** | Need to iterate through array elements |

---

## 🧠 **Mental Model: Step-by-Step Breakdown**

### **Pattern Recognition:**
1. **See "running sum"** → Think "Prefix Sum"
2. **See "sum(nums[0]…nums[i])"** → Confirm "Cumulative Sum"
3. **See "return array"** → Decide: in-place vs new array

### **Algorithm Selection Process:**
```
Keywords identified → "running sum" + "cumulative sum"
↓
Algorithm: Prefix Sum Array
↓
Approach: Iterate once, maintain running sum
↓
Implementation: runningSum[i] = runningSum[i-1] + nums[i]
```

---

## 💡 **Solution Strategy**

### **Core Insight:**
- Each element = sum of all previous elements + current element
- Can be done in-place or with new array
- O(n) time, O(1) space (in-place) or O(n) space (new array)

### **Implementation Options:**

#### **Option 1: In-place (Space Optimized)**
```python
def runningSum(self, nums):
    for i in range(1, len(nums)):
        nums[i] += nums[i-1]
    return nums
```

#### **Option 2: New Array (Clear Logic)**
```python
def runningSum(self, nums):
    result = [nums[0]]
    for i in range(1, len(nums)):
        result.append(result[-1] + nums[i])
    return result
```

---

## 🎯 **Quick Decision Tree**

```
Is it "running sum" or "prefix sum"?
├─ YES → Use Prefix Sum Array pattern
│   ├─ In-place modification? → nums[i] += nums[i-1]
│   └─ New array? → result.append(result[-1] + nums[i])
└─ NO → Look for other patterns (sliding window, two pointers, etc.)
```

---

## 📝 **Template for Similar Problems**

### **When you see these keywords:**
- "running sum"
- "prefix sum" 
- "cumulative sum"
- "sum from start to index"

### **Use this pattern:**
1. **Initialize:** `result[0] = nums[0]` or start from index 1
2. **Iterate:** `for i in range(1, len(nums))`
3. **Update:** `result[i] = result[i-1] + nums[i]`
4. **Return:** `result`

---

## ⚡ **Time & Space Complexity**

| **Approach** | **Time** | **Space** | **Trade-off** |
|--------------|----------|-----------|---------------|
| In-place | O(n) | O(1) | Modifies input |
| New array | O(n) | O(n) | Preserves input |

---

## 🔗 **Related Patterns to Remember**

- **Prefix Sum** → Range sum queries, subarray sum problems
- **Cumulative Sum** → Running totals, moving averages
- **Array Traversal** → Single pass, linear time

---

## 🎯 **Key Takeaway**

**"Running sum" = "Prefix sum" = Use cumulative sum pattern**

The moment you see "running sum" or "prefix sum", immediately think:
1. Iterate through array once
2. Each element = previous sum + current element
3. Decide: in-place vs new array based on requirements

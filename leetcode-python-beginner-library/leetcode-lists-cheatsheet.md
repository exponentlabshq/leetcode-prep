# LeetCode Lists: One-Page Cheat Sheet

## Quick Reference (Metaphor ↔ Code ↔ CS Term)

| Metaphor | Code name | CS term |
| --- | --- | --- |
| Shelf | `shelf` | List / Array |
| Book | `book` | Element / Value |
| Slot number | `slot_index` | Index |
| Shelf size | `len(shelf)` | Length |
| First/Last book | `shelf[0]`, `shelf[-1]` | First/Last element |
| Shelf section | `shelf[a:b]` | Slice/subarray |
| Replace a book | `shelf[i] = ...` | Mutation (assign) |
| Add a book | `shelf.append(...)` | Append |
| Remove a book | `shelf.pop()`, `shelf.remove(...)` | Pop / Remove by value |
| Same shelf reference | `alias_shelf = shelf` | Alias (same reference) |
| Photocopy shelf | `copied_shelf = shelf[:]` | Shallow copy |

---

## ASCII Mental Model
```
Slots:   0      1       2       3       4
        +------+-------+-------+-------+-------+
Shelf:  |Book1 | Book2 | Book3 | Book4 | Book5 |
        +------+-------+-------+-------+-------+
         ^first                           ^last(-1)
```

### Slicing
```
Index:   0      1       2       3       4
        +------+-------+-------+-------+-------+
Shelf:  |Book1 | Book2 | Book3 | Book4 | Book5 |
        +------+-------+-------+-------+-------+
Slice [1:4]  →        [ Book2 | Book3 | Book4 ]
Slice [:3]   →  [ Book1 | Book2 | Book3 ]
Slice [2:]   →                [ Book3 | Book4 | Book5 ]
```

### Update / Append / Remove
```
Update index 2:
Before: [ Book1 | Book2 | Book3     | Book4 | Book5 ]
After:  [ Book1 | Book2 | NewBook   | Book4 | Book5 ]

Append: [ ... | Book5 ] + Book6 → [ ... | Book5 | Book6 ]

pop()   : remove rightmost
pop(1)  : remove slot 1
remove(X): remove first match by label
```

### Iterate
```
Walk left→right: 0 → 1 → 2 → 3 → 4
```

### Copy vs Alias
```
alias_shelf = shelf        (SAME shelf)
copied_shelf = shelf[:]    (NEW shelf)
```

---

## Dual-View Examples

### Access / Transform
```python
# Metaphor
shelf = ["Book1", "Book2", "Book3"]
first = shelf[0]
renamed = [book + "_v2" for book in shelf]

# Domain
numbers = [1, 2, 3]
first_num = numbers[0]
squares = [n*n for n in numbers]
```

### Filter
```python
# Metaphor
shelf = ["Book1", "Book2", "Book10"]
filtered = [b for b in shelf if "1" in b]

# Domain
nums = [1, 2, 3, 4]
evens = [n for n in nums if n % 2 == 0]
```

### Grids
```python
# Metaphor (rows of books)
library = [["A1","A2","A3"], ["B1","B2","B3"]]
item = library[1][2]  # "B3"

# Domain
matrix = [[1,2,3],[4,5,6]]
val = matrix[1][2]  # 6
```

### Sorting
```python
# Metaphor
shelf = ["Book10","Book2","Book1"]
lex = sorted(shelf)
by_length_desc = sorted(shelf, key=len, reverse=True)

# Domain
nums = [-3, 1, -10, 2]
asc = sorted(nums)
by_abs = sorted(nums, key=abs)
```

---

## Pitfalls (Quick Fixes)
- Alias vs copy: use `shelf[:]` to copy; assignment aliases.
- Off-by-one: first slot is index `0`; last is `-1`.
- Slice end-exclusive: `a:b` stops at `b-1`.
- Choose readability: comprehension vs for-loop.

---

## ⏱️ 1-Minute Practice Template
1) Say the plan in plain English (10s)
2) Write 2–4 lines of code (40s)
3) Print and check (10s)

Example
```python
shelf = ["Book1","Book2","Book3","Book4","Book5"]
last_three = shelf[-3:]
last_three[1] = "NewBook"
print(last_three, len(last_three))
```



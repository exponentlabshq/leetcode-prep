# 📚 Pillar 1: Lists (Arrays in Python)

## 🧠 Mental Model

Imagine a **bookshelf with numbered slots**:

* Slot `0` → first book
* Slot `1` → second book
* Slot `-1` → last book (we can count backwards!)

Unlike a real bookshelf, Python lets you:

* Copy whole **sections** (slicing)
* **Replace** books instantly
* **Extend** the shelf by adding more

---

### ASCII view
```
Slots:   0      1       2       3       4
        +------+-------+-------+-------+-------+
Shelf:  |Book1 | Book2 | Book3 | Book4 | Book5 |
        +------+-------+-------+-------+-------+
         ^first                           ^last(-1)
```

## 🗺️ Quick Reference (Metaphor ↔ Code ↔ CS Term)

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

## 🔧 Skills with Rich Examples

### 1. Create a list

```python
shelf = ["Book1", "Book2", "Book3", "Book4", "Book5"]
```

Think: 📚 `["Book1", "Book2", "Book3", "Book4", "Book5"]` — a shelf of labeled books

---

### 2. Access elements

```python
print(shelf[0])     # First book → "Book1"
print(shelf[-1])    # Last book → "Book5"
print(shelf[2])     # Third book → "Book3"
```

Analogy: “Grab the 3rd book from the left.”
In LeetCode, this is: “Find the kth element in an array.”

---

### 3. Slice sections

```python
print(shelf[1:4])    # ["Book2", "Book3", "Book4"]
print(shelf[:3])     # ["Book1", "Book2", "Book3"] (first 3 books)
print(shelf[2:])     # ["Book3", "Book4", "Book5"] (from 3rd book to end)
print(shelf[-3:])    # ["Book3", "Book4", "Book5"] (last 3 books)
```

ASCII slice (start inclusive, end exclusive):
```
Index:   0      1       2       3       4
        +------+-------+-------+-------+-------+
Shelf:  |Book1 | Book2 | Book3 | Book4 | Book5 |
        +------+-------+-------+-------+-------+
Slice [1:4]  →        [ Book2 | Book3 | Book4 ]
Slice [:3]   →  [ Book1 | Book2 | Book3 ]
Slice [2:]   →                [ Book3 | Book4 | Book5 ]
Slice [-3:]  →                [ Book3 | Book4 | Book5 ]
```

Analogy: “Copy a chunk of books off the shelf.”
In LeetCode: rotating an array, extracting a subarray.

---

### 4. Update an element

```python
shelf[2] = "NewBook"
print(shelf)  # ["Book1", "Book2", "NewBook", "Book4", "Book5"]
```

```
Before: [ Book1 | Book2 | Book3     | Book4 | Book5 ]
Update:                ^ index 2 becomes "NewBook"
After:  [ Book1 | Book2 | NewBook   | Book4 | Book5 ]
```

Analogy: Replace the book in slot 2 with a new one.
In LeetCode: “Change array values while iterating” (e.g., marking visited cells).

---

### 5. Append to the end

```python
shelf.append("Book6")
print(shelf)  # ["Book1", "Book2", "NewBook", "Book4", "Book5", "Book6"]
```

```
Append adds to the right end:
[ ... | Book5 ] → append("Book6") → [ ... | Book5 | Book6 ]
```

Analogy: Add a new book to the end of the shelf.
In LeetCode: building arrays dynamically (like storing path results).

---

### 6. Remove elements

```python
shelf.pop()              # removes last book → returns "Book6"
shelf.pop(1)             # removes book at slot 1 → returns "Book2"
shelf.remove("NewBook")  # removes by value (first match)
```

```
pop()      → remove rightmost: [ ... | Book6 ] → [ ... ]
pop(1)     → remove slot 1: [ Book1 | Book2 | Book3 ] → [ Book1 | Book3 ]
remove(X)  → find first X by label and remove it
```

Analogy: Take a book off the shelf either by position or by its title.
In LeetCode: shrinking windows, removing duplicates.

---

### 7. Length of list

```python
print(len(shelf))  # number of books on the shelf
```

Analogy: Count how many books are on the shelf.
In LeetCode: almost every problem uses `len(array)` somewhere.

---

### 8. Iterate through a list

```python
for book in shelf:
    print(book)  # print each book

for slot_index, book in enumerate(shelf):
    print(slot_index, book)  # print slot index and book label
```

```
Walk from left to right:
0→1→2→3→4  (touch each slot; read its book)
```

Analogy: Walk along the shelf, touching each book.
In LeetCode: scanning arrays to calculate sums, frequencies, windows.

---

### 9. Copy a list (important!)

```python
original_shelf = ["Book1", "Book2", "Book3"]
alias_shelf = original_shelf   # points to the same shelf (same list in memory)!
alias_shelf[0] = "StickeredBook"
print(original_shelf)    # ["StickeredBook", "Book2", "Book3"] -- original changed too

copied_shelf = original_shelf[:]  # makes a new copy (new shelf)
copied_shelf[0] = "PhotocopyBook"
print(original_shelf)    # ["StickeredBook", "Book2", "Book3"] -- original is safe
```

Alias vs Copy
```
alias_shelf = original_shelf    (SAME shelf)
   original_shelf  ────────┐
                            └── alias_shelf

copied_shelf = original_shelf[:] (NEW shelf)
   original_shelf       copied_shelf
        │                   │
      [ ... ]            [ ... ]
```

Analogy: Sometimes you photocopy the whole shelf, not just point to it.
In LeetCode: critical when backtracking (trees, recursion).

---

## 🎯 Mini Exercises

1. Make a shelf of 7 books: `["Book1", ..., "Book7"]`.

   * Print the 1st, last, and middle book.
2. Replace the middle book with `"NewBook"`.
3. Append `"Book8"` and `"Book9"` to the end.
4. Slice out the first 4 books.
5. Remove the book `"NewBook"`.
6. Count how many books remain with `len()`.
7. Loop through and print each book with its slot index.

---

## 🔗 LeetCode Connections

* **Find the kth element:**
  - Metaphor: `shelf[k]`
  - Domain: `numbers[k]`
* **Rotate array (189):**
  - Metaphor: `shelf[-k:] + shelf[:-k]`
  - Domain: `numbers[-k:] + numbers[:-k]`
* **Running sum (1480):**
  - Metaphor: `running_total += shelf[slot_index]`
  - Domain: `running_total += numbers[index]`

---

## ⚠️ Common Pitfalls (and quick fixes)

- Confusing alias vs copy:
  - Wrong: `alias_shelf = shelf` (changes affect both)
  - Right: `copied_shelf = shelf[:]` (independent)
- Off-by-one on indexes:
  - Remember: first book is `slot_index = 0`, last is `-1`.
- Slicing is end-exclusive:
  - `shelf[a:b]` includes `a` up to `b-1`.

---

## ⏱️ 1-Minute Practice Template

1) Describe in words what you’ll do (10s).
2) Write 2 lines of code (40s).
3) Print to verify (10s).

Example: “Get last 3 books, replace the middle one, count.”

```python
shelf = ["Book1","Book2","Book3","Book4","Book5"]
last_three = shelf[-3:]
last_three[1] = "NewBook"
print(last_three, len(last_three))
```

---

👉 Question for you:
Do you want me to **pause here** and let you try the mini exercises in Python, or should I keep layering on more examples (like list comprehensions, nested lists, sorting) before you practice?

---

## 🧩 List Comprehensions (Make new shelves fast)

### Quick Reference
- Metaphor: “Build a new shelf by transforming or filtering books.”
- Code: `[new_book for book in shelf if keep_condition]`

### Dual-View Examples
```python
# Metaphor: rename each book by adding a suffix
shelf = ["Book1", "Book2", "Book3"]
renamed_shelf = [book + "_v2" for book in shelf]

# Domain: square numbers
numbers = [1, 2, 3]
squares = [n * n for n in numbers]
```

```python
# Metaphor: keep only books whose label contains '1'
shelf = ["Book1", "Book2", "Book10"]
filtered_shelf = [book for book in shelf if "1" in book]

# Domain: keep even numbers
numbers = [1, 2, 3, 4]
evens = [n for n in numbers if n % 2 == 0]
```

### Pitfalls
- Don’t overpack: if it gets hard to read, use a normal for-loop.
- Remember order is preserved.

### ⏱️ 1-Minute Practice
Build a shelf of 1..5 as labels, then keep only those ending with '1' or '3'.
```python
shelf = [f"Book{i}" for i in range(1, 6)]
result = [book for book in shelf if book.endswith(("1", "3"))]
print(result)
```

---

## 🗺️ Nested Lists / Grids (Shelves and rows)

### Quick Reference
- Metaphor: library rows of shelves; each row is a list of books.
- Code: `grid[row][col]`

### Dual-View Examples
```python
# Metaphor: 2 rows, 3 books per row
library = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
]
first_row_first_book = library[0][0]  # "A1"

# Domain: 2x3 matrix of numbers
matrix = [
    [1, 2, 3],
    [4, 5, 6],
]
top_left = matrix[0][0]  # 1
```

```
Rows and columns:
row 0 → [ A1 | A2 | A3 ]
row 1 → [ B1 | B2 | B3 ]
Access [row][col]: library[1][2] = B3
```

```python
# Metaphor: iterate row and slot_index
for row_index, row in enumerate(library):
    for slot_index, book in enumerate(row):
        pass  # process(book)

# Domain: scan matrix coordinates
for r, row in enumerate(matrix):
    for c, value in enumerate(row):
        pass  # process(value)
```

### Pitfalls
- Be careful with copying grids: use list comprehension to copy rows.
  - Wrong: `copied = library[:]` (rows still alias)
  - Right: `copied = [row[:] for row in library]`
- Row-major indexing: `grid[row][col]`, not `grid[col][row]`.

### ⏱️ 1-Minute Practice
Make a 3x3 grid of labels (A1..C3) and print the diagonal.
```python
rows = ["A", "B", "C"]
library = [[f"{rows[r]}{c+1}" for c in range(3)] for r in range(3)]
diagonal = [library[i][i] for i in range(3)]
print(diagonal)
```

---

## 🔃 Sorting (Order the shelf)

### Quick Reference
- Metaphor: sort books by label; or by label length.
- Code: `sorted(iterable, key=..., reverse=...)` or `list.sort(...)`

### Dual-View Examples
```python
# Metaphor: sort by label
shelf = ["Book10", "Book2", "Book1"]
by_label = sorted(shelf)  # lexicographic

# Domain: sort numbers ascending
numbers = [5, 2, 9]
ascending = sorted(numbers)
```

```
Default sort (lexicographic for strings):
[ "Book10", "Book2", "Book1" ] → [ "Book1", "Book10", "Book2" ]
```

```python
# Metaphor: sort by label length, descending
by_length_desc = sorted(shelf, key=len, reverse=True)

# Domain: sort by absolute value
nums = [-3, 1, -10, 2]
by_abs = sorted(nums, key=abs)
```

```
Custom keys:
key=len        → compare by label length
key=abs        → compare by absolute value
reverse=True   → largest to smallest
```

### Pitfalls
- `sorted(...)` returns a new list; `list.sort()` sorts in place and returns None.
- `key` runs once per element—make it fast.

### ⏱️ 1-Minute Practice
Sort shelf labels by the number inside the label (e.g., Book10 > Book2 > Book1).
```python
import re
shelf = ["Book10", "Book2", "Book1"]
def extract_num(label):
    m = re.search(r"\d+", label)
    return int(m.group()) if m else 0
by_number = sorted(shelf, key=extract_num, reverse=True)
print(by_number)
```

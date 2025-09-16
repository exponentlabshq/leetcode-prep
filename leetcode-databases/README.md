# 🗄️ LeetCode Question Databases

*Comprehensive JSON databases for generating LeetCode questions across all difficulty levels and data structures*

## 📚 Database Overview

This collection contains five specialized JSON databases designed to generate LeetCode questions from beginner to advanced levels:

### 🎯 **Main Database**
- **File:** `main-question-database.json`
- **Purpose:** Central repository with question templates and metadata
- **Questions:** 150+ questions across all difficulty levels
- **Features:** Question generation rules, difficulty progression, pattern matching

### 🔢 **Variable Manipulation Database**
- **File:** `variable-manipulation-database.json`
- **Purpose:** Beginner-level questions focusing on basic variable operations
- **Questions:** 25 questions
- **Topics:** Arithmetic operations, logical operations, mathematical functions, string operations
- **Prerequisites:** Basic Python syntax, arithmetic operations

### 📊 **Array Operations Database**
- **File:** `array-operations-database.json`
- **Purpose:** Comprehensive array manipulation questions
- **Questions:** 50 questions
- **Topics:** Basic operations, searching, two pointers, sliding window, sorting
- **Prerequisites:** Variable manipulation, basic loops, conditional statements

### 🗂️ **Hashmap Operations Database**
- **File:** `hashmap-operations-database.json`
- **Purpose:** Hashmap/hash table focused questions
- **Questions:** 40 questions
- **Topics:** Basic operations, searching, frequency analysis, advanced patterns
- **Prerequisites:** Variable manipulation, array operations, basic loops

### 🧠 **Advanced Algorithms Database**
- **File:** `advanced-algorithms-database.json`
- **Purpose:** Complex data structures and advanced algorithmic patterns
- **Questions:** 60 questions
- **Topics:** Trees, graphs, dynamic programming, greedy algorithms, backtracking
- **Prerequisites:** All previous databases, basic trees, basic graphs

## 🚀 Quick Start

### Using the Question Generator

The `question_generator.py` script provides a powerful CLI for generating questions:

```bash
# List available databases
python question_generator.py --list-databases

# Generate a random question
python question_generator.py --database main-question-database.json

# Generate 5 easy array questions
python question_generator.py --database array-operations-database.json --difficulty easy --data-structure arrays --count 5

# Generate progression questions (beginner to advanced)
python question_generator.py --database main-question-database.json --progression --count 3

# Save questions to file
python question_generator.py --database hashmap-operations-database.json --difficulty medium --count 10 --output questions.md --format markdown
```

### Command Line Options

| Option | Description | Example |
|--------|-------------|---------|
| `--database`, `-d` | Database to use | `--database array-operations-database.json` |
| `--difficulty` | Filter by difficulty | `--difficulty easy` |
| `--data-structure` | Filter by data structure | `--data-structure arrays` |
| `--pattern` | Filter by algorithm pattern | `--pattern two_pointers` |
| `--count`, `-c` | Number of questions | `--count 5` |
| `--output`, `-o` | Output file | `--output questions.md` |
| `--format`, `-f` | Output format | `--format markdown` |
| `--progression`, `-p` | Generate progression | `--progression` |
| `--list-databases` | List databases | `--list-databases` |
| `--info` | Show database info | `--info array-operations-database.json` |

## 📖 Database Structure

Each database follows a consistent structure:

```json
{
  "metadata": {
    "name": "Database Name",
    "description": "Database description",
    "difficulty_range": ["beginner", "easy", "medium", "hard"],
    "prerequisites": ["required_skills"],
    "learning_objectives": ["objectives"],
    "total_questions": 50,
    "estimated_time": "8-10 hours"
  },
  "question_categories": {
    "category_name": {
      "description": "Category description",
      "difficulty": "easy",
      "count": 10,
      "questions": [
        {
          "id": "unique_id",
          "title": "Question Title",
          "description": "Question description",
          "difficulty": "easy",
          "data_structure": "arrays",
          "pattern": "two_pointers",
          "input_format": "nums: List[int]",
          "output_format": "int",
          "constraints": "1 <= len(nums) <= 1000",
          "test_cases": [...],
          "solution_template": "def solution(): ...",
          "time_complexity": "O(n)",
          "space_complexity": "O(1)",
          "tags": ["arrays", "two_pointers"],
          "learning_points": ["key concepts"]
        }
      ]
    }
  }
}
```

## 🎯 Question Generation Examples

### Generate Beginner Questions
```bash
python question_generator.py --database variable-manipulation-database.json --difficulty beginner --count 3
```

### Generate Array Questions
```bash
python question_generator.py --database array-operations-database.json --data-structure arrays --count 5
```

### Generate Two-Pointer Pattern Questions
```bash
python question_generator.py --database array-operations-database.json --pattern two_pointers --count 3
```

### Generate Learning Progression
```bash
python question_generator.py --database main-question-database.json --progression --count 2
```

## 📊 Difficulty Progression

### 🌱 **Beginner Level**
- **Focus:** Basic variable operations, simple logic
- **Time Complexity:** O(1) to O(n)
- **Data Structures:** Variables, basic arrays
- **Patterns:** Arithmetic, conditional logic, simple iteration

### 🚀 **Easy Level**
- **Focus:** Array manipulation, hashmap operations
- **Time Complexity:** O(n) to O(n log n)
- **Data Structures:** Arrays, hashmaps, strings
- **Patterns:** Two pointers, frequency counting, basic searching

### 🎯 **Medium Level**
- **Focus:** Advanced patterns, complex algorithms
- **Time Complexity:** O(n) to O(n²)
- **Data Structures:** Trees, graphs, advanced arrays
- **Patterns:** Sliding window, DFS/BFS, dynamic programming basics

### 🏆 **Hard Level**
- **Focus:** Complex algorithms, optimization
- **Time Complexity:** O(n²) to exponential
- **Data Structures:** Advanced trees, complex graphs
- **Patterns:** Advanced DP, backtracking, system design

## 🔧 Customization

### Adding New Questions

To add new questions to a database:

1. **Choose the appropriate database** based on difficulty and topic
2. **Add to the relevant category** in `question_categories`
3. **Follow the question structure** with all required fields
4. **Update the metadata** count if needed

### Creating New Databases

To create a new specialized database:

1. **Copy the structure** from an existing database
2. **Update metadata** with appropriate information
3. **Add question categories** with your questions
4. **Test with the generator** to ensure compatibility

## 🎓 Learning Paths

### **Path 1: Complete Beginner**
1. Start with `variable-manipulation-database.json`
2. Progress to `array-operations-database.json` (beginner level)
3. Move to `hashmap-operations-database.json` (beginner level)
4. Continue with easy levels across all databases

### **Path 2: Array Specialist**
1. Complete `array-operations-database.json` in order
2. Focus on two-pointer and sliding window patterns
3. Practice with medium-level array questions
4. Master array-based dynamic programming

### **Path 3: Algorithm Master**
1. Complete all databases in difficulty order
2. Focus on pattern recognition across databases
3. Practice with `advanced-algorithms-database.json`
4. Master system design and optimization

## 🛠️ Technical Details

### **Question Format**
Each question includes:
- **Metadata:** ID, title, description, difficulty
- **Technical Details:** Data structure, pattern, complexity
- **Test Cases:** Input/output examples with explanations
- **Solution Template:** Python code template
- **Learning Points:** Key concepts to understand

### **Performance Analysis**
- **Time Complexity:** From O(1) to exponential
- **Space Complexity:** From O(1) to O(n²)
- **Optimization Notes:** When applicable
- **Trade-off Analysis:** Space vs time considerations

### **Pattern Recognition**
Common patterns across databases:
- **Two Pointers:** Efficient array traversal
- **Sliding Window:** Subarray/substring problems
- **Frequency Counting:** Hashmap-based counting
- **DFS/BFS:** Tree and graph traversal
- **Dynamic Programming:** Optimization problems

## 📈 Usage Statistics

- **Total Questions:** 275+ across all databases
- **Difficulty Distribution:** 25% beginner, 35% easy, 30% medium, 10% hard
- **Data Structure Coverage:** 9 different structures
- **Pattern Coverage:** 12 different algorithmic patterns
- **Estimated Learning Time:** 30-40 hours total

## 🤝 Contributing

To contribute to the databases:

1. **Fork the repository**
2. **Add your questions** following the established format
3. **Test with the generator** to ensure compatibility
4. **Submit a pull request** with your additions

## 📝 License

This project is part of the LeetCode Prep repository and follows the same licensing terms.

---

**Happy Coding! 🚀**

*Use these databases to generate unlimited practice questions and master algorithmic thinking across all difficulty levels.*

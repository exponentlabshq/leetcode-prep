#!/usr/bin/env python3
"""
LeetCode Question Generator
==========================

A comprehensive system for generating LeetCode questions from JSON databases.
Supports multiple difficulty levels and data structures with customizable output formats.

Author: Exponent Labs LLC
Version: 1.0.0
"""

import json
import random
import argparse
from typing import Dict, List, Any, Optional
from pathlib import Path
import sys
from datetime import datetime


class LeetCodeQuestionGenerator:
    """Main class for generating LeetCode questions from JSON databases."""
    
    def __init__(self, database_dir: str = "leetcode-databases"):
        """Initialize the generator with database directory."""
        self.database_dir = Path(database_dir)
        self.databases = {}
        self.load_databases()
    
    def load_databases(self):
        """Load all JSON databases from the directory."""
        database_files = [
            "main-question-database.json",
            "variable-manipulation-database.json", 
            "array-operations-database.json",
            "hashmap-operations-database.json",
            "advanced-algorithms-database.json"
        ]
        
        for db_file in database_files:
            db_path = self.database_dir / db_file
            if db_path.exists():
                try:
                    with open(db_path, 'r', encoding='utf-8') as f:
                        self.databases[db_file] = json.load(f)
                    print(f"✓ Loaded {db_file}")
                except Exception as e:
                    print(f"✗ Error loading {db_file}: {e}")
            else:
                print(f"⚠ Database file not found: {db_file}")
    
    def get_available_databases(self) -> List[str]:
        """Get list of available database names."""
        return list(self.databases.keys())
    
    def get_available_difficulties(self, database_name: str) -> List[str]:
        """Get available difficulty levels for a specific database."""
        if database_name not in self.databases:
            return []
        
        db = self.databases[database_name]
        if 'question_templates' in db:
            return list(db['question_templates'].keys())
        elif 'question_categories' in db:
            difficulties = set()
            for category in db['question_categories'].values():
                if 'difficulty' in category:
                    difficulties.add(category['difficulty'])
            return list(difficulties)
        return []
    
    def get_available_data_structures(self, database_name: str) -> List[str]:
        """Get available data structures for a specific database."""
        if database_name not in self.databases:
            return []
        
        db = self.databases[database_name]
        if 'metadata' in db and 'data_structures' in db['metadata']:
            return db['metadata']['data_structures']
        return []
    
    def generate_question(self, 
                         database_name: str,
                         difficulty: Optional[str] = None,
                         data_structure: Optional[str] = None,
                         pattern: Optional[str] = None,
                         count: int = 1) -> List[Dict[str, Any]]:
        """Generate questions based on specified criteria."""
        if database_name not in self.databases:
            raise ValueError(f"Database '{database_name}' not found")
        
        db = self.databases[database_name]
        questions = []
        
        # Collect all available questions
        all_questions = []
        
        if 'question_templates' in db:
            # Main database structure
            for diff_level, categories in db['question_templates'].items():
                if difficulty and diff_level != difficulty:
                    continue
                
                for category_name, category_data in categories.items():
                    if 'examples' in category_data:
                        for question in category_data['examples']:
                            if self._matches_criteria(question, data_structure, pattern):
                                all_questions.append(question)
        
        elif 'question_categories' in db:
            # Specialized database structure
            for category_name, category_data in db['question_categories'].items():
                if 'difficulty' in category_data and difficulty and category_data['difficulty'] != difficulty:
                    continue
                
                if 'questions' in category_data:
                    for question in category_data['questions']:
                        if self._matches_criteria(question, data_structure, pattern):
                            all_questions.append(question)
        
        # Select random questions
        if not all_questions:
            raise ValueError("No questions found matching the criteria")
        
        selected_questions = random.sample(all_questions, min(count, len(all_questions)))
        
        # Add metadata to each question
        for question in selected_questions:
            question['generated_at'] = datetime.now().isoformat()
            question['source_database'] = database_name
            question['generator_version'] = "1.0.0"
        
        return selected_questions
    
    def _matches_criteria(self, question: Dict[str, Any], 
                         data_structure: Optional[str], 
                         pattern: Optional[str]) -> bool:
        """Check if a question matches the specified criteria."""
        if data_structure and question.get('data_structure') != data_structure:
            return False
        if pattern and question.get('pattern') != pattern:
            return False
        return True
    
    def generate_progression_questions(self, 
                                     database_name: str,
                                     start_difficulty: str = "beginner",
                                     count_per_level: int = 2) -> Dict[str, List[Dict[str, Any]]]:
        """Generate questions following a learning progression."""
        if database_name not in self.databases:
            raise ValueError(f"Database '{database_name}' not found")
        
        db = self.databases[database_name]
        progression = {}
        
        # Get available difficulties
        difficulties = self.get_available_difficulties(database_name)
        
        # Sort difficulties by learning order
        difficulty_order = ["beginner", "easy", "medium", "hard"]
        sorted_difficulties = [d for d in difficulty_order if d in difficulties]
        
        for difficulty in sorted_difficulties:
            if difficulty_order.index(difficulty) < difficulty_order.index(start_difficulty):
                continue
            
            try:
                questions = self.generate_question(
                    database_name=database_name,
                    difficulty=difficulty,
                    count=count_per_level
                )
                progression[difficulty] = questions
            except ValueError:
                # No questions available for this difficulty
                progression[difficulty] = []
        
        return progression
    
    def format_question_markdown(self, question: Dict[str, Any]) -> str:
        """Format a question as Markdown."""
        md = f"# {question.get('title', 'Untitled Question')}\n\n"
        
        if 'description' in question:
            md += f"**Description:** {question['description']}\n\n"
        
        if 'difficulty' in question:
            md += f"**Difficulty:** {question['difficulty'].title()}\n\n"
        
        if 'data_structure' in question:
            md += f"**Data Structure:** {question['data_structure']}\n\n"
        
        if 'pattern' in question:
            md += f"**Pattern:** {question['pattern']}\n\n"
        
        if 'input_format' in question:
            md += f"**Input Format:** `{question['input_format']}`\n\n"
        
        if 'output_format' in question:
            md += f"**Output Format:** `{question['output_format']}`\n\n"
        
        if 'constraints' in question:
            md += f"**Constraints:** {question['constraints']}\n\n"
        
        if 'test_cases' in question:
            md += "**Test Cases:**\n\n"
            for i, test_case in enumerate(question['test_cases'], 1):
                md += f"**Example {i}:**\n"
                md += f"```\n"
                md += f"Input: {test_case.get('input', {})}\n"
                md += f"Output: {test_case.get('output', '')}\n"
                if 'explanation' in test_case:
                    md += f"Explanation: {test_case['explanation']}\n"
                md += f"```\n\n"
        
        if 'solution_template' in question:
            md += "**Solution Template:**\n\n"
            md += f"```python\n{question['solution_template']}\n```\n\n"
        
        if 'time_complexity' in question:
            md += f"**Time Complexity:** {question['time_complexity']}\n\n"
        
        if 'space_complexity' in question:
            md += f"**Space Complexity:** {question['space_complexity']}\n\n"
        
        if 'tags' in question:
            md += f"**Tags:** {', '.join(question['tags'])}\n\n"
        
        if 'learning_points' in question:
            md += "**Learning Points:**\n"
            for point in question['learning_points']:
                md += f"- {point}\n"
            md += "\n"
        
        return md
    
    def format_question_json(self, question: Dict[str, Any]) -> str:
        """Format a question as JSON."""
        return json.dumps(question, indent=2, ensure_ascii=False)
    
    def save_questions(self, questions: List[Dict[str, Any]], 
                      output_file: str, 
                      format_type: str = "markdown"):
        """Save questions to a file."""
        output_path = Path(output_file)
        
        if format_type == "markdown":
            content = ""
            for i, question in enumerate(questions, 1):
                content += f"## Question {i}\n\n"
                content += self.format_question_markdown(question)
                content += "\n---\n\n"
            
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(content)
        
        elif format_type == "json":
            with open(output_path, 'w', encoding='utf-8') as f:
                json.dump(questions, f, indent=2, ensure_ascii=False)
        
        else:
            raise ValueError(f"Unsupported format: {format_type}")
        
        print(f"✓ Questions saved to {output_path}")
    
    def get_database_info(self, database_name: str) -> Dict[str, Any]:
        """Get information about a specific database."""
        if database_name not in self.databases:
            raise ValueError(f"Database '{database_name}' not found")
        
        db = self.databases[database_name]
        info = {
            'name': db.get('metadata', {}).get('name', database_name),
            'description': db.get('metadata', {}).get('description', ''),
            'total_questions': db.get('metadata', {}).get('total_questions', 0),
            'difficulties': self.get_available_difficulties(database_name),
            'data_structures': self.get_available_data_structures(database_name)
        }
        
        return info


def main():
    """Main CLI function."""
    parser = argparse.ArgumentParser(description="Generate LeetCode questions from JSON databases")
    parser.add_argument("--database", "-d", 
                       help="Database name to use", 
                       default="main-question-database.json")
    parser.add_argument("--database-dir", 
                       help="Directory containing database files", 
                       default="leetcode-databases")
    parser.add_argument("--difficulty", 
                       help="Difficulty level (beginner, easy, medium, hard)")
    parser.add_argument("--data-structure", 
                       help="Data structure filter")
    parser.add_argument("--pattern", 
                       help="Algorithm pattern filter")
    parser.add_argument("--count", "-c", 
                       type=int, 
                       default=1, 
                       help="Number of questions to generate")
    parser.add_argument("--output", "-o", 
                       help="Output file path")
    parser.add_argument("--format", "-f", 
                       choices=["markdown", "json"], 
                       default="markdown", 
                       help="Output format")
    parser.add_argument("--progression", "-p", 
                       action="store_true", 
                       help="Generate progression questions")
    parser.add_argument("--list-databases", 
                       action="store_true", 
                       help="List available databases")
    parser.add_argument("--info", 
                       help="Show database information")
    
    args = parser.parse_args()
    
    # Initialize generator
    generator = LeetCodeQuestionGenerator(args.database_dir)
    
    # List databases
    if args.list_databases:
        print("Available databases:")
        for db_name in generator.get_available_databases():
            print(f"  - {db_name}")
        return
    
    # Show database info
    if args.info:
        try:
            info = generator.get_database_info(args.info)
            print(f"Database: {info['name']}")
            print(f"Description: {info['description']}")
            print(f"Total Questions: {info['total_questions']}")
            print(f"Difficulties: {', '.join(info['difficulties'])}")
            print(f"Data Structures: {', '.join(info['data_structures'])}")
        except ValueError as e:
            print(f"Error: {e}")
        return
    
    # Generate questions
    try:
        if args.progression:
            questions = generator.generate_progression_questions(
                database_name=args.database,
                count_per_level=args.count
            )
            
            # Flatten questions for output
            all_questions = []
            for difficulty, diff_questions in questions.items():
                for question in diff_questions:
                    question['difficulty'] = difficulty
                    all_questions.append(question)
            
            questions = all_questions
        else:
            questions = generator.generate_question(
                database_name=args.database,
                difficulty=args.difficulty,
                data_structure=args.data_structure,
                pattern=args.pattern,
                count=args.count
            )
        
        # Output questions
        if args.output:
            generator.save_questions(questions, args.output, args.format)
        else:
            if args.format == "markdown":
                for question in questions:
                    print(generator.format_question_markdown(question))
                    print("\n" + "="*50 + "\n")
            else:
                for question in questions:
                    print(generator.format_question_json(question))
                    print("\n" + "="*50 + "\n")
    
    except ValueError as e:
        print(f"Error: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"Unexpected error: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()

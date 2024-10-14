# Calculator

A simple and responsive calculator built with HTML, CSS, and JavaScript. This project allows users to perform basic arithmetic operations including addition, subtraction, multiplication, and division.

## Getting Started

To use the calculator, visit the live website: https://andkymon.github.io/calculator/

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Clear and backspace functionalities to manage input.
- Supports decimal numbers.
- Automatically evaluates and allows chaining operations.

## Technologies Used

- **HTML**: Structure of the calculator.
- **CSS**: Styling for a visually appealing interface.
- **JavaScript**: Functionality for calculations and user interactions.

## Usage

1. **Input Numbers**: Click on the number buttons to enter digits.
2. **Select Operation**: Click on one of the operation buttons (`+`, `-`, `*`, `/`) to select the desired arithmetic operation.
3. **Perform Subsequent Operations**: After entering a second number and selecting another operation, the calculator will automatically evaluate the first pair of numbers and use the result as the first number for the next operation. For example, if you input `12`, click `+`, then input `7`, and click `-`, the calculator will first evaluate `12 + 7` (resulting in `19`), then allow you to perform `19 -` with your next number.
4. **Equals Button**: Click the equals button (`=`) when you want to finalize the current calculation and display the result. 
5. **Clear Display**: Click `C` to reset the calculator or use `⇦` to delete the last digit entered.
6. **Use Decimal**: Click the `.` button to add a decimal point to the number if needed.

### Note

- The calculator supports basic arithmetic operations and will show an error message if you attempt to divide by zero.
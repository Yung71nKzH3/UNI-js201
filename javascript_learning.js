'use strict';

// ==========================================
// JavaScript Learning & Cheatsheet
// ==========================================

/*
   1. The 'add' function
   ---------------------
   Task: Create an add function that accepts a and b, and returns their sum.
*/

// JavaScript Version:
function add(a, b) {
   return a + b;
}

/*
   COMPARISON WITH PYTHON:
   -----------------------
   Python:
   def add(a, b):
       return a + b
   
   Differences:
   1. Keyword: 'function' (JS) vs 'def' (Py).
   2. Logic wrapping: { curly braces } (JS) vs indentation (Py).
   3. Statements: Semicolons ';' are used to end statements in JS (best practice).
*/


// ==========================================
// 2. Data Types in JavaScript
// ==========================================

/*
   JavaScript is dynamically typed (like Python). 
   You don't declare the type (int, string) when creating variables.
   Use 'let' or 'const' to declare variables.
*/

// --- Numbers ---
// In JS, integers and floats are all just "Number".
let myInteger = 10;
let myFloat = 10.5;
// Python: has int (10) and float (10.5) as separate types.

// --- Strings ---
let firstName = "Leonardo";  // Double quotes
let surname = 'Valenti';     // Single quotes (work the same)
let message = `Hello, ${firstName}!`; // Backticks for "Template Literals" (like Python f-strings)
// RECOMMENDATION: Use Backticks (``) whenever you mix text and variables. It is cleaner!
// Python: f"Hello, {first_name}!"

// --- Booleans ---
let isFun = true;
let isHard = false;
// Python: True / False (Capitalized)

// --- undefined vs null ---
let waitingForValue; // Value is 'undefined' (variable exists but has no value yet)
let emptyResult = null; // Value is 'null' (intentionally empty)
// Python: Uses 'None' for both concepts mostly.

// ==========================================
// 3. Comparisons & Equality (The "Strict" Tip)
// ==========================================

// In JavaScript, we have two ways to check equality:

// 1. Loose Equality (==) -> "Only checks value, ignores type"
// console.log(5 == "5"); // true (Because 5 looks like "5")

// 2. Strict Equality (===) -> "Checks value AND type"
// console.log(5 === "5"); // false (Number vs String)

// PRO TIP: ALWAYS use '===' (Triple Equals). 
// Be strictly typed like Python! Avoid '==' unless you know exactly why you want it.

// ==========================================
// 4. Testing Area
// ==========================================
// We can use console.log() to print to the terminal (like print() in Python)

// ==========================================
// 5. Objects (Like Python Dictionaries)
// ==========================================

/*
   In Python, you have Dictionaries:
   my_dict = {"name": "Leo", "score": 10}
   my_dict["active"] = True  # Adding a new key

   In JavaScript, we use Objects:
*/

let student = {
   name: "Leo",
   score: 10
};

// Accessing data (Dot notation is preferred!)
// console.log(student.name);   // "Leo"

// Adding new data (Just assign it!)
student.checked = true;      // ".checked" is just a new key (property) we made up! 
// It implies we are marking this object as "done" or "selected".
// It works exactly like student.isAwesome = true;

// ==========================================
// 6. Testing Area
// ==========================================
// We can use console.log() to print to the terminal (like print() in Python)

console.log("--- Testing add function ---");
console.log("5 + 10 =", add(5, 10));
console.log("String concatenation:", add("Web", " Development"));
console.log("Object Test:", student); 

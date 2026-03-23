let name= "Your Name";
let age= 25;
const birthYear= 1998;

//typeof operator
console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof true); // Output: boolean

//let vs const
let score = 100;
 score = 900;
 console.log("Updated score:", score); // Output: 900

 const pi = 3.14;
// pi = 3.14159; // This will throw an error because pi is a constant

//Exercise
let fullName = "John Buay";
let myAge = 29;
let isStudent = true;
let favoriteColor = ["Blue", "Purple", "Black"];
let dateToday = new Date();
console.log("My name is:", fullName);
console.log("My age is:", myAge);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColor);
console.log("Today's date is:", dateToday);

console.log(typeof fullName); // Output: string
console.log(typeof myAge); // Output: number
console.log(typeof isStudent);  // Output: boolean
console.log(typeof favoriteColor); // Output: object (arrays are a type of object in JavaScript)
console.log(typeof dateToday); // Output: object (dates are also a type of object in JavaScript)    

//Task 7.2
let a = 10;
let b = 3;
 console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
    console.log(a**b);

let count = 0;
count++;
count--;    
console.log(count); // Output: 0

//Exercise 2
let firstName = "John";
let lastName = "Buay";
//concatenation
let fullName2 = firstName + " " + lastName;

//template literals
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} and ${lastName.length} characters.`;
console.log(fullName2); // Output: John Buay
console.log(greeting); // Output: Hello, Buay!
console.log(message); // Output: Your name has 4 and 4 characters.

//Exercise 3
console.log(5 > 3); // Output: true
console.log(5 < 3); // Output: false
console.log(5 >= 5); // Output: true
console.log(5 <= "5"); // Output: true
console.log(5 == "5"); // Output: true (loose equality, type coercion occurs)
console.log(5 === "5"); // Output: false (strict equality, no type coercion)
console.log(5 != "5"); // Output: false (loose inequality, type coercion occurs)
console.log(5 !== "5"); // Output: true (strict inequality, no type coercion)

//logical operators
console.log(true && false); // Output: false
console.log(true || false); // Output: true
console.log(!true); // Output: false    

//challenge
let birthYear2 = 2004;
let ageInDays = (2026 - birthYear2) * 365;
let ageInHours = ageInDays * 24;
let centenaryYear = birthYear2 + 100;
console.log(`You are approximately ${ageInDays} days old.`);
console.log(`You are approximately ${ageInHours} hours old.`);
console.log(`You will turn 100 years old in the year ${centenaryYear}.`);

//Task 7.3
//function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Buay")); // Output: Hello, Buay!

//function expression
const add = function(x,y) {
    return x + y;
};
console.log(add(515283, 2736293)); // Output: 3251576

//arrow function
const multiply = (x,y) => x * y;
console.log(multiply(5152, 2653)); // Output: 13657156

//arrow function with body
const divide = (x,y) => {
    if (y === 0) {
        return "Cannot divide by zero";
    }
    return x / y;
};
console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: Cannot divide by zero

//Exercise 2
function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(5, 10)); // Output: 50

function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(convertToFahrenheit(25)); // Output: 77

function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));

function getInitials(fullName) {
    const names = fullName.split(" ");
    const initials = names.map(name => name.charAt(0).toUpperCase()).join("");
    return initials;
}
console.log(getInitials("John Buay")); // Output: JB

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello")); // Output: olleH

//exercise 3 Default parameters
function greet(name = "Guest", greeting = "Hello 👋") {
    return `${greeting}, ${name}!`;
}
console.log(greet());
console.log(greet("Buay"));
console.log(greet("Buay", "Welcome"));

function caculateTip(amount, tipPercentage = 15) {
    return (amount * tipPercentage) / 100;
}   
console.log(caculateTip(321)); // Output: 48.15
console.log(caculateTip(425, 20)); // Output: 85

//Task 7.4
//Exercise 1 if/else statement
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) { 
        return "D";
    } else {
        return "F";
    }
}
console.log(getGrade(95));
console.log(getGrade(85));
console.log(getGrade(75));
console.log(getGrade(65));
console.log(getGrade(55));  

//Exercise 2 switch statement
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day number";
    }
}
console.log(getDayName(0)); // Output: Sunday
console.log(getDayName(3)); // Output: Wednesday
console.log(getDayName(6)); // Output: Saturday
console.log(getDayName(7)); // Output: Invalid day number

//Exercise 3: Loops
//for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}   


//while loop
let count2 = 0;
while (count2 < 5) {
    console.log(count2 + 1);
    count2++;
}

//for...of arrays
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

for (let k = 1; k<=100; k++);
console.log(k)

for (j = 0; j<=50; j++); {
 if (j % 2 === 0){
    console.log(j);
}
}

for (f = 1; f<=100; f++) {
    if (f % 3 ===0 && f % 5 ===0) {
        console.log("fizzbuzz");
    } else if
        (f % 3 === 0) {
            console.log("fizz");
    }else if (i % 5 === 0) {
            console.log("Buzz");
    } else {
            console.log(i);
        };
}

//print a triangle of stars
for (let t = 1; t <= 5; t++){
    console.log("*".repeat(t));
}

//TASK 8.1: ARRAYS


const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

console.log(fruits[0]);
console.log(fruits.length);

fruits.push("grape");
fruits.unshift("mango");
fruits.pop();
fruits.shift();

console.log("Updated fruits:", fruits);

numbers.forEach(num => console.log("Double with forEach:", num * 2));

const doubled = numbers.map(num => num * 2);
const evenNumbers = numbers.filter(num => num % 2 === 0);
const firstEven = numbers.find(num => num % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);

console.log("Doubled:", doubled);
console.log("Even numbers:", evenNumbers);
console.log("First even:", firstEven);
console.log("Sum:", sum);
console.log(numbers.includes(3));

// Build tasks
const nums = [2, -4, 7, 12, -1, 15];
const doubleAll = nums.map(num => num * 2);
const noNegatives = nums.filter(num => num >= 0);
const firstGreaterThan10 = nums.find(num => num > 10);
const product = nums.reduce((acc, num) => acc * num, 1);

console.log("Double all:", doubleAll);
console.log("No negatives:", noNegatives);
console.log("First > 10:", firstGreaterThan10);
console.log("Product:", product);

//TASK 8.2

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "coding", "gaming"],
  address: {
    city: "New York",
    country: "USA"
  }
};

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

person.age = 31;
person.email = "john@example.com";
delete person.isStudent;

console.log("Updated person:", person);

const calculatorObject = {
  add: function (a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply: (a, b) => a * b
};

console.log(calculatorObject.add(5, 3));
console.log(calculatorObject.subtract(5, 3));
console.log(calculatorObject.multiply(5, 3));

const scores = {
  math: 95,
  english: 88,
  science: 92
};

console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));

for (const [subject, score] of Object.entries(scores)) {
  console.log(`${subject}: ${score}`);
}

const students = [
  { name: "James", age: 22, grade: 85, major: "CS" },
  { name: "Bobby", age: 20, grade: 72, major: "Math" },
  { name: "Charlie", age: 23, grade: 90, major: "CS" },
  { name: "Diddy", age: 21, grade: 88, major: "Physics" },
  { name: "Everlyn", age: 22, grade: 95, major: "CS" }
];

const names = students.map(student => student.name);
const highAchievers = students.filter(student => student.grade > 80);
const charlie = students.find(student => student.name === "Charlie");
const avgGrade =
  students.reduce((total, student) => total + student.grade, 0) / students.length;
const csMajors = students.filter(student => student.major === "CS");
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
const hasTopStudent = students.some(student => student.grade > 90);
const allPassing = students.every(student => student.grade >= 60);

console.log("Names:", names);
console.log("High achievers:", highAchievers);
console.log("Charlie:", charlie);
console.log("Average grade:", avgGrade);
console.log("CS majors:", csMajors);
console.log("Sorted by grade:", sortedByGrade);
console.log("Any student > 90?", hasTopStudent);
console.log("All passing?", allPassing);




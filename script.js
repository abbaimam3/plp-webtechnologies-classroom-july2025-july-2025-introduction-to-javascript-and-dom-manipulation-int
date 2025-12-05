// -----------------------------------------
// PART 1: JavaScript Basics
// Variables, Data Types, Conditionals
// -----------------------------------------

let age = 18;
let name = "Abba";
let isStudent = true;

// Conditional check
if (age >= 18) {
    document.getElementById("basicOutput").textContent =
        `${name} is an adult and isStudent = ${isStudent}`;
} else {
    document.getElementById("basicOutput").textContent =
        `${name} is a minor.`;
}



// -----------------------------------------
// PART 2: JavaScript Functions
// Reusable logic (2 functions)
// -----------------------------------------

// 1. A greeting function
function greetUser(username) {
    return `Hello, ${username}! Welcome to JavaScript Week 5.`;
}

// 2. A sum calculator function
function calculateSum(a, b) {
    return a + b;
}

document.getElementById("greetBtn").addEventListener("click", () => {
    document.getElementById("greetOutput").textContent =
        greetUser("Abba Imam");
});

document.getElementById("sumBtn").addEventListener("click", () => {
    let total = calculateSum(10, 20);
    document.getElementById("sumOutput").textContent =
        `The sum of 10 + 20 is: ${total}`;
});



// -----------------------------------------
// PART 3: Loops (2 Examples)
// -----------------------------------------

// Loop Example 1: Listing numbers
document.getElementById("listBtn").addEventListener("click", () => {
    const ul = document.getElementById("numberList");
    ul.innerHTML = ""; // Clear previous

    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = `Number: ${i}`;
        ul.appendChild(li);
    }
});

// Loop Example 2: Array iteration
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log("Fruit List:");
fruits.forEach(fruit => console.log(fruit));



// -----------------------------------------
// PART 4: DOM Manipulation (3+ Interactions)
// -----------------------------------------

// 1. Toggle class (change box color)
document.getElementById("toggleBtn").addEventListener("click", () => {
    const box = document.getElementById("colorBox");
    box.style.background =
        box.style.background === "tomato" ? "#3b82f6" : "tomato";
});

// 2. Create new elements dynamically
document.getElementById("createItemBtn").addEventListener("click", () => {
    const ul = document.getElementById("dynamicList");
    const li = document.createElement("li");
    li.textContent = "New dynamic item created!";
    ul.appendChild(li);
});

// 3. Updating text dynamically
document.getElementById("basicOutput").style.color = "green";

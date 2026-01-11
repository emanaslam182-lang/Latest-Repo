console.log("Write a program to print numbers from 1 to 10.");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// ........................................................

console.log("Write a program to print numbers from 10 to 1.");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}   

// ........................................................

console.log("Write a program to print even numbers from 5 to 15.");
for (let i = 5; i <= 15; i++)  {
    console.log(i);
  }

// ........................................................

console.log("Write a program to print odd numbers from 0 to 20.");
for (let i = 0; i <= 20; i++)  {
    console.log(i);
  }

// ........................................................
// ........................................................

console.log("🟡 Section B: Even & Odd Numbers");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + " is Even");
    } else {
      console.log(i + " is Odd");
    }
    }

// ........................................................

console.log("Write a program to print all odd numbers from 1 to 20.");
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
    }
// ........................................................

console.log("Write a program to print all even numbers from 1 to 20.");
for (let i = 1; i <=20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
    }

// ........................................................

console.log("Write a program to print numbers divisible by 5 from 1 to 50.");
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }       
    }

// ........................................................
// ........................................................

console.log("🟠 Section C: Calculations Using Loop");
console.log("Write a program to find the sum of numbers from 1 to 10.");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum is:", sum);

// ........................................................

console.log("Write a program to find the sum of even numbers from 1 to 20.");
let sumEven = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log("Sum of even numbers is:", sumEven);

// ........................................................

console.log("Write a program to print the square of numbers from 1 to 10.");
for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}

// ........................................................
// ........................................................

console.log("🟠 Section D: Multiplication Tables");
console.log("Write a program to print the table of 2.");
for (let i = 1; i <= 10; i++) {
    console.log("2 x " + i + " = " + (2 * i));
}

// ........................................................

console.log("Write a program to print the table of 5.");
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

// ........................................................

console.log("Write a program to print the table of a given number (take input from the user).");
let num = 7; // Example number
for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}


// ........................................................
// ........................................................

console.log("🔴 Section E: Thinking Questions");
console.log("Write a program to count how many numbers between 1 and 50 are even.");
let count = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        count++;
    }
}
console.log("Count of even numbers between 1 and 50 is:", count);

// ........................................................

console.log("Write a program to count how many numbers between 1 and 100 are divisible by 3.");
let countDivisibleByThree = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        countDivisibleByThree++;
    }
}
console.log("Count of numbers divisible by 3 between 1 and 100 is:", countDivisibleByThree);
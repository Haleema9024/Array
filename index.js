let mygirls = ["Raviya", "Laiba"];
let myboys = ["Rafay", "Saad", "Talha"];
let mychildern = myboys . concat (mygirls);
console.log(myboys);
console.log(mychildern);


// unshift()
let fruits = ["Banana", "Orange", "Apple", "Mango", "Peach"]
fruits.unshift("Lemon", "Juice", 45);
console.log(fruits);

// shift(delete at start)
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log(fruits.shift());
fruits.shift();
console.log(fruits);

// Slice(Return a piece of Array)
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
console.log(fruits);
let piece_of_Array = fruits.slice(-4,-1)
console.log(piece_of_Array);

// Splice()
let months = ["January", "February", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let days = months.splice(2,2, "Friday", "Sunday");
console.log(days);
console.log(months);

let companies = ["Bloomberg", "Microsoft","Uber", "Google", "IBM", "Netflix"]
 console.log(companies);
 console.log(companies.shift());
 companies.shift();
 console.log(companies);
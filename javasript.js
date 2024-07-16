//array creation and initialization

let arr=[2,4,6,8,10]
console.log(arr);


//Array manipulation 
//add elements
let car=["BMW","audi","sumo","creta"]
car.push("Range Rover");
console.log(car);
//unshift
car.unshift("Rolls Royce");
console.log(car);
//pop
car.pop();
console.log(car);
//shift
car.shift("sumo");
console.log(car);

//array searching
//indexof
let fruits=["mango","apple","orange","banana"]
// fruits.indexOf("apple");
console.log(fruits.indexOf("apple"));
//find()
let arra = [10, 20, 30, 40, 25];
let found = arra.find(function (element) {
    return element > 30;
});
console.log(found);

//includes
console.log(fruits.includes("banana"));

//array filtering

const words = ['ashika', 'sowndarya', 'nisha', 'karunya', 'logi'];
const result = words.filter((word) => word.length > 6);
console.log(result);

//array mapping
const num = [25,9,36,49];
a=num.map(Math.sqrt);
console.log(a);







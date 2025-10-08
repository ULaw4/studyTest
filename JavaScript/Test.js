
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

console.log(fruits);

fruits.pop();
console.log(fruits); // ['apple']

function arrayBuilder(one, two, three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}

var greet = "Hello, ";
var place = "World";
console.log(greet.length); // 7

var greet = "Hello, ";
console.log(greet.charAt(0)); // 'H'

var world = "Wo".concat("rl").concat("d"); // 'World'
console.log(world);

console.log("ho-ho-ho".indexOf('h'));
console.log("ho-ho-ho".indexOf('o'));
console.log("ho-ho-ho".indexOf('-'));

console.log("ho-ho-ho".split("-")); // ['ho', 'ho', 'ho']

console.log(greet.toUpperCase()); // "HELLO, "
console.log(greet.toLowerCase()); // "hello, "

//Assigment about objects and arrays


let clothes = [];

clothes.push("T-shirt");
clothes.push("Jeans");
clothes.push("Hoodie");
clothes.push("Sneakers");
clothes.push("Jacket");

clothes.pop(); 

clothes.push("Cap");

console.log(clothes[2]); 

let favCar = {};

favCar.color = "Black";

favCar.convertible = false;

console.log(favCar);



//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()
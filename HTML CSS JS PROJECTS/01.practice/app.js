console.log("challenge one");
// Q1
let name = "Ashu Choudhary";
console.log(name);
// Q2
let whatDoYouWannaBecomeInYourLife = "programmeer";
console.log(whatDoYouWannaBecomeInYourLife);
// Q3
let gender = "male";
console.log(gender);
// Q4
let twitterHandle = "dosnt have any twitterHandle";
console.log(twitterHandle);
// challenge two
console.log("challenge two");
// Q1
let firstFavNum = 12;
// Q2
let = secondFavNum = 5;
// Q3
console.log(firstFavNum + secondFavNum);
// Q4
console.log(firstFavNum - secondFavNum);
// Q5
console.log(firstFavNum * secondFavNum);
// Q6
console.log(firstFavNum / secondFavNum);
// Q7
console.log(firstFavNum % secondFavNum);
// Q8
console.log(firstFavNum ** secondFavNum);
// challenge three
console.log("challenge three");
// Q1
let isJsProgrammingLanguage = true;
console.log(isJsProgrammingLanguage);
// Q2
let isJsHard = false;
console.log(isJsHard);
// Q3
let favNumb = 5;
console.log(favNumb);
// Q4
console.log(favNumb + undefined);
// challenge four
console.log("challenge four");
// Q1
let firstFavNumb = 21;
// Q2
let secondFavNumb = 10;
// Q3
console.log(firstFavNumb > secondFavNumb);
// Q4
console.log(firstFavNumb < secondFavNumb);
// Q5
console.log(firstFavNumb >= secondFavNumb);
// Q6
console.log(firstFavNumb <= secondFavNumb);
// Q7
console.log(firstFavNumb === secondFavNumb);
// Q8
console.log(firstFavNumb == secondFavNumb);
// Q9 
console.log(firstFavNumb !== secondFavNumb);
// Q10
console.log(firstFavNumb != secondFavNumb);
// challenge five
console.log("challenge five");
// Q1
let favActorFirstName = "alice ";
console.log(favActorFirstName);
// Q2
let favActorLastName = "willam";
console.log(favActorLastName);
// Q3
let fullName = favActorFirstName.concat(favActorLastName);
console.log(fullName);
// Q4
let uppercase = fullName.toUpperCase();
console.log(uppercase);
// Q5
let message = `My favorite Actor is ${uppercase} & say somthing about your fav Actor,`;
console.log(message);
// Q6
message += ` his best show is Silicon Valley`;
// Q7
console.log(message);
// challenge six
console.log("challenge six");
// Q1
let password;
// Q2
if (password === 8) {
    console.log("Welcome");
}
// Q3
else if (password <= 8) {
    console.log("password is too short");
}
// Q4
else if (password >= 8) {
    console.log("too long password & password should be 8 character");
}
// Q5
else {
    console.log("please provide a password");
}
// challenge seven
console.log("challenge seven");
// Q1
let fruit = "banana";
// Q2
switch (fruit) {
    case "banana":
        console.log("banana is good");
        break;
// Q3
    case "orange":
        console.log("i am not a fan of orange");
        break;
// Q4
    case "apple":
        console.log("how you like them apples?");
        break;
// Q5
    default:
        console.log("i have never heard of that fruit");
        break;
}
// challenge eight
console.log("challenge eight");
// Q1
for (let i = 0; i <= 1000; i++){
    console.log("Ashu",i);
}
// challenge nine
console.log("challenge nine");
// Q1
let j = 10;
while (j<=100) {
    console.log("Ashu",j);
    j++;
}
// challenge ten
console.log("challenge ten");
// Q1
let k = 20;
do {
    console.log("Ashu", k);
    k++;
} while (k <= 400);
// challenge eleven
console.log("challenge eleven");
// Q1
const favSinger = ["sonu nigam", "altaf", "hafiz raza"];
// Q2
console.log(favSinger[0]);
// Q3
const favNumber = [2, 3, 4, 5];
// Q4
const mixedArr = ["string", favNumber, 123, true];
// Q5
console.log(mixedArr[0]);
console.log(mixedArr[1]);
console.log(mixedArr[1][0]);
console.log(mixedArr[1][1]);
console.log(mixedArr[1][2]);
console.log(mixedArr[1][3]);
console.log(mixedArr[2]);
console.log(mixedArr[3]);
// challenge twelve
console.log("challenge twelve");
// Q1
const car = {
// Q2
    type:"maruti",
    model:"gt23",
    color:"black"
};
// Q3
console.log(typeof car);
console.log(car);
// Q4
car.type = "toyota";
console.log(car);
// Q5
car.wheels = "rimbs";
// Q6
console.log(car);
// challenge thirteen
console.log("challenge thirteen");
// Q1
function MyFunction(a,b) {
    return a * b;
}
console.log(MyFunction(2,4));
// challenge fourteen
console.log("challenge fourteen");
// Q1
const showCallFunc = (fn) => {
    let value = 10;
    fn(value);
}
showCallFunc(function (value) {
    console.log(value);
});
// challenge fifteen
console.log("challenge fifteen");
// Q1
let strings = `the quick
brown fox
jumps over
the lazy dog`;
console.log(strings);
// Q2
let firstName = "Ashu";
let lastName = "Choudhary";
// Q3
console.log(`${firstName} ${lastName}`);
// challenge sixteen
console.log("challenge sixteen -> ES6");
// Q1
let a = 1, b = 2, c = 3;
let obj = {
    a, b, c
};
console.log(obj);
// Q2
let lib = {
    sum: (a, b) =>a + b,
    mult: (a, b) =>a * b,
}
console.log(lib.sum(2, 3));
console.log(lib.mult(2, 3));
// Q3
getPersionES6 = (name, age, height) => {
    return { name, age, height }
};
console.log(getPersionES6("ashu", 19, 210));
// challenge seventeen
console.log("challenge seventeen -> ES6(default parameter)");
// Q1
multiply = (a, b = 1) => a * b;
console.log(multiply(2));
// challenge eighteen
console.log("challenge eighteen -> ES6(spread operator)");
// Q1
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
console.log(arr3);
// Q2
let user = {
    name: "Jen",
    age: 22
};
let clone = {...user};
console.log(clone);
// challenge ninteen
console.log("challenge ninteen -> ES6(rest operator)");
// Q1
variadic = (...prams) => {
    console.log(prams);
}
console.log('Huxn','WebDev',19,20,["one","two"]);
// challenge twenty
console.log("challenge twenty -> array destructuring");
// Q1
const color = ["red", "green", "blue", "yellow", "orange"];
const [color1, color2, color3] = color;
console.log(color1, color2, color3);
// challenge twenty one
console.log("challenge twenty one -> object destructuring");
// Q1
const person = {
    names: "jhon doe",
    age: 30,
    gender: "male",
    country: "usa"
};
const { names, age, country } = person;
console.log(names, age, country);
// challenge twenty two
console.log("challenge twenty two -> object destructuring");
// Q1
const { names: personName, age: personAge, country: personCountry } = person;
console.log(personName, personAge, personCountry);
// challenge twenty three
console.log("challenge twenty three -> using this keyword");
// Q1
const persons = {
    names: "Ashu",
    age: "22",
    greetRegular: function () {
        return `Hello my Name is ${this.names} & I'm ${this.age} year old.`;
    },
    greetArrow: () => {
        return `Hello my Name is ${this.names} & I'm ${this.age} year old.`;
    },
};
console.log(persons.greetRegular());
console.log(persons.greetArrow());
// challenge twenty four
console.log("challenge twenty four -> factory function");
// Q1
function vehciles(type,brand,model,year) {
    return { type, brand, model, year };
};
const v1 = vehciles("car", "hundai", "camry", 2020);
console.log(v1);
const v2 = vehciles("motercycle", "honda", "passion plus", 2012);
console.log(v2);
// challenge twenty five
console.log("challenge twenty five -> constructor function");
// Q1
function people(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.info = function () {
        return `my name is ${this.name}, age is ${this.age}, gender is ${this.gender}.`;
    };
};
const people1 = new people("Ashu", 22, "male");
const people2 = new people("rupesh", 21, "male");
console.log(people1);
console.log(people1.info());
console.log(people2);
console.log(people2.info());
// Q2
function cars(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.start = function () {
        return `Starting the ${this.make} ${this.model}....`;
    };
    this.stop = function () {
        return `stopping the ${this.make} ${this.model}....`;
    };
    this.info = function () {
        return `make:${this.make} model:${this.model} year:${this.year} color:${this.color}`;
    }
};
const car1 = new cars("Toyota", "camry", 2022, "white");
const car2 = new cars("honda", "CR-V", 2024, "matt Black");
console.log(car1.start());
console.log(car1.info());
console.log(car1.stop());
console.log(car2.start());
console.log(car2.info());
console.log(car2.stop());


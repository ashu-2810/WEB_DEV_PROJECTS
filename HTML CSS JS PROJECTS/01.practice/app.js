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

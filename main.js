//Q1) Name cases:store a person's name in a variable, and then print that person's name in lowercase,uppercase and titlecase//
var myDaughter = "Alina";
console.log(myDaughter.toLowerCase());
console.log(myDaughter.toUpperCase());
console.log(myDaughter.slice(0, 1).toUpperCase() + myDaughter.slice(1, 5));
//Q2) store the names of a few of your  friends ina array called names prient each person's name by accesing each element in the list, one at a time//
var names = ["afaf", "samia", "numa", "asma"];
names.forEach(function (A) { return console.log(A); });
//Q3) start with the array you used in exercise 11 ,but instead of printing name print a message to them . message should be personalized with the person's name//
var kids = ["numa", "amaan", "alina", "airah", "aizah"];
kids.forEach(function (B) { return console.log(B, "i love my kids"); });
//Q4)your own array: think of your favorite mode of trasportation such as motorcycle or cars and make a list prite a statement about these items such as "i would like to own honda"//
var cars = ["Honda", "Tesla", "BMW"];
cars.forEach(function (Z) { return console.log("i would like to own a ".concat(Z)); });
//Q5) make a guest list you want to invite. and one in staring and one in meddel and one in last of the list//
var invite = ["rabia", "naseema", "narmeen"];
invite.forEach(function (box) { return console.log(box, "i want to invite you"); });
invite.unshift("iffath");
console.log(invite);
invite.splice(2, 0, "wafa");
console.log(invite);
invite.push("alina");
console.log(invite);
invite.forEach(function (A) { return console.log(A, "i want to invite you"); });

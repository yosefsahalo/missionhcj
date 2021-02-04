// mission 1
// function minMax(params) {
//     var num = +prompt('Enter Your Number');
//     var min = num;
//     var max = 0;
//     while (num != 0) {
//         if (num >= min && num >= max) {
//             max = num;
//         }
//         if (num <= min ) {
//             min = num;
//         }
//         num = +prompt('Enter Your Number');
//     }
//     console.log('This Is The Minimum ', min);
//     console.log('This Is The Maximum ', max);
// }
// minMax();


// mission 2
// function evevNumber() {
//     var num = 0;
//     var num1 = [];
//     var even = [];
//     for (let i = 0; i < 10; i++) {
//         num = +prompt('Enter Your Number');
//         num1.push(num);
//         if (num % 2 == 0) {
//             even.push(num);
//         }
//     }
//     console.log(num1);
//     console.log(even);
// }
// evevNumber();


//mission 3
// function numberFromUser() {
//     var num = +prompt('Enter Your Number');
//     var num1 = [];
//     var counter = 0;
//     for (let i = 0; i < 20; i++) {
//         num1.push(Math.floor(Math.random() * 10));
//         if (num1[i] == num) {
//             counter++;
//         }
//     }
//     if (counter > 0) {
//         console.log('Your Number Is here');
//     }
//     else {
//         console.log('Your Number Is Not here');
//     }
//     console.log(num1);
// }
// numberFromUser();


//mission 4
// function names() {
//     var name = prompt('Enter Your Name here');
//     var counter = 0;
//     var counter1 =0;
//     for (let i = 0; i < name.length; i++) {
//         if (name[0] == 'A') {
//             counter++;
//         }
//         else if (name[0] == 'Z') {
//             counter1++;
//         }
//         else{

//         }       
//     }
//     if (counter>0) {
//         console.log('NICE');
//     }
//     else if (counter1>0) {
//         console.log('GOOD');
//     }
//     else{
//         console.log('Never Mind');
//     }

//     console.log(name);
// }
// names();


// // miisםin 4 again
// function names(leng) {
//     var name = prompt('Enter Your Name here');
//     // var counter = 0;
//     // var counter1 = 0;
//     for (let i = 0; i < leng.length; i++) {
//         if (name[0] == leng[i]) {
//             if (leng[i] == 'A') {
//                 console.log('Nice');
//             }
//             else if (leng[i] == 'Z') {
//                 console.log('Good');
//             }
//             else {

//             }
//         }
//     }
//     console.log('This Letter Is Not Important');
// }
// var abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// names(abc);


// mission 5
// function fizzBuzz() {
//     for (let i = 1; i < 100; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log(i,'fizzbuzz');
//         }
//         if (i % 3 != 0 && i % 5 != 0) {
//             console.log(i);
//         }
//         if (i % 3 == 0) {
//             console.log(i,'fizz');
//         }
//         if (i % 5 == 0) {
//             console.log(i,'buzz');
//         }
//     }
// }
// fizzBuzz();







































// function firstNameLastName() {
//     var firsName= prompt('Enter Your First Name');
//     var lastName= prompt('Enter Your First Name');
//     var result = firsName.indexoff(0);
//     var result1 = lastName.toUppercase();
//     var sum = lastName + listName;
// }
// firstNameLastName();


// function printName() {
//     var inputFromUser = prompt("Enter Your Name");
//     if (inputFromUser / 1 == inputFromUser) {
//         alert("Please Enter a Proper Name And Not a Number")
//     }
// }
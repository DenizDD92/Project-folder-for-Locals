// var person="John";
// console.log(person);

// person="nick";
// console.log(person);


// const city = "London"
// console.log(city);

// const str="John is a developer";
// console.log(str);
// console.log(typeof str);
// // 
// // const num=30;
// // console.log(num);
// // console.log(typeof num)
// // Put strings to identifyu text otherwise it gonna read as number
// // 
// const num='30.45';
// console.log(num);
// console.log(typeof num)

// const num1=10;
// const num2=20;
// const bool=true;
// console.log(typeof bool)



// let a;
// console.log(a);
// console.log( typeof a);

// const b =null;




// NEW CHAPTER AFTER FIRST LESSON


// const a=5+5;
// console.log(a)

// const b=(5+5)*5;
// console.log(b)

// const num1=10;
// const num2="10";

// const z=10+"20";
// console.log(z)

// const x="helo" + "world";
// console.log(x);

// const f=10+20;
// console.log(f);
// once we set gender as a male consol will show alexis is my son, otherwise if we changegender into female it will start using it as ELSE command. Change gender to see difference. Else could/should be only one.




// const kid="Alexis";
// const gender="female";
// // 
//                     if (gender==="male") {
//     console.log(kid+" is myson");
// } else{
//     console.log(kid+ " is my daughta");
// }

// // 
// //  
// // 
// const profession="developer";
//     if (profession==="composer") {
//     console.log(profession+" teaches students");
// }
//     else if (profession==="composer") {
//     console.log(profession+"_creates_sound");
// }
// // Else used for false matches when its neither composer or instructor
//     else {
//     console.log("Professions do not match");
// }

// if ( 5===5 && 4===4 ) {
//     console.log("condition is true");
// } else {
//     console.log("condition is false");
// } 
//  The && means that both elemets are true AND match - to get true value.
// The || means that only one of the elements should match - to get true value.
// if ( 5===3 || 4===4 ) {
//     console.log("condition is true");
// } else {
//     console.log("condition is false");
// }
// In this case ! means NOT 
// if (!5===5) {
//     console.log("condition is false");
//     }else {
//         console.log("condition is true");
// }







  // Passexam example
// function passExam(name, score) {
// const passUni = 80;
// const passColl = 51;
// const passAll= 100;
// const loser= 45;
//     if (score>=passUni && score>passColl && score!==loser) {
//         console.log(name+" have been enrolled at the University with "+score+"points");
//         }
//     else if (score>=passColl && score>loser && score!=passUni) {
//         console.log(name+" have been enrolled at the College with "+score+"points");
//         }
//     else if (score<=loser) 
//         {console.log(name+" failed you looser");
//         }
//     if (score>=passAll) {
//        console.log(name+" is a CHAmpion chad");
//         }
//     if (score>loser && score<passColl && score<passUni) {
//         console.log(name+" will try another chance next year");
//     }    
// }
// passExam("Alexander", 81);

// passExam("Oksana", 76);

// passExam("Daniel", calcScore(50,50));

// passExam("Anna", 51);

// passExam("Dmitry", 46);

// passExam("Nick Barmin", 33);



// function calcScore (quizScore, essayScore) {
//     const score= quizScore+essayScore; return score;
// }




// Passexam example



// multiply and Divide functions exmmple
// const multiply = function(x,y) {
//     const a = x*y;
//     return a;
// }
// console.log(multiply(10,5));


// OR WRTIE ANOTHER WAY (SHORTER)

// const multiply = (x,y)=> x*y;             
// console.log(multiply(10,5));




// shorter way above const multiply =50



// const divide=function(x,y) {
//     const b=x/y;
//     return b;
// }
// console.log(divide(50,10));


// const sum =(x,y,z) => {
//     const c=x+y+z;
//     return c;
// }
// console.log(sum (100,20,30));




// const minus = (x,y,z) => {
//     const p=x-y-z;
//     return p;
    
// }
// console.log(minus(100,20,35));

// const p=45;
// if (p===45) {
//     console.log("condition is true");
    
// }
// 






// HERE I WILL NOT IDENTIFY ANY VARIABLES AND SIMPLY PUT () SEE ABOVE

// const multiply=() => 11*11;
// console.log(multiply());

// const умножить = () => 15*9;
// console.log(умножить());




// CONST OR let arr =["Ann","Bob", "Joe", 10, true, [1, 2, 3]];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[5][1]);
// Array(6) [ "Ann", "Bob", "Joe", 10, true, (3) […] ]
// ​
// 0: "Ann"
// ​
// 1: "Bob"
// ​
// 2: "Joe"
// ​
// 3: 10
// ​
// 4: true
// ​
// 5: Array(3) [ 1, 2, 3 ]
// ​
// length: 6
// ​
//  HERE AS WE CAN SEE THE INDEX(NUMBER OF ELEMENTS) IS NOT STARTING FROM 0, IN ORDER TO SELECT THE RIGHT ONE BE AWARE THAT IT STARTS FROM 0      SO WE SELECTED 2ND(INDEX1) ELEMENT OF THE 6TH ELEMENT (INDEX5)



// colors example


const colors = ['white','black', 'red'];
colors[1]='green'; 
// here above we changed black to green by replacing it according to indexnumber
colors.push ('blue');
// here above we added one more color to the array FROM THE END by using PUSH command
colors.pop ();
// here above we removed the last element from the array by using POP command
colors.unshift();
// here above we remeved the first element in the array by using SHIFT command
colors.unshift('purple');
// here above we added PURPLE in the begging of the array by using UNSHIFT command 

// even if we unshift white, purple will be still first
console.log(colors.indexOf('red'));

// here above we can see an example of calling out the number of index of the RED ELEMENT through the console. index number = 3 for red color
console.log(colors);


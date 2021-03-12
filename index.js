

//    function name(fnum,lnum,tax=50){
//     console.log(`your total amoubt is ${fnum + lnum + tax }`);
//    }
//    name(50,50)


// const abc = (fname,lname,age) => {
//     console.log(`my name is ${fname} ${lname}. and my age is ${age +4} `);
//     }
//     abc ('waqar','hanifi',20);

//*************************************************************************************************** */

//1-tempeletrial
//-------------


// const abc1 = (fname,mname,lname,age) => {
// console.log(`my name is ${fname} ${mname} ${lname}. And my age is ${age +4}`);
// }
// abc1 ('waqar','ahmad','hanifi',20);

// const abc = (fname,mname,lname,age) => {
//     console.log(`my name is ${fname} ${mname} ${lname}. And my age is ${age +4} `);
//     }
//     abc ('waqar','ahmad','hanifi',20);

//**************************************************************************************************** */

// .map function is used to print same massage with the all the given parameters.

// let a=['waqar','ahmad','hanifi'];
// const i = a.map((fun1) => {console.log(`good morning ${fun1}`)})
//**************************************************************************************************** */


//arow function || reduce the syntex
//-------------

// 

// const abc = greatings => `hello ${greatings}`
// console.log(abc('world'));

//**************************************************************************************************** */

// variables
//=-----------
// let a='abc';
// a='waqar'
// console.log(a);

// const b='xyz';
// b='hanifi'; //will show error due to b is already decleared as const
// console.log(b);

//**************************************************************************************************** */

//defult parameter arrey
//-----------------------

// const abc = (a,b=[]) => {
//     b.push(a)
//     return b;
//         }
//         console.log(abc(20));

//**************************************************************************************************** */

//------------------
//defult parameter 
//------------------

//     const x = (a,c=a) =>{
//         return a+c;
//     }

// console.log(x(10));

//**************************************************************************************************** */

//function as a defult parameter

// const add=(num) =>{
//     return num+1;
// }
// const increment= (sum=add(50)) =>{
//  return sum-10;   
// }
// console.log(increment());

//**************************************************************************************************** */
//**************************************************************************************************** */

// --------------------------------------------------------------
//TASK-1: make a function with 1 parameter and 2 defult parameter 
// --------------------------------------------------------------
function xxx() {
    alert('Inspect to see the answer for this question');
    const x = (qnty, price = 100, tax = 1.8) => {
        console.log(`YOUR TOTAL AMOUNT: ${qnty * price * tax} .`);
        console.log(`NO. QUANTITY :[ ${qnty} ]  .`);
        console.log(`Price per Piece: [ ${price} ] .`);
        console.log(`TAX:  [ ${tax} ] .`);
        console.log('FORMULA TO CALCULATE: x = QUANTITY * PRICE * TAX');
    }
    x(1)
}

// --------------------------------------------------------------
//TASK-2:Make a function using arrow function and arry giveing names and age as output
// --------------------------------------------------------------

function answer1() {

    let a = ['waqar', 'ali', 'hamza', 'ibrahim'], c = [25, 30, 25, 20]
    const i = a.map((b, n) => { console.log(`${n} - my name is ${b}`) })
    const j = c.map((v) => { console.log(`and my age is ${v}`) })
    //const i = a.map((b), c.map((v) => {console.log(`my name is ${b}and ${v} `)}))

}

//**************************************************************************************************** */
  

//objects
//-------

// let name='waqar'
// let age=25
// let city= 'karachi'

// const obj={
//     name,
//     city,
//     age,
//     details:  () => {
//         return `my name is ${name} and i live in ${city} and my age is ${age}`
//     }
// }
// console.log(obj.details());

//**************************************************************************************************** */

//maths function
//--------------
// const maths={
//     add: (a,b) => a+b,
//     sub: (a,b) => a-b,
//     mul: (a,b) => a*b,
//     div: (a,b) => a/b,
// }
// console.log(maths.add(105,10));
// console.log(maths.sub(100,10));
// console.log(maths.mul(10,30));
// console.log(maths.div(10,20));

//**************************************************************************************************** */

// object literials
//-----------------

//1-

// let fname='first';
// let lname = 'name';
// const user1 ={
//     [fname]:'waqar',
//     ['last' + lname ]:'hanifi',
// }
// //user1[fname] = 'waqar'
// console.log(user1.first + ' ' + user1['lastname']);

//2-

// let fname="first";
// let lname="name";
// let age="age";

// const user2 = {
//     [fname]:"waqar",
//     ["last" + lname]:"hanifi",
//     ["age" + age]:25,
// }
// console.log(user2.first + " " + user2['lastname'] + " and my age is " + user2['ageage']);
// console.log(user2.lastname, user2.age); 
//**************************************************************************************************** */

//sets
//----

// const a=[1,2,3,4,5,6,7,8,9,10]
// let num= new Set (a)
// console.log(num.size);

// let name="waqar ahmad hanfi"
// let n= new Set (name)
// console.log(n.size);


// let g= new Set()
// let name3="waqar"
// let age=25
// g.add(name3)
// g.add(age)

// console.log(g.size);

//**************************************************************************************************** */

//spread operator
//--------------


// let a = [1, 2, 3, 4, 5]
// let b = [6, 7, 8, 9, 10]

// let q =[...a,...b]

// console.log(q);


// let w=[4,2,8,9,3]
// const mul = (a,b,c,d,e) =>{
// return a*b*c*d*e
// }
// console.log(mul(...w));

// let f=[1,2,3,4,5]
// let g=[7,8,9,10,11]
// let s=[...f,6,...g,12]
// console.log(s);



// let f=[1,2,3,4,5]
// console.log(Math.max(...f));

// let f = [1, 2, 3, 4, 5]
// let s = [...f, 6]
// s.push(7)

// console.log(s);

// //rest opterator

// let t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let [first, secound, ...all] = t
// console.log(first);
// console.log(secound);
// console.log(all);

// //reduce function

// const m = (...k) => {
// return k.reduce((a,b)=>{return a+b})  

// }
// console.log(m(1,23,5,4,5,2,1,5,9,2,5,8,21,2));



//   const mul = (d,...o) =>{
//     return o.map(e => d*e)
// }
// console.log(mul(10,2));


// const user2 = {
//         name:"waqar",
//         age: 24,
//         edu:"bscs",
//         id:"kreazzy",
//         contact:024526,


//     }
// let {name,age,edu,}=user2
// console.log(`my name is ${name} my age is ${age} and my education is ${edu}`);


// destructring object

// const user2 = {
//     name:"waqar",
//     age: 24,
//     edu:"bscs",
//     id:"kreazzy",
//     contact:024526,
//      address : {        //nested 
//         street:"abc street",
//         city:"karachi"
//      }

// }

// //nested
// let {address:{street:street1,city,zipcode:zip="1235"}}=user2

// console.log(street1,city,zip);




// let {name:fullname,age:fage,id,contry:cname="karachi"}= user2
// console.log(`my name is ${fullname}
//  my ID is ${id} and
//  my age is ${fage}
//  country is ${cname}`);



//array destructring
//before es6 

// let a=["waqar", 25, "pakistan"]
// let fname=a[0]

// console.log(fname);


//after es6


// let a=["waqar", 25, "pakistan", "hanifi"]
//  //let [name,age,contry]= a
// //  console.log(`my name is ${name}
// //  my age is ${age} 
// //  i belong to ${contry}`);

// // let [fname,,,lname ]=a
// // console.log(`full name is ${fname} ${lname}`);

// let [,,contry,,street="abc sterrt" ]=a
// console.log(` ${contry} ${street}`);



// nested array destructring

// let a=["waqar", 25, "hanifi",["rendom","pakistan","74700"]];
//  let [name,,[,contry,zip,state="sindh"]]=a;


// console.log(`my name is ${name} i live in ${contry} my stste is ${state} and my zip code is ${zip}`);


// mix destructring obj

// const person={
//     name:"waqar",
//     age:24,
//     address:{
//         street:"abvjdj",
//         city:"karachi",
//         code:74700,
//     },

//     phone:[123456789,2512345]
// }

// let{
//     name,
//     address:{street:compstr},
//     phone:[first]
// } =person;
// console.log(name,compstr,first);

//swiping  with aray destructring

// let first=10;
// let secound=20;
// [first,secound]=[secound,first]

// console.log(first,secound);


// let arry = [2, 3, 4, 5, 6]
// let [...newarry] = arry
// console.log(newarry);


//destructring with object


// const obj = {
//     username:"waqar",
//     password:"12345",
//     email:"abc@abc.com",
//     address:{
//         city:"karchi",
//         state:"sindh",
//         adres:"house no 123 street no7 "
//     },

//     contact:["033082307818","02136679645"],
// }
//destructring via object

// let{
//     username,
//     password:changepassword="0000",
//     address:{
//         state,
//         city:current_city,
//     },
//  contact:[,secound]
// } =obj;

//console.log(username,changepassword,state,current_city,secound);

//destructring via function

// let person = ({username,password,email}) => {

//     console.log(`your username is ${username} and your password is ${password} and your email is ${email}`);
// } 
// person(obj);

//*********************************************************************/

// //classes
// //------
//  class indvisiual{
//      constructor(name,age){  
//          this.name=name;
//          this.age=age;
//      }
//      detail(){
//          return (`your name is ${this.name} and your age is ${this.age}`);
//      }
//  } 
//  let person = new indvisiual("waqar",25)
// //console.log(person.detail());

//  let person2 = new indvisiual("ali",25)
// console.log(person2.detail());

//pratics

// class cridentials {
//     constructor(username,pass) {
//         this.username = username;
//         this.pass = pass;
//     }
//     detail() {
//         return (`your username is ${this.username} and your password ${this.pass}`);
//     }
// }
// let a= new cridentials("waqar",123)
// console.log(a.detail());

// make a class give it a name give parameter to construstor annd make a function and return it . make a new
//variable and give valuse to it and log the data to created class.....

class information {
    constructor(name,klass,shift){
        this.name=name;
        this.klass=klass;
        this.shift=shift;
    }
    pass(){
        return(`your name is ${this.name} your shift is ${this.shift} and your class is ${this.klass}`);
           }
}


let school= new information("waqar",12,"evening")
console.log(school.pass());


// const person = class{
//     constructor (name,age){
//         this.name=name;
//         this.age=age;
//     }
//     details(){
//         return(``);
//     }
// }

const person = class indvisiual{
    constructor (name,age){
        this.name=name;
        this.age=age;
    }
    details(){
        return(`${name}`);
    }
}


//variable hoisting

























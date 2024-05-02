//function statement aka function declaration
function a(){
    console.log('a called')
}
a()

//function expression
var b = function (){
 console.log('b called')
}
b()

// the diffrence between a function statement and a function expression is hoisting
//anonymous function is just a function without a name
// function (){

// }

//named function expression

var c = function d(){
    console.log('c called')
    // console.log(d)
    // d()
}
c();
// d(); //it will throw an erorr as d() is not defined because d() is  not assigned to the global scope but it can be accessed
// inside the  var c block console it and invoke it otherwise it will run on loop

//firstClass function is nothing but the ability to have functions as values and passing a function as an argument and
// can a return a function this is also known as firstClass citizens

//what is callback function
function x(y){
    console.log('this is x')
    y(z)
}

function y(z){
    console.log('this is y')
    z()
}

function z(){
    console.log('this is z')
}
x(y)

function a2(){
    var b = 10
    c2()
    function c2(){
      console.log(b)
    }
}
a2()

//closure is  a function that is bind together with its lexical environment
// function along with its lexical scope forms a closure 

//callback function
var arr = [1,2,3,4,5]

function callback(arr,callbackFunction){
    arr.push(6)
    callbackFunction()
}

callback(arr, function(){
   console.log('the number has been pushed:',arr)
})

function one(callback1){
    console.log('this is function one')
    callback1(three)
}

function two(callback2){
    console.log('this is function two')
    callback2()
}

function three(){
    console.log('this is function three')
}

one(two)

//reverse string
const string = 'ronaldo'
function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString(string))

fun()
function fun(){
    console.log('A Function')
}

var func = function(){
    console.log('this is a function')
}

 func()

 
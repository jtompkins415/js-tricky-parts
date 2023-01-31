
1. What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

The pitfall in using typeof bar === "object" is that null is an object in JS, so if bar === null, the statement typeof bar === "object" will return true, even if the bar is not an object. To avoid this pitfall also check if bar is null while checking if bar is an object.

2. What will the code below output to the console and why?

(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

The output of the above code would be:

"a defined? false"
"b defined? true"

This happens because the use of the "var" keyword globally scopes the b variable so b becomes a defined variable even outside of the scope of the function, while a is still undefined.

3. What will the code below output to the console and why?

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

The output of the code above will be:

"outer func: this.foo = bar"
"outer func: self.foo = bar"
"inner func: this.foo = undefined"
"inner func: self.foo = bar"

This happens because in the outer function this and self are both scoped to myObject and have access to the foo property. In the inner function, this is no longer scoped to myObject and returns undefined. The self property was defined with the var keyword, therefore it is a global variable that was defined with the value of myObject and has access to the foo property. 

4. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?

The significance of wrapping the entire JS source file in function blocks is to create a immediately invoked function expression. The purpose of the IIFE is to scope something right away and protect the global namespace. 

5. What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?

With "use strict" we can voluntarily enforce stricter code parsing and error handling on our code during runtime. With strict mode enforced, errors that would have normally failed silently and behind the scenes will now generate errors and throw exceptions. Some of the benefits of strict mode are easier debugging and prevention of accidental global scoping. Using strict mode, in general, is good practice.

6. Consider the two functions below. Will they both return the same thing? Why or why not?

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

The two functions will not return the same output, the first function will return the object. The second function will throw an error because there is automatic semicolon insertion after the return keyword since there is nothing else included on that line. This causes the object defined after to be read by JS as a syntax error.

7. What will the code below output? Explain your answer.

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);


The output for this code will be:

0.30000000000000004;
false;

This first console.log is a simple math equation between two floats returning the sum of the two. The second will print out false because Numbers in JS are handled with floating point percision and may not always return expected results.

8. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

The order of execution in the function will be:

1
4
3
2

The execution runs in this order because the way the code is written the console.log of 1 & 4 will be ran first as there is no timer set on it. Then the setTimeout 0 function will run next because the pending console.logs ahead of it with no timer will run and the setTimeout for three has the shortest timer of 0. Finally setTimeout of 1000ms will run after all the pending code is ran and the timer is finished. Even though the timer for 3 is set to 0ms and is coded before 4, the setTimeout puts 3 on a event queue that runs after the console.logs with no timers execute. 

9. Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

function isPalindrome(str){
    str.replace(/\W/g, '').toLowerCase();
    return (str == str.split().reverse().join(''))
};

10. Write a sum method which will work properly when invoked using either syntax below.

function sum(num){
    if (arguments.length === 2){
        return arguments[0] + arguments[1];
    } else {
        return function(num2) {return num + num2};
    }
}


11. Consider the following code snippet:

for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}

(a) What gets logged to the console when the user clicks on “Button 4” and why?

When the user clicks button 4, the value of i will be 5 so 5 will be logged to the console. 

(b) Provide one or more alternate implementations that will work as expected.

The simplest change to make is to change var i to let i. var i scopes the i variable to the global scope so during the runtime of the code within the loop the value of i will be 5. If the var is changed to let, the i variable will be scoped to the loop and run as expected. 

12. Assuming "d" is an “empty” object in scope, say:

var d = {};

…what is accomplished using the following code?

[ 'zebra', 'horse' ].forEach(function(k) {
	d[k] = undefined;
});

The following code uses the array to set keys for the object "d" and those keys are set to the value of undefined. 

13. What will the code below output to the console and why?


var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

The following output will be:

//array 1: length = 4 last = n
//array 2: length = 5 last = ['j', 'o', 'n', 'e', 's']

This is the output because the reverse method not only returns the array in reverse order but it mutates the original array as well. So when defining arr2 as arr1.reverse(), we are assiging the same reference to arr2 as arr1. That means that when we push arr3 onto arr2 we are also pushing onto the same object that arr1 references. 

14. What will the code below output to the console and why ?

console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);

The following output will be:

//"122"
//"32"
//"02"
//"112"
//"NaN2"
//"NaN"

Line 1 output: The first operation is between 1 and "2", because the second operand is a string JavaScript executes the operation as string concatenation which results in 1 + "2" = "12". The second operation is then "12" + "2", another string concatenation takes place, with the final output being "122"

Line 2 output: The first operation is between 1 and +"2", because of the plus sign in front of the second operand Javascript treats it as a unary operator and changes the string of "2" to the numeric value of "2" which results in the first equation resulting to 3. The second operation is then 3 + "2", which just like the first line results in string concatenation vs. simple addition, resulting in the output being "32".

Line 3 output: The first operation is between 1 and -"1", again, because of the negative sign in front of the second operand JS treats it as a unary operator and changes "1" to -1, resulting in the output of the first equation to be 0. The second operation is more string concatenation between 0 and "2" resulting in the output being "02"

Line 4 output: The first operation is between +"1" and "1". +"1" is read as 1 because of the unary operator "+", but because the second operand is "1", string concatenation takes place and the output is "11". The second operation between "11" and "2" is another string concatenation, resulting in the output being "112".

Line 5 output: The first operation between "A" & "B", because of the use of the subtraction operator, results in the output being "NaN". Then simple string concatenation between "NaN" and "2" resulting in the output being "NaN2".

Line 6 output: The first operation between "A" & "B", like the last line outputs to "NaN", and the second operation between the string "NaN" & numeric 2 results in the output being "NaN" because any numeric operand combined with the string "NaN" will result in "NaN".

15. The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};

You can adjust the code by setting a timer on the nextListItem function call. It moves the responsibility of handling the nextListItem function from the call stack to the event stack, therfore avoiding any stack overflow that would result from a larger input. 

16. What is a “closure” in JavaScript? Provide an example.

Closure in JS refers to an inner function being able to access defined variables in an outer function. 

An example of closure:

function idGenerator() {
  let start = 0;
  return function generate() {
    start++;
    return start;
  };
}

"start" is defined in the outer function idGenerator, but the returned inner function generate has access to the "start" variable.

17. What would the following lines of code output to the console?

console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));

The following output will be:

//"0 || 1 = 1"
//"1 || 2 = 1"
//"0 && 1 = 0"
//"1 && 2 = 2"

Line 1 % 2 output: The || operator is the logical operator "or", and the values passed around it are treated as boolean, therefore if the first value evaluates to "false" the entire operation fails and the boolean is returned. In line 1, 0 is falsy and 1 is truthy, which means the operator returns true or in this case 1. In line 2, even though both values are truthy and 2 is a greater value, the || operator is going to return the first truthy value, which is 1. 

Line 3 & 4 output: The && operator is the logical operator "and", the values passed around it are treated as boolean, and both values need to return truthy, otherwise if one value is falsy, the whole operation is returned as false. In line 3, 0 is a falsy value, the entire operation is falsy and 0 is returned. In line 4, both values is are truthy. 

18. What will be the output when the following code is executed? Explain.

console.log(false == '0')
console.log(false === '0')

The following output will be:

//true
//false

Line 1 output: The "==" comparison operator coerces the values into the same type and then runs the operation, which results in the comparison being true. 
Line 2 output: The "===" comparison operator behaves traditionally and looks for both values to have the same type and value without any coersion, leading to the result being false

19. What is the output out of the following code? Explain your answer.

var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);

The following output will be:

//456

The output is 456 because JavaScript implicitly stringifies the parameter value, resulting in both b and c being converted to "[object Object]". Which means a[b] and a[c] are both equivalent to a[object Object] and are used interchangably when defining a value for a[b] or a[c].

20. What will the following code output to the console:

console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));

Explain your answer.

The output of this function will be the value of 10 fractorial because the function calls itself recursively. until it gets down to calling f(1) which simply returns 1.


21. Consider the code snippet below. What will the console output be and why?

(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);

The output of this snippet will be 1 due to closure. Even though x is never set, the inner function still has access to the x variable in the outter function. 

22. What will the following code output to the console and why?

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

The output will be:

//undefined
//John Doe

We get this ouput because stoleSecretIdentity is being invoked in the global scope where _name has not been defined. To fix this issue we bind(hero) to the value of stoleSecretIdentity:

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);



23. Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.

The arguments to the function should be:

a DOM element
a callback function (that takes a DOM element as its argument)

const visitDescendents = (elem, callback) => {
    callback(elem);
    let list = elem.children;
    for(let i = 0; i < list.length; i++){
        visitDescendents(list[i], callback);
    };
};

24. Testing your this knowledge in JavaScript: What is the output of the following code?

var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);

The output of this code will be:

//10
//2

25. Consider the following code. What will the output be, and why?

(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();

The output of this code will be:

//1
//Undefined
//2

We get this output because the use of 'var' to define variables hoists the variables to the top of the scope. So we get a variable of x w/o it's value initialized as well as a y variable. However the error's identifier is only visible inside the catch block, which leads to us having a inner x scoped differently than the outer x. 


26. What will be the output of this code?

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

The output of this code will be:

//undefined

We get this output because even though we have defined values for x the value of x in the function isn't initialized when it's logged to the console. So when the function is called the order that it is executed leads to an undefined x value. 

27. What will this code print?

for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}

This code will print 0 1 2 3 4, because we use let instead of var here. The variable i is only seen in the for loop’s block scope.

28. What do the following lines output, and why?

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

The output of this code will be:

//true
//false

We get true for the first one because '1 < 2' returns 'true', 'true' has the value of 1, which leads to '1 < 3' which again returns 'true'. For the second line we get 'false' because '3 > 2' returns 'true' and then we compare '1 > 1' which returns 'false'

29. How do you add an element at the begining of an array? How do you add one at the end?

You add an element to the beginning of an array using the ".unshift()" method. To add on an element to the end of an array we use the ".push()" method. We also have the option of using the spread operator to add an element to both the beginning and the end. All we do is is define our array with the new element either at the beginning or the end and then use the spread operator on the rest of the elements in the array:

myArray = ['newElem', ...myArray]

or

myArray = [...myArray, 'newElem']

30. Imagine you have this code:

var a = [1, 2, 3];

a) Will this result in a crash?

a[10] = 99;

b) What will this output?

console.log(a[6]);

a) There won't be a crash, instead the array will be filled in with empty slots till we reach the index of 10 which has the value of 99

b) The output of the code will be:

//undefined

31. What is the value of "typeof undefined == typeof NULL" ?

The value of this will be true because we are treating NULL as an undefined variable, JS is case sensitve so null is different from NULL

32. What would following code return?

console.log(typeof typeof 1);

The output of this code will be: 

//string 

We get this output because typeof 1 returns "number" and typeof "number" returns string

33. What will be the output of the following code:

for (var i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}

The output of the code will be:

5
5
5
5
5


We get this output because the function inside the loop will run after the loop so the value of i will always be 5, if we used closure to fix this problem our code would look like:

for (var i = 0; i < 5; i++) {
    (function(x){
	setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}

The output for this code will be:

0
1
2
3
4

We could also fix our issue by simply changing var to let using ES2015 context

34. What is NaN? What is its type? How can you reliably test if a value is equal to NaN?

NaN represents a numeric value that is "Not a Number". To reliably test if a value is equal to NaN we can use the Number.isNaN() method.

35. What will the following code output and why?

var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();

The output of the following code will be:

//3

There are three different closures in this example, each with their own var b. The inner most closure defines b as 3 so that is what we get as our output. 

36.  The simplest and cleanest pre-ECMAScript-6 solution (which is also sufficiently robust to return false even if a non-numeric value such as a string or null is passed to the function) would be the following use of the bitwise XOR operator:

function isInteger(x) { return (x ^ 0) === x; } 

The following solution would also work, although not as elegant as the one above:

function isInteger(x) { return (typeof x === 'number') && (x % 1 === 0); }

37. How do you clone an object?

var obj = {a: 1 ,b: 2}
var objclone = Object.assign({},obj);

Now the value of objclone is {a: 1 ,b: 2} but points to a different object than obj.
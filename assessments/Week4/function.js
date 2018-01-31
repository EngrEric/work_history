/**
  In this assessment, you will be creating new Javascript functions.
  Make sure to read the directions to build the functions carefully.
  You should use the below patterns to write your functions:
  ```
  function {{name_of_function}} {
    // Write your code here
  }

  OR

  const {{name_of_function}} = () => {
    // Write your code here
  }

  ```
*/

// 1. write a function that takes a number as a parameter and returns it as a
// string

function convertToString(n){
  return n.toString();
}


// 2. write a function that takes a number as a parameter and returns that
// number subtracted by 1
function subtractOneFromNumber(x){
  return --x;
}

// 3. write a function that takes a number as a parameter and returns that
// number added by 1
function addOneFromNumber(x){
  return ++x;
}

// 4. write a function that takes two number as its parameters and returns the
// addition of those two numbers
function addTwoNumbers(x,y){
  x = Number(x); y = Number(y);
  z = x+y;
  return z;
}

// 5. write a function that takes a number as its parameter and returns the
// squared of that number
function sqrNum(num){
  z=num**2
  return z;
}

// 6. write a function that takes a number and returns true if the number is odd
// and false if it is not
function isOdd(num){
  if(num%2>0){
    return true;
  }else{
    return false;
  }
}


// 7. write a function that takes two strings as its parameters and returns the
// combination of those two strings
function combineTwoStrings(one,two){
  one.toString(); two.toString();
return one.concat(two);
}



// 8. write a function that takes the radius of a circle as parameter and returns
// the Area of the circle.
// For this exercise π (pie) can equal `3.14`
function AreaOfCircle(radius){
  let Area = 3.14*(radius**2);
  return Area;
}

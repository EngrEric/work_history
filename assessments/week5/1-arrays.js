/**
  In this assessment, you will use your knowledge of javascript arrays
  to complete the functions below.

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

// 1. write a function that takes an array as its first parameter and returns
// the first item in the array
function returnsFirstItemOfArray(array1) {
return array1[0];
}



// 2. write a function that takes an array as its first parameter and returns
// the last item in the array
function returnsLastItemOfArray(array2) {
  return array2[array2.length - 1];
}





// 3. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// beginning of the array.
function addsNewValueAtBeginingOfArray(array3,value){
  array3.unshift(value);
  return array3;
}


// 4. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// end of the array.
function addsNewValueAtEndOfArray(array4,value){
  array4.push(value);
  return array4;
}


// 5. write a function that takes an array as its first parameter, a value as
// its second parameter and an index as the third parameter. The function returns
// a new array where the value can be found at that given index.
function addValueToArrayAtGivenIndex(array5,value,index) {
  array5[index]=value;
 return array5;}

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
function team1(array1) {
  array1 = ['ball','player','kaka'];
return array1[0];
}



// 2. write a function that takes an array as its first parameter and returns
// the last item in the array
function team2(array2) {
  array2 = ['ball','player','kaka'];
  return array2[array2.length - 1];
}





// 3. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// beginning of the array.
function team3(array3,newArray){
  newArray = 'footballer';
  array3 =  ['ball','player','kaka'];
  array.unshift(newArray);
  return array3;
}


// 4. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// end of the array.
function team4(array4,newArray){
  newArray = 'footballer';
  array4 =  ['ball','player','kaka'];
  array.push(newArray);
  return array4;
}


// 5. write a function that takes an array as its first parameter, a value as
// its second parameter and an index as the third parameter. The function returns
// a new array where the value can be found at that given index.
function team5(array5,value5,index) {
array5=['ball','player','kaka'];
array5[3]='footballer';
 return array5;}
//array5.push('footballer');
//index = array5.indexOf('footballer')
  //return console.log(index);

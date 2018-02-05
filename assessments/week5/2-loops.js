/**
  In this assessment, you will use your knowledge of javascript loops
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
// 1. write a function that takes an array as its first parameter and console logs
// every item in the array
const LoopThatLogsEveryItemOfArray = function(week){
  week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  for(let initialValue=0; initialValue<week.length; initialValue++){
    console.log(week[initialValue]);
  }
}


// 2. write a function that takes an array as its first parameter and console logs
// every item with an odd index
const ArrayIndexIsOdd= function(week){
  week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  for(let initialValue=0; initialValue<week.length; initialValue++){
    let  indexOfEachWeek = week[initialValue].length%2;
    if (indexOfEachWeek===1) {
        console.log(week[initialValue]);
            }
      }
}
ArrayIndexIsOdd();



// 3. write a function that takes an array as its first parameter and console logs
// every item with an even index
const ArrayIndexIsEven = function(week){
  week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  for(let initialValue=0; initialValue<week.length; initialValue++){
    let  indexOfEachWeek = week[initialValue].length%2;
    if (indexOfEachWeek===0) {
        console.log(week[initialValue]);
            }
      }
}
ArrayIndexIsEven();



// 4. write a function that takes an array as its first parameter and a searchValue as
// its second parameter. The function returns true if the searchValue is in the array
// and false if it is not
const isSearchValueInArray = function(arr,searchValue) {
  return arr.includes(searchValue);
}



// 5. write a function that takes an array as its first parameter, and a replaceValue as
// its second parameter. The function returns a new array where all the values in the
// array have been overwritten by the replaceValue.

const overWriteArray = function(arr, replaceValue) {
			return arr.map(function(){ return replaceValue; });
		}



// 6. write a function that takes an array as its first parameter, a searchValue as
// its second parameter and a replaceValue as the third parameter. The function returns
// a new array where only the searchValue has been overwritten by the replaceValue.


function searchAndReplace (array, searchValue, replaceValue) {
let result = [];
for(let i=0; i<array.length; i++){
  if(array[i]===searchValue){
    result.push(replaceValue);
  }else{result.push(array[i]);}
}
return result;
}

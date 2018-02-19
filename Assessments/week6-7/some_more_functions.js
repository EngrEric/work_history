/**
  Its important that you keep practicing creating functions. Here are some more
  that you will need to implement

  ```
  function {{name_of_function}} {
    // Write your code here
  }

  OR

  const {{name_of_function}} = () => {
    // Write your code here
  }

*/

// 1. write a function that takes a string as its first parameter. This function
// counts the number of vowels in the string and returns that number.
// EX1:
  // sample input: "Hello World"
  // sample output: 3
  function countNumberOfVowels(myVowels){
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    for(i=0; i<myVowels.length; i++){

        for(j=0; j<vowels.length; j++){
            if(vowels[j]===myVowels[i]){
                vowelCount++;
            }
        }
    }
return vowelCount;
}
console.log(countNumberOfVowels("I am loving this programing gradually"));


// 2. write a function that takes a string as it first parameter. This function
// return a new string with the first 3 letters lower-cased. If the string is less
// than 3 letters long, this function will return the new string with all letters
// upper-cased.
// EX1:
  // sample input: "HELLO"
  // sample output: "helLO"
// EX2:
  // sample input: "he"
  // sample output: "HE"
  function lowersTheCaseOf1stThreeLetters(myString) {
  if(myString.length>3){
   let theThreeLetters = myString.substring(0,3);
   return theThreeLetters.toLowerCase()+myString.substring(3);
      }
  if(myString.length<3){
    return  myString.toUpperCase()
  }
}


// 3. write a function that takes a string as it first parameter. This function
// returns the first half of the string if the string is even length. Otherwise,
// it will return null;
// EX1:
  // sample input: "HelloWorld"
  // sample output: "Hello"
// EX2:
  // sample input: "Hello World"
  // sample output: null
  function isEvenReturnHalfStringElseNull(mystring){
    let stringLength = mystring.length;
      if(stringLength%2===0){
          let halfString = stringLength /2
          return mystring.substring(0, halfString);
      }

          return null;

  }


// 4. write a function that takes an array of numbers as its first parameter.
// This function returns the sum of the numbers in the array
// EX:
  // sample input: [1, 7, 1, 4, 1, 6, 4, 5]
  // sample output: 29
  function sumOfArrayNumber(arrNum){
    let adder=(accumalator, currentValue)=> accumalator+currentValue;
  return arrNum.reduce(adder);
  }


// 5. write a function that takes an array of numbers as its first parameter.
// This function returns the number that is the most frequent in the array
// EX:
  // sample input: [1, 7, 1, 4, 1, 6, 4, 5]
  // sample output: 1

  function findMostFrequentItem(array) {
  const FREQUENCY_COUNT_STORE = {};

  array.forEach(item => {
    if (FREQUENCY_COUNT_STORE[item]) {
      FREQUENCY_COUNT_STORE[item]++;
    } else {
      FREQUENCY_COUNT_STORE[item] = 1;
    }
  })

  let maxFrequencyCount = 0;
  let mostFrequentItem = null;

  Object
    .entries(FREQUENCY_COUNT_STORE)
    .forEach(entry => {
      let item = entry[0];
      let count = entry[1];

      if (maxFrequencyCount < count) {
        maxFrequencyCount = count;
        mostFrequentItem = item;
      }

    })

    return mostFrequentItem;
}

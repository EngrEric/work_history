let input = 'Turpentine and turtles';
let vowels =['i', 'e', 'o', 'a', 'u'];
let resultArray=[];
for(let inputIndex =0; inputIndex<input.length; inputIndex++){
     for(let vowelsIndex=0; vowelsIndex<vowels.length; vowelsIndex++){
       if(inputIndex===vowelsIndex){
         resultArray.push(input[inputIndex]);
       }
 
    }
if(input[inputIndex]==='e'){
  resultArray.push(input[inputIndex]);}
  if(input[inputIndex]==='u'){
  resultArray.push(input[inputIndex]);
}
}
function result () {
  return resultArray.join('').toUpperCase();
}
console.log(result());
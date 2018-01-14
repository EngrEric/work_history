let userName = 'eric';
userName ? console.log(`Hello, ${userName}`) : console.log('Hello');

let userQuestion = 'Will I become a werewolf tonight?';

const randomNumber = Math.floor(Math.random()*8);
let eightBall = randomNumber;
switch(eightBall){
  case 0 :
    console.log('It is certain');
    break;
  case 1 :
    console.log('It is decidedly so');
    break;
  case 2 :
    console.log('Reply hazy try again');
    break;
  case 3 :
    console.log('Cannot predict now');
    break;
  case 4 :
    console.log("Don't count on it");
    break;
  case 5 :
    console.log("My sources say no");
    break;   
  case 6 :
    console.log("Outlook not so good");
    break;
  case 7 :
    console.log("Signs point to yes");
    break;
  default :
    console.log("error");
    break;

                }
console.log(userQuestion, userName);
console.log(eightBall);
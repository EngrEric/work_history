const menu = {
  
  _courses: {
    _appetizers:[], 
    _mains:[],
    _desserts:[],
   
 /*     get appetizers(){
  return this._appetizers;
},


get mains(){
  return this._mains;
},
 

get desserts(){
  return this._desserts;
},*/
    
},
  
  
get courses(){
  return{
    appetizers: this._appetizers,
    mains: this._mains,
    desserts: this._desserts,
  }
},
  
  
addDishToCourse(courseName,dishName,dishPrice){
const dish= {
   
    name:courseName,
   price:dishPrice,};
  
    this._courses[courseName].push(dish); 
},
  
getRandomDishFromCourse(courseName){
 const  dishes =this._courses[courseName];
  randomIndex=Math.floor(Math.random()*dishes.length);
  return dishes.randomIndex;
},
generateRandomMeal: function(){
  const appetizer =this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts')
   return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} The price is $${totalPrice}.`;
}
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
const meal =menu.generateRandomMeal();
console.log(meal);
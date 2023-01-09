
//Задание 5.
const powerFunction = (a, b) => {
    let result= 0 ;
if ( a > 0 && b > 0 && Math.floor(a) == a && Math.floor(b) == b){
   result = Math.pow(a,b);  
} else {
  result = NaN;
}
   return result;
};

console.log(powerFunction(2,3))  ;
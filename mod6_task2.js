//Задание 2.
/*

определения:
простое число это натуральное число >1
натуральное число это целое положительное число
0 - не натуральное число

*/


let x=0;

function checkSimple(val){
  
  let result="число простое";

  if (val > 1000 || val < 2 || Math.round(val) != val) {
     result = "число должно быть целым в интервале 2-1000"
  } else{
    
    for (let i = 2; i < val; i++){
      if ( val % i === 0 ) {
        result = "число не является простым " ;
        break;     
      }
    }    
  }

  return result;
 }

console.log(checkSimple(x));


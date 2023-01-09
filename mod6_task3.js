//Задание 3.
/*

*/

function funcOut (a) {
    return function funcInn (b) { return a + b ; };
  }
  
  console.log( funcOut (5)(6) );
  

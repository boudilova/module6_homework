  
//Задание 4.
  function printEverySec(a, b){
    let current = a;
    let timerId = setInterval(function(){
                if (current == b){
                  clearInterval(timerId);
                }
      console.log(current);
      current++;
                },1000,a,b)
  }
  printEverySec(5,7);
 
  /*
  сделала по описанию.
  сама не догадалась:(
     */

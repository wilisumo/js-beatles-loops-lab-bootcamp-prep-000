function theBeatlesPlay(musicians,instruments){
  var array = [];
  
  for(var i=0;i< musicians.length ; i++){
    var cadena = musicians[i] + " plays " + instruments[i]; 
    array.push(cadena);
  }
  return array;
}

function johnLennonFacts(facts){
  var contador = (facts.length) - 1 ;
  console.log('contador ' + contador);
  var array = [];
  
  while(contador => 0) {
    var cadena = facts[contador] + "!!!";
    console.log('cadena' + cadena);
    array[contador] = cadena;
    contador--;
  }
  return array;
}

function iLoveTheBeatles(number){
  
  var array = [];
  
  do{
    
    array[contador] = "I love the Beatles!";
    
    number++;
  }while(number < 15);
   return array;
}
function theBeatlesPlay(musicians,instruments){
  var array = [];
  
  for(var i=0;i< musicians.length ; i++){
    var cadena = musicians[i] + " plays " + instruments[i]; 
    array.push(cadena);
  }
  return array;
}

function johnLennonFacts(facts){
  var contador = facts.length;
  
  while(contador > 0) {
    facts[contador] = facts[contador] + "!!!";
    --contador;
  }
  return facts;
}

function iLoveTheBeatles(number){
  
  var array = [];
  
  do{
    
    array[contador] = "I love the Beatles!";
    
    number++;
  }while(number < 15);
   return array;
}
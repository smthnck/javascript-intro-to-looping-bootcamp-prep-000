
var forLoop = function(arr){
  for (var i=0;i<25;i++){
    if(i===1){
      arr.push('I am 1 strange loop.')
    } else {
      arr.push(`I am ${i} strange loops.`)
    }
  }
  return arr
}

var whileLoop = function(a){
  while (a>0){
    a=a-1
    console.log(a);
      }
  return 'done'
}



var i = 0;
function incrementVariable(){
  i = i+1;
}

var doWhileLoop = function(arr){
  do {
    arr.splice(0,1);
    incrementVariable();
  }
  while (arr.length > 0 && incrementVariable())
  return arr
}


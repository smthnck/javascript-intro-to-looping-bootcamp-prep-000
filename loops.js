
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
  while (a>=0){
    console.log(a);
    if (a>=1){
      a= a-1
      } else {
        return 'done'
      }
  }
}

var i = 0;
function incrementVariable(){
  i = i+1;
}

var doWhileLoop = function(arr){
  do {
    console.log(arr)
    arr.splice(0,1)
  }
  while (arr.length > 0 && incrementVariable){
    return arr
  }
}
const apply = (count, f, arg) => {
  let result = f(arg);
  if (count === 0) {
    return arg;
  };
  let i = 1;
  for (i; i < count; i++) {
    result = f(result);
  }
  return result
}
console.log(apply(2, Math.sqrt, 81));   // 3
console.log(apply(5, v => v + 10, 3));  // 53
 
console.log('*****************************************************');




const apply = (num, func, res) => {
  return (num === 0) ? res : apply (num-1, func, func(res));
} 
 
//apply(1,2,3);
 
apply(2,x => x*x,2)




// 

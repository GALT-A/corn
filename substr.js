const str = 'abba';
const getLength = str => str.length;
 
const substr = (str , start = 0, end = getLength(str)) => {
  if (end<0){
    end = start+1;
  }
  
  if (start < 0 ) {
    start = 0;
  }
  
  if (end > getLength(str) ) {
    end = getLength(str)-start;
    //console.log(end);
  }
  
  let result = '';
  for (start; start<end; start++){
    result += str[start];
    //console.log(start,end);
  }
  return result;
};
 
substr(str,0,1);


export default substr;

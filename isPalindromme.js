const length = str => str.length; // задаём длину строки
const substr = (str, start, size) => str.substr(start, size); // возыращвем подстроку
const isPalindrome = (string) => {
  if (length(string) <= 1) {
    return true;                    // если строка меньше 2 символов, то true
  }
  const firstSymbol = string[0];     // первый символ
  const lastSymbol = string[length(string) - 1];   // последний символ
 
  if (firstSymbol !== lastSymbol) {    // первый и последний символы одинаковые, то ок
    return false;
  }
 
  const stringWithoutFirstAndLastSymbols = substr(string, 1, length(string) - 2);
 
  return isPalindrome(stringWithoutFirstAndLastSymbols);
};
isPalindrome('radar');


export default isPalindrome;

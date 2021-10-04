 //1
 const getMaxDigit = (number) => {
    const numberArr = number.toString().split('').map(Number);
    return Math.max(...numberArr);
 };


 //2
 function getNumberPower(number, power) {
    let result = number;
    for (i = 1; i < power; i++) {
      result *= number;
    }
    return result;
  };


 //3
 const getFirstLetterBig = (word) => word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  

 //4
 const sumSalary = (salary) => (salary * 0.805);


 //5
 const getRandomNumber = (n, m) => {
  return Math.floor(n + Math.random() *(m - n + 1) );
 };


 //6
 const countLetter = (word, letter) => {
    let result = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i].toLowerCase() === letter.toLowerCase()) {
        result++;
      }
    }
    return result;
 };


 //7
 const convertCurrency = (money) => {
    let value = money.toLowerCase();
    if(value.includes('$')) {
      return parseInt(value) * 26.5 + 'грн'
    } 
      else if(value.includes('uah')) {
      return parseInt(value) / 26.5 + '$'
    } 
      else {
      return 'Конвертуються лише долари та гривні'
    }
 };


 //8
 const getRandomPassword = (lengthPassword = 8) => {
    let randomPassword = "";
    for (i = 0; i < lengthPassword; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      randomPassword += randomNumber;
    }
    return randomPassword;
 };


 //9
 const deleteLetter = (deleteLetter, sentence) => {
    let stringSentence = sentence.split(deleteLetter);
    for (let i = 0; i < stringSentence.length; i++) {
        stringSentence[i] = stringSentence[i].replace(deleteLetter, '');
    }
    let stringWithoutDeletedLetter = stringSentence.join("");
    return stringWithoutDeletedLetter;
 };


 //10
 const isPalyndrom = (palyndromWord) => {
    if (palyndromWord === palyndromWord.split('').reverse().join('')) {
      return true;
    } else {
      return false;
    }
  };


  //11
  
 document.writeln(`
 Функція №1: ${getMaxDigit(1258632459)};<br>
 Функція №2: ${getNumberPower(3, 10)};<br>
 Функція №3: ${getFirstLetterBig('cUrsOr')};<br>
 Функція №4: ${sumSalary(1000)};<br>
 Функція №5: ${getRandomNumber(1, 100)};<br>
 Функція №6: ${countLetter('baraban', 'a')};<br>
 Функція №7: ${convertCurrency('2650UAH')};<br>
 Функція №8: ${getRandomPassword()};<br>
 Функція №9: ${deleteLetter('a' , 'blablalbalba')};<br>
 Функція №10: ${isPalyndrom('мадам')}<br>
 `);

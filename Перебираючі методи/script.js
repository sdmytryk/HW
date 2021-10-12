//1
const getRandomArray = (length, min, max) => {
  const randomArray = [];

  for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min) + min);
      randomArray.push(randomNumber);
  }

  return randomArray;
};


//3
const getAverages = (...numbers) => {
  const arrIntegers = numbers.filter(number => Number.isInteger(number));
  const sumNumbers = arrIntegers.reduce((sum, current) => sum + current);

  const arrAverage = +(sumNumbers / arrIntegers.length).toFixed(2);

  return arrAverage;
};


//4
const getMedian = (...numbers) => {
  const sortNumbers = numbers.filter((number) => Number.isInteger(number)).sort((a, b) => a - b);
  const number = numbers.length / 2;

  if (numbers.length % 2 === 0) {
    return (sortNumbers[number - 1] + sortNumbers[number]) / 2;
  }

  return sortNumbers[Math.floor(number)];
};

//5
const filterEvenNumbers = (...numbers) => numbers.filter(number => number % 2);


//6
const countPositiveNumbers = (...numbers) => numbers.filter(number => number > 0).length;


//7
const getDividedByFive = (...numbers) => numbers.filter(number => number % 5 === 0);


document.writeln(`
 Функція №1: ${getRandomArray(15, 1, 100)};<br>
 Функція №3: ${getAverages(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)};<br>
 Функція №4: ${getMedian(1, 2, 3, 4)};<br>
 Функція №5: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)};<br>
 Функція №6: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)};<br>
 Функція №7: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}<br>
 `);

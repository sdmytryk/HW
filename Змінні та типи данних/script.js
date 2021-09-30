const peachPrice = 15.678;
const cherryPrice = 123.965;
const plumPrice = 90.2345;
const money = 500;

const maxPrice = Math.max(peachPrice, cherryPrice, plumPrice);
const minPrice = Math.min(peachPrice, cherryPrice, plumPrice);
const sumPrice = peachPrice + cherryPrice + plumPrice; 

const floorSumPrice = Math.floor(peachPrice) + Math.floor(cherryPrice) + Math.floor(plumPrice);
const roundedToHundreds = Math.round(floorSumPrice / 100) * 100;

const oddOrEven = floorSumPrice % 2;

const restSum = money - sumPrice;

const averageSum = +(sumPrice / 3).toFixed(2);

const randomDiscount = Math.floor(Math.random() * 101) / 100;
const paymentSum = +(sumPrice - sumPrice * randomDiscount).toFixed(2);
const profit = Math.trunc(sumPrice) / 2 - Math.round(sumPrice * randomDiscount);

console.log(`
Максимальна вартість: ${maxPrice}
Мінімальна вартість: ${minPrice}
Вартість всіх товарів: ${sumPrice}
Округлена вартість всіх товарів: ${floorSumPrice}
Cума округлена до сотень: ${roundedToHundreds}
Чи парне число: ${OddOrEven === 0}
Сума решти: ${restSum}
Cередня ціна: ${averageSum}
Сума оплати: ${paymentSum}
Прибуток: ${profit}
`); 

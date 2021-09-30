let n;
let m;
let result;

do{
    n=parseInt(prompt("Enter N: "))
} while (Number.isNaN(n));
console.log(`N is: ${n}`);

do{
    m=parseInt(prompt("Enter M: "))
} while (Number.isNaN(m && m > n));
console.log(`M is: ${m}`);

const skipEvenNumbers = confirm("Skip even numbers?");
console.log(`Skip even numbers: ${skipEvenNumbers}`);

result = 0;
for(let i = n; i <= m; i++){
    if (skipEvenNumbers && i%2===0){
        continue;
    }
    result += i ;
}

console.log(`Result: ${result}`);
alert (`Result: ${result}`);
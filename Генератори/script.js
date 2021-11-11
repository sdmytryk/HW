function* createIdGenerator() {
  let i = 1;
  while (true) {
    yield i++;
  }
}


const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);


//Advanced
function* newFontGenerator(font){
  while(true){
      const i = yield font;
      if(i === "up"){
          font += 2;
      } 
      else if(i === "down"){
          font -= 2;
      }
  } 
}

const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);
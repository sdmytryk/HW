const wrapher = document.createElement('div');
wrapher.className = 'container';
document.body.append(wrapher);


const generateBlocks = () => {
  for (let i = 0; i < 25; i++) {
    const square = document.createElement('div');
    square.classList.add('box');
    square.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    wrapher.append(square);
  }
}


const generateBlocksInterval = () => {
  setInterval(()=> {
    wrapher.innerHTML = '' 
      generateBlocks()
  },1000)
}


generateBlocks();
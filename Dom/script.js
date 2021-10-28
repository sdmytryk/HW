const wrapher = document.createElement('div');
wrapher.className = 'container';
document.body.append(wrapher);


const generateBlocks = () => {
  for (let i = 0; i < 25; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8);
    wrapher.append(box);
  }
}


const generateBlocksInterval = () => {
  setInterval(()=> {
    wrapher.innerHTML = '' 
      generateBlocks()
  },1000)
}


generateBlocks();
function getRandomChinese(length) {
    let res = '';
    let i = 0;
    
    return new Promise((resolve) => {
        while (i < length) {
            setTimeout(() => {
                const sign = Date.now() % 100000;
                res += String.fromCharCode(sign);
                if (res.length === length) {
                    resolve(res);
                }
            }, i * 50);
        i++
        };
    })
  }


  getRandomChinese(4).then((result) => console.log(result));
  
function getSumm (a, b) {
    let i = a;
    let timer = setInterval(function(){
      console.log(i);
      if (i === b) {
        clearInterval(timer);
      } 
      i++
    }, 1000);
  }
  getSumm (5, 15);
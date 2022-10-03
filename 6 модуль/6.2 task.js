const arr = [1, 2, 3, 4, 6, 10, 15, 0, null];
function oddAndEven () {
  let even = 0;
  let odd = 0;
  let count = 0;
  let notNumber = 0;
  for(i = 0; i < arr.length; i++) {
    if(arr[i]%2==0 && typeof arr[i]=="number") {
      even++;
    }
  }
  console.log(`Количество четных чисел: ${even}`)

  for(i = 0; i < arr.length; i++) {
    if(arr[i]%2!==0) {
      odd++;
    }
  }
  console.log(`Количество нечетных чисел: ${odd}`)

  for(i = 0; i < arr.length; i++) {
    if(arr[i]===0) {
      count++;
    }
  }
  console.log(`Количество нулей в массиве: ${count}`)

  for(i = 0; i < arr.length; i++) {
    if(typeof arr[i]!=="number") {
      notNumber++;
    }
  }
  console.log(`Количество содержимого в массиве, не являющимся числами: ${notNumber}`)
}

oddAndEven ();
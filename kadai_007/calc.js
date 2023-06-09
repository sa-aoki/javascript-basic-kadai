// 最小値「1」と最大値から最小値を引いた「100」を使う
let num = Math.floor( Math.random() * 100) + 1;

console.log(num)

// 3と5の倍数のとき
if (num % 3 == 0 && num % 5 ==0) {
  console.log('3と5の倍数です')  
}

// 3の倍数のとき
else if (num % 3 == 0) {
  console.log('3の倍数です')
}

// 5の倍数のとき
else if (num % 5 == 0) {
  console.log('5の倍数です')
}

// それ以外のとき
else 
  console.log(num)


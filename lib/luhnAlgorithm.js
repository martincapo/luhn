function luhnAlgorithm(num) {
  let accountNum = num.toString().split('');
  let lastDigit = parseInt(accountNum.pop());
  let doubleNums = accountNum.slice().reverse();
  let sumDigits = 0;
  let checkDigit = 0;

  for(var i = 0; i < doubleNums.length; i++) {
    if(i % 2 === 0) {
      let newNum = doubleNums[i] * 2;
      if(newNum > 9) {
        newNum = newNum - 9;
      }
      doubleNums[i] = newNum;
    }
  }

  sumDigits = doubleNums.reduce(function(sum, current){
                      return sum + parseInt(current);
                    });

  checkDigit = (10 - parseInt(sumDigits.toString().slice(-1))) % 10;

  return (lastDigit === checkDigit);
}

module.exports = luhnAlgorithm;

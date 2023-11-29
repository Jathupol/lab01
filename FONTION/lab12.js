function max() {
    if (arguments.length === 0) {
      return NaN;
    }
  
    let maxNum = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== 'number') {
        return NaN;
      }
      if (arguments[i] > maxNum) {
        maxNum = arguments[i];
      }
    }
    return maxNum;
  }
  
  console.log(max()); // NaN
  console.log(max(2)); // 2
  console.log(max(3, 1)); // 3
  console.log(max(7, 3, 9, 2)); // 9
  
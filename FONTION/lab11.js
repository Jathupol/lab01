//ใช้ if แต่ไม่ใช้ else
function checkAgeIf(age) {
    if (age > 18) {
      return true;
    }
    return console.log('Did parents allow you?');
  }
//ใช้ ? แทน if
function checkAgeTernary(age) {
    return age > 18 ? true : console.log('Did parents allow you?');
  }

//ใช้ || แทน if
 function checkAgeOr(age) {
    return age > 18 || console.log('Did parents allow you?');
  }
  
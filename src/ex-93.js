// 사용자에게 숫자 다섯 개를 입력하라고 요청한다.
// 입력된 숫자를 정렬하고 사용자에게 표시한다.
// 배열의 숫자들 중 하나를 고르라고 사용자에게 요청한다.
// 입력된 숫자를 배열에서 삭제하고 새로운 배열에 그 값을 저장하라.
import { question } from 'readline-sync';

const com1 = [];
let whilenum = 0;
while (whilenum < 5) {
  const usernum = question('숫자를 입력하세요.');
  if (usernum !== '' && Number.isNaN(Number(usernum)) === false) {
    com1.push(Number(usernum));
    whilenum += 1;
  } else {
    console.log('숫자가 아닙니다.');
  }
}

// 숫자 배열정렬 한다.
com1.sort(function (a, b) {
  return a - b;
});

console.log(com1);

const delnum = question('배열의 숫자들중 하나를 입력하세요.');
if (
  delnum !== '' &&
  Number.isNaN(Number(delnum)) === false &&
  com1.includes(Number(delnum))
) {
  const com2 = com1.splice(com1.indexOf(Number(delnum)), 1);
  console.log(com1);
  console.log(com2);
} else {
  console.log('배열의 숫자들중 하나가 아닙니다.');
}

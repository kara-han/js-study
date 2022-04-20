// 다섯 개의 정수를 입력받아 배열에 저장한다. 정렬을 한 후 역순으로 표시하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
import { question } from 'readline-sync';

const anum = [];
let whilenum = 0;
while (whilenum < 5) {
  const usernum = question('정수를 입력하세요.');
  if (
    usernum !== '' &&
    Number.isNaN(Number(usernum)) === false &&
    Number.isInteger(Number(usernum))
  ) {
    anum.push(Number(usernum));
    whilenum += 1;
  } else {
    console.log('정수가 아닙니다.');
  }
}

// 숫자 배열정렬 한다.
anum.sort(function (a, b) {
  return a - b;
});
anum.reverse(); // 역순으로
console.log(anum);

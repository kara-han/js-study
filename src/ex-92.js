// 두 개의 빈 배열을 생성한다. 하나에는 사용자가 입력할 숫자 세 개를 담을 것이고, 다른 하나에는 다섯 개의 임의의 숫자를 담을 것이다.
// 두 개의 배열을 큰 배열 하나로 결합한다.
// 결합한 배열을 정렬하고 각 항목을 한 줄에 하나씩 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
import { question } from 'readline-sync';

const com1 = [];
const com2 = [];
let whilenum = 0;
while (whilenum < 3) {
  const usernum = question('숫자를 입력하세요.');
  if (usernum !== '' && Number.isNaN(Number(usernum)) === false) {
    com1.push(Number(usernum));
    whilenum += 1;
  } else {
    console.log('숫자가 아닙니다.');
  }
}

for (let i = 0; i < 5; i++) {
  const randomnum = Math.floor(Math.random() * 100) + 1; // 1~ 100랜덤수
  com2.push(randomnum);
}

const com3 = com1.concat(com2);
// 숫자 배열정렬 한다.
com3.sort(function (a, b) {
  return a - b;
});

console.log(com3);
for (const element of com3) {
  console.log(element);
}

/*
// foreach보다 for.. of 를 선호 권장 사항
com3.forEach((value) => {
  console.log(value);
});
*/

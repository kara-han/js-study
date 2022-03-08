// 열 개의 색상이 담긴 배열을 생성한다.
// 사용자에게 0에서 4 사이의 시작 번호와 5에서 9 사이의 끝 번호를 입력하라고 요청하고
// 입력된 시작 번호부터 끝 번호까지의 색상을 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
import { question } from 'readline-sync';

const color = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'black',
  'white',
  'aqua',
  'coral',
];
console.log(color);
let startnum = -1; // 숫자 입력시 체크
while (startnum < 0 || startnum > 4) {
  startnum = Number(question('0에서 4 사이의 시작 번호를 입력해주세요.'));
}

let endnum = 10; // 숫자 입력시 체크
while (endnum < 5 || endnum > 9) {
  endnum = Number(question('5에서 9 사이의 끝 번호를 입력해주세요.'));
}

console.log(color.slice(startnum, endnum + 1));

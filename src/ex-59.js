// 다섯 개의 색상을 표시하고 그들 중 하나를 사용자에게 선택하라고 요청한다.
// 만약 프로그램이 선택한 것과 동일하면 "Well done"이라고 출력하 고,
// 그렇지 않다면 컴퓨터가 선택한 색상이 포함된 위트 있는 문장을 출력하라.
// 예: "I bet you are GREEN with envy" 또는 "You are probably feeling BLUE right now".
// 다시 맞혀 보라고 사용자에게 색상을 입력하라고 한다. 사용자가 맞힐 때까지 이 작업을 반복한다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in
import { question } from 'readline-sync';

let checknum = 'N';
const color = ['red', 'yellow', 'blue', 'green', 'pink']; // Color[0] 배열 0~4
let colorlist = ''; // 유저에게 컬러 목록을 보여준다.
for (const value of color) {
  colorlist = colorlist + ' ' + value;
}

// 유저답에 따라 답을 배열로
const colordab = [
  'I’m thinking like maybe RED',
  'I guess you love YELLOW',
  'You are probably feeling BLUE right now',
  'I bet you are GREEN with envy',
  'PINK is often described as a love color',
];
const randomnum = Math.floor(Math.random() * 5); // 0~4 랜덤 숫자
const comcolor = color[randomnum]; // 컴퓨터 선택 색상
console.log(`컬러 목록 : ${colorlist}`); // 색상 목록
while (checknum === 'N') {
  const usercolor = question('목록의 색상중 하나를 선택해주세요.');
  if (usercolor.toLowerCase() === comcolor) {
    console.log(colordab[randomnum]); // 색상선택에 따라서 답을 표시한다.
    checknum = 'Y';
  }
}

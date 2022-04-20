// 다섯 개의 숫자(이 숫자들 중 2개는 반복 되어야 함)를 담고 있는 배열을 생성한다.
// 사용자에게 배열 전체를 출력한다.
// 사용자에게 배열 속에 있는 숫자들 하나를 입력하라고 요청한 뒤,
// 입력한 숫자가 배열에 몇 개 있는지 메시지를 표시하라.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
import { question } from 'readline-sync';

const comnum = [1, 3, 5, 7, 3];
console.log(comnum);
let chknum = 0;
const usernum = Number(
  question('배열속에 있는 숫자들 중 하나를 입력해주세요.')
);
for (const element of comnum) {
  if (element === usernum) {
    chknum += 1;
  }
}

console.log(`입력한 숫자는 리스트에 ${chknum} 개 입니다.`);

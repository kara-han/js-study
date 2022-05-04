// 다섯 개의 숫자(이 숫자들 중 2개는 반복 되어야 함)를 담고 있는 배열을 생성한다.
// 사용자에게 배열 전체를 출력한다.
// 사용자에게 배열 속에 있는 숫자들 하나를 입력하라고 요청한 뒤,
// 입력한 숫자가 배열에 몇 개 있는지 메시지를 표시하라.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
import { question } from 'readline-sync';

const comnum = [1, 3, 5, 7, 3];
console.log(comnum);
const usernum = Number(
  question('배열속에 있는 숫자들 중 하나를 입력해주세요.')
);

// For문으로 확인
let chknum = 0;
for (const element of comnum) {
  if (element === usernum) {
    chknum += 1;
  }
}

console.log(`입력한 숫자는 리스트에 ${chknum} 개 입니다.`);

/*
// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
// Disallow Array#reduce() and Array#reduceRight() 권장 규칙 일반적으로 읽기 어렵고 성능 이 떨어지는 코드 가 됩니다.
const result = comnum.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return cur === usernum ? acc + 1 : acc;
}, 0);
console.log(result);
*/

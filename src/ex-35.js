// 사용자의 이름을 입력하라고 요청한 뒤, 그 이름을 세 번 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Loops_and_iteration#for_%EB%AC%B8
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
import { question } from 'readline-sync';

const fname = question('사용자의 이름을 입력해주세요.');
for (let i = 0; i < 3; i++) {
  console.log(`${i + 1}번 ${fname}`);
}

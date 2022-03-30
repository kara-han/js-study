// 가장 좋아하는 과목 이름을 입력받고 각 문자 뒤에 '-'를 붙여서 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
import { question } from 'readline-sync';

const subject = question('좋아하는 과목 입력하세요.');
for (const que of subject) {
  console.log(`${que}-`);
}

console.log('-------------');

for (let i = 0; i < subject.length; i++) {
  console.log(`${subject.charAt(i)}-`);
}

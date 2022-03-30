// 사용자에게 이름을 입력하라고 요청하고 입력된 이름의 길이를 출력한다.
// 그런 다음, 성을 입력 하라고 요청하고 성의 길이를 출력한다
// 성과 이름 사이에 공백 하나를 두어 결합하고 그 결과를 출력한다.
// '마지막으로, 공백을 포함한 전체 이름의 길이를 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/length
import { question } from 'readline-sync';

const lname = question('이름을 입력하세요.');
console.log(`이름 : ${lname} / 이름의 길이 : ${lname.length}`);
const fname = question('성을 입력하세요.');
console.log(`성 : ${fname} / 성의 길이 : ${fname.length}`);
const name = fname + ' ' + lname;
console.log(`${name} ${name.length}`);

// 시 한 구절을 사용자에게 표시하고 시작 인덱스와 마지막 인덱스를 입력하도록 요청한다. 입력한 두 값 사이의 문자를 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice
import { question } from 'readline-sync';

const poem = 'Time is a kind friend, he will make us old.';
console.log(`${poem} 길이 ${poem.length}`);
const startnum = Number(question('시작 인덱스를 입력해주세요.(0부터)'));
const endnum = Number(
  question(`마지막 인덱스를 입력해주세요.(${poem.length}까지)`)
);
console.log(poem.slice(startnum, endnum + 1));

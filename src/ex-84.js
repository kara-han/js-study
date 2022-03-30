// 사용자에게 영어 단어를 입력하라고 요청한다. 처음 두 개의 문자만 대문자로 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice
import { question } from 'readline-sync';

const word = question('영어 단어를 입력해주세요.');
console.log(word.slice(0, 2).toUpperCase());

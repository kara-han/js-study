// 사용자에게 500 이상의 정수를 입력하라고 요청한다.
// 입력받은 숫자의 제곱근을 구하고 소수점 둘째자리까지 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
import { question } from 'readline-sync';

const fnumber1 = question('500 이상의 정수를 입력해주세요.');
const fnumber2 = Math.sqrt(Number(fnumber1)); // 제곱근
console.log(fnumber2.toFixed(2)); // 소수점 2자리숫자까지 표기

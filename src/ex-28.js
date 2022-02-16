// 027번 프로그램을 업데이트하여 소수점 둘째 자리까지 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
import { question } from 'readline-sync';

const fnumber1 = question('소수점 이하 자릿수가 많은 숫자를 입력해주세요.');
const fnumber2 = Number(fnumber1) * 2;
console.log(fnumber2.toFixed(2)); // 소수점 2자리숫자까지 표기

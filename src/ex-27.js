// 사용자에게 소수점 이하 자릿수가 많은 숫자를 입력 하도록 요청한다. 이 숫자에 2를 곱한 결과를 출력하라.
import { question } from 'readline-sync';

const fnumber1 = question('소수점 이하 자릿수가 많은 숫자를 입력해주세요.');
const fnumber2 = Number(fnumber1) * 2;
console.log(fnumber2);

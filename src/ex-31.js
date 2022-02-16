// 사용자에게 원의 반지름(원의 중심점으로부터 끝까지의 길이)을 입력하도 록 요청한다.
// 원의 넓이(π * 반지름의 2제곱)를 계산하여 출력하라
import { question } from 'readline-sync';

const fnumber1 = question('원의 반지름을 입력해주세요.');
const fnumber2 = Math.PI * Number(fnumber1) ** 2; // 원의 넓이(π * 반지름의 2제곱)
console.log(fnumber2);

// 원기둥의 반지름과 깊이를 입력하도록 요청한다.
// 원기둥의 부피(원 넓이 * 깊이)를 구하고 결과를 반 올림하여 소수점 세째 자리까지 출력하라.
import { question } from 'readline-sync';

const fnumber1 = question('원기둥의 반지름을 입력해주세요.');
const fnumber2 = question('원기둥의 깊이를 입력해주세요.');
const fnumber3 = Math.PI * Number(fnumber1) ** 2 * Number(fnumber2); // 원기둥의 부피(원 넓이 * 깊이)
console.log(fnumber3.toFixed(3)); // 소수점 세째 자리까지 출력

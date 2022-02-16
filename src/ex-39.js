// 1부터 12 사이의 값을 입력하도록 요청한 뒤, 그 숫자에 대해 12까지의 곱셈표를 출력하라.
import { question } from 'readline-sync';

const fnum = question('1부터 12 사이의 값을 입력해주세요.');

for (let i = 1; i <= 12; i++) {
  console.log(`${fnum} * ${i} = ${fnum * i}`);
}

// 다음과 같은 메시지를 표시한다.
// 1) Square
// 2) Triangle
// Enter a number:
// 만약 사용자가 1을 입력하면 한 면의 길이를 요청하여 사각형의 넓이를 구하여 출력하라.
// 만약 2를 입력하면 밑변과 높이를 요청하여 삼각형의 넓이를 구하여 출력 하라.
// 다른 것을 입력하면 적절한 오류 메시지가 출력 되도록 한다.

import { question } from 'readline-sync';

const fselect = question('1 OR 2를 입력해주세요.');
if (Number(fselect) === 1) {
  const fsnumber1 = question('사각형 한면의 길이를 입력해주세요.');
  const fsnumber2 = fsnumber1 * fsnumber1;
  console.log(`사격형의 넓이는 ${fsnumber2} 입니다.`);
} else if (Number(fselect) === 2) {
  const ftnumber1 = question('삼각형의 밑변을 입력해주세요.');
  const ftnumber2 = question('삼각형의 높이를 입력해주세요.');
  const ftnumber3 = (ftnumber1 * ftnumber2) / 2;
  console.log(`삼각형의 넓이는 ${ftnumber3} 입니다.`);
} else {
  console.log('오류!');
}

// Total이라는 이름의 변수에 0을 설정하고 숫자를 입력하라는 요청을 다섯 번 반복한다.
// 숫자를 입력할 때마다 입력한 값을 total에 더할 것인지를 묻는다.
// 더하길 원한다는 답을 하면 total에 그 값을 더하고, 그렇지 않다면 더하지 않는다.
// 다섯 개의 숫자가 모두 입력되면 total을 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN

import { question } from 'readline-sync';

let total = 0;
for (let i = 0; i < 5; i++) {
  const fnum = question('숫자를 입력해주세요.');
  // IsNaN에 보면 내용이 나와있습니다. 엄격버젼으로 Number.isNaN로 바꾸는게 좋다고
  if (Number.isNaN(fnum)) {
    const fyn = question('total에 더할거면 y, 아니면 n를 입력해주세요.');
    if (fyn === 'y') {
      total += Number(fnum);
    }
  }
}

console.log(total);

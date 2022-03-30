// 사용자의 이름(영어로)을 입력하라고 요청한 뒤, 그 이름 모음이 몇 개인지 출력하라.
import { question } from 'readline-sync';

const name = question('사용자의 이름을 입력해주세요.');
let ncount = 0;
for (let i = 0; i < name.length; i++) {
  const nchk = name.charAt(i).toLowerCase();
  if (
    nchk === 'a' ||
    nchk === 'e' ||
    nchk === 'i' ||
    nchk === 'o' ||
    nchk === 'u'
  ) {
    ncount += 1;
  }
}

console.log(`이름에 모음은 ${ncount}개 입니다.`);

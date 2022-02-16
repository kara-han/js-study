// 사용자의 이름을 입력하라고 요청하고, 그 이름의 각 문자를 한 줄에 하나씩 출력하라.
import { question } from 'readline-sync';

const fname = question('사용자의 이름을 입력해주세요.');
const flen = fname.length;
for (let i = 0; i < flen; i++) {
  console.log(fname.charAt(i));
}

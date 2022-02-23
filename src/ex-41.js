// 이름과 숫자를 입력하도록 요청한다.
// 입력한 숫자가 10 미만이면 입력한 숫자만큼 이름을 출력하고 10 이상이면 "Too high" 세 번 출력하라.
import { question } from 'readline-sync';

const fname = question('사용자의 이름을 입력해주세요.');
const fnum = question('숫자를 입력해주세요.');

if (fnum < 10) {
  for (let i = 0; i < fnum; i++) {
    console.log(fname);
  }
} else {
  for (let i = 0; i < 3; i++) {
    console.log('Too high');
  }
}

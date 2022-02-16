// 035번 프로그램을 수정하여 사용자가 이름과 숫자를 입력하게 하여, 이름을 입력한 숫자만큼 출력하라.
import { question } from 'readline-sync';

const fname = question('사용자의 이름을 입력해주세요.');
const fnum = question('숫자를 입력해주세요.');
for (let i = 0; i < fnum; i++) {
  console.log(`${i + 1}번 ${fname}`);
}

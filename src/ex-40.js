// 50 미만의 숫자를 입력하도록 요청한다.
// 50부터 입력한 숫자까지 카운트 다운하면서 숫자를 출력하되, 입력한 숫자까지 출력 되도록 하라.
import { question } from 'readline-sync';

const fnum = question('50 미만의 숫자를 입력해주세요.');
if (fnum < 50) {
  for (let i = 50; i > 0; i--) {
    console.log(i);
    if (Number(fnum) === i) {
      break;
    }
  }
} else {
  console.log('error');
}

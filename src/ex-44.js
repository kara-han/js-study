// 파티에 몇 명을 초대하고 싶은지를 묻는다.
// 만약 10 미만을 입력하면 이름을 묻고 "[이름] has been invited"라고 출력하는 것을 입력한 숫자만큼 반복하라.
// 10 이상을 입력하면 "Too many people"이 라는 메시지를 출력하라.

import { question } from 'readline-sync';

const fnum = question('파티에 몇 명을 초대 하겠습니까?');
if (fnum < 10) {
  for (let i = 1; i <= fnum; i++) {
    const fname = question('이름을 입력해주세요.');
    console.log(`${fname} has been invited`);
  }
} else {
  console.log('Too many people');
}

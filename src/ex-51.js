// "10 green bottles" 노래(영국의 유명한 동요)를 이용하여
// "There are [숫자] green bottles hanging on the wall, [] green bottles hanging on the wall,
// and if 1 green bottle should accidentally fall"이라는 가사를 출력하고,
// "how many green bottles will be hanging on the wall?"이라고 질문한다.
// 만약 사용자가 맞히면 "There will be [숫자] green bottles hanging on the wall"이라는 메시지를 출력하고,
// 틀리면 "No, try again" 메시지를 출력한 뒤 맞출 때까지 반복한다.
// green bottle의 개수가 0이 되면 "There are no more green bottles hanging on the wall"이라는 메시지를 출력하고 종료한다
import { question } from 'readline-sync';

let i = 10;
// 10~0 까지 반복한다.
while (i >= 0) {
  // Green bottle의 개수가 0이 되면 메시지 출력하고 종료
  if (i === 0) {
    console.log('There are no more green bottles hanging on the wall');
    break;
  } else {
    console.log(
      `There are ${i} green bottles hanging on the wall, [] green bottles hanging on the wall, and if 1 green bottle should accidentally fall`
    ); // 가사를 출력
    const usernum = question(
      'how many green bottles will be hanging on the wall?'
    );
    i -= 1; // 1씩 차감
    // 맞히면 메시지 출력후 스탑, 못맞히면 반복
    if (Number(usernum) === i) {
      console.log(`There will be ${usernum} green bottles hanging on the wall`);
      break;
    } else {
      console.log('No, try again');
    }
  }
}

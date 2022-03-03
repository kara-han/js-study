// 사용자가 파티에 초대하고 싶은 사람의 이름을 입력하라고 요청 한다.
// 그 다음에, "[이름] has now been invited"라는 메시지를 출력하고 카운트에 1을 더한다.
// 다른 사람을 더 초대하고 싶은 지를 묻고 더 이상 파티에 초대하고 싶은 사람이 없을 때까지 반복한다.
// 초대하고 싶은 사람이 없다면 몇 명이 파티에 참석하는지를 표시하라.
import { question } from 'readline-sync';

let invitechk = 'y'; // 초대여부
let partynum = 0; // 카운트
// 파티에 초대하고 싶은 사람이 없을 때까지 반복
while (invitechk === 'y') {
  const username = question('파티에 초대하고 싶은 사람의 이름을 입력해주세요.'); // 사용자가 파티에 초대하고 싶은 사람의 이름을 입력하라고 요청
  console.log(`${username} has now been invited`); // 메시지를 출력
  partynum += 1; // 카운트에 1을 더한다
  invitechk = question('다른 사람을 더 초대하고 싶으면 y를 입력해주세요.'); // 다른 사람을 더 초대하고 싶은 지를 묻는다.
}

console.log(`${partynum} 명이 파티에 참석합니다.`); // 초대하고 싶은 사람이 없다면 몇 명이 파티에 참석하는지를 표시

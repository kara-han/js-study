// 두 개의 스포츠 이름을 담고 있는 배열을 생성하라.
// 사용자에게 좋아하는 스포츠가 무엇인지 물어보고 그것을 배열 끝에 추가하라.
// 배열을 정렬하고 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
import { question } from 'readline-sync';

let sportschk = 'N'; // 유저가 중복되지 않는 스포츠를 입력했는지 체크
let sportsnum = -1;
const sports = ['basketball', 'football'];
let userspoarts = '';
console.log(`좋아하는 스포츠 목록 : ${sports}`);
while (sportschk === 'N') {
  userspoarts = question(`추가할 좋아하는 스포츠를 입력해주세요.`);
  sportsnum = sports.indexOf(userspoarts.toLowerCase());
  if (sportsnum === -1 && userspoarts !== '') {
    sportschk = 'Y'; // 유저목록 중복 안되고 유저입력값 있을시 Y
  }
}

sports.push(userspoarts);
sports.sort();
console.log(sports);

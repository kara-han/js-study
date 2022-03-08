// 사용자에게 숫자를 입력하라고 요청하고, 입력한 위치의 국가 이름이 출력되는 기능을 069번 프로그램에 추가하라.
import { question } from 'readline-sync';

const country = ['Korea', 'Japan', 'China', 'USA', 'France']; // Country[0] 배열 0~4
/* let countrylist = ''; // 유저에게 국가 목록을 보여준다.
for (const element of country) {
  countrylist = countrylist + ' ' + element;
} */

console.log(`국가 목록 : ${country}`);
const usernum = Number(question('0 ~ 4 중 숫자를 입력해주세요.'));
if (usernum >= 0 && usernum <= 4) {
  console.log(`국가 이름 : ${country[usernum]}`);
} else {
  console.log(`국가 이름이 없습니다.`);
}

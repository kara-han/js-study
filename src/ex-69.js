// 다섯 개의 국가 이름을 담고 있는 배열을 만들고 배열 전체를 출력하라.
// 표시된 국가 이름들 중 하나를 입력하라고 사용자에게 요청하고,
// 입력된 국가 이름의 인덱스 번호(즉, 목록에서의 위치)를 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
import { question } from 'readline-sync';

let countrynum = -1; // 국가 목록 번호
const country = ['korea', 'japan', 'china', 'usa', 'france']; // Country[0] 배열 0~4
console.log(`국가 목록 : ${country}`);
const usercountry = question('목록의 국가 이름들 중 하나를 입력해주세요.');
// 유저가 입력한 국가 이름이 국가목록에 있는지 확인
/* for (const [i, element] of country.entries()) {
  if (element === usercountry.toLowerCase()) {
    countrynum = i;
  }
} */
countrynum = country.indexOf(usercountry.toLowerCase()); // 유저가 입력한 국가 위치 -1이면 없음

if (countrynum >= 0) {
  console.log(
    `입력된 국가 이름 : ${usercountry} , 인덱스 번호 : ${countrynum}`
  );
} else {
  console.log(`입력된 국가 이름 : ${usercountry} 국가 목록에 없습니다.`);
}

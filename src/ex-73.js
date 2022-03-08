// 사용자에게 좋아하는 음식 네 개를 입력하도록 요청하고 그것들은 인덱스 번호 1부터 시작하는 객체에 저장한다.
// 인덱스 번호와 항목이 모두 표시되도록 객체를 출력한다.
// 사용자에게 제거하고 싶은 항목을 묻고 그것을 제거한다.
// 남아 있는 데이터를 정렬하고 객체를 다시 출력하라.
import { question } from 'readline-sync';

let foodchk = 'N'; // 음식 네개 중 입력했는지 확인
let foodnum = -1; // 목록에 있는지 체크(0이상)
const foodlist = ['']; // 인덱스 1부터 시작할수 있도록 0에 기본값 넣음
let chki = 1; // 음식 네개 입력할때 확인
// 사용자에게 좋아하는 음식 네개를 입력 하도록 요청하고 인덱스번호 1부터 시작하는 객체에 저장
while (chki < 5) {
  const userfood = question('좋아하는 음식을 입력해주세요.');
  foodnum = foodlist.indexOf(userfood.toLowerCase());
  // 입력한 값이 있고 동일한 값이 없으면 저장
  if (foodnum === -1 && userfood !== '') {
    foodlist.splice(chki, 0, userfood.toLowerCase()); // 목록에 저장
    chki += 1;
  }
}

// 인덱스 번호와 항목이 모두 표시되도록 출력
for (let i = 1; i < 5; i++) {
  console.log(`${i}번 : ${foodlist[i]}`);
}

// Console.log(foodlist);
// 제거 항목 물어보고 제거
while (foodchk === 'N') {
  const userfood2 = question(`목록중 제거하고 싶은 음식을 입력해주세요.`);
  foodnum = foodlist.indexOf(userfood2.toLowerCase());
  if (foodnum > -1 && userfood2 !== '') {
    foodlist.splice(foodnum, 1); // 음식 제거
    foodchk = 'Y'; // 음식 목록중 음식 제거 Y
  }
}

foodlist.sort();
console.log(foodlist);

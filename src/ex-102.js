// 네 명의 이름과 나이, 신발 사이즈를 입력하라고 요청한다.
// 입력된 이름들 중 하나를 입력하라고 요청하고 입력된 이름의 나이와 신발 사이즈를 출력하라.
import { question } from 'readline-sync';

const array = {};
for (let i = 0; i < 4; i++) {
  const name = question('이름을 입력해주세요.');
  const age = Number(question('나이 입력해주세요.'));
  const shoes = Number(question('신발사이즈를 입력해주세요.'));
  array[name] = { Age: age, Shoes: shoes };
}

console.log(array);

const username = question('입력된 이름들 중 하나를  입력해주세요.');

if (username in array) {
  console.log(array[username]);
} else {
  console.log('일치하는 내용이 없습니다.');
}

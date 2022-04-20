// 네 명의 이름과 나이 그리고 신발 사이즈를 입력받은 후, 목록에서 제거하고 싶은 사람의 이름을 입력하라고 한다.
// 입력된 이름의 데이터를 삭제하고 나머지 데이터를 한 줄에 하나씩 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/delete
import { question } from 'readline-sync';

const array = {};
for (let i = 0; i < 4; i++) {
  const name = question('이름을 입력해주세요.');
  const age = Number(question('나이 입력해주세요.'));
  const shoes = Number(question('신발사이즈를 입력해주세요.'));
  array[name] = { Age: age, Shoes: shoes };
}

console.log(array);

const username = question(
  '목록에서 제거하고 싶은 사람의 이름을 입력을 입력해주세요.'
);

delete array[username];

for (const [key, value] of Object.entries(array)) {
  console.log(`${key} | Age : ${value.Age}, Shoes : ${value.Shoes}`);
}

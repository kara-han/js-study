// 102번 프로그램을 수정하여 모든 사람의 이름과 나이를 출력하라. 단, 신발 사이즈는 출력하지 않는다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of
import { question } from 'readline-sync';

const array = {};
for (let i = 0; i < 4; i++) {
  const name = question('이름을 입력해주세요.');
  const age = Number(question('나이 입력해주세요.'));
  const shoes = Number(question('신발사이즈를 입력해주세요.'));
  array[name] = { Age: age, Shoes: shoes };
}

/* For (const key in array) {
  console.log(`이름 : ${key} , 나이 : ${array[key].Age}`);
} */

for (const [key, value] of Object.entries(array)) {
  console.log(`이름 : ${key}, 나이 : ${value.Age}`);
}

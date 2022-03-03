// 다섯 개의 과일 이름들의 목록에서 임의의 과일을 출력하라.
// Math.floor(Math.random() * (max - min + 1)) + min; // 최댓값도 포함, 최솟값도 포함
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

const fruit = ['apple', 'orange', 'strawberry', 'mango', 'melon']; // Fruit[0] 배열 0~4
const randomnum = Math.floor(Math.random() * 5); // 0~4 랜덤 숫자
console.log(fruit[randomnum]);

// 1부터 100(포함) 사이의 임의의 정수를 출력하라..
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

/* function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // 최댓값도 포함, 최솟값도 포함
}
const randomnum = getRandomIntInclusive(1, 100); */

const randomnum = Math.floor(Math.random() * 100) + 1;
console.log(randomnum);

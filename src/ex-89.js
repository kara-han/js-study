// 정수들을 저장할 배열을 생성한다. 임의의 수 다섯 개를 생성하고 배열에 저장한다. 배열의 항목을 한 줄에 하나씩 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of
const anum = [];
for (let i = 0; i < 5; i++) {
  const randomnum = Math.floor(Math.random() * 100) + 1; // 1~ 100랜덤수
  anum.push(randomnum);
}

/* For (let i = 0; i < 5; i++) {
  console.log(anum[i]);
} */

for (const element of anum) {
  console.log(element);
}

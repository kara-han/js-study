// 임의로 생성된 두 개의 정수를 더하는 다섯 개의 질문(즉, [숫자1] + [숫자2])이 나오는 수학 퀴즈를 만들자.
// 사용자에게 답을 입력하라고 요청하고 정답을 맞히면 점수를 증가하라.
// 퀴즈가 끝나면 다섯 문제 중에 몇 개를 맞혔는지 출력하라.
import { question } from 'readline-sync';

let quiznum = 0;
// 다섯개의 질문
for (let i = 0; i < 5; i++) {
  const randomnum1 = Math.floor(Math.random() * 10) + 1; // 1~10 랜덤 숫자
  const randomnum2 = Math.floor(Math.random() * 10) + 1; // 1~10 랜덤 숫자
  const randaomhap = randomnum1 + randomnum2; // 합계
  const userhap = Number(
    question(`${i + 1}번 : ${randomnum1} + ${randomnum2} = `)
  );
  if (userhap === randaomhap) {
    quiznum += 1;
  }
}

console.log(`다섯문제 중에 ${quiznum}개 맞혔습니다.`);

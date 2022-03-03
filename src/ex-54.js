// 앞면과 뒷면('h' 그리고 't') 중 임의로 선택한다. 사용자에게 어떤 것을 고를지를 요청한다.
// 만약 사용자의 선택과 임의로 선택한 값이 서로 같으면 "You win" 메시지를 출력하고,
// 그렇지 않다면 "Bad luck" 메시지를 출력하라. 마지막에 컴퓨터가 선택한 것이 무엇인지를 사용자에게 알려줘라.
import { question } from 'readline-sync';

const coinht = ['h', 't']; // 앞,뒤 선택
const randomnum = Math.floor(Math.random() * 2) + 0; // 0~1 랜덤 숫자
const comselect = coinht[randomnum];
const userselect = question('h OR t 중 선택해주세요.');
if (userselect.toLowerCase() === comselect) {
  console.log('You win');
} else {
  console.log('Bad luck');
}

console.log(`컴퓨터가 선택한것은 ${comselect} 입니다.`);

import { question } from 'readline-sync';

const totalbill = question('계산서의 총 가격을 입력하세요.');
const personcount = question('식사를 같이 한 인원을 입력하세요.');
const price = Number(totalbill) / Number(personcount);
console.log(`한사람이 내야 할 가격은 ${price}원 입니다.`);

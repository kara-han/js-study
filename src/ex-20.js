import { question } from 'readline-sync';

const fname = question('이름을 입력해주세요.');
console.log(`이름 : ${fname} / 길이 : ${fname.length}`);

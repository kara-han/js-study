import { question } from 'readline-sync';

const fyn = question('지금 비가 오나요? Yes OR No.');
if (fyn.toLowerCase() === 'yes') {
  const fyn2 = question('지금 바람이 부나요? Yes OR No.');
  if (fyn2.toLowerCase() === 'yes') {
    console.log('It is too windy for an umbrella');
  } else {
    console.log('Take an umbrella');
  }
} else {
  console.log('Enjoy your day');
}

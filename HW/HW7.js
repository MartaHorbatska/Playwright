/* Task 1. Використовуючи регулярні вирази реалізуйте функцію 
removeSpaces(text), яка приймає стрінговий параметр text і прибирає 
пробіли на початку і в кінці рядка та повертає змінену стрінгу.
Приклад роботи:
console.log(removeSpaces(' textWithSpaces '));
// “textWithSpaces”
console.log(removeSpaces(' more text with spaces '));
// “more text with spaces”
*/

function removeSpaces(text) {
    return text.replace(/^\s+|\s+$/g, '');
  }
  console.log(removeSpaces(' textWithSpaces '));  
  console.log(removeSpaces(' more text with spaces '));  


/* 
Task 2. Реалізуйте за допомогою ругулярних виразів функцію findCapitalWords
(sentence), яка приймає речення sentence і повертає масив усіх слів, 
які починаються з великої літери.
Приклад роботи:
console.log(findCapitalWords("The Quick Brown Fox jumps over the Lazy Dog"));
// ["The", "Quick", "Brown", "Fox", "Lazy", "Dog"]
console.log(findCapitalWords("no capital letter here"));
// []
*/
  function findCapitalWords(sentence) {
    return sentence.match(/\b[A-Z][a-z]*\b/g) || [];
  }
  console.log(findCapitalWords("The Quick Brown Fox jumps over the Lazy Dog"));
  console.log(findCapitalWords("no capital letter here"));
 
/* 
Task 3. Використовуючи регулярні вирази реалізуйте функцію getLetterCount(text), 
яка приймає стрінговий параметр text та повертає об’єкт, ключами якого є літери, 
які зустрічається в тексті text, а значеннями кількість повторень відповідної 
літери.
Приклад роботи:
console.log(getLetterCount("banana"));
// { b: 1, a: 3, n: 2 }
console.log(getLetterCount("The short text"));
// { t: 4, h: 2, e: 2, s: 1, o: 1, r: 1, x: 1 }
*/

function getLetterCount(text) {
    const letters = text.toLowerCase().match(/[a-z]/g); //  тільки літери
    const result = {};
  
    if (letters) {
      for (const letter of letters) {
        result[letter] = (result[letter] || 0) + 1;
      }
    }
    return result;
  }
  console.log(getLetterCount("banana"));  
  console.log(getLetterCount("The short text"));   


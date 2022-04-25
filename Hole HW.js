// Пока Вадим не дал домашек, не даю вам скучать:))

// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
// 
// for (let a = 2**1; a <= 2**10; a++){
//     console.log(a)
// }
// let a = 2
// let b = 1
// while (a <= 1024){
//     let sq = a * 2;
//     a = sq
//     console.log(sq)
// }

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
// const checkPow = function(pow){
//     while(pow <= 10){
//         let result = a ** pow;
//         pow++
//     console.log(result)
//     }
// }
// checkPow(9)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

// let text1 = ''

// for(a = 1 ; a < 6; a++){
//     text1 = text1 + ':)';
 
//     console.log(text1)
// }

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

// let text1 = ''
// const ssmile = function(stroka, b){
//     for(a = 0;a < b; a++){
//             text1 = stroka + text1
         
//             console.log(text1)
//         }
    
// }
// ssmile(':)', 2)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// function countVowel(str) { 

//     const count1 = str.match(/[aeiou]/gi).length;
//     const count2 = str.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
//     console.log('Слово ' + [str] + ' состоит из ' + count1 + ' гласных и ' + count2 + ' соглансных букв');
    
// }
// countVowel('Peremoga')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// function isPalindrom(str) {
//     
//     str = str.toLowerCase()
//     if (str === str.split('').reverse().join('')){
//         console.log(str)
//     }
//     else{
//     console.log('Word ' + [str] + ' is not Polindrom')
    
// }
// }

// isPalindrom('ротатор')
// isPalindrom('Зараз')
// isPalindrom('Anna')

// function ispalindrome(word) {
//     word = word.toLowerCase()
//     const len = word.length / 2;
//     for (let i = 0; i < len; i++)
//       if (word[i] !== word[word.length - i - 1]) {
//         return false;
//       }
//     console.log('Слово ' + [word] + ' палиндром');
//   }

//   ispalindrome('AnnA')
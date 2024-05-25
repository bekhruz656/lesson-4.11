// 1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini cosole.logda qo'shib chiqaring chiqaring

let number1 = 5;
let number2 = 10;

console.log(number1 + number2);

// 2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring 
// bering. Yani bu hozir string typeda siz number tyga o'zgartiring

let a = '12';

let numberA = Number(a); 

console.log(numberA); 
console.log(typeof numberA); 

// 3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering

let randomNumber = Math.floor(Math.random() * 100);

if (randomNumber % 2 === 0) {
    console.log(randomNumber + ' is even');
} else {
    console.log(randomNumber + ' is odd');
}

// 4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zning
//  o'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin

let inputWord = prompt('Enter one word:');

if (inputWord.toLowerCase() === 'mars') {
    console.log('self');
} else {
    console.log('mars it school');
}

// 5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi 
// so'zlar ichidan uzunligi 5 va undan kattalarini boshqa bir arrayga qo'shib chiqaring

let words = ['apple', 'banana', 'cherry', 'date', 'fig'];

let longwords = [];

for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
        longwords.push(words[i]);
    }
}

console.log(longwords);

// 6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + " (juft son)");
    } else {
        console.log(i + " (toq son)");
    }
}

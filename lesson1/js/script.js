//1
let x = 40000,
    y = 22000;

console.log(x + y + " руб.");
// или просто без использования переменных: 
console.log(40000 + 22000 + " руб.");

//2
console.log('Владивосток' + " 2000");
// или
console.log(`Владивосток ${2000}`);

//3
let z = 128 + 254 + 137 + 201;
console.log(z / 60 + " ч.");
//или
console.log((128 + 254 + 137 + 201) / 60 + " ч.");

//4
console.log(2 ** 5);

//5
console.log('"Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!"');

//6
const greetings = "Привет,";
const name = " Кот";
console.log(greetings + name);

//7
let time = '';
time = 34;
console.log('Старт поездки. Осталось минут: ' + time);
time = 34 - 15;
console.log('Немного сторис в соцсетях. Осталось минут: ' + time);
time = 34 - 15 - 10;
console.log('Немного не новостей, но событий. Осталось минут: ' + time);
time = 0;
console.log('Осталось минут: ' + time + '. Вы приехали. Добро пожаловать в Москву!');

//8
let fahrenheit = 451;
celsius = (fahrenheit - 32) / 1.8;
console.log(fahrenheit + ' градуса по Фаренгейту — это ' + celsius + ' градуса по Цельсию.');
//или
console.log(`${fahrenheit} градуса по Фаренгейту — это ${celsius} градуса по Цельсию.`);













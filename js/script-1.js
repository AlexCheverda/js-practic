/* МОДУЛЬ-1. ПЕРЕМЕННЫЕ И ВЕТВЛЕНИЯ. */



// const a = 'Переменная "a"';

// console.log(a);

// const c = 'Переменная "c"';

// console.log(c);

// alert("close the window")

// const shouldRenew = confirm('Продовжити підписку?');
// console.log(shouldRenew);


// const quantity = prompt('введите к-во товара');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth:', elementWidth);

// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight:', elementHeight);

// const salary = 1300.16472;
// salary = Number(salary.toFixed(2));
// console.log(salary);


// Возведение в степень
// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);
// console.log(result);

/*Аналогично*/
// console.log(2 ** 5);


/*Задача*/
/*
* Напиши скрипт который просит пользователя ввести число истепень,
* возводит число в єту степень и выводит результат в консоль.
*/

// 1. Попросить пользователя ввести число и сохранить в переменную
// let base = prompt('Введите число');
// base = Number(base);
// console.log(base);

// 2. Попросить пользователя ввести степень и сохранить в переменную.
// let power = prompt('Введите степень');
// power = Number(power);
// console.log(power);

// 3. Возвести введённые данные в степень и вывести.
// const result = base ** power;
// console.log(result);


/*Генерирование псевдослучайных чисел
* - Math.random()
* - Math.round()
*/

// console.log(Math.random()); /* Случайное число от 0 до 1 */

//  Math.random() * (max - man) + min /* Случайное число от min до max */
// console.log(Math.random() * (50 - 30) + 30);

// const max = 70;
// const min = 5;
// console.log(Math.random() * (max - min) + min);

// Округление в большую или меншую сторону - метод round
// const max = 110;
// const min = 0;
// const result = Math.random() * (max - min) + min;
// console.log(Math.round(result));

/* аналогично - 
const res = Math.round(Math.random() * (max - min) + min);
console.log(result);
*/


/* Генерирование случайных цветов backgroundColor */

// const colors = ['tomato', 'teal', 'orange', 'red', 'deeppink'];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;


/* Длинна строки, свойство Length */

// const message = 'В этой строке 26 символов.';
// console.log(message.length);


/* Конкатенация строк */

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

/* Напиши скрипт которій віведет строку в формате:
* "Гость x y поселяется в z номер q",
* подставив вместо x y z q значения переменных */


// const room = 716;
// const type = 'VIP';

// const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + ' поселяется в ' + type + ' номер ' + room;
// console.log(welcomeMsg);

/* Шаблонные строки (template strings)
* Возвращаемся к составлению строки поселения в отель
*/

// const welcomeMsg = `Гість ${firstName} ${lastName} заселяється в ${type} номер ${room}`;
// console.log(welcomeMsg);

// const quantity = 15;
// const orderMsg = `Ви замовили ${quantity} холодильників.`;
// console.log(orderMsg);


/* Нормализация с методом toLowerCase() */

// let brand = prompt('Давай бренд');
// brand = brand.toLowerCase();
// console.log(brand);


/* Поиск в строке с методом includes() */

// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
// const string3 = 'Рекламная кампания #fatlivesmatter';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));
// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklistedWord2));
/*аналогично*/
// console.log(string2.toLowerCase().includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));


/* Приведение (преобразование) типов к числу */

// console.log('10' > 5);


/* Операторы равенства (== и ===) и неравенства (!= и !==)
* "ВСЕГДА ИСПОЛЬЗУЕМ СТРОГОЕ РАВЕНСТВО (===) И НЕРАВЕНСТВО (!==)"
*/

// const isEqual = 5 == 5;
// console.log(isEqual);

const btnAdd = document.querySelector('button[data-add]');
const valueInput = document.querySelector('input[data-value]');
const resetBtn = document.querySelector('button[data-reset]');
const outputEl = document.querySelector('.js-output span');

let total = 0;

btnAdd.addEventListener('click', function () {
    console.log('click ho ho ho');

    const value = Number(valueInput.value);

    total += value;   
    outputEl.textContent = total;
    valueInput.value = '';
});

resetBtn.addEventListener('click', function () {
    total = 0;
    outputEl.textContent = total;
});
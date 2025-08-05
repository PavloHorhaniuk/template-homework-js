// const stopCounter = 5; //! кількість ітерацій до зупинення таймеру
// console.log(stopCounter)



// for (let index = 0; index < itarations; index++) {
//     timerId = setTimeout(function timeCount() {
//         console.log(itarations - index, "Спрацювала функція timeCount()", timerId)
//         if (index + 1 === stopCounter) {
//             console.error(
//                 "Інтервал з індентифікатором",
//                 timerId,
//                 "зупинено на",
//                 "-ій ітерації"
//             );
//         }
//     }, timeBeforeStart * index);

// if (index === stopCounter) {
//     clearTimeout(timerId);
//     break
// }
// };

// const btnStartTimeout = document.getElementById('start-set-timeout')
// const btnStopTimeout = document.getElementById('stop-set-timeout')
// let timerId;
// const timeBeforeStart = 1000;
// const itarations = 10;
// const stopCounter = 7;

// btnStartTimeout.addEventListener('click', () => {

// for (let index = 0; index < itarations; index++) {
//     timerId = setTimeout(function timeCount() {
//         console.log(itarations - index, "Спрацювала функція timeCount()", timerId)
//         if (index + 1 === stopCounter) {
//             console.error(
//                 "Інтервал з індентифікатором",
//                 timerId,
//                 "зупинено на",
//                 "-ій ітерації"
//             );
//         }
//     }, timeBeforeStart * index);

//         if (index === stopCounter) {
//         clearTimeout(timerId);
//         return
//     }

//     console.log("❗️❗️❗️ Кінець роботи циклу...", index);
// }
// })

// btnStopTimeout.addEventListener('click', () => {
//     clearTimeout(timerId),
//     console.warn(`Інтервал з ідентифікатором ${timerId} зупинено!`);
// })

// const btnStartTimeout = document.getElementById('start-set-timeout');
// const btnStopTimeout = document.getElementById('stop-set-timeout');
// let timerIds = []; // додали масив для зберігання усіх таймаутів
// let isStopped = false; // флаг для зупинки

// const timeBeforeStart = 1000;
// const itarations = 10;
// const stopCounter = 7;

// btnStartTimeout.addEventListener('click', () => {
//     isStopped = false; // скидаємо флаг при новому старті

//     for (let index = 0; index < itarations; index++) {
//         let currentTimerId = setTimeout(function timeCount() {
//             if (isStopped) return; // якщо натиснуто Stop - функція не виконується

//             console.log(itarations - index, "Спрацювала функція timeCount()", currentTimerId);

//             if (index + 1 === stopCounter) {
//                 console.error(
//                     "Інтервал з індентифікатором",
//                     currentTimerId,
//                     "зупинено на",
//                     "-ій ітерації"
//                 );
//             }
//         }, timeBeforeStart * index);

//         timerIds.push(currentTimerId); // зберігаємо id для подальшої зупинки

//         console.log("❗️❗️❗️ Кінець роботи циклу...");
//     }
// });

// btnStopTimeout.addEventListener('click', () => {
//     isStopped = true; // ставимо флаг зупинки

//     timerIds.forEach(id => clearTimeout(id)); // очищаємо всі таймаути
//     console.warn(`⛔ Усі таймаути (${timerIds.length}) зупинено!`);
//     timerIds = []; // очищаємо масив для нового запуску
// });

// const intervalId = setInterval(callback, delay);

// const timeBetweenCounts = 1000; //! час між відліками
// const stopCounter = 5; //! кількість інтервалів до зупинення таймеру


// let seconds = 0;

// function creatsInterval() {
//     // let count = 0; //! початковий стан лічильник часу
//     const intervalId = setInterval(() => {
//         console.log(
//             "⏱️ Відлік часу в секундах, id: ", intervalId);
//     }, timeBetweenCounts);

//     let timerId = setTimeout(() => {
//         clearInterval(intervalId)
//         console.error(
//             "❌⏱️ Інтервал з ідентифікатором",
//             intervalId,
//             "зупинено!"
//         );

//     }, stopCounter * timeBetweenCounts + 10)

// // Частота спрацьовування лічильника

// // У браузерного таймера є мінімально можлива затримка. 
// // У сучасних браузерах вона коливається приблизно від 0 до 4 мілісекунд. 
// // У старіших браузерах затримка може бути більшою і досягати 15 мілісекунд. 
// // За стандартом, мінімальна затримка становить 4 мілісекунди, 
// // тому різниці між setTimeout(callback, 1) і setTimeout(callback, 4) немає.

// // Таймер може спрацьовувати рідше, ніж зазначено в параметрі delay, 
// // тому що за надто великого завантаження процесора деякі запуски 
// // функцій-інтервалів будуть пропущені. Браузери продовжують виконувати 
// // тайм-аути та інтервали, навіть якщо вкладка браузера неактивна, 
// // але водночас знижують частоту спрацьовування таймерів.
// };

// creatsInterval()

// const date = new Date();

// const dateString = date.toString()

// console.log("dateString", dateString)
// console.log("dateString typeof", typeof dateString)

// const date1 = new Date("2025-03-19");

// console.log("date1", date1)

const futureDate0 = new Date("2030");
const futureDate1 = new Date("2030-03");
const futureDate2 = new Date("2030-03-16");
const futureDate3 = new Date("03/16/2030");
const futureDate4 = new Date("2030/03/16");
const futureDate5 = new Date("2030/3/16");
const futureDate6 = new Date("March 16, 2030");
const futureDate7 = new Date("16 March 2030");
const futureDate8 = new Date("March 16, 2030 14:25:00");
const futureDate9 = new Date("2030-03-16 14:25:00");
const futureDate10 = new Date("2030-03-16T14:25:00");

const futureDate11 = new Date("Sat Mar 16 2030 14:25:00 GMT+0200");

console.log(
    "\n", futureDate0,
    "\n", futureDate1,
    "\n", futureDate2, 
    "\n", futureDate3, 
    "\n", futureDate4, 
    "\n", futureDate5, 
    "\n", futureDate6, 
    "\n", futureDate7, 
    "\n", futureDate8, 
    "\n", futureDate9, 
    "\n", futureDate10,
    "\n",
    "\n", futureDate11
);

console.log(typeof futureDate10)

const timestampDateParse = Date.parse("2030-03-16T14:25:00.000+02:00");

console.log("timestampDateParse", timestampDateParse)

console.log("timestampDateParse typeof", typeof timestampDateParse)


// 1 січня 1970 UTC+0 Unix Час
const dateUnix = new Date(0);
console.log("dateUnix", dateUnix)

const dateUnix10000 = new Date(10000);
console.log("dateUnix10000", dateUnix10000)

const date2 = new Date();

Date.parse(new Date());

console.log("date: ", Date.parse(new Date()))


// const timestampDateParse = Date.parse("2030-03-16T14:25:00.000+02:00");


//? ✳️ Формат рядка повинен бути:
//? YYYY - MM - DDTHH: mm: ss.sssZ,
//? 📌 де:
//? 🔸 YYYY-MM-DD — це дата: рік-місяць-день.
//? 🔸 Символ "T" використовується як роздільник.
//? 🔸 HH:mm:ss.sss — це час: години, хвилини, секунди і мілісекунди.
//? 🔸 'Z' - необов’язкова частина яка позначає часовий пояс у форматі +-hh:mm.
//?    Одинична буква Z буде означати UTC+0.

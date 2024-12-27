// Вивести на екран всі числа від 1 до 10 за допомогою циклу while.

// Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число не парне, пропустити його за допомогою continue.

// Вивести на екран таблицю множення числа 7 за допомогою циклу for.

// Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.

// Створити масив із числами від 1 до 10.
// За допомогою циклу for пройтися по масиву та вивести на екран всі числа,
// крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу
// за допомогою оператора break.

// Створити скрипт, який виводить на екран всі числа,
// які менші за n. Якщо зустрічається число, що більше 
// або дорівнює n, цикл повинен бути закінчений за допомогою break.

// За допомогою циклу while вивести на екран всі числа від 1 до 20,
// крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл
// повинен продовжити виконання за допомогою оператора continue.

let y = 1;

while (y <= 10) {
    console.log(y)
    y++
}

console.log('----------------------')

for (let P = 2; P <= 20; P++) {
    if (P % 2 !== 0) {
        continue;
    }
    console.log(P)
}

console.log('----------------------')

for (let M = 1; M <= 10; M++) {
    console.log(`7 x ${M} = ${7 * M}`)
}

console.log('----------------------')

let numbers1 = [1, 2, 3, 4, 5,]
let i = 0
while (i < numbers1.length) {
    console.log(numbers1[i]);
    i++;
}

console.log('----------------------')


for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break
    }
    console.log(i);
}

console.log('----------------------')

let n = 15
for (let i = 1; i < n; i++) {
    if (i >= n) {
        break
    }
    console.log(i)
}

console.log('----------------------')

let H = 1
while (H <= 20) {
    if (H % 3 === 0) {
        H++
        continue;
    }
console.log(H);
H++
}
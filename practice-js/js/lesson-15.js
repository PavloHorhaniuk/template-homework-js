
//! 1.Метод reduce()
console.warn("Синтаксис методу reduce():");
//? ✴️ Метод reduce(callback, initialValue)
//? використовується для послідовної обробки кожного елемента масиву
//? із збереженням проміжного результату, як акумулятор.
//? Трохи складніший за інші методи для засвоєння,
//? але результат вартий того.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Робить все, що завгодно.
//? 🔸 Повертає що завгодно.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 Перший параметр колбек-функції
//?    (previousValue) - це акумулятор, тобто проміжний результат.
//?    Значення, яке поверне колбек-функція на поточній ітерації,
//?    буде значенням цього параметра на наступній ітерації.
//? 🔹 наступний - значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
//? 🔹 Другий аргумент - необов'язкове початкове значення акумулятора
//?    - параметр initialValue.
console.log(
    `%c
    масив.reduce((previousValue, element, index, array) => {
        // тіло колбек-функції
    }, initialValue);
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода reduce():");
//? ✳️ Найлегше уявити його роботу метода reduce()
//? на прикладі підрахунку суми елементів масиву.
//? ✳️ Спочатку метод reduce()
//? створює внутрішню змінну-акумулятор (previousValue)
//? і присвоює їй значення параметра initialValue
//? або першого елемента масиву, що перебирається,
//? якщо initialValue не задане.
//? 🔹 previousValue = initialValue = 0; (або previousValue = array(0) = 2).
//? Потім колбек - функція викликається для кожного елемента масиву.
//? Поточне значення параметра previousValue
//? - це те, що повернула колбек - функція на минулій ітерації.
//?     🔹 Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
//?     🔹 Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
//?     🔹 Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
//?     🔹 Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
//?     🔹 Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32
//? Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
//?       Результат = 32
const array = [2, 7, 3, 14, 6];

const array1 =[4, 14, 6, 28, 12];
console.log("array:", array);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `")

const total = array.reduce((previousValue, number, index) => {
    console.log(`Iteration-${index + 1}:  previousValue: ${previousValue},  number: ${number}  ->  return ${previousValue + number}`);
    return previousValue + number;
}, 0);

console.log("total:", total); //! 32
//? ✳️ Тобто метод reduce() використовується,
//? коли необхідно взяти «багато» і привести до «одного».
//? У повсякденних завданнях його застосування зводиться до роботи з числами.
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

let total1 = 0

for (const a of array1) {
    total1 = total1 + a
    console.log(total1)
}


//! Масив об'єктів
console.warn("Масив об'єктів:");
//? ✳️ Під час роботи з масивом об'єктів
//? виконується редукування (змінювання в бік зменшення)
//? за значенням певної властивості.
//? Наприклад, у нас є масив студентів з балами за тест.
//? Необхідно отримати середній бал.
const students = [
    { name: "Манго", score: 83 },
    { name: "Полі", score: 59 },
    { name: "Аякс", score: 37 },
    { name: "Ківі", score: 94 },
    { name: "Х'юстон", score: 64 },
];
console.log("students:", students);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = students.reduce((total, student) => {
    return total + student.score;
}, 0);
console.log("totalScore:", totalScore); //! 337

const averageScore = totalScore / students.length; //! 67.4
console.log("averageScore:", averageScore);
console.log("-------------------------------------------------------------");


//! Просунутий reduce (сума усіх лайків)
console.warn("Просунутий reduce (сума усіх лайків):");
//? ✳️ Припустимо у нас є наступна задача:
//? з масиву постів твіттера окремого користувача
//? необхідно порахувати суму усіх лайків.
//? Можна перебрати циклом for або forEach,
//? кожне з цих рішень вимагатиме
//? написання додаткового коду.
//? А можна використовувати reduce.
const tweets1 = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
console.log("tweets1:", tweets1);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: Пройдемо по всіх елементах колекції і додамо значення властивості likes
//todo: до акумулятора, початкове значення якого вкажемо 0.
const likes = tweets1.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log("likes:", likes); //! 32

//todo: Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
//todo: для підрахунку лайків з колекції
const countLikes = tweets => {
    return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};

console.log("likes with countLikes:", countLikes(tweets1)); //! 32
console.log("-------------------------------------------------------------");


//! Метод sort()
console.warn("Синтаксис методу sort():");
//? ✴️ Метод sort() сортує елементи масиву,
//? але на відміну від інших методів перебирання,
//? він сортує вихідний масив.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Сортує і змінює вихідний (оригінальний) масив.
//? 🔸 Повертає змінений масив, тобто посилання на відсортований вихідний (оригінальний) масив.
//? 🔸 За замовчуванням сортує за зростанням.❗️
//? 🔸 Сортування відбувається шляхом приведення значень
//?    до рядка і порівняння порядкових номерів у таблиці Unicode.
console.log(
    `%c
    массив.sort();
    `,
    'color: blue; font-size: 18px',
);


//! Свій порядок сортування чисел
console.warn("Свій порядок сортування чисел:");
//? ✳️ Для зазначення свого порядку сортування методу sort(compareFunction)
//? потрібно передати колбек-функцію з двома параметрами.
//? Це функція порівняння (compare function),
//? порядок сортування залежить від її результату.
//? Метод sort() буде викликати її для двох довільних елементів.
console.log(
    `%c
    массив.sort((a, b) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);
//? 🔸 a - перший елемент для порівняння.
//? 🔸 b - другий елемент для порівняння.
//? ✴️ Якщо виклик compareFunction(a, b)
//? повертає будь-яке від'ємне значення,
//? тобто a менше b,
//? сортування поставить a перед b.
//? Це сортування за зростанням.
//? ✳️ Якщо виклик compareFunction(a, b) поверне 0, 
//? сортування залишить a і b незмінними 
//? по відношенню один до одного, 
//? але відсортує їх по відношенню до всіх інших елементів. 
//? Але взагалі неважливо, що повертати, 
//? якщо їх взаємний порядок не має значення.
const scores4 = [27, 2, 41, 4, 7, 3, 75];
const ascendingScores4Old = [...scores4].sort();
const ascendingScores4New = [...scores4].sort((a, b) => a - b);
const descentingScores4New = [...scores4].sort((a, b) => b - a);

console.log("scores4:", scores4); //! [27, 2, 41, 4, 7, 3, 75]
console.log("ascendingScores4Old:", ascendingScores4Old);  //! [2, 27, 3, 4, 41, 7, 75]
console.log("ascendingScores4New:", ascendingScores4New);  //! [2, 3, 4, 7, 27, 41, 75]
console.log("descentingScores4New:", descentingScores4New);  //! [75, 41, 27, 7, 4, 3, 2]

//! Свій порядок сортування рядків
console.warn("Свій порядок сортування рядків:");
//? ✴️ Для сортування рядків в алфавітному порядку, 
//? за зростанням або спаданням, 
//? використовується метод рядків localeCompare().
console.log(
    `%c
    firstString.localeCompare(secondString)
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------------------");

// /? ✳️ Він викликається на рядку,
//? який потрібно порівняти (firstString) з тим,
//? що був переданий йому як аргумент (secondString).
console.log('"a".localeCompare("b"):', "a".localeCompare("b")); //! -1
console.log('"b".localeCompare("a"):', "b".localeCompare("a")); //! 1
console.log('"a".localeCompare("a"):', "a".localeCompare("a")); //! 0
console.log('"b".localeCompare("b"):', "b".localeCompare("b")); //! 0
//? 🔸 Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
//? 🔸 Повертає додатне значення більше нуля, якщо firstString повинен бути після secondString.
//? 🔸 Якщо рядки однакові, повертається нуль.
console.log("-------------------------------------------------------------------------------");

//? ✳️ Це зручно використовувати для сортування рядків,
//? оскільки метод sort() очікує такі самі значення від колбек-функції.
const students2 = ["Віка", "андрій", "Олег", "юля", "Борис", "катя"];
console.log("students2:", students2); //! ['Віка', 'андрій', 'Олег', 'юля', 'Борис', 'катя']

const inAlphabetOrder2Old = [...students2].sort();
console.log("inAlphabetOrder2Old:", inAlphabetOrder2Old); //! ['Борис', 'Віка', 'Олег', 'андрій', 'катя', 'юля']

const inAlphabetOrder2New = [...students2].sort((a, b) => a.localeCompare(b));
console.log("inAlphabetOrder2New:", inAlphabetOrder2New); //! ['андрій', 'Борис', 'Віка', 'катя', 'Олег', 'юля']

const inReversedOrder2New = [...students2].sort((a, b) => b.localeCompare(a));
console.log("inReversedOrder2New:", inReversedOrder2New); //! ['юля', 'Олег', 'катя', 'Віка', 'Борис', 'андрій']


//! Метод toSorted()
console.warn("Синтаксис методу toSorted():");
//? ✴️ Метод toSorted() працює також як метод sort(),
//? але на відміну від метод sort()
//? він НЕ змінює вихідний (оригінальний) масив,
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Повертає НОВИЙ відсортований масив.
//? 🔸 За замовчуванням сортує за зростанням.❗️
//? 🔸 Сортування відбувається шляхом приведення значень
//?    до рядка і порівняння порядкових номерів у таблиці Unicode.
console.log(
    `%c
    массив.toSorted();
    `,
    'color: blue; font-size: 18px',
);
console.log(
    `%c
    массив.toSorted((a, b) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);
//? 🔸 a - перший елемент для порівняння.
//? 🔸 b - другий елемент для порівняння.
//? ✴️ Якщо виклик compareFunction(a, b)
//? повертає будь-яке від'ємне значення,
//? тобто a менше b,
//? сортування поставить a перед b.
//? Це сортування за зростанням.
//? ✳️ Якщо виклик compareFunction(a, b) поверне 0, 
//? сортування залишить a і b незмінними 
//? по відношенню один до одного, 
//? але відсортує їх по відношенню до всіх інших елементів. 
//? Але взагалі неважливо, що повертати, 
//? якщо їх взаємний порядок не має значення.
const scores5 = [27, 2, 41, 4, 7, 3, 75];
console.log("scores5_before:", scores5); //! [27, 2, 41, 4, 7, 3, 75]
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const ascendingScores5 = scores5.toSorted((a, b) => a - b);
const descentingScores5 = scores5.toSorted((a, b) => b - a);

console.log("ascendingScores5:", ascendingScores5);  //! [2, 3, 4, 7, 27, 41, 75]
console.log("descentingScores5:", descentingScores5);  //! [75, 41, 27, 7, 4, 3, 2]

console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");
console.log("scores5_after:", scores5); //! [27, 2, 41, 4, 7, 3, 75]
console.log("-------------------------------------------------------------------------------");
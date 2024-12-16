console.log('Lesson-2 JS');

// Створити змінні для зберігання температури за Цельсієм та Фаренгейтом.Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.

// Створити змінну для зберігання кількості днів у місяці.Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.

// Створити змінні для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.

// Створити змінну для зберігання суми покупки в магазині.Застосувати знижку в розмірі 10 % до цієї суми за допомогою оператора множення та вивести результат в консоль.

// Створити змінну для зберігання числа з плаваючою комою.Використати метод Math.floor() для округлення числа до меншого та вивести результат в консоль.

// Створити змінну для зберігання рядка, який містить числа з плаваючою комою.Використати метод parseFloat() для перетворення рядка у десяткове число та вивести результат в консоль.

// Створити змінну для зберігання рядка, який містить ціле число.Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.

// Створити змінну для зберігання числа.Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.

// Створити змінні для зберігання цілочисельного значення та рядка з числом у вигляді рядка.Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.
// Потім використати метод toString() для перетворення цілочисельного значення у рядок та вивести результат в консоль.

// 1. Переведення температури з Цельсія у Фаренгейти
let celsius = 25; // температура в градусах Цельсія
let fahrenheit = (celsius * 9/5) + 32; // формула переведення в Фаренгейти
console.log(`Температура: ${celsius}°C = ${fahrenheit}°F`);

// 2. Кількість годин та хвилин у місяці
let daysInMonth = 30; // кількість днів у місяці
let hoursInMonth = daysInMonth * 24; // кількість годин у місяці
let minutesInMonth = hoursInMonth * 60; // кількість хвилин у місяці
console.log(`У ${daysInMonth} днях: ${hoursInMonth} годин або ${minutesInMonth} хвилин.`);

// 3. Рівень здоров'я та енергії гравця
let health = 100; // початковий рівень здоров'я
let energy = 80; // початковий рівень енергії
health -= 20; // зменшення рівня здоров'я
energy -= 15; // зменшення рівня енергії
console.log(`Здоров'я гравця: ${health}, Енергія гравця: ${energy}`);

// 4. Застосування знижки до суми покупки
let purchaseAmount = 500; // початкова сума покупки
let discount = 0.1; // знижка 10%
let discountedAmount = purchaseAmount * (1 - discount); // сума після знижки
console.log(`Сума покупки після знижки: ${discountedAmount} грн.`);

// 5. Округлення числа до меншого
let floatNumber = 7.89; // число з плаваючою комою
let roundedNumber = Math.floor(floatNumber); // округлення до меншого
console.log(`Округлене число: ${roundedNumber}`);

// 6. Перетворення рядка з числами з плаваючою комою у десяткове число
let floatString = "12.34"; // рядок з плаваючою комою
let parsedFloat = parseFloat(floatString); // перетворення рядка у десяткове число
console.log(`Перетворене десяткове число: ${parsedFloat}`);

// 7. Перетворення рядка з цілим числом у ціле число
let integerString = "42"; // рядок з цілим числом
let parsedInteger = parseInt(integerString); // перетворення рядка у ціле число
console.log(`Перетворене ціле число: ${parsedInteger}`);

// 8. Обчислення квадратного кореня числа
let number = 144; // число для обчислення квадратного кореня
let sqrtNumber = Math.sqrt(number); // обчислення квадратного кореня
console.log(`Квадратний корінь з ${number} дорівнює ${sqrtNumber}`);

// 9. Перетворення рядка з числом у ціле число та навпаки
let integerValue = 25; // цілочисельне значення
let stringWithNumber = "123"; // рядок з числом
let parsedNumber = parseInt(stringWithNumber); // перетворення рядка у ціле число
let stringFromInteger = integerValue.toString(); // перетворення цілого числа у рядок
console.log(`Перетворене ціле число з рядка: ${parsedNumber}`);
console.log(`Перетворене число у рядок: "${stringFromInteger}"`);





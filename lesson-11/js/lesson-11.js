//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ Створіть об'єкт "bankAccount" з трьома властивостями:
//?  "ownerName", "accountNumber", "balance"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "deposit",
//? який, використовуючи методи взаємодії з користувачем,
//? додає гроші на рахунок,
//? та виводить повідомлення про залишок на рахунку
//? дублюючи його в консоль.
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод "withdraw",
//? який, використовуючи методи взаємодії з користувачем,
//? дозволяє знімати гроші з рахунку,
//? якщо на рахунку достатньо коштів,
//? та виводить повідомлення про залишок на рахунку,
//? дублюючи його в консоль.
//? Якщо на рахунку не вистачає коштів, то він виводить повідомлення:
//? "⛔️ Не достатньо коштів на вашому рахунку!",
//? дублюючи його в консоль.
//? ✳️ За допомогою виклика методу "deposit" об'єкта "bankAccount" додай кошти на рахунок.
//? ✳️ За допомогою виклика методу "withdraw" об'єкта "bankAccount" зніми кошти з рахунку.
//! Код виконаного завдання

const bankAccount = {
    ownerName: "Josh Doe",
    accountNumber: "123-456-789",
    balance: 1000,

    deposit: function (amount) {
        this.balance += amount;
        console.log(`✅ Поповнено рахунок на ${amount}$. Залишок на рахунку: ${this.balance}$`);
    },


    withdraw: function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`✅ Знято ${amount}$. Залишок на рахунку: ${this.balance}$`);
        } else {
            console.log("⛔️ Не достатньо коштів на вашому рахунку!");
        }
    }
};
bankAccount.deposit(500); // Поповнити на 500$
bankAccount.deposit(200); // Поповнити на 200$

console.log("---");

bankAccount.withdraw(300); // Зняти 300$
bankAccount.withdraw(1500); // Спроба зняти більше, ніж на рахунку

console.log("--------------------------------------------------");


//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ Створіть об'єкт "weather" з трьома властивостями:
//? "temperature", "humidity", "windSpeed"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод,
//? який, використовуючи методи взаємодії з користувачем,
//? отримує значення температури та повертає "true",
//? якщо температура нижче 0 градусів Цельсія,
//? та "false", якщо температура вище або дорівнює 0 градусів Цельсія.
//? ✳️ Якщо метод повернув "true" вивести повідомлення
//? “Температура нижче 0 градусів Цельсія” і навпаки,
//? дублюючи ці повідомлення  в консоль.
//! Код виконаного завдання

const weather = {
    temperature: 10,
    humidity: 80,
    windSpeed: 10,

    isBelowZero() {
        return this.temperature < 0;
    }
};

if (weather.isBelowZero()) {
    console.log("❄️ Температура нижче 0 градусів Цельсія");
} else {
    console.log("☀️ Температура вище або дорівнює 0 градусів Цельсія");
}
console.log("--------------------------------------------------");


//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Створіть об’єкт "user" з трьома властивостями:
//? "name", "email", "password"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "login",
//? який який буде перевіряти правильність
//? введеного name, email та password на такі умови:
//?  - ім'я <name> містить не менше 3 символів,
//?  - електронна пошта <email> містить символ @ та крапку після неї,
//?  - пароль <password> містить не менше 6 символів.
//? ❌ Якщо введені дані не пройшли ці перевірки
//? треба вивести в консоль відповідні повідомлення з помилками(помилкою).
//? ✅ Якщо ВСІ введені дані пройшли перевірки,
//? треба послідовно вивести в косоль значення ВСІХ цих даних.
//! Код виконаного завдання

const user = {
    name: "Pavlo",
    email: "homework@gmail.com",
    password: "123777",
};

user.login = function() {
    let errors = [];
    
    if (this.name.length < 3){
        errors.push("⛔ Ім'я має містити не менше 3 символів!") 
    }

    if(!this.email.includes("@") || !this.email.includes(".")){
        errors.push("⛔ Неправильний формат email! Має містити '@' та '.'")
    }

    if (this.password.length < 6) {
        errors.push("⛔ Пароль має містити не менше 6 символів!");
    }

    if (errors.length > 0) {
        console.log("❌ Помилки при вході:")
        errors.forEach(error => console.log(error))
    } else {
        console.log("✅ Вхід успішний!");
        console.log(`👤 Ім'я: ${this.name}`);
        console.log(`📧 Email: ${this.email}`);
        console.log(`🔑 Пароль: ${this.password}`);
    }
};

user.login()

console.log("--------------------------------------------------");


//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ Створіть об'єкт "movie" з чотирма властивостями:
//? "title", "director", "year", "rating".
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод,
//? який повертає "true",
//? якщо рейтинг фільму вище 8,
//? та "false",
//? якщо рейтинг фільму 8 або нижче.
//? Послідовно вивести значення ВСІХ властивостей в косоль
//? Якщо метод повернув "true",
//? то колір тексту поля title в консолі повинен бути зелений.
//? Якщо метод повернув "false",
//? то колір тексту поля title в консолі повинен бути червоний.
//! Код виконаного завдання

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8
};

movie.isHighRated = function() {
    return this.rating > 8;
};



console.log("Title:", `%c${movie.title}`, `color: ${movie.isHighRated() ? 'green' : 'red'}`);
console.log("Director:", movie.director);
console.log("Year:", movie.year);
console.log("Rating:", movie.rating);
console.log("Is high rated?", movie.isHighRated()); // true або false

console.log("--------------------------------------------------");

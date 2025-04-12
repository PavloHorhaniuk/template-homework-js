const petro = {
    username: "Petro",
    showThis() {
        console.log(this);
    },
    showName() {
        console.log(this.username);
    },
};

petro.showThis(); //! {username: "Petro", showThis: ƒ, showName: ƒ}
petro.showName(); //! 'petro'


//! Приклад визначення this в методі об'єкта всередині стрілочної функції
console.warn("Приклад визначення this в методі об'єкта всередині стрілочної функції:");
//todo: Створюємо об'єкт user4:
const user4 = {
    username: "Mango",
    showThis4() {
        console.log("this in showThis4: ", this); //! {username: 'Mango', showThis4: ƒ}
        console.log("username in showThis2: ", this.username); //! Mango
        console.log("`  `  `  `  `  `  `  `  `  `  `");

        const foo = () => { 
            console.log("this in function foo():", this); //! {username: 'Mango', showThis4: ƒ}
            console.log("username by this in function foo():", this.username); //! Mango
            console.log("username in function foo():", user4.username); //! Mango
        };
        foo(); //! Mango
    },
};
console.log("user4:", user4); //! {username: 'Mango', showThis2: ƒ}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

user4.showThis4();
//! this in showThis4: {username: 'Mango', showThis4: ƒ}
//! username in showThis2: Mango
//!  `  `  `  `  `  `  `  `  `  `  `
//! this in function foo(): {username: 'Mango', showThis4: ƒ}
//! username by this in function foo(): Mango
//! username in function foo(): Mango
console.log("---------------------------------------------------------------------------------------------");


const animal = {
    legs: 4,
};
console.log("animal:", animal); //! {legs: 4}

const dog = Object.create(animal);
dog.name = "Манго";

console.log("dog:", dog); //! {name: 'Манго', 🔻 [[Prototype]]: Object ▶️ legs:4}
console.log("animal.isPrototypeOf(dog):", animal.isPrototypeOf(dog)); //! true

//! Метод hasOwnProperty()
console.warn("Метод hasOwnProperty():");
//? ✳️ Після того як ми дізналися
//? про спосіб пошуку властивостей об'єкта,
//? повинно бути зрозуміло,
//? чому цикл for...in не розрізняє
//? властивості об'єкта і його прототипу.
console.log("dog:", dog); //! {name: 'Манго', 🔻 [[Prototype]]: Object ▶️ legs:4}
console.log("`  `  `  `  `  `  `  `");
for (const key in dog) {
    console.log(`${key}: ${dog[key]}`);
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."); 


//? ✴️❗️ Саме тому ми використовуємо 
//? метод obj.hasOwnProperty(prop), 
//? який повертає true, 
//? якщо властивість prop належить об'єкту obj, 
//? а не його прототипу, 
//? інакше - false.
//? ✴️✅ Повертає true тільки для власних властивостей:
console.log('dog.hasOwnProperty("name"):', dog.hasOwnProperty("name")); //! true
console.log('dog.hasOwnProperty("legs"):', dog.hasOwnProperty("legs")); //! false
console.log("`  `  `  `  `  `  `  `  `  `  `  `");

//? ✴️✅✅ Повертаємо true тільки для власних властивостей
//? за допомогою Цикла for...in:
for (const key in dog) {
    //todo: Якщо це власна властивість - виконуємо тіло if
    if (dog.hasOwnProperty(key)) {
        console.log(`${key}: ${dog[key]}`); //! name: Манго
    };
    //todo: Якщо це невласна властивість - нічого не робимо
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//! Оголошення класу
console.warn("Оголошення класу:");
//? ✴️ Оголошення класу починається з ключового слова class, 
//? після якого стоїть ім'я класу і фігурні дужки - його тіло. 
//? Класи прийнято називати з великої літери, 
//? а у назві відображати тип об'єкта (іменника), що створюється.
class User {
    //todo: Тіло класу
};
console.log("User:", User); //! {}
console.log("---------------------------------------------------------------------------------");


//! Екземпляр класу
console.warn("Екземпляр класу:");
//? ✴️ Результат виклику new User() 
//? - це об'єкт, який називається екземпляром класу, 
//? тому що містить дані і поведінку, що описуються класом.
const mango = new User();
console.log("mango:", mango); //! {}

const poly = new User();
console.log("poly:", poly); //! {}
console.log("---------------------------------------------------------------------------------");


//! Конструктор класу
console.warn("Конструктор класу:");
//? ✴️ Для ініціалізації екземпляра в класі є метод constructor. 
//? Якщо він неоголошений, створюється конструктор за замовчуванням 
//? - порожня функція, яка не змінює екземпляр.
class User1 {
    //todo:  Синтаксис оголошення методу класу:
    constructor(name, email) {
        //todo: Ініціалізація властивостей екземпляра:
        this.name = name;
        this.email = email;
    };
};
console.log("User1:", User1); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const mango1 = new User1("Манго", "mango@mail.com");
console.log("mango1:", mango1); //! User1 {name: 'Манго', email: 'mango@mail.com'}

const poly1 = new User1("Поли", "poly@mail.com");
console.log("poly1:", poly1); //! User1 {name: 'Поли', email: 'poly@mail.com'}
console.log("---------------------------------------------------------------------------------");


//! Об'єкт параметрів
console.warn("Об'єкт параметрів:");
//? ✴️ Клас може приймати велику кількість вхідних даних 
//? для властивостей майбутнього об'єкта. 
//? Тому, до них також можна застосувати патерн «Об'єкт параметрів», 
//? передаючи один об'єкт з логічно іменованими властивостями, 
//? замість непов'язаного набору аргументів.
class User2 {
    //todo: Синтаксис оголошення методу класу:
    //todo: Деструктуризуємо об'єкт:
    constructor({ name, email, phone }) {
        //todo: Ініціалізація властивостей екземпляра:
        this.name = name;
        this.email = email;
        this.phone = phone;
    };
};
console.log("User2:", User2); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const mango2 = new User2({
    name: "Манго",
    email: "mango@mail.com",
    phone: "111-11-11",
});
console.log("mango2:", mango2); //! User2 {name: 'Манго', email: 'mango@mail.com', phone: '111-11-11'}

const poly2 = new User2({
    name: "Поли",
    email: "poly@mail.com",
    phone: "222-22-22",
});
console.log("poly2:", poly2); //! User2 {name: 'Поли', email: 'poly@mail.com', phone: '222-22-22'}
console.log("---------------------------------------------------------------------------------");


//! Методи класу
console.warn("Методи класу:");
//? ✴️ Для роботи з властивостями майбутнього екземпляра 
//? використовуються методи класу - функції,
//? які будуть доступні екземпляру в його прототипі.
class User3 {
    //todo: Синтаксис оголошення методу класу:
    //todo: Деструктуризуємо об'єкт:
    constructor({ name, email, phone }) {
        //todo: Ініціалізація властивостей екземпляра:
        this.name = name;
        this.email = email;
        this.phone = phone;
    };

    //todo: Метод getEmail()
    getEmail() {
        return this.email;
    };

    //todo: Метод changeEmail()
    changeEmail(newEmail) {
        this.email = newEmail;
    };
};
console.log("User3:", User3); //!ц
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const mango22 = new User3({
    name: "Манго",
    email: "mango@mail.com",
    phone: "111-11-11",
});
console.log("mango1_before:", mango22); //! User1 {name: 'Манго', email: 'mango@mail.com', phone: '111-11-11'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log("email_before:", mango22.getEmail()); //! email_before: mango@mail.com
mango22.changeEmail("mango-NEW@mail.com");

console.log("email_after:", mango22.getEmail()); //! email_after: mango-NEW@mail.com
console.log("mango1_after:", mango22); //! User1 {name: 'Манго', email: 'mango-NEW@mail.com', phone: '111-11-11'}
console.log("---------------------------------------------------------------------------------------");


//! Геттери і сеттери
console.warn("Геттери і сеттери:");
//? ✴️ Геттери і сеттери
//? - це коротший синтаксис оголошення методів
//? для взаємодії з властивостями.
//? Геттер і сеттер імітують звичайну публічну ❗️ВЛАСТИВІСТЬ❗️ класу,
//? але дозволяють змінювати інші властивості зручнішим способом.
//? Геттер виконується при спробі отримати значення властивості,
//? а сеттер - при спробі його змінити.
//? ✳️ Геттери і сеттери доречно використовувати
//? для простих операцій читання і зміни значення властивостей,
//? особливо приватних, як їх публічний інтерфейс.
//? ❗️❗️❗️Для роботи з властивістю, яка зберігає масив або об'єкт,
//? вони не підійдуть.
class User4 {
    //todo: Обов'язкове оголошення приватних властивостей
    #email;

    //todo: Синтаксис оголошення методу класу:
    //todo: Деструктуризуємо об'єкт:
    constructor({ name, email, phone }) {
        //todo: Ініціалізація властивостей екземпляра:
        this.name = name;
        this.#email = email;
        this.phone = phone;
    };

    //todo: ❌ Метод getEmail()
    getEmail() {
        return this.#email;
    };

    //todo: ❌ Метод changeEmail()
    changeEmail(newEmail) {
        this.#email = newEmail;
    };

    //todo: ✅ Геттер email
    get email() {
        return this.#email;
    }

    //todo:✅ Сеттер email
    set email(newEmail) {
        if (newEmail === "") {
            console.error("Помилка! Пошта не може бути порожнім рядком!");
            return;
        };

        this.#email = newEmail;
    };
};
console.log("User4:", User4); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const mango3 = new User4({
    name: "Манго",
    email: "mango@mail.com",
    phone: "111-11-11",
});
console.log("mango3_before:", mango3); //! User3 {name: 'Манго', phone: '111-11-11', #email: 'mango@mail.com'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: ❌ Використання методів: getEmail() і changeEmail():
console.log("email_before1:", mango3.getEmail()); //! email_before: mango@mail.com
mango3.changeEmail("mango-NEW@mail.com");
console.log("email_after1:", mango3.getEmail()); //! email_after: mango-NEW@mail.com

//todo: ✅ Використання геттера і сеттера: get email() і set email():
//? ✳️ Ми оголосили геттер і сеттер email,
//? поставивши перед ім'ям властивості ключові слова get і set.
//? Всередині цих методів ми або повертаємо значення
//? приватної властивості #email, або змінюємо її значення.
//? Геттер і сеттер ❗️застосовуються в парі і повинні називатися однаково❗️.
console.log("email_before2:", mango3.email); //! email_after1: mango-NEW@mail.com
mango3.email = "mango-SET@mail.com";
console.log("email_after2:", mango3.email); //! email_after2: mango-SET@mail.com

console.log("mango3_after:", mango3); //! User3 {name: 'Манго', phone: '111-11-11', #email: 'mango-SET@mail.com'}
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."); 

//? ✳️ Ще одна перевага в тому, що це методи,
//? а значить, під час запису можна виконати додатковий код,
//? наприклад, з будь-якими перевірками,
//? на відміну від виконання цієї ж операції безпосередньо з властивістю.
mango3.email = ""; //! Помилка! Пошта не може бути порожнім рядком!
console.log("---------------------------------------------------------------------------------------");

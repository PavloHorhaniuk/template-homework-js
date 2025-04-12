//! Створення елементів
console.warn("Створення елементів:");
//? ✴️ Створює елемент з ім'ям tagName 
//? і повертає посилання на нього 
//? як результат свого виконання. 
//? tagName - це рядок, 
//? що вказує тип елемента, який створюється. 
//? Елемент створюється в пам'яті, в DOM його ще немає.
console.log(
    `%c
    🔸 document.createElement(tagName);
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");

//todo:
const heading = document.createElement("h1");
console.log("heading:", heading); //! <h1></h1>

heading.textContent = "This is a heading";
console.log("heading:", heading); //! <h1>This is a heading</h1>

const image = document.createElement("img");
image.src = "https://picsum.photos/id/17/320/240";
image.alt = "Nature";
image.setAttribute("alt", "Amazing nature");
console.log("image:", image); //! <img src="https://picsum.photos/id/17/320/240" alt="Nature" />
console.log("--------------------------------------------------------------------------------------------");


//! Додавання елементів
console.warn("Додавання елементів:");
console.log(
    `%c
    🔸 element.append(el1, el2, ...) - після всіх дітей елемента
    🔸 element.prepend(el1, el2, ...) - перед усіма дітьми елемента
    🔸 element.after(el1, el2, ...) - після елемента
    🔸 element.before(el1, el2, ...) - перед елементом
    `,
    'color: blue; font-size: 16px',
);
//? ✴️ Щоб створений елемент відображався на сторінці,
//? його необхідно додати до вже існуючого елемента в DOM-дереві.
//? Припустимо, що додаємо до певного елемента element,
//? для цього існують такі методи:
//? 🔸 element.append(el1, el2, ...) - додає один або декілька елементів
//?    ❗️після всіх дітей елемента element❗️.
//? 🔸 element.prepend(el1, el2, ...) - додає один або декілька елементів
//?    ❗️перед усіма дітьми елемента element❗️.
//? 🔸 element.after(el1, el2, ...) - додає один або декілька елементів
//?    ❗️після елемента element❗️.
//? 🔸 element.before(el1, el2, ...) - додає один або декілька елементів
//?    ❗️перед елементом element❗️.
//? ✴️ У всіх цих методах el - це елементи або рядки, в будь-якому поєднанні і кількості. Рядки додаються як текстові вузли.
const list1 = document.querySelector(".usernames");

//todo: Додає елемент до кінця списку.
const lastItem1 = document.createElement("li");
lastItem1.textContent = "Poly-1";
list1.append(lastItem1);

const lastItem2 = document.createElement("li");
lastItem2.textContent = "Poly-2";
list1.appendChild(lastItem2);

//? ✴️ Різниця appendChild() та append()
//? Метод.append()схожий, але він:
//?   ✅ Приймає відразу кілька елементів або рядки
//?   ✅ Не повертає доданий елемент
//?   ✅ Працює з текстом без createTextNode()

//todo: Додає елемент на початок списку.
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list1.prepend(firstItem);

//todo: Додає елемент після списку.
const afterElement = document.createElement("a");
afterElement.textContent = "Read more...";
list1.after(afterElement);

//todo: Додає елемент перед списком.
const beforeElement = document.createElement("h3");
beforeElement.textContent = "Usernames";
list1.before(beforeElement);

//? ✳️ Якщо елемент для додавання вже знаходиться в DOM, 
//? то він видаляється зі свого старого місця і додається у нове. 
//? З цього випливає правило - один і той самий елемент 
//? не може бути одночасно у двох місцях.
console.log("--------------------------------------------------------------------------------------------");


//! Видалення елементів
console.warn("Видалення елементів:");
console.log(
    `%c
    🔸 element.remove()
    `,
    'color: blue; font-size: 16px',
);
//? ✴️ Для того, щоб видалити елемент,
//? використовується метод ❗️remove()❗️. 
//? Він викликається на елементі elem, 
//? який необхідно видалити.
const text = document.querySelector('.text1');
text.remove();
console.log("--------------------------------------------------------------------------------------------");


//! 3.Властивість innerHTML
//? ✴️ Ще один спосіб створити DOM-елементи
//? і помістити їх в дерево
//? - це використовувати рядки з тегами
//? і дозволити браузеру зробити всю важку роботу.
//? У такого підходу є свої плюси і мінуси.


//! Читання
console.warn("Читання:");
//? ✴️ Властивість innerHTML зберігає вміст елемента, 
//? включно з тегами, у вигляді рядка. 
//? Значення, що повертається, - це завжди валідний HTML-код.
const article31 = document.querySelector(".article31");
console.log("article.innerHTML:", article31.innerHTML);

const title31 = document.querySelector(".article31 .title31");
console.log("title31.innerHTML:", title31.innerHTML);
console.log("title31:", title31);


const text31 = document.querySelector(".article31 .text31");
console.log("text.innerHTML:", text31.innerHTML);

const link31 = document.querySelector(".article31 .link31");
console.log("link.innerHTML:", link31.innerHTML);
console.log("-----------------------------------------------------------------------------------------");


//! Зміна/видалення
console.warn("Зміна/видалення:");
//? ✴️ Властивість innerHTML доступна
//? і для читання, і для запису.
//? Якщо записати в неї рядок з HTML-тегами,
//? то браузер під час парсингу рядка
//? перетворить їх у валідні елементи і додасть в DOM-дерево.
console.log(
    `%c
    title32.innerHTML = '<span class="accent">Replacement</span>';
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const title32 = document.querySelector(".article32 .title32");
title32.innerHTML = '<span class="accent">Replacement</span>';


//? ✴️ Якщо у властивість innerHTML записати порожній рядок,
//? то вміст елемента буде очищено.
//? Це простий і швидкий спосіб видалення всього вмісту.
console.log(
    `%c
    link32.innerHTML = "";
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const link32 = document.querySelector(".article32 .link32");
link32.innerHTML = "";
console.log("-----------------------------------------------------------------------------------------");


//! Шаблонізація
console.warn("Шаблонізація:");
//? ✴️ За такого підходу,
//? на відміну від document.createElement(),
//? ми не отримуємо посилання на створений DOM-елемент.
//? Це перший крок на шляху до шаблонізації
//? - створення великої кількості однотипної розмітки
//? з різними даними за наперед визначеним шаблоном.
//? Наприклад, як у списку товарів інтернет магазину тощо.
//? ✳️ Однотипна (шаблонна) розмітка
//? створюється із масиву даних.
//? Прийом полягає у перебиранні цього масиву
//? і складанні одного рядка з HTML-тегами,
//? який потім записуємо в innerHTML елемента.
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const technologies = ["C#", "C++", ".NET", "PHP", "Python", "Java", "SQL", "Django", "C", "iOS"];
const list33 = document.querySelector(".list33");

const markup = technologies
    .map((technology) => `<li class="list-item">${technology}</li>`)
    .join("");

//todo: У консолі бачимо один рядок з HTML-тегами:
console.log("markup:", markup);

//todo: Додаємо всю розмітку за одну операцію.
list33.innerHTML = markup;
console.log("-----------------------------------------------------------------------------------------");


//! Додавання
console.warn("Додавання:");
//? ✴️ Зміна elem.innerHTML повністю видалить
//? і повторно створить всі нащадки елемента elem.
//? Якщо елемент спочатку не був порожній,
//? то виникнуть додаткові витрати на серіалізацію
//? вже існуючої розмітки, а це погано.
console.log(
    `%c
    article34.innerHTML += htmlString;
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const article34 = document.querySelector(".article34");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
<a class="link" href="#">Read more...</a>`;

//todo: Додаємо розмітку до вже існуючої за одну операцію.
// article34.innerHTML = htmlString; //todo: видаляє всі елементи та додає htmlString
article34.innerHTML += htmlString; //todo: додає htmlString до вже існуючих елементів
// article34.innerHTML = article34.innerHTML + htmlString;

//? ✴️ Використовуйте властивість elem.innerHTML 
//? для додавання тільки тоді, 
//? коли елемент elem - порожній, 
//? або якщо потрібно повністю замінити його вміст.
console.log("-----------------------------------------------------------------------------------------");


//! Метод insertAdjacentHTML()
console.warn(`Метод insertAdjacentHTML(): \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_18/images/insert-adjacent.png"}`);
//? ✴️ Метод insertAdjacentHTML() - це сучасний метод для додавання рядка 
//? з HTML-тегами перед, після або всередину елемента. 
//? Вирішує проблему innerHTML з повторною серіалізацією 
//? вмісту елемента під час додавання розмітки до вже існуючої.
console.log(
    `%c
    elem.insertAdjacentHTML(position, string);

        🔸 "beforebegin" - перед elem
        🔸 "afterbegin" - всередині elem, перед усіма дітьми
        🔸 "beforeend" - всередині elem, після усіх дітей
        🔸 "afterend" - після elem
    `,
    'color: blue; font-size: 16px',
);
//? ✴️ Аргумент position - це рядок,
//? позиція щодо елемента elem.
//? Приймає одне з чотирьох значень:
//? 🔸 "beforebegin" - перед elem
//? 🔸 "afterbegin" - всередині elem, перед усіма дітьми
//? 🔸 "beforeend" - всередині elem, після усіх дітей
//? 🔸 "afterend" - після elem
//? ✳️❗️❗️❗️ "beforebegin" і "afterend" працюють тільки тоді,
//? коли elem вже знаходиться в DOM-дереві.
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const list4 = document.querySelector(".list4");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup1 = newTechnologies
    .map((technology) => `<li class="list-item new">${technology}</li>`)
    .join("");
const content = "Popular technologies"


list4.insertAdjacentHTML("beforebegin", `<h3>${content}</h3>`);
list4.insertAdjacentHTML("afterbegin", '<li class="list-item new">C++</li>');
list4.insertAdjacentHTML("beforeend", markup1);
list4.insertAdjacentHTML("afterend", '<a class="link4" href="">Read more...</a>');
console.log("----------------------------------------------------------------------------------");
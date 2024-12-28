// Створити розмітку з формою з полями введення та кнопкою.
// При натисканні на кнопку перевіряти, чи введені дані правильно заповнені,
// якщо так, то перенаправляти на іншу сторінку, якщо ні — виводити
// повідомлення про помилку.Правильно заповнені
// дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.


function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name.length < 3) {
        alert("Ім'я повинно містити не менше 3 символів.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Email має містити символ @ та крапку.");
        return false;
    }

    if (password.length < 6) {
        alert("Пароль має містити не менше 6 символів.");
        return false;
    }

 
    window.location.href = "https://example.com";
    return false; 

}
//
// Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

// let forma = document.forms.forma;
// let nameInput = forma.name;
// let surnameInput = forma.surname;
//
// forma.addEventListener('submit', e => {
//
//     let name = nameInput.value;
//     let surname = surnameInput.value;
//     let user = {
//         name: name,
//         surname: surname
//     };
//     let jsonUser = JSON.stringify(user);
//     localStorage.setItem('user', jsonUser);
// });
// forma.onsubmit =function (ev){
//
//     // ev.preventDefault()
//     console.log(ev)
//     console.log(ev.target.name.value)
//     console.log(ev.target.surname.value)

// }


//     - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

const forma1 = document.forms.forma1;

forma1.addEventListener('submit', e => {
    e.preventDefault()
    const resp = localStorage.getItem('products');
    let products = [];

    if (resp) {
        products = JSON.parse(resp)
    }

    const obj = {
        tovar: e.target.Tovar.value,
        quantity: e.target.Quantity.value,
        price: e.target.Price.value,
        image: e.target.img.value
    }
    products.push(obj);
    localStorage.setItem('products', JSON.stringify(products));
});
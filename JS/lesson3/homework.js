// - створити функцію яка обчислює та повертає площу прямокутника висотою

let a1 = 2;
let a2 = 16;
let a3 = 4;
let a4 = 5;
let a5 = 15;

function rectangle(a1, a4) {
    return a1 * a4;
}

console.log(rectangle(a1, a4));

//- створити функцію яка обчислює та повертає площу кола

let pi = 3.14;
let r = 4;

function circle(pi, r) {
    return pi * (r * 2);
}

console.log(circle(pi, r));

//- створити функцію яка обчислює та повертає площу циліндру

let h = 5;

function cylinder(pi, h, r) {
    return 2 * pi * r * (h + r);
}

console.log(cylinder(pi, h, r));

// -створити
// функцію
// яка
// приймає
// будь - яку
// кількість
// чисел, повертає
// найменьше, а
// виводить
// найбільше(Math
// використовувати
// заборонено
// )
// ;


//створити функцію яка  створює блок з текстом. Текст задати через аргумент

function message(text) {
    document.write(
        `<div>
<p>${text}</p>

</div>`);
};

message('створити функцію яка  створює блок з текстом. Текст задати через аргумент');

//створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list(text1) {
    document.write(
        `<ul>
            <li>${text1}</li>
            <li>${text1}</li>
            <li>${text1}</li>
        </ul>`
    )
};

list('створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий');

// створити
// функцію
// яка
// створює
// ul
// з
// трьома
// елементами
// li.Текст
// li
// задати
// через
// аргумент
// всім
// однаковий.Кількість
// li
// визначається
// другим
// аргументом, який
// є
// числовим(тут
// використовувати
// цикл
//)

function list(text1, count) {
    document.write(
        `<ul>
            <li>${text1}</li>
            <li>${text1}</li>
            <li>${text1}</li>
        </ul>`
    )
    for (count = 0; count < list; count++) {
       document.write(count ${text1});
    }
};
list('створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий', 5);
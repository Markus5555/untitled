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
function min_max(){
    let max = arguments[0];
    let min = arguments[0];
    for (y = 0; y < arguments.length; y++){
        if(arguments[y] > max){
            max = arguments[y];
        }
        if (arguments[y] < min){
            min = arguments[y];
        }
    };
    console.log(max);
    return min;
}

console.log(min_max(22, 33, 44, 55, -10))

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

function list1(text2, count) {
    document.write('<ul>');

    for (let p = 0; p < count; p++){
        document.write(`<li>${p} -- ${text2}</li>`)
    }

    document.write('</ul>');
}
list1('створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий', 5);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


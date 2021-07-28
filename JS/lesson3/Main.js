function createDiv(header, text) {
    document.write(
        `<div>
<h1>${header}</h1>
<p>${text}</p>

</div>`);
}

createDiv('Hello Okten', 'sadfefsdf');
createDiv('Hello World', 'werwerwerwe');
createDiv("Hi everyone", 'werwerwrwww');

function increment1(a) {
    ++a
    console.log(a);
}

let x = 0;
increment1(x);
console.log(x);

let xRef = {z: 0};

function increment2(foo) {
    foo.z++;
    console.log(foo);
}

increment2(xRef);
console.log(xRef);

// ретурн, если нужно использовать результат
function calc(a, b) {
    return a + b
}

let calc1 = calc(10, 20);
console.log(calc1);

function foobar() {
    document.write('Lorem ipsum dolor sit amet, consectetur adipisicing.');
    return 'This is return function'
}

console.log(foobar());



// function calculator(a, b, action) {
//     let res = 'error';
//     if (action === '+') {
//         res = (a + b);
//     } else if (action === '-') {
//         res = (a - b);
//     }
//     return res;
// }
// calculator(100, 200, '+');
//
// function calculator2(a, b, action) {
//     let res = 'error';
//     if (action === 'add') {
//         res = (a + b);
//     } else if (action === 'minus') {
//         res = (a - b);
//     }
//     return res;
// }

let add = function(a,b){return a+b};
//фанкшен экспрешн должен быть выше для правильной работы
calculator2(200, 300, add);function calculator(a, b, action) {
    let res = 'error';
    if (action === '+') {
        res = add(a,b);
    } else if (action === '-') {
        res = minus(a,b);
    }
    return res;
}

console.log(calculator(100, 200, '+'));

function calculator2(a, b, action) {
    let res = 'error';
    if (action === 'add') {
        res = add(a,b);
    } else if (action === 'minus') {
        res = minus(a,b);
    }
    return res;
}

console.log(calculator2(200, 300, 'add'));;

// function add(a,b){return a+b};
function minus(a,b){return a-b};

// Hoisting

// let ok10 = "okten";
// console.log(ok10[2]);


//Функции, которые влияют на первичный объект
//deletedItems - массив в который отправляются удаленные объекты с помощью поп и шифт
let deletedItems = [];
let numbers = [11, 22, 33, 44, 55];
console.log(numbers);
numbers.push('abc');
console.log(numbers);
numbers.unshift('def');
console.log(numbers);
let pop = numbers.pop();
deletedItems.push(pop);
console.log(pop);
console.log(numbers);
let shift = numbers.shift();
deletedItems.push(shift);
console.log(shift);
console.log(numbers);
console.log(deletedItems);
numbers.push([1,2,3,4,5]);
console.log(numbers);

//Функции, которые не влияют на первичный объект
let slice = numbers.slice(1,4);
console.log(slice);

let splice = numbers.splice(1,3, 'adf', 'qwerty');
console.log(splice);
console.log(numbers);

let str = 'okten okten';
let replaceAll = str.replaceAll('o', '!');
console.log(replaceAll);
console.log(str);

let startsWith = str.startsWith('ok');
console.log(startsWith);

let endsWith = str.endsWith('en');
console.log(endsWith);

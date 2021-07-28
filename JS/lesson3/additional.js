// створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


let b = [2, 3, 4, 5, 6];
let a = [1, 2, 3, 4, 5];

function sumArray(a, b) {
    let c = [];
    for (let i = 0; i < a.length; i++) {
        c.push(a[i] + b[i]);
    }
    return c;
}

console.log(sumArray(a, b));

//- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

let d = ['a', 'b', 'c', 'c', 'c', 'c'];
let f = [1, 2, 3]

function addNum(asd, qwe) {
    let g = [...asd, ...qwe];
    return g;
}


let asdfg = addNum(d, f)
console.log(asdfg)

// Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].


let t = [1, 2, 3]

function abc(rev) {
    let y = []
    for (const revElement of rev) {
        y.unshift(revElement)
    }
    return y;
}

console.log(abc(t));

// Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let h = [1,2,3];
// let r = [4,5,6]
// function fill(add, plus){
//     return [...add, ...plus];
// }
// let qwert = addNum(h, r);
// console.log(qwert);

// Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let h = [1, 2, 3];
let r = [4, 5, 6]

function fill(add, plus) {
    for (let i = plus.length - 1; i >= 0; i--) {
        add.unshift(plus[i])
    }
}

fill(h, r);
console.log(h);

// Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5]
// let z = [1,2,3,4,5];
// let shift1 = z.shift()
// let shift2 = z.shift()
// let shift3 = z.shift()
// console.log(z);

// Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2]

let z = [1, 2, 3, 4, 5];
let shift1 = z.pop()
let shift2 = z.pop()
let shift3 = z.pop()
console.log(z);

// Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c']
let s = [1, 2, 3, 4, 5]
s.splice(3, 4, 'a', 'b', 'c')
console.log(s);

// Дано список імен.
//     let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
//
// function sdf(name) {
//     name = name.split(' ');
//     name = name.filter(char => !!char);
//     name = name.join(' ');
//     return name
// }
//
// let normName = sdf(n1)
// console.log(normName)

let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '


function sdf(name) {
    return name.split(' ').filter(char => !!char).join(' ');
}
let normName1 = sdf(n1)
console.log(normName1)

let normName2 = sdf(n2)
console.log(normName2)

let normName3 = sdf(n3)
console.log(normName3)


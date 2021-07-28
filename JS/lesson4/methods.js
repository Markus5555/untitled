let Mark = {
    name: 'Mark',
    age: 33,
    study: function () {
        console.log(this.name, 'studding for', this.age - 7, 'years!')
    }
}
Mark.study()

class Student {
    constructor(name, age, courses) {
        this.age = age;
        this.courses = courses;
        this.name = name;
        this.status = 'student';
    }

    study() {
        console.log(this.name, 'studding for', this.age - 7, 'years!')
    }

    direction() {
        console.log(this.name, 'choose to learn', this.courses)
    }

    work() {
        console.log('Tap tap tap')
    }
}

const mark = new Student('Mark', 33, 'JS');
const oleg = new Student('Oleg', 34, 'Python');
const jenya = new Student('Evgeniy', 30, 'Java');
const vasya = new Student('Vasiliy', 33, 'Python');
// const katya = new Student('Ekaterina', 29, 'JS');

console.log(mark)
console.log(oleg)
console.log(jenya)
console.log(vasya)
// console.log(katya)

mark.study();
// katya.study();

mark.direction();
oleg.direction();


class Developer extends Student {
    constructor(name, age, courses, skill) {
        super(name, age, courses)
        this.skill = skill;
    }

    study() {
        console.log('I hate it, but I need it')
    }

    work() {
        super.work();
    }
}

const katya = new Student('Ekaterina', 29, 'JS');
const Ira = new Developer('Irina', 24, 'JavaSckript', 'JS');
Ira.study();
katya.study();
Ira.work();


//let names = ['Irka', 'Kolya', 'Lilya', 'Petro', 'Fedor', 'Lyuba'];
//let numbers = [1, 2, 33, - 50, 14, 12345, 0, 87];
//let strings = numbers.sort((a,b) => {
// console.log(a);
// console.log(b);
//возростание
// return a - b;
// убывание
// return b - a;

//});

//console.log(strings);
let names = ['Irka', 'Kolya', 'Lilya', 'Petro', 'Fedor', 'Lyuba'];
let strings2 = names.sort();
console.log(strings2);
//убывание
// let strings = names.sort((a, b) =>{
//    if (a>b){
//     return -1}
//    return 1
// });
// console.log(strings);
names.forEach(function (name) {
    if (name.length >= 5) {
        return;
    }
    console.log(name);
    console.log('--------------------');
});

let map = names.map(function (value, index) {
    return {
        name: value,
        id: index + 1
    }

});


//ClassWork

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Order {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let client = [
    new Order(1, 'Jenya', 'Konev', '234ff', '09097986', ['tovar1', 'tovar2', 'tovar3']),
    new Order(2, 'Ira', 'Vasina', '123@gmail.com', '09876655', ['tovar1', 'tovar2', 'tovar3']),
    new Order(3, 'Inna', 'Vasina2', '123@gmail.com2', '09876655', ['tovar1', 'tovar2', 'tovar3', 'tovar4']),
    new Order(4, 'Kolya', 'Vasina3', '123@gmail.com3', '09876655', ['tovar1', 'tovar2']),
    new Order(5, 'Misha', 'Vasina4', '123@gmail.com4', '09876655', ['tovar1', 'tovar2', 'tovar3']),
    new Order(6, 'Oleg', 'Vasina5', '123@gmail.com5', '09876655', ['tovar1', 'tovar2', 'tovar3']),
    new Order(7, 'Vasya', 'Vasina6', '123@gmail.com6', '09876655', ['tovar1', 'tovar2', 'tovar3']),
    new Order(8, 'Liza', 'Vasina7', '123@gmail.com7', '09876655', ['tovar1', 'tovar2']),
    new Order(9, 'Gena', 'Vasina8', '123@gmail.com8', '09876655', ['tovar1', 'tovar2', 'tovar3', 'tovar4']),
    new Order(10, 'Kira', 'Vasina9', '123@gmail.com9', '09876655', ['tovar1', 'tovar2', 'tovar3'])
];

let string = client.sort((clien1, client2) => clien1.order.length - client2.order.length);

console.log(string);

// (Те саме, тільки через клас)
// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class Driver {

}

class Car {
    constructor(model, tm, year, max_speed, motor) {
        this.model = model;
        this.tm = tm;
        this.year = year;
        this.max_speed = max_speed;
        this.motor = motor;
    }

    drive() {
        console.log(`driving with ` + this.max_speed + ` per hour`);
    }

    info() {
        console.log(this.model, this.tm, this.year, this.max_speed, this.motor);
    }

    increaseMaxSpeed(newSpeed) {
        this.max_speed = this.max_speed + newSpeed
    }

    changeYear(newValue) {
        this.year = this.year + newValue

    }

    addDriver(driver) {
        this.driver = driver
    }
}


const porsche = new Car(911, 'porsche', 2004, 276, 3.0);
porsche.drive();
console.log(porsche)
porsche.increaseMaxSpeed(20)
console.log(porsche)
porsche.changeYear(-10)
console.log(porsche)
porsche.addDriver({name: 'Alonso', nation: 'German'})

// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Sinderella {
    constructor(name, age, leg_size) {
        this.name = name;
        this.age = age;
        this.leg_size = leg_size;
    }
}

let brides = [
    new Sinderella('Julia', 22, 36),
    new Sinderella('Olia', 21, 37),
    new Sinderella('Dusia', 24, 36),
    new Sinderella('Musia', 22, 35),
    new Sinderella('Lusia', 22, 38),
    new Sinderella('Pusia', 27, 36),
    new Sinderella('Rita', 22, 43),
    new Sinderella('Vika', 24, 37),
    new Sinderella('Manya', 22, 36),
    new Sinderella('Valya', 19, 34)
]

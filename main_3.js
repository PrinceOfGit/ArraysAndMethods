//Способ который я понимаю, но это не функция.

//let array_1 = [];

//for (let i = 0; i < 40; i++);
//array_1.push(Math.round(Math.random() * 40));

//}

//console.log(array_1)


//Понял за функцию. Теперь четко.

//let array_2 = [];


//function Random_numbers() {
//for (let i = 0; i < 100; i++) {
//array_2.push(Math.round(Math.random() * 100))
//}
//}

//console.log(array_2)

//Random_numbers()


//Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
//Мы задаем диапазон с помощью a и b, если рандомное число q входит в диапазон, то оно отобразится в массиве.

//let array_2 = []

//function Random_numbers(a, b) {
//for (let i = 0; i < 100; i++) {
//let q = Math.round(Math.random() * 100)
//if (q > a && q < b) {
//array_2.push(q)
//}
//}
//}

//console.log(array_2)

//Random_numbers ()


//створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

//let array_3 = []

//function Random_numbers(a, b) {
//for (let i = 0; i < 100; i++) {
//let q = Math.round(Math.random() * 100)
//if (q > a && q < b) {
//array_3.push(q)
//}
//}
//}
//console.log(array_3)

//Random_numbers (12, 56)

//array_3.sort(function (c, d) {
//return c - d
//}
//)


//створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати
// його за допомоги filter, за лишивши тільки парні числа

//let array_4 = [];

//function Random_numbers(a, b) {
//for (let i = 0; i < 100; i++) {
//let q = Math.round(Math.random() * 100)
//if (q > a && q < b) {
//array_4.push(q)
//}
//}
//}

//Random_numbers (20, 45)

//array_4 = array_4.filter(function hello (x) {
//return x % 2 === 0
//})

//console.log(array_4)


//створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map
// та колбеку перетворити всі об'єкти в масиві на срінгові.

//let array_5 = [];

//function Random_numbers() {
//for (let i = 0; i < 10; i++) {
//array_5.push(Math.round(Math.random() * 10))
//}
//}

//Random_numbers ()

//console.log(array_5)

//let array_string = array_5.map(item => item.toString())
//console.log (array_string)


//Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

//class User {
//constructor(id, name, surname, email, phone) {
//this.id = id;
//this.name = name;
//this.surname = surname;
//this.email = email;
//this.phone = phone;
//}
//}

//const Gregory = new User(1, 'Gregory', 'Sanders', 'Sanders25@gmail.com', +1456789063);
//const John = new User(2, 'John', 'Bell', 'JBell21@gmail.com', +14568890121);
//const Max = new User(3, 'Max', 'Loberen', 'Loberen12@gmail.com', +145678890652);
//const Sheldon = new User(4, 'Sheldon', 'King', 'King_Cool@gmail.com', +1678945678);
//const Peter = new User(5, 'Peter', 'Taylor', 'PeterLOL@gmail.com', +145678940098);
//const Patricia = new User(6, 'Patricia', 'Milano', 'Patrimama@gmail.com', +1454678901123);
//const Anna = new User(7, 'Anna', 'Lorri', 'AnnaManchester@gmail.com', +144567890234555);
//const Beth = new User(8, 'Beth', 'Assshaker', 'BethSuper@gmail.com', +144575678990);
//const Lina = new User(9, 'Lina', 'Redneck', 'LGBT_for_you@gmail.com', +1432225678900);
//const Andres = new User(10, 'Andreas', 'Burrito', 'Spane_Rules@gmail.com', +1425677789098);

//console.log(Gregory, John, Max, Sheldon, Peter, Patricia, Anna, Beth, Lina, Andres)


//створити пустий масив, наповнити його 10 об'єктами new User(....)

//let user_array = [];
//function user_add () {
//for ( let i = 0; i < 1; i++) {
//user_array.push(Gregory, John, Max, Sheldon, Peter, Patricia, Anna, Beth, Lina, Andres)
//}
//}

//user_add()

//console.log(user_array)

//Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)









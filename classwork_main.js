// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

//  class Client {
//      constructor(id, name, surname, email, phone, order) {
//          this.id = id;
//          this.name = name;
//          this.surname = surname;
//          this.email = email;
//          this.phone = phone;
//          this.order = order
//      }
//  }
//
//  const Bella = new Client(1, 'Bella', 'Krass', 'BellaK@yahoo.com', +2916788990, ['fruits', 'drugs', 'milk', 'potatos'])
//  const Dennis = new Client(2, 'Dennis', 'Milani', 'MilaniSuperK@yahoo.com', +24567890012, ['fruits', 'chocolate', 'milk'])
//  const Albert = new Client(3, 'Albert', 'Goldenberg', 'GoldMember1@yahoo.com', +29167884567, ['fruits', 'drugs', 'alcohol', 'pork'])
//  const John = new Client(4, 'John', 'Smith', 'JSmish@yahoo.com', +29167845778, ['fruits', 'drugs', 'beer'])
//  const Trish = new Client(5, 'Trish', 'Kim', 'KimRoyal@yahoo.com', +29167812223, ['lobster', 'veal', 'vine'])
//  const Lamar = new Client(6, 'Lamar', 'Taylor', 'TaylorGreat@yahoo.com', +29167890008, ['fruits', 'ready noodles', 'rice', 'pizza'])
//  const Bernard = new Client(7, 'Bernard', 'Montoya', 'Montoya5567K@yahoo.com', +291678443112, ['ketchup', 'tea'])
//  const Lidiya = new Client(8, 'Lidiya', 'Rock', 'RockNow@yahoo.com', +2916788990221, ['fruits', 'jam', 'pepsi', 'bread', 'nuts'])
//  const Peter = new Client(9, 'Peter', 'Olsen', 'SaintPeter@yahoo.com', +2916788557991, ['fruits', 'pizza', 'eggs', 'veal', 'popcorn', 'porn'])
//  const Zac = new Client(10, 'Zac', 'Pups', 'Zac1200@yahoo.com', +29167889901108665, ['fruits'])
//
//  console.log(Bella, Dennis, Albert, John, Trish, Lamar, Bernard, Lidiya, Peter, Zac)
//  let client_array = [];
//
//  function clientAdd() {
//      for (let i = 0; i < 1; i++) {
//          client_array.push(Bella, Dennis, Albert, John, Trish, Lamar, Bernard, Lidiya, Peter, Zac)
//      }
// }
//
//  clientAdd()
//
//  client_array.sort(function (a, b) {
//      return a.order.length - b.order.length
// })
// console.log(client_array)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function constructor(model, manufacturer, year, maxSpeed, engine) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.speed = maxSpeed;
//     this.engine = engine;
//
//
//     this.drive = function () {
//         console.log(`Їдемо із швидкістю ${this.speed} на годину`)
//     };
//
//     this.info = function () {
//         console.log(`
// 			model : ${this.model}
// 			manufacturer : ${this.manufacturer}
// 			year : ${this.year}
// 			maxSpeed : ${this.speed}
// 			engine : ${this.engine}
// 		`)
//     };
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.speed = newSpeed
//     };
//
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     };
//
//     this.driver = function (driverName, driverAge, driverPhone) {
//         this.driverName = driverName;
//         this.driverAge = driverAge;
//         this.driverPhone = driverPhone;
//
//     };
// };
//
//
// let car = new constructor('Tesla', 'Tesla Company', 2009, 300, 'electrical')
// car.drive();
// car.info();
// car.increaseMaxSpeed(350);
// car.changeYear(2020);
// car.driver('Bob', 34,890445667800)
//
// console.log(car)




// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(model,manufacturer,year,maxSpeed,engine) {
//
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.speed = maxSpeed;
//         this.engine = engine;
//     };
//
//     drive () {
//         console.log(`Їдемо із швидкістю ${this.speed} на годину`)
//     };
//
//     info () {
//         console.log(`
// 			model : ${this.model}
// 			manufacturer : ${this.manufacturer}
// 			year : ${this.year}
// 			maxSpeed : ${this.speed}
// 			engine : ${this.engine}
// 		`)
//     };
//
//     increaseMaxSpeed (newSpeed) {
//         this.speed = newSpeed
//     }
//
//     changeYear (newValue) {
//         this.year = newValue
//     }
//
//     addDriver (driverName, driverAge, driverPhone) {
//         this.driverName = driverName;
//         this.driverAge = driverAge;
//         this.driverPhone = driverPhone;
//     }
//
// }
//
// let car1 = new Car('Tesla', 'Tesla Company', 2009, 300, 'electrical')
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(340);
// car1.changeYear(2013);
// car1.addDriver('Lamar',21, 4567889905444);
//
// console.log(car1)




// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

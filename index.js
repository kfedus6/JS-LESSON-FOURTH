/*
let fun = () => {
   for (let i = 0; i < car.length; i++) {
      console.log(car[i]);
   }
}

let car = [];
console.log("1 - добавить новый авто");
console.log("2 - посмотреть список авто");
console.log("3 - измененить их показатели");
console.log("4 - выбрать для расчета одну машину");
console.log("5 - расчетать все машины");
console.log("6 - выход из меню");
let exit = false;
while (!exit) {
   let menu = parseInt(prompt("Enter: "));
   switch (menu) {
      case 1: {
         name = prompt("имя авто: ");
         speed = parseInt(prompt("скорость: "));
         car[car.length] = { Name: name, Speed: speed, Meter: 0 }
         console.log(1);
         break;
      }
      case 2: {
         fun();
         console.log(2);
         break;
      }
      case 3: {
         name = prompt("Введите имя авто, кого хотите изменить: ");
         for (item of car) {
            if (item.Name == name) {
               speed = parseInt(prompt("новый показатель швыдкости:"));
               item.Speed = speed;
            }
         }
         console.log(3);
         break;
      }
      case 4: {
         name = prompt("Введите имя авто для расчета пути торможения");
         for (item of car) {
            if (item.Name === name) {
               result = (item.Speed / 10) * 3;
               resultOne = (item.Speed / 10) * (item.Speed / 10);
               item.Meter += result + resultOne;
            }
         }
         console.log(4);
         break;
      }
      case 5: {
         for (item of car) {
            result = (item.Speed / 10) * 3;
            resultOne = (item.Speed / 10) * (item.Speed / 10);
            item.Meter += result + resultOne;
         }
         console.log(5);
         break;
      }
      case 6: {
         console.log("вы выйшли из меню");
         exit = true;
         break;
      }
   }
}
*/

/*
const student_1 = { name: "kolya", age: 22 };
const student_2 = student_1;

student_1.age = 43;
student_2.name = "dima";
console.log(student_1);
console.log(student_2);
*/

/*
const student_1 = { name: "kolya", age: 22 };
const student_3 = { student: true };
const student_2 = Object.assign({}, student_1, student_3, { number: "+3806575345" }, { age: 44 });

student_1.age = 43;
student_2.name = "dima";
console.log(student_1);
console.log(student_2);

const product = { type: "milk", price: 25, cal: 256 };
const product_2 = { type: "bread", price: 34, cal: 345 };
const shop = Object.assign({}, product, product_2);
console.log(shop);
*/

/*
const student_1 = {
   name: "kolya",
   age: 22,
   company: {
      title: "Microsoft",
      sallary: 5000
   }
};

const student_2 = Object.assign({}, student_1);

student_2.name = "Dima";
student_2.company.title = "Google";

console.log(student_1);
console.log(student_2)
*/

/*
const student_1 = {
   name: "kolya",
   age: 22,
   company: {
      title: "Microsoft",
      sallary: 5000
   }
};

const student_2 = { ...student_1, name: "timure" };

console.log(student_1);
console.log(student_2);
*/

/*
const avto = { model_1: "audi", color_1: "red", price_1: 120000 };
const avto_2 = { model: "audi", color: "red", price: 1202000 };

if (avto.model_1 === avto_2.model && avto.color_1 === avto_2.color && avto.price_1 === avto_2.price) {
   console.log("True");
} else {
   console.log("False");
}
*/

/*
const user = { name: "dima", age: 23 };

if (user.name !== undefined) {
   console.log("true");
} else {
   console.log("false")
}

if ("name" in user) {
   console.log("True");
} else {
   console.log("False");
}

if (user.hasOwnProperty("qwe")) {
   console.log("True");
} else {
   console.log("False");
}
*/

/*
const user = { name: "dima", age: 23 };
for (let key in user) {
   console.log(user[key])
}


for (const item of Object.entries(user)) {
   console.log(`${item[0]}: ${item[1]}. `);
}
*/

// ДЗ
/*
let google = { Google: "американська транснаціональна корпорація, в складі холдингу Alphabet, що інвестує в інтернет-пошук, хмарні обчислення і рекламні технології." };
let google_1 = { Google: "американська транснаціональна корпорація, в складі холдингу Alphabet, що інвестує в інтернет-пошук, хмарні обчислення і рекламні технології." };
let google_2 = { Google: "американская транснациональная корпорация, в составе холдинга Alphabet, инвестирующая в интернет-поиск, облачные вычисления и рекламные технологии." };
let google_3 = { Google: "an American multinational corporation, part of the Alphabet holding company, which invests in Internet search, cloud computing and advertising technologies." };
let google_4 = { Google: "amerykańska międzynarodowa korporacja, będąca częścią holdingu Alphabet, inwestująca w wyszukiwarkę internetową, przetwarzanie w chmurze i technologie reklamowe." };

let result = () => {
   for (let key of Object.entries(google)) {
      console.log(`${key[0]}: ${key[1]}`)
   }
}

let result_1 = () => {
   google = Object.assign({}, google_1);
}

function result_2() {
   google = Object.assign({}, google_2);
}

function result_3() {
   google = { ...google_3 };
}

function result_4() {
   google = { ...google_4 };
}


console.log("1 - посмотреть");
console.log("2 - россійскікий");
console.log("3 - англійский");
console.log("4 - польський");
console.log("5 - український");
console.log("6 - выйти")

let exit = false;

while (!exit) {
   let menu = parseInt(prompt("Enter:"));
   switch (menu) {
      case 1: {
         result();
         break;
      }
      case 2: {
         result_2();
         break;
      }
      case 3: {
         result_3();
         break;
      }
      case 4: {
         result_4();
         break;
      }
      case 5: {
         result_1();
         break;
      }
      case 6: {
         exit = true;
         console.log("ви вийшли");
         break;
      }
   }
}
*/

/*
let dict = [{ rus: "Привет", eng: "Hello" }, { rus: "Ручка", eng: "Pen" }]

word = "Привет";

for (let i = 0; i < dict.length; i++) {
   if (word === dict[i].rus) {
      console.log(dict[i].eng);
   }
}
*/
/*
let wordRus = [{ WordRus: "привет" }];
let wordEng = [{ WordEng: "hello" }];
let displayEng = () => {
   for (let key of wordEng) {
      console.log(key);
   }
}

let displayRus = () => {
   for (let key of wordRus) {
      console.log(key);
   }
}


//1 - добавить слова для перевода
//2 - Перевести слова
      1)  с руксского на снглийскуи
      2) с английского на русский
//3 - удалить слова для перевода
//4 - посмотреть словарь
//5 - выйти

console.log("1 - добавить русское слово");
console.log("2 - добавить английськое слово");
console.log("3 - посмотреть слова");
console.log("4 - выйти");

let exit = false;

while (!exit) {
   let menu = +prompt("Enter");
   switch (menu) {
      case 1: {
         word = prompt("вести слово на русском");
         wordRus[wordRus.length] = { WordRus: word };
         break;
      }
      case 2: {
         word = prompt("вести слово на английском");
         wordEng[wordEng.length] = { WordEng: word };
         break;
      }
      case 3: {
         displayRus();
         displayEng()
         break;
      }
      case 4: {
         exit = true;
         console.log("вы вышли")
         break;
      }
   }
}
*/

/*
let user = { name: "kirill", age: 43 }
for (item of Object.keys(user)) {
   console.log(item + ": " + user[item]);
}
*/

/*
let user = { name: "kirill", age: 43 }
console.log(Object.values(user)[0]);
*/

/*
function createUser(name, age) {
   return {
      name: name,
      age: age,
      display: function () {
         document.write(`<h1>Имя:${name} возраст:${age}</h1>`)
      }
   }
}

let kolya = createUser("kolya", 15);
let egor = createUser("Egor", 16);
let Timur = createUser("Timur", 19);

kolya.display();
egor.display();
Timur.display();
*/

/*
function createGon(name, age) {
   return {
      name: name,
      age: age,
      driceCar: function (car) {
         document.write(`<h1>${name} ездит на машыне ${car.avto} ${car.year}. Стаж ${age} лет</h1>`)
      }
   }
}

function createCar(avto, year) {
   return {
      avto: avto,
      year: year,
   }
}

let gon = createGon("Алексей", 15);
let car = createCar("BMW", 2007);
gon.driceCar(car);

let gon1 = createGon("Дима", 19);
let car1 = createCar("Лексус", 2013);
gon1.driceCar(car1);
*/


//let arr1 = new Array()
//let arr = []


/*
function User(name, age) {
   this.name = name;
   this.age = age;
   this.info = function () {
      console.log(this.name, this.age);
   }
}

let anton = new User("Anton", 35);
let egor = new User("Egor", 25);

let arr = [new User(prompt(), prompt())];
console.log(arr)

anton.info();
egor.info();
*/

//Prototype
/*
function Avto(model, color) {
   this.model = model;
   this.color = color;
   this.display = function () {
      document.write(`${this.model} ${this.color}<br>`);
   }
}

let car = new Avto("BMW", "green");

Avto.prototype.is_polomla = false;

console.log(car.is_polomla)
car.is_polomla = true;
console.log(car.is_polomla)
*/

/*
function User(name) {
   this.name = name;
}

let car = new Avto("BMW", "green");
let egor = new User("Egor");

let res = car instanceof User;
console.log(res);
*/

/*
let arr = []
for (let i = 0; i < 2; i++) {
   arr[i] = new Avto(prompt(), prompt())
}

for (item of arr) {
   console.log(item.display())
}
*/



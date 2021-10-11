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

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

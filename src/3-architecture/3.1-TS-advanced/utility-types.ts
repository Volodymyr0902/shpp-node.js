// Напишіть функцію, яка приймає:
// 1) Деякі дані умовного типу Т, але не з усіма полями
// 2) функцію-доповнювач, яка приймає такі штуки як із п.1,
//     а повертає повноцінний об'єкт типу Т
// ... як ви зрозуміли, саму функцію писати не треба:)
// нас цікавить лише її сигнатура.

function task1<T>(data: Partial<T>, addition: (arg: Partial<T>) => T) {}

// Більш складний варіант:
// Напишіть функцію, яка приймає:
// 1) Деякі дані умовного типу Т (у якого поле id: string),
//    але можливо без поля id
// 2) функцію-доповнювач, яка приймає такі штуки як із п.1,
//     а повертає повноцінний об'єкт типу Т
// ... як ви зрозуміли, саму функцію писати не треба:)
// нас цікавить лише її сигнатура.

function task2<T extends {id: string}>(data: Partial<T>, addition: (arg: Partial<T>) => T) {}

// Останнє завдання:
// Напишіть сигнатуру функції, що приймає
// - якийсь клас
// - кількість
// ...а повертає масив екземплярів цього класу

class Rectangle {
  w!: number;
  h!: number;
}
class Circle {
  radius!: number;
}

// Зробіть норм сигнатуру тут.
// НІ, Rectangle | Circle це не варіант, треба зробити універсальну функцію
function propagate<T>(SOMECLASS: new () => T, count: number): T[]  {
  let a: T[] = []
  for (let i = 0; i < count; i++)
     a.push(new SOMECLASS());
 
  return a;
}

let a: Rectangle[] = propagate(Rectangle, 10);
let b: Circle[] = propagate(Circle, 20)

console.log(a)
console.log(b)

// Using InstanceType<T>
function propagate2<T extends new () => InstanceType<T>>(clazz: T, q: number): InstanceType<T>[] {
  const arr: ReturnType<typeof propagate2> = new Array(q)
  return arr.fill(new clazz())
}

console.log(propagate2(Date, 5))
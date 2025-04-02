"use strict";
// Напишіть функцію, яка приймає:
// 1) Деякі дані умовного типу Т, але не з усіма полями
// 2) функцію-доповнювач, яка приймає такі штуки як із п.1,
//     а повертає повноцінний об'єкт типу Т
// ... як ви зрозуміли, саму функцію писати не треба:)
// нас цікавить лише її сигнатура.
function task1(data, addition) { }
// Більш складний варіант:
// Напишіть функцію, яка приймає:
// 1) Деякі дані умовного типу Т (у якого поле id: string),
//    але можливо без поля id
// 2) функцію-доповнювач, яка приймає такі штуки як із п.1,
//     а повертає повноцінний об'єкт типу Т
// ... як ви зрозуміли, саму функцію писати не треба:)
// нас цікавить лише її сигнатура.
function task2(data, addition) { }
// Останнє завдання:
// Напишіть сигнатуру функції, що приймає
// - якийсь клас
// - кількість
// ...а повертає масив екземплярів цього класу
class Rectangle {
}
class Circle {
}
// Зробіть норм сигнатуру тут.
// НІ, Rectangle | Circle це не варіант, треба зробити універсальну функцію
function propagate(SOMECLASS, count) {
    let a = [];
    for (let i = 0; i < count; i++)
        a.push(new SOMECLASS());
    return a;
}
let a = propagate(Rectangle, 10);
let b = propagate(Circle, 20);
console.log(a);
console.log(b);
// Using InstanceType<T>
function propagate2(clazz, q) {
    const arr = new Array(q);
    return arr.fill(new clazz());
}
console.log(propagate2(Date, 5));

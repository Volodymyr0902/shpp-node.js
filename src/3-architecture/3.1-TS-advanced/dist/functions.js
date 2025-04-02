"use strict";
// Напишіть функцію mapObject, яка
// у чомусь схожа на функцію map для масивів.
function mapObject(obj, transformer) {
    const result = {};
    for (const key of Object.keys(obj)) {
        result[key] = transformer(obj[key]);
    }
    return result;
}
const obj1 = { "roma": 5, "vasya": 2 };
const obj2 = mapObject(obj1, (prop => {
    return prop;
}));
console.log(obj1);
console.log(obj2);

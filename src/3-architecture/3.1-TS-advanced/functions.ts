// Напишіть функцію mapObject, яка
// у чомусь схожа на функцію map для масивів.

// Ця функція повинна приймати об'єкт джаваскрипту
// і функцію transformer, яку потрібно застосувати до кожного з полів об'єкта,
// ...а з результату застосування функції transformer до кожного поля вхідного об'єкта
// зібрати новий об'єкт та повернути його.

// Так наприклад, можна буде замепити об'єкт типу
// { "roma" : 5, "vasya": 2 } оцінок студентів
// на функцію на кшталт (x) => x > 2
// щоб отримати об'єкт
// {"roma": true, "vasya": false} заліків студентів

// Зрозуміло для опису сигнатури mapObject треба буде юзать
// 1) дженерики з кількома параметрами-типами
// 2) таку штуку як Record (globalThis.Record, якщо бути точним ;) )

type ObjIndex = string | number | symbol;

function mapObject<I, O>(obj: Record<ObjIndex, I>, transformer: (prop: I) => O ): Record<ObjIndex, O> {
  const result: Record<ObjIndex, O> = {}

  for (const key of Object.keys(obj)) {
    result[key] = transformer(obj[key])
  }

  return result;
}

const obj1 = { "roma" : 5, "vasya": 2 } 
const obj2 = mapObject(obj1, (prop => {
  return prop;
}))

console.log(obj1)
console.log(obj2)
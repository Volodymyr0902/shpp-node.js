// Є функція. Вона приймає якийсь об'єкт А, який має поля зі значеннями
// - або undefined
// - або об'єкт з одним полем cvalue, який
//     або undefined
//     або по типу рівний
//         або рядку,
//         або числу,
//         або посиланню на об'єкт за своєю структурою/описом подібний до описаного об'єкта А.
// ...Функція повинна повернути суму "значень" поля cvalue всіх полів об'єкта, до того ж,
// - якщо у чергового елемента поле сvalue - це число,
//   то просто додаємо це число.
// - якщо у чергового елемента поле сvalue - це рядок,
//   то просто конвертуємо рядок у число і додаємо.
// - якщо у чергового елемента поле cvalue - це об'єкт подібний до кореневого,
//   то додаємо суму його полів (привіт рекурсія)
// - якщо ми натикаємося на undefined, або якщо cvalue був рядком який за фактом не був адекватним числом -
// тоді значенням буде 2022.

// наприклад, для { hello: {cvalue: 1}, world: { cvalue: { yay: { cvalue: "2" } } } }
// повинна повернути 3

// Незабаром дамо вам функцію, але вона трохи багонута.
// Спробуйте знайти у ній всі баги самостійно без запуску цього коду.
// Коли ви побачили всі баги і готові їх виправляти, то зробіть це (АЛЕ НЕ ТРЕБА ПЕРЕПИСУВАТИ ВСЕ З НУЛЯ :)) ),
// і коли будете впевнені, що функція працює ок - можете спробувати запустити її і потестувати.
// Перед запуском вивчіть, що ваш улюблений редактор підсвічує в коді.
// Чи знайшов він якісь помилки?
// Якщо уявити, що ви пропустили ряд помилок, то час протестувати тайпскрипт.

// 1) Складний етап. Напишіть нормальну тайпскриптову сигнатуру функції
// (окремо опишіть тип першого аргументу як interface)

// 2) Якщо не вийшло, дивіться спойлер: https://pastebin.com/2nEJvk04

// 3) користуючись силою тайпскрипту та описаної сигнатури,
// знайдіть якнайбільше помилок, яких не знайшли раніше.
// По мірі виправлення коду, виявляйте ще помилки автоматом в процесі кодингу,
// без запуску програми.
// результат скиньте @roman

// ... а ось і код багонутої функції:

interface InnerObj {
  cvalue: string | number | PassedObj | undefined;
}

interface PassedObj {
  [key: string]: InnerObj | undefined;
}

function summ(a: PassedObj) {
  const x = Object.keys(a).map((k) => {
    const elem = a[k];

    // Thus we exclude both null & undefined
    if (elem == undefined || elem.cvalue == undefined) return 2021;
    if (typeof elem.cvalue === "string") return +elem.cvalue || 2021;
    if (typeof elem.cvalue === "object") return summ(elem.cvalue);

    return elem.cvalue;
  });

  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }

  return sum;
}

console.log(
  summ({ hello: { cvalue: 1 }, world: { cvalue: { yay: { cvalue: "2" } } } })
);

let iamundef;
console.log(
  summ({
    hello: { cvalue: 7 },
    world: { cvalue: { yay: { cvalue: "2" } } },
    iamundef,
    coolValue: { cvalue: "mustbe2021" },
  })
);

// Успіхів знайти всі баги!
// Тут може бути найпростіше все з нуля написати, але завдання не про це.
// А про те, як знаходити помилки, не напружуючись.
// І про type narrowing:
// - про guards: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards
// - про truthiness narrowing: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing
// - про control flow analysis: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#control-flow-analysis

// Дайте знати @roman про результати.

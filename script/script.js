'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,

  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую (через пробел)', 'Кино, обучение, транспорт'),

  deposit = prompt('Есть ли у вас депозит в банке?', 'нет'),

  // expenses1 = prompt('Введите обязательную статью расходов', 'Детский сад'),
  // amount1 = +prompt('Во сколько это обойдется?', 2500),

  // expenses2 = prompt('Введите обязательную статью расходов', 'Домашние животные'),
  // amount2 = +prompt('Во сколько это обойдется?', 3000),

  mission = +prompt('Какова цель Ваших сбережений?', 150000),

  income = 'Фриланс';

switch (deposit) {
  case 'да':
  case 'есть':
    deposit = true;
    break;
  default:
    deposit = false;
};

let start = function () {
  do {
    money = prompt('Каков Ваш месячный доход?', 50000);
  }
  while (!isNumber(money))
};

start();

let expenses = [];
let add;

let getExpensesMonth = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {

    expenses[i] = prompt('Введите обязательную статью расходов', 'Домашние животные');

    add = prompt('Во сколько это обойдется?', 3000);

    while (!isNumber(add)) {
      add = prompt('Во сколько это обойдется?', 3000);
    }
    sum += +add;
  }
  console.log(expenses);
  return sum;
};

let expensesAmount = getExpensesMonth();


let showTypeOf = function (data) {
  return typeof data;
};
console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));

console.log(addExpenses.toLowerCase().split(', '));

// const getExpensesMonth = function(){
//   return amount1 + amount2;
// }
console.log('Сумма обязательных расходов за месяц: ', expensesAmount);

const getAccumulatedMonth = function (a, b) {
  return money - expensesAmount;
}
let accumulatedMonth = getAccumulatedMonth();
// console.log('Ваши накопления за месяц: ', accumulatedMonth)

const getTargetMonth = function () {
  return Math.ceil(mission / accumulatedMonth);
}
if (getTargetMonth() > 0) {
  console.log('Ваш срок достижения цели: ', getTargetMonth(), 'месяцев');
} else {
  console.log('Цель не будет достигнута :(')
}

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Ваш дневной бюджет: ', budgetDay);

const getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return ('У Вас высокий уровень дохода');
  } else if (1200 > budgetDay > 600) {
    return ('У Вас средний уровень дохода');
  } else if (600 >= budgetDay > 0) {
    return ('У Вас низкий уровень дохода');
  } else {
    return ('Что-то пошло не так :/');
  }
}
console.log(getStatusIncome());
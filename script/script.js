'use strict';
let money = +prompt('Каков Ваш месячный доход?', 50000),

  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую (через пробел)').split(', '),

  deposit = prompt('Есть ли у вас депозит в банке?', 'нет'),

  expenses1 = prompt('Введите обязательную статью расходов', 'Детский сад'),
  amount1 = +prompt('Во сколько это обойдется?', 2500),

  expenses2 = prompt('Введите обязательную статью расходов', 'Домашние животные'),
  amount2 = +prompt('Во сколько это обойдется?', 3000),

  mission = +prompt('Какова цель Ваших сбережений?', 150000),

  income = 'Фриланс';

switch (deposit) {
  case 'да':
  case 'есть':
    deposit = true;
    break;
  default:
    deposit = false;
}

let showTypeOf = function(data){
  return typeof data;
}
console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));

// console.log('Ваш месячный доход: ', money, 'рублей');
// console.log('Ваши расходы за расчитываемый период: ', addExpenses);

// console.log('Обязательная статья расходов: ', expenses1);
// console.log('Она обойдется в: ', amount1);

// console.log('Обязательная статья расходов: ', expenses2);
// console.log('Она обойдется в: ', amount2);

// let budgetMonth = money - amount1 - amount2;
// console.log('Ваш бюджет на месяц: ', budgetMonth, 'рублей');

// console.log('Цель ваших накоплений: ', mission, 'рублей');
// console.log('Вы достигните своей цели за', Math.ceil(mission / budgetMonth), 'месяцев');

const getExpensesMonth = function(){
  return amount1 + amount2;
}
console.log('Сумма обязательных расходов за месяц: ', getExpensesMonth());

const getAccumulatedMonth = function(a, b){
  return money - getExpensesMonth();
}
let accumulatedMonth = getAccumulatedMonth();
// console.log('Ваши накопления за месяц: ', accumulatedMonth)

const getTargetMonth = function(){
  return Math.ceil(mission / accumulatedMonth);
}
console.log('Ваш срок достижения цели: ', getTargetMonth(), 'месяцев');

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Ваш дневной бюджет: ', budgetDay);

const getStatusIncome = function(){
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
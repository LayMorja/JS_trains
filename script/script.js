'use strict';
let money = +prompt('Каков Ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = prompt('Есть ли у вас депозит в банке?', 'нет');
let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = +prompt('Во сколько это обойдется?');
let mission = +prompt('Какова цель Ваших сбережений?')
console.log('Ваш месячный доход: ', money, 'рублей');
console.log('Ваши расходы за расчитываемый период: ', addExpenses);
switch (deposit) {
  case 'да':
  case 'есть':
    console.log(true);
    break;
  default:
    console.log(false);
}
console.log('Обязательная статья расходов: ', expenses1);
console.log('Она обойдется в: ', amount1);
console.log('Обязательная статья расходов: ', expenses2);
console.log('Она обойдется в: ', amount2);
let budgetMonth = money - amount1 - amount2;
console.log('Ваш бюджет на месяц: ', budgetMonth, 'рублей');
console.log('Цель ваших накоплений: ', mission, 'рублей');
console.log('Вы достигните своей цели за', Math.ceil(mission / budgetMonth), 'месяцев');
let budgetDay = budgetMonth / 30;
console.log('Ваш дневной бюджет: ', Math.floor(budgetDay));

if (budgetDay >= 1200) {
  console.log('У Вас высокий уровень дохода');
} else if (1200 > budgetDay > 600) {
  console.log('У Вас средний уровень дохода');
} else if (600 >= budgetDay > 0) {
  console.log('У Вас низкий уровень дохода');
} else {
  console.log('Что-то пошло не так :/');
}
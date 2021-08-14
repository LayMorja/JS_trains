'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function () {
      money = prompt('Каков Ваш месячный доход?', 50000);

      while (!isNumber(money)) {
        money = prompt('Каков Ваш месячный доход?', 50000);
      }
    };
start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  add: 0,
  expensesMonth: 0,
  budget: money,
  deposit: false,
  budgetDay: 0,
  budgetMonth: 0,
  mission: +prompt('Какова цель Ваших сбережений?', 150000),
  period: 4,
  asking: function() {
    appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую (через пробел)', 'Кино, обучение, транспорт').toLowerCase().split(', ');
      appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {

      let itemExpensive = prompt('Введите обязательную статью расходов', 'Домашние животные');

      let expensiveCost;
      while (!isNumber(expensiveCost)) {
        expensiveCost = +prompt('Во сколько это обойдется?', 3000);

      appData.expenses[itemExpensive] = expensiveCost;
      }
    }
  },
  getExpensesMonth: function() {   
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
  },
  getBudget: function(a, b) {
    return appData.budget - appData.expensesMonth;
  },
  getTargetMonth: function() {
    return Math.ceil(appData.mission / accumulatedMonth);
  },
  getStatusIncome: function() {
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
};

appData.asking();
appData.getExpensesMonth();

let expensesAmount = appData.expensesMonth,
    accumulatedMonth = appData.getBudget(),
    budgetDay = Math.floor(accumulatedMonth / 30);



console.log('Сумма обязательных расходов за месяц: ', expensesAmount);
console.log('Ваш дневной бюджет: ', budgetDay);
console.log(appData.getStatusIncome());
if (appData.getTargetMonth() > 0) {
  console.log('Ваш срок достижения цели: ', appData.getTargetMonth(), 'месяцев');
} else {
  console.log('Цель не будет достигнута :(')
}
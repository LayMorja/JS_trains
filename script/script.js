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

// Большой объект
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
  getBudget: function() {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function() {
    return Math.ceil(appData.mission / appData.budgetMonth);
  },
  getStatusIncome: function() {
    if (appData.budgetDay >= 1200) {
      return ('У Вас высокий уровень дохода');
    } else if (1200 > appData.budgetDay > 600) {
      return ('У Вас средний уровень дохода');
    } else if (600 >= appData.budgetDay > 0) {
      return ('У Вас низкий уровень дохода');
    } else {
      return ('Что-то пошло не так :/');
    }
  }
};

// Вызов всех нужных методов
appData.asking();
appData.getExpensesMonth();
appData.getBudget();

// "Консоль логи"
console.log('Сумма обязательных расходов за месяц:', appData.expensesMonth);
if (appData.getTargetMonth() > 0) {
  console.log('Ваш срок достижения цели:', appData.getTargetMonth(), 'месяца');
} else {
  console.log('Цель не будет достигнута :(')
}
console.log(appData.getStatusIncome());

for (let key in appData) {
  console.log('Наша программа включает в себя данные:', key, appData[key]);
}

// let expensesAmount = appData.expensesMonth;
// console.log('Ваш дневной бюджет: ', budgetDay);
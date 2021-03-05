let money = 60000;
let income = 'фриланс';
let addExpenses = 'Интернет, такси, коммуналка';
let deposit = true;
let mission = 3000000;
let period = 12;
let budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен - ', period, 'месяцев');
console.log('Цель заработать ', mission, 'долларов');
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);
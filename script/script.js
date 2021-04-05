'use strict';
let lang = prompt('Введите "ru" или "en"');

let namePerson = prompt('Введите имя', 'Артём');
namePerson === 'Артём' ? console.log('Директор') : console.log('Студент');
namePerson === 'Максим' ? console.log('Преподователь') : console.log('Студент');

switch (lang) {
  case 'ru':
    console.log('Понедельник \n Вторник \n Среда \n Четверг \n Пятница \n Суббота \n Воскресенье');
    document.getElementById('tag-list').innerHTML = '<li>Понедельник<li>Вторник<li>Среда<li>Четверг<li>Пятница<li>Суббота<li>Воскресенье';
    break;
  case 'en':
    console.log('Monday \n Tuesday \n Wednesday \n Thursday \n Friday \n Saturday \n Sunday');
    document.getElementById('tag-list').innerHTML = '<li>Monday<li>Tuesday<li>Wednesday<li>Thursday<li>Friday<li>Saturday<li>Sunday';
    break;
  default:
    console.log('А ведь указали, что писать');
}
import createDaysElement from './createDays';
import createMonthElement from './createMonths';

const date = new Date();
const dateBody = document.querySelector('.date-body');
const title = document.querySelector('.title');

const monthsNames = ['Janeiro', 'Fevereiro', 'Março',
  'Abril', 'Maio', 'Junho', 'Julho',
  'Agosto', 'Setembro', 'Outubro', 'Novembro',
  'Dezembro'];

const clearDate = () => {
  dateBody.innerHTML = '';
};

const createElements = (dateType, daySelected, monthSelected) => {
  clearDate();

  if (dateType === 'days') {
    title.innerText = monthsNames[monthSelected];
    const days = createDaysElement(date.getMonth(), date.getFullYear(), daySelected);
    days.forEach((day) => {
      dateBody.appendChild(day);
    });
  } else {
    title.innerText = date.getFullYear();
    const months = createMonthElement(monthSelected);
    months.forEach((month) => {
      dateBody.appendChild(month);
    });
  }
};

export { clearDate, createElements };

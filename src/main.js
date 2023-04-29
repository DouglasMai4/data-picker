import { daysClick, monthsClick, titleClick } from './helpers/clickFunctions';
import { createElements } from './helpers/helperFunctions';
import './styles.css';

// const dateBody = document.querySelector('.date-body');

const date = new Date();
let monthSelected = date.getMonth();
let daySelected = date.getDate() - 1;
let dateType = 'days';

createElements(dateType, daySelected, monthSelected);

const title = document.querySelector('.title');
title.addEventListener('click', () => {
  const result = titleClick(dateType);
  dateType = result.type;
  createElements(dateType, daySelected, monthSelected);
  title.innerText = result.title;
});

const months = document.querySelectorAll('months-element');
months.forEach((month) => {
  month.addEventListener('click', () => {
    monthsClick();
    month.classList.add('active');
    monthSelected = month.id;
    dateType = 'days';
    createElements(dateType, daySelected, monthSelected);
  });
});

const days = document.querySelectorAll('days-element');
days.forEach((day) => {
  day.addEventListener('click', () => {
    daysClick();
    day.classList.add('active');
    daySelected = day.id;
    createElements(dateType, daySelected, monthSelected);
  });
});

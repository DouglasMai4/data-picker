const monthsClick = () => {
  const activeMonth = document.querySelector('.active');
  activeMonth.classList.remove('active');
};

const daysClick = () => {
  const activeDay = document.querySelector('.active');
  activeDay.classList.remove('active');
};

const titleClick = (dateType, activeNumber) => {
  const date = new Date();
  const monthsNames = ['Janeiro', 'Fevereiro', 'Março',
    'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto', 'Setembro', 'Outubro', 'Novembro',
    'Dezembro'];

  if (dateType === 'days') {
    return { type: 'months', title: date.getFullYear() };
  }

  return { type: 'days', title: monthsNames[activeNumber] };
};

export { monthsClick, daysClick, titleClick };

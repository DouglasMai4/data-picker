const months = ['Janeiro', 'Fevereiro', 'Março',
  'Abril', 'Maio', 'Junho', 'Julho',
  'Agosto', 'Setembro', 'Outubro', 'Novembro',
  'Dezembro'];

const createMonthElement = (monthSelected) => {
  const array = [];

  months.forEach((month) => {
    const monthElement = document.createElement('div');
    monthElement.className = month === months[monthSelected]
      ? 'month-element active' : 'month-element';
    monthElement.innerText = month;
    monthElement.id = months.indexOf(month);

    array.push(monthElement);
  });

  return array;
};

export default createMonthElement;

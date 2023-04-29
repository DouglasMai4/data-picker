const getMonthDays = (month, year) => {
  if (!month) {
    throw new Error('Month cannot be empty');
  }

  const days = [];
  const lastDay = new Date(year, month, 0).getDate();
  for (let index = 1; index < lastDay; index += 1) {
    days.push(index);
  }

  return days;
};

const createDaysElement = (month, year, daySelected) => {
  const days = getMonthDays(month, year);
  const array = [];

  days.forEach((day) => {
    const dayElement = document.createElement('div');
    dayElement.className = day === days[daySelected]
      ? 'day-element active' : 'day-element';
    dayElement.innerText = day;
    dayElement.id = days.indexOf(day);

    array.push(dayElement);
  });

  return array;
};

export default createDaysElement;

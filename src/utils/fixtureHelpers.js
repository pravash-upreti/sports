import dateFns from 'date-fns';

const parseFixtureDate = fixtureDate => {
  let fDate = new Date(fixtureDate);
  let weekDay = dateFns.format(fDate, 'dddd');

  if (dateFns.isToday(fDate)) {
    weekDay = 'Today';
  } else if (dateFns.isTomorrow(fDate)) {
    weekDay = 'Tomorrow';
  } else if (dateFns.isYesterday(fDate)) {
    weekDay = 'Yesterday';
  }

  let minutes = dateFns.format(fDate, 'mm');
  let hours = dateFns.format(fDate, 'HH');
  let hour = hours > 12 ? `${hours - 12}` : `${hours}`;
  let amPm = hours >= 12 ? `PM` : `AM`;

  return {
    weekDay: weekDay,
    date: dateFns.format(fDate, 'D MMMM'),
    time: `${hour}:${minutes} ${amPm}`
  };
};

export { parseFixtureDate };

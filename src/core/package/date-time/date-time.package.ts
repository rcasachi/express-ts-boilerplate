export const addDays = (date: Date, days: number) => new Date(date.setDate(date.getDate() + days));

export const toTimestamp = (date: Date) => date.toISOString().slice(0, 19).replace('T', ' ');

export const compareDate = (firstDate: Date, secondDate: Date, signal = '==='): boolean => {
  const operations = {
    '===': () => firstDate.getTime() === secondDate.getTime(),
    '>=': () => firstDate.getTime() >= secondDate.getTime(),
    '<=': () => firstDate.getTime() <= secondDate.getTime(),
    '!==': () => firstDate.getTime() !== secondDate.getTime(),
  };

  return operations[signal]();
};

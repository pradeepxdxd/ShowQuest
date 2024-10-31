interface DayProp {
  day : string,
  date : number,
  month: string
}

export const getNextDays = (days:number): { day: string; date: number; month: string }[] => {
  const daysList : DayProp[] = [];
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);

    const day = date.toLocaleString("en-US", { weekday: "short" });
    const dayDate = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });

    daysList.push({ day, date: dayDate, month });
  }

  return daysList;
};

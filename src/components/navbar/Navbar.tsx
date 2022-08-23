import { useEffect, useState } from "react";
import "./navbar.scss";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDate = (
    day: number,
    date: number,
    month: number,
    year: number
  ): string => {
    let tempDay = `${days[day]}`;
    let tempDate = `${date}`;
    let tempMonth = `${month}`;
    let tempYear = `${year}`;

    if (date < 10) {
      tempDate = `0${tempDate}`;
    }
    if (month < 10) {
      tempMonth = `0${tempMonth}`;
    }
    if (year < 10) {
      tempYear = `0${tempYear}`;
    }

    return `${tempDay}, ${tempDate}/${tempMonth}/${tempYear}`;
  };

  useEffect(() => {
    const day = new Date().getDay();
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    setDate(getDate(day, date, month, year));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTime = (hour: number, minutes: number, seconds: number): string => {
    let tempHour = `${hour}`;
    let tempMinutes = `${minutes}`;
    let tempSeconds = `${seconds}`;

    if (hour < 10) {
      tempHour = `0${tempHour}`;
    }
    if (minutes < 10) {
      tempMinutes = `0${tempMinutes}`;
    }
    if (seconds < 10) {
      tempSeconds = `0${tempSeconds}`;
    }

    return `${tempHour}:${tempMinutes}:${tempSeconds}`;
  };
  setInterval(() => {
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    const time = getTime(hour, minutes, seconds);
    setTime(`${date} ${time}`);
  }, 1000);

  return (
    <nav className='flex justify-between items-center w-full py-2 px-10 bg-slate-300 relative'>
      <div className='left'>
        <img src='' alt='Contact-Bunker' />
      </div>
      <div className='right flex items-center'>
        <p>{time}</p>
        <div className='user relative ml-5 p-1'>
          <span className='bg-white p-3 rounded-full text-center'>EP</span>
          <span className='hidden-menu absolute bg-black text-white top-9 -right-3 p-2 hidden cursor-pointer rounded-lg'>
            Logout
          </span>
        </div>
      </div>
    </nav>
  );
}

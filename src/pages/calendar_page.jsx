import React, { useState } from 'react'
import { addDays, subDays, format } from "date-fns"
import Calendar from '../components/calendar'




export const CalendarPage = () => {
  //const [isOn, setIsOn] = useState(false);
  const eventos = [
    { date: new Date(2024, 8, 11), title: "Entrega 1 proyecto | INF346" },
    { date: new Date(2024, 10, 12), title: "Tarea 1 | INF346" },
    { date: new Date(2024, 10, 26), title: "Tarea 2 | INF346" },
    
    { date: new Date(2024, 8, 8), title: "Certamen 1 | FIS140" },
    { date: new Date(2024, 10, 11), title: "Certamen 2 | FIS140" },
    { date: new Date(2024, 11, 4), title: "Certamen Recuperativo | FIS140" },
    
    { date: new Date(2024, 8, 7), title: "Entrega 1 proyecto | INF3XX" },
    { date: new Date(2024, 10, 5), title: "Entrega 2 proyecto | INF3XX" },
    { date: new Date(2024, 11, 5), title: "Informe Final | INF3XX" },
    
    { date: new Date(2024, 8, 13), title: "Certamen 1 | INF266" },
    { date: new Date(2024, 10, 6), title: "Certamen 2 | INF266" },
    { date: new Date(2024, 11, 1), title: "Informe | INF266" }
];
  return (
    <div>
      <Calendar
        events={eventos}
      />
    </div>
    
  )
  /*
  <div className='calendar-page'>
      <p>Presiona el botón para encender o apagar la ampolleta</p>
      <img src={isOn ? LightBulbOn : LightBulbOff} height={130} alt='ampolleta' />
      <br />
      <br />
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Apagar' : 'Encender'}
      </button>
    </div>*/
}

export default CalendarPage

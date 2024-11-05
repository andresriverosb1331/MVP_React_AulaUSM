import React, { useState } from 'react'
import { addDays, subDays, format } from "date-fns"
import Calendar from '../components/calendar'




export const CalendarPage = () => {
  //const [isOn, setIsOn] = useState(false);
  const eventos = [
    {date: new Date(2024,10,5), title: "Entrega 2 Proyecto | INF322"},
    {date: new Date(2024,10,27), title: "Entrega 3 Proyecto | INF322"},
  ]
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

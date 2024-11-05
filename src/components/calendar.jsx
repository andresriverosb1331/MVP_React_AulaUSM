import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import es from 'date-fns/locale/es'
import { eachDayOfInterval, endOfMonth, startOfMonth, getDay, isToday, isSameDay, format } from "date-fns"
import '../stylesheets/Calendar/Calendar.scss'

import clsx from "clsx"


const DIAS = ["Lu","Ma", "Mi","Ju", "Vi", "Sa", "Do"]
const locale = es


const Calendar = ({events }) => {
    const currentDate = new Date()
    const firstDayMonth = startOfMonth(currentDate)
    const lastDayMonth = endOfMonth(currentDate)

    const daysInMonth = eachDayOfInterval(
        {
            start: firstDayMonth,
            end: lastDayMonth,
        }
    )

    const startingDayIndex = getDay(firstDayMonth) - 1 //correccion de formato domingo-sabado a lunes-domingo
    
    
    console.log(events[0].title)
    return (
        <div className="container" >
            <div className='calendar-wrapper'>
                <div className="mb-4">
                    <h2 className='text-center'>{format(currentDate, "MMMM yyyy", {locale})}</h2>
                </div>
                <div className="calendar-grid">
                    {DIAS.map((dia) => {
                        return (
                            <div key={dia} className="font-bold">
                                {dia}                            
                            </div>
                        )
                    })}

                    {Array.from({length: startingDayIndex}).map((_, index) => {
                        return <div key={index}></div>
                    })}

                    {daysInMonth.map((dia, index) => {
                        return <div key={index} className={clsx("border rounded-md p-2 text-center", {
                            "bg-gray-200": isToday(dia),
                            "text-gray-900":isToday(dia),
                        })}> 
                        {format(dia,"d")}
                        {events.filter((event) => isSameDay(event.date, dia)).map((event) => { 
                            return <div key={event.title}>{event.title}</div>
                        })}
                        </div>
                    })}
                </div>
                
            </div>
            <div className="events-list">
                <h3 className="text-gray-900">Próximos eventos</h3>
                <ul>
                    <li>Evento 1</li>
                    <li>Evento 2</li>
                    <li>Evento 3</li>
                    {/* Puedes añadir más eventos aquí */}
                </ul>
            </div>
        </div>
    )
}

export default Calendar
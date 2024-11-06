import React, { useState, useMemo } from 'react';
import { eachDayOfInterval, endOfMonth, startOfMonth, getDay, isToday, addMonths, subMonths, format } from 'date-fns';
import es from 'date-fns/locale/es';
import '../stylesheets/Calendar/Calendar.scss';
import clsx from 'clsx';

const DIAS = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"]; // Lunes a Domingo
const locale = es;

const Calendar = ({ events = [] }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const firstDayMonth = startOfMonth(currentDate);
    const lastDayMonth = endOfMonth(currentDate);

    const daysInMonth = eachDayOfInterval({ start: firstDayMonth, end: lastDayMonth });

    // Ajuste de startingDayIndex: Mapear el domingo (getDay() = 0) a 6, y el lunes (getDay() = 1) a 0
    const startingDayIndex = getDay(firstDayMonth); // Valor de 0 (domingo) a 6 (sábado)
    const adjustedStartingDayIndex = (startingDayIndex + 6) % 7; // Ajustar para que 0 sea lunes y 6 domingo

    // Calculando el número total de celdas para que la cuadrícula tenga 6 filas (7 días * 6 filas = 42 celdas)
    const totalCells = 42;
    const emptyCellsAtStart = adjustedStartingDayIndex; // Celdas vacías al principio del mes

    const eventsByDate = useMemo(() => {
        return events.reduce((acc, event) => {
            const dateKey = format(event.date, "yyyy-MM-dd");
            if (!acc[dateKey]) acc[dateKey] = [];
            acc[dateKey].push(event);
            return acc;
        }, {});
    }, [events]);

    const handlePrevMonth = () => {
        setCurrentDate((prevDate) => subMonths(prevDate, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate((prevDate) => addMonths(prevDate, 1));
    };

    // Rellenar el calendario hasta 42 celdas
    const paddedDaysInMonth = [
        ...Array(emptyCellsAtStart).fill(null),  // Celdas vacías al principio
        ...daysInMonth,
    ];

    // Rellenar con celdas vacías al final si es necesario
    const emptyCellsAtEnd = totalCells - paddedDaysInMonth.length;
    const finalCalendarDays = [...paddedDaysInMonth, ...Array(emptyCellsAtEnd).fill(null)];

    return (
        <div className="container">
            <div className='calendar-wrapper'>
                <div className="calendar-header">
                    <button onClick={handlePrevMonth} className="month-nav-btn">⬅️</button>
                    <h2 className='text-center'>
                        {format(currentDate, "MMMM yyyy", { locale })}
                    </h2>
                    <button onClick={handleNextMonth} className="month-nav-btn">➡️</button>
                </div>
                
                <div className="calendar-grid">
                    {DIAS.map((dia) => (
                        <div key={dia} className="font-bold">{dia}</div>
                    ))}

                    {finalCalendarDays.map((dia, index) => {
                        if (!dia) {
                            // Celdas vacías
                            return <div key={index}></div>;
                        }
                        const dateKey = format(dia, "yyyy-MM-dd");
                        const todaysEvents = eventsByDate[dateKey] || [];
                        return (
                            <div key={index} className={clsx("border rounded-md p-2 text-center", {
                                "bg-gray-200": isToday(dia),
                                "text-gray-900": isToday(dia),
                            })}>
                                {format(dia, "d")}
                                {todaysEvents.map((event) => (
                                    <div key={event.title} className="bg-green-500 rounded-md text-white text-xxs">
                                        {event.title}
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="events-list">
                <h3 className="text-gray-900">Próximos eventos</h3>
                <ul>
                    {events.length > 0 ? (
                        events.map((event, index) => (
                            <li key={index}>
                                {format(event.date, "dd MMMM yyyy", { locale })}: {event.title}
                            </li>
                        ))
                    ) : (
                        <li>No hay eventos programados</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Calendar;

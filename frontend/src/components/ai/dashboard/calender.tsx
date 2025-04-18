'use client'
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './dashboard.scss'

export const CalendarDaysExample: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <div className="calendar-wrapper">
      <Calendar
        value={date}
        onChange={(value) => {
          if (value instanceof Date) {
            setDate(value)
          }
        }}
        locale="en-US"
      />
    </div>
  )
}

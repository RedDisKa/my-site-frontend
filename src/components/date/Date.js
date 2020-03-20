import React from 'react'
import s from './date.module.scss'
import moment from 'moment'

export const Date = ({ date }) => (
    <div className={s.date_container}>
        <span className={s.calendar_icon} />
        <p className={s.date}>{moment(date).format('DD/MM/YYYY')}</p>
    </div>
)

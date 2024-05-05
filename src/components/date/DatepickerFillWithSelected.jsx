import React from 'react';
import { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DatepickerFillWithSelected = ({ wrapClass }) => {

    const [datebox, setDatebox] = useState(false);
    const handleFocus = () => {
        setDatebox(true);
    }
    const closeBox = () => {
        setDatebox(false);
    }

    const [dateRange, setDateRange] = useState([new Date("2024/01/01"), new Date()]);
    const [startDate, endDate] = dateRange;

    return (
        <div className={wrapClass}>
            <div onClick={closeBox} className={datebox? 'box_bg on':'box_bg'}></div>
            <div onFocus={handleFocus} className={datebox? 'datebox w230 datepicker on' : 'datebox w230 datepicker'}>
                <DatePicker
                dateFormat="yyyy/MM/dd"
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                placeholderText="yyyy/mm/dd-yyyy/mm/dd"
                onChange={(update) => {setDateRange(update);}}
                formatWeekDay={nameOfDay => nameOfDay.substr(0,1)}
                />
            </div>
        </div>
    );
};

export default DatepickerFillWithSelected;
import React from 'react';
import { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DatepickerLineActive = ({ wrapClass, open }) => {

    const [datebox, setDatebox] = useState(true);
    const handleFocus = () => {
        setDatebox(!datebox);
    }
    const closeBox = () => {
        setDatebox(false);
    }

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className={wrapClass}>
            <div onClick={closeBox} className={datebox? 'box_bg on':'box_bg'}></div>
            <div onFocus={handleFocus} onBlur={closeBox} className={datebox? 'datebox line w200 datepicker on' : 'datebox line w200 datepicker on'}>
                <DatePicker 
                dateFormat="yyyy/MM/dd" 
                selected={startDate} 
                placeholderText="yyyy/MM/dd"
                onChange={(date) => setStartDate(date)} 
                open={open}
                formatWeekDay={nameOfDay => nameOfDay.substr(0,1)}
                />
            </div>
        </div>
    );
};

export default DatepickerLineActive;
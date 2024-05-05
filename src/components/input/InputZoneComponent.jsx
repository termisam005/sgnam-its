import React from 'react';
import ImgComponent from '../common/ImgComponent';


const InputZoneComponent = ({ zoneClass, type, inputClass, placeholder, value, onChange, deleteClass, onDelete, messClass, message }) => {

    return (
        <div className={zoneClass}>
            <input type={type} className={inputClass} placeholder={placeholder} value={value} onChange={onChange} />
            <span className={deleteClass} onClick={onDelete}>
                <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
            </span>
            <span className={messClass}>{message}</span>
        </div>
    );
};

export default InputZoneComponent;

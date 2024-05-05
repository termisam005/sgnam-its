import React from 'react';


const WeatherSign = ({ weatherClass, markClass, resultClass, temperClass, temper, unitClass, unit, textClass, text }) => {

    return (
        <div className={weatherClass}>
            <p className={markClass}></p>
            <div>
                <h1 className={resultClass}>
                    <span className={temperClass}>{temper}</span>
                    <span className={unitClass}>{unit}</span>
                </h1>
                <span className={textClass}>
                    {text}
                </span>
            </div>
        </div>
    );
};

export default WeatherSign;
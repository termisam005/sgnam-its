import React from 'react';
import GnbComponent from '../common/GnbComponent';
import LightModeToggle from '../common/LightModeToggle';
import DarkLightComponent from '../mode/DarkLightComponent';


const Gnb = () => {

    return (
        <nav className='gnb'>
            <ul className='gap_30'>
                <GnbComponent title={'상황관리'} path={'/main'} />
                <GnbComponent title={'상황관리이력'} path={'/record'} />
                <GnbComponent title={'신호최적화'} path={'/signal'} />
                <GnbComponent title={'사용자관리'} path={'/users'} />
                <GnbComponent title={'Error'} path={'/error'} />
                <GnbComponent title={'Login'} path={'/login'} />
                <GnbComponent title={'Components'} path={'/accordionlist'} />
                <DarkLightComponent />
            </ul>
        </nav>
    );
};

export default Gnb;
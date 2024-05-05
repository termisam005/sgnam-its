import React from 'react';
import { useNavigate } from 'react-router';;


const HeaderLeft = ({children}) => {

  const navigator = useNavigate();

  return (
    <div className='header_left'>
        <h1 className='header_logo'>
            <a onClick={() => navigator('/main')}>
                {/* <ImgComponent className={'logo_hd_uniplus'} src={'logo_uniplus.svg'} /> */}
                <span className='sp_logo_uniplus'></span>
            </a>
        </h1>
        {children}
    </div>
  );
};

export default HeaderLeft;
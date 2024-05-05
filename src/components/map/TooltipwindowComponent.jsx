import React from 'react';

const TooltipwindowComponent = ({addedClass, title, titleTwo, children}) => {

  return (
    <div className={'infowindow_box '+ addedClass}>
        <h5 className='infowindow_title'>{title}<br/>{titleTwo}</h5>
        <div className='infowindow_content'>
            {children}
        </div>
    </div>
  );
};

export default TooltipwindowComponent;
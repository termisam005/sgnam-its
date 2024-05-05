import React from 'react';
import ImgComponent from './ImgComponent';


const LnbDivComponent = ({ divClass, topClass, titleImgSrc, titleClass, title, subClass, children }) => {

  return (
    <div className={divClass}>
      <div className={topClass}>
          <ImgComponent className={'w20'} src={titleImgSrc} />
          <span className={titleClass}>{title}</span>
      </div>
      <div className={subClass}>
          {children}
      </div>
  </div>
  );
};

export default LnbDivComponent;
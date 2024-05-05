import React from 'react';

const PlaybarType1 = ({addedClass, order, played, loaded, normal, playW, loadW}) => {
    return (
        <div className={addedClass}>
            {
                played === true
                ? <><span className='type1_text played_text'>{order}</span>
                <div className={'played ' + playW}></div></>
                : null 
            }
            {   
                loaded === true
                ? <><span className='type1_text loaded_text'>{order}</span>
                <div className={'loaded ' + loadW}></div></>
                : null
            }
            {   
                normal === true
                ? <span className='type1_text normal_text'>{order}</span>
                : null
            }
        </div>
    );
};

export default PlaybarType1;

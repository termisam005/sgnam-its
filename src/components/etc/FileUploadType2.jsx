import React from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import InputComponent from '../../components/input/InputComponent';

const FileUploadType2 = ({addedClass, imgClass}) => {
    return (
        <div className={'upload_box ' + addedClass}>
            <ImgComponent src={'ring_xsmall.png'} className={imgClass} />
        </div>
    );
};

export default FileUploadType2;

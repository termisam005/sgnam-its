import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import InputComponent from '../input/InputComponent';
import ButtonComponent from '../common/ButtonComponent';
import SelectComponent from '../select/SelectComponent';
import PhotoComponent from '../common/PhotoComponent';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const PersonContainerUsage = ({ }) => {

    //라디오 탭
    const [radioTab, setRadioTab] = useState(1);
    const tabRadio = (index) => {
        setRadioTab(index);
    }

    //Datepicker
    const [datebox, setDatebox] = useState(false);
    const handleFocus = () => {
        setDatebox(!datebox);
    }
    const closeBox = () => {
        setDatebox(false);
    }
    const [startDate, setStartDate] = useState(null);

    return (
        <div className='vert_wrap'>
            <section className='user_info'>
                <div className='profile_cont'>
                    <ButtonComponent className={'btn_secondary btn_s fs_14_medium'} txt={'시스템권한 설정'} />
                    <PhotoComponent imgName={'prof_40.svg'}>
                        <p className='circle_g32'>
                            <ImgComponent src={'pencil_16.svg'} />
                        </p>
                    </PhotoComponent>
                </div>
                <div className='user_form'>
                    <dl className="check_dl user">
                        <dt>사용자 ID</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' placeholder={'Placeholder'} />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>사용자명</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' placeholder={'Placeholder'} />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>부서명</dt>
                        <dd>
                            <SelectComponent className={'selector sm w-100'}>
                                <option value="">교통정보운영과</option>
                                <option value="">교통정보</option>
                            </SelectComponent>
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>직위명</dt>
                        <dd>
                            <SelectComponent className={'selector sm w-100'}>
                                <option value="">주무관</option>
                                <option value="">팀장</option>
                            </SelectComponent>
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>직책명</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' placeholder={'Placeholder'} />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>성별</dt>
                        <dd>
                            <div className='dflx_ac_jbet'>
                                <p className={radioTab === 1? "ch_radio on" : "ch_radio"} onClick={() => tabRadio(1)}>
                                    <span className="radio"></span>
                                    <span className="word">남</span>
                                </p>
                                <p className={radioTab === 2? "ch_radio on" : "ch_radio"} onClick={() => tabRadio(2)}>
                                    <span className="radio"></span>
                                    <span className="word">여</span>
                                </p>
                            </div>
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>생년월일</dt>
                        <dd>
                            <div className='w-100'>
                                <div onClick={closeBox} className={datebox? 'box_bg on':'box_bg'}></div>
                                <div onFocus={handleFocus} onBlur={closeBox} className={datebox? 'datebox line w-100 datepicker on' : 'datebox line w-100 datepicker'}>
                                    <DatePicker dateFormat="yyyy/MM/dd" placeholderText="yyyy/MM/dd" selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>근무형태</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' placeholder={'Placeholder'} />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>담당업무</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' placeholder={'Placeholder'} />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>이메일 주소</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' placeholder={'Placeholder'} />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>휴대폰 번호</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' placeholder={'Placeholder'} />
                        </dd>
                    </dl>
                </div>
            </section>
            <section className='line_bottom'>
                <ButtonComponent className={'btn_secondary btn_m '} txt={'취소'} />
                <ButtonComponent className={'btn_primary btn_m '} txt={'저장'} />
            </section>
        </div>
    );
};

export default PersonContainerUsage;
import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';
import CheckComponent from '../../components/common/CheckComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import SelectComponent from '../../components/select/SelectComponent';

import InputComponent from '../../components/input/InputComponent';
import InputLargeComponent from '../../components/input/InputLargeComponent';
import InputLargeLineComponent from '../../components/input/InputLargeLineComponent';
import InputPassLargeComponent from '../../components/input/InputPassLargeComponent';
import InputMdComponent from '../../components/input/InputMdComponent';
import InputMdLineComponent from '../../components/input/InputMdLineComponent';
import InputPassMdComponent from '../../components/input/InputPassMdComponent';
import InputZoneComponent from '../../components/input/InputZoneComponent';
import InputPassComponent from '../../components/input/InputPassComponent';

import SearchSettComponent from '../../components/search/SearchSettComponent';
import SearchSettLineComponent from '../../components/search/SearchSettLineComponent';
import SearchWordComponent from '../../components/search/SearchWordComponent';
import SearchWordLineComponent from '../../components/search/SearchWordLineComponent';
import SearchBoardComponent from '../../components/search/SearchBoardComponent';
import SearchBoardLineComponent from '../../components/search/SearchBoardLineComponent';

import EditorTextComponent from '../../components/editor/EditorTextComponent';
import EditorVms1Component from '../../components/editor/EditorVms1Component';
import EditorVms2Component from '../../components/editor/EditorVms2Component';
import EditorVms3Component from '../../components/editor/EditorVms3Component';



const InputField = () => {

    //아이디 이벤트
    const [id, setId] = useState('');
    const [idInput, setIdinput] = useState();
    const [deletor, setDeletor] = useState(false);

    const writePut = (e) => {
        setId(e.target.value);
        setIdinput(true);
        setDeletor(true);
    }
    const onDelete = (e) => {
        setId(e.target.value = '');
        setIdinput(false);
        setDeletor(false);
    }

    //비밀번호 이벤트
    const [password, setPassword] = useState('');
    const [viewer, setViewer] = useState(false);

    const writePass = (e) => {
        setPassword(e.target.value);
    }
    const onSee = (e) => {
        setPassword(e.target.value);
        setViewer(!viewer);
    }

    return (
        <div className='guide_back'>
            <div className='guide_wrap'>
            
                <Header>
                    <HeaderLeft />
                    <GnbComponents />
                    <HeaderRight>
                        <ProfileComponent />
                    </HeaderRight>
                </Header>

                <div className='guide_center width1720'>

                    <article className='guide_top'>
                        <h1>Input field</h1>
                    </article>

                    <article class="Gr_contents">
                        <div class="comp_top">
                            <h2>Text input</h2>
                        </div>

                        <section class="comp_conts">
                            <dl class="comp_dl">
                                <dd class="comp_dd">
                                    <div class="compline">
                                        <p class="comp_size">40px</p>
                                        <div class="components gap_20">
                                            <InputLargeComponent zoneClass={'put_zone normal w260'} type={'text'} placeholder={'아이디'} 
                                            messClass={'mess error'} message={'Error message'} />
                                            <InputLargeLineComponent zoneClass={'put_zone normal w260'} type={'text'} placeholder={'아이디'} 
                                            messClass={'mess error'} message={'Error message'} />
                                            <InputPassLargeComponent zoneClass={'put_zone normal w260'} type={'password'} inputClass={'wrput pass large'} 
                                            placeholder={'비밀번호'} messClass={'mess error'} message={'Error message'} />
                                            <InputPassLargeComponent zoneClass={'put_zone normal w260'} type={'password'} inputClass={'wrput pass large line'} 
                                            placeholder={'비밀번호'} messClass={'mess error'} message={'Error message'} />
                                        </div>
                                    </div>
                                    <div class="compline m-t-30">
                                        <p class="comp_size">28px</p>
                                        <div class="components gap_20">
                                            <InputMdComponent zoneClass={'put_zone normal w260'} type={'text'} placeholder={'아이디'} 
                                            messClass={'mess error'} message={'Error message'} />
                                            <InputMdLineComponent zoneClass={'put_zone normal w260'} type={'text'} placeholder={'아이디'} 
                                            messClass={'mess error'} message={'Error message'} />
                                            <InputPassMdComponent zoneClass={'put_zone normal w260'} type={'password'} inputClass={'wrput pass'} 
                                            placeholder={'비밀번호'} messClass={'mess error'} message={'Error message'} />
                                            <InputPassMdComponent zoneClass={'put_zone normal w260'} type={'password'} inputClass={'wrput pass line'} 
                                            placeholder={'비밀번호'} messClass={'mess error'} message={'Error message'} />
                                        </div>
                                    </div>
                                    <div class="compline m-t-30">
                                        <p class="comp_size">Done</p>
                                        <div class="components gap_20">
                                            <div className="put_zone w260">
                                                <InputComponent className={'wrput large'} type={'text'} placeholder="아이디" value="Done" />
                                                <span className="put_check put_delete">
                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                </span>
                                            </div>
                                            <div className="put_zone w260">
                                                <InputComponent className={'wrput large line'} type={'text'} placeholder="아이디" value="Done" />
                                                <span className="put_check put_delete">
                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                </span>
                                            </div>
                                            <div className="put_zone w260">
                                                <InputComponent className={'wrput'} type={'text'} placeholder="아이디" value="Done" />
                                                <span className="put_check put_delete">
                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                </span>
                                            </div>
                                            <div className="put_zone w260">
                                                <InputComponent className={'wrput line'} type={'text'} placeholder="아이디" value="Done" />
                                                <span className="put_check put_delete">
                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="compline m-t-30">
                                        <p class="comp_size">Error</p>
                                        <div class="components gap_20">
                                            <div className="put_zone w260">
                                                <InputComponent className={'wrput large error'} type={'text'} placeholder="아이디" value="Done" />
                                                <span className="put_check put_delete">
                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                </span>
                                                <span className="mess error">Error message</span>
                                            </div>
                                            <div className="put_zone w260">
                                                <InputComponent className={'wrput large line error'} type={'text'} placeholder="아이디" value="Done" />
                                                <span className="put_check put_delete">
                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                </span>
                                                <span className="mess error">Error message</span>
                                            </div>
                                            <div className="put_zone w260">
                                                <InputComponent className={'wrput pass large error'} type={'password'} placeholder="비밀번호" value="Done" />
                                                <span className="put_check put_see">
                                                    <ImgComponent className={'img_see w20'} src={"eye_fff_on_20.svg"} />
                                                    <ImgComponent className={'img_see_off w20 op04'} src={"eye_fff_off_20.svg"} />
                                                </span>
                                                <span className="mess error">Error message</span>
                                            </div>
                                            <div className="put_zone w260">
                                                <InputComponent className={'wrput pass large line error'} type={'password'} placeholder="비밀번호" value="Done" />
                                                <span className="put_check put_see">
                                                    <ImgComponent className={'img_see w20'} src={"eye_fff_on_20.svg"} />
                                                    <ImgComponent className={'img_see_off w20 op04'} src={"eye_fff_off_20.svg"} />
                                                </span>
                                                <span className="mess error">Error message</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="compline m-t-30">
                                        <p class="comp_size"></p>
                                        <div class="components gap_20">
                                            <div className="put_zone w260">
                                                <InputComponent className={'wrput error'} type={'text'} placeholder="아이디" value="Done" />
                                                <span className="put_check put_delete">
                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                </span>
                                                <span className="mess error">Error message</span>
                                            </div>
                                            <div className="put_zone w260">
                                                <InputComponent className={'wrput line error'} type={'text'} placeholder="아이디" value="Done" />
                                                <span className="put_check put_delete">
                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                </span>
                                                <span className="mess error">Error message</span>
                                            </div>
                                            <div className="put_zone w260">
                                                <InputComponent className={'wrput pass error'} type={'password'} placeholder="비밀번호" value="Done" />
                                                <span className="put_check put_see">
                                                    <ImgComponent className={'img_see w20'} src={"eye_fff_on_20.svg"} />
                                                    <ImgComponent className={'img_see_off w20 op04'} src={"eye_fff_off_20.svg"} />
                                                </span>
                                                <span className="mess error">Error message</span>
                                            </div>
                                            <div className="put_zone w260">
                                                <InputComponent className={'wrput pass line error'} type={'password'} placeholder="비밀번호" value="Done" />
                                                <span className="put_check put_see">
                                                    <ImgComponent className={'img_see w20'} src={"eye_fff_on_20.svg"} />
                                                    <ImgComponent className={'img_see_off w20 op04'} src={"eye_fff_off_20.svg"} />
                                                </span>
                                                <span className="mess error">Error message</span>
                                            </div>
                                        </div>
                                    </div>
                                </dd>
                            </dl>

                            <dl class="comp_dl">
                                <dt class="comp_dt">Text area</dt>
                                <dd class="comp_dd">
                                    <div class="compline grid_column2 gap_20">
                                        <div class="temrs_text_wrap">
                                            <textarea class="terms_area scroll" placeholder="Text Area"></textarea>
                                        </div>
                                        <div class="temrs_text_wrap line">
                                            <textarea class="terms_area scroll" placeholder="Text Area"></textarea>
                                        </div>
                                    </div>
                                </dd>
                            </dl>

                            <dl class="comp_dl">
                                <dt class="comp_dt">Read Only</dt>
                                <dd class="comp_dd">
                                    <div class="compline gap_20">
                                        <div class="put_zone w260">
                                            <InputComponent className={'wrput large read_only'} type={'text'} placeholder="아이디" value="Default" />
                                        </div>
                                        <div class="put_zone w260">
                                            <InputComponent className={'wrput read_only'} type={'text'} placeholder="아이디" value="Default" />
                                        </div>
                                    </div>
                                    <div class="compline gap_20 m-t-30">
                                        <div class="put_zone w260">
                                            <InputComponent className={'wrput large read_light'} type={'text'} placeholder="아이디" value="Highlight" />
                                        </div>
                                        <div class="put_zone w260">
                                            <InputComponent className={'wrput read_light'} type={'text'} placeholder="아이디" value="Highlight" />
                                        </div>
                                    </div>
                                    <div class="compline gap_20 m-t-30">
                                        <div class="put_zone w260">
                                            <InputComponent className={'wrput large read_error'} type={'text'} placeholder="아이디" value="Error" />
                                        </div>
                                        <div class="put_zone w260">
                                            <InputComponent className={'wrput read_error'} type={'text'} placeholder="아이디" value="Error" />
                                        </div>
                                    </div>
                                    <div class="compline gap_20 m-t-30">
                                        <div class="put_zone w260">
                                            <InputComponent className={'wrput large read_normal'} type={'text'} placeholder="아이디" value="Normal" />
                                        </div>
                                        <div class="put_zone w260">
                                            <InputComponent className={'wrput read_normal'} type={'text'} placeholder="아이디" value="Normal" />
                                        </div>
                                    </div>
                                </dd>
                            </dl>

                            <dl class="comp_dl m-b-100">
                                <dt class="comp_dt">Search</dt>
                                <dd class="comp_dd">
                                    <div class="compline gap_20">
                                        <SearchSettComponent lineClass={'srch_line'} zoneClass={'put_zone w240'} type={'text'} placeholder={'Search'} />
                                        <SearchSettLineComponent lineClass={'srch_line'} zoneClass={'put_zone w240'} type={'text'} placeholder={'Search'} />
                                    </div>
                                    <div class="compline gap_20 m-t-30">
                                        <SearchWordComponent lineClass={'srch_line'} zoneClass={'put_zone w240'} type={'text'} placeholder={'Search'} />
                                        <SearchWordLineComponent lineClass={'srch_line'} zoneClass={'put_zone w240'} type={'text'} placeholder={'Search'} />
                                        <SearchBoardComponent lineClass={'srch_line'} zoneClass={'put_zone w240'} btClass={"bt_srch op04"}
                                        type={'text'} placeholder={'검색'} />
                                        <SearchBoardLineComponent lineClass={'srch_line'} zoneClass={'put_zone w240'} btClass={"bt_srch op04"}
                                        type={'text'} placeholder={'검색'} />
                                        <SearchBoardComponent lineClass={'srch_line'} zoneClass={'put_zone w240'} btClass={"bt_srch op04 dpnone"}
                                        type={'text'} placeholder={'검색'} />
                                    </div>
                                </dd>
                            </dl>

                        </section>
                    </article>

                    <article class="Gr_contents">
                        <div class="comp_top">
                            <h2>Usage</h2>
                        </div>
                        <section class="comp_conts">
                            <dl class="comp_dl gap_40">

                                <section className="login_input">
                                    <InputZoneComponent zoneClass={'put_zone normal m-b-8'} type={'text'} placeholder={'아이디'} 
                                        value={id} onChange={writePut} onDelete={onDelete} 
                                        inputClass={idInput? 'wrput large p-r-32' : 'wrput large'} 
                                        deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} 
                                        messClass={'mess error'} message={'Error message'} />
                                    <InputPassComponent zoneClass={'put_zone normal m-t-8'} type={'password'} inputClass={'wrput pass large'} placeholder={'비밀번호'} 
                                        value={password} onChange={writePass} onSee={onSee} 
                                        seeClass={viewer? 'put_check put_see on' : 'put_check put_see'} 
                                        messClass={'mess error'} message={'Error message'} />
                                    <div className='save_group'>
                                        <CheckComponent type={'checkbox'} checkClass={'checkbox_type login'} checkId={'checkbox01'} name={'checkbox_login'} 
                                        labelClass={'fs_13'} txt={'아이디저장'} />
                                        <div className='pw_initial'>
                                            <a>비빌번호 초기화</a>
                                        </div>
                                    </div>
                                    <ButtonComponent type={'submit'} txt={'로그인'} className={'btn_primary btn_l w-100'} />
                                </section>

                                <section className="login_input">
                                    <InputLargeComponent zoneClass={'put_zone normal m-b-8'} type={'text'} placeholder={'아이디'} 
                                        messClass={'mess error'} message={'Error message'} />
                                    <div className="put_zone">
                                        <InputComponent className={'wrput pass large error'} type={'password'} placeholder="비밀번호" value="Done" />
                                        <span className="put_check put_see">
                                            <ImgComponent className={'img_see w20'} src={"eye_fff_on_20.svg"} />
                                            <ImgComponent className={'img_see_off w20 op04'} src={"eye_fff_off_20.svg"} />
                                        </span>
                                        <span className="mess error">Error message</span>
                                    </div>
                                    <div class='save_group'>
                                        <CheckComponent type={'checkbox'} checkClass={'checkbox_type login'} checkId={'checkbox02'} name={'checkbox_login'} 
                                        labelClass={'fs_13'} txt={'아이디저장'} />
                                        <div className='pw_initial'>
                                            <a>비빌번호 초기화</a>
                                        </div>
                                    </div>
                                    <ButtonComponent type={'submit'} txt={'로그인'} className={'btn_primary btn_l w-100'} />
                                </section>

                                <div className="popover_box w320">
                                    <div className="popup_title_bg">
                                        <h5 class="h_tlt">
                                            주소록 추가
                                        </h5>
                                        <ButtonWithComponent type={'button'} className={'popover_close'}>
                                            <ImgComponent className={'w24'} src={'close_line_fff_24.svg'} />
                                        </ButtonWithComponent>
                                    </div>
                                    <div className="popup_contents p-20">
                                        <dl className="pop_rcd_dl">
                                            <dt>소속</dt>
                                            <dd>
                                                <SelectComponent className={'selector sm'}>
                                                    <option value="">교통정보과1</option>
                                                    <option value="">교통정보과2</option>
                                                    <option value="">교통정보과3</option>
                                                </SelectComponent>
                                            </dd>
                                        </dl>
                                        <dl className="pop_rcd_dl">
                                            <dt>내선번호</dt>
                                            <dd>
                                                <div className="put_zone">
                                                    <InputComponent type="text" className='wrput line' value='Done' />
                                                </div>
                                            </dd>
                                        </dl>
                                        <dl className="pop_rcd_dl">
                                            <dt>직급</dt>
                                            <dd>
                                                <div className="put_zone">
                                                    <InputComponent type="text" className='wrput line' value='8급' />
                                                </div>
                                            </dd>
                                        </dl>
                                        <dl className="pop_rcd_dl">
                                            <dt>내선번호</dt>
                                            <dd>
                                                <div className="put_zone">
                                                    <InputComponent type="text" className='wrput line' value='032-000-0000' />
                                                </div>
                                            </dd>
                                        </dl>
                                        <dl className="pop_rcd_dl m-b-20">
                                            <dt>연락처</dt>
                                            <dd>
                                                <div className="put_zone">
                                                    <InputComponent type="text" className='wrput line' value='010-0000-0000' />
                                                </div>
                                            </dd>
                                        </dl>
                                        <ButtonComponent type={'submit'} txt={'추가'} className={'btn_primary btn_m w-100'} />
                                    </div>
                                </div>

                            </dl>
                        </section>
                    </article>

                    <article class="Gr_contents">
                        <div class="comp_top">
                            <h2>Editor</h2>
                        </div>
                        <section class="comp_conts">
                            <dl class="comp_dl m-b-50">
                                <dt>Text</dt>
                                <dd>
                                    <EditorTextComponent />
                                </dd>
                            </dl>
                            <dl class="comp_dl">
                                <dt>Vms</dt>
                                <dd>
                                    <EditorVms1Component />
                                </dd>
                            </dl>
                            <dl class="comp_dl">
                                <dt>Vms</dt>
                                <dd>
                                    <EditorVms2Component />
                                </dd>
                            </dl>
                            <dl class="comp_dl">
                                <dt>Vms</dt>
                                <dd>
                                    <EditorVms3Component />
                                </dd>
                            </dl>
                        </section>
                    </article>

                </div>

            </div>
        </div>
    );
};

export default InputField;

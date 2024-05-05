import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import CardblockComponent from '../../components/card/CardblockComponent';

import IndicatorComponent from '../../components/card/IndicatorComponent';
import IndicatorOnComponent from '../../components/card/IndicatorOnComponent';
import IndicatorOffComponent from '../../components/card/IndicatorOffComponent';
import IndicatorTabComponent from '../../components/card/IndicatorTabComponent';
import IndicatorTabOnComponent from '../../components/card/IndicatorTabOnComponent'
import DiagonComponent from '../../components/common/DiagonComponent';
import TmzoneComponent from '../../components/card/TmzoneComponent';
import TmboxComponent from '../../components/card/TmboxComponent';
import ExpressComponent from '../../components/card/ExpressComponent';
import ExpdlComponent from '../../components/card/ExpdlComponent';
import LineContainComponent from '../../components/popup/LineContainComponent';
import PersonContainerUsage from '../../components/layout/PersonContainerUsage';
import SmarttopComponent from '../../components/card/SmarttopComponent';
import SmartContComponent from '../../components/card/SmartContComponent';


const Cards = () => {

    //탭메뉴
    const [menuTab, setMenuTab] = useState(1);
    const tabMenu = (index) => {
        setMenuTab(index);
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
                    <h1>Cards</h1>
                </article>

                <article className="Gr_contents m-t-100">
                    <div className="m-b-10">
                        <h2>Primary card</h2>
                    </div>
                    <section className="comp_conts m-t-40">
                        <div className="display_grid gap_40">
                            <div className="dflx col_gap16">
                                <div className="dflx col_gap80">
                                    <div>
                                        <p className="fs_bold m-b-10">Layout</p>
                                        <div className="dflx_as col_gap16 m-b-16">
                                            <IndicatorComponent className={'indicator'}>
                                                <div className="indi_top">
                                                    <h1>Title</h1>
                                                </div>
                                                <div className="indi_conts h120"></div>
                                            </IndicatorComponent>
                                            <IndicatorComponent className={'indicator'}>
                                                <div className="indi_top">
                                                    <h1>Title</h1>
                                                </div>
                                                <div className="indi_conts h120"></div>
                                            </IndicatorComponent>
                                        </div>
                                        <div className="dflx_as col_gap16">
                                            <CardblockComponent className={'card_block default w320'}>
                                                <div className="indi_top">
                                                    <ul className="record_menu hauto">
                                                        <li>
                                                            <a className="on">Tab1</a>
                                                        </li>
                                                        <li>
                                                            <a>Tab2</a>
                                                        </li>
                                                        <li>
                                                            <a>Tab3</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="card_body">
                                                    <div className="dflx h150">
                                                    </div>
                                                </div>
                                            </CardblockComponent>                                           
                                            <CardblockComponent className={'card_block default w320'}>
                                                <div className="indi_top">
                                                    <ul className="record_menu hauto">
                                                        <li>
                                                            <a className="on">Tab1</a>
                                                        </li>
                                                        <li>
                                                            <a>Tab2</a>
                                                        </li>
                                                        <li>
                                                            <a>Tab3</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="card_body">
                                                    <div className="dflx h150">
                                                    </div>
                                                </div>
                                            </CardblockComponent>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="fs_bold m-b-10">With tab</p>
                                        <div className="">
                                            <article className="indi_tabs w656 m-b-16">
                                                <ButtonComponent type={'button'} className={'btn_floating btn_m selected flex1'} txt={'Selected'} onClick={''} />
                                                <ButtonComponent type={'button'} className={'btn_floating btn_m flex1'} txt={'Default'} onClick={''} />
                                                <ButtonComponent type={'button'} className={'btn_floating btn_m flex1'} txt={'Default'} onClick={''} />
                                            </article>
                                            <div className="dflx_ac_jcent col_gap16 m-b-16">
                                                <IndicatorComponent className={'indicator h109'}>
                                                    <div className="indi_top withtab">
                                                        <h1>Title</h1>
                                                        <div className="tab_line">
                                                            <ButtonComponent type={'button'} className={'btn_line1 withtab btn_xs selected'} txt={'Tab1'} onClick={''} />
                                                            <ButtonComponent type={'button'} className={'btn_line1 withtab btn_xs'} txt={'Tab2'} onClick={''} />
                                                        </div>
                                                    </div>
                                                </IndicatorComponent>
                                                <IndicatorComponent className={'indicator h109'}>
                                                    <div className="indi_top">
                                                        <h1>Title</h1>
                                                    </div>
                                                    <div className="indi_conts">
                                                        <ul className="record_menu hauto">
                                                            <li>
                                                                <a className="on">Selected</a>
                                                            </li>
                                                            <li>
                                                                <a>Default</a>
                                                            </li>
                                                            <li>
                                                                <a>Default</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </IndicatorComponent>
                                            </div>
                                            <div className="dflx col_gap16 m-b-16">
                                                <IndicatorComponent className={'indicator h109'}>
                                                    <div className="indi_top">
                                                        <h1>Title</h1>
                                                    </div>
                                                    <div className="indi_conts dflx">
                                                        <div className="tab_line">
                                                            <ButtonComponent type={'button'} className={'btn_line1 withtab btn_xs selected'} txt={'Tab1'} onClick={''} />
                                                            <ButtonComponent type={'button'} className={'btn_line1 withtab btn_xs'} txt={'Tab2'} onClick={''} />
                                                        </div>
                                                    </div>
                                                </IndicatorComponent>
                                                <IndicatorComponent className={'indicator donot h109'}>
                                                    <div className="indi_top">
                                                        <ul className="record_menu hauto">
                                                            <li>
                                                                <a className="on">Tab1</a>
                                                            </li>
                                                            <li>
                                                                <a>Tab2</a>
                                                            </li>
                                                            <li>
                                                                <a>Tab3</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="indi_conts">
                                                        <ul className="record_menu hauto">
                                                            <li>
                                                                <a className="on">Selected</a>
                                                            </li>
                                                            <li>
                                                                <a>Default</a>
                                                            </li>
                                                            <li>
                                                                <a>Default</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </IndicatorComponent>
                                            </div>
                                            <div className="dflx col_gap16">
                                                <IndicatorComponent className={'indicator h109'}>
                                                    <div className="indi_top">
                                                        <ul className="record_menu hauto">
                                                            <li>
                                                                <a className="on">Tab1</a>
                                                            </li>
                                                            <li>
                                                                <a>Tab2</a>
                                                            </li>
                                                            <li>
                                                                <a>Tab3</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="indi_conts dflx">
                                                        <div className="tab_line">
                                                            <ButtonComponent type={'button'} className={'btn_line1 withtab btn_xs selected'} txt={'Tab1'} onClick={''} />
                                                            <ButtonComponent type={'button'} className={'btn_line1 withtab btn_xs'} txt={'Tab2'} onClick={''} />
                                                        </div>
                                                    </div>
                                                </IndicatorComponent>
                                                <IndicatorComponent className={'indicator donot h109'}>
                                                    <div className="indi_top">
                                                        <ul className="record_menu hauto">
                                                            <li>
                                                                <a className="on">Tab1</a>
                                                            </li>
                                                            <li>
                                                                <a>Tab2</a>
                                                            </li>
                                                            <li>
                                                                <a>Tab3</a>
                                                            </li>
                                                        </ul>
                                                        <div className="tab_line">
                                                            <ButtonComponent type={'button'} className={'btn_line1 btn_xs selected'} txt={'Tab1'} onClick={''} />
                                                            <ButtonComponent type={'button'} className={'btn_line1 btn_xs'} txt={'Tab2'} onClick={''} />
                                                        </div>
                                                    </div>
                                                </IndicatorComponent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="fs_bold m-b-20">Usage</p>
                                <div className='dflx col_gap50'>
                                    <IndicatorComponent className={'indicator w705 h300'}>
                                        <div className="indi_top">
                                            <h1>메시지 라이브러리</h1>
                                            <div className="dflx_ac gap_8">
                                                <ButtonComponent type={'button'} className={'btn_secondary btn_ms'} txt={'즐겨찾기 추가'} />
                                                <ButtonComponent type={'button'} className={'btn_secondary btn_ms'} txt={'전체 선택'} />
                                                <ButtonComponent type={'button'} className={'btn_secondary btn_ms'} txt={'선택 삭제'} />
                                            </div>
                                        </div>
                                        <div className="indi_conts">
                                            <ul className="record_menu hauto">
                                                <li>
                                                    <a className="on">즐겨찾기</a>
                                                </li>
                                                <li>
                                                    <a>교통사고</a>
                                                </li>
                                                <li>
                                                    <a>공사</a>
                                                </li>
                                                <li>
                                                    <a>재난</a>
                                                </li>
                                                <li>
                                                    <a>기타</a>
                                                </li>
                                            </ul>
                                            <div className="dflx gap_16">
                                                <TmzoneComponent zoneClass={'tm_zone'} topClass={'tm_zone_top'} checkId={'checkbox01'} 
                                                btnTxt={'삭제'} boxClass={'tmbox'} check>
                                                    <div className="tmbox_top">
                                                        <p className="tmbox_date">
                                                            <span>04.02</span>
                                                            <span className="m-l-12">13:17</span>
                                                        </p>
                                                    </div>
                                                    <dl className="tm_dl">
                                                        <dd>
                                                            <p>
                                                                현재 인천 시청 사거리 앞 무단 횡단 중 사고발생하여 보행자 2명 부상, 사고 수습발생하였으며 중입니다. 참고바랍니다.
                                                            </p>
                                                        </dd>
                                                    </dl>
                                                </TmzoneComponent>
                                                <TmzoneComponent zoneClass={'tm_zone'} topClass={'tm_zone_top'} checkId={'checkbox02'} 
                                                btnTxt={'삭제'} boxClass={'tmbox'} check>
                                                    <div className="tmbox_top">
                                                        <p className="tmbox_date">
                                                            <span>04.02</span>
                                                            <span className="m-l-12">13:17</span>
                                                        </p>
                                                    </div>
                                                    <dl className="tm_dl">
                                                        <dd>
                                                            <p>
                                                                현재 인천 시청 사거리 앞 무단 횡단 중 사고발생하여 보행자 2명 부상, 사고 수습발생하였으며 중입니다. 참고바랍니다.
                                                            </p>
                                                        </dd>
                                                    </dl>
                                                </TmzoneComponent>
                                                <div className='h165 scroll sc_y'>
                                                    <TmzoneComponent zoneClass={'tm_zone'} topClass={'tm_zone_top'} checkId={'checkbox03'} 
                                                    btnTxt={'삭제'} boxClass={'tmbox'} check>
                                                        <div className="tmbox_top">
                                                            <p className="tmbox_date">
                                                                <span>04.02</span>
                                                                <span className="m-l-12">13:17</span>
                                                            </p>
                                                        </div>
                                                        <dl className="tm_dl">
                                                            <dd>
                                                                <p>
                                                                    현재 인천 시청 사거리 앞 무단 횡단 중 사고발생하여 보행자 2명 부상, 사고 수습발생하였으며 중입니다. 참고바랍니다.
                                                                </p>
                                                            </dd>
                                                        </dl>
                                                    </TmzoneComponent>
                                                    <TmzoneComponent zoneClass={'tm_zone'} topClass={'tm_zone_top'} checkId={'checkbox03'} 
                                                    btnTxt={'삭제'} boxClass={'tmbox'} check>
                                                        <div className="tmbox_top">
                                                            <p className="tmbox_date">
                                                                <span>04.02</span>
                                                                <span className="m-l-12">13:17</span>
                                                            </p>
                                                        </div>
                                                        <dl className="tm_dl">
                                                            <dd>
                                                                <p>
                                                                    현재 인천 시청 사거리 앞 무단 횡단 중 사고발생하여 보행자 2명 부상, 사고 수습발생하였으며 중입니다. 참고바랍니다.
                                                                </p>
                                                            </dd>
                                                        </dl>
                                                    </TmzoneComponent>
                                                </div>
                                            </div>
                                        </div>
                                    </IndicatorComponent>

                                    <ExpressComponent expressClass={'express_wrap example primary_bg p-r-8'} topClass={'monit_top'} title={'VMS 목록'}>
                                        <div className="dflx_as_jbet gap_8 express_cont">
                                            <div className="h-100 scroll sc_y">
                                                <section className="express_board">
                                                    <div className="exp_top">
                                                        <ExpdlComponent dlClass={'exp_dl w-50'} title={'VMS ID'}>
                                                            <input type="text" className="wrput line w-100" value="VM00020" />
                                                        </ExpdlComponent>
                                                        <ExpdlComponent dlClass={'exp_dl w-50'} title={'설치위치'}>
                                                            <input type="text" className="wrput line w-100" value="심곡고가사거리" />
                                                        </ExpdlComponent>
                                                    </div>
                                                    <div className="exp_cont"></div>
                                                </section>
                                                <section className="express_board">
                                                    <div className="exp_top">
                                                        <ExpdlComponent dlClass={'exp_dl w-50'} title={'VMS ID'}>
                                                            <input type="text" className="wrput line w-100" value="VM00020" />
                                                        </ExpdlComponent>
                                                        <ExpdlComponent dlClass={'exp_dl w-50'} title={'설치위치'}>
                                                            <input type="text" className="wrput line w-100" value="심곡고가사거리" />
                                                        </ExpdlComponent>
                                                    </div>
                                                    <div className="exp_cont"></div>
                                                </section>
                                            </div>

                                            <div className="h-100 scroll sc_y">
                                                <section className="express_board">
                                                    <div className="exp_top">
                                                        <ExpdlComponent dlClass={'exp_dl w-50'} title={'VMS ID'}>
                                                            <input type="text" className="wrput line w-100" value="VM00020" />
                                                        </ExpdlComponent>
                                                        <ExpdlComponent dlClass={'exp_dl w-50'} title={'설치위치'}>
                                                            <input type="text" className="wrput line w-100" value="심곡고가사거리" />
                                                        </ExpdlComponent>
                                                    </div>
                                                    <div className="exp_cont"></div>
                                                </section>
                                                <section className="express_board">
                                                    <div className="exp_top">
                                                        <ExpdlComponent dlClass={'exp_dl w-50'} title={'VMS ID'}>
                                                            <input type="text" className="wrput line w-100" value="VM00020" />
                                                        </ExpdlComponent>
                                                        <ExpdlComponent dlClass={'exp_dl w-50'} title={'설치위치'}>
                                                            <input type="text" className="wrput line w-100" value="심곡고가사거리" />
                                                        </ExpdlComponent>
                                                    </div>
                                                    <div className="exp_cont"></div>
                                                </section>
                                            </div>
                                        </div>
                                    </ExpressComponent>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                </article>

                <article className="Gr_contents">
                    <div className="comp_top">
                        <h2>Floating card</h2>
                    </div>
                    <section className="comp_conts">
                        <div className="display_grid row_gap40">
                            <div>
                                <div className="dflx">
                                    <div>
                                        <p className="fs_bold m-b-8">Layout</p>
                                    </div>
                                    <div style={{marginLeft:'340px'}}>
                                        <p className="fs_bold m-b-8">With tab</p>
                                    </div>
                                </div>
                                <article className="dflx col_gap50">
                                    <div className="board_line">
                                        <ButtonWithComponent type={'button'} className={'btn_arrow_l right'}>
                                            <ImgComponent className={'w16'} src={'arrow_right_2line_sky_16.svg'} />
                                        </ButtonWithComponent>
                                        <IndicatorOnComponent IndClass={'indicator_shadow'} topClass={'indi_top'} IndTitle={'Title'}>
                                            <div className='h248'></div>
                                        </IndicatorOnComponent>
                                        <IndicatorOffComponent IndClass={'indicator_shadow m-t-8'} topClass={'indi_top'} IndTitle={'Title'} normal>
                                            <div className='h120'></div>
                                        </IndicatorOffComponent>
                                        <IndicatorTabComponent IndClass={'indicator_shadow m-t-8'} topClass={'indi_top'} IndTitle={'Title'}>
                                            <div className='h120'></div>
                                        </IndicatorTabComponent>
                                    </div>

                                    <div className="board_line m-l-20">
                                        <ButtonWithComponent type={'button'} className={'btn_arrow_l right'}>
                                            <ImgComponent className={'w16'} src={'arrow_right_2line_sky_16.svg'} />
                                        </ButtonWithComponent>
                                        <div className="indi_withtab">
                                            <article className="indi_tabs">
                                                <ButtonComponent type={'button'} className={'btn_floating btn_m selected w-50'} txt={'Selected'} />
                                                <ButtonComponent type={'button'} className={'btn_floating btn_m w-50'} txt={'Default'} />
                                            </article>
                                            <IndicatorOnComponent IndClass={'indicator_shadow'} topClass={'indi_top'} IndTitle={'Title'}>
                                                <div className='h80'>
                                                    <div className="dflx">
                                                        <div className="tab_line">
                                                            <ButtonComponent type={'button'} className={'btn_line1 withtab btn_xs selected'} txt={'2차'} />
                                                            <ButtonComponent type={'button'} className={'btn_line1 withtab btn_xs'} txt={'2차'} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </IndicatorOnComponent>
                                        </div>
                                        <IndicatorOnComponent IndClass={'indicator_shadow m-t-8'} topClass={'indi_top'} IndTitle={'Title'}>
                                            <ul className="record_menu hauto">
                                                <li>
                                                    <a className="on">Selected</a>
                                                </li>
                                                <li>
                                                    <a>Default</a>
                                                </li>
                                                <li>
                                                    <a>Default</a>
                                                </li>
                                            </ul>
                                            <div className='h40'></div>
                                        </IndicatorOnComponent>
                                        <IndicatorTabOnComponent IndClass={'indicator_shadow m-t-160'} topClass={'indi_top'} IndTitle={'Title'}>
                                            <div className='h67'>                                                
                                                <div className="tab_line">
                                                    <ButtonComponent type={'button'} className={'btn_line1 withtab btn_xs selected flex1'} txt={'Label'} />
                                                    <ButtonComponent type={'button'} className={'btn_line1 withtab btn_xs flex1'} txt={'Label'} />
                                                </div>
                                            </div>
                                        </IndicatorTabOnComponent>
                                    </div>

                                    <div className="board_line m-l-20">
                                        <ButtonWithComponent type={'button'} className={'btn_arrow_l right'}>
                                            <ImgComponent className={'w16'} src={'arrow_right_2line_sky_16.svg'} />
                                        </ButtonWithComponent>
                                        <div className="indi_withtab">
                                            <article className="indi_tabs top">
                                                <a className="a_link short selected">Selected</a>
                                                <a className="a_link short">Default</a>
                                                <a className="a_link short">Default</a>
                                                <a className="a_link short">Default</a>
                                            </article>
                                            <IndicatorOnComponent IndClass={'indicator_shadow'} topClass={'indi_top'} IndTitle={'Title'}>
                                                <div className='h80'>
                                                    <div className="tab_line">
                                                        <ButtonComponent type={'button'} className={'btn_line1 withtab btn_xs w-50 selected'} txt={'3자 이상'} />
                                                        <ButtonComponent type={'button'} className={'btn_line1 withtab btn_xs w-50'} txt={'3자 이상'} />
                                                    </div>
                                                </div>
                                            </IndicatorOnComponent>
                                        </div>
                                        <article className="indicator_shadow lay_donot w320 m-t-8">
                                            <div className="indi_top">
                                                <div className="dflx_ac col_gap16">
                                                    <h1>Title</h1>
                                                    <div className="tab_line">
                                                        <ButtonComponent type={'button'} className={'btn_line1 withtab btn_xs w-50 selected'} txt={'라벨'} />
                                                        <ButtonComponent type={'button'} className={'btn_line1 withtab btn_xs w-50'} txt={'라벨'} />
                                                    </div>
                                                </div>
                                                <p className="arr_up arr_close">
                                                    <ImgComponent className={'w20'} src={'arrow_up_sky_20.svg'} />
                                                </p>
                                            </div>
                                            <div className="indi_conts h44"></div>
                                        </article>
                                        <article className="indicator_shadow lay_donot w320 m-t-8">
                                            <div className="indi_top indi_close">
                                                <h1>Title</h1>
                                                <p className="arr_up">
                                                    <ImgComponent className={'w20'} src={'arrow_up_sky_20.svg'} />
                                                </p>
                                            </div>
                                            <div className="indi_conts h44">
                                                <div className="tab_line">
                                                    <button className="btn_line2 btn_xs w-50 selected" type="button">Label</button>
                                                    <button className="btn_line2 btn_xs w-50" type="button">Label</button>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="indicator_shadow lay_donot m-t-8">
                                            <div className="indi_top">
                                                <ul className="record_menu hauto">
                                                    <li>  
                                                        <a className="on">Tab1</a>
                                                    </li>
                                                    <li>
                                                        <a>Tab2</a>
                                                    </li>
                                                    <li>
                                                        <a>Tab3</a>
                                                    </li>
                                                </ul>
                                                <p className="arr_up arr_close">
                                                    <ImgComponent className={'w20'} src={'arrow_up_sky_20.svg'} />
                                                </p>
                                            </div>
                                            <div className="indi_conts h56">
                                                <ul className="record_menu hauto">
                                                    <li>
                                                        <a className="on">Selected</a>
                                                    </li>
                                                    <li>
                                                        <a>Default</a>
                                                    </li>
                                                    <li>
                                                        <a>Default</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>                                  
                                </article>
                            </div>

                            <div>
                                <p className="fs_bold m-b-20">Usage</p>
                                <div className="dflx_as col_gap50">
                                    <div className="board_line">
                                        <ButtonWithComponent type={'button'} className={'btn_arrow_l right'}>
                                            <ImgComponent className={'w16'} src={'arrow_right_2line_sky_16.svg'} />
                                        </ButtonWithComponent>
                                        <IndicatorOnComponent IndClass={'indicator_shadow'} topClass={'indi_top'} IndTitle={'지표'}>
                                            <div className="indi_share">
                                                <dl className="indi_dl">
                                                    <dt>
                                                        <span>15</span>
                                                        <span>건</span>
                                                    </dt>
                                                    <dd>사고</dd>
                                                </dl>
                                                <dl className="indi_dl">
                                                    <dt>
                                                        <span>0</span>
                                                        <span>건</span>
                                                    </dt>
                                                    <dd>공사</dd>
                                                </dl>
                                                <dl className="indi_dl">
                                                    <dt>
                                                        <span>7</span>
                                                        <span>건</span>
                                                    </dt>
                                                    <dd>행사</dd>
                                                </dl>
                                                <dl className="indi_dl">
                                                    <dt>
                                                        <span>1</span>
                                                        <span>건</span>
                                                    </dt>
                                                    <dd>기상</dd>
                                                </dl>
                                            </div>
                                            <div className="indi_chart">
                                                <ImgComponent src={'ex_chart1.svg'} />
                                                <p className="chart_text m-t-16">
                                                    시티패스 + 알뜰 교통카드 이용추세
                                                </p>
                                            </div>
                                        </IndicatorOnComponent>
                                    </div>
                                    
                                    <div className="board_line">
                                        <ButtonWithComponent type={'button'} className={'btn_arrow_l right'}>
                                            <ImgComponent className={'w16'} src={'arrow_right_2line_sky_16.svg'} />
                                        </ButtonWithComponent>
                                        <IndicatorOnComponent IndClass={'indicator_shadow'} topClass={'indi_top'} IndTitle={'현황'}>
                                            <ul className='record_menu hauto'>
                                                <li>
                                                    <a className={menuTab===1? "on" : "" } onClick={()=> tabMenu(1)}>차트</a>
                                                </li>
                                                <li>
                                                    <a className={menuTab===2? "on" : "" } onClick={()=> tabMenu(2)}>표</a>
                                                </li>
                                            </ul>
                                            <section className='tmbox p-0'>
                                                <ImgComponent className={'w-100'} src={'pie_break.svg'} />
                                            </section>
                                            <div className='digon_wrap'>
                                                <DiagonComponent contClass={'diagon_cont sm'} tltClass={'diagon_tlt'} tlt={'처리'} resultClass={'diagon_result'}
                                                    result={'100'} unit={'건'} />
                                                <DiagonComponent contClass={'diagon_cont sm'} tltClass={'diagon_tlt'} tlt={'미처리'} resultClass={'diagon_result'}
                                                    result={'225'} unit={'건'} />
                                            </div>
                                        </IndicatorOnComponent>
                                    </div>

                                    <div className="board_line">
                                        <ButtonWithComponent type={'button'} className={'btn_arrow_l right'}>
                                            <ImgComponent className={'w16'} src={'arrow_right_2line_sky_16.svg'} />
                                        </ButtonWithComponent>
                                        <IndicatorOnComponent IndClass={'indicator_shadow'} topClass={'indi_top'} IndTitle={'이벤트 현황'}>
                                            <TmboxComponent className={'tmbox'}>
                                                <div className="tmbox_top">
                                                    <p className="tmbox_date">
                                                        <span>2022년 01월 23일 21:12</span>
                                                    </p>
                                                </div>
                                                <dl className="tm_dl">
                                                    <dt>
                                                        <p>[생생뉴스] 부천시청 앞 추출사고</p>
                                                    </dt>
                                                    <dd>
                                                        <p className='pure'>부천시민 A씨는 무단횡단자를 피해 부천시청 앞 3차선에서 2차선에서 주행중인 시민 B씨와 부딪힐 뻔 했습니다.</p>
                                                    </dd>
                                                    <p className="detail_see">
                                                        <span className="word">더보기</span>
                                                        <span className="mark_trig_down12"></span>
                                                    </p>
                                                </dl>
                                            </TmboxComponent>
                                            <TmboxComponent className={'tmbox'}>
                                                <div className="tmbox_top">
                                                    <p className="tmbox_date">
                                                        <span>2022년 01월 23일 21:12</span>
                                                    </p>
                                                    <span className='sign_tri2 jam'></span>
                                                </div>
                                                <dl className="tm_dl">
                                                    <dt>
                                                        <p>송내역 사거리 정체발생(평균속도 2km/h) 이하</p>
                                                    </dt>
                                                    <dd>
                                                        <div className='map_ex1'>
                                                            <ImgComponent src={'map_ex1.svg'} />
                                                        </div>
                                                        <div className="label_line m-b-8">
                                                            <span className="label_tag label_color16 fs_11">부분통제(진행중)</span>
                                                        </div>
                                                        <p>완료예정시간: 2022년 01월 23일 19:30</p>
                                                    </dd>
                                                    <p className="detail_see">
                                                        <span className="word">더보기</span>
                                                        <span className="mark_trig_down12"></span>
                                                    </p>
                                                </dl>
                                            </TmboxComponent>
                                        </IndicatorOnComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>

                <article className="Gr_contents">
                    <div className="comp_top">
                        <div>
                            <h2>Form card</h2>    
                        </div>                        
                    </div>
                    <section className="comp_conts">
                        <div className="grid_column2 gap_40">
                            <div>
                                <p className="fs_bold m-b-20">Layout</p>
                                <LineContainComponent className={'line_contain box'}>
                                    <div className='pop_top'>
                                        <h5 className='h_tlt'>Title</h5>
                                    </div>
                                    <div className='line_inner h360'>
                                        <div className='vert_wrap'>
                                            <div>
                                                Contents
                                            </div>
                                            <section className='line_bottom'>
                                                <ButtonComponent type={'button'} className={'btn_secondary btn_m w-50'} txt={'취소'} />
                                                <ButtonComponent type={'button'} className={'btn_primary btn_m w-50'} txt={'확인'} />
                                            </section>
                                        </div>
                                    </div>
                                </LineContainComponent>
                            </div>
                            <div>
                                <p className="fs_bold m-b-20">Usage</p>
                                <LineContainComponent className={'line_contain box'}>
                                    <div className='pop_top'>
                                        <h5 className='h_tlt'>개인 상세 정보</h5>
                                    </div>
                                    <div className='line_inner'>
                                        <PersonContainerUsage />
                                    </div>
                                </LineContainComponent>
                            </div>
                        </div>
                    </section>
                </article>

                <article className="Gr_contents">
                    <div className="comp_top">
                        <h2>Inner box</h2>
                    </div>
                    <section className="comp_conts">
                        <p className="fs_bold m-b-20">Primary</p>
                        <div className="dflx col_gap40 m-b-20 fs_12_medium">
                            <p className="w60"></p>
                            <p className="w300">Default</p>
                            <p className="w300">Hover</p>
                            <p className="w280">Pressed</p>
                        </div>
                        <div className="dflx">
                            <p className="fs_12_medium m-r-40">Type 1</p>
                            <div className="layout_innerbox dflx col_gap40">
                                <ExpressComponent expressClass={'express_wrap w300 primary'} topClass={'monit_top'} 
                                titleClass={'fc_white'} title={'Title'}>
                                    <div className="exp_cont box">
                                    </div>
                                </ExpressComponent>
                                <ExpressComponent expressClass={'express_wrap w300 primary bd_sky'} topClass={'monit_top'} 
                                titleClass={'fc_white'} title={'Title'}>
                                    <div className="exp_cont box">
                                    </div>
                                </ExpressComponent>
                                <ExpressComponent expressClass={'express_wrap w300 h160 primary pressed'} topClass={'monit_top'} 
                                titleClass={'fc_white'} title={'Title'}>
                                    <div className="exp_cont">
                                    </div>
                                </ExpressComponent>
                            </div>
                        </div>
                        <div className="dflx col_gap40 m-t-40">
                            <p className="fs_12_medium">Type 2</p>
                            <div className="layout_innerbox dflx col_gap40">
                                <TmzoneComponent zoneClass={'w300'} topClass={'tm_zone_top'} boxClass={'tmbox h160'} title={'Title'} normal />
                                <TmzoneComponent zoneClass={'w300 bd_sky'} topClass={'tm_zone_top'} boxClass={'tmbox h160'} title={'Title'} normal />
                                <TmzoneComponent zoneClass={'w300 bd_sky pressed'} topClass={'tm_zone_top'} boxClass={'tmbox h160'} title={'Title'} normal />
                            </div>
                        </div>
                    </section>
                    <section className="comp_conts m-t-60">
                        <p className="fs_12_medium m-b-20">Layout</p>
                        <div className="dflx col_gap60">
                            <div className="layout_box w640">
                                <div className="inner_title">Title</div>
                                <div className="dflx col_gap16">
                                    <ExpressComponent expressClass={'express_wrap w292 primary'} topClass={'monit_top'} 
                                    titleClass={'fc_white'} title={'Title'}>
                                        <div className="dflx col_gap8">
                                            <div className="exp_cont box"></div>
                                            <div className="exp_cont box"></div>
                                        </div>   
                                    </ExpressComponent>
                                    <ExpressComponent expressClass={'express_wrap w292 primary'} topClass={'monit_top'} 
                                    titleClass={'fc_white'} title={'Title'}>
                                        <div className="dflx col_gap8">
                                            <div className="exp_cont box"></div>
                                            <div className="exp_cont box"></div>
                                        </div>
                                    </ExpressComponent>
                                </div>

                                <div className="dflx col_gap16 m-t-16">
                                    <ExpressComponent expressClass={'express_wrap w292 primary'} topClass={'monit_top'} 
                                        titleClass={'fc_white'} title={'Title'}>
                                        <div className="dflx_column row_gap8">
                                            <div className="exp_cont_auto h48"></div>
                                            <div className="exp_cont_auto h48"></div>
                                        </div>   
                                    </ExpressComponent>
                                    <ExpressComponent expressClass={'express_wrap w292 primary'} topClass={'monit_top'} 
                                    titleClass={'fc_white'} title={'Title'}>
                                        <div className="dflx_column row_gap8">
                                            <div className="exp_cont_auto h48"></div>
                                            <div className="exp_cont_auto h48"></div>
                                        </div>
                                    </ExpressComponent>
                                </div>
                            </div>
                            
                            <div className="layout_box w320 h-100">
                                <div className="inner_title">Title</div>
                                <ExpressComponent expressClass={'tm_zone w280 m-b-8'} topClass={'tm_zone_top'} 
                                    titleClass={'fc_white'} title={'Title'}>
                                    <div className="tmbox h120"></div>
                                </ExpressComponent>
                                <ExpressComponent expressClass={'tm_zone w280'} topClass={'tm_zone_top'} 
                                    titleClass={'fc_white'} title={'Title'}>
                                    <div className="tmbox h120"></div>
                                </ExpressComponent>
                            </div>
                        </div>
                    </section>
                    <p className="fs_bold m-b-20 m-t-60">Label box</p>
                    <section className='comp_conts card_box dark p-20'>
                        <div className="dflx col_gap30">
                            <p className="w220">L</p>
                            <p className="w172">M</p>
                            <p className="w400">S</p>
                        </div>
                        <div className="dflx col_gap200">
                            <div className="dflx col_gap40">
                                <div className="bott_info">
                                    <SmarttopComponent smartClass={'smart_top'} labelClass={'label_tag label_color07 fs_12_medium'}
                                    label={'Label'} dateClass={'date fs_11'} datetime={'2023.01.01 00:00'} />
                                    <SmartContComponent className={'smart_cont bott'}>
                                        <p className="sm_txt">
                                            봉오대로 4R 교통량
                                        </p>
                                        <p className="sm_result">
                                            <span>123,456</span>
                                            <span className="mini">대</span>
                                        </p>
                                        <p className="percent_txt down">
                                            <span className="mini">전일 대비</span>
                                            <span>2.5</span>
                                            <span>%</span>
                                            <span className="ic ic_down"></span>
                                        </p>
                                    </SmartContComponent>
                                </div>
                                <div className="bott_info medium">
                                    <SmarttopComponent smartClass={'smart_top'} labelClass={'label_tag label_color07 fs_12_medium'}
                                    label={'Label'} dateClass={'date fs_11'} datetime={'2023.01.01 00:00'} />
                                    <SmartContComponent className={'smart_cont bott'}>
                                        <p className="sm_txt">
                                            봉오대로 4R 교통량
                                        </p>
                                        <p className="sm_result">
                                            <span>123,456</span>
                                            <span className="mini">대</span>
                                        </p>
                                        <p className="percent_txt down">
                                            <span className="mini">전일 대비</span>
                                            <span>2.5</span>
                                            <span>%</span>
                                            <span className="ic ic_down"></span>
                                        </p>
                                    </SmartContComponent>
                                </div>
                                <div className="bott_info small">
                                    <SmarttopComponent smartClass={'smart_top'} labelClass={'label_tag label_color07 fs_12_medium'}
                                    label={'Label'} dateClass={'date fs_11'} datetime={'2023.01.01 00:00'} />
                                    <SmartContComponent className={'smart_cont bott'}>
                                        <p className="sm_txt">
                                            봉오대로 4R 교통량
                                        </p>
                                        <p className="sm_result">
                                            <span>123,456</span>
                                            <span className="mini">대</span>
                                        </p>
                                        <p className="percent_txt down">
                                            <span className="mini">전일 대비</span>
                                            <span>2.5</span>
                                            <span>%</span>
                                            <span className="ic ic_down"></span>
                                        </p>
                                    </SmartContComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="comp_conts m-t-80">
                        <p class="fs_bold m-b-20">Point box</p>
                        <div className="dflx gap_40">
                            <DiagonComponent contClass={'diagon_cont lg'} tltClass={'diagon_tlt cover'} tlt={'일 평균 속도'} 
                            resultClass={'diagon_result'} result={'00.0'} unitClass={'unit'} unit={'km'}>
                                <p className="fs_12 m-t-4">0km/h(-0%)</p>
                            </DiagonComponent>
                            <DiagonComponent contClass={'diagon_cont medium'} tltClass={'diagon_tlt'} tlt={'이벤트 총 건수'} 
                            resultClass={'diagon_result'} result={'1,442'} unitClass={'unit'} unit={'건'} />
                            <DiagonComponent contClass={'diagon_cont sm'} tltClass={'diagon_tlt'} tlt={'소통상황'} 
                            resultClass={'diagon_result'} result={'원활'} />
                            <dl className="indi_dl">
                                <dd>사고</dd>
                                <dt>15건</dt>
                            </dl>
                        </div>
                    </section>
                </article>

            </div>

        </div>
      </div>
    );
};

export default Cards;
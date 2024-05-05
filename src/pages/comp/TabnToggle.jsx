import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import TexttabComponent from '../../components/common/TexttabComponent';
import ConnectComponent from '../../components/common/ConnectComponent';
import SwitchComponent from '../../components/common/SwitchComponent';
import SwitchComponentOn from '../../components/common/SwitchComponentOn';


const TabnToggle = () => {

    const [tabButton, setTabButton] = useState(1);
    const onClickTab = (index) => {
        setTabButton(index);
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

            <div className="guide_center width1720">
                <article className="guide_top">
                    <h1>Tab & Toggle</h1>
                </article>

                <article className="Gr_contents m-t-100">
                    <div className="m-b-40">
                        <h2 className="fs_28_bold m-b-12">Button tab</h2>
                    </div>
                    <section className="comp_conts">
                        <dl className="comp_dl">
                            <dt className="comp_dt p-t-15 m-r-100">Large</dt>
                            <dd className="comp_dd">
                                <div className="compline">
                                    <div className="components">
                                        <div className="tab_line">
                                            <ButtonComponent className='btn_toggle_floating btn_m selected w120' txt='Selected' />
                                            <ButtonComponent className='btn_toggle_floating btn_m w120' txt='Default' />
                                            <ButtonComponent className='btn_toggle_floating btn_m disabled w120' txt='Disabled' />
                                        </div>
                                    </div>
                                </div>
                                <div className="dflx col_gap32">                               
                                    <div className="tab_line">
                                        <ButtonComponent className='btn_ffb btn_m selected w120' txt='상황관리' />
                                        <ButtonComponent className='btn_ffb btn_m w120' txt='긴급차량' />
                                    </div>
                                    <div className="tab_line">
                                        <ButtonComponent className='btn_ffb btn_m selected w120' txt='상황관리' />
                                        <ButtonComponent className='btn_ffb btn_m w120' txt='긴급차량' />
                                        <ButtonComponent className='btn_ffb btn_m w120' txt='돌발금지' />
                                    </div>
                                </div>
                            </dd>
                        </dl>

                        <dl className="comp_dl m-t-60">
                            <dt className="comp_dt p-t-15 m-r-100">Small</dt>
                            <dd className="comp_dd">
                                <div className="compline grid_column2 m-b-20">
                                    <div className="components">
                                        <div className="tab_line spacing">
                                            <ButtonComponent className='btn_toggle_primary btn_s' txt='Default' />
                                            <ButtonComponent className='btn_toggle_primary btn_s selected' txt='Selected' />
                                            <ButtonComponent className='btn_toggle_primary btn_s' txt='Default' />
                                            <ButtonComponent className='btn_toggle_primary btn_s' txt='Default' />
                                        </div>
                                    </div>
                                </div>                                  
                                <div className="compline col_gap32 m-b-20">
                                    <div className="tab_line w112">
                                        <ButtonComponent className='btn_line1 withtab btn_xs selected' txt='Label' />
                                        <ButtonComponent className='btn_line1 withtab btn_xs' txt='Label' />
                                    </div>
                                    <div className="tab_line">
                                        <ButtonComponent className='btn_line1 withtab btn_xs selected w140' txt='Label' />
                                        <ButtonComponent className='btn_line1 withtab btn_xs w140' txt='Label' />
                                    </div>
                                    <div className="tab_line w280">
                                        <ButtonComponent className='btn_line1 withtab btn_xs selected w-33 w90' txt='Label' />
                                        <ButtonComponent className='btn_line1 withtab btn_xs w-33 w90' txt='Label' />
                                        <ButtonComponent className='btn_line1 withtab btn_xs w-33 w90' txt='Label' />
                                    </div>
                                </div>

                                <div className="compline col_gap32 m-b-20">
                                    <div className="tab_line col_gap4">
                                        <ButtonComponent className='btn_line2 btn_ms selected' txt='Label' />
                                        <ButtonComponent className='btn_line2 btn_ms' txt='Label' />
                                    </div>
                                    <div className="tab_line col_gap4">
                                        <ButtonComponent className='btn_line2 btn_ms selected w140' txt='Label' />
                                        <ButtonComponent className='btn_line2 btn_ms w140' txt='Label' />
                                    </div>
                                    <div className="tab_line w280 col_gap4">
                                        <ButtonComponent className='btn_line2 btn_ms selected w-33 w90' txt='Label' />
                                        <ButtonComponent className='btn_line2 btn_ms w-33 w90' txt='Label' />
                                        <ButtonComponent className='btn_line2 btn_ms w-33 w90' txt='Label' />
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </section>
                </article>

                <article className="Gr_contents">
                    <div className="comp_top">
                        <h2>Text tab</h2>
                    </div>
                    <div className="dflx col_gap20">
                        <div className="w64 m-t-40">
                            <p className="comp_size fc_annotation60 m-b-40">
                                <span className="m-r-14">16px</span>
                                <span></span>
                            </p>
                            <p className="dflx comp_size fc_annotation60 m-b-40">
                                <span className="m-r-14">14px</span>
                                <span>30</span>
                            </p>
                            <p className="comp_size fc_annotation60 m-b-40">
                                <span className="m-l-44">24</span>
                            </p>
                        </div>

                        <section className="comp_conts dashed_box p-10">
                            <dl className="comp_dl m-b-0">
                                <dd className="comp_dd">
                                    <div className="compline">
                                        <div className="dflx_ac w280">
                                            <Link to="#" className="a_link more selected">Selected</Link>
                                            <Link to="#" className="a_link more">Default</Link>
                                            <Link to="#" className="a_link more">Default</Link>
                                        </div>
                                        <div className="dflx_ac w520">
                                            <Link to="#" className="a_link more selected">Selected</Link>
                                            <Link to="#" className="a_link more">Default</Link>
                                            <Link to="#" className="a_link more">Default</Link>
                                            <Link to="#" className="a_link more">Default</Link>
                                            <Link to="#" className="a_link more">Default</Link>
                                            <Link to="#" className="a_link more">Default</Link>
                                        </div>
                                        <p className="p-l-10"></p>
                                        <div className="dflx_ac">
                                            <Link to="#" className="a_link more selected">Selected</Link>
                                            <Link to="#" className="a_link more">Default</Link>
                                            <Link to="#" className="a_link more">Default</Link>
                                            <Link to="#" className="a_link more">Default</Link>
                                            <Link to="#" className="a_link more">Default</Link>
                                            <Link to="#" className="a_link more">Default</Link>
                                            <Link to="#" className="a_link more">Default</Link>
                                            <Link to="#" className="a_link more">Default</Link>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                            <dl className="comp_dl m-b-0">
                                <dd className="comp_dd">
                                    <div className="compline">
                                        <div className="dflx_ac w280">
                                            <Link to="#" className="a_link selected">Selected</Link>
                                            <Link to="#" className="a_link">Default</Link>
                                            <Link to="#" className="a_link">Default</Link>
                                        </div>
                                        <div className="dflx_ac w520">
                                            <Link to="#" className="a_link selected">Selected</Link>
                                            <Link to="#" className="a_link">Default</Link>
                                            <Link to="#" className="a_link">Default</Link>
                                            <Link to="#" className="a_link">Default</Link>
                                            <Link to="#" className="a_link">Default</Link>
                                            <Link to="#" className="a_link">Default</Link>
                                        </div>
                                        <p className="p-l-10"></p>
                                        <div className="dflx_ac">
                                            <Link to="#" className="a_link selected">Selected</Link>
                                            <Link to="#" className="a_link">Default</Link>
                                            <Link to="#" className="a_link">Default</Link>
                                            <Link to="#" className="a_link">Default</Link>
                                            <Link to="#" className="a_link">Default</Link>
                                            <Link to="#" className="a_link">Default</Link>
                                            <Link to="#" className="a_link">Default</Link>
                                            <Link to="#" className="a_link">Default</Link>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                            <dl className="comp_dl m-b-0">
                                <dd className="comp_dd">
                                    <div className="compline">
                                        <div className="dflx_ac w280">
                                            <Link to="#" className="a_link pad12 selected">Selected</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                        </div>
                                        <div className="dflx_ac w520">
                                            <Link to="#" className="a_link pad12 selected">Selected</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                        </div>
                                        <p className="p-l-10"></p>
                                        <div className="dflx_ac">
                                            <Link to="#" className="a_link pad12 selected">Selected</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                            <dl className="comp_dl m-b-0">
                                <dd className="comp_dd">
                                    <div className="compline">
                                        <div className="w280"></div>
                                        <div className="dflx_ac">
                                            <Link to="#" className="a_link pad12 selected">Selected</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                            <Link to="#" className="a_link pad12">Default</Link>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </section>
                    </div>
                </article>

                <article className="Gr_contents">
                    <div className="comp_top">
                        <h2>Floating tab/toggle</h2>
                    </div>
                    <section className="comp_conts p-t-20">
                        <dl className="comp_dl">
                            <div className="m-r-100">
                                <dt className="comp_dt p-t-15">Text type</dt>
                            </div>
                            <div className="m-t-40">
                                <p className="fc_annotation60 dflx_ac_jcent m-b-50">2개</p>
                                <p className="fc_annotation60 dflx_ac_jcent m-b-50">3개 이상</p>
                                <p className="fc_annotation60 dflx_ac_jcent">Overflow</p>
                            </div>    
                            <dd className="dashed_box dflx p-20">
                                <div>
                                    <div className="dflx_as">
                                        <div className="connect_line none_shadow more sky p-r-20 p-l-20">
                                            <Link to="#" className="dflx_ac_jcent a_link short selected w116">Selected</Link>
                                            <span className="vtline_20 m-l-24 m-r-24"></span>
                                            <Link to="#" className="dflx_ac_jcent a_link short w116">Default</Link>
                                        </div>
                                    </div>
                                    <div className="dflx_as m-t-20">
                                        <div className="connect_line none_shadow more sky">
                                            <Link to="#" className="a_link short selected">Selected</Link>
                                            <Link to="#" className="a_link short">Default</Link>
                                            <Link to="#" className="a_link short">Default</Link>
                                            <Link to="#" className="a_link short">Default</Link>
                                        </div>
                                    </div>
                                    <div className="dflx_as m-t-20">
                                        <div className="connect_line none_shadow sky w320">
                                            <div className="shadow left">
                                                <p className="arrow_box">
                                                    <ImgComponent className="w12 op06" src="arrow_left_fff_12.svg" />
                                                </p>
                                            </div>
                                            <div className="horizon_line w280">
                                                <div className="horibox">
                                                    <Link to="#" className="a_link short">Default</Link>
                                                </div>
                                                <div className="horibox">
                                                    <Link to="#" className="a_link short selected">Selected</Link>
                                                </div>
                                                <div className="horibox">
                                                    <Link to="#" className="a_link short">Default</Link>
                                                </div>
                                                <div className="horibox">
                                                    <Link to="#" className="a_link short">Default</Link>
                                                </div>
                                                <div className="horibox">
                                                    <Link to="#" className="a_link short">Default</Link>
                                                </div>
                                                <div className="horibox">
                                                    <Link to="#" className="a_link short">Default</Link>
                                                </div>
                                            </div>
                                            <div className="shadow right">
                                                <p className="arrow_box">
                                                    <ImgComponent className="w12 op06" src="arrow_right_fff_12.svg" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </dd>
                            <div className="m-t-150">
                                <div className="dflx col_gap18 m-t-8">
                                    <div className="connect_line none_shadow sky w320">
                                        <div className="horizon_line w280">
                                            <div className="horibox">
                                                <Link to="#" className="a_link short">Default</Link>
                                            </div>
                                            <div className="horibox">
                                                <Link to="#" className="a_link short selected">Selected</Link>
                                            </div>
                                            <div className="horibox">
                                                <Link to="#" className="a_link short">Default</Link>
                                            </div>
                                            <div className="horibox">
                                                <Link to="#" className="a_link short">Default</Link>
                                            </div>
                                            <div className="horibox">
                                                <Link to="#" className="a_link short">Default</Link>
                                            </div>
                                            <div className="horibox">
                                                <Link to="#" className="a_link short">Default</Link>
                                            </div>
                                        </div>
                                        <div className="shadow right">
                                            <p className="arrow_box">
                                                <ImgComponent className="w12 op06" src="arrow_right_fff_12.svg" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="connect_line none_shadow sky w320">
                                        <div className="shadow left">
                                            <p className="arrow_box">
                                                <ImgComponent className="w12 op06" src="arrow_left_fff_12.svg" />
                                            </p>
                                        </div>
                                        <div className="horizon_line w280">
                                            <div className="horibox">
                                                <Link to="#" className="a_link short">Default</Link>
                                            </div>
                                            <div className="horibox">
                                                <Link to="#" className="a_link short selected">Default</Link>
                                            </div>
                                            <div className="horibox">
                                                <Link to="#" className="a_link short">Default</Link>
                                            </div>
                                            <div className="horibox">
                                                <Link to="#" className="a_link short">Default</Link>
                                            </div>
                                            <div className="horibox">
                                                <Link to="#" className="a_link short">Default</Link>
                                            </div>
                                            <div className="horibox">
                                                <Link to="#" className="a_link short">Default</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dl>

                        <dl className="comp_dl">
                            <div className="m-r-100">
                                <dt className="comp_dt p-t-15">Icon type</dt>
                                <p className="fc_annotation60 m-t-8">Footer only</p>
                            </div>    
                            <div className="dashed_box p-20">
                                <dd className="comp_dd m-r-60">
                                    <div className="compline col_gap100 m-b-0">
                                        <div className='w200 dflx'>
                                            <div className="tab_line">
                                                <ButtonWithComponent className="btn_icon icon_ffb btn_m">
                                                    <ImgComponent className="w24" src="minus_fff_24.svg" />
                                                </ButtonWithComponent>
                                                <ButtonWithComponent className="btn_icon icon_ffb btn_m">
                                                    <ImgComponent className="w24" src="plus_line_fff_24.svg" />
                                                </ButtonWithComponent>
                                            </div>
                                        </div>
                                        <div className="connect_line h40">
                                            <ButtonWithComponent className="btn_icon btn_m selected">
                                                <ImgComponent className="img w24" src="map_fill_fff_24.svg" />
                                                <ImgComponent className="img_on w24" src="map_fill_sky_24.svg" />
                                                <span className="word">소통정보</span>
                                            </ButtonWithComponent>
                                            <ButtonWithComponent className="btn_icon btn_m">
                                                <ImgComponent className="img w24" src="machine_fill_fff_24.svg" />
                                                <ImgComponent className="img_on w24" src="machine_fill_sky_24.svg" />
                                                <span className="word_grey">시설물</span>
                                            </ButtonWithComponent>
                                            <ButtonWithComponent className="btn_icon btn_m">
                                                <ImgComponent className="img w24 op04" src="heatmap_fill_fff_24.svg" />
                                                <ImgComponent className="img_on w24" src="heatmap_fill_sky_24.svg" />
                                                <span className="word_grey">히트맵</span>
                                            </ButtonWithComponent>
                                            <ButtonWithComponent className="btn_icon btn_m">
                                                <ImgComponent className="img w24 op04" src="analysis_fill_fff_24.svg" />
                                                <ImgComponent className="img_on w24" src="analysis_fill_sky_24.svg" />
                                                <span className="word_grey">현황</span>
                                            </ButtonWithComponent>
                                            <div className="control_line m-l-8">
                                                <ButtonWithComponent className="btn_icon icon_ffb line mini">
                                                    <ImgComponent className="w20" src="minus_fff_24.svg" />
                                                </ButtonWithComponent>
                                                <div className="progress_box line h24 w112">
                                                    <div className="bar scrubber">
                                                        <div className="empty" style={{transform: 'translate3d(2rem, 0, 0)'}}></div>
                                                        <div className="bar progress white" style={{transformOrigin: 'left 50% 0', transform: 'matrix(0, 0, 0, 1, 0, 0)'}}></div>
                                                    </div>
                                                </div>
                                                <ButtonWithComponent className="btn_icon icon_ffb line mini">
                                                    <ImgComponent className="w20" src="plus_line_fff_24.svg" />
                                                </ButtonWithComponent>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="compline col_gap100 m-b-30">
                                        <div className="dflx w200">
                                            <div className="tab_line">
                                                <ButtonWithComponent className="btn_icon icon_ffb btn_m">
                                                    <ImgComponent className="img w24 op04" src="layer_fff_24.svg" />
                                                    <ImgComponent className="img_on w24" src="layer_sky_24.svg" />
                                                </ButtonWithComponent>
                                                <ButtonWithComponent className="btn_icon icon_ffb btn_m">
                                                    <ImgComponent className="img w24 op04" src="legend_fff_24.svg" />
                                                    <ImgComponent className="img_on w24" src="legend_sky_24.svg" />
                                                </ButtonWithComponent>
                                                <ButtonWithComponent className="btn_icon icon_ffb btn_m">
                                                    <ImgComponent className="img w24 op04" src="linked_group_fill_fff_24.svg" />
                                                    <ImgComponent className="img_on w24" src="linked_group_fill_sky_24.svg" />
                                                </ButtonWithComponent>
                                            </div>
                                        </div>
                                        <div className="connect_line">
                                            <ButtonWithComponent className="btn_icon btn_m selected">
                                                <ImgComponent className="img w24 op04" src="map_fill_fff_24.svg" />
                                                <ImgComponent className="img_on w24" src="map_fill_sky_24.svg" />
                                                <span className="word">일반</span>
                                            </ButtonWithComponent>
                                            <ButtonWithComponent className="btn_icon btn_m">
                                                <ImgComponent className="img w24 op04" src="satellite_fill_fff_24.svg" />
                                                <ImgComponent className="img_on w24" src="satellite_fill_sky_24.svg" />
                                                <span className="word">위성</span>
                                            </ButtonWithComponent>
                                            <ButtonWithComponent className="btn_icon btn_m">
                                                <ImgComponent className="img w24 op04" src="mountain_fill_fff_24.svg" />
                                                <ImgComponent className="img_on w24" src="mountain_fill_sky_24.svg" />
                                                <span className="word">지형</span>
                                            </ButtonWithComponent>
                                        </div>
                                    </div>
                                    
                                    <div className="compline col_gap100">
                                        <div className="w200"></div>
                                        <div className="connect_line big_box">
                                            <ButtonWithComponent className="btn_toggle_icon selected">
                                                <span className="circle_grey32">
                                                    <ImgComponent className="img w24 op04" src="map_fill_fff_24.svg" />
                                                    <ImgComponent className="img_on w24" src="map_fill_sky_24.svg" />
                                                </span>
                                                <span className="word_medium selected">일반</span>
                                            </ButtonWithComponent>
                                            <ButtonWithComponent className="btn_toggle_icon">
                                                <span className="circle_grey32 line">
                                                    <ImgComponent className="img w24 op04" src="satellite_fill_fff_24.svg" />
                                                    <ImgComponent className="img_on w24" src="satellite_fill_sky_24.svg" />
                                                </span>
                                                <span className="word_medium">위성</span>
                                            </ButtonWithComponent>
                                            <ButtonWithComponent className="btn_toggle_icon">
                                                <span className="circle_grey32 line">
                                                    <ImgComponent className="img w24 op04" src="mountain_fill_fff_24.svg" />
                                                    <ImgComponent className="img_on w24" src="mountain_fill_sky_24.svg" />
                                                </span>
                                                <span className="word_medium">지형</span>
                                            </ButtonWithComponent>
                                            <div className="control_line">
                                                <ButtonWithComponent className="btn_icon icon_ffb medium">
                                                    <ImgComponent className="w20" src="minus_fff_24.svg" />
                                                </ButtonWithComponent>
                                                <div className="progress_box">
                                                    <div className="bar scrubber">
                                                        <div className="empty" style={{transform: 'translate3d(3rem, 0, 0)'}}></div>
                                                        <div className="bar progress white" style={{transformOrigin: 'left 50% 0', transform: 'matrix(0, 0, 0, 1, 0, 0)'}}></div>
                                                    </div>
                                                </div>
                                                <ButtonWithComponent className="btn_icon icon_ffb medium">
                                                    <ImgComponent className="w20" src="plus_line_fff_24.svg" />
                                                </ButtonWithComponent>
                                            </div>
                                        </div> 
                                    </div>
                                </dd>
                            </div>
                        </dl>
                    </section>
                </article>

                <article className="Gr_contents">
                    <div className="comp_top p-b-16">
                        <h2>Switch</h2>
                    </div>
                    <section className="comp_conts m-l-200">
                        <div className="dflx col_gap60 m-l-200 m-b-20">
                            <p className="fc_annotation60 dflx_ac_jcent">Default</p>
                            <p className="fc_annotation60 dflx_ac_jcent w60">
                                Fill+Line
                                <br/>
                                (Default)
                            </p>
                            <p className="fc_annotation60 dflx_ac_jcent">Line</p>
                        </div>
                        <dl className="comp_dl">
                            <dt className="comp_dt p-t-15"></dt>
                            <dd className="comp_dd">
                                <div class="compline col_gap60 m-t-40">
                                    <p class="comp_size fc_annotation60">On</p>
                                    <SwitchComponentOn labelClass={'switch_label'} spanClass="switch_button" />
                                    <SwitchComponentOn labelClass={'switch_label fill_line'} spanClass="switch_button" />
                                    <SwitchComponentOn labelClass={'switch_label line'} spanClass="switch_button" />
                                </div>
                                <div class="compline col_gap60 m-t-20">
                                    <p class="comp_size fc_annotation60">Off</p>
                                    <SwitchComponent labelClass={'switch_label'} spanClass="switch_button" />
                                    <SwitchComponent labelClass={'switch_label fill_line'} spanClass="switch_button" />
                                    <SwitchComponent labelClass={'switch_label line'} spanClass="switch_button" />
                                </div>                               
                            </dd>
                        </dl>
                    </section>
                </article>

            </div>

        </div>
      </div>
    );
};

export default TabnToggle;

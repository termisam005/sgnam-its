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
import Paging10Component from '../../components/common/Paging10Component';
import ListBlockComponent from '../../components/common/ListBlockComponent';

import PlaybarType1 from '../../components/control/PlaybarType1';
import PlaybarType2 from '../../components/control/PlaybarType2';
import PlaybarController from '../../components/control/PlaybarController';
import MapSliderLine from '../../components/control/MapSliderLine';
import MapSliderTimeline from '../../components/control/MapSliderTimeline';
import ControlPad from '../../components/control/ControlPad';


const Control = () => {
    let left0_Top30 = {
        left: '0px', 
        top: '30px'
    }
    let left25 = {
        left: '25px'
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
                    <h1>Control</h1>
                </article>
                <article className='Gr_contents'>
                    <div className='comp_top flex_wrap'>
                        <h2>Pagination</h2>
                    </div>
                    <section className='comp_conts grid_column3'>
                        <div>
                            <div className='fs_bold'>
                                Dot
                            </div>
                            <div className='dflx_column m-t-60'>
                                <div className='dflx_ac'>
                                    <div className='dashed_box p-20 dflx'>
                                        <div className='dflx_column row_gap20'>
                                            <div className='dflx_ac col_gap20 relative'>
                                                <div className='absolute swiper_top_text'>
                                                    <span className='fs_12 fc_grey60'>M</span>
                                                </div>
                                                <div className='dflx col_gap12'>
                                                    <ButtonComponent type='button' className='swiper_dot selected' txt=''></ButtonComponent>
                                                    <ButtonComponent type='button' className='swiper_dot' txt=''></ButtonComponent>
                                                    <ButtonComponent type='button' className='swiper_dot' txt=''></ButtonComponent>
                                                    <ButtonComponent type='button' className='swiper_dot' txt=''></ButtonComponent>
                                                </div>
                                            </div>
                                            <div className='dflx_ac col_gap20'>
                                                <div className='dflx_ac col_gap12'>
                                                    <ButtonWithComponent type={'button'} className={'pagination_btn h20'} onClick={''}>
                                                        <ImgComponent className={'w20'} src={'arrow_left_sky_20.svg'} />
                                                    </ButtonWithComponent>                                                    
                                                    <ButtonComponent type='button' className='swiper_dot selected' txt=''></ButtonComponent>
                                                    <ButtonComponent type='button' className='swiper_dot' txt=''></ButtonComponent>
                                                    <ButtonComponent type='button' className='swiper_dot' txt=''></ButtonComponent>
                                                    <ButtonComponent type='button' className='swiper_dot' txt=''></ButtonComponent>
                                                    <ButtonWithComponent type={'button'} className={'pagination_btn h20'} onClick={''}>
                                                        <ImgComponent className={'w20'} src={'arrow_right_sky_20.svg'} />
                                                    </ButtonWithComponent>
                                                </div>
                                            </div>
                                        </div>     
                                        <div className='dflx_column row_gap20 m-l-60'>
                                            <div className='dflx_ac col_gap20 relative'>
                                                <div className='absolute swiper_top_text'>
                                                    <span className='fs_12 fc_grey60'>S</span>
                                                </div>
                                                <div className='dflx col_gap12'>
                                                    <ButtonComponent type='button' className='swiper_dot selected small' txt=''></ButtonComponent>
                                                    <ButtonComponent type='button' className='swiper_dot small' txt=''></ButtonComponent>
                                                    <ButtonComponent type='button' className='swiper_dot small' txt=''></ButtonComponent>
                                                    <ButtonComponent type='button' className='swiper_dot small' txt=''></ButtonComponent>
                                                </div>
                                            </div>
                                            <div className='dflx_ac col_gap20 m-t-8'>
                                                <div className='dflx_ac col_gap12'>
                                                    <ButtonWithComponent type={'button'} className={'pagination_btn h12'} onClick={''}>
                                                        <ImgComponent src={'arrow_left_sky_12.svg'} />
                                                    </ButtonWithComponent>
                                                    <ButtonComponent type='button' className='swiper_dot selected small' txt=''></ButtonComponent>
                                                    <ButtonComponent type='button' className='swiper_dot small' txt=''></ButtonComponent>
                                                    <ButtonComponent type='button' className='swiper_dot small' txt=''></ButtonComponent>
                                                    <ButtonComponent type='button' className='swiper_dot small' txt=''></ButtonComponent>                                                    
                                                    <ButtonWithComponent type={'button'} className={'pagination_btn h12'} onClick={''}>
                                                        <ImgComponent src={'arrow_right_sky_12.svg'} />
                                                    </ButtonWithComponent>
                                                </div>
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-l-80'>
                            <div className='fs_bold'>
                                Count
                            </div>
                            <Paging10Component wrapClass='m-t-80 dflx_ac gap_8'></Paging10Component>
                        </div>
                    </section>
                </article>

                <article className='Gr_contents m-t-140'>
                    <div className='comp_top flex_wrap'>
                        <h2>Play Bar</h2>
                    </div>
                    <div className='fs_bold'>
                        Type 1
                    </div>
                    <section className='comp_conts dflx_as p-t-40'>
                        <div>
                            <div className='dflx col_gap40'>
                                <div>                                    
                                    <p className='fs_12 fc_grey60 m-b-20'>Default</p>
                                    <PlaybarType1 addedClass='playbar_type1 w62 h32' order='00' normal></PlaybarType1>
                                </div>
                                <div>                                    
                                    <p className='fs_12 fc_grey60 m-b-20'>Played</p>
                                    <PlaybarType1 addedClass='playbar_type1 w62 h32' order='00' played></PlaybarType1>
                                </div>
                                <div>                                    
                                    <p className='fs_12 fc_grey60 m-b-20'>Loaded</p>
                                    <PlaybarType1 addedClass='playbar_type1 w62 h32' order='00' loaded></PlaybarType1>
                                </div>
                            </div>
                        </div>
                        <div className='m-l-100 flex1'>
                            <div className='dflx_column'>
                                <p className='fs_12 fc_grey60 m-b-20'>Set</p>
                                <div className='play_bar'>
                                    <ButtonWithComponent type={'button'} className={'play_circle'}>
                                        <ImgComponent src={'play_circle_sky_20.svg'} />
                                    </ButtonWithComponent>
                                    <div className='time_bar'>2023-01-01 07:00:00</div>
                                    <ListBlockComponent listClass='playbar_type1_box flex1 h32'>
                                        <PlaybarType1 addedClass='playbar_type1' order='01' played></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='02' played></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='03' played></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='04' played></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='05' played></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='06' played></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='07' played></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='08' played></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='09' played ></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='10' loaded loadW='w-100'>
                                        </PlaybarType1>                                        
                                        <PlaybarType1 addedClass='playbar_type1' order='11' normal></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='12' normal></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='13' normal></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='14' normal></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='15' normal></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='16' normal></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='17' normal></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='18' normal></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='19' normal></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='20' normal></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='21' normal></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='22' normal></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='23' normal></PlaybarType1>
                                        <PlaybarType1 addedClass='playbar_type1' order='24' normal></PlaybarType1>
                                    </ListBlockComponent>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className='fs_bold m-t-80'>
                        Type 2
                    </div>
                    <section className='comp_conts p-t-40'>
                        <div className='m-t-40'>
                            <div className='card_box p-20 dflx gap_40'>
                                <div className='dflx relative'>
                                    <div className='absolute swiper_top_text'>
                                        <span className='fs_12 fc_grey60'>Default</span>
                                    </div>
                                    <div className='playbar_type2_box default w615'>
                                        <div className='dflx gap_12'>
                                            <PlaybarController addedClass={'dflx gap_4'}></PlaybarController>
                                            <div className='w500 relative'>
                                                <PlaybarType2></PlaybarType2>
                                            </div>
                                        </div>
                                        <div className='w-100 dflx_ac_jcent gap_20 m-t-12'>
                                            <span className='fc_white fs_14_medium'>시뮬레이션 재생시간</span>
                                            <span className='fc_white fs_14_medium'>08:55:08</span>
                                        </div>
                                    </div>
                                </div>    
                                <div className='dflx relative'>
                                    <div className='absolute swiper_top_text'>
                                        <span className='fs_12 fc_grey60'>Playbar</span>
                                    </div>
                                    <div className='playbar_type2_box playbar gap_12 h62'>
                                        <PlaybarController addedClass={'dflx gap_4'}></PlaybarController>
                                        <div className='w500 relative'>                                            
                                            <PlaybarType2></PlaybarType2>
                                        </div>
                                    </div>
                                </div>  
                                <div className='dflx relative'>
                                    <div className='absolute swiper_top_text'>
                                        <span className='fs_12 fc_grey60'>Min</span>
                                    </div>
                                    <div className='playbar_type2_box mini h40'>
                                        <div className='w-100 dflx_ac_jcent gap_20'>
                                            <span className='fc_white fs_14_medium'>시뮬레이션 재생시간</span>
                                            <span className='fc_white fs_14_medium'>08:55:08</span>
                                        </div>
                                    </div>
                                </div>                                            
                            </div>
                        </div>                 
                    </section>
                </article>

                <article className='Gr_contents m-t-140'>
                    <div className='comp_top flex_wrap'>
                        <h2>Slider</h2>
                    </div>
                    <div className='dflx'>
                        <div>
                            <section className='comp_conts dflx_as'>
                                <div className='dflx_as m-t-10'>
                                    <div className='m-r-40'>
                                        <p className='fs_12 fc_grey60' style={{paddingTop:'75px'}}>Enabled</p>
                                        <p className='fs_12 fc_grey60 p-t-40'>Disabled</p>
                                        <p className='fs_12 fc_grey60 p-t-40'>Discrete</p>
                                    </div>
                                    <div className='p-20 dflx'>
                                        <div className='dflx_column row_gap40'>
                                            <p className='fs_12 fc_grey60'>L</p>
                                            <MapSliderLine addedClass='map_control_line w220' size='h14 w100'>
                                            </MapSliderLine>                                             
                                            <MapSliderLine addedClass='map_control_line w220 disabled' size='h14 w100'>
                                            </MapSliderLine>                       
                                            <MapSliderLine addedClass='map_control_line' size='h14 w-40'>
                                                <div className='dflx_jbet m-t-4'>
                                                    <div className='fs_11 fc_grey60 step_cursor'>0</div>
                                                    <div className='fs_11 fc_grey60 step_cursor'>1</div>
                                                    <div className='fs_11 fc_grey60 step_cursor'>2</div>
                                                    <div className='fs_11 fc_grey60 step_cursor'>3</div>
                                                    <div className='fs_11 fc_grey60 step_cursor'>4</div>
                                                    <div className='fs_11 fc_grey60 step_cursor'>5</div>
                                                </div>
                                            </MapSliderLine>
                                            <MapSliderTimeline>
                                                <MapSliderLine addedClass='map_control_line' size='h14 w-40'>
                                                </MapSliderLine>  
                                            </MapSliderTimeline>
                                        </div>    
                                        <div className='dflx_column row_gap40 m-l-60'>
                                            <p className='fs_12 fc_grey60'>S</p>
                                            <MapSliderLine addedClass='map_control_line w100' size='h14 w50'>
                                            </MapSliderLine>
                                            <MapSliderLine addedClass='map_control_line w100 disabled' size='h14 w80'>
                                            </MapSliderLine>
                                            <div className='control_line'></div>
                                            <div className='control_line'></div>                             
                                            <MapSliderTimeline small addedClass='w100'>
                                                <MapSliderLine addedClass='map_control_line' size='h14 w-40'>
                                                </MapSliderLine>  
                                            </MapSliderTimeline>
                                        </div>                               
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </article>

                <div className='dflx col_gap200'>
                    <article className='Gr_contents m-t-100'>
                        <div className='comp_top flex_wrap'>
                            <h2>Control pad</h2>
                        </div>
                        <section className='comp_conts m-l-60'>
                            <div>
                                <div className='dflx_column m-t-40'>
                                    <div className='dflx_as'>
                                        <div className='grid_column1 m-r-20 ai_center h320' style={{transform: 'translate(-3.563rem, -1.25rem)'}}>
                                            <p className='fs_12 fc_grey60'>Default</p>
                                            <p className='fs_12 fc_grey60'>Selected</p>
                                            <p className='fs_12 fc_grey60 '>Disabled</p>
                                        </div>
                                        <div className='dflx'>
                                            <div className='dflx_column gap_20 relative'>
                                                <div className='dflx_ac gap_20'>
                                                    <div className='absolute swiper_top_text'>
                                                        <span className='fs_12 fc_grey60'>CTA</span>
                                                    </div>                                               
                                                </div>
                                                <ControlPad btnClass='btn_primary'></ControlPad>
                                                <div className="m-t-10">
                                                    <ControlPad btnClass='btn_primary selected'></ControlPad>
                                                </div>
                                                <div className="m-t-10">
                                                    <ControlPad btnClass='btn_primary disabled'></ControlPad>
                                                </div>                                            
                                            </div>
                                            <div className='dflx_column gap_20 m-l-100'>
                                                <div className='dflx_ac gap_20 relative'>
                                                    <div className='absolute swiper_top_text'>
                                                        <span className='fs_12 fc_grey60'>Secondary</span>
                                                    </div>
                                                </div>                                           
                                                <ControlPad btnClass='btn_secondary'></ControlPad>
                                                <div className="m-t-10">
                                                    <ControlPad btnClass='btn_secondary hover'></ControlPad>
                                                </div>
                                                <div className="m-t-10">
                                                    <ControlPad btnClass='btn_secondary disabled'></ControlPad>
                                                </div>     
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </section>
                    </article>
                </div>

            </div>
        </div>
      </div>
    );
};

export default Control;

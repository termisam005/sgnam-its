import React from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import LabelComponent from '../../components/common/LabelComponent';


const Label = () => {

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
                        <h1>Label</h1>
                    </article>
                    <article className='Gr_contents'>
                        <div className="compline dflx_jend">
                            <div className="dashed_box p-20 col_gap20 dflx_ac_jcent">
                                <span className="label_tag bg_ui_blue_more fs_12_medium">Label</span>
                                <span className="label_tag ellipse bg_ui_blue_more fs_12_medium">Label</span>
                            </div>
                        </div>
                        <div className='comp_top flex_wrap'>
                            <h2>Box Label</h2>
                        </div>
                        <section className='comp_conts'>
                            <div className='dflx col_gap20'>
                                <dl className='comp_dl flex_wrap'>
                                    <dt className='comp_dt w-100 m-b-30'>Box</dt>
                                    <dd className='comp_dd'>
                                        <div className='compline'>
                                            <p className='comp_size'>Rainbow</p>
                                            <div className='components m-l-12'>
                                                <LabelComponent className='label_tag label_color01 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag label_color02 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag label_color03 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag label_color04 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag label_color05 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag label_color06 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag label_color07 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag label_color08 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag label_color09 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag label_color10 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag label_color11 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag label_color12 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag label_color13 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag label_color14 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag label_color15 fs_12_medium' txt='Label' />
                                            </div>
                                        </div>
                                        <div className='compline m-t-30'>
                                            <p className='comp_size'>Grade</p>
                                            <div className='components m-l-12'>
                                                <LabelComponent className='label_tag grade_color01 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag grade_color02 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag grade_color03 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag grade_color04 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag grade_color05 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag grade_color06 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag grade_color07 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag grade_color08 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag grade_color09 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag grade_color10 fs_12_medium' txt='Label' />
                                                <LabelComponent className='label_tag grade_color11 fs_12_medium' txt='Label' />
                                            </div>
                                        </div>
                                        <div className='compline m-t-30'>
                                            <p className='comp_size'>Grade</p>
                                            <div className='components m-l-12'>
                                                <LabelComponent className='label_tag x_small grade_color02 fs_12_medium' txt='직행' />
                                                <LabelComponent className='label_tag x_small gradeko_color02 fs_12_medium' txt='좌석' />
                                                <LabelComponent className='label_tag x_small grade_color08 fs_12_medium' txt='일반' />
                                                <LabelComponent className='label_tag x_small grade_color08 fs_12_medium' txt='저상' />
                                                <LabelComponent className='label_tag x_small grade_color06 fs_12_medium' txt='마을' />
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                                <dl className='comp_dl flex_wrap'>
                                    <dt className='comp_dt w-100 m-l-40'>Ellipse</dt>
                                    <dd className='comp_dd'>
                                        <div className='compline m-t-10'>
                                            <p className='comp_size'></p>
                                            <div className='components'>
                                                <LabelComponent className='label_tag ellipse label_color01 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse label_color02 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse label_color03 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse label_color04 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse label_color05 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse label_color06 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse label_color07 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse label_color08 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse label_color09 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse label_color10 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse label_color11 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse label_color12 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse label_color13 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse label_color14 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse label_color15 fs_12_medium' txt='Label'></LabelComponent>
                                            </div>
                                        </div>
                                        <div className='compline'>
                                            <p className='comp_size'></p>
                                            <div className='components'>
                                                <LabelComponent className='label_tag ellipse grade_color01 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse grade_color02 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse grade_color03 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse grade_color04 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse grade_color05 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse grade_color06 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse grade_color07 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse grade_color08 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse grade_color09 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse grade_color10 fs_12_medium' txt='Label'></LabelComponent>
                                                <LabelComponent className='label_tag ellipse grade_color11 fs_12_medium' txt='Label'></LabelComponent>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <dl className='comp_dl flex_wrap m-t-80'>
                                <dt className='comp_dt w-100 fs_28_bold'>Number</dt>
                                <dd className='comp_dd m-t-20'>
                                    <div className='compline'>
                                        <div className='dashed_box p-20 gap_20 dflx_ac_jcent'>
                                            <ButtonComponent type='button' className='bg_ui_blue_more number_default bg_blue' txt='1'>
                                            </ButtonComponent>
                                            <ButtonComponent type='button' className='fc_primary number_default' txt='1'>
                                            </ButtonComponent>
                                            <ButtonComponent type='button' className='number_default outline' txt='1'>
                                            </ButtonComponent>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                            <dl className='comp_dl flex_wrap m-t-40'>
                                <dt className='comp_dt w-100 fs_28_bold'>Text</dt>
                                <dd className='comp_dd'>
                                    <div className='compline p-40 bg_grey06 dflx'>
                                        <div className='fs_14_medium'>지역명</div>
                                        <div className='fs_20_medium bg_default h28 pd-2-12 dflx_ac col_gap6 op00'>
                                            <p><span className='fc_primary'>스마트교차로</span> </p>
                                            <p>vs</p>
                                            <p className='fc_green'>예측 데이터</p>
                                        </div>                                    
                                        <div className='text_label_box m-l-80'>
                                            <p><span className='fc_yellow'>심곡고가</span>
                                            <ImgComponent src={'arrow_right_yellow_36.svg'} alt='우측 방향 화살표' />
                                            <span className='fc_yellow'>사단 4</span></p>
                                            <p><span className='fc_yellow'>경인로 서행</span> 약 <span className='fc_yellow '>6</span>분</p>
                                        </div>
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

export default Label;
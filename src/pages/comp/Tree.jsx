import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';

import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import CheckComponent from '../../components/common/CheckComponent';
import CheckTextComponent from '../../components/common/CheckTextComponent';
import TreeComponent from '../../components/accordion/TreeComponent';
import TreePartComponent from '../../components/accordion/TreePartComponent';
import TreeCheckComponent from '../../components/accordion/TreeCheckComponent';
import TreeAccordComponent from '../../components/accordion/TreeAccordComponent';
import TreeAccordOpenComponent from '../../components/accordion/TreeAccordOpenComponent';


const Tree = () => {
    const [accordion, setAccordion] = useState(false);
    const toggleAccord = () => {
        setAccordion(!accordion);
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
                        <h1>Tree</h1>
                    </article>
                    <article className="Gr_contents m-t-100">
                        <div className="comp_top flex_wrap">
                            <h2 className="m-l-20">Item</h2>
                        </div>
                        <div className="m-t-120">
                            <div className="dashed_box p-20 m-t-60">
                                <div className="dflx col_gap80">
                                    <div className="relative display_grid auto_row32">
                                        <p className="w-100 fs_bold " style={{position:'absolute', top:'-7.5rem', whiteSpace:'nowrap'}}>Check box</p>
                                        <p className="fs_14" style={{position:'absolute', top:'-3.75rem', whiteSpace:'nowrap'}}>Lv.1</p>
                                        <CheckComponent checkClass='checkbox_type part' type='checkbox' checkId='tree_item00' labelClass='fs_13' name='checkbox_list' txt='일부요소 선택(Open)' checked />
                                        <CheckComponent checkClass='checkbox_type part' type='checkbox' checkId='tree_item01' labelClass='fs_13' name='checkbox_list' txt='일부요소 선택(Closed)' checked />
                                        <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='tree_item02' labelClass='fs_13' name='checkbox_list' txt='전체 선택(Open)' checked />
                                        <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='tree_item03' labelClass='fs_13' name='checkbox_list' txt='전체 선택(Closed)' checked />
                                        <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='tree_item04' labelClass='fs_13' name='checkbox_list' txt='미선택(Open)' />
                                        <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='tree_item05' labelClass='fs_13' name='checkbox_list' txt='미선택(Closed)' />
                                    </div>
                                    <div className="relative">
                                        <p className="fs_14" style={{position:'absolute', top:'-3.75rem', whiteSpace:'nowrap'}}>Lv.2</p>
                                        <CheckComponent checkClass='checkbox_type tree m-t-70' type='checkbox' checkId='tree_item06' labelClass='fs_13' name='checkbox_list' txt='선택 text text' checked />
                                        <CheckComponent checkClass='checkbox_type tree m-t-50' type='checkbox' checkId='tree_item07' labelClass='fs_13' name='checkbox_list' txt='미선택 text text' />
                                    </div>
                                    <div className="relative display_grid auto_row32">
                                        <p className="w-100 fs_bold " style={{position:'absolute', top:'-7.5rem', whiteSpace:'nowrap'}}>Accordion + cb</p>
                                        <p className="fs_14" style={{position:'absolute', top:'-3.75rem', whiteSpace:'nowrap'}}>Lv.1</p>           
                                        <div className="accordion_block as_center">
                                            <div className="tree_button check">
                                                <ButtonWithComponent className={'accordion_toggle on h12'}>
                                                    <ImgComponent className={'accordion_up w12'} src={'arrow_down_fill_fff_12.svg'} />
                                                    <ImgComponent className={'accordion_down w12'} src={'arrow_right_fill_fff_12.svg'} />
                                                </ButtonWithComponent>
                                                <CheckComponent checkClass='checkbox_type part' type='checkbox' checkId='tree_item08' labelClass='fs_13' name='checkbox_list' txt='일부요소 선택(Open)' checked />
                                            </div>                                       
                                        </div>
                                        <div className="accordion_block as_center">
                                            <div className="tree_button check">
                                                <ButtonWithComponent className={'accordion_toggle h12'}>
                                                    <ImgComponent className={'accordion_up w12'} src={'arrow_down_fill_fff_12.svg'} />
                                                    <ImgComponent className={'accordion_down w12'} src={'arrow_right_fill_fff_12.svg'} />
                                                </ButtonWithComponent>
                                                <CheckComponent checkClass='checkbox_type part' type='checkbox' checkId='tree_item09' labelClass='fs_13' name='checkbox_list' txt='일부요소 선택(Closed)' checked />
                                            </div>                                       
                                        </div>
                                        <div className="accordion_block as_center">
                                            <div className="tree_button check">
                                                <ButtonWithComponent className={'accordion_toggle on h12'}>
                                                    <ImgComponent className={'accordion_up w12'} src={'arrow_down_fill_fff_12.svg'} />
                                                    <ImgComponent className={'accordion_down w12'} src={'arrow_right_fill_fff_12.svg'} />
                                                </ButtonWithComponent>
                                                <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='tree_item10' labelClass='fs_13' name='checkbox_list' txt='전체 선택(Open)' checked />
                                            </div>                                       
                                        </div>
                                        <div className="accordion_block as_center">
                                            <div className="tree_button check">
                                                <ButtonWithComponent className={'accordion_toggle h12'}>
                                                    <ImgComponent className={'accordion_up w12'} src={'arrow_down_fill_fff_12.svg'} />
                                                    <ImgComponent className={'accordion_down w12'} src={'arrow_right_fill_fff_12.svg'} />
                                                </ButtonWithComponent>
                                                <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='tree_item11' labelClass='fs_13' name='checkbox_list' txt='전체 선택(Closed)' checked />
                                            </div>                                       
                                        </div>
                                        <div className="accordion_block as_center">
                                            <div className="tree_button check">
                                                <ButtonWithComponent className={'accordion_toggle on h12'}>
                                                    <ImgComponent className={'accordion_up w12'} src={'arrow_down_fill_fff_12.svg'} />
                                                    <ImgComponent className={'accordion_down w12'} src={'arrow_right_fill_fff_12.svg'} />
                                                </ButtonWithComponent>
                                                <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='tree_item12' labelClass='fs_13' name='checkbox_list' txt='미선택(Open)' />
                                            </div>                                       
                                        </div>
                                        <div className="accordion_block as_center">
                                            <div className="tree_button check">
                                                <ButtonWithComponent className={'accordion_toggle h12'}>
                                                    <ImgComponent className={'accordion_up w12'} src={'arrow_down_fill_fff_12.svg'} />
                                                    <ImgComponent className={'accordion_down w12'} src={'arrow_right_fill_fff_12.svg'} />
                                                </ButtonWithComponent>
                                                <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='tree_item13' labelClass='fs_13' name='checkbox_list' txt='미선택(Closed)' />
                                            </div>                                       
                                        </div>
                                    </div>                            
                                    <div className="relative">
                                        <p className="fs_14" style={{position:'absolute', top:'-3.75rem', whiteSpace:'nowrap'}}>Lv.2</p>
                                        <CheckComponent checkClass='checkbox_type tree m-t-70' type='checkbox' checkId='tree_item14' labelClass='fs_13' name='checkbox_list' txt='선택 text text' checked />
                                        <CheckComponent checkClass='checkbox_type tree m-t-50' type='checkbox' checkId='tree_item15' labelClass='fs_13' name='checkbox_list' txt='미선택 text text' />
                                    </div> 
                                    <div className="relative">
                                        <p className="w-100 fs_bold " style={{position:'absolute', top:'-7.5rem', whiteSpace:'nowrap'}}>Accordion</p>
                                        <TreeAccordOpenComponent accordClass={'accordion_block accord'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                        checkClass={'check_text w-100'} txt={'Lv.1 Open'}>
                                            <div class="p-l-48 fs_13 display_grid auto_row32">
                                                <span class="as_center">Lv.2</span>
                                                <span class="as_center">Lv.2-1</span>
                                            </div>
                                        </TreeAccordOpenComponent>
                                        <TreeAccordComponent accordClass={'accordion_block accord'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                        checkClass={'check_text w-100'} txt={'Lv.1 Closed'}>
                                            <div class="p-l-48 fs_13 display_grid auto_row32">
                                                <span class="as_center">Lv.2</span>
                                                <span class="as_center">Lv.2-1</span>
                                            </div>
                                        </TreeAccordComponent>
                                        <div class="p-l-48 fs_13 display_grid auto_row32">
                                            <span class="as_center">Lv.2</span>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="Gr_contents m-t-100">
                        <div className="comp_top flex_wrap">
                            <h2>Usage</h2>
                        </div>
                        <div className="m-t-40">
                            <div className="dflx col_gap100">
                                <div className="relative">
                                    <p className="w-100 fs_bold" style={{position:'absolute', top:'-2.5rem', whiteSpace:'nowrap'}}>Check box</p>                                    
                                    <div className="accordion_block">
                                        <CheckComponent checkClass='checkbox_type part dflx_ac h32' type='checkbox' checkId='usage_check01' labelClass='fs_13' name='checkbox_list' txt='일부요소 선택(Open)' checked />       
                                        <div className="tree_contents show">
                                            <div className="display_grid p-l-24 auto_row32">
                                                <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='usage_check02' labelClass='fs_13' name='checkbox_list' txt='선택 text text' checked />      
                                                <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='usage_check03' labelClass='fs_13' name='checkbox_list' txt='미선택 text text' />
                                                <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='usage_check04' labelClass='fs_13' name='checkbox_list' txt='미선택 text text' />
                                                <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='usage_check05' labelClass='fs_13' name='checkbox_list' txt='선택 text text' checked />
                                                <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='usage_check06' labelClass='fs_13' name='checkbox_list' txt='미선택 text text' />
                                                <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='usage_check07' labelClass='fs_13' name='checkbox_list' txt='미선택 text text' />
                                            </div>                                            
                                        </div>             
                                    </div>
                                    <CheckComponent checkClass='checkbox_type tree dflx_ac h32' type='checkbox' checkId='usage_check08' labelClass='fs_13' name='checkbox_list' txt='전체 선택(Closed)' checked />
                                    <CheckComponent checkClass='checkbox_type tree dflx_ac h32' type='checkbox' checkId='usage_check09' labelClass='fs_13' name='checkbox_list' txt='미선택(Closed)' />
                                </div>       
                                <div className="relative">
                                    <p className="w-100 fs_bold" style={{position:'absolute', top:'-2.5rem', whiteSpace:'nowrap'}}>Accordion + cb</p>
                                    <div className="accordion_block">
                                        <div className="tree_button check h32">
                                            <ButtonWithComponent className={'accordion_toggle on h12'}>
                                                <ImgComponent className={'accordion_up w12'} src={'arrow_down_fill_sky_12.svg'} />
                                                <ImgComponent className={'accordion_down w12'} src={'arrow_right_fill_sky_12.svg'} />
                                            </ButtonWithComponent>
                                            <CheckComponent checkClass='checkbox_type part' type='checkbox' checkId='usage_check10' labelClass='fs_13' name='checkbox_list' txt='일부요소 선택(Open)' checked />
                                        </div>
                                        <div className="tree_contents show">
                                            <div className="display_grid p-l-44 auto_row32">
                                                <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='usage_check21' labelClass='fs_13' name='checkbox_list' txt='선택 text text' checked />      
                                                <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='usage_check22' labelClass='fs_13' name='checkbox_list' txt='미선택 text text' />
                                                <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='usage_check23' labelClass='fs_13' name='checkbox_list' txt='미선택 text text' />
                                                <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='usage_check24' labelClass='fs_13' name='checkbox_list' txt='선택 text text' checked />
                                                <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='usage_check25' labelClass='fs_13' name='checkbox_list' txt='미선택 text text' />
                                                <CheckComponent checkClass='checkbox_type tree' type='checkbox' checkId='usage_check26' labelClass='fs_13' name='checkbox_list' txt='미선택 text text' />
                                            </div>                                            
                                        </div>  
                                    </div>
                                    <div className="accordion_block">
                                        <div className="tree_button check h32">
                                            <ButtonWithComponent className={'accordion_toggle on h12'}>
                                                <ImgComponent className={'accordion_up w12'} src={'arrow_down_fill_sky_12.svg'} />
                                                <ImgComponent className={'accordion_down w12'} src={'arrow_right_fill_sky_12.svg'} />
                                            </ButtonWithComponent>
                                            <div className="checkbox_type tree">
                                                <input type="checkbox" name="checkbox_list" id="usage_check17" hidden="" checked /> 
                                                <label className="fs_13" for="usage_check17">전체 선택(Closed)</label>
                                            </div>                                        
                                        </div>
                                        <div className="tree_contents">
                                            <div className="display_grid p-l-24 auto_row32">
                                                <div className="checkbox_type tree">
                                                    <input type="checkbox" name="checkbox_list" id="usage_check18" hidden="" checked /> 
                                                    <label className="fs_13" for="usage_check18">선택 text text</label>
                                                </div>
                                                <div className="checkbox_type tree">
                                                    <input type="checkbox" name="checkbox_list" id="usage_check19" hidden=""  /> 
                                                    <label className="fs_13" for="usage_check19">미선택 text text</label>
                                                </div>
                                                <div className="checkbox_type tree">
                                                    <input type="checkbox" name="checkbox_list" id="usage_check20" hidden=""  /> 
                                                    <label className="fs_13" for="usage_check20">미선택 text text</label>
                                                </div>
                                                <div className="checkbox_type tree">
                                                    <input type="checkbox" name="checkbox_list" id="usage_check21" hidden="" checked /> 
                                                    <label className="fs_13" for="usage_check21">선택 text text</label>
                                                </div>
                                                <div className="checkbox_type tree">
                                                    <input type="checkbox" name="checkbox_list" id="usage_check22" hidden="" checked /> 
                                                    <label className="fs_13" for="usage_check22">선택 text text</label>
                                                </div>
                                                <div className="checkbox_type tree">
                                                    <input type="checkbox" name="checkbox_list" id="usage_check23" hidden="" checked /> 
                                                    <label className="fs_13" for="usage_check23">선택 text text</label>
                                                </div>
                                            </div>                                            
                                        </div>
                                    </div>
                                    <div className="accordion_block">
                                        <div className="tree_button check h32">
                                            <ButtonWithComponent className={'accordion_toggle on h12'}>
                                                <ImgComponent className={'accordion_up w12'} src={'arrow_down_fill_sky_12.svg'} />
                                                <ImgComponent className={'accordion_down w12'} src={'arrow_right_fill_sky_12.svg'} />
                                            </ButtonWithComponent>
                                            <div className="checkbox_type tree">
                                                <input type="checkbox" name="checkbox_list" id="usage_check24" hidden=""  /> 
                                                <label className="fs_13" for="usage_check24">미선택(Closed)</label>
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>     
                                <div className="relative">
                                    <p className="w-100 fs_bold" style={{position:'absolute', top:'-2.5rem', whiteSpace:'nowrap'}}>Accordion</p>
                                    <TreeAccordOpenComponent accordClass={'accordion_block accord'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'Lv.1 Open'} show>
                                        <div class="p-l-48 fs_13 display_grid auto_row32">
                                            <span class="as_center">Lv.2</span>
                                            <span class="as_center">Lv.2-1</span>
                                        </div>
                                    </TreeAccordOpenComponent>
                                    <TreeAccordComponent accordClass={'accordion_block accord'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'Lv.1 Closed'}>
                                        <div class="p-l-48 fs_13 display_grid auto_row32">
                                            <span class="as_center">Lv.2</span>
                                            <span class="as_center">Lv.2-1</span>
                                        </div>
                                    </TreeAccordComponent>
                                    <TreeAccordComponent accordClass={'accordion_block accord'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'Lv.1 Closed'}>
                                        <div class="p-l-48 fs_13 display_grid auto_row32">
                                            <span class="as_center">Lv.2</span>
                                            <span class="as_center">Lv.2-1</span>
                                        </div>
                                    </TreeAccordComponent>
                                </div>                      
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Tree;

import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import ImgComponent from '../../components/common/ImgComponent';
import PhotoComponent from '../../components/common/PhotoComponent';

import FileUploadType1 from '../../components/etc/FileUploadType1';
import FileUploadType2 from '../../components/etc/FileUploadType2';
import ImageThumbnailRegistration from '../../components/etc/ImageThumbnailRegistration';
import ImageThumbnailModify from '../../components/etc/ImageThumbnailModify';


const Upload = () => {

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
                        <h1>Upload</h1>
                    </article>

                    <article className='Gr_contents'>
                        <div className='comp_top flex_wrap'>
                            <h2>File</h2>
                        </div>                        
                        <div className="dflx_as fc_annotation60 fs_12 m-l-100 col_gap300">
                            <span className="w150">Empty</span>
                            <span className="w128">Progress</span>
                            <span className="w100">Set up</span>
                        </div>
                        <section className='comp_conts dflx_as m-t-20'>
                            <div>
                                <p className="w100">Box</p>
                            </div>    
                            <div className='dashed_box dflx_as p-20 gap_40'>
                                <FileUploadType1 addedClass='w400 h120'></FileUploadType1>
                                <FileUploadType2 addedClass='w400 h120' imgClass={'spin_animation w18'}>
                                </FileUploadType2>        
                                <div>                                    
                                    <FileUploadType1 addedClass='w400 h120'></FileUploadType1>
                                    <div className="upload_box line border_white20 w400 h40 p-8 m-t-10">
                                        <div className="m-t-4 flex1">
                                            <input type="file" id="fileUpload" className="hidden_file" hidden />
                                            <div className="fs_12 file_realname fc_annotation87">filename.pdf</div>
                                        </div>
                                        <ButtonWithComponent className={'upload_btn'}>
                                            <ImgComponent src={'close_line_fff_16.svg'} className={'w16'} />
                                        </ButtonWithComponent>
                                    </div>
                                    <div className="upload_box line border_white20 w400 h40 p-8 m-t-10">
                                        <div className="m-t-4 flex1">
                                            <input type="file" id="fileUpload" className="hidden_file" hidden />
                                            <div className="fs_12 file_realname fc_annotation87">filename.pdf</div>
                                        </div>
                                        <ButtonWithComponent className={'upload_btn'}>
                                            <ImgComponent src={'close_line_fff_16.svg'} className={'w16'} />
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                            </div>                 
                        </section>
                        <section className='comp_conts dflx_ac m-t-60'>
                            <div>
                                <p className="w100">Bar</p>
                            </div>    
                            <div className="dflx gap_40">
                                <div className="upload_box line border_white20 w400 h40 p-8 m-t-10">
                                    <label for="fileUpload2" class="btn_file btn_secondary btn_xs">파일 선택</label>
                                    <div class="flex1">
                                        <input type="file" id="fileUpload2" class="hidden_file" hidden />
                                        <div class="fs_12 file_realname"> 선택된 파일 없음</div>
                                    </div>
                                    <ButtonWithComponent className={'upload_btn'}>
                                        <ImgComponent src={'close_line_fff_16.svg'} className={'w16'} />
                                    </ButtonWithComponent>
                                </div>
                                <div className="upload_box line border_white20 w400 h40 p-8 m-t-10">
                                    <label for="fileUpload3" class="btn_file btn_secondary btn_xs m-r-12">파일 선택</label>
                                    <ImgComponent src={'ring_xsmall.png'} className={'spin_animation w18 m-r-a'} />
                                </div>
                                <div className="upload_box line border_white20 w400 h40 p-8 m-t-10">
                                    <label for="fileUpload4" class="btn_file btn_secondary btn_xs">파일 선택</label>
                                    <div className="m-t-4 flex1">
                                        <input type="file" id="fileUpload4" className="hidden_file" hidden />
                                        <div className="fs_12 file_realname fc_annotation87">filename.pdf</div>
                                    </div>
                                    <ButtonWithComponent className={'upload_btn'}>
                                        <ImgComponent src={'close_line_fff_16.svg'} className={'w16'} />
                                    </ButtonWithComponent>
                                </div>
                            </div>
                        </section>
                    </article>

                    <article className='Gr_contents m-t-100'>
                        <div className='comp_top flex_wrap'>
                            <h2>Image</h2>
                        </div>
                        <div className="dflx">
                            <p className='fs_bold p-t-80'>Box</p>
                            <div className='m-l-100'>
                                <p className='m-b-40 fs_12 fc_black60'>Empty</p>
                                <ImageThumbnailRegistration 
                                    addedClass='upload_box w440 h200 relative'
                                    imageID='imageUpload'
                                >
                                </ImageThumbnailRegistration>
                            </div>
                            <div className='m-l-60'>
                                <p className='m-b-40 fs_12 fc_black60'>Set up</p>
                                <ImageThumbnailModify                                
                                    addedClass='upload_box w440 h200 relative image_modify'
                                    imageID='imageModify'
                                    imageSrc='image_thumbnail_sample.png'
                                >
                                </ImageThumbnailModify>
                            </div>
                        </div>
                        <div className="dflx m-t-100">
                            <p className='fs_bold p-t-60'>Profile</p>
                            <div className='m-l-100'>
                                <p className='m-b-40 fs_12 fc_black60'>Empty</p>
                                <PhotoComponent imgName={'prof_40.svg'} imgProf>
                                    <p className='circle_g32'>
                                        <ImgComponent src={'edit_pencil_fff_24.svg'} />
                                    </p>
                                </PhotoComponent>
                            </div>
                            <div className='m-l-60'>
                                <p className='m-b-40 fs_12 fc_black60'>Hover</p>
                                <PhotoComponent imgName={'prof_40.svg'} imgProf>
                                    <p className='circle_g32 hover'>
                                        <ImgComponent src={'edit_pencil_fff_24.svg'} />
                                    </p>
                                </PhotoComponent>
                            </div>
                            <div className='m-l-60'>
                                <p className='m-b-40 fs_12 fc_black60'>Set up</p>
                                <PhotoComponent imgName={'image_select_sample.png'} className={'w200'}>
                                    <p className='circle_g32'>
                                        <ImgComponent src={'edit_pencil_fff_24.svg'} />
                                    </p>
                                </PhotoComponent>
                            </div>
                        </div>
                    </article>

                </div>

            </div>
        </div>
    );
};

export default Upload;

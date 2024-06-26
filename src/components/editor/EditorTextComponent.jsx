import React from 'react';


const EditorTextComponent = () => {

    return (
        <dl class="comp_dl m-0">
            <dd>
                <article class="">

                    <div class="dflx_ac gap_colm8 m-b-12">
                        <div class="edit_btline">
                            <button type="button" class="btn_primary btn_ms editor selected">320 X 64</button>
                            <button type="button" class="btn_secondary btn_ms">320 X 64</button>
                            <button type="button" class="btn_secondary btn_ms disabled">480 X 96</button>
                        </div>
                        <span class="pipe28"></span>
                        <div class="edit_btline">
                            <button type="button" class="btn_primary btn_ms editor selected">굵게</button>
                            <button type="button" class="btn_secondary btn_ms">가늘게</button>
                        </div>
                        <span class="pipe28"></span>
                        <div class="edit_btline">
                            <button type="button" class="btn_secondary btn_ms">굴림</button>
                            <button type="button" class="btn_secondary btn_ms">궁서</button>
                            <button type="button" class="btn_secondary btn_ms">바탕</button>
                            <button type="button" class="btn_primary btn_ms editor selected">돋움</button>
                            <button type="button" class="btn_secondary btn_ms">HY견고딕</button>
                            <button type="button" class="btn_secondary btn_ms disabled">HY헤드라인</button>
                            <button type="button" class="btn_secondary btn_ms disabled">휴먼모음T</button>
                        </div>
                    </div>
                    <div class="dflx_ac gap_colm8 m-b-12">
                        <div class="edit_btline">
                            <button type="button" class="btn_secondary btn_s_w28h28 edit_red">가</button>
                            <button type="button" class="btn_secondary btn_s_w28h28 edit_orange">가</button>
                            <button type="button" class="btn_secondary btn_s_w28h28 edit_yellow">가</button>
                            <button type="button" class="btn_secondary btn_s_w28h28 edit_green">가</button>
                            <button type="button" class="btn_secondary btn_s_w28h28 edit_blue">가</button>
                            <button type="button" class="btn_secondary btn_s_w28h28 edit_white">가</button>
                            <select class="selector sm color">
                                <option value="">다른색</option>
                                <option value="">다른색</option>
                                <option value="">다른색</option>
                            </select>
                        </div>
                    </div>
                    <div class="temrs_text_wrap">
                        <textarea class="terms_area edit scroll" placeholder="텍스트를 입력하세요."></textarea>
                    </div>

                </article>
            </dd>
        </dl>
    );
};

export default EditorTextComponent;
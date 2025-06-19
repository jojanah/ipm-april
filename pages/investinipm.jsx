import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import React from 'react';
import { useLanguage } from "@/context/Lang";
import translations from '@/utils/translations';

export default function ResearchRequest(props) {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <>
            <section className="pt_banner_inner banner_px_image" id="Discover">
                <div className="parallax_cover">
                    <img className="cover-parallax" src="../../assets/img/subheader.png" alt="image" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-12">
                            <div className="banner_title_inner">
                                <h1>{t.invest}</h1>
                                <div className="breadcrumbs">
                                    <a href="/">{t.home}</a>
                                    <a href="" style={{ color: '#fcb816' }}>استثمر في مجمع الابتكار مسقط</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="serv_app padding-t-12">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 my-auto order-2 order-lg-1">
                            <div className="title_sections mb-0">
                                <div className="before_title">
                                    {/* <span>Google</span> */}
                                    <span className="c-gold">{t.invest}</span>
                                </div>
                                <h2 style={{color:'#851f83'}}>استثمر في مجمع الابتكار مسقط</h2>
                                <p>
                                تبلغ مساحة مجمع الابتكار مسقط 540 الف متر مربع، يعد مجمع الابتكار مسقط وجة مثالية لاستثمار بفضل موقعها المميز في وجاذبيتها الاقتصادية بالاضافة الى الحوافز والتسهيلات التي يقدمها المجمع 
                                </p>
                                <div className="app_smartphone margin-t-4">
                                    <div className="btn--app mb-3 d-block">
                                        <a className="media" href="#" target="_blank">
                                            <div className="icon dark">
                                                <i className="tio info"></i>
                                            </div>
                                            <div className="media-body txt">
                                                {/* <div><span className="c-light">|</span></div> */}
                                                <h4 className="c-dark">المرسوم السلطاني</h4>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="btn--app">
                                        <a className="media" href="#" target="_blank">
                                        <div className="icon dark">
                                                <i className="tio info"></i>
                                            </div>
                                            <div className="media-body txt">
                                                {/* <div><span className="c-light">|</span></div> */}
                                                <h4 className="c-dark">اقرأ المزيد</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 mx-auto mb-4 mb-lg-0 order-1 order-lg-1">
                            <div className="amo_pic">
                                {/* <img id="animate3" src="../../assets/img/app/s10-ss03.png" style={{ top: "-212px" }} alt="image" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
        </>
    );
}

export async function getServerSideProps() {
    try {
        const res = await fetch('http://localhost:1200/ipm/');
        const data = await res.json();

        return {
            props: data ? { ...data } : {},
        };
    } catch (error) {
        console.error("فشل في جلب البيانات:", error);
        return { props: {} };
    }
}

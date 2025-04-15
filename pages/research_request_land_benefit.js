import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import React from 'react';
import { useLanguage } from "@/context/Lang";
import translations from '@/utils/translations';

export default function researchrequest(props) {
    const { language, switchLanguage } = useLanguage();
    const t = translations[language];
    const faqs = Array.from({ length: 21 }, (_, i) => {
        if (i === 2 || i === 3 || i === 5 || i === 11) { // Just as an example for question 2 having sub-answers
            return {
                question: `q${i + 1}`,
                answer: [
                    // `ans${i + 1}`, // main answer
                    `ans${i + 1}-a`, // sub-answer 1
                    `ans${i + 1}-b`, // sub-answer 2
                    `ans${i + 1}-c`, // sub-answer 2
                    `ans${i + 1}-d`, // sub-answer 2
                ],
            };
        } else {
            return {
                question: `q${i + 1}`,
                answer: `ans${i + 1}`,
            };
        }
    });
    return (
        <>
            {/* <ImageSlider imagesForImageSlider={imagesForImageSlider} /> */}

            <section class="pt_banner_inner banner_px_image" id="Discover">
                <div class="parallax_cover">
                    <img class="cover-parallax" src="../../assets/img/subheader.png" alt="image" />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-lg-6">
                            <div class="banner_title_inner">
                                <h1>
                                    {t.researchinvest}
                                </h1>
                                {/* <p>
                    Leave us a little info, and we’ll be in touch.
                  </p> */}
                                <div class="breadcrumbs">
                                    <a href="/" class="">{t.home}  </a>
                                    <a href="/#invest">{t.invest}  </a>
                                    <a href="/#invest">{t.researchinvest}  </a>
                                    <a href="" style={{ color: '#fcb816' }}>{t.research_request_land_benefit}  </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section class="section_contact_five margin-t-5 padding-py-12" id="contact">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="title_sections_inner margin-b-6">
                                <h2>{t.rules}</h2>
                                <ul>
                                    <li>{t.rule1}</li>
                                    <li>{t.rule2}</li>
                                </ul>
                                <h2>{t.documents} </h2>
                                <ol>
                                    <li>نسخة من السجل التجاري للشركة</li>
                                    <li>نبذة عن الشركة باللغة العربية</li>
                                    <li>الملف التعريفي</li>
                                    <li>نبذة عن المشروع</li>
                                    <li>الهدف من المشروع البحثي</li>
                                    <li>المساحة المطلوبة</li>
                                    <li>الخطط المستقبلية</li>
                                    <li>دراسة جدوى المشروع</li>
                                    <li>مستندات أخرى أو ملحقات داعمة</li>
                                </ol>
                                <p></p>
                            </div>
                            <div class="form_cc_four">
                                <form action="" class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <h6>اسم المشروع</h6>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <h6>اسم الشركة</h6>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <h6>اسم صاحب الشركة</h6>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <h6>البريد الإلكتروني</h6>
                                            <input type="email" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <h6>رقم الهاتف </h6>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <h6>الموقع الالكتروني ان وجد </h6>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <h6>{t.whyipm}</h6>
                                            <textarea class="form-control" rows="7"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-12 d-md-flex justify-content-between margin-t-2">
                                        <div class="item_upload mb-3 mb-md-0">
                                            <div class="upload__file">
                                                <input type="file" />
                                                <button type="button" class="btn btn_md_primary">
                                                    <i class="tio attachment"></i>
                                                    إرفاق ملف
                                                </button>
                                            </div>
                                            {/* <span class="my-auto">Maximum size: 12 MB</span> */}
                                        </div>
                                        <a href="" class="btn bg-ipm-green rounded-8 c-white h-fit-content">
                                            إرسال
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

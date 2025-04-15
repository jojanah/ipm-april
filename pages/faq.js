import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import React from 'react';
import { useLanguage } from "@/context/Lang";
import translations from '@/utils/translations';

export default function faq(props) {
    const { language, switchLanguage } = useLanguage();
    const t = translations[language];
    const faqs = Array.from({ length: 21 }, (_, i) => {
        if (i === 2 || i === 3 || i === 5 || i===11) { // Just as an example for question 2 having sub-answers
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
                                    {t.faq}
                                </h1>
                                {/* <p>
                    Leave us a little info, and we’ll be in touch.
                  </p> */}
                                <div class="breadcrumbs">
                                    <a href="/" class="">{t.home}  </a>
                                    <a href="" style={{ color: '#fcb816' }}>{t.faq}  </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <br />
            <section className="faq_one_inner mt-0 w-100">
                <div className="col-lg-6 ml-auto">
                    <div className="faq_section faq_demo3 faq_with_icon">
                        <div className="block_faq">
                            <div className="accordion" id="accordionExample">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="card">
                                        <div className="card-header" id={`heading${index}`}>
                                            <h3 className="mb-0">
                                                <button
                                                    className="btn btn-link"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target={`#collapse${index}`}
                                                    aria-expanded="false"
                                                    aria-controls={`collapse${index}`}
                                                >
                                                    {t[faq.question]}
                                                </button>
                                            </h3>
                                        </div>
                                        <div
                                            id={`collapse${index}`}
                                            className="collapse"
                                            aria-labelledby={`heading${index}`}
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                {Array.isArray(faq.answer) ? (
                                                    faq.answer.map((answer, subIndex) => 
                                                    <li key={subIndex}>{t[answer]}</li>
                                                ) 
                                                ) : (
                                                <li>{t[faq.answer]}</li> 
                                                 )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
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

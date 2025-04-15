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
                        <div class="col-md-8 col-lg-12">
                            <div class="banner_title_inner">
                                <h1>
                                    {t.partner}
                                </h1>
                                {/* <p>
                    Leave us a little info, and we’ll be in touch.
                  </p> */}
                                <div class="breadcrumbs">
                                    <a href="/" class="">{t.home}  </a>
                                    {/* <a href="/#invest">{t.partner}  </a> */}
                                    <a href="" style={{ color: '#fcb816' }}>{t.partner}  </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <section class="section_contact_five padding-py-6" id="contact">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="title_sections_inner margin-b-6" id="partner1">
                                <h2>{t.partner1}</h2>
                                <ul>
                                    <li>المؤسسات المنتفعة بالأراضي المخصصة بإنشاء مراكز بحث وتطوير  ( معهد النفط والغاز ، تبريد ، ..الخ)</li>
                                    <li>المؤسسات المنتفعة بالمساحات المخصصة للإيجار في مبنى الابتكار </li>
                                    <li>المراكز والمؤسسات المنتفعة من المساحات المخصصة للإيجار في مبنى التصنيع والنمذجة                                     </li>
                                </ul>
                            </div>
                            <div class="title_sections_inner margin-b-6" id="partner2">
                                <h2>{t.partner2} </h2>
                            <img src='../../assets/img/picture1.png' alt={t.partnerb} />
                                <p></p>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </section> */}
            <section class="category_films margin-t-8">
          <div class="container">
            <div class="row">
              <div class="col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
              <div class="title_sections_inner" id="partner1">
                                {/* <h2>{t.partner1}</h2> */}
                                <h2>المؤسسات المنتفعة بالاراضي: 
                                </h2>
                            </div>
               
                <div class="item">
                  <div class="content">
                    <img src='../../assets/img/logos/oie.png' alt={t.partnerb}  style={{ height: '160px',width: '160px' }} />
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <img src='../../assets/img/logos/tabreed.png' alt={t.partnerb}  style={{ height: '160px',width: '160px' }} />
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <img src='../../assets/img/logos/mzn.png' alt={t.partnerb}  style={{ height: '160px',width: '160px' }} />
                  </div>
                </div>
              </div>
            
            </div>
            <br />
            <br />
          </div>
        </section>
        <section class="category_films margin-t-2">
          <div class="container">
            <div class="row">
              <div class="col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
              <div class="title_sections_inner" id="partner1">
                                {/* <h2>{t.partner1}</h2> */}
                                <h2>المؤسسات المنتفعة بمساحات مغلقة
 ( مبنى الابتكار ): 
</h2>
                                
                            </div>
               
                <div class="item">
                  <div class="content">
                    <img src='../../assets/img/logos/sas.png' alt={t.partnerb}  style={{ height: 'auto',width: '90%' }} />
                </div>
                </div>
                <div class="item">
                  <div class="content">
                    <img src='../../assets/img/logos/matterz.png' alt={t.partnerb} style={{ height: 'auto',width: '90%' }} />
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <img src='../../assets/img/logos/ct.png' alt={t.partnerb} style={{ height: 'auto',width: '80%' }} />
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <img src='../../assets/img/logos/squ.jpg' alt={t.partnerb} style={{ height: 'auto',width: '80%' }} />
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <img src='../../assets/img/logos/msb.png' alt={t.partnerb}  style={{ height: '160px',width: '160px' }} />
                  </div>
                </div>
              </div>
            
            </div>
            <br />
            <br />
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

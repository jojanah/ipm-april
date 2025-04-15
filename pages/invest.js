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
                                    {t.invest}
                                </h1>
                                {/* <p>
                    Leave us a little info, and we’ll be in touch.
                  </p> */}
                                <div class="breadcrumbs">
                                    <a href="/" class="">{t.home}  </a>
                                    <a href="/#invest" class="">{t.invest}  </a>
                                    <a href="/invest" style={{ color: '#fcb816' }}>{t.investtour}  </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section class="category_invest  margin-t-8">
          <div class="container">
            <div class="row">
              <div class="col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
              <div class="title_sections_inner" id="partner1">
                                {/* <h2>{t.partner1}</h2> */}
                                <h2>🚀 ابدأ رحلتك  
                                </h2>
                            </div>
               
              
             <a href='/research_request_close_area' target='_blank'> 
                <div class="item">
                    <br />
                  <div class="content">
                <i class="tio iphone"></i>
                    <h3>تقديم طلب</h3>
                    <p>تقديم الطلب مع المستندات المطلوبة</p>
                  </div>
                </div>
                </a>
                <div class="item">
                <br />
                  <div class="content">
                <i class="tio search"></i>
                    <h3>الانتفاع بأرض / <br/> مساحة مغلقة  </h3>
                    <p>تحال الى الفريق المختص للدراسة المشروع وأخذ الموافقات  اللازمة</p>
                  </div>
                </div>
                <div class="item">
                 <br />
                  <div class="content">
                <i class="tio thumbs_up"></i>
                    <h3>توقيع الاتفاقية</h3>
                    <p>انضم وانطلق في رحلتك مع مجمع الابتكار - مسقط</p>
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

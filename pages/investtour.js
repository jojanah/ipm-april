import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import React from 'react';
import { useLanguage } from "@/context/Lang";
import translations from '@/utils/translations';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
export default function ResearchRequest(props) {
    const { language } = useLanguage();
    const t = translations[language];
 useEffect(() => {
    AOS.init({ once: true });
  }, []);
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
                                <h1>{t.investtour}</h1>
                                <div className="breadcrumbs">
                                    <a href="/">{t.home}</a>
                                    <a href="" style={{ color: '#fcb816' }}>{t.investtour}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           

         
           <section className="category_invest margin-t-8">
  <div className="container">
    <div className="row">
      <div className="col-12" data-aos="fade-up">
        <div className="title_sections_inner text-center mb-5" id="partner1">
          <h1 style={{ color: '#851f83' }}>ابدأ رحلتك</h1>
        </div>

        <div className="row justify-content-center align-items-center step-section">
          {/* Step 1 */}
          <div className="col-md-3 mb-4">
             {/* <a href="/research_request_close_area" className="text-decoration-none text-dark"> */}
            <div className="step-box h-100">
              <div className="step-icon mb-3"><i className="tio iphone"></i></div>
              <h5>الخطوة 1:</h5>
              <h3>تقديم الطلب</h3>
              <p>تقديم الطلب مع المستندات المطلوبة</p>
            </div>
            {/* </a> */}
          </div>

          {/* ← Arrow before Step 2 */}
          <div className="col-md-1 d-none d-md-flex justify-content-center align-items-center">
            <div className="arrow-left">←</div>
          </div>

          {/* Step 2 */}
          <div className="col-md-3 mb-4">
            <div className="step-box h-100">
              <div className="step-icon mb-3"><i className="tio search"></i></div>
              <h5>الخطوة 2:</h5>
              <h3>دراسة الطلب</h3>
              <p>تحال إلى الفريق المختص لدراسة المشروع وأخذ الموافقات اللازمة</p>
            </div>
          </div>

          {/* ← Arrow before Step 3 */}
          <div className="col-md-1 d-none d-md-flex justify-content-center align-items-center">
            <div className="arrow-left">←</div>
          </div>

          {/* Step 3 */}
          <div className="col-md-3 mb-4">
            <div className="step-box h-100">
              <div className="step-icon mb-3"><i className="tio thumbs_up"></i></div>
              <h5>الخطوة 3:</h5>
              <h3>توقيع الاتفاقية</h3>
              <p>انضم وانطلق في رحلتك مع مجمع الابتكار - مسقط</p>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>

  <style jsx>{`
    .step-box {
      background-color: #f9f2fa;
      border: 2px solid #e3c8ee;
      border-radius: 16px;
      padding: 24px;
      text-align: center;
      transition: 0.3s;
      color: #4a004f;
    }

    .step-box:hover {
      background-color: #851f83;
      color: #fff;
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(133, 31, 131, 0.3);
    }

    .step-icon i {
      font-size: 40px;
      color: #851f83;
      background: #f3e6f7;
      padding: 15px;
      border-radius: 50%;
      display: inline-block;
      transition: 0.3s;
    }

    .step-box:hover .step-icon i {
      color: #fff;
      background: #5d1460;
    }

    .arrow-left {
      font-size: 32px;
      color: #851f83;
      line-height: 1;
    }
  `}</style>
  <center>
   <a href='/research_request_close_area' className="btn btn_lg_primary rounded-20 c-white"  style={{
              backgroundColor: 'gray',
              padding: '10px 20px',
              textAlign: 'center',
            }}>
                  قدم طلبك
                </a>
                </center>
</section>

<br /> <br />
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

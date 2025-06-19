import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import React from 'react';
import { useLanguage } from "@/context/Lang";
import translations from '@/utils/translations';

export default function researchrequest(props) {
    const { language, switchLanguage } = useLanguage();
    const t = translations[language];
    const teamMembers = [
  {
    name: "أراضي انتفاع ",
    title: "لانشاء مراكز بحث وتطوير الشركات المحلية والعالمية العاملة",
    img: "/assets/img/italy.jpg",
    side: "left",
  },
  {
    name: "مساحات مغلقة",
    title: "يوفر المجمع مساحات مغلقة ومكاتب للمؤسسات الداعمه و القائمة على البحث و التطوير و الابتكار",
    img: "/assets/img/front-view-off-office-desk.jpg",
    side: "left",
  },
  {
    name: "فرص استثمارية  تجارية",
    title: "تتضمن: حضانة أطفال، مقاهي، مطاعم، صالة لياقة بدنية، مدرسة عالمية، مركز ترفيهي.",
    img: "/assets/img/fun.jpg",
    side: "left",
  },

];
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
                                    الفرص الاستثمارية 

                                </h1>
                                {/* <p>
                    Leave us a little info, and we’ll be in touch.
                  </p> */}
                                <div class="breadcrumbs">
                                    <a href="/" class="">{t.home}  </a>
                                    <a href="/#invest" class="">{t.invest}  </a>
                                    <a href="/invest" style={{ color: '#fcb816' }}>الفرص الاستثمارية   </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
         <section className="team_overlay_style team_default_style margin-b-6">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-5">
            <div className="title_sections_inner margin-b-5 margin-t-10">
                     <h2 className="text-center mb-5" style={{ color: '#851f83', fontWeight: '500', fontSize: '2.5rem' }}>
 الفرص الاستثمارية </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="item_group">
                <div className="image_ps">
                  <img
                    src={member.img}
                    alt={member.name}
                    width={300}
                    height={300}
                    layout="responsive"
                    objectFit="cover"
                  />
                  <div className={`content_txt ${member.side}-side`}>
                    <h3 style={{ color: '#851f83',fontWeight:'bold'}}>{member.name}</h3>
                    <p>{member.title}</p>
                  </div>
                </div>
                {/* <div className="social_text">
                  {member.social.map((network, idx) => (
                    <a href="#" key={idx}>
                      {network}
                    </a>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
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

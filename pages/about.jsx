import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import React from 'react';
import { useLanguage } from "@/context/Lang";
import translations from '@/utils/translations';

export default function researchrequest(props) {
    const { language, switchLanguage } = useLanguage();
    const t = translations[language];
    return (
        <>
                    <section class="pt_banner_inner banner_px_image" id="Discover">
                <div class="parallax_cover">
                    <img class="cover-parallax" src="../../assets/img/subheader.png" alt="image" />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-lg-6">
                            <div class="banner_title_inner">
                                <h1>
                                    {t.aboutus}
                                </h1>
                                <div class="breadcrumbs">
                                    <a href="/" class="">{t.home}  </a>
                                    <a href="/#invest" style={{ color: '#fcb816' }}>{t.aboutus}  </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
<section class="service__about">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-lg-5">
                <div class="title_sections_inner margin-b-5">
                  {/* <h2>Video Vertical Style</h2> */}
                </div>
              </div>
            </div>
            <div class="body__tab">
              <div class="row">
                <div class="col-lg-4">
                  <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-art1-tab" data-toggle="pill" href="#v-pills-art1" role="tab" aria-controls="v-pills-art1" aria-selected="true">نبذه عن المجمع</a>
                    <a class="nav-link" id="v-pills-art2-tab" data-toggle="pill" href="#v-pills-art2" role="tab" aria-controls="v-pills-art2" aria-selected="false">القطاعات</a>
                    <a class="nav-link" id="v-pills-art3-tab" data-toggle="pill" href="#v-pills-art3" role="tab" aria-controls="v-pills-art3" aria-selected="false">الأهداف والربط مع روية عمان 2040</a>
                    <a class="nav-link" id="v-pills-art4-tab" data-toggle="pill" href="#v-pills-art4" role="tab" aria-controls="v-pills-art4" aria-selected="false">الفئات المستهدفة </a>
                    <a class="nav-link" id="v-pills-art4-tab" data-toggle="pill" href="#v-pills-art5" role="tab" aria-controls="v-pills-art4" aria-selected="false"> الموقع </a>
                    <a class="nav-link" id="v-pills-art4-tab" data-toggle="pill" href="#v-pills-art6" role="tab" aria-controls="v-pills-art4" aria-selected="false"> الرؤية والرسالة  </a>
                  </div>
                </div>

                <div class="col-lg-8 ml-auto">
                  <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-art1" role="tabpanel" aria-labelledby="v-pills-art1-tab">
                      <div class="block_video">
                        <div class="cover_video">
                          <img src="../../assets/img/workspace/15.jpg" alt="" />
                          {/*  */}
                        </div>
                        <div class="about__info">
                          <p>مجمع الابتكار مسقط: أحد أهم مبادرات وزارة التعليم العالي والبحث العلمي والابتكار وتعتبر أول المناطق العلمية الوطنية المتخصصة في مجال البحث العلمي وتطوير الابتكارات،  تعمل على الربط بين القطاعات الاكاديمية والحكومية والخاصة والمجتع.تعنـى بتوفيــر بيئــة جاذبــة للشركات المحلية والعالمية ومحفــزة للباحثيــن والمبتكريــن فــي ســلطنة عمــان. واســتثمار الافــكار بتطويرهــا وتحويلهـا إلـى منتجات وخدمات مستقبلية تضم المنطقة العلمية العديد من المرافق لتقديم عدد من الخدمات ضمن منظومة متكاملة  ُتسـاهم فـي الانتقـال إلـى الاقتصـاد المبنـي على المعرفة.
منظمة IASP 
</p>
                          {/* <a href="#">
                            View Availability
                            <i class="tio chevron_right"></i>
                          </a> */}
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-art2" role="tabpanel" aria-labelledby="v-pills-art2-tab">
                      <div class="block_video">
                        <div class="cover_video">
                          <img src="../../assets/img/workspace/16.jpg" alt="" />
                          
                        </div>
                        <div class="about__info">
                          {/* <p> */}
<ul>
    <li> البيئة والمياه </li>
    <li> الطاقة والطاقة المتجددة</li>
    <li> الغذاء والتقنية الحيوية</li>
    <li>الصحة</li>
</ul>
                          {/* </p> */}
                          {/* <a href="#">
                            View Availability
                            <i class="tio chevron_right"></i>
                          </a> */}
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-art3" role="tabpanel" aria-labelledby="v-pills-art3-tab">

                      <div class="block_video">
                        <div class="cover_video">
                          <img src="../../assets/img/workspace/17.jpg" alt="" />
                          
                        </div>
                        <div class="about__info">
                        <ul>
    <li> تحفيز ثقافة ريادة الاعمال 
    </li>
    <li>   النمو الاقتصادي
    </li>
    <li> استقطاب العقول 
    </li>
    <li>جذب الاستثمارات 
    </li>
</ul>
                        </div>
                      </div>

                    </div>
                    <div class="tab-pane fade" id="v-pills-art4" role="tabpanel" aria-labelledby="v-pills-art4-tab">
                      <div class="block_video">
                        <div class="cover_video">
                          <img src="../../assets/img/workspace/18.jpg" alt="" />
                          
                        </div>
                        <div class="about__info">
                          <ul>
                            <li> المبتكرين </li>
                            <li> مؤسسات دعم ريادة الأعمال والابتكار </li>
                            <li> المؤسسات الصغيرة والمتوسطة القائمة على الابتكار</li>
                            <li>رواد الأعمال من خريجي الجامعات وحملة المؤهلات العلمية العالية</li>
                            <li> الشركات العالمية والمحلية العاملة في القطاعات الأربعة التي تم تحديدها  </li>
                          </ul>
                          {/* <a href="#">
                            View Availability
                            <i class="tio chevron_right"></i>
                          </a> */}
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-art5" role="tabpanel" aria-labelledby="v-pills-art4-tab">
                      <div class="block_video">
                        <div class="cover_video">
                          <img src="../../assets/img/workspace/18.jpg" alt="" />
                          
                        </div>
                        <div class="about__info">
                          <p>يتميز المجمع بموقع استراتيجي بالقرب من جامعة السلطان قابوس ومنطقة الرسيل الصناعية ومطار مسقط الدولي والمناطق التجارية الاخرى في محافظة مسقط والمناطق السكنية والاسواق التجارية</p>
                          <a href="#">
                            الخريطة
                            <i class="tio chevron_right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-art6" role="tabpanel" aria-labelledby="v-pills-art4-tab">
                      <div class="block_video">
                        <div class="cover_video">
                          <img src="../../assets/img/workspace/18.jpg" alt="" />
                          
                        </div>
                        <div class="about__info">
                          <p>الرؤية: دفع عجلة التغيير الإيجابي بأن نصبح أحد أكبر مصادر الاهام والابتكار في المنطقة 
المهمة:وضع عمان على الخريطة العالمية للتقدم العلمي
</p>
                          {/* <a href="#">
                            View Availability
                            <i class="tio chevron_right"></i>
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
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

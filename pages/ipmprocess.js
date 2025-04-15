import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import ImageSlider from '../components/imageSlider';
import Circle from '@/components/Circle';
import Modal from '@/components/Modal';
import styles from "../styles/Modal.module.css";
import { useLanguage } from "@/context/Lang";
import translations from '@/utils/translations';


export default function IpmProcess({ imagesForImageSlider }) {
  const { language, switchLanguage } = useLanguage();
  const t = translations[language];
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedDisc, setSelectedDisc] = useState(null);
  const [selectedDetails, setSelectedDetails] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);


  const stageAItems = [
    {
      name: "مبنى الإبتكار",
      description: "مبنى الابتكار هو أحد الركائز المهمة والمكملة للبنية الأساسية ُ للمجمع، يتميــز المبنى  بمواصفات عالية تساعد على جعل هذه المنطقة العلمية بمختلف مرافقها الخدمية المتنوعـة، واحدة من أهم المرتكــزات المميــزة والرائــدة ُ فــي السـلطنة، للنهـوض بالبحــث العلمـــي والابتــكار.",
      details: [
        { name: "المساحة", value: "32 ألف متر مربع تقريبًا" },
        { name: "عدد الطوابق", value: "8 طوابق" }
      ],
      facilities: [
        { name: "مكاتب قطاع البحث العلمي والابتكار" },
        { name: "مراكز بحثية" },
        { name: "حاضنات أعمال" },
        {
          name: "مساحة للمؤسسات والشركات الداعمة لريادة الأعمال مثل:",
          value: [
            { name: "المجلس العُماني للاختصاصات الطبية" },
            { name: "شركة ماترز" },
            { name: "مراكز ساس (وزارة النقل والاتصالات وتقنية المعلومات)" },
            { name: "مركز الابتكار ونقل التكنولوجيا بجامعة السلطان قابوس" },
            { name: "شركة تكنولوجيا الكربون" }
          ]
        }
      ]
    },
    { 
      name: "مبنى التصنيع والنمذجة ",
      description: "تم تأسيس مبنى التصنيع والنمذجة بهدف احتضان المراكز الداعمة والممكنة للابتكار ويحتضن المبنى مراكز التصنيع والنمذجة، وورش ومكاتب ومختبرات",
      details: [
        { name: "المساحة", value: "5 الاف متر مربع" },
        // { name: "عدد الطوابق", value: "8 طوابق" }
      ],
      facilities: [
        // { name: "مكاتب قطاع البحث العلمي والابتكار" },
        // { name: "مراكز بحثية" },
        // { name: "حاضنات أعمال" },
        {
          name: "المساحات المستأجرة :",
          value: [
            { name: "مركز صناع عمان ( شركة ، I lap marine  3d factory )" },
            { name: "مركز الامتياز لتقنيات الاتصالات المتقدمة وانترنت الاشياء" },
            { name: "شركة أركان" },
          ]
        }
      ]
     },
     { 
      name: "مبنى المركز الاجتماعي",
      description: "تم تصميم المبنى الاجتماعي لتوفير بيئة تجمع بين التفاعل المهني والاجتماعي لمرتادي المجمع  بهدف تعزيز الروابط الاجتماعية والثقافية وتشجيع التفاعل والتواصل  وتبادل الافكار والخبرات في اجواء غير رسمية",
      details: [
        { name: "المساحة", value: "2 الف متر مربع " },
        // { name: "عدد الطوابق", value: "8 طوابق" }
      ],
      facilities: [
        { name: "مركز اللياقة البدنيه " },
        { name: "حوض سباحة" },
        { name: "مطعم" },
      ]
     },
     { 
      name: "مراكز البحث والتطوير",
      description: "يوفر مجمع الابتكار مسقط فرص استثمارية طويلة المدى لاراضي حول المجمع، للقيام بانشاء مراكز بحث  وتطوير للشركات المحلية والعالمية في التخصصات التي تركز عليها المجمع ، تستثمر كحق انتقاع بسعر 2 ريال سنويا، مع الاعفاء مدة سنتين لمدة 25 سنة قابلة للتجديد بمدة او مدد مماثلة",
      details: [
        { name: "المساحة", value: "بمساحة لا تقل عن الف متر مربع " },
        // { name: "عدد الطوابق", value: "8 طوابق" }
      ],
      facilities: [
        { name: "معهد عمان للطاقة - قائم" },
        { name: "مركز عمان للموارد الوراثية الحيوانية والنباتية (موارد) - تم التوقيع" },
        { name: "شركة مايكروفلوديك - تم التوقيع" },
      ]
     },
  ];

  const stageBItems = [
    { name: "مراكز بحث وتطوير", description: "أحدث مراكز البحث والتطوير" },
    { name: "معاهد امتياز", description: "معاهد بمواصفات عالمية" },
    { name: "محطة التبريد المركزي", description: "محطة متقدمة لتبريد المجمع" },
    { name: "مدرسة عالمية داعمة للابتكار", description: "مدرسة بمناهج متطورة" },
    { name: "مركز ترفيهي + فندق", description: "فندق عصري مع مركز ترفيهي متكامل" }
  ];

  const openModal = (description, name, details, facilities) => {
    setSelectedTitle(name || "غير معروف");
    setSelectedDisc(description || "لا يوجد وصف متاح");
    setSelectedDetails(details || []);
    setSelectedFacilities(facilities || []);
    setModalOpen(true);
  };

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
                                    {t.ipmprocess}
                                </h1>
                                {/* <p>
                    Leave us a little info, and we’ll be in touch.
                  </p> */}
                                <div class="breadcrumbs">
                                    <a href="/" class="">{t.home}  </a>
                                    <a href="">{t.discoveripm}  </a>
                                    <a href="" style={{ color: '#fcb816' }}>{t.ipmprocess}  </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <br />
      <section className="process_section padding-t-10 padding-b-30">
        <div className="container">
          {/* <h1 className="banner_title margin-b-5">مراحل تطور المجمع</h1> */}

          <div className="row text-center">
            <div className="col-lg-5">
              <div className="title_sections">
                <Circle label="المرحلة أ" items={stageAItems} onItemClick={openModal} />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="title_sections">
                <Circle label="المرحلة ب" items={stageBItems} onItemClick={() => {}} />
              </div>
            </div>
          </div>
        </div>

        {/* مودال التفاصيل */}
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2 className={styles.modalTitle}>{selectedTitle}</h2>
          <p>{selectedDisc}</p>

          {/* التفاصيل */}
          {selectedDetails.length > 0 ? (
            <ul className={styles.ul_list} style={{color:'#009ec2'}}>
              {selectedDetails.map((item, index) => (
                <li key={index}>
                  <strong>{item.name}: </strong><span style={{ color: '#414042' }}>{item.value}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>لا توجد تفاصيل متاحة</p>
          )}

          {/* المرافق */}
          {selectedFacilities.length > 0 ? (
            <ul className={styles.ul_list}>
              <h6 className={styles.subtitle}>وتتكون من:</h6>
              {selectedFacilities.map((facility, index) => (
                <li key={index} style={{color:'#68ad45',fontWeight:'bold'}}>
                  {facility.name}
                  {facility.value && Array.isArray(facility.value) && (
                    <ul className={styles.ol_list}>
                      {facility.value.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem.name}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>لا توجد مرافق متاحة</p>
          )}
        </Modal>
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

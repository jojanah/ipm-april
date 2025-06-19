import { useState } from 'react';
import React from 'react';
import { useLanguage } from "@/context/Lang";
import translations from '@/utils/translations';

export default function IpmProcess() {
  const { language } = useLanguage();
  const t = translations[language];

  const items = [
    {
      name: "التسهيلات والحوافز",
      description: (
        <>
          يقدم تسهيلات وحوافز تناسب السوق المحلي والعالمي وفق المرسوم السلطاني رقم 27/2019
          <ul>
            <li>إعفاء من الضرائب لمدة <strong>5 سنوات</strong>، قابلة للتمديد حتى <strong>15 سنة</strong>.</li>
            <li>الانتفاع بالأراضي لمدة <strong>25 سنة</strong> قابلة للتجديد.</li>
            <li>استيراد كافة أنواع البضائع اللازمة مع <strong>إعفاء جمركي</strong>.</li>
          </ul>
        </>
      ),
      iconClass: "tio card_gift",
      iconBg: "#e0b3ff",
      iconColor: "#7b38b6"
    },
    {
      name: "بيئة جاذبة",
      description: "يوفر بيئة ديناميكية تُشجع الباحثين ورواد الأعمال على تطوير المعرفة والأعمال.",
      iconClass: "tio earth",
      iconBg: "#a1d7ff",
      iconColor: "#1a78b4"
    },
    {
      name: "حلقة وصل",
      description: "يُعتبر منصة تعاون مميزة بين القطاع الأكاديمي وقطاع الأعمال والحكومة والمجتمع.",
      iconClass: "tio group_equal",
      iconBg: "#ffccbc",
      iconColor: "#d64c1a"
    },
    {
      name: "موقع مميز",
      description: "موقع استراتيجي بين فاعلي البحث العلمي، يتميز بسهولة الوصول إليه.",
      iconClass: "tio map",
      iconBg: "#c8f7dc",
      iconColor: "#2c7a48"
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

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
    <section className="why-innovation-park py-5">
      <div className="container">
        <h2 className="text-center mb-5" style={{ color: '#851f83', fontWeight: '500', fontSize: '2rem' }}>
          لماذا مجمع الابتكار مسقط؟
        </h2>

        <div className="row gy-4">
          {items.map((item, idx) => (
            <div key={idx} className="col-md-6">
              <div
                className={`feature-card ${openIndex === idx ? 'expanded' : ''}`}
                onClick={() => toggleOpen(idx)}
                role="button"
                tabIndex={0}
                onKeyPress={e => e.key === 'Enter' && toggleOpen(idx)}
              >
                <div className="header">
                  <div
                    className="icon-circle"
                    style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                  >
                    <i className={item.iconClass}></i>
                  </div>
                  <h4>{item.name}</h4>
                  <span className={`arrow ${openIndex === idx ? 'open' : ''}`}>&#9662;</span>
                </div>

                <div className={`content ${openIndex === idx ? 'show' : ''}`}>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .feature-card {
          background: linear-gradient(145deg, #f6f0fc, #e8daf7);
          border-radius: 20px;
          padding: 28px 30px;
          box-shadow: 0 8px 20px rgba(133, 31, 131, 0.15);
          transition: box-shadow 0.4s ease, transform 0.3s ease;
          cursor: pointer;
          color: #4a004f;
          user-select: none;
        }
        .feature-card:hover {
          box-shadow: 0 15px 30px rgba(133, 31, 131, 0.3);
          transform: translateY(-6px);
        }
        .feature-card.expanded {
          box-shadow: 0 20px 40px rgba(133, 31, 131, 0.35);
          background: linear-gradient(145deg, #7b38b6, #b06bf5);
          color: white;
        }
        .feature-card.expanded .header h4 {
          color: white;
        }

        .header {
          display: flex;
          align-items: center;
          gap: 15px;
          user-select: none;
        }
        .icon-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 28px;
          transition: background-color 0.4s ease, color 0.4s ease, transform 0.3s ease;
          flex-shrink: 0;
        }
        .feature-card.expanded .icon-circle {
          background-color: #4d0f73 !important;
          color: #f3e6f7 !important;
          transform: scale(1.15);
        }
        h4 {
          margin: 0;
          font-weight: 500;
          font-size: 1.3rem;
          flex-grow: 1;
          transition: color 0.4s ease;
        }
        .arrow {
          font-size: 22px;
          user-select: none;
          transition: transform 0.3s ease;
          color: #7b38b6;
        }
        .feature-card.expanded .arrow {
          transform: rotate(180deg);
          color: #f3e6f7;
        }
        .content {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.5s ease, opacity 0.5s ease;
          margin-top: 18px;
          font-size: 1rem;
          line-height: 1.7;
        }
        .content.show {
          max-height: 500px;
          opacity: 1;
        }
        .content ul {
          padding-left: 20px;
          margin-top: 12px;
        }
        .content ul li {
          margin-bottom: 8px;
        }

        @media (max-width: 767px) {
          .feature-card {
            text-align: center;
          }
          .header {
            justify-content: center;
          }
          .arrow {
            margin-left: 10px;
          }
        }
      `}</style>
    </section>
    </>
  );
}



import React from 'react';
import ImageSlider from '../components/imageSlider';
import { useLanguage } from "@/context/Lang";
import translations from '@/utils/translations';


export default function Home(props) {
  const { language, switchLanguage } = useLanguage();
  const t = translations[language]; 

  return (
    <>
      <ImageSlider imagesForImageSlider={props?.imagesForImageSlider} />

      {/* <!-- Start Service --> */}
      <section className="gng_serv_about padding-t-12" style={{ position: 'relative' }}>
        <div className="container">
          <h1 className='banner_title'>
            الهـــــام القائــــــــد
          </h1>
          <br />
          <div className="row">
            <div className="col-lg-8 my-auto mr-auto">
              <div className="gr_txt">
                <div className="title_sections margin-b-4">
                  <h3>
                    إن الاهتِمام بقطاع التعليم بمختلف أنواعه ومستوياته،
                    وتوفير البيئة الداعمة والمحفزة للبحث العلمي والابتكار،
                    سوف يكون في سُلّم أولوياتنا الوطنية.
                    وسنُمدّه بكافة أسباب التمكين باعتباره الأساس
                    الذي من خلاله سيتمكن أبناؤنا من الإسهام
                    في بناء متطلبات المرحلة المقبلة.
                  </h3>
                </div>
                <p>
                  حضرة صاحب الجلالة السلطان        <br />
                  هيثم بن طارق المعظم        <br />
                  حفظه الله ورعاه        <br />
                  23 فبراير 2020 م
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="mg_img rounded-8">
                <img className="img-fluid rounded-8" src="../../assets/img/sh.png" alt="Leader" />
              </div>
            </div>
          </div>
          {/* Shape inside the section */}
          <img
            src="../../assets/img/workspace/shape.svg" // Path to your SVG file
            alt="Decorative Shape"
            style={{
              position: 'absolute',
              top: '5px', // Adjust top position
              right: '20px', // Adjust right position
              width: '80%', // Adjust width

            }}
          />
        </div>
      </section>
      <br />
      <section className="products_section product_demo2 features_hosting padding-t-12 " id="Services">
        <div className="container">
          <h1 className='banner_title'>
            {/* نبذة عن المجمع */}
            مرحبا بكم في مجمع الابتكار مسقط
          </h1>
          <br /> <br /> <br />
          <div className="row">
            <div className="col-md-8">
              <div class="title_sections mb-0">
                <p style={{ fontSize: '25px' }}>
                  أول
                  المناطق العلمية الوطنية المتخصصة في مجال البحث العلمي
                  وتطوير الابتكارات، وتعنـى بتوفيــر بيئــة
                  جاذبــة للشركات المحلية والعالمية ومحفــزة للباحثيــن والمبتكريــن فــي ســلطنة عمــان .<br />
                  وتعزيــز المواهــب البحثيــة، واســتثمار الافــكار بتطويرهــا وتحويلهـا إلـى منتجات وخدمات مستقبلية
                  تساهم فـي الانتقـال إلـى الاقتصـاد المبنـي على المعرفة.<br /> يهدف مجمع الابتكار مسقط إلى تطوير وتعميق المعرفة من خلال التركيز على أربعة مجالات بشكلِ أولي وهي:
                </p>
                <a href='https://www.ipmoman.com/' className="btn btn_lg_primary rounded-20 c-white"  style={{
              backgroundColor: '#009ec2',
              padding: '10px 20px',
              textAlign: 'center',
            }}>
                  المزيد
                </a>
              </div>
            </div>
            <div class="col-lg-4 ml-auto">
              <div class="row">
                <div class="col-md-5">
                  <div class="item_logo aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <img src="../../assets/img/icons/food.png" style={{ width: '100px' }} />
                    <br /><br />
                    <h4 class="c-gray">
                      الغذاء والتقنية
                      الحيوية
                    </h4>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="item_logo aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <img src="../../assets/img/icons/energy.png" style={{ width: '100px' }} />
                    <br /><br />
                    <h4 class="c-gray">
                      الطاقة
                    </h4>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="item_logo aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <img src="../../assets/img/icons/water.png" style={{ width: '100px' }} />
                    <br /><br />
                    <h4 class="c-gray">
                      البيئة  والمياه
                    </h4>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="item_logo aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <img src="../../assets/img/icons/health.png" style={{ width: '100px' }} />
                    <br /><br />
                    <h4 class="c-gray">
                      الصحة
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /> <br /> <br />
        </div>
      </section>

      <section id="goals" className="gng_serv_about padding-t-12" style={{ position: 'relative' }}>
        <div className="container">
          <h2 className='banner_title'>
            الأهداف والربط مع روية عمان 2040

          </h2>
          <br /> <br /> <br />
          <div class="card-container">

            {/* <!-- Card 1 --> */}
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front" style={{ backgroundImage: 'url(../../assets/img/front-2.png)' }}>
                  {/* <img src='../../assets/img/front-2.png' /> */}
                </div>
                <div class="flip-card-back" style={{ backgroundColor: '#851f83' }}>
                  تحفيز ثقافة  <br /> ريادة الاعمال
                </div>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front" style={{ backgroundImage: 'url(../../assets/img/front-1.png)' }}>
                </div>
                <div class="flip-card-back" style={{ backgroundColor: '#fdb913' }}>
                  النمو الاقتصادي

                </div>
              </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front" style={{ backgroundImage: 'url(../../assets/img/front-3.png)' }}>
                </div>
                <div class="flip-card-back" style={{ backgroundColor: '#68ad45' }}>
                  استقطاب العقول
                </div>
              </div>
            </div>

            {/* <!-- Card 4 --> */}
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front" style={{ backgroundImage: 'url(../../assets/img/front-4.png)' }}>
                </div>
                <div class="flip-card-back" style={{ backgroundColor: '#009ec2' }}>
                  جذب الاستثمارات
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <br /><br />


      <section className="service__workspace features__workspace padding-py-2" id="invest">
        <div className="container">
          <div className="row align-items-center">
            {/* First column for the title */}
            <div className="col-12 col-lg-6">
              <div className="title_sections mb-0">
                <div className="banner_title banner_title_ipm">
                  <h1>
                    <span style={{ color: 'black' }}>استثمــــــــر </span> <br />
                    <span style={{ color: 'white' }}>في مجمع الابتكار</span> <br />
                    <span style={{ color: 'black' }}>  مسقط
                    </span>
                  </h1>
                </div>
              </div>
  
     {/* Buttons Container */}
     <div 
          style={{
            display: 'flex', 
            justifyContent: 'center', 
            gap: '15px', 
            marginTop: '100px',
            flexWrap: 'wrap'
          }}
        >
                       <p className="c-gray" style={{ fontSize: '25px' }}>
                تبلغ مساحة مجمع الابتكار مسقط 540 الف متر مربع، يعد مجمع الابتكار مسقط وجة مثالية لاستثمار بفضل موقعه المميز في وجاذبيته الاقتصادية بالاضافة الى الحوافز والتسهيلات التي يقدمها المجمع 
</p>
       
          <a
            href="/investtour"
            className="btn btn_md_primary rounded-20 c-white f-bold"
            style={{
              backgroundColor: 'gray',
              padding: '10px 20px',
              textAlign: 'center',
            }}>
              ابدأ رحلة الاستثمار

          </a>
        {/*     <a
            href="#"
            className="btn btn_md_primary rounded-20 c-white"
            style={{
              backgroundColor: '#009ec2',
              padding: '10px 20px',
              textAlign: 'center',
            }}>الفرص الاستثمارية 
          </a>
          <a
            href="/whyIPM"
            className="btn btn_md_primary rounded-20 c-white"
            style={{
              backgroundColor: '#fdb913',
              padding: '10px 20px',
              textAlign: 'center',
            }}>
    لماذا مجمع الابتكار مسقط؟
          </a>
          <a
            href="/invest"
            className="btn btn_md_primary rounded-20 c-white"
            style={{
              backgroundColor: '#851f83',
              padding: '10px 20px',
              textAlign: 'center',
            }}>
             {t.investtour}
           
          </a>*/}
        </div> 

      </div>

            {/* Second column for the image */}
            <div className="col-12 col-lg-6 text-lg-right text-center">
              <img
                src="/assets/img/map.png"
                alt="map"
                style={{
                  width: '100%',
                  maxWidth: '800px',
                  height: 'auto',
                }}
              />
              {/* Circle Marker for Muscat */}
              <a
                href="https://www.google.com/maps?q=23.595981528692544,58.17872186188114"
                target="_blank"
                rel="noopener noreferrer"
                className="location"
                style={{ top: '28%', left: '77%', position: 'absolute' }}
              >
                <div className="tooltip">مجمع الابتكار مسقط</div>
              </a>
            </div>
          </div>

          {/* Shape in Corner */}
          <img
            src="../../assets/img/hosting/14301-01.png"
            alt="shape"
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              width: '25%',
              height: 'auto',
              opacity: '.2'
            }}
          />
        </div>
      </section>

      <section class="section__news margin-t-12 padding-b-12 padding-t-15" id="News">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3">
              <div class="title_sections">
                <div class="before_title">
                  <span class="c-green">المركز الاعلامي
                  </span>
                </div>
                <h1 className='banner_title' style={{ width:'200px' }}>
            أخبـار المجمع
          </h1>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-4">
                <div class="grid_blog_avatar">
                  <div class="cover_blog">
                    <img src="../../assets/img/new1.jpg" alt="" />
                  </div>
                  <div class="body_blog">
                    <a href="#">
                      <div class="person media">
                        {/* <img src="../../assets/img/persons/01.png" alt="" /> */}
                        <div class="media-body">
                          <div class="txt">
                            {/* <h3>Olivia DeSmit</h3> */}
                            <time>27 Sep, 2020</time>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* <a href="single-blog.html" class="link_blog"> */}
                      <h4 class="title_blog">
                      إتفاقية  حق انتفاع بأرض مخصصة بمجمع الابتكار مسقط
                      </h4>
                     <p>
                      وقعت الوزارة إتفاقية حق انتفاع بأرض مخصصة بمجمع الابتكار مسقط، لإنشاء مشروع مختبر الموائع الدقيقة (المايكروفلوديك) المتخصص في البحث والتطوير وتصميم سوائل الحقن الجديدة، وأنماط الحقن وبوليمرات الاستخلاص المعزز للنفط، ووصفات كيميائية أخرى وتقنيات تشغيلية فعالة

                      </p>
                    {/* </a> */}
                  </div>
                </div>
           
              </div>
              <div class="col-lg-4">
                <div class="grid_blog_avatar">
                  <div class="cover_blog"> 
                  <img src="../../assets/img/new2.jpg" alt="News" />
                  </div>
                  <div class="body_blog">
                    <a href="#">
                      <div class="person media">
                        {/* <img src="../../assets/img/persons/01.png" alt="" /> */}
                        <div class="media-body">
                          <div class="txt">
                            <time>30 Sep, 2020</time>
                          </div>
                        </div>
                      </div>
                    </a>

                    {/* <a href="single-blog.html" class="link_blog"> */}
                      <h4 class="title_blog">
                      توقيع اتفاقية بين شركة ماترز و مجمع الابتكار مسقط
                      </h4>
                      {/* <p class="short_desc"> */}
                      <p>
                      توقيع اتفاقية بين شركة ماترز ومجمع الابتكار مسقط وقّع من جانب مجمع الابتكار مسقط الفاضلة/ نجاح بنت محمد الراشدية- المديرة العامة لمركز الابتكار، ومن جانب شركة رؤية الشباب للخدمات والاستثمار (مجموعة ماترز) الفاضلة/ مريم بنت خليفة العامرية- المؤسس والرئيس التنفيذي.
                      </p>
                    {/* </a> */}

                  </div>
                </div>
     
              </div>
              <div class="col-lg-4">
                <div class="grid_blog_avatar">
                  <div class="cover_blog">
                  <img src="../../assets/img/news3.jpg" alt="news" />
                  </div>
                  <div class="body_blog">
                    <a href="#">
                      <div class="person media">
                        {/* <img src="../../assets/img/persons/01.png" alt="" /> */}
                        <div class="media-body">
                          <div class="txt">
                            {/* <h3>Merlin Roux</h3> */}
                            <time>24 Sep, 2020</time>
                          </div>
                        </div>
                      </div>
                    </a>

                    {/* <a href="single-blog.html" class="link_blog"> */}
                      <h4 class="title_blog">
                      عقد تأجير مساحة مع شركة (تكنولوجيا الكربون)المتخصصة في أعمال البحث والتطوير التجريبي في مجال حلول الرعاية الطبية   
                      </h4>
                      <p>
                      وقعت الوزارة ممثلة بمجمع الابتكار مسقط عقد تأجير مساحة مع شركة(تكنولوجيا الكربون)المتخصصة في أعمال البحث والتطوير التجريبي في مجال حلول الرعاية الطبية ، وقع العقد نيابة عن الوزارة نجاح بنت محمد الراشدية المديرة العامة لمركز الابتكار.
                      </p>
                    {/* </a> */}

                  </div>
                </div>
           
              </div>
            </div>
          </div>
        </div>
      </section>


        

      {/* <section className="gng_serv_about padding-t-4 padding-b-4">
        <div className="container">
          <h1 className='banner_title'>
            أخبـار المجمع
          </h1>
          <br />

          <div class="tweet-grid">
            <div class="tweet-card">
              <blockquote class="twitter-tweet">
                <a href="https://twitter.com/ipmoman/status/1389900484807434241"></a>
              </blockquote>
            </div>
            <div class="tweet-card">
              <blockquote class="twitter-tweet">
                <a href="https://twitter.com/ipmoman/status/1465548629268119552"></a>
              </blockquote>
            </div>
            <div class="tweet-card">
              <blockquote class="twitter-tweet">
                <a href="https://twitter.com/ipmoman/status/1263359514998423552"></a>
              </blockquote>
            </div>
            <div class="tweet-card">
              <blockquote class="twitter-tweet">
                <a href="https://twitter.com/ipmoman/status/1263359514998423552"></a>
              </blockquote>
            </div>
          </div> </div>

      </section> */}

    </>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from an external API or internal API
  const res = await fetch('http://localhost:1200/ipm/');
  const data = await res.json();
  console.log("🚀 ~ getServerSideProps ~ data:", data)

  // Pass the fetched data to the page as props
  return {
    props: data ? {
      ...data
    } : {},
  };
}

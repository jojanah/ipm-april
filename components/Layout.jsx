import React, { useEffect } from 'react';
import Head from 'next/head';
import debounce from 'lodash.debounce';
import { useLanguage } from "@/context/Lang";
import translations from '@/utils/translations';

const Layout = ({ children }) => {
  const { language, switchLanguage } = useLanguage();
  const t = translations[language];
  useEffect(() => {
    console.log(language);
    const handleScroll = debounce(() => {
      const navbar = document.querySelector('#myNavbar');
      const logo = document.querySelector("#navbarLogo");

      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        logo.src = '/assets/img/ipm-color.svg';
      } else {
        navbar.classList.remove('scrolled');
        logo.src = '/assets/img/ipm-white.svg';
      }
    }, 200); // Debounce delay in milliseconds (200ms)

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <script src="/assets/js/jquery-3.5.0.js" type="text/javascript"></script>
        <script src="/assets/js/jquery-migrate.min.js" type="text/javascript"></script>
        <script src="/assets/js/popper.min.js" type="text/javascript"></script>
        <script src="/assets/js/bootstrap.min.js" type="text/javascript"></script>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </Head>
      {/* // put it no_blur if you dont want bg */}
      <header className="header-nav-center header_ch_left active-lightgreen no_blur" id="myNavbar">
        <div className="overlay" id="navbarOverlay"></div>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            {/* Navbar Left */}
            <div className="navbar-left">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    {t.aboutus}
                  </a>

                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#Partner1"> نبذة عن المجمع</a>
                    <a className="dropdown-item" href="#Partner1
                    ">القطاعات المستهدفة</a>
                    <a className="dropdown-item" href="#goals">الربط <br />مع روية عمان 2040
                    </a>
                    {/* <a className="dropdown-item" href="https://investoman.om/ar_002" target='_blank'>نبذه تعريفية <br />عن سلطنة عمان
                    </a> */}
                    <a className="dropdown-item" href="#Partner2"> الفئات المستهدفة  </a>
                    <a className="dropdown-item" href="#Partner2"> الموقع   </a>
                    <a className="dropdown-item" href="/ipmprocess">{t.discoveripm}</a>
                    <a className='dropdown-item' href='/partner'> {t.partner}</a>
                  </div>
                </li>
                
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#invest" id="navbarDropdown">{t.invest}</a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="partnersDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    وسائل الاعلام

                  </a>
                  <div className="dropdown-menu" aria-labelledby="partnersDropdown">
                    <a className="dropdown-item" href="#Partner1">النشرات الدورية </a>
                    {/* <a className="dropdown-item" href="#Partner2">صفحات التواصل الاجتماعي</a> */}
                    <a className="dropdown-item" href="#Partner2"> ملفات التنزيل (المطوية)</a>
                    <a className="dropdown-item" href="#Partner2"> الفعاليات القادمة </a>

                  </div>
                </li>
                
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/ipmprocess" id="navbarDropdown">{t.discoveripm}</a>
                </li> */}
  
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="partnersDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {t.partner}
                  </a>
                  <div className="dropdown-menu" aria-labelledby="partnersDropdown">
                    <a className="dropdown-item" href="/partner#partner1">الشركات والمؤسسات المنتفعة <br /> من الفرص الاستثمارية </a>
                    <a className="dropdown-item" href="/partner#partner2"> الشركاء الاستراتيجيين <br />( برامج ومبادرات قطاع البحث العلمي)
                    </a>
                  </div>
                </li> */}
              </ul>
            </div>
            {/* Navbar Center */}
            <div className="navbar-center">
              <a className="navbar-brand" href="/">
                <img
                  id="navbarLogo"
                  className="logo"
                  src="/assets/img/ipm-white.svg"
                  alt="logo"
                  style={{ width: '200px' }}
                />
              </a>
            </div>
            {/* Navbar Right */}
            <div className="navbar-right">
              <ul className="navbar-nav">
               
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#footer" id="navbarDropdown">تواصل معنا</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/faq" id="navbarDropdown">{t.faq}</a>
                </li>
                <li className="nav-item dropdown">
                  <a href="#Testimonial" className="nav-link" onClick={() => switchLanguage()}>
                    {language == 'en' ? 'عربي' : 'English'} <i className="tio globe"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>


      <main>{children}</main>

      <footer class="default_footer dark" id="footer">
        <div class="container">
          <img class="shape_overlay" src="../../assets/img/shapes/shape-b.png" />

          {/* <!-- Start footer --> */}
          <div class="defalut-footer padding-py-5">
            <div class="row">
              <div class="col-md-8 col-lg-8 mt-4 mt-lg-0">
                <div class="item_subscribe">
                  <h1>ابق على اطلاع</h1>
                  <h3>
                    اشترك في نشرتنا البريدية واطلع على آخر التطورات
                  </h3>
                  <form class="form-row">
                    <div class="col-md-11 form-group subscribebtn">
                      <div class="item_input">
                        <input type="email" class="form-control rounded-pill" id="exampleInputEmail1" placeholder="ادخل بريدك الالكتروني..لتصلك النشرة" aria-describedby="emailHelp" />
                        <button type="button" class="btn ripple_circle scale rounded-circle btn_subscribe">
                          <i class="tio send"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 mb-4 mb-lg-0">
                <div class="item_about">
                  <a className="navbar-brand" href="/">
                    <img
                      id="navbarLogo"
                      className="logo"
                      src="/assets/img/LOGO-footer.svg"
                      alt="logo"
                      style={{ width: '350px' }}
                    />
                  </a>

                </div>
              </div>


            </div>

            <div class="col-12 text-center padding-t-6">
              <h5 style={{ color: '#ddd' }}> للتواصل والاستفسار </h5>
              <div class="col-12">
                <a href="#Testimonial" class="btn-social border-hover mb-4 mr-2">
                  <i class="tio email"></i>
                </a>
                <a href="#Testimonial" class="btn-social border-hover mb-4 mr-2">
                  <i class="tio call"></i>
                </a>
                <a href="#Testimonial" class="btn-social border-hover mb-4 mr-2">
                  <i class="tio instagram"></i>
                </a>

                <a href="#Testimonial" class="btn-social border-hover mb-4 mr-2">
                  <i class="tio twitter"></i>
                </a>
                <a href="#Testimonial" class="btn-social border-hover mb-4 mr-2">
                  <i class="tio linkedin"></i>
                </a>

                <a href="#Testimonial" class="btn-social border-hover mb-4 mr-2">
                  <i class="tio youtube"></i>
                </a>
              </div>
              <div class="col-12 item_links">
                <div class="row justify-content-center align-items-center">
                  <div class="col-2 mb-4 mr-4">
                    <a href="#Testimonial" class="nav-link">الشروط والأحكام</a>
                  </div>
                  <div class="col-2 mb-4 mr-4">
                    <a href="/faq" class="nav-link">الأسئلة الشائعة </a>
                  </div>
                  <div class="col-2 mb-4 mr-4">
                    <a href="#Testimonial" class="nav-link">سياسة الخصوصية</a>
                  </div>
                </div>
              </div>

              <div class="copyright">
                <span>©
                  جميع الحقوق محفوظة لمجمع الابتكار مسقط</span>
              </div>
            </div>
          </div>
          {/* <!-- End Footer --> */}
        </div>
      </footer>
    </>
  );
};

export default Layout;

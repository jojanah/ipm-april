import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import React from 'react';
import { useLanguage } from "@/context/Lang";
import translations from '@/utils/translations';
import axios from 'axios'
import { isEmail, isNumeric } from 'validator'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { api, basePath } from "../utils/constent";
import Loader from '../components/loader'

export default function researchrequest(props) {
    
    const { language, switchLanguage } = useLanguage();
    const t = translations[language];
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSuccess, setIsSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    // validate all fields
    const validate = () => {
        if (!name) { Notify.failure('name field cannot be empty.'); return }
        if (!isEmail(email)) { Notify.failure('Email is not valid'); return }

        return true;
    }

    const handleSubmit = () => {
        if (validate() == undefined) return;


        const data = {
            name, email
        }
        setIsLoading(true)
        console.log(data);

        axios.post(`${api}/ipm`, data)
        .then((res) => {
          setIsLoading(false);
          Notify.success('Added successfully.');
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
      
          // Safely check if err.response exists
          const errorMessage = err.response?.status === 403
            ? err.response?.data || 'Forbidden'
            : 'Failed to save.';
      
          Report.failure(errorMessage, '', 'Okay');
        });
      
    }
    
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
                                    {t.contactus}
                                </h1>
                                {/* <p>
                    Leave us a little info, and we’ll be in touch.
                  </p> */}
                                <div class="breadcrumbs">
                                    <a href="/" class="">{t.home}  </a>
                                    {/* <a href="" style={{ color: '#fcb816' }}>{t.research_request_close_area}  </a> */}
                                    <a href="" style={{ color: '#fcb816' }}>{t.contactus}</a> 
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section class="section_contact_five margin-t-5 padding-py-12" id="contact">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="title_sections_inner margin-b-6">
                                <h2>{t.contactus}</h2>
     
                            </div>
                            <div class="form_cc_four">
                                <form action="" class="row">
                                   
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <h6>الاسم  </h6>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <h6>البريد الإلكتروني</h6>
                                            <input type="email" class="form-control" onChange={(e) => { setEmail(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <h6>رقم الهاتف </h6>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <h6>  نوع الطلب  </h6>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                  
                            
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <h6> العنوان </h6>
                                            <input type="text" class="form-control" />

                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <h6>الرسالة  </h6>
                                            <textarea class="form-control" rows="7"></textarea>
                                        </div>
                                    </div>
                                 
                                 
                               
                                
                                    <div class="col-12 d-md-flex justify-content-between margin-t-2">
                                        <a onClick={handleSubmit} class="btn bg-ipm-green rounded-8 c-white h-fit-content">
                                            إرسال
                                        </a>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}



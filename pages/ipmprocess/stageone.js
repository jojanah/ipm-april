import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS
import Image from 'next/image';
import React from 'react';

import axios from 'axios';


export default function Home(props) {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <>
            <section class="pt_banner_inner banner_px_image" id="Discover">
          <div class="parallax_cover">
            <div class="simpleParallax" style={{overflow: "hidden"}}>
              <img class="cover-parallax" src="../../assets/img/inner/about.jpg" alt="image" 
              style={{transform: 'translate3d(0px, 110px, 0px) scale(1.3); will-change: transform; transition: transform 0.6s cubic-bezier(0, 0, 0, 1)'}} 
              />
              </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-lg-6">
                <div class="banner_title_inner">
                  <h1 data-aos="fade-up" data-aos-delay="0" class="aos-init aos-animate">
                    About Us
                  </h1>
                  <p data-aos="fade-up" data-aos-delay="100" class="aos-init aos-animate">
                    Leave us a little info, and we’ll be in touch.
                  </p>
                  <div data-aos="fade-up" data-aos-delay="200" class="aos-init aos-animate">
                    <a href="#" class="btn btn_sm_primary bg-orange-red c-white rounded-8">Contact Us</a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
        <section class="tabs_works tabs_service margin-b-6">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-lg-5">
                <div class="title_sections_inner margin-b-5">
                  {/* <h2>Box Vertical Style</h2> */}
                </div>
              </div>
            </div>
   
            <div class="row">
              <div class="col-md-10 col-lg-4">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a class="nav-link active" id="v-pills-ss1-tab" data-toggle="pill" href="#v-pills-ss1" role="tab"
                    aria-controls="v-pills-ss1" aria-selected="true">
                    <h4 class="margin-b-2 font-s-18">Manage your portfolio</h4>
                    <p>
                      Buy and sell popular digital currencies, keep track of
                      them in the one place.
                    </p>
                  </a>
                  <a class="nav-link" id="v-pills-ss2-tab" data-toggle="pill" href="#v-pills-ss2" role="tab"
                    aria-controls="v-pills-ss2" aria-selected="false">
                    <h4 class="margin-b-2 font-s-18">Vault protection</h4>
                    <p>
                      For added security, store your funds in a vault with
                      time delayed withdrawals.
                    </p>
                  </a>
                  <a class="nav-link" id="v-pills-ss3-tab" data-toggle="pill" href="#v-pills-ss3" role="tab"
                    aria-controls="v-pills-ss3" aria-selected="false">
                    <h4 class="margin-b-2 font-s-18">Mobile apps</h4>
                    <p>
                      Stay on top of the markets with the Coinbase app for
                      <span class="c-blue">Android</span> or
                      <span class="c-blue">iOS</span>.
                    </p>
                  </a>
                </div>
              </div>
              <div class="col-md-10 col-lg-7 ml-auto mt-md-auto">
                <div class="tab-content img--tabs slide_bottom" id="v-pills-tabContent">
                  <div class="tab-pane fade show active" id="v-pills-ss1" role="tabpanel"
                    aria-labelledby="v-pills-ss1-tab">
                    <img class="--img" src="../../assets/img/41014.png" alt="" />
                  </div>
                  <div class="tab-pane fade" id="v-pills-ss2" role="tabpanel" aria-labelledby="v-pills-ss2-tab">
                    <img class="--img" src="../../assets/img/9701.png" alt="" />
                  </div>
                  <div class="tab-pane fade" id="v-pills-ss3" role="tabpanel" aria-labelledby="v-pills-ss3-tab">
                    <img class="--img" src="../../assets/img/features02.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        </section>
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

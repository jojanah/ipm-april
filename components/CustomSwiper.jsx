import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSwiper = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="logos_section text-center margin-b-6">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-5">
            <div className="title_sections_inner margin-b-5">
              <h2>شركاء النجاح</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <div className="wrapper_logos">
              <Slider {...settings}>
                <a
                  className="item-client"
                  href="https://slack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../../assets/img/logos/slack.png" alt="Slack" />
                  <span>Visit site</span>
                </a>
                <a
                  className="item-client"
                  href="https://fitbit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../../assets/img/logos/fitbit.png" alt="Fitbit" />
                  <span>Visit site</span>
                </a>
                <a
                  className="item-client"
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../../assets/img/logos/google.png" alt="Google" />
                  <span>Visit site</span>
                </a>
                <a
                  className="item-client"
                  href="https://netflix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../../assets/img/logos/netflix.png" alt="Netflix" />
                  <span>Visit site</span>
                </a>
                <a
                  className="item-client"
                  href="https://slack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../../assets/img/logos/slack.png" alt="Slack" />
                  <span>Visit site</span>
                </a>
                <a
                  className="item-client"
                  href="https://uber.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../../assets/img/logos/uber.png" alt="Uber" />
                  <span>Visit site</span>
                </a>
              </Slider>
              <div className="logos_masks"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSwiper;

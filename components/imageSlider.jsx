import React, { useEffect, useState } from 'react';

import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import { isArr } from '../utils/utils';




const ImageSlider = ({ imagesForImageSlider }) => {





    return (

        <div
            className={`p-0 m-0`}>

            <div>

                {isArr(imagesForImageSlider).length
                    >
                    0 ? <Slide
                        autoplay={true}
                        indicators={true}
                        cssClass='shadow'>

                    {imagesForImageSlider.map((img, index) => {

                        return <div
                            key={index}
                            className="each-slide-effect">

                          
                            <img
                                src='../../assets/img/subheader.png'
                                width='100%' ></img>

                        </div>

                    })}

                </Slide>
                    :
                    null}

            </div>

        </div >

    )

}



export
    default ImageSlider;

import React from 'react'
import styles from '../../styles/styles';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className={`relative min-h-[80vh] 700px:min-h-[90vh] w-full bg-no-repeat ${styles.normalFlex}`} 
    style={{
        backgroundImage:
        "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
    }}
    >
        <div className={`${styles.section} w-[90%] lg:w-[60%]`}>
            <h1 className={`text-[25px] leading-[1.2] lg:text-[60px] text-[#342c2c] fint-[600] capitalize`}>
                 We Have The Best
                  </h1>
                  <p className="pt-5 text-[16px] font-[400] font-[poppins] text-[#000000ba]">
                  a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone.
                  </p>
                  <Link to ="/products" className="inline-block">
                    <div className={`${styles.button} mt-5 bg-[#D2DE32] hover:bg-[#000000]`}
                    >
                     <span className="text-[#fff] font-[poppins] text-[18px]">
                         Shop Now
                    </span>
                 </div>
            </Link>
        </div>
    </div>  
  );
};

export default Hero;
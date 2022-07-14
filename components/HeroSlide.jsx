import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Pagination, Autoplay, EffectFade } from "swiper";

import Image from "next/image";
import drinks from "../public/drinks.jpg";
import ninfa from "../public/ninfa.jpg";
import seats from "../public/seats.jpg";

import styles from "../styles/heroslide.module.css";
import Button from "./Button";

export default function HeroSlide() {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h1>Welcome to Mama Ninfa’s</h1>
        <Button
          href={"https://www.toasttab.com/ninfas-sugar-land-5730-highway-6/v3"}
        >
          Order Now
        </Button>
      </div>
      <div className={styles.backgroundContainer}>
        <div className={styles.background}>
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: false }}
            modules={[Autoplay, EffectFade]}
            className={styles.mySwiper}
          >
            <SwiperSlide>
              <Image src={drinks} alt="Drinks at Ninfa" layout="fill" />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={ninfa}
                alt="Ninfa Logo in the Restaurant"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={seats} alt="Seating at Ninfa" layout="fill" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

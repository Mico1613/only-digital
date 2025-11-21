import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import gsap from 'gsap';
import { Event } from '../../../mock/data';
import * as styles from './EventsSlider.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

interface EventsSliderProps {
  events: Event[];
}

const EventsSlider: React.FC<EventsSliderProps> = ({ events }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  // Animate when events change
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    }
    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }
  }, [events, swiperInstance]);

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <div className={styles.container} ref={containerRef}>
      <button ref={setPrevEl} className={styles.navBtn}>
        {/* Chevron Left */}
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L2 6L7 11" stroke="#3877EE" strokeWidth="2"/>
        </svg>
      </button>

      <Swiper
        modules={[Navigation, FreeMode, Pagination]}
        spaceBetween={80}
        slidesPerView={'auto'}
        pagination={{ clickable: true }}
        navigation={{
            prevEl,
            nextEl,
        }}
        grabCursor={true}
        onSwiper={setSwiperInstance}
        className="events-swiper"
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 25,
          }
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className={styles.eventCard}>
              <h3>{event.year}</h3>
              <p>{event.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button ref={setNextEl} className={styles.navBtn}>
        {/* Chevron Right */}
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2"/>
        </svg>
      </button>
    </div>
  );
};

export default EventsSlider;

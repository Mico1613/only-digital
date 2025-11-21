import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as styles from './SwiperComponent.module.scss';

const SwiperComponent = () => {
  const slides = [
    {
      id: 1,
      title: 'Slide 1',
      description: 'TypeScript обеспечивает типобезопасность',
      color: '#FF6B6B',
    },
    {
      id: 2,
      title: 'Slide 2',
      description: 'Webpack собирает проект эффективно',
      color: '#4ECDC4',
    },
    {
      id: 3,
      title: 'Slide 3',
      description: 'Biome форматирует и проверяет код',
      color: '#45B7D1',
    },
    {
      id: 4,
      title: 'Slide 4',
      description: 'SCSS модули изолируют стили',
      color: '#96CEB4',
    },
    {
      id: 5,
      title: 'Slide 5',
      description: 'Swiper создает великолепные слайдеры',
      color: '#FFEAA7',
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Демонстрация Swiper</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slide} style={{ backgroundColor: slide.color }}>
              <h3 className={styles.slideTitle}>{slide.title}</h3>
              <p className={styles.slideDescription}>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;

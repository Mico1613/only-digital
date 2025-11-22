import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Event } from "../../mock/data";
import * as styles from "./EventsSlider.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";

interface EventsSliderProps {
	events: Event[];
}

const EventsSlider: React.FC<EventsSliderProps> = ({ events }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <>
	useEffect(() => {
		if (containerRef.current) {
			gsap.fromTo(
				containerRef.current,
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 1, ease: "power2.out" },
			);
		}
		if (swiperInstance) {
			swiperInstance.slideTo(0);
		}
	}, [swiperInstance, events]);

	const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
	const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

	return (
		<div className={styles.container} ref={containerRef}>
			<button ref={setPrevEl} className={styles.navBtn} type="button">
				<svg
					width="8"
					height="12"
					viewBox="0 0 8 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
          <title>Pass</title>
					<path d="M7 1L2 6L7 11" stroke="#3877EE" strokeWidth="2" />
				</svg>
			</button>

			<Swiper
				modules={[Navigation, FreeMode, Pagination]}
				spaceBetween={80}
				slidesPerView={"auto"}
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
					},
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

			<button ref={setNextEl} className={styles.navBtn} type="button">
				<svg
					width="8"
					height="12"
					viewBox="0 0 8 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
          <title>Pass</title>
					<path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
				</svg>
			</button>
		</div>
	);
};

export default EventsSlider;

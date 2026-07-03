import { useCallback, useEffect, useRef, useState, type WheelEvent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { slides } from '../data/slides';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const lastWheelAtRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(true);

  const updateSlideParallax = useCallback((swiper: SwiperType) => {
    const innerOffset = swiper.width * 0.5;

    swiper.slides.forEach((slideEl) => {
      const slide = slideEl as HTMLElement & { progress?: number };
      const media = slide.querySelector<HTMLElement>('.hero__slide-media');

      if (!media) return;

      const slideProgress = slide.progress ?? 0;
      const innerTranslate = slideProgress * innerOffset;
      media.style.transform = `translate3d(${innerTranslate}px, 0, 0) scale(1.08)`;
    });
  }, []);

  const clearSlideTransitions = useCallback((swiper: SwiperType) => {
    swiper.slides.forEach((slideEl) => {
      const slide = slideEl as HTMLElement;
      const media = slide.querySelector<HTMLElement>('.hero__slide-media');

      slide.style.transition = '';
      if (media) {
        media.style.transition = '';
      }
    });
  }, []);

  const setSlideTransition = useCallback((swiper: SwiperType, duration: number) => {
    swiper.slides.forEach((slideEl) => {
      const slide = slideEl as HTMLElement;
      const media = slide.querySelector<HTMLElement>('.hero__slide-media');

      slide.style.transition = `${duration}ms`;
      if (media) {
        media.style.transition = `${duration}ms`;
      }
    });
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setAnimating(false);
    setActiveIndex(swiper.realIndex);
    requestAnimationFrame(() => setAnimating(true));
  }, []);

  const handleWheel = useCallback((event: WheelEvent<HTMLElement>) => {
    const swiper = swiperRef.current;
    if (!swiper || swiper.animating) {
      return;
    }

    const dominantDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX)
      ? event.deltaY
      : event.deltaX;

    if (Math.abs(dominantDelta) < 12) {
      return;
    }

    const now = Date.now();
    if (now - lastWheelAtRef.current < 850) {
      event.preventDefault();
      return;
    }

    lastWheelAtRef.current = now;
    event.preventDefault();

    if (dominantDelta > 0) {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') swiperRef.current?.slidePrev();
      if (e.key === 'ArrowRight') swiperRef.current?.slideNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="hero" onWheel={handleWheel}>
      <Swiper
        modules={[Navigation, Pagination]}
        speed={1000}
        loop
        watchSlidesProgress
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          requestAnimationFrame(() => updateSlideParallax(swiper));
        }}
        onSlideChange={handleSlideChange}
        onProgress={updateSlideParallax}
        onTouchStart={clearSlideTransitions}
        onSetTransition={setSlideTransition}
        className="hero__swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero__slide">
              <div
                className="hero__slide-media"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="hero__overlay" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero__content">
        <div className={`hero__text ${animating ? 'hero__text--visible' : ''}`} key={activeIndex}>
          <h1 className="hero__title">
            <span>{slides[activeIndex].title}</span>
            {slides[activeIndex].titleLine2 && (
              <span>{slides[activeIndex].titleLine2}</span>
            )}
          </h1>
          <p className="hero__description">{slides[activeIndex].description}</p>
          <a
            href={slides[activeIndex].ctaLink}
            className="hero__cta"
          >
            <span className="hero__cta-icon" />
            <span className="hero__cta-text">{slides[activeIndex].cta}</span>
          </a>
        </div>
      </div>

      <div className="hero__nav">
        <button
          type="button"
          className="hero__nav-btn hero__nav-btn--prev"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          className="hero__nav-btn hero__nav-btn--next"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      <div className="hero__pagination">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`hero__dot ${index === activeIndex ? 'hero__dot--active' : ''}`}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

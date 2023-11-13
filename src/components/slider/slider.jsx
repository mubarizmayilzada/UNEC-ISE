import swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = ({ children, options, sliderStyle, className, ...props }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <>
      <Swiper
        {...props}
        pagination={pagination}
        className="mySwiper bg-'##EAE3E7'"
        modules={[Navigation, Autoplay, Pagination]}
        {...options}
      >
        {children?.map((child) => (
          <SwiperSlide
            className={className}
            style={sliderStyle}
            key={Math.random()}
          >
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;

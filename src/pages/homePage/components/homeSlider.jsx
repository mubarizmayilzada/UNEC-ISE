import React from "react";
import SlickSlider from "../../../components/slider/slider";
import SliderImg from "../../../assets/img/crt.png";
import Staff from "../../../assets/img/crt.png";
var settings = {
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

export default function HomeSlider() {
  return (
    <section className="overflow-hidden  w-[100%]">
      <SlickSlider settings={settings}>
        <div className="w-full h-[630px]">
          <img className="object-cover h-full w-full" src={SliderImg} alt="" />
        </div>
        <div className="w-full h-[630px]">
          <img className="object-cover h-full" src={SliderImg} alt="" />
        </div>
        {/* <div>
          <img className="w-[100%] h-[100%]" src={Staff} alt="" />
        </div> */}
        <div>Heyy</div>
        <div>Heyy</div>
      </SlickSlider>
    </section>
  );
}

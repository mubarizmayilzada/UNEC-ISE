import React, { useEffect, useState } from "react";
import SlickSlider from "../../../components/slider/slider";
import SliderImg from "../../../assets/img/crt.png";
import Staff from "../../../assets/img/crt.png";
import axios from "axios";

const settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4500,
  slidesPerView: 4,
  spaceBetween: 20,
};

export default function AboutSlider() {
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    axios.get("http://test-api.com/api/v1/about")
      .then((response) => {
        const { data } = response;
        if (data && data.file) {
          setSliderImages(data.file);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <section className="overflow-hidden mt-[82px] w-full px-[30px]">
      <SlickSlider hasPagination={false} options={settings}>
        {sliderImages.map((imageUrl, index) => (
          <div key={index} className="h-[341px]">
            <img
              className="w-full h-full object-cover"
              src={imageUrl}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </SlickSlider>
    </section>
  );
}

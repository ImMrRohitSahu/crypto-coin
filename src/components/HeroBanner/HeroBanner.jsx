import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroBanner = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
        <Slider {...settings} className="carousal">
        <div className="image-div">
            <img src="src/assets/bannerOne.jpg" alt="Banner Image" />
          </div>
          <div className="image-div">
            <img src="src/assets/bannerTwo.jpg" alt="Banner Image" />
          </div>
          <div className="image-div">
            <img src="src/assets/bannerThree.jpg" alt="Banner Image" />
          </div>
          <div className="image-div">
            <img src="src/assets/bannerFour.jpg" alt="Banner Image" />
          </div>
          <div className="image-div">
            <img src="src/assets/bannerFive.jpg" alt="Banner Image" />
          </div>
        </Slider>
  );
};

export default HeroBanner;

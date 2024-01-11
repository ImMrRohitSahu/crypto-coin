import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerOne from "/src/assets/bannerOne.jpg"
import bannerTwo from "/src/assets/bannerTwo.jpg"
import bannerThree from "/src/assets/bannerThree.jpg"
import bannerFour from "/src/assets/bannerFour.jpg"
import bannerFive from "/src/assets/bannerFive.jpg"

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
            <img src={bannerOne} alt="Banner Image" />
          </div>
          <div className="image-div">
            <img src={bannerTwo} alt="Banner Image" />
          </div>
          <div className="image-div">
            <img src={bannerThree} alt="Banner Image" />
          </div>
          <div className="image-div">
            <img src={bannerFour} alt="Banner Image" />
          </div>
          <div className="image-div">
            <img src={bannerFive} alt="Banner Image" />
          </div>
        </Slider>
  );
};

export default HeroBanner;

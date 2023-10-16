import Carousel from "../../mutual/auxiliary/carousel";

import s from "./review-carousel.module.scss";

//todo carousel prev and next buttons do not work, sliding does not work either

const CarouselReviews = () => {
  return (
    <div className={`${s.review_carousel} `}>
      <div className={`${s.header} `}>
        <p>Відгуки</p>
      </div>
      <div className={`${s.body} content`}>
        <Carousel>
          <div className="carousel-inner container my-5 w-100">
            <div className="carousel-item active">
              <div className="  row row-cols-md-3 g-3 "></div>
            </div>
            <div className="carousel-item ">
              <div className="  row row-cols-md-3 g-3"></div>
            </div>
            <div className="carousel-item">
              <div className="  row row-cols-md-3 g-3"></div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselReviews;

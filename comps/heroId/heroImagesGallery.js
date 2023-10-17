import s from "./heroImagesGallery.module.scss";

const HeroImagesGallery = ({ hero }) => {
  return (
    <>
      <div>
        <h2>Cards of these hero</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {hero.images &&
            hero.images.map((imageUrl, index) => (
              <div key={index} className="col">
                <div className={`${s.image_container}`}>
                  <img
                    src={imageUrl}
                    alt="hero image"
                    className={`${s.image}`}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default HeroImagesGallery;

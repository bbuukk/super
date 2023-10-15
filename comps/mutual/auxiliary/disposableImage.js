//todo implement compoonent with next/image
// import Image from "next/image";
import s from "./disposableImage.module.scss";

const DisposableImage = ({ key, imageUrl, height, width, dispose }) => {
  return (
    <div
      style={{ height: `${height}em`, width: `${width}em` }}
      className={`${s.disposable_image}`}
    >
      <button onClick={dispose} className={`${s.dispose_btn}`}>
        <i className="bi bi-x"></i>
      </button>
      <div className={`${s.image_container}`}>
        <img src={imageUrl} alt="hero image" />
      </div>
    </div>
  );
};

export default DisposableImage;

//todo implement compoonent with next/image
// import Image from "next/image";
import s from "./disposableImage.module.scss";

const DisposableImage = ({ imageUrl, dispose }) => {
  return (
    <div className={`${s.disposable_image}`}>
      <button onClick={dispose} className={`${s.dispose_btn}`}>
        <i className="bi bi-x"></i>
      </button>
      <div className={`${s.image_container}`}>
        {/* <Image src={imageUrl} alt="hero image" width={100} height={100} /> */}
        <img src={imageUrl} alt="hero image" />
      </div>
    </div>
  );
};

export default DisposableImage;

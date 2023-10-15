import Image from "next/image";
import s from "./disposableImage.module.scss";

const DisposableImage = ({ imageUrl, dispose }) => {
  return (
    <div className={`${s.disposable_image}`}>
      <button onCLick={dispose} className={`${s.dispose_btn}`}>
        <i class="bi bi-x"></i>
      </button>
      <div className={`${s.image_container}`}>
        <Image src={imageUrl} alt="hero image" />
      </div>
    </div>
  );
};

export default DisposableImage;

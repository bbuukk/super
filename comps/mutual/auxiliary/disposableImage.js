import s from "./disposableImage.module.scss";

const DisposableImage = () => {
  return (
    <div className={`${s.disposable_image}`}>
      <button onCLick={() => {}} className={`${s.dispose_btn}`}>
        <i class="bi bi-x"></i>
      </button>
      <div className={`${s.image_container}`}>
        <img src="/general/favicon.ico" alt="logo" />
      </div>
    </div>
  );
};

export default DisposableImage;

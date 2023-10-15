//todo implement compoonent with next/image
// import Image from "next/image";
import s from "./disposable.module.scss";

const Disposable = ({ height, width, dispose, children }) => {
  return (
    <div
      style={{ height: `${height}em`, width: `${width}em` }}
      className={`${s.disposable_image}`}
    >
      <button onClick={dispose} className={`${s.dispose_btn}`}>
        <i className="bi bi-x"></i>
      </button>

      {children}
    </div>
  );
};

export default Disposable;

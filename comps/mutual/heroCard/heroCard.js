import { useRouter } from "next/router";
import s from "./heroCard.module.scss";

const HeroCard = ({ id, hero: { _id, nickname, images } }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/hero/${id}`);
  };

  return (
    <>
      <div className={`${s.milk_border}`}>
        <div
          role="button"
          tabIndex="0"
          onClick={() => handleClick()}
          className={`${s.hero_card}`}
        >
          <div className={`${s.card_category}`}>
            <p>SUPER HEROES</p>
          </div>
          <img
            className={`${s.brand_logo}`}
            src="/general/brand_logo.svg"
            alt="brand_logo"
          ></img>
          <div className={`${s.lines_bottom}`}>
            <div className={`${s.line}`}></div>
            <div className={`${s.line}`}></div>
            <div className={`${s.line}`}></div>
            <div className={`${s.line}`}></div>
            <div className={`${s.line}`}></div>
          </div>
          <div className={`${s.lines_top}`}>
            <div className={`${s.line}`}></div>
            <div className={`${s.line}`}></div>
            <div className={`${s.line}`}></div>
            <div className={`${s.line}`}></div>
            <div className={`${s.line}`}></div>
          </div>

          <img
            src={images && images[0]}
            alt="hero image"
            className={`${s.image}`}
          />

          <p className={`${s.nickname}`}>{nickname}</p>
        </div>
      </div>
    </>
  );
};
export default HeroCard;

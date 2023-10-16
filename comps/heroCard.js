import { useRouter } from "next/router";
import s from "./heroCard.module.scss";
import Disposable from "./mutual/auxiliary/disposable";
import { useHeroContext } from "@/back/hooks/useHeroContext";
import EditHeroModal from "./editHeroModal";

const HeroCard = ({ id, hero: { _id, nickname, images } }) => {
  const router = useRouter();
  const { dispatch } = useHeroContext();

  const handleClick = () => {
    router.push(`/hero/${id}`);
  };

  const dispose = () => {
    const deleteHero = async () => {
      const response = await fetch(`http://localhost:4000/heroes/${_id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_HERO", payload: data });
      }
    };
    deleteHero();
  };

  return (
    <>
      <Disposable dispose={() => dispose()} width={10} height={10}>
        {/* <div className={`${s.black_border}`}> */}
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
      </Disposable>
    </>
  );
};
export default HeroCard;

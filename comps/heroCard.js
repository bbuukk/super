import { useRouter } from "next/router";
import s from "./heroCard.module.scss";
import Disposable from "./mutual/auxiliary/disposable";
import { useHeroContext } from "@/back/hooks/useHeroContext";

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
        <div
          role="button"
          tabIndex="0"
          onClick={() => handleClick()}
          className={`${s.hero_card}`}
        >
          <img src={images[0]} alt={nickname} className={`${s.image}`} />
          <p className={`${s.nickname}`}>{nickname}</p>
        </div>
      </Disposable>
    </>
  );
};
export default HeroCard;

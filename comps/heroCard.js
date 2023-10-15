import { useRouter } from "next/router";
import s from "./heroCard.module.scss";

const HeroCard = ({ id, hero: { nickname, images } }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/hero/${id}`);
  };

  return (
    <div
      role="button"
      tabIndex="0"
      onClick={() => handleClick()}
      className={`${s.hero_card}`}
    >
      <img src={images[0]} alt={nickname} className={`${s.image}`} />
      <p className={`${s.nickname}`}>{nickname}</p>
    </div>
  );
};

export default HeroCard;

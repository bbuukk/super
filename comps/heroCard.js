import { useRouter } from "next/router";
import s from "./heroCard.module.scss";

const HeroCard = ({ nickname, imageUrl }) => {
  const router = useRouter();

  const handleClick = () => {
    const nicknamePath = nickname.replace(/\s/g, "");
    router.push(`/${nicknamePath}`);
  };

  return (
    <div
      role="button"
      tabIndex="0"
      onClick={() => handleClick()}
      className={`${s.hero_card}`}
    >
      <img src={imageUrl} alt={nickname} className={`${s.image}`} />
      <p className={`${s.nickname}`}>{nickname}</p>
    </div>
  );
};

export default HeroCard;

import s from "./backHeroCard.module.scss";

const BackHeroCard = ({ hero, id }) => {
  return (
    <>
      <div className={`${s.back_hero_card}`}>
        <div className={`${s.header}`}>
          <p className={`${s.nickname}`}>{hero.nickname}</p>
          <p className={`${s.index}`}>{`#${id}`}</p>
        </div>
        <div className={`${s.body}`}>
          <div className={`${s.real_name}`}>{hero.real_name}</div>
          <div className={`${s.origin_description}`}>
            {hero.origin_description}
          </div>
          <div className={`${s.superpowers}`}>{hero.superpowers.join(",")}</div>
          <div className={`${s.catch_phrase}`}>{hero.catch_phrase}</div>
        </div>
      </div>
    </>
  );
};

export default BackHeroCard;

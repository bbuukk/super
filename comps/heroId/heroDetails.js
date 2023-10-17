import { useHeroContext } from "@/back/hooks/useHeroContext";
import s from "./heroDetails.module.scss";
import HeroCard from "../mutual/heroCard/heroCard";
import BackHeroCard from "./backHeroCard";

const HeroDetails = ({ hero, id }) => {
  const { heroes } = useHeroContext();
  return (
    <>
      {heroes && (
        <div className="container">
          <div className=" d-flex justify-content-center gap-5">
            <div className={`${s.edit_area}`}>
              <HeroCard id={id} hero={hero} />
              <div className={`${s.btn_area}`}>
                <button
                  className={`${s.delete_hero_btn} btn`}
                  onClick={() => {}}
                >
                  <img src="/general/eraser.png"></img>
                </button>
                <button className={`${s.edit_hero_btn} btn`} onClick={() => {}}>
                  <img src="/general/pencil.svg"></img>
                </button>
              </div>
            </div>

            <div className="mt-5">
              <BackHeroCard hero={hero} id={id} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroDetails;

import { useHeroContext } from "@/back/hooks/useHeroContext";
import s from "./heroDetails.module.scss";
import HeroCard from "../mutual/heroCard/heroCard";
import BackHeroCard from "./backHeroCard";

const HeroDetails = ({ hero, id, editHero, deleteHero }) => {
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
                  onClick={() => deleteHero()}
                >
                  <img src="/general/eraser.png"></img>
                  <div className={`${s.text_container}`}>
                    <span className={`${s.text}`}>Delete</span>{" "}
                  </div>
                </button>
                <button
                  className={`${s.edit_hero_btn} btn`}
                  onClick={() => {
                    editHero();
                  }}
                >
                  <img src="/general/pencil.svg"></img>
                  <div className={`${s.text_container}`}>
                    <span className={`${s.text}`}>Edit</span>{" "}
                  </div>
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

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useHeroContext } from "@/back/hooks/useHeroContext";
import EditHeroModal from "@/comps/editHeroModal";

const HeroDetails = ({ hero, editMode, toggleEditMode }) => (
  <div>
    <div className="d-flex align-center justify-content-between">
      <h1>{hero.nickname}</h1>
      <button className="btn b" onClick={toggleEditMode}>
        <i className="bi bi-pencil-square"></i>
        Edit
      </button>
    </div>
    <p>Real Name: {hero.real_name}</p>
    <p>Origin Description: {hero.origin_description}</p>
    <ul>
      {hero.superpowers &&
        hero.superpowers.map((power, index) => <li key={index}>{power}</li>)}
    </ul>
    <p>Catch Phrase: {hero.catch_phrase}</p>
    <div>
      {hero.images &&
        hero.images.map((image, index) => (
          <img key={index} src={image} alt={`${hero.nickname} image`} />
        ))}
    </div>
  </div>
);

const Hero = () => {
  const router = useRouter();
  const { heroId } = router.query;
  const { heroes } = useHeroContext();

  const [hero, setHero] = useState({});

  useEffect(() => {
    if (heroes) {
      setHero(heroes[heroId]);
    }
  }, [heroes]);

  const heroIdNumber = Number(heroId);

  const [editMode, setEditMode] = useState(false);

  return (
    <>
      {heroes &&
      Number.isInteger(heroIdNumber) &&
      heroIdNumber >= 0 &&
      heroIdNumber < heroes.length ? (
        <>
          <HeroDetails
            hero={hero}
            editMode={editMode}
            toggleEditMode={() => setEditMode(!editMode)}
          />
          <EditHeroModal
            isOpen={editMode}
            toggle={() => {
              setEditMode(!editMode);
            }}
            hero={hero}
          />
        </>
      ) : (
        <p>"Invalid hero ID"</p>
      )}
    </>
  );
};

export default Hero;

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useHeroContext } from "@/back/hooks/useHeroContext";
import EditHeroModal from "@/comps/editHeroModal";
import HeroDetails from "@/comps/heroDetails";

const Hero = () => {
  const router = useRouter();
  const { heroId } = router.query;
  const { dispatch } = useHeroContext();

  const { heroes } = useHeroContext();
  const [editMode, setEditMode] = useState(false);
  const heroIdNumber = Number(heroId);

  const deleteHero = () => {
    const fetchDelete = async () => {
      const response = await fetch(
        `http://localhost:4000/heroes/${heroes[heroId]._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_HERO", payload: data });
        router.push("/");
      }
    };
    fetchDelete();
  };

  return (
    <>
      {heroes &&
        Number.isInteger(heroIdNumber) &&
        heroIdNumber >= 0 &&
        heroIdNumber < heroes.length && (
          <>
            <HeroDetails
              hero={heroes[heroId]}
              id={heroId}
              edit={() => {
                setEditMode(!editMode);
              }}
              delete={deleteHero}
            />
            <EditHeroModal
              isOpen={editMode}
              toggle={() => {
                setEditMode(!editMode);
              }}
              hero={heroes[heroId]}
            />
          </>
        )}
    </>
  );
};

export default Hero;

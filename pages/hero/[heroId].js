import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useHeroContext } from "@/back/hooks/useHeroContext";
import HeroesGallery from "@/comps/mutual/heroesGallery/heroesGallery";
import EditHeroModal from "@/comps/mutual/editHeroModal/editHeroModal";
import HeroDetails from "@/comps/heroId/heroDetails";
import HeroImagesGallery from "@/comps/heroId/heroImagesGallery";

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
              editHero={() => {
                setEditMode(!editMode);
              }}
              deleteHero={deleteHero}
            />

            <div className="mt-5">
              <h2 className="ms-5 mb-4 text-irish fs-1">
                All images of this hero
              </h2>
              <div className="container">
                <HeroImagesGallery hero={heroes[heroId]}></HeroImagesGallery>
              </div>
            </div>
            <div className=" mt-5">
              <h2 className="ms-5 mb-4 text-irish fs-1">Other your cards</h2>
              <div className="container">
                <HeroesGallery></HeroesGallery>
              </div>
            </div>
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

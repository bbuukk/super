import { useEffect, useState } from "react";
import HeroCard from "./heroCard";
import s from "./heroesGallery.module.scss";
import { useHeroContext } from "@/back/hooks/useHeroContext";
import { v4 as uuidv4 } from "uuid";
import EditHeroModal from "./editHeroModal";

const HeroGallery = () => {
  const { heroes } = useHeroContext();
  const [editMode, setEditMode] = useState(false);

  // const handleAddhero = () => {
  //   const addHero = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:4000/heroes/${hero._id}`,
  //         {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify(newHero),
  //         }
  //       );

  //       if (!response.ok) throw new Error("Network response was not ok");

  //       const data = await response.json();
  //       console.log(data);
  //       dispatch({ type: "CREATE_HERO", payload: data });
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };
  // };

  return (
    <div
      className={`${s.heroes_gallery_container} row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gx-5 gy-4`}
    >
      {heroes &&
        heroes.map((hero, index) => {
          hero.clientId = hero.clientId || uuidv4();
          return (
            <div key={hero.clientId} className="col">
              <HeroCard id={index} hero={hero} />
            </div>
          );
        })}

      <div className="">
        <button
          className={`${s.add_new_hero_card} col`}
          onClick={() => {
            setEditMode(!editMode);
          }}
        >
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
      <EditHeroModal
        isOpen={editMode}
        toggle={() => {
          setEditMode(!editMode);
        }}
        hero={{}}
      />
    </div>
  );
};

export default HeroGallery;

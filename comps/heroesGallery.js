import { useEffect, useState } from "react";
import HeroCard from "./heroCard";
import s from "./heroesGallery.module.scss";
import { useHeroContext } from "@/back/hooks/useHeroContext";
import { v4 as uuidv4 } from "uuid";
import EditHeroModal from "./editHeroModal";
import HeroCarousel from "./heroCarousel";

const HeroGallery = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={`${s.heroes_gallery_container}`}>
      <HeroCarousel />

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

import AddNewHeroButton from "@/comps/home/addNewHeroBtn";
import HeroCarousel from "@/comps/home/heroCarousel";
import EditHeroModal from "@/comps/mutual/modals/editHeroModal";
import { useState } from "react";

export default function Home() {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      <main>
        <HeroCarousel />
      </main>
      <AddNewHeroButton
        toggle={() => {
          setEditMode(!editMode);
        }}
      />
      <EditHeroModal
        isOpen={editMode}
        toggle={() => {
          console.log("toggled");
          setEditMode(!editMode);
        }}
        hero={{}}
      />
    </>
  );
}

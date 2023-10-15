import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import s from "./editHeroModal.module.scss";
import InputField from "./mutual/auxiliary/inputField";
import { useHeroContext } from "@/back/hooks/useHeroContext";

const EditHeroModal = ({ isOpen, toggle, hero }) => {
  const { dispatch } = useHeroContext();

  const [nickname, setNickname] = useState("");
  const [realName, setRealName] = useState("");
  const [originDescription, setOriginDescription] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");

  useEffect(() => {
    setNickname(hero.nickname);
    setRealName(hero.real_name);
    setOriginDescription(hero.origin_description);
    setSuperpowers(hero.superpowers);
    setCatchPhrase(hero.catch_phrase);
  }, [hero]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedHero = {
      ...hero,
      nickname,
      real_name: realName,
      origin_description: originDescription,
      superpowers,
      catch_phrase: catchPhrase,
    };

    if (updatedHero != hero) {
      try {
        const response = await fetch(
          `http://localhost:4000/heroes/${hero._id}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedHero),
          }
        );

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        dispatch({ type: "UPDATE_HERO", payload: data });
        console.log("modal");
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log("No changes were made");
    }
    console.log("toggle");
    toggle();
  };

  return (
    <>
      <Modal show={isOpen} onHide={toggle} centered size="xl">
        <Modal.Body>
          <p>Edit Superhero</p>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className={`${s.input_fields}`}>
              <InputField
                id="nickname"
                value={nickname}
                setValue={setNickname}
              />
              <InputField
                id="realName"
                value={realName}
                setValue={setRealName}
              />
              <InputField
                id="originDescription"
                value={originDescription}
                setValue={setOriginDescription}
              />
              <InputField
                id="superpowers"
                value={superpowers}
                setValue={(e) => setSuperpowers(e.target.value.split(","))}
              />
              <InputField
                id="catchPhrase"
                value={catchPhrase}
                setValue={setCatchPhrase}
              />
            </div>

            <div className={`${s.button_area}`}>
              <button onClick={() => toggle()} className="btn">
                Cancel
              </button>
              <button type="submit" className="btn">
                Save Changes
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditHeroModal;

import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import s from "./editHeroModal.module.scss";
import InputField from "./mutual/auxiliary/inputField";
import { useHeroContext } from "@/back/hooks/useHeroContext";
import DisposableImage from "./mutual/auxiliary/disposableImage";

//! there is a bug, when you change state of nickname, but doesn't submit it, and then open modal again, the nickname will be the same as in the state, not as in the props

const EditHeroModal = ({ isOpen, toggle, hero }) => {
  const { dispatch } = useHeroContext();

  const [nickname, setNickname] = useState("");
  const [realName, setRealName] = useState("");
  const [originDescription, setOriginDescription] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState("");

  useEffect(() => {
    setNickname(hero.nickname);
    setRealName(hero.real_name);
    setOriginDescription(hero.origin_description);
    setSuperpowers(hero.superpowers);
    setCatchPhrase(hero.catch_phrase);
    setImages(hero.images);
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
      images,
    };

    try {
      const response = await fetch(`http://localhost:4000/heroes/${hero._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedHero),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      console.log(data);
      dispatch({ type: "UPDATE_HERO", payload: data });
    } catch (error) {
      console.error("Error:", error);
    }

    toggle();
  };

  const dispose = (key) => {
    const updatedImages = images.filter((image, index) => index != key);
    setImages(updatedImages);
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

            <div className={`${s.images}`}>
              <div className={`${s.add_new_image_section}`}>
                <InputField
                  id="newImage"
                  value={newImage}
                  setValue={setNewImage}
                />
                <button
                  type="button"
                  onClick={() => {
                    setImages([...images, newImage]);
                    setNewImage("");
                  }}
                  className={`${s.btn} btn`}
                >
                  <i className="bi bi-plus-lg"></i>
                </button>
              </div>

              <div
                className={` row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gx-0`}
              >
                {images.map((image, index) => (
                  <div key={index} className={`${s.image_container} col `}>
                    <DisposableImage
                      imageUrl={image}
                      dispose={() => dispose(index)}
                      width={10}
                      height={10}
                    />
                  </div>
                ))}
              </div>
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

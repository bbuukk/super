import { useState } from "react";
import { Modal } from "react-bootstrap";
import s from "./editHeroModal.module.scss";

const EditHeroModal = ({ isOpen, toggle, hero }) => {
  const [nickname, setNickname] = useState(hero.nickname);
  const [realName, setRealName] = useState(hero.real_name);
  const [originDescription, setOriginDescription] = useState(
    hero.origin_description
  );
  const [superpowers, setSuperpowers] = useState(hero.superpowers);
  const [catchPhrase, setCatchPhrase] = useState(hero.catch_phrase);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle the submission of the form
    // toggle();
  };

  return (
    <>
      <Modal show={isOpen} onHide={toggle} centered size="xl">
        <Modal.Body>
          <p>Edit Superhero</p>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className={`${s.input_fields}`}>
              <div>
                <label htmlFor="nickname">Nickname</label>
                <input
                  id="nickname"
                  className={`form-control fs-5 `}
                  value={nickname}
                  onChange={(e) => {
                    setNickname(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="realName">Real Name</label>
                <input
                  id="realName"
                  className={`form-control fs-5 `}
                  value={realName}
                  onChange={(e) => {
                    setRealName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="originDescription">Origin Description</label>
                <input
                  id="originDescription"
                  className={`form-control fs-5 `}
                  value={originDescription}
                  onChange={(e) => {
                    setOriginDescription(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="superpowers">Superpowers</label>
                <input
                  id="superpowers"
                  className={`form-control fs-5 `}
                  value={superpowers}
                  onChange={(e) => {
                    setSuperpowers(e.target.value.split(","));
                  }}
                />
              </div>
              <div>
                <label htmlFor="catchPhrase">Catch Phrase</label>
                <input
                  id="catchPhrase"
                  className={`form-control fs-5 `}
                  value={catchPhrase}
                  onChange={(e) => {
                    setCatchPhrase(e.target.value);
                  }}
                />
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

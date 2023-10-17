import { Modal } from "react-bootstrap";
import s from "./deleteHeroModal.module.scss";

const DeleteHeroModal = ({ isOpen, toggle, deleteHero }) => {
  return (
    <>
      <Modal show={isOpen} onHide={toggle} centered size="lg">
        <Modal.Body>
          <div className={`${s.delete_hero_modal_body}`}>
            <p>Are you sure you want to delete the hero?</p>
            <div className={`${s.button_area}`}>
              <button onClick={() => toggle()} className="btn">
                Cancel
              </button>
              <button className="btn btn-outline-danger" onClick={deleteHero}>
                Delete
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteHeroModal;

import s from "./addNewHeroBtn.module.scss";

const AddNewHeroButton = ({ toggle }) => {
  return (
    <div className={`${s.add_new_hero_btn_container}`}>
      <button className={`${s.add_new_hero_btn} btn`} onClick={toggle}>
        <i className="bi bi-plus-lg"></i>
      </button>
    </div>
  );
};

export default AddNewHeroButton;

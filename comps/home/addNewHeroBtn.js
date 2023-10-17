import s from "./addNewHeroBtn.module.scss";

const AddNewHeroButton = ({ toggle }) => {
  return (
    <button className={`${s.add_new_hero_btn} btn`} onClick={toggle}>
      <i className="bi bi-plus-lg"></i>
    </button>
  );
};

export default AddNewHeroButton;

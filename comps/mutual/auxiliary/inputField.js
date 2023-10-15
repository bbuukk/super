const InputField = ({ id, value, setValue }) => {
  return (
    <div>
      <label htmlFor={id}>{id}</label>
      <input
        id={id}
        className="form-control fs-5"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default InputField;

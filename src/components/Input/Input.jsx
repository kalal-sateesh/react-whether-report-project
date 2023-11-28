import PropTypes from "prop-types";
const Input = ({
  className = "",
  onChangeHandler,
  value = "",
  placeholder = "",
  enterKeyHandler,
}) => {
  return (
    <input
      type="text"
      className={className}
      onChange={(e) => {
        onChangeHandler(e.target.value);
      }}
      value={value}
      placeholder={placeholder}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          enterKeyHandler();
        }
      }}
    ></input>
  );
};
Input.propTypes = {
  className: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  enterKeyHandler: PropTypes.func.isRequired,
};
export default Input;

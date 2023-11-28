import PropTypes from "prop-types";
const Button = ({
  className = "",
  children = "",
  disabled = false,
  onClickHandler,
}) => {
  return (
    <button className={className} disabled={disabled} onClick={onClickHandler}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
};
export default Button;

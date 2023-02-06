const ButtonComponent = (props) => (
  <button
    type="button"
    style={{
      color: props.textColor,
      padding: props.padding,
      backgroundColor: props.background,
      margin: props.margin,
      border: props.border
    }}
  >
    {props.text}
  </button>
);

export default ButtonComponent;

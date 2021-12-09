const Button = ({ children, onClick }) => {
  return (
    <button className="" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

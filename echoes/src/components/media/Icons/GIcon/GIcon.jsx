const GIcon = ({ icon, className, style, size, color, margin }) => {
  return (
    <span
      className="material-symbols-outlined"
      style={{
        ...style,
        color,
      }}
    >
      {icon}
    </span>
  );
};

export default GIcon;

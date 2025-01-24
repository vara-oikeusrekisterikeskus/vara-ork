export default function FooterComponent({ logo, name, colors }) {
  return (
    <footer
      style={{
        "--primary-color": colors.primary,
        "--secondary-color": colors.secondary,
      }}
      className="footer">
      {logo && <img className="logo" src={logo} alt="Logo" />}
      <h2>{name}</h2>
    </footer>
  );
}

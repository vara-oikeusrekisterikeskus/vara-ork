export default function FooterComponent({ logo, logo_height, name, colors }) {
  return (
    <footer
      style={{
        "--primary-color": colors.primary,
        "--secondary-color": colors.secondary,
      }}
      className="footer">
      <div className="footer-wrapper">
        <div className="footer-logo">
          <img src={logo} height={logo_height} alt="Footer logo" />
        </div>
        <h3 className="footer-header">{name}</h3>
      </div>
    </footer>
  );
}

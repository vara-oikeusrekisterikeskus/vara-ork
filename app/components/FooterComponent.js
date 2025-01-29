/**
 * Component for rendering the footer.
 *
 * @param logoFooter
 *   The footer logo.
 * @param logoFooterHeight
 *   The footer logos height.
 * @param name
 *   The name to display in the footer.
 *
 * @return {JSX.Element}
 */
export default function FooterComponent({ logoFooter, logoFooterHeight, name }) {
  return (
    <footer className="footer">
      <div className="footer--wrapper container">
        <div className="footer--logo">
          <img src={logoFooter} height={logoFooterHeight} alt="Footer logo" />
        </div>
        <h3 className="footer--header">{name}</h3>
      </div>
    </footer>
  );
}

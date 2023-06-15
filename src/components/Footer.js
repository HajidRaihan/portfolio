import { Container, Row } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaTwitch } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="socmed-icon">
          <FaInstagram className="icon" />
          <FaFacebook className="icon" />
          <FaLinkedin className="icon" />
          <FaTwitch className="icon" />
          <FaTwitter className="icon" />
        </div>
        <div>
          <Row className="text-footer">
            <p>about</p>
            <p>need help</p>
            <p>contact us</p>
            <p>privacy</p>
            <p>term of use</p>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;

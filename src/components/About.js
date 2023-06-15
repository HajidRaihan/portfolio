import { Col, Container, Row, Image, Badge } from "react-bootstrap";
import profileImage from "../asset/img/profile/profile.png";

const About = () => {
  return (
    <div className="about">
      <Container>
        <div className="text-white pt-3 pb-3 text-center">
          <h1>About Me</h1>
        </div>
        <Row>
          <Col md={6}>
            <Image src={profileImage} alt="gambar" className="img2profile" />
          </Col>
          <Col md={6} className="textAbout text-white d-flex">
            <div>
              <p>
                Hello I'm Hajid Raihan, a student majoring in Information Systems Faculty of
                Mathematics and Natural Science at Hasanuddin University{" "}
              </p>
              <h5>
                Interest to <Badge bg="warning">Web Development</Badge>{" "}
                <Badge bg="primary">Mobile Development</Badge>{" "}
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

import { Container, Col, Row, Image, Button } from "react-bootstrap";
import porfileImage from "../asset/img/profile.jpg";
const Intro = () => {
  return (
    <div className="intro">
      <Container className="">
        <Row className="pt-2">
          <Col lg={4} className="p-2">
            <Image src={porfileImage} alt="profile" className="imgProfile" />
          </Col>
          <Col lg={8} className="textProfile text-white p-2 ">
            <div>
              <h1 className="title">Hello,</h1>
              <h1 className="title">I,m Hajid Raihan</h1>
              <h5 className="subtitle">a Student at Hasanuddin University</h5>
              <Button variant="warning" className="btnProfile text-white">
                More Information
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Intro;

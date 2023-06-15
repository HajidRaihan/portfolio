import { Col, Container, Row, Image } from "react-bootstrap";
import antmanImage from "../asset/img/project/antman.jpg";
import avengerImage from "../asset/img/project/avenger.jpg";
import batmanImage from "../asset/img/project/batman.jpg";
import robinhoodImage from "../asset/img/project/robinhood.jpg";
import spidermanImage from "../asset/img/project/spiderman-cover.jpg";
import supermanImage from "../asset/img/project/superman.jpg";

const Project = () => {
  return (
    <div>
      <div>
        <Container className="text-white pt-3 pb-3 text-center">
          <h1 className="text">My Project</h1>
        </Container>
      </div>
      <div className="pb-3">
        <Container>
          <Row>
            <Col md={4}>
              <article className="card">
                <Image src={antmanImage} alt="antmanImage"></Image>
                <div className="card__content">
                  <h3 className="card__title">THE HILLS</h3>
                  <span className="class_subtitle">shdkajsh dkajsdh</span>
                  <p className="card__description">
                    {" "}
                    sdkjahs kdhaksj dhakdhak sdh
                  </p>
                </div>
              </article>
            </Col>
            <Col md={4}>
              <article className="card">
                <Image src={avengerImage} alt="avengerImage"></Image>
                <div className="card__content">
                  <h3 className="card__title">THE HILLS</h3>
                  <span className="class_subtitle">lorem ipsum</span>
                  <p className="card__description">asdjalksdaksjdlk</p>
                </div>
              </article>
            </Col>
            <Col md={4}>
              <article className="card">
                <Image src={batmanImage} alt="batmanImage"></Image>
                <div className="card__content">
                  <h3 className="card__title">THE HILLS</h3>
                  <span className="class_subtitle">lorem ipsum</span>
                  <p className="card__description">asdjalksdaksjdlk</p>
                </div>
              </article>
            </Col>
            <Col md={4}>
              <article className="card">
                <Image src={robinhoodImage} alt="robinhoodImage"></Image>
                <div className="card__content">
                  <h3 className="card__title">THE HILLS</h3>
                  <span className="class_subtitle">lorem ipsum</span>
                  <p className="card__description">asdjalksdaksjdlk</p>
                </div>
              </article>
            </Col>
            <Col md={4}>
              <article className="card">
                <Image src={spidermanImage} alt="spidermanImage"></Image>
                <div className="card__content">
                  <h3 className="card__title">THE HILLS</h3>
                  <span className="class_subtitle">lorem ipsum</span>
                  <p className="card__description">asdjalksdaksjdlk</p>
                </div>
              </article>
            </Col>
            <Col md={4}>
              <article className="card">
                <Image src={supermanImage} alt="supermanImage"></Image>
                <div className="card__content">
                  <h3 className="card__title">THE HILLS</h3>
                  <span className="class_subtitle">lorem ipsum</span>
                  <p className="card__description">asdjalksdaksjdlk</p>
                </div>
              </article>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Project;

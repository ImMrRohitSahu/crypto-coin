import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  const [options, setOptions] = useState(1);

  return (
    <Container className="about-card mt-4">
      <Row className="d-flex justify-content-center align-items-center p-4 row-divide">
        <Col>
          <span
            className={
              options === 1 ? "me-2 select option-btn" : "me-2 option-btn"
            }
            onClick={() => setOptions(1)}
          >
            About-Us
          </span>
          <span
            className={
              options === 2 ? "me-2 select option-btn" : "me-2 option-btn"
            }
            onClick={() => setOptions(2)}
          >
            About-Crypto
          </span>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center p-4">
        <Col className="px-md-4">
          {options === 1 && (
            <p className="about-content">
              At Coin Place, we&apos;re your go-to destination for real-time
              cryptocurrency insights. Navigate the markets with our
              user-friendly charts, stay informed with live data, and make
              informed decisions with our comprehensive crypto analytics.
              Empowering your journey in the world of digital assets, we bring
              clarity to the complexity of crypto trading. We strive to be your
              trusted companion in the crypto universe. Explore dynamic charts,
              track market trends, and harness the power of informed
              decision-making. Your gateway to a seamless and intuitive crypto
              experience, we&apos;re here to chart the course for your financial
              success in the digital frontier.
            </p>
          )}
          {options === 2 && (
            <p className="about-content">
              A cryptocurrency is a digital or virtual currency secured by
              cryptography, which makes it nearly impossible to counterfeit or
              double-spend. Most cryptocurrencies exist on decentralized
              networks using blockchain technology—a distributed ledger enforced
              by a disparate network of computers. A defining feature of
              cryptocurrencies is that they are generally not issued by any
              central authority, rendering them theoretically immune to
              government interference or manipulation.
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default About;

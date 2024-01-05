import { Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import route from "../../routes/route.json";
import { FaBitcoin } from "react-icons/fa6";

const AppFooter = () => {
  return (
    <Container className="footer mt-3 py-3">
      <Row className="my-3">
        <Col xs={12}>
          <NavLink to={route.HOME} className="link">
            <div className="d-flex justify-content-start align-items-center logo-heading">
              <FaBitcoin className="fs-4 me-2" />
              <h3 className="mt-2 fs-5">Coin Place</h3>
            </div>
          </NavLink>
        </Col>
      </Row>
      <Row className="my-3 d-flex align-items-start justify-content-center">
        <Col
          xs={6}
          md={4}
          className="d-flex flex-column align-items-center justify-content-center px-2 mt-3"
        >
          <h5 className="text-center w-100 py-3">Products</h5>
          <div className="text-center">
            <p>
              <a
                href="https://coinmarketcap.com/events/cmc-plugin-chatgpt/"
                target="blank"
              >
                ChatGPT Plugin
              </a>
            </p>
            <p>
              <a
                href="https://blockchain.coinmarketcap.com/?utm_source=coinmarketcap&utm_content=footer"
                target="blank"
              >
                Blockchain Explorer
              </a>
            </p>
            <p>
              <a href="https://coinmarketcap.com/api/" target="black">
                Crypto API
              </a>
            </p>
            <p>
              <a href="https://coinmarketcap.com/indices/" target="blank">
                Crypto Indices
              </a>
            </p>
          </div>
        </Col>
        <Col
          xs={6}
          md={4}
          className="d-flex flex-column align-items-center justify-content-center px-2 mt-3"
        >
          <h5 className="text-center w-100 py-3">Company & Support</h5>
          <div className="text-center">
            <p>
              <Link to={route.ABOUT}>About Us</Link>
            </p>
            <p>
              <Link to={route.CONTACT_US}>Contact Support</Link>
            </p>
            <p>
              <a href="https://coinmarketcap.com/api/" target="black">
                FAQ
              </a>
            </p>
            <p>
              <a href="https://coinmarketcap.com/indices/" target="blank">
                Terms Of Use
              </a>
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          md={4}
          className="d-flex flex-column align-items-center justify-content-center px-2 mt-3"
        >
          <h5 className="text-center w-100 py-3">Quike Links</h5>
          <div className="text-center">
            <p>HO Address - Sadar, Betul 460001</p>
            <p>State - Madhya Pradesh</p>
            <p>Contact No. - +91 900 90 44386</p>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <p>© 2023 Coin Place. All rights reserved</p>
      </Row>
    </Container>
  );
};

export default AppFooter;

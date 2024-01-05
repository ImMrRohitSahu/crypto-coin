import { Col, Container, Row } from "react-bootstrap";
import { FaCoins } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";

const Info = () => {
  return (
    <Container className="my-4">
      <Row className="d-flex justify-content-evenly align-items-center py-2">
        <Col md={3} xs={8} className="p-md-1 p-3 me-2">
          <div className="info-logo text-center">
            <FaCoins className="info-logo-logo" />
          </div>
          <div>
            <h4 className="text-center info-text">Top Trusted Coins Here</h4>
          </div>
        </Col>
        <Col md={3} xs={8} className="p-md-1 p-3 me-2">
          <div className="info-logo text-center">
            <RiVerifiedBadgeFill className="info-logo-logo" />
          </div>
          <div>
            <h4 className="text-center info-text">Safe & Secure Your Data</h4>
          </div>
        </Col>
        <Col md={3} xs={8} className="p-md-1 p-3 ms-2">
          <div className="info-logo text-center">
            <RiCustomerService2Fill className="info-logo-logo" />
          </div>
          <div>
            <h4 className="text-center info-text">24x7 Customer Support</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;

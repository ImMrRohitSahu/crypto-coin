import { Col, Container, Row } from "react-bootstrap";

const Error = () => {
  return (
    <>
      <Container className="my-4">
        <Row>
          <Col>
            <h2>Error 404 - Page Not Found!!!</h2>
            <p>You will be redirect Home Page after 5 second...</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Error;

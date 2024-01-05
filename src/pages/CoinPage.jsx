import { Container, Row } from "react-bootstrap";
import CoinDetails from "../components/CoinDetails/CoinDetails";
import CoinChart from "../components/CoinChart/CoinChart";

const CoinPage = () => {
  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex justify-content-between align-items-start">
          <CoinDetails />
          <CoinChart/>
        </Row>
      </Container>
    </>
  );
};

export default CoinPage;

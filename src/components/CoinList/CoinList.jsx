import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ApiContext } from "../../contexts/ApiContext";
import { Link } from "react-router-dom";

const CoinList = () => {
  const { exchangeApi, currencyHandler, currency } = useContext(ApiContext);

  return (
    <Container className="mt-5">
      <Row className="table-heading">
        <Col className="d-flex justify-content-between align-items-center">
          <h6 className="fs-5 mt-1">All Coins</h6>
          <button className="currency-btn" onClick={() => currencyHandler()}>
            {currency === "inr" ? "INR" : "USD"}
          </button>
        </Col>
      </Row>
      <Row className="my-4 table-heading p-0">
        <Col xs={5} md={2}>
          <div className="d-flex">
            <p>Coin</p>
          </div>
        </Col>
        <Col xs={4} md={8} className="text-center">
          <p>Price</p>
        </Col>
        <Col xs={3} md={2} className="text-end">
          <p>Change</p>
        </Col>
      </Row>

      {exchangeApi.map((coin, index) => {
        return (
          <Link to={`/coin/${coin.id}`} key={index} className="link">
            <Row className="pt-3 my-2 coin-list">
              <Col xs={5} md={2}>
                <div className="d-flex">
                  <img src={coin.image} className="coin-img me-2" />
                  <p className="list-coin-text">{coin.name}</p>
                </div>
              </Col>
              <Col xs={4} md={8} className="text-center">
                <p className="list-coin-text">
                  {currency === "inr" ? <>&#8377;</> : "$"} {coin.current_price}
                </p>
              </Col>
              <Col xs={3} md={2} className="text-end">
                <p
                  className={
                    coin.market_cap_change_percentage_24h > 0
                      ? "green list-coin-text"
                      : "red list-coin-text"
                  }
                >
                  {coin.market_cap_change_percentage_24h > 0
                    ? "+" +
                      coin.market_cap_change_percentage_24h.toFixed(2) +
                      "%"
                    : coin.market_cap_change_percentage_24h.toFixed(2) + "%"}
                  {/* {coin.price_change_percentage_24h.toFixed(2)} */}
                </p>
              </Col>
            </Row>
          </Link>
        );
      })}
    </Container>
  );
};

export default CoinList;

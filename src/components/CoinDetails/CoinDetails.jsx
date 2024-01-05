import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";

const CoinDetails = () => {
  const { pid } = useParams();
  const [coin, setCoin] = useState([]);
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [growth, setGrowth] = useState("");
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("inr");

  useEffect(() => {
    const getCoin = () => {
      fetch(
        `https://api.coingecko.com/api/v3/coins/${pid}?x_cg_demo_api_key=CG-NoKwAbkgJSXrr1AymgNnqMhb`
      )
        .then((res) => res.json())
        .then((data) => {
          return (
            setImage(data.image.large),
            setCoin(data),
            currency === "inr"
              ? setPrice(data.market_data.current_price.inr)
              : setPrice(data.market_data.current_price.usd),
            setGrowth(data.market_data?.price_change_percentage_24h.toFixed(2)),
            setDescription(data.description.en.split(".")[0])
          );
        })
        .catch(() => console.log("Error In Server!!!"));
    };
    getCoin();
  }, [pid, currency]);

  const currencyBtnStatus = () => {
    if (currency === "inr") {
      setCurrency("usd");
    } else {
      setCurrency("inr");
    }
  };

  return (
    <>
      <Col
        md={5}
        xs={12}
        className="d-flex flex-column justify-content-evenly align-items-md-start align-items-center coin-card"
      >
        <div className="coin-image mb-1">
          <img src={image} alt="" />
        </div>
        <div className="name-title px-1 mb-2">
          <span>{coin.name} / </span>
          <span>{coin.symbol}</span>
          <button
            className="currency-btn ms-3"
            onClick={() => currencyBtnStatus()}
          >
            {currency === "inr" ? "INR" : "USD"}
          </button>
        </div>
        <div className="price-profit-lose px-1 mb-2">
          <span className="coin-price">
            {currency === "inr" ? <>&#8377;</> : "$"} {price}
          </span>
          <span className={growth > 0 ? "green fw-bold" : "red fw-bold"}>
            {growth > 0 ? (
              <BiSolidUpArrow className="mb-1 me-1" />
            ) : (
              <BiSolidDownArrow className="mb-1 me-1" />
            )}
            {growth}%
          </span>
        </div>
        <div className="rank px-1 mb-2">
          <span>
            {<IoPulseOutline className="me-2" />}#{coin.market_cap_rank}
          </span>
          <span>Active User - {coin.watchlist_portfolio_users}</span>
        </div>
        <div className="coin-updated px-1 mb-2">
          <p>Last Updated On {coin.last_updated}</p>
        </div>
        <div className="description px-1 mb-0 mb-xs-2">
          <p className="text-md-start text-center">{description}</p>
        </div>
      </Col>
    </>
  );
};

export default CoinDetails;

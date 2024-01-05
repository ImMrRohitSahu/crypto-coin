import { Container } from "react-bootstrap";
import CoinList from "../components/CoinList/CoinList";
import Info from "../components/Info.jsx/Info";
import HeroBanner from "../components/HeroBanner/HeroBanner";

const Home = () => {
  
  return (
    <>
      <Container fluid className="hero-section">
        <HeroBanner className="hero" />
      </Container>
      <Info />
      <CoinList />
    </>
  );
};

export default Home;

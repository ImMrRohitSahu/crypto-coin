import { Col, Container, Row } from "react-bootstrap";
import { FaBitcoin } from "react-icons/fa6";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import route from "../../routes/route.json";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Headroom from "react-headroom";

const AppHeader = () => {
  const { contextLogoutHandler, isAuth, user } = useContext(AuthContext);
  const [menu, setMenu] = useState(false);
  const menuRef = useRef();

  const handleResize = () => {
    setMenu(false);
  };

  const handleScroll = () => {
    setMenu(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const menuHandler = () => {
    setMenu(!menu);
  };

  const manuCloseLinkHandler=()=>{
    setMenu(false)
  }

  const logoutHandler = () => {
    contextLogoutHandler();
  };

  return (
    <>
      <Headroom>
        <Container fluid className="navbar-hero">
          <Row className="navBar d-flex justify-content-between align-items-center px-md-5 px-2">
            <Col xs={7} md={4}>
              <NavLink to={route.HOME} className="link" onClick={manuCloseLinkHandler}>
                <div className="d-flex justify-content-start align-items-center logo-heading">
                  <FaBitcoin className="fs-4 me-2" />
                  <h3 className="mt-2 fs-5">Coin Place</h3>
                </div>
              </NavLink>
            </Col>
            <Col
              xs={4}
              className="d-md-flex justify-content-evenly align-items-center d-none menu"
            >
              <span>
                <NavLink to={route.HOME} className="link">
                  Home
                </NavLink>
              </span>
              <span>
                <NavLink to={route.ABOUT} className="link">
                  About
                </NavLink>
              </span>
              <span>
                <NavLink to={route.CONTACT_US} className="link">
                  Contact Us
                </NavLink>
              </span>
            </Col>
            <Col
              xs={5}
              md={4}
              className="d-md-flex justify-content-end align-items-center d-none"
            >
              <h6 className="me-4 mt-2 nav-username">{user}</h6>
              {isAuth && (
                <NavLink className="link">
                  <LuLogOut className="fs-4 log-btn" onClick={logoutHandler} />
                </NavLink>
              )}
              {!isAuth && (
                <NavLink to={`/${route.LOGIN}`} className="link">
                  <LuLogIn className="fs-4 log-btn" />
                </NavLink>
              )}
            </Col>
            <Col className="d-md-none d-flex justify-content-end align-align-items-center">
              <GiHamburgerMenu
                className="fs-4 me-2 menu-btn"
                onClick={menuHandler}
              />
            </Col>
          </Row>
          {menu && (
            <Row>
              <div
                className={
                  menu
                    ? "menu-for-small-dev in-menu text-center"
                    : "menu-for-small-dev out-menu"
                }
                ref={menuRef}
              >
                <div className="w-100 d-flex justify-content-center align-items-center mt-3">
                  <FaUserCircle className="fs-4 me-2" />
                  <h5 className="mb-0">{user}</h5>
                </div>
                <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-4">
                  <h6 className="w-100 my-2 menu-link py-2">
                    <NavLink to={route.HOME} className=" link" onClick={manuCloseLinkHandler}>
                      Home
                    </NavLink>
                  </h6>
                  <h6 className="w-100 my-2 menu-link py-2">
                    <NavLink to={route.ABOUT} className=" link" onClick={manuCloseLinkHandler}>
                      About
                    </NavLink>
                  </h6>
                  <h6 className="w-100 my-2 menu-link py-2">
                    <NavLink to={route.CONTACT_US} className=" link" onClick={manuCloseLinkHandler}>
                      Contact
                    </NavLink>
                  </h6>
                  <div className="login-div">
                    {isAuth && (
                      <NavLink className="link">
                        <h6
                          className="fs-4 log-btn m-0"
                          onClick={logoutHandler}
                        >
                          Logout
                        </h6>
                      </NavLink>
                    )}
                    {!isAuth && (
                      <NavLink to={`/${route.LOGIN}`} className="link">
                        <h6
                          className="fs-4 log-btn m-0"
                          onClick={logoutHandler}
                        >
                          Login
                        </h6>
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            </Row>
          )}
        </Container>
      </Headroom>
    </>
  );
};

export default AppHeader;

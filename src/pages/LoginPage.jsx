import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import route from "../routes/route.json";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { contextLoginHandler } = useContext(AuthContext);
  const navigate = useNavigate();

  const clearInput = () => {
    setUsername("");
    setPassword("");
    setError("");
  };

  useEffect(()=>{
    clearInput()
  },[])

  const loginHandler = () => {
    if (username === password && username && password) {
      contextLoginHandler(username);
      navigate(route.HOME);
    } else {
      setError("Invalid Username & Password!!!");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex justify-content-center align-items-center mt-4">
          <Col lg={6} md={8} sm={10}>
            <Card className="p-3 login-card">
              <h4 className="text-center text-light">User Login</h4>
              <Row className="mt-3 px-md-4">
                <Col>
                  <p className="text-center error">{error}</p>
                </Col>
              </Row>
              <Row className="mb-3 px-md-4">
                <Col>
                  <div className="d-flex flex-column my-2">
                    <label className="fw-medium label">Username</label>
                    <input
                      type="text"
                      className="px-2 py-1 fw-bold border rounded-1 input"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="d-flex flex-column my-2">
                    <label className="fw-medium label">Password</label>
                    <input
                      type="password"
                      className="px-2 py-1 fw-bold border rounded-1 input"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col className="d-flex justify-content-center align-items-center">
                  <Button
                    className="btn btn-danger p-1 px-2 mx-2 fw-medium"
                    onClick={() => navigate(route.HOME)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="btn btn-success p-1 px-2 mx-2 fw-medium"
                    onClick={loginHandler}
                  >
                    Login Now
                  </Button>
                </Col>
              </Row>
              <Row className="mt-3 px-md-4">
                <Col>
                  <p className="text-center note">
                    Note -Dummy Login Username & Password should be similar for
                    login!!!
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;

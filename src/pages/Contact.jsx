import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { IoClose } from "react-icons/io5";

const Contact = () => {
  const [timer, setTimer] = useState(8);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");
  const [successfull, setSuccessfull] = useState(false);

  const saveData = () => {
    const storedData = localStorage.getItem("ContactDataKey");
    const existingData = storedData ? JSON.parse(storedData) : [];
    const newContactObj = {
      name,
      email,
      reason,
    };
    const newData = [...existingData, newContactObj];
    localStorage.setItem("ContactDataKey", JSON.stringify(newData));
  };
  

  const clearInput = () => {
    setName("");
    setEmail("");
    setReason("");
    setError("");
  };

  useEffect(() => {
    if (successfull) {
      if (timer > 0) {
        setTimeout(() => {
          setTimer(timer - 1);
        }, 1000);
      } else {
        setSuccessfull(false);
      }
    }
  }, [timer, successfull]);

  const submitHandler = () => {
    if (name || email || reason) {
      saveData();
      setSuccessfull(true);
      setTimeout(() => {
        setSuccessfull(false);
      }, 8000);
      clearInput();
      return;
    } else {
      setError("Invalid Details!!!");
      setTimeout(() => {
        setError("");
      }, 3000);
      setSuccessfull(false);
    }
  };
  return (
    <>
      <Container className="mt-4">
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={8} className="contact-card">
            <Card className="d-flex justify-content-center align-items-center py-4">
              <h5>Contact Us For Any Query</h5>
              <div className="d-flex flex-column my-2 mt-4 contact-input-div">
                <label className="label mb-1">Your Name</label>
                <input
                  type="text"
                  autoComplete="off"
                  className="input px-2 py-1 fw-bold border rounded-1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column my-2 contact-input-div">
                <label className="label mb-1">Your Email</label>
                <input
                  type="email"
                  autoComplete="off"
                  className="input px-2 py-1 fw-bold border rounded-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column my-2 contact-input-div">
                <label className="label mb-1">Reason For Contact</label>
                <input
                  type="email"
                  autoComplete="off"
                  className="input px-2 py-1 fw-bold border rounded-1 "
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>
              <div className="my-1">
                <p className="error">{error}</p>
              </div>
              <div className="">
                <button className="btn btn-secondary">Back</button>
                <button
                  className="btn btn-primary ms-4"
                  onClick={submitHandler}
                >
                  Send Now
                </button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      {successfull && (
        <Container fluid className="popup-blur">
          <Row className="d-flex justify-content-center align-items-center w-100">
            <Col
              xs={12}
              md={7}
              className="popup-card d-flex justify-content-center align-items-center w-100"
            >
              <div className="popup text-center px-3">
                <h3 className="text-end">
                  <IoClose onClick={() => setSuccessfull(false)} />
                </h3>
                <div className="d-flex justify-content-center">
                  <div className="success-img">
                    <img src="src/assets/success.png" width="100%" />
                  </div>
                </div>
                <h5 className="mt-3 text-dark fw-bold">
                  Yeah!!! Successfully Sent Your Query
                </h5>
                <p className="text-dark fs-6">
                  You will be redirect to Home Page after {timer} second...
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Contact;

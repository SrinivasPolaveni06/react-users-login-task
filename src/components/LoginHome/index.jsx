import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./index.css";

const Index = () => {
  // const [userStatus, setUserStatus] = useState(true);
  // function onChangeLoginPage() {
  //   setUserStatus(false);
  // }

  // function onChangeSignUpPage() {
  //   setUserStatus(true);
  // }
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      <Container>
        <Row>
          {/* {userStatus ? (
            <Login onChangeLoginPage={onChangeLoginPage} />
          ) : (
            <SignUp onChangeSignUpPage={onChangeSignUpPage} />
          )} */}

          <Outlet/>

          <Col lg={6} className="g-0">
            <div className="right-section"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;

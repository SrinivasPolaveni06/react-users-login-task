import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Index = () => {
  useEffect(() => {
    const isUser = localStorage.getItem("loginUser");
    if (isUser) {
      return navigate("/user/dashboard");
    } else {
      getuserData();
    }
  }, []);

  const [resData, setResData] = useState([]);

  const initialErrors = {
    Email: "",
    Password: "",
  };

  const [Errors, setErrorsValidation] = useState(initialErrors);

  function getuserData() {
    axios
      .get("http://localhost:3002/login")
      .then((res) => {
        //console.log(res);
        //navigate("/");
        setResData(res.data);
      })
      .catch((err) => console.log(err));
  }

  // function onChangeLoginPage() {
  //   props.onChangeLoginPage();
  //   //setUserStatus(false);
  // }

  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const [userData, setUserData] = useState(initialValues);
  const [error, setError] = useState("");
  // function onChangeSignUpPage() {
  //   props.onChangeSignUpPage();
  // }

  function onChangePassword(event) {
    let text = event.target.value;
    let condition = text.length >= 5 && text.length <= 16;
    //console.log(condition);
    if (text !== "") {
      if (condition) {
        setUserData({ ...userData, password: event.target.value });
        setErrorsValidation({ ...Errors, Password: "" });
      } else {
        setErrorsValidation({
          ...Errors,
          Password: `Password have minimum 5 characters`,
        });
      }
    } else {
      setUserData({ ...userData, password: event.target.value });
      setErrorsValidation({ ...Errors, Password: "" });
    }
  }

  function onChangeEmail(event) {
    let text = event.target.value;
    let condition = text.endsWith("@gmail.com");
    if (text !== "") {
      if (condition === true) {
        setUserData({ ...userData, email: event.target.value });
        setErrorsValidation({ ...Errors, Email: "" });
      } else {
        setErrorsValidation({
          ...Errors,
          Email: `Email must be ends with @gmail.com`,
        });
      }
      //console.log(condition);
    } else {
      setUserData({ ...userData, email: event.target.value });
      setErrorsValidation({ ...Errors, Email: "" });
    }
  }

  function onSubmitData(event) {
    console.log(userData.email);
    console.log(userData.password);
    //console.log(resData.length);
    //console.log(resData);
    if (userData.email === "" && userData.password === "") {
      setErrorsValidation({
        ...Errors,
        Email: "Required",
        Password: "Required",
      });
    } else if (userData.email === "" && userData.password !== "") {
      setErrorsValidation({ ...Errors, Email: "Required", Password: "" });
    } else if (userData.password === "" && userData.email !== "") {
      setErrorsValidation({ ...Errors, Email: "", Password: "Required" });
    } else {
      if (resData.length > 0) {
        //console.log(resData.length);
        const user = resData.filter((eachuser) => {
          if (
            eachuser.email === userData.email &&
            eachuser.password === userData.password
          ) {
            return eachuser;
          }
        });
        //console.log(user.length + "dfgh");
        if (user.length > 0) {
          //setError("");
          axios
            .post("http://localhost:3002/login/user", userData)

            .then((res) => {
              //console.log(res);
              const token = res.data.token;
              if (token) {
                localStorage.setItem("jwt_token", token);
                localStorage.setItem("loginUser", JSON.stringify(user[0]));
                navigate("/user/dashboard");
                setError("");
              } else {
                localStorage.setItem("loginUser", JSON.stringify(user[0]));
                //localStorage.setItem("jwt_token", token);
                navigate("/user/dashboard");
                //setError(" You are not Authorized");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          setError("Invalid Email or Password");
        }
      } else {
        setError("Invalid Email or Password");
      }
    }

    event.preventDefault();
  }

  return (
    <Col lg={6} className="g-0">
      <div className="main-container p-3 d-flex flex-column align-items-center justify-content-center">
        <h3 className="mb-4">Login Form</h3>
        <Form onSubmit={onSubmitData}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <strong>Email address*</strong>
            </Form.Label>
            <Form.Control
              type="email"
              onChange={(event) => onChangeEmail(event)}
              placeholder="Enter email"
            />
            <p className="text-danger">{Errors.Email}</p>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>Password*</b>
            </Form.Label>
            <Form.Control
              type="password"
              onChange={onChangePassword}
              placeholder="Password"
            />
            <p className="text-danger">{Errors.Password}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <p className="text-danger">{error}</p>
          <p className="my-3">
            Not Registered Yet?
            <Link to="/signup">
              <button className="signupButton">Create an Account</button>
            </Link>
          </p>
        </Form>
      </div>
    </Col>
  );
};

export default Index;

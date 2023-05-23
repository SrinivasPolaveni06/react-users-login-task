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

const SignUp = () => {
  useEffect(() => {
    getuserData();
  }, []);

  const [resData, setResData] = useState([]);

  function getuserData() {
    axios
      .get("http://localhost:3002/login")
      .then((res) => {
        console.log(res);
        //navigate("/");
        setResData(res.data);
      })
      .catch((err) => console.log(err));
  }

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const initialErrors = {
    Email: "",
    Password: "",
    Name: "",
  };

  const [Errors, setErrorsValidation] = useState(initialErrors);

  const navigate = useNavigate();
  const [userData, setUserData] = useState(initialValues);
  const [error, setError] = useState("");
  // function onChangeSignUpPage() {
  //   props.onChangeSignUpPage();
  // }
  function onChangeName(event) {
    let text = event.target.value;
    let condition = text.length >= 5 && text.length <= 20;
    console.log(condition);
    if (text !== "") {
      if (condition) {
        setUserData({ ...userData, name: event.target.value });
        setErrorsValidation({ ...Errors, Name: "" });
      } else {
        setUserData({ ...userData, name: event.target.value });
        setErrorsValidation({
          ...Errors,
          Name: `name should have minimum 5 characters`,
        });
      }
    } else {
      setUserData({ ...userData, name: event.target.value });
      setErrorsValidation({ ...Errors, Name: "" });
    }
  }

  function onChangePassword(event) {
    let text = event.target.value;
    let condition = text.length >= 5 && text.length <= 16;
    console.log(condition);
    if (text !== "") {
      if (condition) {
        setUserData({ ...userData, password: event.target.value });
        setErrorsValidation({ ...Errors, Password: "" });
      } else {
        setUserData({ ...userData, password: event.target.value });
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
        setUserData({ ...userData, email: event.target.value });
        setErrorsValidation({
          ...Errors,
          Email: `Email must be ends with @gmail.com`,
        });
      }
      console.log(condition);
    } else {
      setUserData({ ...userData, email: event.target.value });
      setErrorsValidation({ ...Errors, Email: "" });
    }
  }

  function onSubmitData(event) {
    if (
      userData.email === "" &&
      userData.password === "" &&
      userData.name === ""
    ) {
      setErrorsValidation({
        ...Errors,
        Email: "Required",
        Password: "Required",
        Name: "Required",
      });
    } else if (userData.email === "" && userData.password === "") {
      setErrorsValidation({
        ...Errors,
        Email: "Required",
        Password: "Required",
        Name: "",
      });
    } else if (userData.password === "" && userData.name === "") {
      setErrorsValidation({
        ...Errors,
        Email: "",
        Password: "Required",
        Name: "Required",
      });
    } else if (userData.name === "" && userData.email === "") {
      setErrorsValidation({
        ...Errors,
        Email: "Required",
        Password: "",
        Name: "Required",
      });
    } else if (
      userData.name === "" &&
      userData.email !== "" &&
      userData.password !== ""
    ) {
      setErrorsValidation({
        ...Errors,
        Email: "",
        Password: "",
        Name: "Required",
      });
    } else if (
      userData.name !== "" &&
      userData.email === "" &&
      userData.password !== ""
    ) {
      setErrorsValidation({
        ...Errors,
        Email: "Required",
        Password: "",
        Name: "",
      });
    } else if (
      userData.name !== "" &&
      userData.email !== "" &&
      userData.password === ""
    ) {
      setErrorsValidation({
        ...Errors,
        Email: "",
        Password: "Required",
        Name: "",
      });
    } else {
      if (resData.length > 0) {
        console.log(resData.length);
        const user = resData.filter((eachuser) => {
          if (
            (eachuser.email === userData.email &&
              eachuser.password === userData.password) ||
            eachuser.email === userData.email
          ) {
            return eachuser;
          }
        });
        //console.log(user.length + "dfgh");
        if (user.length > 0) {
          //setError("");
          setError("user has aready registered");
        } else {
          axios
            .post("http://localhost:3002/login", userData)
            .then((res) => {
              // const userdata = localStorage.getItem("user");
              // if (!userdata) {
              //   localStorage.setItem("user", JSON.stringify(res.data));
              //   setError("");
              // } else {
              //   if (
              //     userData.name == userdata.name ||
              //     userData.email == userdata.email
              //   ) {
              //     setError("user has already exist");
              //   } else {
              //     setError("");
              //   }
              // }
              console.log(res);
              navigate("/");
            })
            .catch((err) => console.log(err));
          setError("");
        }
      } else {
        axios
          .post("http://localhost:3002/login", userData)
          .then((res) => {
            // const userdata = localStorage.getItem("user");
            // if (!userdata) {
            //   localStorage.setItem("user", JSON.stringify(res.data));
            //   setError("");
            // } else {
            //   if (
            //     userData.name == userdata.name ||
            //     userData.email == userdata.email
            //   ) {
            //     setError("user has already exist");
            //   } else {
            //     setError("");
            //   }
            // }
            console.log(res);
            navigate("/");
          })
          .catch((err) => console.log(err));
        //setError("Invalid Email or Password");
      }
    }
    event.preventDefault();
  }

  return (
    <Col lg={6} className="g-0">
      <div className="main-container p-3 d-flex flex-column align-items-center justify-content-center">
        <h3 className="mb-4">Signup Form</h3>
        <Form onSubmit={onSubmitData}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>Name*</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              onChange={onChangeName}
              value={userData.name}
            />
            <p className="text-danger">{Errors.Name}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <strong>Email address*</strong>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={onChangeEmail}
              value={userData.email}
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
              placeholder="Password"
              onChange={onChangePassword}
              value={userData.password}
            />
            <p className="text-danger">{Errors.Password}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Iam agree to the Terms&Conditions"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            SignUp
          </Button>
          <p className="text-danger">{error}</p>

          <p className="my-3">
            Already have an Account?
            <Link to="/">
              <button className="signupButton">Sign in</button>
            </Link>
            {/* <button className="signupButton" onClick={onChangeSignUpPage}>
              Sign in
            </button> */}
          </p>
        </Form>
      </div>
    </Col>
  );
};

export default SignUp;

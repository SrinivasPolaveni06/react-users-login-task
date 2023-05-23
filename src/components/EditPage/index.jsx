import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./index.css";

const Index = () => {
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    if (!id) {
      getuserData();
    } else {
      axios
        .get("http://localhost:3002/login/" + id)
        .then((res) => {
          console.log(res);
          setUserData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      getuserData();
    }
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
          fetch("http://localhost:3002/login/" + id, {
            method: "PUT",

            headers: {
              "Content-type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt_token"), // notice the Bearer before your token
            },
            body: JSON.stringify(userData),
          })
            .then((res) => res.json())
            .then((res) => {
              const isUser = localStorage.getItem("loginUser");
              const parsedData = JSON.parse(isUser);
              if (res.success !== false) {
                if (isUser) {
                  if (id === parsedData._id) {
                    localStorage.removeItem("loginUser");
                    navigate("/");
                  } else {
                    navigate("/user/userslist");
                    //console.log("This is Failure Error01");
                  }
                } else {
                  navigate("/user/userslist");
                  //console.log("This is Failure Error02");
                }
              } else {
                alert("Youre Not Authorized");
              }
              console.log(res);
            })
            .catch((err) => {
              console.log("This is  Error0");
              alert("You are not Authorized");
              setError("");
            });
        }
      } else {
        fetch("http://localhost:3002/login/" + id, {
          method: "PUT",

          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt_token"), // notice the Bearer before your token
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((res) => {
            const isUser = localStorage.getItem("loginUser");
            const parsedData = JSON.parse(isUser);
            console.log(res);
            if (res.success !== false) {
              if (isUser) {
                if (id === parsedData._id) {
                  localStorage.removeItem("loginUser");
                  navigate("/");
                } else {
                  navigate("/user/userslist");
                  console.log("This is Failure Error1");
                }
              } else {
                console.log("This is Failure Error2");
                navigate("/user/userslist");
              }
            } else {
              alert("Youre Not Authorized");
            }
          })
          .catch((err) => {
            console.log("This is Error");
            alert("You are not Authorized");
            setError("");
          });
        setError("Invalid Email or Password");
      }
    }
    event.preventDefault();
  }

  return (
    <div className="App ">
      <Container className="App1 d-flex flex-column align-items-center justify-content-center">
        <Row>
          <Col lg={12}>
            <div className="main-container5 p-5 d-flex flex-column align-items-center justify-content-center">
              <h3 className="mb-4">Editing Form</h3>
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
                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>

                <p className="text-danger">{error}</p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;

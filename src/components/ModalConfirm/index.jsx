import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function Index(props) {
  const { show, handleClose, id, reload } = props;
  const navigation = useNavigate();

  function onhandleClose() {
    handleClose();
  }

  function onDeleteProduct() {
    const data = localStorage.getItem("loginUser");
    let Id;
    if (data) {
      const Name = JSON.parse(data);
      Id = Name._id;
    } else {
      navigation("/");
    }

    if (Id === id) {
      axios
        .delete(
          "http://localhost:3002/login/" + id,
          //   {headers: {
          //     "Access-Control-Allow-Origin" : "*",
          //     "Content-type": "Application/json",
          //     "Authorization": `Bearer ${your-token}`
          //     }
          // }
          {
            headers: {
              "Content-type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt_token"), // notice the Bearer before your token
            },
          }
        )
        .then((res) => {
          console.log(res);

          handleClose();
          //reload();
          localStorage.removeItem("loginUser");
          navigation("/");
        })
        .catch((err) => {
          alert(err.response.data.message);
          console.log(err);
        });
    } else {
      axios
        .delete(
          "http://localhost:3002/login/" + id,
          //   {headers: {
          //     "Access-Control-Allow-Origin" : "*",
          //     "Content-type": "Application/json",
          //     "Authorization": `Bearer ${your-token}`
          //     }
          // }
          {
            headers: {
              "Content-type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt_token"), // notice the Bearer before your token
            },
          }
        )
        .then((res) => {
          handleClose();
          reload();
        })
        .catch((err) => {
          alert(err.response.data.message);
          console.log(err);
        });
    }
  }

  return (
    <>
      <Modal show={show} onHide={onhandleClose} className="mt-5 pt-3">
        <Modal.Header closeButton>
          <Modal.Title>Conformation Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure, you want to delete this User...</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="btn-md"
            onClick={onhandleClose}
          >
            No
          </Button>
          <Button
            variant="primary"
            className="btn-md"
            onClick={onDeleteProduct}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Index;

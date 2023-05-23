import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const navigation = useNavigate();
  useEffect(() => {
    const isUser = localStorage.getItem("loginUser");
    if (isUser) {
      return;
    } else {
      navigation("/");
    }
  });
  return (
    <div className="col g-0 py-1 pb-5">
      <div
        className="bg-primary  d-flex flex-column align-items-center justify-content-center rounded"
        style={{ height: "250px" }}
      >
        <h3 className="text-white">Wellcome to Dashboard Page</h3>
        <p className="text-light">A Propesionally Designed panel</p>
      </div>
      <div className="p-3 pb-2 mt-3">
        <h5>Dashboards</h5>
        <p>Three dashboard examples to get you started!</p>
      </div>
      <hr className="text-dark h2" />
      <div className="col-12 d-flex align-items-center justify-content-evenly">
        <div className="col-4">
          <img
            src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/dashboards/default.png"
            alt=""
            width="90%"
            className="m-2"
          />
          <p className="my-2 text-center">Default Dashboard</p>
        </div>
        <div className="col-4">
          <img
            src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/dashboards/affiliate.png"
            alt=""
            width="90%"
            className="m-2"
          />
          <p className="my-2 text-center">Affiliate Dashboard</p>
        </div>
        <div className="col-4">
          <img
            src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/dashboards/multipurpose.png"
            alt=""
            width="90%"
            className="m-2"
          />
          <p className="my-2 text-center">Multipurpose Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default Index;

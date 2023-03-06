import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        width: "50%",
        margin: "20px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <i
        style={{ fontSize: "22px" }}
        className="fas fa-circle-notch fa-spin"
      ></i>
    </div>
  );
};

export default Loader;

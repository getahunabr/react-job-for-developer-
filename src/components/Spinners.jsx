import React from "react";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinners = ({ isLoading }) => {
  return (
    <ClipLoader
      size={150}
      color={"#4338ca"}
      isLoading={isLoading}
      cssOverride={override}
    />
  );
};

export default Spinners;

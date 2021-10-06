// import * as React from "react";
import React, { useState } from "react";

import App from "../container/App";

import gif from "../images/giphy (2).gif";
const Index = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) {
    return (
      <div className="container-loader">
        <img src={gif} alt="" />
      </div>
    );
  }

  return <App />;
};

export default Index;

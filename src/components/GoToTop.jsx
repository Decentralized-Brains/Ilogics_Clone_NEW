import React from "react";
import styled from "styled-components";
import TopButton from "../assets/icons/m-spraito-bobbo.gif";

const GoToTop = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button className="top-btn" onClick={goToBtn}>
      <img src={TopButton} alt="" className="w-28 h-28" />
    </button>
  );
};

export default GoToTop;

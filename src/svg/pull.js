import React from "react";

const Pull = ({isMenuOpen}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="19"
      viewBox="0 0 25.768 18.929"
      className={ `pull ${isMenuOpen ? 'pull-open' : ''}` }
    >
      <path
        stroke="#912131"
        strokeMiterlimit="10"
        d="M0.5 8.992H24.5V9.938H0.5z"
        className="pull1"
      ></path>
      <path
        stroke="#912131"
        strokeMiterlimit="10"
        d="M0.5 0.5H24.5V1.446H0.5z"
        className="pull2"
      ></path>
      <path
        stroke="#912131"
        strokeMiterlimit="10"
        d="M0.5 17.484H24.5V18.430000000000003H0.5z"
        className="pull3"
      ></path>
    </svg>
  );
}

export default Pull;
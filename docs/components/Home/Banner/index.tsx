import "./style.css";
import * as React from "react";

export default function Banner() {
  return (
    <div className="d-banner">
      <hr />
      <svg
        className="d-banner__icon block"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".75"
        viewBox="0 0 8 8"
      >
        <line x1="1.5" y1="4" x2="1.5" y2="1.5" />
        <line x1="1.5" y1="4" x2="1.5" y2="6.5" />
        <line x1="1.5" y1="1.5" x2="3.5" y2="1.5" />
        <line x1="1.5" y1="4" x2="2.5" y2="4" />
        <line x1="1.5" y1="6.5" x2="3.5" y2="6.5" />
        <line x1="4.5" y1="4" x2="4.5" y2="6.5" />
        <line x1="4.5" y1="4" x2="5.5" y2="4" />
        <line x1="6.5" y1="6.5" x2="6.5" y2="4" />
        <line x1="6.5" y1="2.75" x2="6.5" y2="2.75" />
      </svg>
      <hr />
    </div>
  );
}

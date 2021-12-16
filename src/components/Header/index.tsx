import "./style.css";
import * as React from "react";

export default function Header(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <header className="bs-1">
      <div {...props} className="header__container" />
    </header>
  );
}

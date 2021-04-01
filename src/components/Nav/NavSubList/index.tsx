import "./style.css";
import * as React from "react";
import Icon from "../../Icon";

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  heading: React.ReactNode;
}

export default function NavSubList({ heading, ...rest }: Props) {
  const [isExpanded, setIsExpanded] = React.useState(true);

  return (
    <>
      <li className="nav-link m-0">
        <button
          className="nav-sub-list__heading fw-b px-4 py-2 ripple"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {heading}
          <span
            className={`nav-sub-list__icon${
              isExpanded ? " nav-sub-list__icon--expanded" : ""
            }`}
          >
            <Icon name="down" strokeWidth="4" />
          </span>
        </button>
      </li>
      <li className="nav-sub-list__list">
        {isExpanded && <ul {...rest} className="m-0 p-0 slide-in" />}
      </li>
    </>
  );
}

NavSubList.displayName = "Nav.SubList";

import "./style.css";
import * as React from "react";
import { Link, LinkProps } from "@reach/router";

// FIXME - type annotation can probably be improved
export default function NavLink({
  to,
  ...rest
}: React.HTMLAttributes<HTMLAnchorElement> & { to: LinkProps<void>["to"] }) {
  return (
    <li className="nav-link m-0">
      <Link
        {...rest}
        getProps={({ isCurrent }) => ({
          className: `nav-link__link fw-b py-2${
            isCurrent ? " nav-link__link--active" : ""
          } ripple`,
        })}
        to={to}
      />
    </li>
  );
}

NavLink.displayName = "Nav.Link";

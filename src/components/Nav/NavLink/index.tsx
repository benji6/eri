import "./style.css";
import * as React from "react";
import { Link, LinkProps } from "@reach/router";

// FIXME - type annotation can probably be improved
export default function NavLink({
  to,
  ...rest
}: React.HTMLAttributes<HTMLAnchorElement> & { to: LinkProps<void>["to"] }) {
  return (
    <li className="e-nav-link m-0">
      <Link
        {...rest}
        getProps={({ isCurrent }) => ({
          className: `e-nav-link__link block fw-b px-4 py-2${
            isCurrent ? " e-nav-link__link--active" : ""
          } ripple`,
        })}
        to={to}
      />
    </li>
  );
}

NavLink.displayName = "Nav.Link";

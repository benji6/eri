import "./style.css";
import * as React from "react";
import { Link, LinkProps } from "@reach/router";

// FIXME - type annotation can probably be improved
export default function MenuLink({
  to,
  ...rest
}: React.HTMLAttributes<HTMLAnchorElement> & { to: LinkProps<void>["to"] }) {
  return (
    <li className="e-menu-link">
      <Link
        {...rest}
        getProps={({ isCurrent }) => ({
          className: `e-menu-link__link${
            isCurrent ? " e-menu-link__link--active" : ""
          }`,
        })}
        to={to}
      />
    </li>
  );
}

MenuLink.displayName = "Menu.Link";

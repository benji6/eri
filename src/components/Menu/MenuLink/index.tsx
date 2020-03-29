import "./style.css";
import * as React from "react";
import { Link, LinkProps } from "@reach/router";

// FIXME - the type of props is fairly messed up,
// when typing it properly there are a number of type errors thrown
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
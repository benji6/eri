import "./style.css";
import * as React from "react";
import { Link, LinkProps } from "@reach/router";

// FIXME - type annotation can probably be improved
export default function QuickNavLink(
  props: React.HTMLAttributes<HTMLAnchorElement> & { to: LinkProps<void>["to"] }
) {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => ({
        className: `e-quick-nav-link br-max bs-1 p-3${
          isCurrent ? " e-quick-nav-link--active" : ""
        }`,
      })}
    />
  );
}

QuickNavLink.displayName = "QuickNav.Link";

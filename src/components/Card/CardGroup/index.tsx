import "./style.css";
import * as React from "react";

export default function CardGroup(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className="e-card-group slide-children-in" />;
}

CardGroup.displayName = "Card.Group";

import * as React from "react";

export default function Label(
  props: React.HtmlHTMLAttributes<HTMLLabelElement>
) {
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  return <label {...props} className="flex-col" />;
}

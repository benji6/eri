import * as React from "react";
import { Button, Icon } from "../..";

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  title?: string;
  url?: string;
}

export default function ShareButton({
  text,
  title = document.title,
  url = location.origin,
  ...rest
}: IProps) {
  return "share" in navigator ? (
    <Button.Group>
      <Button
        {...rest}
        onClick={() =>
          navigator.share({ text, title, url }).catch((e) => {
            if (e instanceof DOMException && e.name === "AbortError") return;
            throw e;
          })
        }
        variant="secondary"
      >
        <Icon name="share" margin="end" />
        Share
      </Button>
    </Button.Group>
  ) : null;
}

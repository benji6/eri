import * as React from 'react'
import { ButtonGroup, Button, Icon } from '../..'

type ShareOptions =
  | {
      text: string
    }
  | {
      title: string
    }
  | {
      url: string
    }

interface INavigator extends Navigator {
  share?: (options: ShareOptions) => Promise<void>
}

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  title?: string
  url?: string
}

export default function ShareButton({
  text,
  title = document.title,
  url = location.origin,
  ...rest
}: IProps) {
  return 'share' in navigator ? (
    <ButtonGroup>
      <Button
        {...rest}
        onClick={() => (navigator as INavigator).share!({ text, title, url })}
        variant="secondary"
      >
        Share <Icon name="share" />
      </Button>
    </ButtonGroup>
  ) : null
}

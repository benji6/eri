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

const nav = navigator as INavigator

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  title?: string
  url?: string
}

const isShareApiAvailable = Boolean(nav.share)

export default function ShareButton({
  text,
  title = document.title,
  url = location.origin,
  ...rest
}: IProps) {
  return isShareApiAvailable ? (
    <ButtonGroup>
      <Button
        {...rest}
        onClick={() => nav.share!({ text, title, url })}
        variant="secondary"
      >
        Share <Icon name="share" />
      </Button>
    </ButtonGroup>
  ) : null
}

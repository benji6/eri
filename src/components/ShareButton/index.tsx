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
  onClick,
  text,
  title = document.title,
  url = location.host,
  ...rest
}: IProps) {
  return (
    isShareApiAvailable && (
      <ButtonGroup>
        <Button
          {...rest}
          onClick={e => {
            if (nav.share) return nav.share({ text, title, url })
            try {
              const inputElement = document.createElement('input')
              inputElement.value = url
              document.documentElement.appendChild(inputElement).select()
              document.execCommand('copy')
              document.documentElement.removeChild(inputElement)
              alert('Copied!')
            } catch (e) {
              prompt('Copy this link: ', url)
            } finally {
              if (onClick) onClick(e)
            }
          }}
          variant="secondary"
        >
          Share <Icon name="share" />
        </Button>
      </ButtonGroup>
    )
  )
}

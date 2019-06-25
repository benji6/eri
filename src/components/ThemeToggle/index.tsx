import * as React from 'react'
import { getCssVar, Toggle } from '../..'

const localStorageKey = 'e-is-dark-theme-on'
const { classList } = document.documentElement
const initialIsDarkThemeOn = Boolean(localStorage.getItem(localStorageKey))

if (initialIsDarkThemeOn) classList.add('e-theme-dark')

export default function ThemeToggle() {
  const [isDarkThemeOn, setIsDarkThemeOn] = React.useState(initialIsDarkThemeOn)

  React.useEffect(() => {
    setIsDarkThemeOn(Boolean(localStorage.getItem(localStorageKey)))
  }, [])

  const handleChange = () => {
    if (isDarkThemeOn) {
      classList.remove('e-theme-dark')
      localStorage.removeItem(localStorageKey)
    } else {
      classList.add('e-theme-dark')
      localStorage.setItem(localStorageKey, 'true')
    }
    const metaThemeColor = document.querySelector('meta[name=theme-color]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', getCssVar('--e-color-theme-app'))
    }
    setIsDarkThemeOn(!isDarkThemeOn)
  }

  return (
    <Toggle
      checked={isDarkThemeOn}
      label={isDarkThemeOn ? 'Dark theme on' : 'Light theme on'}
      onChange={handleChange}
    />
  )
}

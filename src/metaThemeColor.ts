import getCssVar from './utils/getCssVar'

if (typeof document !== 'undefined') {
  const metaThemeColor = document.querySelector('meta[name=theme-color]')
  if (metaThemeColor)
    metaThemeColor.setAttribute('content', getCssVar('--e-color-theme-app'))
}

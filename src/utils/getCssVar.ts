const styles = getComputedStyle(document.documentElement)

export const getCssTime0 = (): number =>
  parseFloat(getCssVar('--e-time-0')) * 1e3

export const getCssTime1 = (): number =>
  getCssTime0() * parseFloat(getCssVar('--e-time-scale-ratio'))

export default function getCssVar(prop: string) {
  return styles.getPropertyValue(prop).trim()
}

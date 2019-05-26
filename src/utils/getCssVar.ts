const styles = getComputedStyle(document.documentElement)

export const getCssTime0 = (): number =>
  parseFloat(getCssVar('--e-time-0')) * 1e3

export default function getCssVar(prop: string) {
  return styles.getPropertyValue(prop).trim()
}

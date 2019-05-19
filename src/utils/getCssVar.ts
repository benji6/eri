const styles = getComputedStyle(document.documentElement)

export default function getCssVar(prop: string) {
  return styles.getPropertyValue(prop).trim()
}

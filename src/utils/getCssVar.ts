const styles = getComputedStyle(document.documentElement)

export default (prop: string) => styles.getPropertyValue(prop).trim()

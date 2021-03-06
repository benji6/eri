export default function getCssVar(prop: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(prop)
    .trim();
}

export const getCssTime0 = (): number =>
  parseFloat(getCssVar("--time-0")) * 1e3;

export const getCssTime1 = (): number =>
  getCssTime0() * parseFloat(getCssVar("--time-scale-ratio"));

import { iconNameMap } from "../src/components/Icon";

export const ICON_NAMES = Object.keys(
  iconNameMap
) as (keyof typeof iconNameMap)[];

import * as React from "react";
import { EriStateContext } from "../components/EriProvider";
import { QUICK_NAV_PORTAL_EL } from "../components/QuickNav";
import useIsWideResolution from "./useIsWideResolution";

export default function useShouldRenderQuickNav(): boolean {
  const state = React.useContext(EriStateContext);
  const isWideResolution = useIsWideResolution();

  return !state.renderingToString && QUICK_NAV_PORTAL_EL && !isWideResolution;
}

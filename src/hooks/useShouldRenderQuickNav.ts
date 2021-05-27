import * as React from "react";
import { EriStateContext } from "../components/EriProvider";
import { PORTAL_CONTAINERS } from "../constants";
import useIsWideResolution from "./useIsWideResolution";

export default function useShouldRenderQuickNav(): boolean {
  const state = React.useContext(EriStateContext);
  const isWideResolution = useIsWideResolution();

  return (
    !state.renderingToString &&
    Boolean(PORTAL_CONTAINERS.quickNav) &&
    !isWideResolution
  );
}

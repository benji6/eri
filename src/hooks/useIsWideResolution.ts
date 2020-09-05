import * as React from "react";
import debounce from "../utils/debounce";

export default function useIsWideResolution(): boolean {
  const [width, setWidth] = React.useState(innerWidth);
  React.useEffect(() => {
    const handleResize = debounce(() => setWidth(innerWidth), 200);
    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);
  return width >= 1056;
}

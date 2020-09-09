import * as React from "react";

const mediaQuery = window.matchMedia("(min-width: 66rem)");

export default function useIsWideResolution(): boolean {
  const [isWideResolution, setIsWideResolution] = React.useState(
    mediaQuery.matches
  );

  const mediaQueryHandler = (e: MediaQueryListEvent) =>
    setIsWideResolution(e.matches);

  React.useEffect(() => {
    mediaQuery.addListener(mediaQueryHandler);
    return () => mediaQuery.removeListener(mediaQueryHandler);
  }, []);

  return isWideResolution;
}

import * as React from "react";

const mediaQuery =
  typeof window === "undefined"
    ? undefined
    : window.matchMedia("(min-width: 66rem)");

export default function useIsWideResolution(): boolean {
  const [isWideResolution, setIsWideResolution] = React.useState<boolean>(
    mediaQuery ? mediaQuery.matches : false
  );

  const mediaQueryHandler = (e: MediaQueryListEvent) =>
    setIsWideResolution(e.matches);

  React.useEffect(() => {
    mediaQuery?.addEventListener("change", mediaQueryHandler);
    return () => mediaQuery?.removeEventListener("change", mediaQueryHandler);
  }, []);

  return isWideResolution;
}

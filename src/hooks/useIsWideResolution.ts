import { useEffect, useState } from "react";

const mediaQuery =
  typeof window === "undefined"
    ? undefined
    : window.matchMedia("(min-width: 66rem)");

export default function useIsWideResolution(): boolean {
  const [isWideResolution, setIsWideResolution] = useState<boolean>(
    mediaQuery ? mediaQuery.matches : false,
  );

  useEffect(() => {
    const mediaQueryHandler = (e: MediaQueryListEvent) =>
      setIsWideResolution(e.matches);
    mediaQuery?.addEventListener("change", mediaQueryHandler);
    return () => mediaQuery?.removeEventListener("change", mediaQueryHandler);
  }, []);

  return isWideResolution;
}

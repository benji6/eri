export default function debounce(f: () => void, debounceTime: number) {
  let timeoutId: number | undefined;
  return (): void => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(f, debounceTime);
  };
}

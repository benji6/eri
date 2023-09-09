import { SVGProps, memo } from "react";
import WordCloudPrimary from "./WordCloudPrimary";
import WordCloudSecondary from "./WordCloudSecondary";

export interface IProps extends SVGProps<SVGSVGElement> {
  words: { [word: string]: number };
}

export default memo(function WordCloud({ ...props }: IProps) {
  if (!Object.keys(props.words).length) return;

  // TODO delete WordCloudSecondary when/if Safari ever supports OffscreenCanvas
  return "OffscreenCanvas" in window ? (
    <WordCloudPrimary {...props} />
  ) : (
    <WordCloudSecondary {...props} />
  );
});

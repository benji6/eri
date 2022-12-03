import "./style.css";
import { SVGProps } from "react";
import WordCloudSecondary from "./WordCloudSecondary";

export interface IProps extends SVGProps<SVGSVGElement> {
  words: { [word: string]: number };
}

export default function WordCloud({ ...props }: IProps) {
  if (!Object.keys(props.words).length) return null;

  return <WordCloudSecondary {...props} />;
}

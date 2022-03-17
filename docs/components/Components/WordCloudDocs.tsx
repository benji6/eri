import * as React from "react";
import { Paper, WordCloud } from "../../../src";
import ConfigurableExample from "./_ConfigurableExample";
import { LOREM_IPSUM } from "../../constants";

export default function WordCloudDocs() {
  const wordSet = new Set(LOREM_IPSUM.replace(/[,.]/g, "").split(" "));
  const words = {};

  wordSet.forEach(
    (word) => (words[word] = Math.floor(Math.random() ** 2 * 32))
  );

  return (
    <Paper.Group>
      <Paper>
        <h2>WordCloud</h2>
      </Paper>
      <ConfigurableExample example={<WordCloud words={words} />} />
    </Paper.Group>
  );
}

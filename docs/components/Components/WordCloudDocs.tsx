import * as React from "react";
import { Paper, WordCloud } from "../../../src";
import { useEffect, useState } from "react";
import ConfigurableExample from "./_ConfigurableExample";
import { LOREM_IPSUM } from "../../constants";

export default function WordCloudDocs() {
  const [words, setWords] = useState({});

  useEffect(() => {
    const wordSet = new Set(LOREM_IPSUM.replace(/[,.]/g, "").split(" "));
    const newWords = {};
    wordSet.forEach(
      (word) => (newWords[word] = Math.floor(Math.random() ** 2 * 32))
    );
    setWords(newWords);
  }, []);

  return (
    <Paper.Group>
      <Paper>
        <h2>WordCloud</h2>
      </Paper>
      <ConfigurableExample example={<WordCloud words={words} />} />
    </Paper.Group>
  );
}

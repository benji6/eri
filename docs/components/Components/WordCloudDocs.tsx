import * as React from "react";
import { Paper, WordCloud } from "../../../src";
import { useEffect, useState } from "react";
import ConfigurableExample from "./_ConfigurableExample";
import { POKEMON_NAMES } from "../../constants";

export default function WordCloudDocs() {
  const [words, setWords] = useState({});

  useEffect(() => {
    const newWords = {};
    for (const name of POKEMON_NAMES)
      newWords[name] = Math.ceil(Math.random() ** 2 * 128);
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

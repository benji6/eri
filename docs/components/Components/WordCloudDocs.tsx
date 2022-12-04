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
      <ConfigurableExample
        example={
          <WordCloud
            words={Object.fromEntries(Object.entries(words).slice(0, 150))}
          />
        }
      />
      <Paper>
        <h2>{Object.keys(words).length} pokemon</h2>
        <WordCloud words={words} />
      </Paper>
      <Paper>
        <h2>{Object.keys(words).length} pokemon with narrow weighting range</h2>
        <WordCloud
          words={Object.fromEntries(
            Object.entries(words).map(([k, v]) => [k, v / 64])
          )}
        />
      </Paper>
      <Paper>
        <h2>40 pokemon</h2>
        <WordCloud
          words={Object.fromEntries(Object.entries(words).slice(0, 40))}
        />
      </Paper>
      <Paper>
        <h2>20 pokemon</h2>
        <WordCloud
          words={Object.fromEntries(Object.entries(words).slice(0, 20))}
        />
      </Paper>
      <Paper>
        <h2>10 pokemon</h2>
        <WordCloud
          words={Object.fromEntries(Object.entries(words).slice(0, 10))}
        />
      </Paper>
      <Paper>
        <h2>10 pokemon with narrow weighting range</h2>
        <WordCloud
          words={Object.fromEntries(
            Object.entries(words)
              .slice(0, 10)
              .map(([k, v]) => [k, v / 64])
          )}
        />
      </Paper>
      <Paper>
        <h2>5 pokemon</h2>
        <WordCloud
          words={Object.fromEntries(Object.entries(words).slice(0, 5))}
        />
      </Paper>
    </Paper.Group>
  );
}

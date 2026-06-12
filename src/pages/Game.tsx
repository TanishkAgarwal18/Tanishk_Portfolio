// Game.tsx
import React, { useMemo, useState } from "react";
import type { Movie } from "../data/movie";
import { movies } from "../data/movie";
import "./game.css";

type MovieCategory = Movie["category"];
const categories: MovieCategory[] = ["Bollywood", "Hollywood", "Trending"];

const getMoviesByCategory = (category?: MovieCategory) => {
  if (!category) return movies;
  return movies.filter((m) => m.category === category);
};

const getRandomMovie = (category?: MovieCategory): Movie => {
  const pool = getMoviesByCategory(category);
  return pool[Math.floor(Math.random() * pool.length)];
};

const normalize = (value: string) =>
  value.trim().toLowerCase().replace(/\s+/g, " ");

const isCorrectGuess = (guess: string, title: string) =>
  normalize(guess) === normalize(title);

export const Game: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MovieCategory | "All">(
    "Bollywood"
  );
  const [currentMovie, setCurrentMovie] = useState<Movie>(() =>
    getRandomMovie("Bollywood")
  );
  const [revealedClues, setRevealedClues] = useState(1);
  const [guess, setGuess] = useState("");
  const [status, setStatus] = useState<
    "playing" | "correct" | "wrong" | "gaveup"
  >("playing");
  const [message, setMessage] = useState("Guess the movie!");
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  const maxClues = useMemo(
    () => currentMovie.clues.length,
    [currentMovie.clues.length]
  );

  const resetForNewMovie = (cat: MovieCategory | "All", newRound: number) => {
    const actualCat = cat === "All" ? undefined : cat;
    const next = getRandomMovie(actualCat);
    setCurrentMovie(next);
    setRevealedClues(1);
    setGuess("");
    setStatus("playing");
    setMessage("New round! Guess the movie.");
    setRound(newRound);
  };

  const handleCategoryChange = (cat: MovieCategory | "All") => {
    setSelectedCategory(cat);
    // On category change, start from round 1
    resetForNewMovie(cat, 1);
  };

  const handleRevealClue = () => {
    if (status === "correct" || status === "gaveup") return;
    setRevealedClues((prev) => Math.min(prev + 1, maxClues));
    // Optional: reset "wrong" back to "playing" so message doesn’t look stuck
    if (status === "wrong") {
      setStatus("playing");
      setMessage("New clue revealed. Try again!");
    }
  };

  const handleGuessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guess.trim()) return;
    if (status === "correct" || status === "gaveup") return;

    if (isCorrectGuess(guess, currentMovie.title)) {
      setStatus("correct");
      setMessage(`Correct! It was "${currentMovie.title}".`);
      const points = Math.max(1, maxClues - revealedClues + 1);
      setScore((s) => s + points);
    } else {
      setStatus("wrong");
      setMessage("Not quite. Try again or reveal another clue.");
    }
  };

  const handleNextMovie = () => {
    const newRound = round + 1;
    resetForNewMovie(selectedCategory, newRound);
  };

  const handleGiveUp = () => {
    if (status === "correct" || status === "gaveup") return;
    setStatus("gaveup");
    setMessage(`The answer was "${currentMovie.title}".`);
    setGuess(""); // clear input so they can’t spam same field
  };

  return (
    <div className="game-page">
      <div className="game-shell">
        <header className="game-header">
          <div className="game-title-block">
            <div className="game-logo">🎬</div>
            <div>
              <h1 className="game-title">Movie Guessing Lab</h1>
              <p className="game-subtitle">
                Decode the clues, type the title, ship the guess.
              </p>
            </div>
          </div>
          <div className="game-meta">
            <div className="meta-label">Score</div>
            <div className="meta-value">{score}</div>
            <div className="meta-label">Round</div>
            <div className="meta-value">{round}</div>
          </div>
        </header>

        <main className="game-layout">
          {/* Left: control panel */}
          <section className="game-panel">
            <div className="panel-section">
              <h2 className="panel-heading">Category</h2>
              <div className="category-pills">
                {["All", ...categories].map((cat) => (
                  <button
                    key={cat}
                    onClick={() =>
                      handleCategoryChange(cat as MovieCategory | "All")
                    }
                    className={
                      selectedCategory === cat ? "pill pill-active" : "pill"
                    }
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="panel-section">
              <h2 className="panel-heading">Your guess</h2>
              <form onSubmit={handleGuessSubmit} className="guess-form">
                <input
                  type="text"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  placeholder="Type the movie title and hit Enter…"
                  className="guess-input"
                  disabled={status === "correct" || status === "gaveup"}
                />
                <button
                  type="submit"
                  disabled={status === "correct" || status === "gaveup"}
                  className="primary-btn"
                >
                  Guess
                </button>
              </form>
              <div className="panel-actions">
                <button
                  type="button"
                  onClick={handleRevealClue}
                  disabled={
                    revealedClues >= maxClues ||
                    status === "correct" ||
                    status === "gaveup"
                  }
                  className="ghost-btn"
                >
                  Reveal another clue
                </button>
                <button
                  type="button"
                  onClick={handleGiveUp}
                  disabled={status === "correct" || status === "gaveup"}
                  className="danger-btn"
                >
                  Give up
                </button>
              </div>
            </div>

            <div className="panel-footer">
              <p
                className={
                  status === "correct"
                    ? "status-text status-correct"
                    : status === "wrong"
                    ? "status-text status-wrong"
                    : status === "gaveup"
                    ? "status-text status-gaveup"
                    : "status-text"
                }
              >
                {message}
              </p>
              <button
                type="button"
                onClick={handleNextMovie}
                className="next-btn"
              >
                Next movie →
              </button>
            </div>
          </section>

          {/* Right: “real code” clue terminal */}
          <section className="game-terminal">
            <div className="terminal-header">
              <span className="terminal-dot dot-red" />
              <span className="terminal-dot dot-amber" />
              <span className="terminal-dot dot-green" />
              <span className="terminal-title">
                clues.ts • clues {revealedClues}/{maxClues}
              </span>
            </div>
            <div className="terminal-body">
              <pre className="terminal-code">
                <code>
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-identifier">movieClues</span>{" "}
                  <span className="code-operator">=</span>{" "}
                  <span className="code-punctuation">[</span>
                  {currentMovie.clues
                    .slice(0, revealedClues)
                    .map((clue, idx) => (
                      <div key={idx} className="code-line">
                        <span className="code-line-number">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="code-indent" />
                        <span className="code-string">
                          "{clue}"
                          {idx < revealedClues - 1 ? "," : ""}
                        </span>
                      </div>
                    ))}
                  <div className="code-line">
                    <span className="code-line-number">
                      {String(revealedClues + 1).padStart(2, "0")}
                    </span>
                    <span className="code-indent" />
                    <span className="code-punctuation">];</span>
                  </div>
                </code>
              </pre>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Game;

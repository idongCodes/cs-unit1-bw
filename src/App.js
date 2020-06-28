import React from "react";
import Game from "./Game";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Game />
      <h1>Welcome to Conway's Game of Life</h1>
      <h3>What is it?</h3>
      <p>
        A <strong>cellular automaton</strong> (
        <i>
          an application that includes a grid of cells, each w on and off states
        </i>
        ) implemented by a Brit Mathematician, John Horton Conway, 1970. This
        game is meant to depict real life in that a cells evolution is depends
        on its initial state, which the user sets and then observes as it
        evolves. It has been described as <strong>Turing complete</strong>,
        meaning the algorithm has the capacity to recognise and or decide a
        different set of rules to manipulate data. This concept was named after
        the great Computer Scientist, Alan Turing.
      </p>
      <h3>The Rules</h3>
      <ul>
        <li>
          Any live cell with fewer than 2 live neighbors dies, as if by
          underpopulation
        </li>
        <li>
          Any live cell with 2 or 3 live neighbors lives on to the next
          generation.
        </li>
        <li>
          Any live cell with more than 3 live neighbors dies, as if by
          overpopulation.
        </li>
        <li>
          Any dead cell with exactly 3 live neighbors becomes a live cell, as if
          by reproduction.
        </li>
      </ul>
      <h3>How to Play</h3>
      <p>
        Click on a cell to toggle its{" "}
        <strong>
          <i>on/off</i>
        </strong>{" "}
        state. Once satisfied w initial state, click the{" "}
        <span className="btn">Run</span> button. Click{" "}
        <span className="btn">Stop</span> to end iterations. Click{" "}
        <span className="btn">Clear</span> to clear the grid. If you would like
        to observe random evolutions, click <span className="btn">Random</span>.
      </p>
      <p className="copyright">
        Copyright &copy; {new Date().getFullYear()}.{" "}
        <i>Conway's Game of Life</i>.{" "}
        <a href="https://twitter.com/idngessnio" target="_blank">
          Idong Essien
        </a>
      </p>
    </div>
  );
};

export default App;

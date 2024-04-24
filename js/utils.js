export const TETRISFIELD_COLUMNS = 17;
export const TETRISFIELD_ROWS = 22;
export const NEXT_FIGURE_COLUMNS = 5;
export const NEXT_FIGURE_ROWS = 8;

export const TETRISFIGURES_NAMES = [
  "O",
  "L",
  "I",
  "J",
  "X",
  "T",
  "S",
  "Z",
  "D",
  "R",
  "B",
];

export const TETRISFIGURES_SHAPES = {
  O: [
    [1, 1],
    [1, 1],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  I: [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  X: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],
  T: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  D: [[1]],
  R: [
    [1, 1],
    [0, 1],
  ],
  B: [
    [1, 1],
    [0, 0],
  ],
};

export const btnRestart = document.querySelector(".restart");
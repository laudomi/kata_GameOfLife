# Conway's Game of Life

#### Introducction

Life is a cellular automation devised by the British mathematician John Horton Conway in 1970.<br>

It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One plays the game by creating an initial world and observing how it evolves over time.<br>


#### The Rules

Life is played out in a world which is a two-dimensional rectangular grid of square cells. Each cell may be in one of two states: living or dead.<br>

The state of the world is called a generation. A generation is defined by which cells in the world are living and which are dead.<br>

To get the game started, a user must supply the first generation.<br>

In each turn of the game, the world evolves from one generation to the next. The state of each cell in the next generation is based upon (1) its current state and (2) how many neighbors it has.<br>

Neighbors are those cells horizontally, vertically, or diagonally adjacent to a cell.<br>

There are four rules for deciding if a cell lives or dies:<br>

**1. The Under-Population Rule**<br>
Any living cell with fewer than 2 living neighbors dies<br>

**2. The Survival Rule**<br>
Any living cell with 2 or 3 living neighbors lives on<br>

**3. The Overcrowding Rule**<br>
Any living cell with more than 3 living neighbors dies<br>

**4. The Birth Rule**<br>
Any dead cell with exactly 3 living neighbors comes to life<br><br>

Each generation is created by applying these rules simultaneously to every cell using the previous generation. Births and deaths occur simultaneously. In other words, each generation is a pure function of the preceding one.<br>

The world evolves repeatedly to create further generations. This can go on infinitely or until stopped by the user.<br>

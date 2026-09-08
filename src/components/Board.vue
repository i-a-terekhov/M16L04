<script setup>
import Cell from "./Cell.vue";
import { ref } from "vue";
import gameProcess from "../utils/game-process.js";

const board = ref([
  ['', '', '',],
  ['', '', '',],
  ['', '', '',],
]);

function doMoveHandler(i, j, value) {
  board.value[i][j] = value;

  if (gameProcess.checkPlayerWin(board.value, 'x')) {
    // user win
    alert('user win');
  } else {
    botMove();
  }
}

function botMove() {
  setTimeout(() => {
    const botMoving = gameProcess.botMoving(board.value);
    if (botMoving) {
      board.value[botMoving.i][botMoving.j] = 'o';
      if (gameProcess.checkPlayerWin(board.value, 'o')) {
        // bot win
        alert('bot win');
      }
    } else {
      // draw game
      alert('draw game');
    }
  }, 300);
}
</script>

<template>
  <div class="board">
    <template v-for="(iValue, i) in board">
      <template v-for="(jValue, j) in iValue">
        <Cell :value="jValue" @do-move="(value) => doMoveHandler(i, j, value)"/>
      </template>
    </template>

  </div>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  border: 3px solid #d0d0d0;
}
</style>

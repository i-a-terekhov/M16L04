<script setup>
import Board from "./components/Board.vue";
import Score from "./components/Score.vue";
</script>

<template>
  <div class="title">
    Крестики-нолики
  </div>

  <div class="game">
    <Board/>
    <Score/>
  </div>
</template>

<style scoped>
.title {
  font-size: 40px;
  color: white;
  text-align: center;
  margin-top: 50px;
}

.game {
  max-width: 324px;
  margin: 50px auto;
}

.board {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  border: 3px solid #d0d0d0;
}

.square {
  width: 100px;
  height: 100px;
  border: 3px solid #d0d0d0;
  cursor: pointer;
  position: relative;
}

.square .x,
.square .o {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.square .x::before,
.square .x::after {
  position: absolute;
  content: '';
  width: 80px;
  height: 10px;
  background-color: white;
}

.square .x::before {
  transform: rotate(45deg);
}

.square .x::after {
  transform: rotate(-45deg);
}

.square .o::before {
  content: "";
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid white;
}

.score {
  color: white;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  text-align: center;
}

.score-title {
  font-size: 24px;
}

.score-result {
  font-size: 21px;
}
</style>

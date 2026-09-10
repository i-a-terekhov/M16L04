<script setup>
import Board from "./components/Board.vue";
import Score from "./components/Score.vue";
import { ref } from "vue";
import { Modal } from 'usemodal-vue3';

const score = ref({
  user: 0,
  bot: 0,
  draw: 0,
});
const childBoard = ref(null);
const isPopupVisible = ref(false);
const gameResult = ref('');

function endHandler(winner) {
  switch (winner) {
    case "user":
      score.value.user++;
      gameResult.value = 'Вы победили!';
      break;
    case "bot":
      score.value.bot++;
      gameResult.value = 'Вы проиграли!';
      break;
    case "draw":
      score.value.draw++;
      gameResult.value = 'Ничья!';
      break;
  }
  openPopup();
}

function closePopup() {
  isPopupVisible.value = false;
}

function openPopup() {
  isPopupVisible.value = true;
}

function onClosePopup() {
  if (childBoard.value) {
    childBoard.value.endGame();
  }
}

</script>

<template>
  <div class="title">
    Крестики-нолики
  </div>

  <div class="game">
    <Board @end="endHandler" ref="childBoard"/>
    <Score :score="score"/>
  </div>

  <Modal v-model:visible="isPopupVisible" @onUnVisible="onClosePopup" :type="'clean'" :modalClass="'popup'">
    <span class="close" @click="closePopup">&times;</span>
    <div> {{ gameResult }}</div>
    <button class="button" @click="closePopup">Новая игра</button>
  </Modal>
</template>

<style>
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

.modal-vue3-content {
  border-radius: 5px;
  border: 0;
  background: #2b9595;
  color: white;
  max-width: 250px;
  text-align: center;
  padding: 20px;
}

.modal-vue3-content .close {
  cursor: pointer;
  position: absolute;
  display: block;
  right: 5px;
  top: -5px;
  font-size: 24px;
}

.button {
  padding: 10px 20px;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  background: black;
  border: 0;
  border-radius: 5px;
}
</style>

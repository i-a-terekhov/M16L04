<script setup>
import Cell from "./Cell.vue";
</script>

<template>
  <div class="board">
    <Cell/>
    <Cell/>
    <Cell/>
    <Cell/>
    <Cell/>
    <Cell/>
    <Cell/>
    <Cell/>
    <Cell/>
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

<script setup>
</script>

<template>
  <div class="square">
    <div class="o"></div>
  </div>
</template>

<style scoped>
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
</style>

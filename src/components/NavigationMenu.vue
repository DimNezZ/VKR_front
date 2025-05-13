<template>
  <div class="menu_wrapper" v-for="(block, index) in navigation_blocks" :key="index">
    <div class="title_container" @click="toggleBlock(index)">
      <div class="menu_title">{{ block.title }}</div>
      <div class="menu_button" :class="{ rotated: !block.isOpen }">
        <img src="../assets/arrow.svg" alt="" />
      </div>
    </div>
    <Transition name="roll_up">
      <div class="navigation_container" v-show="block.isOpen">
        <div class="menu_item" v-for="item in block.items" :key="item.id">
          <div class="item_name">{{ item.name }}</div>
          <div class="item_description">{{ item.description }}</div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

function toggleBlock(index) {
  navigation_blocks[index].isOpen = !navigation_blocks[index].isOpen
}

const navigation_blocks = reactive([
  {
    title: 'Название 1',
    isOpen: true,
    items: [
      { id: 1, name: 'Название расчета 1', description: 'Описание для расчета 1' },
      { id: 2, name: 'Название расчета 2', description: 'Описание' },
    ],
  },
  {
    title: 'Название 2',
    isOpen: true,
    items: [
      {
        id: 3,
        name: 'Название расчета 3',
        description: 'Длинное описание для расчета 3 Длинное описание для расчета 3',
      },
      { id: 4, name: 'Название расчета 4', description: 'Описание для расчета 3' },
      { id: 5, name: 'Название расчета 4', description: 'Описание для расчета 5' },
      { id: 6, name: 'Название расчета 4', description: 'Описание для расчета 6' },
    ],
  },
])
</script>

<style scoped>
.menu_wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 360px;
  padding: var(--medium-padding-x) var(--medium-padding-y);
  background-color: var(--color-blue-primary);
  border-radius: var(--control-border-radius);
}
.title_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-white);
  cursor: pointer;
}
.menu_title {
  font-size: var(--large-font-size);
  font-weight: 800;
}
.menu_button img {
  display: block;
  width: 28px;
  height: 28px;
  transition: transform 0.5s ease;
}
.menu_button.rotated img {
  transform: rotate(-180deg);
}
.navigation_container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--color-black);
  overflow: hidden;
}
.menu_item {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: var(--color-alabaster);
  border-radius: var(--control-border-radius);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
}
.item_name {
  font-size: var(--medium-font-size);
}
.item_description {
  font-size: var(--small-font-size);
}
.roll_up-enter-active,
.roll_up-leave-active {
  transition: all 0.5s ease;
  overflow: hidden;
}
.roll_up-enter-from,
.roll_up-leave-to {
  max-height: 0;
  opacity: 0;
}
.roll_up-enter-to,
.roll_up-leave-from {
  max-height: 1000px;
  opacity: 1;
}
@media (max-width: 768px) {
  .menu_wrapper {
    width: 330px;
  }
  .menu_title {
    font-size: var(--big-font-size);
  }
  .menu_button img {
    width: 26px;
    height: 26px;
  }
}
@media (max-width: 480px) {
  .menu_wrapper {
    width: 330px;
  }
  .item_name {
    font-size: var(--small-font-size);
  }
  .menu_button img {
    width: 24px;
    height: 24px;
  }
}
</style>

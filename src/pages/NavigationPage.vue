<template>
  <TheHeader></TheHeader>
  <TheContainer variant="row">
    <NavigationMenu :blocks="navigationBlocks" />
  </TheContainer>
  <TheFooter></TheFooter>
</template>

<script setup>
import TheHeader from '@/components/blocks/TheHeader.vue'
import TheFooter from '@/components/blocks/TheFooter.vue'
import TheContainer from '@/components/TheContainer.vue'
import NavigationMenu from '@/components/NavigationMenu.vue'

const navigationBlocks = [
  {
    title: 'Расчёты растворов',
    isOpen: true,
    items: [
      {
        id: 1,
        name: 'Смешивание растворов',
        description: 'Получение необходимой плотности при смешивании растворов',
        path: 'mixing-mortars',
      },
      {
        id: 2,
        name: 'Изменение плотности при добавлении раствора',
        description: 'Коррекция плотности раствора до заданного уровня',
        path: 'changing-density-by-adding-mortar',
      },
      {
        id: 3,
        name: 'Количество добавляемой воды для уменьшения плотности раствора',
        description: 'Снижение плотности раствора при помощи добавления воды',
        path: 'water-quantity-to-decrease-mortar-density',
      },
      {
        id: 4,
        name: 'Утяжеление раствора',
        description: 'Повышение плотности бурового раствора до необходимого уровня',
        path: 'mortar-weightning',
      },
      {
        id: 5,
        name: 'Объём скважины',
        description:
          'Определение объёмов жидкостей, которые нужно подготовить для выполнения действий',
        path: 'well-volume',
      },
    ],
  },
  {
    title: 'Расчеты ГНПВ',
    isOpen: true,
    items: [
      {
        id: 6,
        name: 'Лист глушения при ГНПВ',
        description: 'Расчёт параметров для листа глушения при газонефтеводопроявлении',
        path: 'gnpv',
      },
    ],
  },
  {
    title: 'Расчеты цементного моста',
    isOpen: true,
    items: [
      {
        id: 7,
        name: 'Установка цементного моста',
        description: 'Расчет для временной или постоянной изоляции определённого участка скважины',
        path: 'cement-bridge-installation',
      },
      {
        id: 8,
        name: 'Установка цементного моста с учетом балансировки',
        description:
          'Установка цементного моста таким образом, чтобы давление сверху и снизу было уравновешено',
        path: 'cement-bridge-installation-on-balance',
      },
    ],
  },
]
</script>

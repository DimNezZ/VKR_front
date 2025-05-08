<template>
  <div class="footer_wrapper">
    <div class="left_column">
      <div class="field_container">
        <ContactDataWrapper text="Томск, просп. Ленина, 30" />
        <ContactDataWrapper text="TPUDrillSoft@mail.ru" />
        <ContactDataWrapper text="+7 (999) 999-99-99" />
      </div>
    </div>

    <div class="center_column">
      <TheLogo text="© 2025 “TpuDrillSoft”. Расчеты для буровиков" />
    </div>

    <div class="right_column">
      <div class="field_container">
        <ContactDataWrapper text="Политика конфиденциальности" />
        <ContactDataWrapper text="Условия пользования" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ContactDataWrapper from '../ContactDataWrapper.vue'
import TheLogo from '../TheLogo.vue'
// import { useMediaQuery } from '@vueuse/core'

// const isMobile = useMediaQuery('(max-width: 768px)')
</script>

<style scoped>
.footer_wrapper {
  display: flex;
  align-items: center;
  background-color: #0070ba;
  padding: 20px 30px;
}

.left_column {
  display: flex;
  width: 38%;
  justify-content: left;
}
.right_column {
  display: flex;
  width: 38%;
  justify-content: right;
}
.center_column {
  display: flex;
  width: 24%;
  justify-content: center;
}

.field_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

@media (max-width: 1480px) {
  .footer_wrapper {
    padding: 20px 20px;
    gap: 10px;
  }
  .left_column {
    display: flex;
    width: 33.3%;
    justify-content: left;
  }
  .right_column {
    display: flex;
    width: 33.3%;
    justify-content: right;
  }
  .center_column {
    display: flex;
    width: auto;
    justify-content: center;
  }
  .field_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .footer_wrapper {
    display: flex;
    align-items: center;
    background-color: #0070ba;
    padding: 20px 10px;
    gap: 10px;
  }

  .left_column {
    display: flex;
    width: auto;
    justify-content: left;
  }
  .right_column {
    display: flex;
    width: auto;
    justify-content: right;
  }
  .center_column {
    display: flex;
    width: auto;
    justify-content: center;
  }

  .field_container {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .footer_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0070ba;
    padding: 10px 0;
    gap: 10px;
  }

  .left_column {
    display: flex;
    width: auto;
    justify-content: left;
  }
  .right_column {
    display: flex;
    width: auto;
    justify-content: right;
  }
  .center_column {
    display: flex;
    width: auto;
    justify-content: center;
  }

  .field_container {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
}
</style>

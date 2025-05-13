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
</script>

<style scoped>
.footer_wrapper {
  display: flex;
  align-items: center;
  background-color: var(--color-blue-secondary);
  padding: var(--large-padding-x) 30px;
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
    padding: var(--large-padding-x) var(--large-padding-y);
    gap: 10px;
  }
  .left_column {
    width: 33.3%;
  }
  .right_column {
    width: 33.3%;
  }
  .center_column {
    width: auto;
  }
  .field_container {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .footer_wrapper {
    padding: var(--large-padding-x) var(--medium-padding-y);
  }
}

@media (max-width: 560px) {
  .footer_wrapper {
    flex-direction: column;
    padding: var(--medium-padding-x) 0;
  }
  .left_column {
    width: auto;
  }
  .right_column {
    width: auto;
  }
  .field_container {
    gap: 5px;
  }
}
</style>

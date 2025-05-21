<template>
  <div class="footer_wrapper">
    <div class="left_column">
      <div class="field_container">
        <ContactDataWrapper
          href="https://2gis.ru/tomsk/search/%D0%A2%D0%9F%D0%A3%20%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9/firm/423196012851308/84.950144%2C56.465419?m=84.956434%2C56.463892%2F15.82"
          text="Томск, просп. Ленина, 30"
        />
        <ContactDataWrapper href="mailto:mail@htmlacademy.ru" text="TPUDrillSoft@mail.ru" />
        <ContactDataWrapper href="tel:+79999999999" text="+7 (999) 999-99-99" />
      </div>
    </div>

    <div class="center_column">
      <TheLogo text="© 2025 “TpuDrillSoft”. Расчеты для буровиков" />
    </div>

    <div class="right_column">
      <div class="field_container">
        <RouterLink to="/privacy-policy">
          <ContactDataWrapper text="Политика конфиденциальности" />
        </RouterLink>
        <RouterLink to="/condition-of-use">
          <ContactDataWrapper text="Условия пользования" />
        </RouterLink>
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
  padding: var(--large-padding-y) 30px;
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
    padding: var(--large-padding-y) var(--large-padding-x);
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
    padding: var(--large-padding-y) var(--medium-padding-x);
  }
}

@media (max-width: 560px) {
  .footer_wrapper {
    flex-direction: column;
    padding: var(--medium-padding-y) 0;
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

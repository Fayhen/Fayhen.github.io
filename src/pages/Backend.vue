<template>
  <q-page class="column items-center justify-evenly">
    <transition-group
      appear
      tag="div"
      class="backend-wrapper"
      enter-active-class="animated fadeInUp"
    >
      <p key="text-backend-title animation-delay: 0.1s;">
        {{ $t('backend.title') }}
      </p>
      <p key="text-backend-intro" style="animation-delay: 0.2s;">
        {{ $t('backend.intro') }}
      </p>
    </transition-group>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Backend extends Vue{}
</script>

<style lang="sass" scoped>
.backend-wrapper
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
</style>

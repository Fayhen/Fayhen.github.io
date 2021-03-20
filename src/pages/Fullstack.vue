<template>
  <q-page class="column items-center justify-evenly">
    <transition-group
      appear
      tag="div"
      class="fullstack-wrapper"
      enter-active-class="animated fadeInUp"
    >
      <p key="text-fullstack-title animation-delay: 0.1s;">
        {{ $t('fullstack.title') }}
      </p>
      <p key="text-fullstack-intro" style="animation-delay: 0.2s;">
        {{ $t('fullstack.intro') }}
      </p>
    </transition-group>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Fullstack extends Vue{}
</script>

<style lang="sass" scoped>
.fullstack-wrapper
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
</style>
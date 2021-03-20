<template>
  <q-page class="column items-center justify-evenly">
    <transition-group
      appear
      tag="div"
      class="academic-wrapper"
      enter-active-class="animated fadeInUp"
    >
      <p key="text-academic-title animation-delay: 0.1s;">
        {{ $t('academic.title') }}
      </p>
      <p key="text-academic-intro" style="animation-delay: 0.2s;">
        {{ $t('academic.intro') }}
      </p>
      <p key="text-academic-detail" style="animation-delay: 0.3s;">
        {{ $t('academic.detail') }}
      </p>
      <p key="text-academic-expertise" style="animation-delay: 0.4s;">
        {{ $t('academic.expertise') }}
      </p>
      <p key="text-academic-conclusion" style="animation-delay: 0.5s;">
        {{ $t('academic.conclusion') }}
      </p>
    </transition-group>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Academic extends Vue{}
</script>

<style lang="sass" scoped>
.academic-wrapper
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
</style>

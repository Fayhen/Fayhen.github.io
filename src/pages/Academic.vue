<template>
  <q-page class="column items-center justify-evenly text-body1">
    <transition-group
      appear
      tag="div"
      class="q-page-inner-wrapper"
      enter-active-class="animated fadeInUp"
    >
      <!-- <p key="text-academic-title" style="animation-delay: 0.1s;">
        {{ $t('academic.title') }}
      </p> -->
      <p key="text-academic-intro" style="animation-delay: 0.1s;">
        {{ $t('academic.intro') }}
      </p>
      <p key="text-academic-detail" style="animation-delay: 0.2s;">
        {{ $t('academic.detail') }}
      </p>
      <p key="text-academic-expertise" style="animation-delay: 0.3s;">
        {{ $t('academic.expertise') }}
      </p>
      <p key="text-academic-conclusion" style="animation-delay: 0.4s;">
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

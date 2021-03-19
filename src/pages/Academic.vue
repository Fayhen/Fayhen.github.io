<template>
  <q-page class="column items-center justify-evenly">
    <p>{{ $t('academic.title') }}</p>
    <p>{{ $t('academic.intro') }}</p>
    <p>{{ $t('academic.detail') }}</p>
    <p>{{ $t('academic.expertise') }}</p>
    <p>{{ $t('academic.conclusion') }}</p>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Academic extends Vue{}
</script>
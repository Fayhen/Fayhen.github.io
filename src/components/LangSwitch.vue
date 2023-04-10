<template>
  <div id="switch-wrapper" class="q-pl-xs bg-indigo-1">
    <q-select
      v-model="locale"
      :options="localeOptions"
      :label="$t('menus.langSwitchLabel')"
      dense
      borderless
      emit-value
      map-options
      options-dense
      :dropdown-icon="matArrowDropUp"
      style="min-width: 150px"
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { matArrowDropUp } from '@quasar/extras/material-icons';

const { locale } = useI18n({ useScope: 'global' });

const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'pt-BR', label: 'Português' },
];
</script>

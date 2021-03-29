<template>
  <div id="switch-wrapper" class="q-pl-xs bg-indigo-1">
    <q-select
      v-model="lang"
      :options="langOptions"
      :label="$t('menus.langSwitchLabel')"
      dense
      borderless
      emit-value
      map-options
      options-dense
      :dropdown-icon="dropdownIcon"
      style="min-width: 150px;"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { matArrowDropUp } from '@quasar/extras/material-icons';

@Component
export default class LangSwitch extends Vue {
  dropdownIcon = matArrowDropUp;
  lang = this.$i18n.locale;
  langOptions = [
    { value: 'en-us', label: 'English' },
    { value: 'pt', label: 'Português' }
  ];

  @Watch('lang')
  langChange(newLang: string) {
    this.$i18n.locale = newLang;
  }
}
</script>
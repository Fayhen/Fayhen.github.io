<template>
  <q-select
    v-model="lang"
    :options="langOptions"
    label="Change Language"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
  />
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
export default class LangSwitch extends Vue {
  lang = this.$i18n.locale;
  langOptions = [
    { value: 'en-us', label: 'English' },
    { value: 'pt', label: 'Português' }
  ];

  @Watch('lang')
  langChange(newLang: string) {
    this.$i18n.locale = newLang
  }
}
</script>
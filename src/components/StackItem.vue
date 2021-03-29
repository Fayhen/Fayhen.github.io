<template>
  <div :aria-label="ariaLabel">
    <q-tooltip>{{ tooltip }}</q-tooltip>
    <q-icon
      :id="iconId"
      :name="iconFilepath"
      :size="iconSizeClass"
      :class="iconQuasarClasses"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class StackItem extends Vue {
  @Prop({ type: String, required: true }) readonly ariaLabel!: string;
  @Prop({ type: String, required: true }) readonly tooltip!: string;
  @Prop({ type: String, required: true }) readonly iconId!: string;
  @Prop({ type: String, required: true }) readonly iconFilepath!: string;
  @Prop({ type: String, required: true }) readonly iconSizeClass!: string;
  @Prop(
    { type: String, required: false, default: '' }
  ) readonly iconQuasarClasses!: string;
};
</script>

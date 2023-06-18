<template>
  <div :aria-label="ariaLabel">
    <a :href="link" target="_blank" rel="noopener noreferrer">
      <q-tooltip class="bg-indigo-10 text-caption">{{ tooltip }}</q-tooltip>
      <q-icon
        :id="iconId"
        :name="iconFilepath"
        :size="iconSizeClass"
        :class="iconQuasarClasses"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps({
  ariaLabel: { type: String, required: true },
  link: { type: String, required: true },
  iconFilepath: { type: String, required: true },
  iconId: { type: String, required: true },
  iconQuasarClasses: { type: String, required: false, default: '' },
  iconSizeClass: { type: String, required: true },
  tooltip: { type: String, required: true },
});
</script>

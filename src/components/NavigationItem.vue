<template>
  <router-link :to="route" style="text-decoration: none; color: inherit">
    <q-item>
      <q-item-section avatar>
        <q-icon :name="icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-weight-medium">
          {{ $t(label) }}
        </q-item-label>
        <q-item-label caption>
          {{ $t(caption) }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </router-link>
</template>

<script setup lang="ts">
import { fasGlobe } from '@quasar/extras/fontawesome-v5';

defineProps({
  icon: { type: String, required: false, default: fasGlobe },
  route: { type: String, required: true, default: '/' },
  label: { type: String, required: true },
  caption: { type: String, required: true },
});
</script>

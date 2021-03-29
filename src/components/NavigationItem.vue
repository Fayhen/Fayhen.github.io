<template>
  <router-link
    :to="route"
    style="text-decoration: none; color: inherit;"
  >
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

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class NavigationItem extends Vue {
  @Prop({ type: String, default: 'fas fa-globe' }) readonly icon!: string;
  @Prop({ type: String, required: true }) readonly route!: string;
  @Prop({ type: String, required: true }) readonly label!: string;
  @Prop({ type: String, required: true }) readonly caption!: string;
}
</script>

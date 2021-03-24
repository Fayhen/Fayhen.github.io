<template>
  <q-card flat>

    <q-card-section class="bg-primary text-white">
        <div class="text-h6">{{ title }}</div>
        <div class="text-subtitle2">{{ description }}</div>
    </q-card-section>

    <q-card-section horizontal>

      <q-card-section>
        <div class="text-subtitle2">Stacks:</div>
        <q-icon
          size="sm"
          id="python"
          name="img:devicons/python-original.svg"
        />
        <q-icon
          size="sm"
          id="python"
          name="img:devicons/python-original.svg"
        />
        <q-icon
          size="sm"
          id="python"
          name="img:devicons/python-original.svg"
        />
      </q-card-section>

      <q-separator vertical />

      <q-card-section>
        <div class="text-subtitle2">Links:</div>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          style="text-decoration: none; color: inherit;"
        >
          <q-btn
            flat
            dense
            round
            icon="fab fa-github"
            aria-label="GitHub"
          />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          style="text-decoration: none; color: inherit;"
        >
          <q-btn
            flat
            dense
            round
            icon="fas fa-globe"
            aria-label="GitHub"
          />
        </a>
      </q-card-section>

    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ProjectCard extends Vue {
  @Prop({ type: String, default: 'fas fa-globe' }) readonly icon!: string;
  @Prop({ type: String, default: 'placeholder-text' }) readonly title!: string;
  @Prop({ type: String, default: 'Placeholder description.' }) readonly description!: string;
}
</script>

<template>
  <q-card class="q-mb-sm text-left">

    <q-card-section class="bg-indigo-7 text-indigo-1">
        <div class="text-h6">{{ $t(title) }}</div>
        <div class="text-subtitle2">{{ $t(description) }}</div>
    </q-card-section>

    <q-card-section horizontal>

      <q-card-section class="full-width">
        <div class="text-left text-subtitle2">Stacks:</div>
        <q-icon
          v-for="icon in iconsArray"
          :key="icon.id"
          size="md"
          :id="icon.id"
          :name="icon.filepath"
          class="q-ma-xs"
        />
      </q-card-section>

      <q-separator vertical />

      <q-card-section style="width: 225px;">
        <div class="text-subtitle2">Links:</div>
        <div class="flex justify-center text-center text-indigo-7">
          <a
            v-if="repositoryLink"
            :href="repositoryLink"
            target="_blank"
            rel="noopener noreferrer"
            style="text-decoration: none; color: inherit;"
          >
            <q-btn
              flat
              dense
              round
              size="1.2em"
              icon="fab fa-github"
              aria-label="Source code link"
            />
          </a>
          <a
            v-if="productionLink"
            :href="productionLink"
            target="_blank"
            rel="noopener noreferrer"
            style="text-decoration: none; color: inherit;"
          >
            <q-btn
              flat
              dense
              round
              size="1.2em"
              icon="fas fa-globe"
              aria-label="Published project link"
            />
          </a>
        </div>
      </q-card-section>

    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Devicon } from 'components/models';

@Component
export default class ProjectCard extends Vue {
  // @Prop({ type: String, default: 'fas fa-globe' }) readonly icon!: string;
  @Prop({ type: Array }) readonly iconsArray!: Devicon[];
  @Prop(
    { type: String, default: 'Title' }
  ) readonly title!: string;
  @Prop(
    { type: String, default: 'Description.' }
  ) readonly description!: string;
  @Prop(
    { type: String, required: false, default: null}
  ) readonly repositoryLink!: string | null;
  @Prop(
    { type: String, required: false, default: null}
  ) readonly productionLink!: string | null;
}
</script>

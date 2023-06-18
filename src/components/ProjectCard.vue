<template>
  <q-card class="q-mb-sm text-left">
    <q-card-section class="row bg-indigo-8 text-indigo-1">
      <div class="text-h6">{{ $t(title) }}</div>
      <q-space />
      <q-card-actions class="no-padding self-stretch">
        <q-btn
          unelevated
          :icon="expanded ? matKeyboardArrowUp : matKeyboardArrowDown"
          @click="expanded = !expanded"
        >
          <q-tooltip>Details</q-tooltip>
        </q-btn>
      </q-card-actions>
    </q-card-section>

    <q-slide-transition>
      <div id="project-detail" v-show="expanded">
        <q-card-section class="bg-indigo-1">
          <div class="text-subtitle2">{{ $t(description) }}</div>
        </q-card-section>

        <q-card-section horizontal>
          <q-card-section class="full-width">
            <div class="text-left text-subtitle2">Stacks:</div>
            <div class="row">
              <StackItem
                v-for="stack in iconsArray"
                :key="stack.key"
                :ariaLabel="stack.ariaLabel"
                :link="stack.link"
                :tooltip="stack.tooltip"
                :iconId="stack.icon.id"
                :iconFilepath="stack.icon.filepath"
                iconSizeClass="md"
                iconQuasarClasses="q-ma-xs"
              />
            </div>
          </q-card-section>

          <q-separator vertical />

          <q-card-section style="width: 225px">
            <div class="text-subtitle2">Links:</div>
            <div class="flex justify-center text-center text-indigo-8">
              <a
                v-if="repositoryLink"
                :href="repositoryLink"
                target="_blank"
                rel="noopener noreferrer"
                style="text-decoration: none; color: inherit"
              >
                <q-btn
                  flat
                  dense
                  round
                  size="1.1em"
                  :icon="fabGithub"
                  aria-label="Source code link"
                />
              </a>
              <a
                v-if="productionLink"
                :href="productionLink"
                target="_blank"
                rel="noopener noreferrer"
                style="text-decoration: none; color: inherit"
              >
                <q-btn
                  flat
                  dense
                  round
                  size="1.1em"
                  :icon="fasGlobe"
                  aria-label="Published project link"
                />
              </a>
            </div>
          </q-card-section>
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { fasGlobe, fabGithub } from '@quasar/extras/fontawesome-v5';
import {
  matKeyboardArrowUp,
  matKeyboardArrowDown,
} from '@quasar/extras/material-icons';
import { StackData } from 'components/models';
import StackItem from 'components/StackItem.vue';

interface Props {
  iconsArray: StackData[];
  title: string;
  description: string;
  repositoryLink: string | null;
  productionLink: string | null;
  index: number;
}

const props = withDefaults(defineProps<Props>(), {
  iconsArray: () => [],
  title: 'Title',
  description: 'Description',
  repositoryLink: null,
  productionLink: null,
  index: -1,
});

const expanded = ref(false);

onBeforeMount(() => {
  if (props.index === 0) {
    expanded.value = true;
  }
});
</script>

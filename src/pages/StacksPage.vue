<template>
  <q-page class="column items-center justify-evenly text-center text-body1">
    <div class="q-page-inner-wrapper">
      <transition-group appear tag="div" enter-active-class="animated fadeInUp">
        <p key="stacks-intro" style="animation-delay: 0.1s">
          {{ $t('stacks.intro') }}
        </p>
        <p key="stacks-detail" style="animation-delay: 0.2s">
          {{ $t('stacks.detail') }}
        </p>
      </transition-group>

      <div class="flex column items-center">
        <transition appear enter-active-class="animated fadeInUp">
          <p key="stacks-proficient" style="animation-delay: 0.3s">
            {{ $t('stacks.proficiency') }}
          </p>
        </transition>

        <div id="icon-wrapper">
          <transition-group
            appear
            tag="div"
            enter-active-class="animated fadeInUp"
            class="row justify-center"
          >
            <StackItem
              v-for="(stack, index) in proficientStacks"
              :key="stack.key"
              :ariaLabel="stack.ariaLabel"
              :link="stack.link"
              :tooltip="stack.tooltip"
              :iconId="stack.icon.id"
              :iconFilepath="stack.icon.filepath"
              iconSizeClass="xl"
              iconQuasarClasses="q-ma-sm"
              :style="`animation-delay: ${proficientStackDelay + 0.1 * (index + 1)}s;`"
            />
          </transition-group>
        </div>

        <transition appear enter-active-class="animated fadeInUp">
          <p
            key="stacks-ongoing"
            class="q-mt-xl"
            :style="`animation-delay: ${postProficientStackDelay}s;`"
          >
            {{ $t('stacks.ongoing') }}
          </p>
        </transition>

        <div id="icon-wrapper">
          <transition-group
            appear
            tag="div"
            enter-active-class="animated fadeInUp"
            class="row justify-center"
          >
            <StackItem
              v-for="(stack, index) in ongoingStacks"
              :key="stack.key"
              :ariaLabel="stack.ariaLabel"
              :link="stack.link"
              :tooltip="stack.tooltip"
              :iconId="stack.icon.id"
              :iconFilepath="stack.icon.filepath"
              iconSizeClass="xl"
              iconQuasarClasses="q-ma-sm"
              :style="`animation-delay: ${ongoingStackDelay + 0.1 * (index + 1)}s;`"
            />
          </transition-group>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { stacks } from 'assets/stacks';
import StackItem from 'components/StackItem.vue';

const proficientStacks = Object.values(stacks).filter((stack) => {
  return stack.proficient
});
const ongoingStacks = Object.values(stacks).filter((stack) => {
  return !stack.proficient
});

const proficientStackDelay = 0.3;
const postProficientStackDelay = proficientStackDelay + parseFloat((proficientStacks.length * 0.1).toFixed(1));
const ongoingStackDelay = postProficientStackDelay + 0.1;
</script>

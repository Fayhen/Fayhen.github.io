<template>
  <q-page class="column items-center justify-evenly text-center text-body1">

    <div class="q-page-inner-wrapper">

      <transition-group
        appear
        tag="div"
        enter-active-class="animated fadeInUp"
      >
        <p key="stacks-intro" style="animation-delay: 0.1s;">
          {{ $t('stacks.intro') }}
        </p>
        <p key="stacks-detail" style="animation-delay: 0.2s;">
          {{ $t('stacks.detail') }}
        </p>
      </transition-group>

        <div class="flex column items-center">

          <transition appear enter-active-class="animated fadeInUp">
            <p key="stacks-techs" style="animation-delay: 0.3s;">
              {{ $t('stacks.techs') }}
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
                v-for="stack, index in stacks"
                :key="stack.key"
                :aria-label="stack.ariaLabel"
                :tooltip="stack.tooltip"
                :iconId="stack.icon.id"
                :iconFilepath="stack.icon.filepath"
                iconSizeClass="xl"
                iconQuasarClasses="q-ma-sm"
                :style="`animation-delay: ${deviconDelay + (0.1 * (index + 1))}s;`"
              />
            </transition-group>
          </div>

        </div>

    </div>

  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { stacks } from 'assets/stacks';
import StackItem from 'components/StackItem.vue';

@Component({
  components: { StackItem }
})
export default class Stacks extends Vue {
  stacks = Object.values(stacks);
  deviconDelay = 0.3;
};
</script>

<template>
  <q-page class="column items-center justify-evenly">
    <transition-group
      appear
      tag="div"
      class="frontend-wrapper"
      enter-active-class="animated fadeInUp"
    >
      <p key="text-frontend-title animation-delay: 0.1s;">
        {{ $t('frontend.title') }}
      </p>
      <p key="text-frontend-intro" style="animation-delay: 0.2s;">
        {{ $t('frontend.intro') }}
      </p>
    </transition-group>
    <ProjectCard />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ProjectCard from 'components/ProjectCard.vue';

@Component({
  components: { ProjectCard }
})
export default class Frontend extends Vue{}
</script>

<style lang="sass" scoped>
.frontend-wrapper
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
</style>

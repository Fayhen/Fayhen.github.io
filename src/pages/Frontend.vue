<template>
  <q-page class="column items-center justify-evenly">
    <div class="q-page-inner-wrapper">
      <transition-group
        appear
        tag="div"
        enter-active-class="animated fadeInUp"
      >
        <p key="text-frontend-intro" style="animation-delay: 0.2s;">
          {{ $t('frontend.intro') }}
        </p>
      </transition-group>

      <transition-group
        appear
        tag="div"
        class="column items-center"
        enter-active-class="animated fadeInUp"
      >
        <ProjectCard
          v-for="project, index in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :repositoryLink="project.repositoryLink"
          :productionLink="project.productionLink"
          :iconsArray="project.stacks"
          class="project-card"
          :style="`animation-delay: ${projectCardDelay + (0.1 * (index + 1))}s;`"
        />
      </transition-group>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { frontendProjects } from 'assets/frontendProjects';
import ProjectCard from 'components/ProjectCard.vue';

@Component({
  components: { ProjectCard }
})
export default class Frontend extends Vue {
  projects = frontendProjects;
  projectCardDelay = 0.3;
};
</script>

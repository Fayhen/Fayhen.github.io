<template>
  <q-page class="column items-center justify-evenly text-body1">
    <div class="q-page-inner-wrapper">
      <transition appear tag="div" enter-active-class="animated fadeInUp">
        <p style="animation-delay: 0.2s">
          {{ $t('fullstack.intro') }}
        </p>
      </transition>

      <transition-group
        appear
        tag="div"
        class="column items-center full-width"
        enter-active-class="animated fadeInUp"
      >
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :repositoryLink="project.repositoryLink"
          :productionLink="project.productionLink"
          :iconsArray="project.stacks"
          :index="index"
          class="project-card"
          :style="`animation-delay: ${projectCardDelay + 0.1 * (index + 1)}s;`"
        />
      </transition-group>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { fullstackProjects } from 'assets/fullstackProjects';
import ProjectCard from 'components/ProjectCard.vue';

const projects = fullstackProjects;
const projectCardDelay = 0.3;
</script>

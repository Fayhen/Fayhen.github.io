<template>
  <q-page class="column items-center justify-evenly text-body1">
    <div class="q-page-inner-wrapper">
      <transition-group
        appear
        tag="div"
        class="backend-wrapper"
        enter-active-class="animated fadeInUp"
      >
        <p key="text-backend-intro" style="animation-delay: 0.2s">
          {{ $t('backend.intro') }}
        </p>
        <p key="text-backend-detail" style="animation-delay: 0.3s">
          {{ $t('backend.detail') }}
        </p>
        <p key="text-backend-conclusion" style="animation-delay: 0.4s">
          {{ $t('backend.conclusion') }}
        </p>
      </transition-group>

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
import { backendProjects } from 'assets/backendProjects';
import ProjectCard from 'components/ProjectCard.vue';

const projects = backendProjects;
const projectCardDelay = 0.4;
</script>

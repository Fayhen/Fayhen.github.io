<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar class="justify-between">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-tabs class="absolute-center">
          <q-tab :label="$route.name" />
        </q-tabs>

        <div>
          <a
            href="https://github.com/Fayhen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <q-btn
              flat
              dense
              round
              :icon="fabGithub"
              aria-label="GitHub"
              color="indigo-1"
            />
          </a>
          <a
            href="https://github.com/Fayhen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <q-btn
              flat
              dense
              round
              :icon="fabTwitter"
              aria-label="Twitter"
              color="indigo-1"
            />
          </a>
          <a
            href="https://github.com/Fayhen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <q-btn
              flat
              dense
              round
              :icon="fabLinkedin"
              aria-label="LinkedIn"
              color="indigo-1"
            />
          </a>
        </div>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      bordered
      content-class="bg-indigo-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>

        <NavigationItem
          v-for="item in navigationItems"
          :key="item.route"
          v-bind="item"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="row no-wrap justify-between items-center">
      <div style="display: block;">
        <lang-switch />
      </div>
        <q-toolbar-title style="padding: 0 0.5em 0 0; text-align: right;">
          Diego Souza
        </q-toolbar-title>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import {
  fabGithub,
  fabTwitter,
  fabLinkedin,
  fasHome,
  fasLayerGroup,
  fasGraduationCap,
  fasCode,
  fasCogs,
  fasProjectDiagram
} from '@quasar/extras/fontawesome-v5'

const navigationData = [
  {
    icon: fasHome,
    route: '/',
    label: 'menus.homeNavigationLabel',
    caption: 'menus.homeNavigationCaption'
  },
  {
    icon: fasLayerGroup,
    route: '/stacks',
    label: 'menus.stacksNavigationLabel',
    caption: 'menus.stacksNavigationCaption'
  },
  {
    icon: fasGraduationCap,
    route: '/academic',
    label: 'menus.academicNavigationLabel',
    caption: 'menus.academicNavigationCaption'
  },
  {
    icon: fasCode,
    route: '/frontend',
    label: 'menus.frontendNavigationLabel',
    caption: 'menus.frontendNavigationCaption'
  },
  {
    icon: fasCogs,
    route: '/backend',
    label: 'menus.backendNavigationLabel',
    caption: 'menus.backendNavigationCaption'
  },
  {
    icon: fasProjectDiagram,
    route: '/fullstack',
    label: 'menus.fullstackNavigationLabel',
    caption: 'menus.fullstackNavigationCaption'
  }
];

import { Vue, Component } from 'vue-property-decorator';
import LangSwitch from 'components/LangSwitch.vue';
import NavigationItem from 'components/NavigationItem.vue';

@Component({
  components: { NavigationItem, LangSwitch }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  miniState = true;
  navigationItems = navigationData;
  fabGithub = fabGithub;
  fabTwitter = fabTwitter;
  fabLinkedin = fabLinkedin;
}
</script>

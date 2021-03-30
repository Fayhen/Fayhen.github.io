<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="justify-between bg-indigo-10">
        <q-btn
          flat
          dense
          round
          :icon="menu"
          aria-label="Menu"
        >
          <q-menu>
            <q-list>
              <q-item-label
                header
                class="text-grey-8"
              >
                {{ $t('menus.menuNavigationLabel') }}
              </q-item-label>

              <NavigationItem
                v-for="item in navigationItems"
                :key="item.route"
                v-bind="item"
              />
            </q-list>
          </q-menu>
        </q-btn>

        <q-tabs class="absolute-center no-pointer-events">
          <q-tab :label="$t(getRouteTranslation())" />
        </q-tabs>

        <div class="text-indigo-1">
          <a
            href="https://github.com/Fayhen"
            target="_blank"
            rel="noopener noreferrer"
            style="text-decoration: none; color: inherit;"
          >
            <q-btn
              flat
              dense
              round
              :icon="fabGithub"
              aria-label="GitHub"
            />
          </a>
          <a
            href="https://twitter.com/Fayhen1"
            target="_blank"
            rel="noopener noreferrer"
            style="text-decoration: none; color: inherit;"
          >
            <q-btn
              flat
              dense
              round
              :icon="fabTwitter"
              aria-label="Twitter"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/diegogcsouza/"
            target="_blank"
            rel="noopener noreferrer"
            style="text-decoration: none; color: inherit;"
          >
            <q-btn
              flat
              dense
              round
              :icon="fabLinkedin"
              aria-label="LinkedIn"
            />
          </a>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="row no-wrap justify-between items-center bg-indigo-10">
      <div style="display: block;">
        <lang-switch />
      </div>
        <q-toolbar-title
          class="no-padding text-weight-light text-indigo-1"
          style="padding: 0 0.5em 0 0; text-align: right;"
        >
          Diego Souza
        </q-toolbar-title>
        <q-icon
          size="md"
          name="img:leaf-from-cog-2-dark.svg"
          class="q-mx-xs"
        />
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
} from '@quasar/extras/fontawesome-v5';
import {
  matMenu
} from '@quasar/extras/material-icons';

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
  navigationItems = navigationData;
  fabGithub = fabGithub;
  fabTwitter = fabTwitter;
  fabLinkedin = fabLinkedin;
  menu = matMenu;

  getRouteTranslation() {
    const route = this.$route.name as string;
    const translationKey = `routes.${route}`
    return translationKey;
  }
}
</script>

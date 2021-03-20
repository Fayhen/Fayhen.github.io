<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Diego Souza
        </q-toolbar-title>

        <q-tabs shrink>
          <q-route-tab
            name="home"
            label="Home"
            to="/"
          />
          <q-route-tab
            name="academic"
            label="Academic background"
            to="/academic"
          />
          <q-route-tab
            name="frontend"
            label="Frontend"
            to="/frontend"
          />
          <q-route-tab
            name="backend"
            label="Backend"
            to="/backend"
          />
          <q-route-tab
            name="fullstack"
            label="FullStack"
            to="/fullstack"
          />
        </q-tabs>

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
            style="color: #f2f2f2"
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
            style="color: #f2f2f2"
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
            style="color: #f2f2f2"
          />
        </a>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <div style="display: block;">
        <lang-switch />
      </div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import { Vue, Component } from 'vue-property-decorator';
import {
  fabGithub,
  fabTwitter,
  fabLinkedin
} from '@quasar/extras/fontawesome-v5'
import LangSwitch from 'components/LangSwitch.vue';

@Component({
  components: { EssentialLink, LangSwitch }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  essentialLinks = linksData;
  fabGithub = '';
  fabTwitter = '';
  fabLinkedin = '';

  created() {
    this.fabGithub = fabGithub;
    this.fabTwitter = fabTwitter;
    this.fabLinkedin = fabLinkedin;
    console.log(typeof(this.fabGithub))
  }
}
</script>

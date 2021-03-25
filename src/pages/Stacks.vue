<template>
  <q-page class="column items-center justify-evenly text-center">

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

          <!-- <div id="icon-wrapper">
            <transition-group
              appear
              tag="div"
              enter-active-class="animated fadeInUp"
            >
              <q-btn
                flat round
                key="stacks-devicon-git"
                style="animation-delay: 0.4s;"
              >
                <q-tooltip>Git</q-tooltip>
                <q-icon
                  class="q-ma-sm"
                  size="xl"
                  id="git"
                  name="img:devicons/git-original.svg"
                />
              </q-btn>
              <q-btn
                flat round
                key="stacks-devicon-mysql"
                style="animation-delay: 0.5s;"
              >
                <q-tooltip>MySQL</q-tooltip>
                <q-icon
                  class="q-ma-sm"
                  size="xl"
                  id="mysql"
                  name="img:devicons/mysql-original.svg"
                />
              </q-btn>
              <q-btn
                flat round
                key="stacks-devicon-sqlalchmey"
                style="animation-delay: 0.6s;"
              >
                <q-tooltip>SQLAlchemy</q-tooltip>
                <q-icon
                  class="q-ma-sm"
                  size="xl"
                  id="sqlalchemy"
                  name="img:devicons/sqlalchemy-original.svg"
                />
              </q-btn>
              <q-btn
                flat round
                key="stacks-devicon-python"
                style="animation-delay: 0.7s;"
              >
                <q-tooltip>Python</q-tooltip>
                <q-icon
                  class="q-ma-sm"
                  size="xl"
                  id="python"
                  name="img:devicons/python-original.svg"
                />
              </q-btn>
              <q-btn
                flat round
                key="stacks-devicon-django"
                style="animation-delay: 0.8s;"
              >
                <q-tooltip>Django</q-tooltip>
                <q-icon
                  class="q-ma-sm"
                  size="xl"
                  id="django"
                  name="img:devicons/django-original.svg"
                />
              </q-btn>
              <q-btn
                flat round
                key="stacks-devicon-flask"
                style="animation-delay: 0.9s;"
              >
                <q-tooltip>Flask</q-tooltip>
                <q-icon
                  class="q-ma-sm"
                  size="xl"
                  id="flask"
                  name="img:devicons/flask-original.svg"
                />
              </q-btn>
              <q-btn
                flat round
                key="stacks-devicon-html5"
                style="animation-delay: 1.0s;"
              >
                <q-tooltip>HTML5</q-tooltip>
                <q-icon
                  class="q-ma-sm"
                  size="xl"
                  id="html5"
                  name="img:devicons/html5-original.svg"
                />
              </q-btn>
              <q-btn
                flat round
                key="stacks-devicon-css3"
                style="animation-delay: 1.1s;"
              >
                <q-tooltip>CSS3</q-tooltip>
                <q-icon
                  class="q-ma-sm"
                  size="xl"
                  id="css3"
                  name="img:devicons/css3-original.svg"
                />
              </q-btn>
              <q-btn
                flat round
                key="stacks-devicon-javascript"
                style="animation-delay: 1.2s;"
              >
                <q-tooltip>JavaScript</q-tooltip>
                <q-icon
                  class="q-ma-sm"
                  size="xl"
                  id="javascript"
                  name="img:devicons/javascript-original.svg"
                />
              </q-btn>
              <q-btn
                flat round
                key="stacks-devicon-typescript"
                style="animation-delay: 1.3s;"
              >
                <q-tooltip>TypeScript</q-tooltip>
                <q-icon
                  class="q-ma-sm"
                  size="xl"
                  id="typescript"
                  name="img:devicons/typescript-original.svg"
                />
              </q-btn>
              <q-btn
                flat round
                key="stacks-devicon-vuejs"
                style="animation-delay: 1.4s;"
              >
                <q-tooltip>Vue.js</q-tooltip>
                <q-icon
                  class="q-ma-sm"
                  size="xl"
                  id="vuejs"
                  name="img:devicons/vuejs-original.svg"
                />
              </q-btn>
            </transition-group>
          </div> -->

          <div id="icon-wrapper">
            <transition-group
              appear
              tag="div"
              enter-active-class="animated fadeInUp"
            >
              <q-btn
                flat round
                v-for="stack, index in stacks"
                :key="stack.key"
                :aria-label="stack.ariaLabel"
                :style="`animation-delay: ${deviconDelay + (0.1 * (index + 1))}s;`"
              >
                <q-tooltip>{{ stack.tooltip }}</q-tooltip>
                <q-icon
                  class="q-ma-sm"
                  size="xl"
                  :id="stack.icon.id"
                  :name="stack.icon.filepath"
                />
              </q-btn>
            </transition-group>
          </div>

        </div>

    </div>

  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { stacks } from 'assets/stacks';

@Component
export default class Stacks extends Vue {
  stacks = stacks;
  deviconDelay = 0.3;
};
</script>

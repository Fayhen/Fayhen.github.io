<template>
  <q-page class="column items-center justify-evenly">
    <!-- <transition
      appear
      enter-active-class="animated fadeInUp"
    >
      <p style="animation-delay: 0.1s;">
        {{ $t('main.hello') }}
      </p>
    </transition>
    <transition
      appear
      enter-active-class="animated fadeInUp"
    >
      <q-img
        class="profile-pic"
        src="45882000.png"
        :ratio="1"
        style="animation-delay: 0.2s;"
      />
    </transition>
    <transition
      appear
      enter-active-class="animated fadeInUp"
    >
      <div
        style="display: flex; flex-direction: column; text-align: center; animation-delay: 0.3s;"
      >
        <p>{{ $t('main.myName') }}</p>
        <p>{{ $t('main.myJob') }}</p>
      </div>
    </transition> --> 
    <!-- It's possible to add classes to the trasition-group tag -->
    <transition-group
      appear
      tag="div"
      class="home-wrapper"
      enter-active-class="animated fadeInUp"
    >
      <p
        key="text-home-hello"
        style="animation-delay: 0.1s;"
      >
        {{ $t('main.hello') }}
      </p>
      <q-img
        class="profile-pic"
        src="45882000.png"
        :ratio="1"
        key="profile-picture"
        style="animation-delay: 0.2s;"
      />
      <div
        key="text-home-intro"
        style="animation-delay: 0.3s;"
      >
        <p>{{ $t('main.myName') }}</p>
        <p>{{ $t('main.myJob') }}</p>
      </div>
    </transition-group>
    <!-- <p>{{ $t('intro.abstract1') }}</p>
    <p>{{ $t('intro.abstract2') }}</p> -->
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PageIndex extends Vue {};
</script>

<style lang="sass" scoped>
.home-wrapper
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
  font-size: 2em

.profile-pic
  height: 250px
  width: 250px
  border-radius: 100%
  margin-top: 1em
  margin-bottom: 1.5em

  &:hover
    cursor: pointer
</style>

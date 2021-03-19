<template>
  <q-page class="column items-center justify-evenly">
    <!-- <lang-switch /> -->
    <p>{{ $t('main.hello') }}</p>
    <q-img
      class="profile-pic"
      src="45882000.png"
      :ratio="1"
    />
    <p>{{ $t('main.myName') }}</p>
    <p>{{ $t('main.myJob') }}</p>
    <p>{{ $t('intro.abstract1') }}</p>
    <p>{{ $t('intro.abstract2') }}</p>
    <!-- <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component> -->
  </q-page>
</template>

<script lang="ts">
// import { Todo, Meta } from 'components/models';
// import ExampleComponent from 'components/ClassComponent.vue';
import { Vue, Component } from 'vue-property-decorator';
// import LangSwitch from 'components/LangSwitch.vue';

@Component
export default class PageIndex extends Vue {
  // todos: Todo[] = [
  //   {
  //     id: 1,
  //     content: 'ct1'
  //   },
  //   {
  //     id: 2,
  //     content: 'ct2'
  //   },
  //   {
  //     id: 3,
  //     content: 'ct3'
  //   },
  //   {
  //     id: 4,
  //     content: 'ct4'
  //   },
  //   {
  //     id: 5,
  //     content: 'ct5'
  //   }
  // ];
  // meta: Meta = {
  //   totalCount: 1200
  // };
};
</script>

<style lang="sass" scoped>
.profile-pic
  height: 250px
  width: 250px
  border-radius: 100%

  &:hover
    cursor: pointer
</style>

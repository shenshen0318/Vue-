<template>
  <div 
    class="tab-nav"
    v-tab-current="{
      curIdx: tabIndex,
      className: 'nav-item',
      currentClassName: 'nav-current'
    }"
  >
    <item 
      v-for="(item, index) of navData"
      :key="index"
      :index="index"
      :item="item"></item>
  </div>
</template>

<script>
import Item from './Item.vue';
import { mapState } from 'vuex';
import { tabCurrent } from '@/directives';

export default {
  name: 'TabNav',
  props: {
    navData: Array
  },
  components: {
    Item
  },
  directives: {
    tabCurrent
  },
  computed: {
    ...mapState(['tabIndex'])
  }
}
</script>


<style>
  .tab-nav {
    height: 50px;
    border-bottom: 1px solid #000;
  }
</style>
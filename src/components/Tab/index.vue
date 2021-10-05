<template>
  <div class="tab">
    <tab-nav 
      :navData="navData"></tab-nav>
    <tab-content 
      :contentData="contentData"></tab-content>
  </div>
</template>

<script>
import TabNav from './Nav';
import TabContent from './Content';

import navData from '@/data/nav.js';
import contentData from '@/data/content.js';

export default {
  name: 'Tab',
  components: {
    TabNav,
    TabContent
  },
  data() {
    return {
      navData,
      contentData
    }
  }
}
</script>


<style>
  .tab {
    width: 500px;
    height: 500px;
    margin: 50px auto;
    border: 1px solid #000;
  }
</style>
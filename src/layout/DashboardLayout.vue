<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }" style="width: 100%;height: 100%">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
    </side-bar>
    <div class="main-content" style="" >
      <div >
        <!-- your content here -->
        <router-view></router-view>
<!--        <content-footer v-if="!$route.meta.hideFooter"></content-footer>-->
      </div>
    </div>
  </div>
</template>
<script>
// import ContentFooter from "./ContentFooter.vue";

export default {
  components: {
    // ContentFooter,
  },
  data() {
    return {
      sidebarBackground: "", //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
<style lang="scss"></style>

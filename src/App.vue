<template>
  <div id="app">
    <AppHeader  />
    <div class="MainLayout">
        <router-view></router-view>
    </div>
    <AppFooter  />
  </div>
</template>

<script>
    import AppHeader from './components/Header.vue';
    import AppFooter from './components/Footer.vue';
    import { mapActions, mapState } from "vuex";

    export default {
    name: 'app',
    computed: {
        ...mapState({
            isAuthenticated: state => state.auth.isAuthenticated,
            user: state => state.auth.user,
        })
    },
    components: {
        AppHeader,
        AppFooter
    },
    mounted() {
    },
    methods: {
      ...mapActions([
      ])
    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss">
    @import "assets/styles/common";
</style>
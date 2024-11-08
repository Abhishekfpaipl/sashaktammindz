<template>
  <TopNav />
  <router-view />
  <FooterBar />
</template>
<script>
import TopNav from '@/components/TopNav.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  name: 'App',
  components: {
    TopNav,
    FooterBar,
  },
  computed: {
    hide() {
      const hiddenPages = ['DemoPage1', 'ThankYou', 'LoginPage', 'RegistrationPage', 'free-trial', 'demo-page', 'sales-demo-one', 'sales-demo-two']
      return hiddenPages.includes(this.$route.name)
    },
    hidden() {
      const hiddenPages = ['DemoPage1', 'ThankYou', 'LoginPage', 'RegistrationPage', 'sales-demo-one', 'sales-demo-two']
      return hiddenPages.includes(this.$route.name)
    },
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --primary-color: #682F67 !important;
  --secondary-color: #A92582 !important;
  --third-color: #FCF0FF !important;
}

#scroll::-webkit-scrollbar {
  display: none;
}
</style>

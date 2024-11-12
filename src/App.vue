<template>
  <TopNav />
  <transition name="fade">
    <router-view />
  </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.text-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-ellipsis3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

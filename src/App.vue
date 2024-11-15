<template>
  <TopNav />
  <transition name="fade">
    <router-view />
  </transition>
  <!-- <a href="https://www.google.com/maps/place/Kamniyata+Skin+Centre-+Best+Laser+Hair+Reduction+in+Delhi,+Skin+Whitening,+Hydra+Facial%2FPRP+Hair+Treatment+North+Delhi/@28.685547,77.1664758,17z/data=!3m1!4b1!4m6!3m5!1s0x390d03dda6b498d9:0x8933d95b6a5803c6!8m2!3d28.685547!4d77.1664758!16s%2Fg%2F11ry9bkltn?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D"
    class="query slide d-flex flex-column align-items-center justify-content-center border rounded px-2 text-decoration-none"
    style="background-color: #F7138E;">
    <i class="bi bi-telephone text-white"></i>
  </a> -->
  <div class="query slide" data-bs-toggle="modal" data-bs-target="#welcomeModal">
    <img src="/img/raise.svg" alt="raise" class="rounded-circle" style="width: 50px; height: 50px;">
    <p class="text-uppercase fw-bold mb-0 smaller text-dark">Raise</p>
  </div>
  <FooterBar />
  <WelcomeModal />
</template>
<script>
import TopNav from '@/components/TopNav.vue';
import FooterBar from '@/components/FooterBar.vue';
import WelcomeModal from '@/components/WelcomeModal.vue';
export default {
  name: 'App',
  components: {
    TopNav,
    FooterBar,
    WelcomeModal,
  },
}
</script>

<style lang="scss">
#app {

  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
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

.text-ellipsis2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
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

.form-control {
  box-shadow: none !important;
}

.accordion-button:focus {
  z-index: 3;
  outline: 0;
  box-shadow: none !important;
}

@keyframes slideRight {

  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(5px);
  }
}

.visit {
  display: inline-block;
  animation: slideRight 1.5s ease-in-out infinite;
}

.query {
  z-index: 90;
  position: fixed;
  bottom: 10%;
  right: 10px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

@keyframes slideTop {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5px);
  }
}

.slide {
  display: inline-block;
  animation: slideTop 1.5s ease-in-out infinite;
}
</style>

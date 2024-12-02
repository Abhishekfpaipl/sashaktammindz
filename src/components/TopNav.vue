<template>
  <div class="containerr d-flex justify-content-between align-items-center"
    style="background-color: var(--third-color);">
    <div class="d-flex align-items-center gap-3">
      <router-link to="/" class="text-decoration-none text-dark d-flex align-items-center">
        <img src="/img/logo.png" style="height: 40px;" alt="Logo">
      </router-link>
    </div>
    <div class="d-flex gap-5 align-items-center">
      <router-link :to="menu.path" class="d-lg-block d-none text-decoration-none text-dark"
        :class="{ 'border-bottom': $route.path === menu.path }" style="color:var(--primary-color) !important;"
        v-for="(menu, index) in menus" :key="index">
        {{ menu.title }}
      </router-link>
      <i class="d-lg-none bi bi-list btn text-dark p-0 fs-4 px-1" data-bs-toggle="offcanvas"
        data-bs-target="#topMenuOffcanvas" aria-controls="topMenuOffcanvas"
        style="background-color: var(--brand-color);"></i>
    </div>
  </div>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="topMenuOffcanvas" aria-labelledby="topMenuOffcanvasLabel"
    style="background-color: var(--primary-color);">
    <div class="d-flex justify-content-between align-items-center offcanvas-header" style="border-bottom: 1px solid white;">
      <h5 class="offcanvas-title text-white" id="topMenuOffcanvasLabel">
        Shashaktam Mindz
      </h5>
      <button class="btn">
        <i class="bi bi-x fs-4 text-white" data-bs-dismiss="offcanvas" aria-label="Close"></i>
      </button>
    </div>
    <div class="offcanvas-body">
      <ul class="nav nav-pills flex-column mb-auto">
        <router-link :to="link.path" v-for="(link, index) in menus" :key="index"
          class="nav-item my-1 text-decoration-none" style="border-bottom: 1px solid white;">
          <p data-bs-dismiss="offcanvas" class="text-start py-1 mb-1 text-white">
            {{ link.title }}
          </p>
        </router-link>
      </ul>
    </div>
    <div class="offcanvas-footer w-100 text-white">
      <p class="text-center fs-4 my-4">Reach Us</p>
      <div class="d-flex justify-content-evenly fs-2 w-100 gap-3">
        <a href="https://www.facebook.com/Ayush.Covisor/" class="btn rounded-0 text-decoration-none w-100 text-white"
          aria-label="Facebook" style="background-color: var(--primary-color);">
          <i class="bi bi-facebook"></i>
          <span class="ms-2">Facebook</span>
        </a>
        <a href="https://www.linkedin.com/in/mr-ayushgupta/" class="btn rounded-0 text-decoration-none w-100 text-white"
          aria-label="LinkedIn" style="background-color: var(--primary-color);">
          <i class="bi bi-linkedin"></i>
          <span class="ms-2">LinkedIn</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { id: 1, title: 'Home', path: '/', },
        { id: 2, title: 'Trainings', path: '/training' },
        { id: 3, title: 'Events', path: '/events' },
        { id: 4, title: 'Blogs', path: '/blogs' },
        { id: 5, title: 'About Us', path: '/about-us' },
        { id: 6, title: 'Contact Us', path: '/contact-us' },
      ],
      selectedMenu: null,
    };
  },
  methods: {
    selectMenu(index) {
      this.selectedMenu = index;
    },
  },
};
</script>

<style scoped>
.containerr {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: transparent;
  padding: 10px;
  z-index: 11;
  transition: background-color 0.3s ease-in-out;
}

.border-bottom {
  border-bottom: 2px solid var(--primary-color) !important;
}
</style>
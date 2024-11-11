<template>
    <div class="containerr d-flex justify-content-between align-items-center" style="background-color: var(--third-color);">
        <div class="d-flex align-items-center gap-3">
            <router-link to="/" class="text-decoration-none text-dark d-flex align-items-center">
                <img src="/img/logo.png" style="height: 40px;">
                <!-- <span class="mb-0 fw-bold fs-2 text-uppercase"
                    style="color:var(--brand-color) !important">covisor</span> -->
            </router-link>
        </div>
        <div class="d-flex gap-1 align-items-center">
            <router-link to="/contact-us" class="btn d-flex align-items-center gap-2"
                style="color: var(--brand-color);">
                <i class="bi bi-telephone-inbound-fill fs-5"></i>
                <span class="d-md-block d-none">Contact</span>
            </router-link>
            <i class="bi bi-list btn text-dark p-0 fs-4 px-1" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
                style="background-color: var(--brand-color);"></i>
        </div>
    </div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"
        style="background-color: var(--primary-color);">
        <div class="offcanvas-header border-bottom">
            <img src="/img/logo.svg" style="height:40px" alt="">
            <h5 class="offcanvas-title ms-2 text-white" id="offcanvasExampleLabel">Shashaktam Mindz</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body ">
            <ul class="nav nav-pills flex-column mb-auto">
                <router-link :to="link.path" v-for="(link, index) in menuCategories" :key="index"
                    class="nav-item my-1 text-decoration-none border-bottom">
                    <button @click="selectMenu(index)" data-bs-dismiss="offcanvas"
                        class="btn rounded border-0 w-100 d-flex align-items-center p-0 py-1">
                        <div class="btn-toggle collapsed" data-bs-toggle="collapse"
                            :data-bs-target="'#home-collapse' + index" aria-expanded="false" :disabled="index === 1">
                            <div class="d-flex align-items-center text-white">
                                <span>{{ link.title }}</span>
                            </div>
                        </div>
                    </button>
                </router-link>
            </ul>
        </div>
        <div class="offcanvas-footer w-100 text-white">
            <p class="text-center fs-4 my-4">Reach Us</p>
            <div class="d-flex justify-content-evenly fs-2 w-100 gap-3">
                <a href="https://www.facebook.com/Ayush.Covisor/"
                    class="btn rounded-0 text-decoration-none w-100 text-white"
                    style="background-color: var(--primary-color)">
                    <i class="bi bi-facebook"></i>
                    <span class="ms-2">Facebook</span>
                </a>
                <a href="https://www.linkedin.com/in/mr-ayushgupta/"
                    class="btn rounded-0 text-decoration-none w-100 text-white"
                    style="background-color: var(--primary-color)">
                    <i class="bi bi-linkedin"></i>
                    <span class="ms-2">LinkedIn</span>
                </a>
            </div>
        </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg ">
            <div class="modal-content text-white position-relative" style="background-color: var(--brand-color)">
                <div class="modal-body">
                    <h3 class="my-2 text-capitalize">Hello, how can we help you?</h3>
                    <div class="row d-flex align-items-center">
                        <div class="col-md-6 mt-4 mt-md-0">
                            <img src="/img/welcome.svg" style="width: 200px; max-width: 90%" alt="">
                        </div>
                        <div class="col-md-6">
                            <ContactForm />
                        </div>
                    </div>
                </div>
                <div class="position-absolute rounded-circle wh-40 bg-light text-dark px-2 p-1 end-0"
                    data-bs-dismiss="modal" style="top: -3%">
                    <i class="bi bi-x fs-5"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            selectedMenu: null,
            menuCategories: [
                {
                    id: 2,
                    title: 'Home',
                    path: '/',
                    bgColor: '#F8F9FA',
                },
                {
                    id: 3,
                    title: 'Contact Us',
                    path: '/contact-us',
                },
                {
                    id: 4,
                    title: 'About Us',
                    path: '/about-us',
                },
            ],
            backgroundOpacity: 0,
            hideOnScroll: true,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        selectMenu(index) {
            this.selectedMenu = index;
        },
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;

            if (scrollPercentage >= 5) {
                this.backgroundOpacity = 1;
                this.hideOnScroll = false;
            } else if (scrollPercentage >= 3) {
                this.backgroundOpacity = 0.5;
                this.hideOnScroll = false;
            } else {
                this.backgroundOpacity = 0;
                this.hideOnScroll = true;
            }
        },
    },
}
</script>

<style scoped>
.hide-on-scroll {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.containerr {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: transparent;
    padding: 10px;
    z-index: 11;
    transition: background-color 0.3s ease-in-out;
}
</style>

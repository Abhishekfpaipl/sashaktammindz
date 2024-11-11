<template>
    <div class="container-fluid pt-3 border-top border-bottom" style="color: var(--brand-color) !important">
        <div class="row">
            <div class="col-12 col-md-4 mb-3">
                <router-link to="/">
                    <img :src="img" style="width: 200px;object-fit: contain;">
                </router-link>
                <p class="mb-0 fw-bold fs-2 text-uppercase">Shashaktam</p>
                <p class="my-0 text-capitalize fs-4">Mindz</p>

            </div>

            <div class=" col-12 col-md-4 mb-3 text-center">
                <p class="mb-2 fw-bold">Contact Us</p>
                <p class="mb-2">Email : noopur@sashaktammindz.com</p>
                <p class="mb-2">Mob no. : 91-9312765888</p>
                <p class="mb-2">Address : 20, Onward Workspaces, First <br>
                    Floor, Okhla Industrial Estate,<br>
                    Phase-3, New Delhi-110020</p>
                <div class="d-flex gap-2 justify-content-center align-items-center">
                    <p class="fw-bold mb-0">Follow Us :</p>
                    <!-- <i class="bi bi-twitter-x"></i> -->
                    <a href="https://www.facebook.com/"
                        class="d-flex align-items-center gap-2 text-decoration-none"
                        style="color: var(--brand-color) !important">
                        <i class="bi bi-facebook"></i>
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.linkedin.com/in"
                        class="d-flex align-items-center gap-2 text-decoration-none"
                        style="color: var(--brand-color) !important">
                        <i class="bi bi-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                    <!-- <i class="bi bi-instagram"></i> -->
                </div>
            </div>
            <div class="col-12 col-md-4 d-flex justify-content-around">
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Company</p>
                    <div class="d-flex flex-column">
                        <router-link :to="link.link" class="text-decoration-none my-1 "
                            style="color: var(--brand-color) !important" v-for="(link, index) in company"
                            :key="index">{{ link.name }}</router-link>
                    </div>
                </div>
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Resources</p>
                    <div class="d-flex flex-column">
                        <router-link :to="link.link" class="text-decoration-none my-1"
                            style="color: var(--brand-color) !important" v-for="(link, index) in links" :key="index">{{
                                link.name }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <FameFoot /> -->
    <div class="bg-light text-center py-3 d-flex align-items-center justify-content-center">
        <p class="text-dark mb-0"> Copyright © 2024 Covisor Infotech Pvt Ltd All rights reserved</p>
    </div>
</template>

<script> 
export default {
    name: 'FooterBar', 
    data() {
        return {
            img: '/img/logo.png',
            company: [
                {
                    id: 4,
                    name: 'Contact Us',
                    link: '/contact-us'
                },
                {
                    id: 42,
                    name: 'About Us',
                    link: '/about-us'
                }, 
            ],
            links: [
                {
                    id: 13,
                    name: 'Legal Warnings',
                    link: '/legal-warning'
                },
                {
                    id: 1,
                    name: 'Privacy Policies',
                    link: '/privacy-policy'
                },
                {
                    id: 1,
                    name: 'Terms & Conditions',
                    link: '/terms'
                },   
            ],
        }
    },
}
</script>

<style></style>

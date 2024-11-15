<template>
    <div class="container-fluid text-white" data-bs-toggle="modal" data-bs-target="#newsletterModal"
        style="background-color: var(--primary-color);">
        <div class="row align-items-center pb-5 pb-md-0">
            <div class="col-md-6">
                <img src="/img/sub.png" alt="subscribe newsletter" style="width: 400px; max-width: 90%;">
            </div>
            <div class="col-md-6">
                <p class="display-1 text-uppercase fw-bold">Register</p>
                <p class="text-center text-uppercase fs-3">For our <br><span class="fw-bold text-warning display-1">Free
                        Workshop</span></p>
                <button class="btn btn-warning w-50 fs-3">Click here</button>
            </div>
        </div>
    </div>
    <div class="modal fade" id="newsletterModal" tabindex="-1" aria-labelledby="newsletterModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content" style="background-color: var(--primary-color);">
                <div class="modal-header text-white d-flex justify-content-between align-items-center">
                    <h1 class="modal-title fs-5 text-uppercase" id="newsletterModalLabel">Free Workshop</h1>
                    <i class="bi bi-x fs-2" data-bs-dismiss="modal" aria-label="Close"></i>
                </div>
                <div class="modal-body">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img src="/img/subscribeModal.svg" alt="subscribe " style="width: 250px; max-width: 90%;">
                        </div>
                        <div class="col-md-6">
                            <form @submit.prevent="submitQuery()" class="mt-3 row g-3">
                                <div class="w-100 form-floating mt-2">
                                    <input type="text" class="form-control" placeholder="" v-model="name" required>
                                    <label for="floatingInput" class="text-muted ms-2">Your Name</label>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-warning py-2 w-100 " type="submit"><i
                                            class="bi bi-whatsapp me-2"></i> <span
                                            class="text-uppercase">Enquiry</span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid border-bottom  position-relative pt-5"
        style="color: var(--brand-color); background-color: var(--third-color); ">
        <div class="row">
            <div class="col-12 col-md-4 mb-3">
                <router-link to="/">
                    <img :src="img" style="width: 200px; object-fit: contain;">
                </router-link>
                <div class="d-flex gap-2 justify-content-center align-items-center mt-5">
                    <p class="fw-bold mb-0">Follow Us :</p>
                    <a href="https://www.facebook.com/" class="d-flex align-items-center gap-2 text-decoration-none"
                        style="color: var(--brand-color)">
                        <i class="bi bi-facebook"></i>
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.linkedin.com/in" class="d-flex align-items-center gap-2 text-decoration-none"
                        style="color: var(--brand-color)">
                        <i class="bi bi-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>

            <div class="col-12 col-md-4 mb-3 text-center">
                <p class="mb-2 fw-bold">Contact Us</p>
                <p class="mb-2">Email: noopur@sashaktammindz.com</p>
                <p class="mb-2">Mob no.: 91-9312765888</p>
                <p class="mb-2">Address: 20, Onward Workspaces, First<br>
                    Floor, Okhla Industrial Estate,<br>
                    Phase-3, New Delhi-110020</p>
            </div>
            <div class="col-12 col-md-4 d-flex justify-content-around">
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Company</p>
                    <div class="d-flex flex-column">
                        <router-link :to="link.link" class="text-decoration-none my-1" style="color: var(--brand-color)"
                            v-for="(link, index) in company" :key="index">
                            {{ link.name }}
                        </router-link>
                    </div>
                </div>
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Resources</p>
                    <div class="d-flex flex-column">
                        <router-link :to="link.link" class="text-decoration-none my-1" style="color: var(--brand-color)"
                            v-for="(link, index) in links" :key="index">
                            {{ link.name }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-light text-center py-3 d-flex align-items-center justify-content-center">
        <p class="text-dark mb-0">Copyright © 2024 Covisor Infotech Pvt Ltd All rights reserved</p>
    </div>
</template>

<script>
export default {
    name: 'FooterBar',
    data() {
        return {
            img: '/img/logo.png',
            company: [
                { id: 4, name: 'Contact Us', link: '/contact-us' },
                { id: 42, name: 'About Us', link: '/about-us' },
                { id: 42, name: 'Image License', link: '/image-license' },
            ],
            links: [
                { id: 13, name: 'Legal Warnings', link: '/legal-warning' },
                { id: 1, name: 'Privacy Policies', link: '/privacy-policy' },
                { id: 1, name: 'Terms & Conditions', link: '/terms' },
            ],
            name: "",
        }
    },
    methods: {
        submitQuery() {
            const phoneNumber = '919312765888'; // Replace with your WhatsApp number
            const message = `Hello, my name is ${this.name}. I want to subscribe to your newsletter.`;
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            this.name = ""
        }
    }
}
</script>

<style scoped></style>

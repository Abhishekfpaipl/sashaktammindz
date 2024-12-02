<template>
    <div class="container-fluid my-5" style="background-color:var(--primary-color)">
        <h1 v-if="title" class="text-center mb-5">{{ title }}</h1>
        <div class="row d-flex justify-content-center align-items-center text-white">
            <div class="col-md-6 order-md-2 order-1 pb-5 pb-md-0">
                <img src="/img/bannerNew.png" :alt="imageAlt" class="img-fluid" style="width: 90%;" />
            </div>
            <div class="col-md-6 mt-5 mt-md-0 px-3 py-2">
                <p class="display-1 text-uppercase fw-bold">सshaktaम् Mindz</p>
                <p class="text-center text-uppercase fs-3">Empowering Minds, Protecting Rights <br><span
                        class="fw-bold text-warning display-1">Awareness, Protection & Empowerment</span></p>
                <div class="d-flex justify-content-center align-items-center gap-4">
                    <!-- <router-link to="/free-trial" class="text-decoration-none text-white border-bottom pb-2 fs-4">
                        <span>Take Demo</span>
                        <i class="bi bi-arrow-right ms-3 visit"></i>
                    </router-link> -->
                    <router-link to="/contact-us" class="text-decoration-none text-white border-bottom pb-2 fs-4">
                        <span>Talk To Us</span>
                        <i class="bi bi-arrow-right ms-3 visit"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

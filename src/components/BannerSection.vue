<template>
    <div>
        <div class="col-12 text-dark" >
            <img :src="img" class="position-relative min-vh-100 d-none d-md-block"
                style="width:100%; height:400px; object-fit:cover;">
            <img :src="img" class="position-relative d-md-none min-vh-100" style="width:100%;object-fit:cover;">
            <div class="position-absolute top-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
                style="background-color:#FCF0FF80">
                <img src="/img/logo.svg" alt="" style="width:250px;filter: brightness(150);">
                <h3 class="mt-3 lh-1 fs-1 fw-bold text-uppercase">Shashaktam</h3>
                <div class="text-md-start text-center">
                    <p class="h3 mb-2 text-uppercase">Mindz</p>
                </div>
                <AutoTypeDeleteText :texts="services" :typingSpeed="150" :deleteSpeed="50" :delay="500" />
                <div class="mt-3 text-center text-md-start">
                    <p class="my-1"><i class="bi bi-check2-square me-2"></i>&nbsp;Setting up of Infrastructure </p>
                    <p class="my-1"><i class="bi bi-check2-square me-2"></i>&nbsp;Trainings and Skill Building </p>
                    <p class="my-1"><i class="bi bi-check2-square me-2"></i>&nbsp;Empanelment and Complaint handling
                    </p>
                    <p class="my-1"><i class="bi bi-check2-square me-2"></i>&nbsp;Audit of Policies & Compliances </p>
                </div>
                <RouterLink to="/free-trial">
                    <div class="btn my-4 fs-5 fw-bold border bg-white text-capitalize" style="color:var(--secondary-color)">
                        free consultation
                    </div>
                </RouterLink>
                <a href="#second"><i class="bi bi-chevron-down fs-1 text-white"></i></a>
            </div>
        </div>
    </div>
</template>
<script>
import AutoTypeDeleteText from "@/components/AutoTypeDeleteText.vue"
export default {
    name: 'BannerComp',
    components: {
        AutoTypeDeleteText,
    },
    data() {
        return {
            img:'https://img.freepik.com/premium-photo/statue-justice-lady-justice-iustitia-justitia-roman-goddess-justice-with-coronavirus-covid19-scale-law-concept-image-banner-size_157125-15632.jpg?w=1380',
            services: [
                'PoSH ACT 2013.',
                'POCSO ACT 2012.',
            ],
            // show: false,
        }
    },
    methods: {
        openDialer() {
            const phoneNumber = 918860012001;
            window.location.href = `tel:${phoneNumber}`;
        },
    }
}
</script>
// CompanySlider.vue
<template>
    <div class="container my-5">
        <div class="position-relative">
            <!-- Previous Button -->
            <button class="carousel-control-prev" type="button" @click="previousSlide">
                <span class="carousel-control-prev-icon bg-primary rounded-circle p-3" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <!-- Slider -->
            <div class="overflow-hidden">
                <div class="row flex-nowrap transition-transform"
                    :style="{ transform: `translateX(${-currentSlide * slideWidth}px)` }">
                    <div v-for="(company, index) in companies" :key="index" class="col-6 col-md-3 col-lg-2">
                        <div class="card h-100 mx-2 border-0 shadow-sm company-card">
                            <div class="card-body d-flex align-items-center justify-content-center text-center p-3">
                                <h6 class="card-title mb-0 fw-bold text-primary">{{ company }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Next Button -->
            <button class="carousel-control-next" type="button" @click="nextSlide">
                <span class="carousel-control-next-icon bg-primary rounded-circle p-3" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CompanySlider',
    data() {
        return {
            companies: [
                'BOXCOWORLD PVT LTD.',
                'POWER SYSTEM OPERATION CORPORATION (POSOCO)',
                'SUEZ INDIA',
                'VIHAAN NETWORKS LTD.',
                'NDDB DAIRY SERVICES',
                'GALGOTIAS UNIVERSITY',
                'SAPIENS TECHNOLOGIES (1982) INDIA PVT. LTD.',
                'BUSINESS NETWORK INTERNATIONAL (DELHI CENTRAL REGION)',
                'INSTITUTE OF COMPANY SECRETARIES OF INDIA -NOIDA CHAPTER',
                'CONTEXT.EAT PVT. LTD',
                'ADIDAS TECHNICAL SERVICES',
                'GENEW INDIA TELECOM PVT. LTD.',
                'J.M. BAXI & CO. AND IT\'S ASSOCIATE COMPANIES',
                'CENTRE FOR DEVELOPMENT OF ADVANCED COMPUTING',
                'LPS BOSSARD PVT. LTD.',
                'TAXMANN PUBLICATIONS PVT. LTD.',
                'PRESCIENT HEALTHCARE GROUP'
            ],
            currentSlide: 0,
            slideWidth: 0
        }
    },
    mounted() {
        this.slideWidth = this.$el.querySelector('.col-6').offsetWidth;
        window.addEventListener('resize', this.updateSlideWidth);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateSlideWidth);
    },
    methods: {
        updateSlideWidth() {
            this.slideWidth = this.$el.querySelector('.col-6').offsetWidth;
        },
        previousSlide() {
            if (this.currentSlide > 0) {
                this.currentSlide--;
            } else {
                this.currentSlide = Math.ceil(this.companies.length / 6) - 1;
            }
        },
        nextSlide() {
            if (this.currentSlide < Math.ceil(this.companies.length / 6) - 1) {
                this.currentSlide++;
            } else {
                this.currentSlide = 0;
            }
        }
    }
}
</script>

<style scoped>
.company-card {
    min-height: 120px;
    transition: transform 0.2s ease-in-out;
}

.company-card:hover {
    transform: translateY(-5px);
}

.transition-transform {
    transition: transform 0.5s ease-in-out;
}

.carousel-control-prev,
.carousel-control-next {
    width: 40px;
    height: 40px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    opacity: 1;
}

.carousel-control-prev {
    left: -50px;
}

.carousel-control-next {
    right: -50px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
    width: 30px;
    height: 30px;
}

@media (max-width: 768px) {
    .carousel-control-prev {
        left: -30px;
    }

    .carousel-control-next {
        right: -30px;
    }

    .company-card {
        min-height: 100px;
    }
}
</style>
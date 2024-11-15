<template>
    <!-- <div class="container py-5"> 
        <p class="display-5 text-start mb-4">{{ title }}</p>
        <ul class="nav nav-pills mb-4 justify-content-center justify-content-md-center overflow-x-scroll flex-nowrap"
            id="scroll" style="white-space: nowrap;" role="tablist">
            <li class="nav-item" v-for="(type, index) in types" :key="index">
                <button class="nav-link text-muted rounded" :class="{ active: selectedType === type.sid }"
                    @click="selectedType = type.sid">
                    {{ type.title }}
                </button>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade show active">
                <div class="container-fluid">
                    <div class="row g-0 align-items-center" v-for="(service, index) in filteredServices" :key="index"
                        style="background-color: var(--third-color);">
                        <div class="col-lg-6 text-center bg-white pt-5 pt-md-0"
                            :class="{ 'order-lg-0': index % 2 === 0, 'order-lg-1': index % 2 !== 0 }">
                            <p class="d-md-none d-block text-center fs-3 text-capitalize">{{ service.title }}</p>
                            <img :src="service.image" class="img-fluid sticky-image" :alt="service.title">
                        </div>

                        <div class="col-lg-6">
                            <p class="d-md-block d-none text-center fs-3 text-capitalize">{{ service.title }}</p>
                            <div class="p-2 text-start">
                                <p class="mt-2 mb-4 text-muted">{{ service.description }}</p>
                                <ul class="list-styled mb-4">
                                    <li v-for="(title, index) in service.points" :key="index" class="mb-1">{{ title }}
                                    </li>
                                </ul>
                                <div class="text-center">
                                    <router-link :to="'/' + service.sid" class=" btn text-white"
                                        style="background-color: var(--primary-color);">
                                        Read more <i class="bi bi-arrow-right visit"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div> -->

    <div class="container py-5">
        <div v-if="poshServices.length" class="my-5">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <p class="display-5 text-uppercase" style="color: var(--primary-color);">Posh Services</p>
                <!-- <router-link to="/posh-training" class="fs-5 text-decoration-none text-dark">
                    <span>See More</span>
                    <i class="ms-2 bi bi-arrow-right visit"></i>
                </router-link> -->
            </div>
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-2">
                <div class="col" v-for="(service, index) in poshServices" :key="'posh-' + index">
                    <router-link :to="'/' + service.sid" class="card h-100 rounded-4 text-decoration-none"
                        style="background-color: var(--third-color);">
                        <img :src="service.image" :alt="service.title" class="img-fluid m-1 rounded-4 border"
                            style="height: 180px; object-fit: cover;">
                        <p class="card-body p-1 small" style="min-height: 46px;">{{ service.title }}</p>
                        <div class="card-footer btn text-white" style="background-color: var(--primary-color);">
                            Know more <i class="bi bi-arrow-right ms-2 visit"></i>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div v-if="pocsoServices.length" class="my-5">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <p class="display-5 text-uppercase" style="color: var(--primary-color);">POCSO Services</p>
                <!-- <router-link to="/posh-training" class="fs-5 text-decoration-none text-dark">
                    <span>See More</span>
                    <i class="ms-2 bi bi-arrow-right visit"></i>
                </router-link> -->
            </div>
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-2">
                <div class="col" v-for="(service, index) in pocsoServices" :key="'posh-' + index">
                    <router-link :to="'/' + service.sid" class="card h-100 rounded-4 text-decoration-none"
                        style="background-color: var(--third-color);">
                        <img :src="service.image" :alt="service.title" class="img-fluid m-1 rounded-4 border"
                            style="height: 180px; object-fit: cover;">
                        <p class="card-body p-1 small" style="min-height: 46px;">{{ service.title }}</p>
                        <div class="card-footer btn text-white" style="background-color: var(--primary-color);">
                            Know more <i class="bi bi-arrow-right ms-2 visit"></i>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ServicesCard",
    data() {
        return {
            title: "Our Services",
            types: [
                {
                    sid: "posh",
                    title: "Posh",
                },
                {
                    sid: "pocso",
                    title: "pocso",
                },
            ],
            selectedType: "posh",
        }
    },
    computed: {
        filteredServices() {
            return this.services.filter(post => post.type === this.selectedType)
        },
        services() {
            return this.$store.getters.getServices
        },
        poshServices() {
            return this.services.filter(service => service.type === 'posh')
        },
        pocsoServices() {
            return this.services.filter(service => service.type === 'pocso')
        }
    }
}
</script>
<style scoped>
.nav-link.active {
    background-color: var(--primary-color);
    color: white !important;
}

.img-fluid {
    max-width: 100%;
    /* height: 250px; */
}

@media (min-width: 768px) {

    /* Only apply sticky positioning on desktop view */
    .sticky-image {
        position: sticky;
        top: 10%;
        /* Adjust top value as per your layout */
    }
}
</style>
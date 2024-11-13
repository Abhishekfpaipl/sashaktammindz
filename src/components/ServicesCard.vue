<template>
    <div class="py-5">

        <h1 class="text-center mb-5">{{ title }}</h1>
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
                    <div class="row " v-for="(service, index) in filteredServices" :key="index"
                        style="background-color: var(--third-color);">
                        <div class="col-lg-6 text-center bg-white pt-5 pt-md-0"
                            :class="{ 'order-lg-0': index % 2 === 0, 'order-lg-1': index % 2 !== 0 }">
                            <p class="d-md-none d-block text-center fs-3 text-capitalize">{{ service.title }}</p>
                            <img :src="service.image" class="img-fluid" :alt="service.title">
                        </div>

                        <!-- service Details -->
                        <div class="col-lg-6">
                            <p class="d-md-block d-none text-center fs-3 text-capitalize">{{ service.title }}</p>
                            <div class="p-2 text-start">
                                <p class="mt-2 mb-4 text-muted">{{ service.description }}</p>
                                <ul class="list-styled mb-4">
                                    <li v-for="(title, index) in service.points" :key="index" class="mb-1">{{ title }}
                                    </li>
                                </ul>

                                <!-- Read More Button -->
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
                    sid: "posco",
                    title: "Posco",
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
    height: 250px;
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
<template>
    <div class="py-5" style="padding-top: 64px !important;">

        <h1 class="text-center mt-5">{{ title }}</h1>
        <div class="container">
            <div class="row p-1 my-2" style="background-color: var(--third-color)">
                <!-- Profile Image and Social Links -->
                <div class="col-lg-6 text-center mb-4">
                    <div class="profile-image-container mt-0 mt-md-5">
                        <img :src="profile.image" alt="Profile Photo"
                            class="rounded-circle img-fluid mb-3 profile-image" />
                        <div class="social-links mt-1">
                            <a :href="profile.linkedin" class="btn btn-light btn-sm mx-1">
                                <i class="bi bi-linkedin"></i>
                            </a>
                            <a :href="'mailto:' + profile.email" class="btn btn-light btn-sm mx-1">
                                <i class="bi bi-envelope"></i>
                            </a>
                            <a href="#" class="btn btn-light btn-sm mx-1">
                                <i class="bi bi-box-arrow-up-right"></i>
                            </a>
                        </div>
                    </div>
                    <div class="row row-cols-2 g-2 my-4">
                        <div class="col" v-for="(stat, index) in profile.statistics" :key="index">
                            <div class="p-2 bg-light rounded-3 text-center h-100">
                                <p class="small mb-2">{{ stat.value }}</p>
                                <p class="mb-0 small">{{ stat.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Profile Details -->
                <div class="col-lg-6 bg-white">
                    <div class="p-2 text-start">
                        <p class="fw-bold fs-5">{{ profile.name }} <span class="text-muted">({{ profile.pronouns
                                }})</span></p>

                        <!-- Professional Titles -->
                        <ul class="list-styled mb-4">
                            <li v-for="(title, index) in profile.titles" :key="index" class="small mb-1">{{ title }}
                            </li>
                        </ul>

                        <!-- Description -->
                        <p class="mb-4 small text-muted">{{ profile.description }}</p>
 
                        <div class="">
                            <p class="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat sunt
                                modi dicta aliquam,
                                ullam rerum earum ut veritatis quisquam, quam facilis, id accusamus! Molestias vero
                                atque
                                voluptate aliquid dolores sint?</p>
                        </div>  

                        <!-- Read More Button -->
                        <!-- <button class="btn btn-outline-primary" @click="readMore">
                            Read more <i class="bi bi-arrow-right"></i>
                        </button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileSection',
    data() {
        return {
            title: 'Founder of Sashaktam Mindz',
        }
    },
    computed: {
        profile() {
            let profileId = this.$route.params.profileId;
            return this.$store.getters.getProfile(profileId);
        }
    },
    methods: {
        readMore() {
            // Implement read more functionality
            console.log('Read more clicked')
        }
    }
}
</script>

<style scoped>
.profile-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}


.social-links .btn {
    width: 36px;
    height: 36px;
    padding: 6px;
    border-radius: 50%;
}
</style>
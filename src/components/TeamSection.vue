<template>
    <div class="container">
        <div class="row align-items-center">
            <div :class="[
                'col-12 col-lg-6 text-md-start text-center',
                { 'order-md-2 text-md-end': imagePosition === 'left' }
            ]">
                <h1 class="text-lg-start text-center display-4 text-uppercase mb-4">
                    two highly<br>
                    accomplished<br>
                    <span class="fw-bold" style="color:var(--secondary-color) !important">Advocates</span>
                </h1>
            </div>
            <div :class="[
                'col-12 col-lg-6 mt-4 mt-md-0',
                { 'order-md-1': imagePosition === 'left' }
            ]">
                <div class="row justify-content-center align-items-center" style="min-height: 400px;">
                    <div class="col-12 col-md-6 mb-5" v-for="(member, index) in profiles" :key="index">
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="profile-card shadow">
                                <div class="img">
                                    <img class="shadow" :src="member.image" :alt="member.name" />
                                </div>
                                <div class="caption">
                                    <p class="text-dark mb-2">{{ member.name }}</p>
                                    <p class="small">{{ member.role }}</p>
                                </div>
                            </div>
                        </div>
                        <router-link :to="'/our-team/' + member.sid" class="btn text-white mt-3"
                            style="background-color: var(--primary-color);">Know more <i
                                class="bi bi-right-arrow"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeamSection',
    props: {
        imagePosition: {
            type: String,
            default: 'left',
            validator: (value) => ['left', 'right'].includes(value)
        },
        profiles: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.profile-card {
    position: relative;
    width: 220px;
    height: 220px;
    padding: 30px;
    border-radius: 50%;
    transition: 0.6s;
    margin: 0 25px;
}

.profile-card:hover {
    border-radius: 10px;
    height: 260px;
}

.profile-card .img {
    position: relative;
    width: 100%;
    height: 100%;
    transition: 0.6s;
    z-index: 1;
}

.profile-card:hover .img {
    transform: translateY(-60px);
}

.img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
    transition: 0.6s;
}

.profile-card:hover img {
    border-radius: 10px;
}

.caption {
    text-align: center;
    transform: translateY(-50px);
    opacity: 0;
    transition: 0.6s;
}

.profile-card:hover .caption {
    opacity: 1;
}

.caption .social-links a {
    color: #333;
    margin-right: 15px;
    font-size: 21px;
    transition: 0.6s;
}
</style>
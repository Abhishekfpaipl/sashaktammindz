<template>
    <div class="" style="background-color: var(--third-color);">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-md-6 text-center">
                    <img :src="imageSrc" class="img-fluid rounded shadow-md" style="height: 250px;"
                        alt="Image">
                </div>
                <div class="col-md-6 mt-5 mt-md-0">
                    <h3 class="text-center text-capitalize">{{ title }}</h3>
                    <p class="text-center mb-5 fs-5">{{ description }}</p>
                    <router-link :to="routeLink" class="btn text-white rounded-0" style="background-color: var(--primary-color);"><span class="me-2">Click
                            Here</span><i class="bi bi-arrow-right visit"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        routeLink: {
            type: String,
        },
        imagePosition: {
            type: String,
            default: 'left',
            validator: function (value) {
                return ['left', 'right'].includes(value.toLowerCase());
            }
        }
    }
};
</script>

<style scoped>
 
</style>
<template>
    <div class="container py-5">
        <ul class="nav nav-pills mb-4 justify-content-start justify-content-md-center overflow-x-scroll flex-nowrap" id="scroll" style="white-space: nowrap;" role="tablist">
            <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
                <button class="nav-link text-muted rounded-pill" :class="{ active: activeTab === tab.id }" @click="activeTab = tab.id">
                    {{ tab.name }}
                </button>
            </li>
        </ul>
        <router-link to="/blogs" class="d-flex justify-content-end align-items-center mb-2 text-decoration-none text-dark">See Blogs <i class="bi bi-arrow-right ms-2"></i></router-link>
        <div class="tab-content">
            <div class="tab-pane fade show active">
                <div class="row g-4">
                    <div class="col-md-6 col-lg-4" v-for="(post, index) in filteredPosts.slice(0,3)" :key="index">
                        <router-link :to="'/blogs/' + post.sid" class="text-decoration-none card h-100 border-0 shadow-sm"
                        style="background-color: var(--third-color);">
                            <img :src="post.image" class="card-img-top" :alt="post.title">
                            <div class="card-body text-start">
                                <h5 class="card-title">{{ post.title }}</h5>
                                <div class="d-flex gap-3 mb-2 text-muted small">
                                    <span>{{ post.date }}</span>
                                    <span>{{ post.comments }} Comments</span>
                                </div>
                                <p class="card-text">{{ post.description }}</p>
                                <p class="" style="color: var(--primary-color);">Read more <i class="bi bi-arrow-right"></i></p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogSection',
    data() {
        return {
            activeTab: 'all',
        }
    },
    computed: {
        tabs(){
            return this.$store.getters.getTabs
        },
        posts(){
            return this.$store.getters.getPosts
        },
        filteredPosts() {
            if (this.activeTab === 'all') {
                return this.posts
            }
            return this.posts.filter(post => post.category === this.activeTab)
        }
    }
}
</script>

<style scoped> 

.nav-link.active {
    background-color: var(--primary-color);
    color: white !important;
}

.card {
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}
</style>
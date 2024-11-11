<template>
    <div class="blog-section container py-5">
        <!-- Navigation Tabs -->
        <ul class="nav nav-pills mb-4 justify-content-center" role="tablist">
            <li class="nav-item" v-for="tab in tabs" :key="tab.id">
                <button class="nav-link" :class="{ active: activeTab === tab.id }" @click="activeTab = tab.id">
                    {{ tab.name }}
                </button>
            </li>
        </ul>

        <!-- Blog Posts Grid -->
        <div class="tab-content">
            <div class="tab-pane fade show active">
                <div class="row g-4">
                    <div class="col-md-6 col-lg-4" v-for="post in filteredPosts" :key="post.id">
                        <div class="card h-100 border-0 shadow-sm">
                            <img :src="post.image" class="card-img-top" :alt="post.title">
                            <div class="card-body text-start">
                                <h5 class="card-title">{{ post.title }}</h5>
                                <div class="d-flex gap-3 mb-2 text-muted small">
                                    <span>{{ post.date }}</span>
                                    <span>{{ post.comments }} Comments</span>
                                </div>
                                <p class="card-text">{{ post.excerpt }}</p>
                                <router-link to="" clsss="btn btn-link">Read more</router-link>
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
    name: 'BlogSection',
    data() {
        return {
            activeTab: 'all',
            tabs: [
                { id: 'all', name: 'All Posts' },
                { id: 'blog', name: 'Blog' },
                { id: 'events', name: 'Events' },
                { id: 'courses', name: 'POSH Courses' },
                { id: 'training', name: 'POSH Training' }
            ],
            posts: [
                {
                    id: 1,
                    title: 'Corporate Growth-Vs-PoSH Compliance a Catch22',
                    date: '01/10/2024',
                    comments: 2,
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/10/catch22-in-poshact.jpg',
                    excerpt: "Ultimately, creating a safe and inclusive workplace requires more than compliance. It's about making an ongoing effort to build a...",
                    category: 'blog'
                },
                {
                    id: 2,
                    title: 'Breaking the Binary: Expanding POSH to Foster True Diversity & Inclusion',
                    date: '24/09/2024',
                    comments: 0,
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/09/PoSH-FosteringDI.jpg',
                    excerpt: "Let's start now.Let's create workplaces where everyone—regardless of gender, background, or identity—feels safe and empowered. Let's make sure our...",
                    category: 'blog'
                },
                {
                    id: 3,
                    title: 'Debunking the Fear of Malicious Complaints under PoSH Act.',
                    date: '21/09/2024',
                    comments: 0,
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/09/Malicious-Complaints-Under-PoSH-Act.jpg',
                    excerpt: "The fear of malicious complaints shouldn't deter you from doing your job.Equip yourself with the right knowledge through POSH...",
                    category: 'training'
                },
                {
                    id: 4,
                    title: 'The Legal Intrusion in POSH: When Redressal Becomes a Battle',
                    date: '27/08/2024',
                    comments: 2,
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/08/legal-intrusion-in-posh.jpg',
                    excerpt: 'The author expresses concern over how these tactics complicate the core objective of the PoSH Act, which is to ensure...',
                    category: 'courses'
                },
                {
                    id: 5,
                    title: 'Power of Speaking Up in the Corporate Jungle',
                    date: '17/08/2024',
                    comments: 0,
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/08/Power-of-Speaking-Up-in-the-Corporate-Jungle.jpg',
                    excerpt: 'In the corporate world, the POSH Act is our alarm system, and each of us plays a role in ensuring...',
                    category: 'events'
                },
                {
                    id: 6,
                    title: 'Navigating the Skies of POSH Compliance',
                    date: '13/08/2024',
                    comments: 0,
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/08/Navigating-the-Skies-of-POSH-Compliance-1.jpg',
                    excerpt: 'As we look to the future, the journey of POSH will require continuous navigation through the ever-changing skies of workplace...',
                    category: 'training'
                }
            ]
        }
    },
    computed: {
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
.nav-pills .nav-link {
    color: #6c757d;
    background: none;
    border: none;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border-radius: 20px;
}

.nav-link.active {
    background-color: #6610f2;
    color: white;
}

.card {
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}
</style>
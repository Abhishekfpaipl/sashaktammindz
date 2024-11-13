<template>
    <div style="padding-top: 64px;">
        <div class="container pb-5 mb-5">
            <img :src="blog.image" class="img-fluid mt-3" :alt="blog.title">
            <p class="display-6 my-5 text-center">{{ blog.title }}</p>
            <p class="text-start">{{ blog.description }} Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas dolores ex culpa quidem dolorum dolorem ea pariatur perspiciatis laudantium. Provident pariatur
                neque alias minima incidunt consectetur modi autem? Quibusdam eveniet voluptates nobis aliquam fuga rem
                harum vero eligendi delectus voluptatibus est beatae odit repellendus et, ex voluptatem, modi autem! In
                ducimus doloribus sit quaerat architecto dignissimos veritatis libero nam numquam minima ratione
                corporis sint laudantium nostrum modi natus non suscipit, possimus aperiam provident! Natus non optio
                cum asperiores, earum ut voluptatum quo nemo sunt nisi tenetur incidunt ducimus consectetur maiores
                cupiditate itaque, autem, aperiam et neque fugiat placeat. Totam, similique.</p>
            <BlogSection />
        </div>
    </div>
</template>
<script>
import BlogSection from '@/components/BlogSection.vue';



export default {
    name: "BlogDetailPage",
    components: {
        BlogSection,
    },
    mounted() {
        let blogId = this.$route.params.blogId;
        console.log('hi', blogId)
    },
    computed: {
        blog() {
            let blogId = this.$route.params.blogId;
            return this.$store.getters.getPost(blogId);
        }
    }
}
</script>
<style lang="">

</style>
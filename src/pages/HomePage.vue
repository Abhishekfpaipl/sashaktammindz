<template>
    <div>
        <Banner brandColorOne="#125252" v-observe />
        <div class="">
            <BookDemo :faqs="faqs" image-src="/img/demo.svg" title="let's book your free consultation" v-observe />
        </div>
        <div class="my-5" id="second">
            <PriceSection v-observe />
        </div>
        <div class="">
            <WhyChooseUs v-observe />
        </div>
        <div class="">
            <FaqSection :faqs="faqs" image-src="/img/faq.svg" title="Frequently asked questions" image-position="left"
                v-observe />
        </div>
        <div class="">
            <CustomCounter service="satisfied customers" :serviceCount="1000" category="years of expirence"
                :categoryCount="10" place="projects completed" :placeCount="1500" image="/img/smile2.svg"
                title="Here's the Impact we have created" path="/about-us" v-observe />
        </div>
    </div>
</template>
<script>
import Banner from "@/components/BannerSection.vue";
import BookDemo from "@/components/BookDemo.vue";
import PriceSection from "@/components/PriceSection.vue";
import FaqSection from "@/components/FaqSection.vue";
import CustomCounter from "@/components/CustomCounter.vue";
import WhyChooseUs from "@/components/WhyChooseUs.vue";
export default {
    name: "HomePage",
    components: {
        Banner,
        BookDemo,
        PriceSection,
        FaqSection,
        CustomCounter,
        WhyChooseUs,
    },
}
</script>
<style lang="">

</style>
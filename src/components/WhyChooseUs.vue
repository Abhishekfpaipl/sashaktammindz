<template>
    <div class="">
        <div class="container px-3 px-md-0">
            <h1 class="text-start display-5 text-capitalize mb-5">Why Choose Us</h1>
            <div class="row d-flex justify-content-center pb-5 pt-2">
                <div class="col-lg-4 row row-cols-1 g-3 mt-0">
                    <div v-for="(service, index) in servicesLeft" :key="index" class="col">
                        <div class="d-flex align-items-start">
                            <i class="bi fs-4 pe-4" :class="service.icon"></i>
                            <div class="d-flex flex-column text-start flex-fill">
                                <p class="fs-5 fw-b title mb-0">{{ service.title }}</p>
                                <small class="smaller fw-light mb-0">{{ service.description }}</small>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-lg-4 overflow-hidden p-5 mt-0">
                    <img src="https://img.freepik.com/free-photo/business-man-holding-clipboard-with-why-choose-us-question_23-2148932313.jpg?t=st=1731059685~exp=1731063285~hmac=5cdb0f713021af83dc8b1e243629b05b9b0291ac21e865b769f79d9a5c0e9547&w=740"
                        class="h-100 w-100 of-cover">
                </div>


                <div class="col-lg-4 row row-cols-1 g-3 mt-0">
                    <div v-for="(service, index) in servicesRight" :key="index" class="col">
                        <div class="d-flex align-items-start">
                            <i class="bi fs-5 pe-4" :class="service.icon"></i>
                            <div class="d-flex flex-column text-start flex-fill">
                                <p class="fs-5 fw-b title mb-0">{{ service.title }}</p>
                                <small class="smaller fw-light mb-0">{{ service.description }}</small>
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
    name: "OurService",
    data() {
        return {
            "servicesLeft": [
                {
                    "id": 1,
                    "title": "Round-the-Clock Legal Support",
                    "icon": "bi-headset",
                    "description": "Legal background of over 17+ years which ensures better understanding of the nuances of law."
                },
                {
                    "id": 2,
                    "title": "Commitment to Excellence",
                    "icon": "bi-hand-thumbs-up",
                    "description": "Customized trainings as per the need of the organization."
                },
                {
                    "id": 3,
                    "title": "Tailored Solutions for Every Need",
                    "icon": "bi-pencil",
                    "description": "Three times Chairperson of Local Committee under POSH with District Magistrate, New Delhi District."
                }
            ],
            "servicesRight": [
                {
                    "id": 1,
                    "title": "Proven Legal Expertise",
                    "icon": "bi-journal",
                    "description": "Regular updates to clients with respect to changes in law and recent judgements."
                },
                {
                    "id": 2,
                    "title": "A Decade of Trusted Legal Excellence",
                    "icon": "bi-stars",
                    "description": "Sharing of best practices"
                },
                {
                    "id": 3,
                    "title": "Cost-Effective Legal Solutions",
                    "icon": "bi-currency-rupee",
                    "description": "Personalised attention."
                },
                {
                    "id": 4,
                    "title": "Scalable Solutions for Every Business",
                    "icon": "bi-graph-up-arrow",
                    "description": "Ease of access to guidance."
                }
            ]
        }

    }
}
</script>
<style lang="">

</style>
<template>
    <div class="py-5" style="padding-top: 64px !important;">

        <h1 class="text-center mb-5">{{ title }}</h1>
        <div class="container">
            <div class="row p-1 my-2" v-for="(service, index) in services" :key="index">
                <p class="text-center fs-4 text-capitalize mb-4">{{ service.title }}</p>
                <div class="col-lg-6 text-center mb-4"
                    :class="{ 'order-lg-0': index % 2 === 0, 'order-lg-1': index % 2 !== 0 }">
                    <img :src="service.image" class="img-fluid sticky-image" :alt="service.title">
                </div>

                <!-- service Details -->
                <div class="col-lg-6 bg-white">
                    <div class="p-2 text-start">
                        <p class="mb-4 text-muted">{{ service.description }}</p>
                        <ul class="list-styled mb-4">
                            <li v-for="(title, index) in service.points" :key="index" class="mb-1">{{ title }}</li>
                        </ul>

                        <!-- Read More Button -->
                        <button class="btn btn-outline-primary" @click="readMore">
                            Read more <i class="bi bi-arrow-right"></i>
                        </button>
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
            services: [
                {
                    title: "settting up of posh infrastructure",
                    description: "",
                    image: "/img/setup.png",
                    points: [
                        "Drafting customized Policy / Review of existing policy to ensure that they are in line of POSH Act, 2013 and also as per the organizational structure",
                        "Creation of Awareness Posters for workplace.",
                        "Formation of Internal Committee – Provide guidance to select right persons to be members of Internal Committee and Documentation to be followed. "
                    ]
                },
                {
                    title: "posco Setup",
                    description: "",
                    image: "/img/setup.png",
                    points: [
                        "Drafting Child Protection Policy for schools.",
                    ]
                },
                {
                    title: "Trainings and Skill Building under the POSH Act 2013",
                    description: "",
                    image: "/img/traningPosh.png",
                    points: [
                        "Trainings/Awareness sessions for Employees.",
                        "Capability Building Workshop for Members of Internal Committee.",
                        "Train the Trainer",
                        "Cyber safety training for online sexual harassment.",
                        "Leadership awareness session for Top Management and HR.",
                        "Active Bystander Training"
                    ]
                },
                {
                    title: "Trainings under the POCSO Act, 2012",
                    description: "",
                    image: "/img/traningPosco.png",
                    points: [
                        "Awareness session for kids about ‘Safe-Unsafe and Confusing Touch.",
                        "Train the Trainer",
                        "Age appropriate Child Sexual Abuse/ Online Sexual Abuse prevention workshop",
                        "Awareness training for support staff, admin staff, drivers, helpers in schools and all other organizations which are visited by children.",
                        "Trainings/Awareness sessions for Educators & School Leaders.",
                        "Compliance Training for Child Protection Committee Members",
                    ]
                },
                {
                    title: "Empanelment and Complaint handling under the POSH Act, 2012",
                    description: "",
                    image: "/img/complaint.png",
                    points: [
                        " Empanelment as an External Member in the Internal Committee, as per provisions of Act.",
                        "Empanelment as Presiding Officer of Internal Committee where there is no woman employee at senior level management",
                        "Providing assistance in preparing and submitting PoSH Annual Reports.",
                        "Monitor functioning of Internal Committee, ensure meetings held on timely basis and got documented as per Act.",
                        "Redressal of Complaints, Conducting Inquiry and Report Writing"
                    ]
                },
                {
                    title: "POSH AUDIT",
                    description: "",
                    image: "/img/poshAudit.png",
                    points: [
                        "Organization’s compliance to the POSH Act, 2013",
                        "Review of current practices followed and best practices to be adopted to make workplace safer",
                        "Awareness level of employees and staff with respect to POSH law",
                        "Audit of POSH Policy of organization",
                        "Audit of contracts for POSH compliance",
                        "Readiness of Organization to provide information and handle POSH inspections as provided under Section 25 of POSH Act."
                    ]
                },
                {
                    title: "posco AUDIT",
                    description: "",
                    image: "/img/poscoAudit.png",
                    points: [
                        "Institution's compliance to POCSO Act, 2012 and POCSO Rules 2020",
                        "Review of protocol followed and adoption of best practices in the school / college / educational institution in pursuance of POCSO law",
                        "Awareness level of Educators, Child Protection Committee and Support staff",
                        "Audit of Child Protection Policy adopted by the institution",
                        "Audit of forms/contracts signed by the third party contractual employees in compliance of POCSO law",
                        "Audit of Police Verification Record of Support Staff/employees",
                        "Physical Inspection of the premises"
                    ]
                },

            ]
        }
    }
}
</script>
<style scoped>
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
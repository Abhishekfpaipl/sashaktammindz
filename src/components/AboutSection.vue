<template>
    <div class="py-5" style="padding-top: 64px !important;">

        <h1 class="text-center mt-5">{{ title }}</h1>
        <div class="container">
            <div class="row p-1 my-2" v-for="(profile, index) in profiles" :key="index"
                style="background-color: var(--third-color)">
                <!-- Profile Image and Social Links -->
                <div class="col-lg-3 text-center mb-4"
                    :class="{ 'order-lg-0': index % 2 === 0, 'order-lg-1': index % 2 !== 0 }">
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
                </div>

                <!-- Profile Details -->
                <div class="col-lg-9 bg-white">
                    <div class="p-2" :class="{ 'text-start': index % 2 === 0, 'text-end': index % 2 !== 0 }">
                        <p class="fw-bold fs-5">{{ profile.name }} <span class="text-muted">({{ profile.pronouns
                                }})</span></p>

                        <!-- Professional Titles -->
                        <ul class="list-unstyled mb-4">
                            <li v-for="(title, index) in profile.titles" :key="index" class="small mb-1">{{ title }}
                            </li>
                        </ul>

                        <!-- Description -->
                        <p class="mb-4 small text-muted">{{ profile.description }}</p>

                        <!-- Statistics Grid -->
                        <div class="row g-4 mb-4">
                            <div class="col-md-4" v-for="(stat, index) in profile.statistics" :key="index">
                                <div class="p-4 rounded-3 text-center h-100"
                                    style="background-color: var(--third-color)">
                                    <h3 class="mb-2">{{ stat.value }}</h3>
                                    <p class="mb-0 small">{{ stat.description }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- More Details -->
                        <div class="">
                            <p class="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat sunt
                                modi dicta aliquam,
                                ullam rerum earum ut veritatis quisquam, quam facilis, id accusamus! Molestias vero
                                atque
                                voluptate aliquid dolores sint?</p>
                        </div>

                        <!-- Publications -->
                        <!-- <div class="publications mb-4">
                            <p>
                                She is also a part of <a href="#" class="text-decoration-none">WICCI</a> and
                                <a href="#" class="text-decoration-none">G100</a>. She has co-authored a book titled
                                <em>'{{ profile.publications[0].title }}'</em>, published by
                                <a href="#" class="text-decoration-none">Thomson Reuters</a>.
                            </p>
                            <p>
                                Also authored book titled <em>'{{ profile.publications[1].title }}'</em>
                                published by Thomson Reuters. She has written {{ profile.articlesCount }}+ articles / notes
                                / opinions
                                some of which have been reported by {{ profile.featuredIn.join(', ') }}.
                            </p>
                        </div> -->

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
    name: 'ProfileSection',
    data() {
        return {
            title: 'Founders of Sashaktam Mindz',
            profiles: [
                {
                    name: 'Adv Noopur Singhal',
                    pronouns: 'She/Her',
                    image: '/img/owner.png',
                    linkedin: '#',
                    email: 'contact@example.com',
                    titles: [
                        "Adv. Noopur Singhal is the founder of the firm and Principal Consultant.",
                        "Practicing advocate in New Delhi since 2007.",
                        "Panel advocate with Government of Haryana.",
                        "Three times Chairperson of Local Committee, New Delhi District, New Delhi",
                        "State President of Uttar Pradesh Anti-Sexual Harassment Council with Women’s Indian Chamber of Commerce and Industry(WICCI)",
                        "Chairperson of the Internal Committee and",
                        "Currently empaneled as an External member of the Internal",
                        "Committee-POSH with various corporates.",
                    ],
                    description: 'Established in January, 2022, सshaktaम्Mindz is a young and dynamic firm to provide Consultancy and Trainings to Organizations and Individuals on Anti-Sexual Harassment Laws - The Sexual Harassment of Women at Workplace (Prevention, Prohibition & Redressal) Act, 2013 and The Protection of Children from Sexual Offences, 2012.',
                    statistics: [
                        {
                            value: '1500+',
                            description: 'Assisted organizations in complying with POSH law'
                        },
                        {
                            value: '150+',
                            description: 'Acted as external member of ICs in organizations'
                        },
                        {
                            value: '500+',
                            description: 'Issued legal opinions'
                        },
                        {
                            value: '805+',
                            description: 'Handled complaints'
                        },
                        {
                            value: '400+',
                            description: 'Conducted training / awareness programs'
                        },
                        {
                            value: '100+',
                            description: 'Participated in events including on by UN Women and NCW'
                        }
                    ],
                    // publications: [
                    //     {
                    //         title: 'Handbook on the Law of Sexual Harassment',
                    //         publisher: 'Thomson Reuters'
                    //     },
                    //     {
                    //         title: 'Handbook on the Law for Protection of Rights of Transgender Persons',
                    //         publisher: 'Thomson Reuters'
                    //     }
                    // ],
                    // articlesCount: 200,
                    // featuredIn: [
                    //     'Business Standard',
                    //     'Huffington Post',
                    //     'Economic Times',
                    //     'Livemint and Business Standard'
                    // ]
                },
                {
                    name: 'Adv. Namrata Mishra',
                    pronouns: 'She/Her',
                    image: '/img/owner2.png',
                    linkedin: '#',
                    email: 'contact@example.com',
                    titles: [
                        "POCSO Trainer with सshaktaम्Mindz",
                        "Practicing advocate with experience of 20 years",
                        "President of Indian Lawyers Association, Agra Chapter",
                        "State Vice-President of Uttar Pradesh Anti-Sexual Harassment Council with (WICCI), ",
                        "Acclaimed POCSO Lawyer and Child Protection Activist",
                        "Founder of Laws Around Us",
                        "Founder of ‘We Against Child Abuse’ – An online community",
                        "Conducted 600+ workshops and training programs attended by approximately 3 lakhs students across nation and 10,000 educators",
                        "Counsellor with 1090 Women Helpline with Uttar Pradesh Police and UNICEF",
                        "Conferred with ‘Global Goodwill Ambassador’ Award from USA and Rex Karamveer Chakra award instituted by UN in 2019"
                    ],
                    description: 'Established in January, 2022, सshaktaम्Mindz is a young and dynamic firm to provide Consultancy and Trainings to Organizations and Individuals on Anti-Sexual Harassment Laws - The Sexual Harassment of Women at Workplace (Prevention, Prohibition & Redressal) Act, 2013 and The Protection of Children from Sexual Offences, 2012.',
                    statistics: [
                        {
                            value: '1500+',
                            description: 'Assisted organizations in complying with POSH law'
                        },
                        {
                            value: '150+',
                            description: 'Acted as external member of ICs in organizations'
                        },
                        {
                            value: '500+',
                            description: 'Issued legal opinions'
                        },
                        {
                            value: '805+',
                            description: 'Handled complaints'
                        },
                        {
                            value: '400+',
                            description: 'Conducted training / awareness programs'
                        },
                        {
                            value: '100+',
                            description: 'Participated in events including on by UN Women and NCW'
                        }
                    ],
                    // publications: [
                    //     {
                    //         title: 'Handbook on the Law of Sexual Harassment',
                    //         publisher: 'Thomson Reuters'
                    //     },
                    //     {
                    //         title: 'Handbook on the Law for Protection of Rights of Transgender Persons',
                    //         publisher: 'Thomson Reuters'
                    //     }
                    // ],
                    // articlesCount: 200,
                    // featuredIn: [
                    //     'Business Standard',
                    //     'Huffington Post',
                    //     'Economic Times',
                    //     'Livemint and Business Standard'
                    // ]
                },
            ]
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


@media (max-width: 991.98px) {
    .profile-image-container {
        margin-bottom: 2rem;
    }
}
</style>
// TopicsCovered.vue
<template>
    <div class="container my-5">
        <h1 class="text-center display-6 mb-4">Topics Covered</h1>
        <p class="text-center mb-5">
            Each session is tailored to deepen participants' understanding of the POSH Act's complexities, blending
            education with empowerment. This program covers all of the POSH Aware modules and then extends to cover the
            following finer nuances and procedures of the Act as per the Supreme Court mandates.
        </p>

        <div class="row g-4">
            <div v-for="(topic, index) in topics" :key="index" class="col-md-6 col-lg-3">
                <div class="card h-100 border-0 shadow-sm" style="background-color: var(--third-color)">
                    <img :src="topic.image" class="card-img-top p-3" :alt="topic.title"
                        style="height: 200px; object-fit: contain;">
                    <div class="card-body text-center">
                        <h5 class="fw-medium mb-3" style="color: var(--primary-color)">{{ topic.title }}</h5>
                        <p class="card-text small">{{ topic.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopicsCovered',
    data() {
        return {
            topics: [
                {
                    title: 'Third Party Harassment',
                    description: 'Navigate the complexities of dealing with harassment involving external entities and ensure appropriate response measures.',
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/02/3rd-Party-Harasssment.jpg'
                },
                {
                    title: 'Principles of Natural Justice',
                    description: 'Outline the process for Internal Committee (IC) to be impartial & free from any actual or perceived bias or prejudice.',
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/02/Principles-of-Natural-Justice.jpg'
                },
                {
                    title: 'Manner of Investigation',
                    description: 'Learn the appropriate conduct and methodology for conducting POSH investigations, maintaining impartiality and professionalism throughout.',
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/02/Manner-of-Investigation.jpg'
                },
                {
                    title: 'Preponderance of probabilities',
                    description: 'Preponderance of probabilities and its crucial role in the phase of investigations under the POSH Act!',
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/02/Preponderance.jpg'
                },
                {
                    title: 'Advanced Investigations',
                    description: 'Gather practical tips and strategies to carry out investigations with precision, ensuring the collection of clear and relevant evidence.',
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/02/Tips-on-Investigations.jpg'
                },
                {
                    title: 'Framing of Recommendations',
                    description: 'Discover how to frame actionable and fair recommendations post-investigation, balancing organizational policies with legal compliance.',
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/02/Framing-of-recommendations.jpg'
                },
                {
                    title: 'Investigation Reporting',
                    description: 'Master the skill of drafting clear, concise, and comprehensive investigation reports that accurately reflect the findings and proceedings.',
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/02/Art-of-writing-investigation-reports.jpg'
                },
                {
                    title: 'Top 5 Gray areas',
                    description: 'Examine the most ambiguous aspects of the POSH Act and learn strategies for addressing these challenges effectively.',
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/02/Top-5-gray-areas.jpg'
                },
                {
                    title: 'Mock Investigation',
                    description: 'Engage in a simulated investigation to practice the skills learned, receiving real-time feedback to enhance investigatory techniques.',
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/02/Mock-Investigation.jpg'
                },
                {
                    title: 'Total PoSH Compliance',
                    description: 'Outline the steps and measures necessary to achieve total compliance with the POSH Act within the organization.',
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/02/Total-Compliance-roadmap.jpg'
                },
                {
                    title: 'Q&A + Reflection',
                    description: 'Encourage participants to consolidate their understanding through questions and discussion, applying the insights gained to their roles within the organization.',
                    image: 'https://www.nomeansno.in/wp-content/uploads/2024/02/QA.jpg'
                }
            ]
        }
    }
}
</script>

<style scoped>
.card {
    transition: transform 0.2s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
} 

.card-text {
    color: #6c757d;
}
</style>
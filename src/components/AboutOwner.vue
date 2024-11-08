<template>
    <div class="container my-5">
        <div class="row align-items-center">
            <!-- Trainer Image -->
            <div class="col-md-4">
                <div class="rounded-0 overflow-hidden">
                    <img src="/img/owner.png" alt="Trainer Image" class="img-fluid">
                </div>
            </div>

            <!-- Trainer Details -->
            <div class="col-md-8 text-start">
                <h1 class="mb-3">Know Your Trainer</h1>
                <p class="">
                    Established in January 2022, <strong>सshaktaम्Mindz</strong> is a young and dynamic firm offering
                    consultancy and training to organizations and individuals on Anti-Sexual Harassment Laws. The
                    services focus on <strong>The Sexual Harassment of Women at Workplace (Prevention, Prohibition &
                        Redressal) Act, 2013</strong> and <strong>The Protection of Children from Sexual Offences,
                        2012</strong>.
                    <br><br>
                    <strong>Adv. Noopur Singhal</strong> is the founder of the firm and serves as the Principal
                    Consultant.
                </p>

                <h3 class="mb-3">Qualifications and Experience</h3>
                <ul class="list-unstyled mb-4"> 
                    <li v-for="(qualification, index) in qualifications" :key="index">
                        <strong>{{ qualification.title }}</strong>: {{ qualification.description }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TrainerProfile',
    data() {
        return {
            qualifications: [
                { title: 'Practicing Advocate', description: 'in New Delhi since 2007' },
                { title: 'Panel Advocate', description: 'with Government of Haryana' },
                { title: 'Chairperson', description: 'of Local Committee, New Delhi District (Three times)' },
                { title: 'State President', description: 'of Uttar Pradesh Anti-Sexual Harassment Council with WICCI' },
                { title: 'Chairperson', description: 'of the Internal Committee' },
                { title: 'Empaneled External Member', description: 'of the Internal Committee-POSH with various corporates' }
            ]
        };
    }
}
</script>
<style scoped> 

.img-fluid {
    width: 100%;
    height: 100%;
    object-fit: cover;
} 
</style>

<template>
    <div class="container">
        <p class="text-center display-6 my-5">
            Insights from the 2022 International Labour Organization (ILO) Report
        </p>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div class="col" v-for="(report, index) in reports" :key="index">
                <div class="card h-100 shadow-md p-3 border-0" style="background-color: var(--third-color);">
                    <p class="fs-2">{{ report.number }}</p>
                    <p class="text-muted small">{{ report.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutReportSection",
    data() {
        return {
            reports: [
                { number: "23%", description: "One in five employees reported experiencing violence or harassment at work." },
                { number: "17.9%", description: "Nearly 18% of workers faced psychological violence and harassment during their careers." },
                { number: "8.5%", description: "Approximately 8.5% of employees encountered physical violence or harassment, with a higher incidence among men." }
            ]
        };
    }
};
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

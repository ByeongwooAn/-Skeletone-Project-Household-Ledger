<script setup>
import { Doughnut } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    plugins,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const chartData = {
    labels: ["수입", "지출"],
    datasets: [
        {
            label: "My Dataset",
            data: [60, 40],
            backgroundColor: ["#60a5fa", "#f87171"],
            hoverOffset: 10,
        },
    ],
};

const chartOptions = {
    responsive: true,
    cutout: "20%",
};
</script>

<template>
    <Doughnut :data="chartData" :options="chartOptions" />
</template>

<script setup>
import ApiService from "@/function/apiService";
import { Doughnut } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

ApiService.getTypes("income")
    .then((res) => {
        console.log("응답 데이터: ", res.data);
    })
    .catch((err) => {
        console.error("에러 발생: ", err);
    });

let income = 60;
let expense = 40;

const chartData = {
    labels: ["수입", "지출"],
    datasets: [
        {
            label: "My Dataset",
            data: [income, expense],
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

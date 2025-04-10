<script setup>
import { ref, onMounted } from "vue";
import { Doughnut } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
} from "chart.js";

import ApiService from "@/function/apiService";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

// 차트 데이터는 ref로 선언
const chartData = ref(null);

const chartOptions = {
    responsive: true,
    cutout: "20%",
};

// 데이터 불러오는 함수
async function getTypeTotal(type) {
    try {
        const res = await ApiService.getTypes(type);
        return res.data.reduce((sum, item) => sum + item.amount, 0);
    } catch (err) {
        console.error(`${type} 불러오기 실패`, err);
        return 0;
    }
}

// 컴포넌트가 화면에 뜨면 실행
onMounted(async () => {
    const income = await getTypeTotal("income");
    const expense = await getTypeTotal("expense");

    const total = income + expense;

    const incomePercent = ((income / total) * 100).toFixed(0); // 소수점 1자리
    const expensePercent = ((expense / total) * 100).toFixed(0);

    chartData.value = {
        labels: ["수입", "지출"],
        datasets: [
            {
                label: "수입/지출 비율",
                data: [incomePercent, expensePercent],
                backgroundColor: ["#60a5fa", "#f87171"],
                hoverOffset: 10,
            },
        ],
    };
});
</script>

<template>
    <div v-if="chartData">
        <Doughnut :data="chartData" :options="chartOptions" />
    </div>
    <div v-else>로딩 중...</div>
</template>

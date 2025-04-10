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

const chartData = ref(null);

const chartOptions = {
    responsive: true,
    cutout: "20%",
};

// 지출 카테고리별로 금액 합산
function groupExpenseByCategory(data) {
    const categoryMap = {};

    data.forEach((item) => {
        if (item.type === "expense") {
            if (!categoryMap[item.category]) {
                categoryMap[item.category] = 0;
            }
            categoryMap[item.category] += item.amount;
        }
    });

    return categoryMap;
}

onMounted(async () => {
    try {
        const res = await ApiService.getTypes("expense");
        const data = res.data;

        const grouped = groupExpenseByCategory(data);

        chartData.value = {
            labels: Object.keys(grouped),
            datasets: [
                {
                    label: "카테고리별 지출",
                    data: Object.values(grouped),
                    backgroundColor: [
                        "#ef9a9a",
                        "#7986cb",
                        "#ffb74d",
                        "#aed581",
                        "#ba68c8",
                        "#f06292",
                        "#4fc3f7",
                    ],
                    hoverOffset: 10,
                },
            ],
        };
    } catch (err) {
        console.error("지출 데이터 불러오기 실패", err);
    }
});
</script>

<template>
    <div v-if="chartData">
        <Doughnut :data="chartData" :options="chartOptions" />
    </div>
    <div v-else>로딩 중...</div>
</template>

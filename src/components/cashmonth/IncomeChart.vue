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

// 차트 데이터
const chartData = ref(null);

const chartOptions = {
    responsive: true,
    cutout: "20%",
};

// 수입 항목들을 카테고리별로 묶는 함수
function groupIncomeByCategory(data) {
    const categoryMap = {};

    data.forEach((item) => {
        if (item.type === "income") {
            if (!categoryMap[item.category]) {
                categoryMap[item.category] = 0;
            }
            categoryMap[item.category] += item.amount;
        }
    });

    return categoryMap;
}

// 컴포넌트가 마운트되면 실행
onMounted(async () => {
    try {
        const res = await ApiService.getTypes("income");
        const data = res.data;

        const grouped = groupIncomeByCategory(data);

        chartData.value = {
            labels: Object.keys(grouped),
            datasets: [
                {
                    label: "카테고리별 수입",
                    data: Object.values(grouped),
                    backgroundColor: [
                        "#fdd835",
                        "#81c784",
                        "#4dd0e1",
                        "#f472b6",
                        "#c084fc",
                        "#fb923c",
                    ],
                    hoverOffset: 10,
                },
            ],
        };
    } catch (err) {
        console.error("수입 데이터 불러오기 실패", err);
    }
});
</script>

<template>
    <div v-if="chartData">
        <Doughnut :data="chartData" :options="chartOptions" />
    </div>
    <div v-else>로딩 중...</div>
</template>

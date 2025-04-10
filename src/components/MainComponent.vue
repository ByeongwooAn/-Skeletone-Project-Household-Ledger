<script setup>
import "../css/mainview.css";
import { RouterLink } from "vue-router";
import DoughnutChart from "./cashmonth/DoughnutChart.vue";
import ApiService from "@/function/apiService";
import { ref, onMounted } from "vue";

// ref로 상태 선언
const incomeTotal = ref(0);
const expenseTotal = ref(0);

// API 호출 함수
async function getTypeTotal(type) {
    try {
        const res = await ApiService.getTypes(type);
        return res.data.reduce((sum, item) => sum + item.amount, 0);
    } catch (err) {
        console.error(`${type} 불러오기 실패`, err);
        return 0;
    }
}

// 컴포넌트 로딩 시 호출
onMounted(async () => {
    incomeTotal.value = await getTypeTotal("income");
    expenseTotal.value = await getTypeTotal("expense");
});
</script>

<template>
    <div id="main-view-box">
        <div id="main-attribute-div1">
            <div id="recent-deal-first">최근 거래 내역 1</div>
            <div id="recent-deal">최근 거래 내역 2</div>
            <div id="recent-deal">최근 거래 내역 3</div>
            <div id="recent-deal">최근 거래 내역 4</div>
            <div id="recent-deal">최근 거래 내역 5</div>
        </div>

        <div id="main-attribute-div2">
            <!-- API 값 표시 -->
            <div id="total-income">
                총 수입: {{ incomeTotal.toLocaleString() }}원
            </div>
            <div id="total-expense">
                총 지출: {{ expenseTotal.toLocaleString() }}원
            </div>
        </div>

        <div id="main-attribute-div3">
            <div>월간 수입/지출 비율</div>
            <div id="doughnutchart-div"><DoughnutChart /></div>
        </div>

        <div id="main-attribute-div4">
            <RouterLink to="/cashflow">새 거래 내역 추가 +</RouterLink>
        </div>
    </div>
</template>

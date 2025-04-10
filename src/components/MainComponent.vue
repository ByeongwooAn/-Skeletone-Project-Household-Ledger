<script setup>
import "../css/mainview.css";
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import DoughnutChart from "./cashmonth/DoughnutChart.vue";
import parseAndSortCashflows from "@/function/sortList";
import ApiService from "@/function/apiService";

// ref로 상태 선언
const list = ref([]);
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
    const res = await fetch("/db.json");
    const json = await res.json();

    list.value = parseAndSortCashflows(json);
    incomeTotal.value = await getTypeTotal("income");
    expenseTotal.value = await getTypeTotal("expense");
});
</script>

<template>
    <div class="main-view-box">
        <div class="main-attribute-div1">
            <div class="recent-cashreport">최근 추가 내역</div>
                <div class="recent-deal"v-for="item in list.slice(0, 4)" :key="item.id">
                    {{ item.date }}  | {{item.type }}  |  {{ item.category }}  |  {{ item.amount.toLocaleString() }}원
                </div>
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

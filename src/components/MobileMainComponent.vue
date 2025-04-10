<script setup>
import "../css/mainviewmobile.css";
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
    <div class="page-wrapper">
        <div id="mobile-main-div1" class="mobile-mainview-div">
            <div id="mobile-mainview-text1" class="mobile-mainview-text">
                4월 수입 지출 총액
            </div>
            <div id="mobile-main-adttribute1" class="mobile-main-attribute-div">
                총 수입: {{ incomeTotal.toLocaleString() }}원
            </div>
            <div id="mobile-main-adttribute2" class="mobile-main-attribute-div">
                총 지출: {{ expenseTotal.toLocaleString() }}원
            </div>
        </div>
        <div id="mobile-main-div2" class="mobile-mainview-div">
            <div id="mobile-mainview-text2" class="mobile-mainview-text">
                월간 수입 지출 비율
                <div id="mobile-doughnutchart-div"><DoughnutChart /></div>
            </div>
        </div>
        <div id="mobile-main-div3" class="mobile-mainview-div">
            <div id="mobile-mainview-text3" class="mobile-mainview-text">
                4월 최근 거래 내역
            </div>
            <div
                id="mobile-main-deal-report1"
                class="mobile-main-attribute-div"
                v-for="item in list.slice(0, 4)"
                :key="item.id"
            >
                {{ item.date }} | {{ item.type }} | {{ item.category }} |
                {{ item.amount.toLocaleString() }}원
            </div>
        </div>
        <RouterLink to="/cashflow"
            ><div id="mobile-main-div4" class="mobile-mainview-div">
                <div id="mobile-mainview-text4" class="mobile-mainview-text">
                    새 거래 내역 추가 +
                </div>
            </div></RouterLink
        >
    </div>
</template>

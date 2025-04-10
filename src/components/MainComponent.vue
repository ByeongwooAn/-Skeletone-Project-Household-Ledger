<script setup>
import "../css/mainview.css";
import { ref, onMounted } from 'vue';
import { RouterLink } from "vue-router";
import DoughnutChart from "./cashmonth/DoughnutChart.vue";
import parseAndSortCashflows from "@/function/sortList";

const list=ref([]);

onMounted(async () => {
  const res = await fetch("/db.json"); 
  const json = await res.json();

  list.value=parseAndSortCashflows(json);
});

</script>

<template>
    <div class="main-view-box">
        <div class="main-attribute-div1">
            <div class="recent-cashreport">최근 거래 내역</div>
            <div class="recent-deal"v-for="item in list.slice(0, 4)" :key="item.id">
  {{ item.date }}  | {{item.type }}  |  {{ item.category }}  |  {{ item.amount.toLocaleString() }}원
</div>
            
        </div>

        <div id="main-attribute-div2">
            <div id="recent-total-income">4월 총 수입</div>
            <div id="recent-total-expense">4월 총 지출</div>
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

<template>
  <div class="container">

    <!-- 헤더 부분 -->
    <div class="headers">
      <h2>거래내역</h2>
      <div class="month-picker">
        <button class="nav-button" @click="prevMonth">&#8249;</button>
        <span class="current-month">{{ currentMonth }}</span>
        <button class="nav-button" @click="nextMonth">&#8250;</button>
      </div>
    </div>
    
    
    <!-- 상단 탭 -->
    <div class="tabs">
      <button
        class="tab"
        :class="{ active: activeTab === '전체' }"
        @click="setActiveTab('전체')"
      >
        전체 ({{ totalCount }}) <br/><span class="totalAmount">{{ formatCurrency(totalAmount) }}</span>
      </button>
      <button
        class="tab"
        :class="{ active: activeTab === '수입' }"
        @click="setActiveTab('수입')"
      >
        수입 ({{ incomeCount }})<br/>
      </button>
      <button
        class="tab"
        :class="{ active: activeTab === '지출' }"
        @click="setActiveTab('지출')"
      >
        지출 ({{ expenseCount }})
      </button>
    </div>

    <!-- 테이블 -->
    <div class="table">
      <!-- 테이블 헤더 -->
      <div class="table-header">
        <div><input type="checkbox" /></div>
        <div>날짜</div>
        <div>카테고리</div>
        <div>금액</div>
        <div>내용</div>
      </div>

      <!-- 테이블 바디 -->
      <div
        v-for="(item, index) in filteredList"
        :key="index"
        class="table-row"
      >
        <div><input type="checkbox" /></div>
        <div>{{ item.date }}</div>
        <div>{{ item.category }}</div>
        <div :class="['amount', item.type === '수입' ? 'plus' : 'minus']">
          {{ formatCurrency(item.amount) }}
        </div>
        <div>{{ item.memo }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/css/cashreportview.css';
import { ref, computed } from "vue";

// 헤더 영역

const currentDate = ref(new Date())
const currentMonth = computed(() =>
  currentDate.value.toISOString().slice(0, 7)
)

function prevMonth() {
  currentDate.value.setMonth(currentDate.value.getMonth() - 1)
  currentDate.value = new Date(currentDate.value) // 이전 월로 이동 
}

function nextMonth() {
  currentDate.value.setMonth(currentDate.value.getMonth() + 1)
  currentDate.value = new Date(currentDate.value) // 다음 월로 이동
}


// 테이블 영역
const activeTab = ref("전체");

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

const list = ref([
  { date: "2025.03.07(월)", category: "쇼핑", amount: 100000, memo: "가전제품 구입", type: "수입" },
  { date: "2025.04.07(월)", category: "쇼핑", amount: 100000, memo: "가전제품 구입", type: "수입" },
  { date: "2025.04.07(월)", category: "쇼핑", amount: 100000, memo: "가전제품 구입", type: "지출" },
  // 추가로 더...
]);

const filteredList = computed(() => {
  if (activeTab.value === "전체") return list.value;
  return list.value.filter((item) => item.type === activeTab.value);
});

const totalCount = computed(() => list.value.length);
const incomeCount = computed(() => list.value.filter(item => item.type === "수입").length);
const expenseCount = computed(() => list.value.filter(item => item.type === "지출").length);

const totalAmount = computed(() => {
  return list.value.reduce((sum, item) => sum + item.amount, 0);
});



const formatCurrency = (amount) => {
  return amount.toLocaleString() + "원";
};
</script>
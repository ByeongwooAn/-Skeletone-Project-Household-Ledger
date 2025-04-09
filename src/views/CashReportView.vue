<template>
  <div class="container">
    <!-- 상단 탭 -->
    <div class="tabs">
      <button
        class="tab"
        :class="{ active: activeTab === '전체' }"
        @click="setActiveTab('전체')"
      >
        전체 ({{ totalCount }}) <br/><span>{{ formatCurrency(totalAmount) }}</span>
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
import { ref, computed } from "vue";

const activeTab = ref("전체");

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

const list = ref([
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

<style scoped>
.container {
  padding: 16px;
  border: 1px solid #BABABA;
  border-radius: 20px;
}

.tabs {
  display: flex;
  margin-bottom: 16px;
  justify-content: space-around;
}

.tab {
  position: relative;
  padding: 8px 16px;
  border: none;
  background-color: #f2f2f2;
  cursor: pointer;
  border-radius: 4px;
}

.tab.active {
  background-color: #42b983;
  color: white;
  font-weight: bold;
}

.tab.active::after{
  transition: all 0.3s;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px; /* 줄 두께 */
  background-color: #333; /* 줄 색상 */
}

.table {
  border-top: 2px solid #ddd;
}

.table-header{
  justify-content: center;
}

.table-header,
.table-row {
  display: grid;
  
  grid-template-columns:1fr 2fr 2fr 2fr 2fr;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  align-items: center;
}

.amount.plus {
  color: green;
}

.amount.minus {
  color: red;
}
</style>
<template>
  <div class="container">
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
  position: relative;
  width: 1155px;
  max-width: 95%;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 20px;
  padding: 16px;
  transform: translateY(50%);
}

/* 탭 버튼 영역 */
.tabs {
  display: flex;
  gap: 16px;
  justify-content: space-around;
  margin-bottom: 20px;
}

.tab {
  padding: 10px 20px;
  border: none;
  background-color: #feffed;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
 
}

.tab.active {
  background-color: #feffed;
  
}
.tab.active .totalAmount{
  color: #F99810;
}
.tab:hover {
  color: black; /* 버튼 안의 일반 텍스트는 검정색 */
  font-weight: bold;
  transition: color 0.3s;
}

.tab:hover .totalAmount {
  color: #F99810; /* totalAmount 클래스는 오렌지색 */
  
}



/* 테이블 영역 */
.table {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.table-header,
.table-row {
  display: grid;
  grid-template-columns: 40px 1fr 1fr 1fr 2fr;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  gap: 0px 20px;
}

.table-header {
  background-color: #f8f8f8;
  font-weight: bold;
}

.amount.plus {
  color: green;
}

.amount.minus {
  color: red;
}

/* 반응형: 화면 너비 줄어들 때 */
@media (max-width: 1200px) {
  .container {
    width: 90%;
  }
}

@media (max-width: 768px) {
  .container {
    width: 95%;
    padding: 16px;
  }

  .tabs {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .table-header,
  .table-row {
    grid-template-columns: 1fr 2fr 2fr 2fr 3fr;
  }
}

@media (max-width: 480px) {
  .container {
    width: 100%;
    padding: 12px;
  }

  .tabs {
    flex-direction: column;
    gap: 8px;
  }

  .table-header,
  .table-row {
    grid-template-columns: 1fr 2fr 2fr;
  }
}
</style>
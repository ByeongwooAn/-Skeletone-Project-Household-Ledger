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
        수입 ({{ incomeCount }})<br/><span class="incomeAmount">{{ formatCurrency(incomeAmount) }}</span>
      </button>
      <button
        class="tab"
        :class="{ active: activeTab === '지출' }"
        @click="setActiveTab('지출')"
      >
        지출 ({{ expenseCount }})<br/><span class="expenseAmount">{{ formatCurrency(expenseAmount) }}</span>
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
   
    <addButton/>
  </div>

</template>

<script setup>
import addButton from '@/components/addButton.vue';
import '@/css/cashreportview.css';
import { ref, computed, onMounted } from "vue";

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

const list=ref([]);

onMounted(async () => {
  const res = await fetch("../db.json");
  const json = await res.json();

  // 불러온 데이터를 한글 타입으로 변환
  list.value = json.cashflows.map(item => ({
    ...item,
    type: item.type === "income" ? "수입" :
          item.type === "expense" ? "지출" :
          item.type || "지출", // 누락된 경우 대비
    date: item.date || "-",
    category: item.category || "-",
  }));
});


const activeTab = ref("전체");

const setActiveTab = (tab) => {
  activeTab.value = tab;
};


//  현재 월 + 탭 상태에 따라 필터링된 리스트
const filteredList = computed(() => {
  const monthStr = currentMonth.value; // "YYYY-MM"

  return list.value.filter(item => {
    // 날짜가 현재 월로 시작하는지 확인
    const inCurrentMonth = item.date?.startsWith(monthStr);

    // 탭 상태가 전체일 경우 수입/지출 무관
    const tabMatch = activeTab.value === "전체"
      ? true
      : item.type === activeTab.value;

    return inCurrentMonth && tabMatch;
  });
});

//거래내역 개수 카운트 
const totalCount = computed(() => list.value.length);

const incomeCount = computed(() =>
  list.value.filter(item => item.type === "수입").length
);

const expenseCount = computed(() =>
  list.value.filter(item => item.type === "지출").length
);

//거래내역 금액 카운트
const totalAmount = computed(() =>
  list.value.reduce((sum, item) => sum + item.amount, 0)
);
const incomeAmount = computed(() =>
  list.value.filter(item => item.type==="수입").reduce((sum, item)=> sum+item.amount,0)
);
const expenseAmount = computed(() =>
  list.value.filter(item=>item.type==="지출").reduce((sum,item)=>sum+item.amount,0)
);

//원화 포맷팅
const formatCurrency = (amount) => {
  return amount.toLocaleString() + "원";
};

//추가 버튼 클릭시 페이지 이동
const goToAddPage=()=>{
  router.push('/cashflow');
}
</script>


---
# 🚀스켈레톤 프로젝트 - 웹 가계부 제작하기

## 📢프로젝트 기획

### 👨‍👩‍👧‍👧팀 구성
<br>

|구분|이름|담당 기능|
|:-:|:-:|:-|
|팀장|안병우|월간 요약 & 메인 화면|
|팀원|김경민|수입/지출 입력|
||김예주|거래 내역|
||이가은|수입/지출 입력|
||이은솔|월간 요약|
||장수영|거래 내역|

<br>

### 🔧프로젝트 사용 기술
<br>

**✅ vite project**<br>
**✅ Composition API**<br>
**✅ vue-router**<br>
**✅ @vueuse/core**<br>
**✅ axios**<br>
**✅ components**<br>
**✅ pinia**<br>
**✅ event, style(bs5, fontawesome)**<br>
**✅ json server**<br>
**✅ vue-chartjs**<br>
**✅ figma**<br>

<br>

### 1. 주제
  - 가계부 서비스 웹

<br>

### 2. 목표
  - 각 개인의 Feontend와 Backend에 대해 이해도를 높여 개발 능력을 함양한다.
  - 전체적인 개발 과정(기획, 설계, 개발, 테스트, 배포)를 경험하고 개발 능력을 함양한다.
  - Git과 GitHub를 통해 브랜치 전략을 세워 협업을 경험하고 협업 능력을 함양한다.

### 3. 명세서
<br>

|구분|항목|상세 내용|
|:-:|:-:|:-|
|기능 요구 사항|수입/지출 기록|날짜, 금액, 카테고리, 메모 등의 세부 정보를 입력하여 기록한다.|
|-|거래 내역 조회|필터 기능을 통해 특정 조건에 맞는 거래 내역을 조회한다.<br>날짜/주간/월별/기간별, 카테고리 별 등 필터링 항목에 따른 오약 내역을 조회한다.|
|-|월별 재정 요약|각 월의 수입, 지출, 순이익을 요약하여 표시한다.|
|-|데이터 저장|데이터는 모두 json-server에 저장되어야 한다.|
|UI 요구 사항|반응형 디자인|웹과 모바일의 화면 크기에 맞게 UI를 조절한다.|
|-|사용자 인터페이스|사용자의 편리한 사용을 위한 직관적인 UI를 설계해야 한다.|
|기술 요구 사항|프론트엔드 구현|Vue 3를 사용하여 모던 웹 애플리케이션을 구축한다.|
|-|상태 관리|Composition API를 통해 앱 상태를 관리한다.|

<br>

### 4. Branch 전략
  - 배포는 main 브랜치에서 실시한다.
  - 개발은 develop 브랜치에서 실시한다.
  - 기능을 추가할 땐 feature 브랜치로 분기하여 개발 및 테스트 후 develop 브랜치로 병합한다.

<br>

### 5. 명명 규칙
  - 변수 & 메서드: camelCase
  - 상수: UPPER_SNAKE_CASE
  - css: kebab-case

<br>

### 6. 프로젝트 아키텍처
![프로젝트 구성도](https://github.com/user-attachments/assets/fb12a3ef-8e30-476e-9180-d6002a01c366)

<br>

### 7. 컴포넌트 구조
![컴포넌트 설계](https://github.com/user-attachments/assets/ff24b88d-7400-4348-816e-0eb9c1ff9649)

### 8. 프로젝트 폴더 구조
```
📦-Skeletone-Project-Household-Ledger
 ┣ 📂src(소스 폴더)
 ┃ ┣ 📂asset(공통 요소)
 ┃ ┃ ┣ 📂font(폰트)
 ┃ ┃ ┗ 📂image(이미지)
 ┃ ┣ 📂components(컴포넌트 폴더)
 ┃ ┃ ┣ 📂cashmonth
 ┃ ┃ ┣ 📂common(공통 컴포넌트)
 ┃ ┣ 📂css(스타일 css)
 ┃ ┣ 📂function(Javascript 함수)
 ┃ ┣ 📂router(페이지 Router)
 ┃ ┣ 📂stores(Pinia store)
 ┃ ┣ 📂views(컴포넌트 렌더링)
 ┃ ┣ 📜App.vue
 ┃ ┗ 📜main.js
 ┗ 📜db.json(데이터 저장 파일)
```

<br>

### 9. UI 디자인 [Click](https://www.figma.com/design/kS9R5t7pfWVOvdqaH2L6JZ/%EA%B8%B0%EC%97%85%EC%97%B0%EA%B3%84%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0-1&p=f&t=AIMjd02XmTBobdcb-0)
![디자인](https://github.com/user-attachments/assets/4e3996eb-d8a9-48b7-aaae-de2bc79544c3)

<br>

---

## 프로젝트 진행 과정

### 2025.04.04 - 1일차

1. Commit message template 설정

### 2025.04.07 - 2일차

1. 가계부 UI 및 반응형 UI 디자인

### 2025.04.08 - 3일차
1. 메인 페이지, 모바일 메인 페이지 UI 구현
2. 거래 내역 페이지 UI 구현
3. 월간 요약 페이지 UI 구현
4. 설정 페이지 UI 구현

### 2025.04.09 - 4일차
1. 도넛 차트 구현 -> axios를 사용하여 json-server 연결
2. 달력 구현 -> axios를 사용하여 json-server 연결
3. 메인 페이지, 모바일 메인 페이지 axios를 사용하여 json-server 연결
4. 거래 내역 페이지 axios를 사용하여 json-server 연결
5. 월간 요약 페이지 axios를 사용하여 json-server 연결
6. 설정 페이지 axios를 사용하여 json-server 연결
7. 프로젝트 최종 점검 및 css 수정

### 2025.04.11 - 5일차
1. 프로젝트 포트롤리오 작성
2. 최종 코드 리뷰

---

### 실행 명령어
    npm run dev // Vue 실행
    npx json-server db.json --port 3001 // json-server 실행

### 💻 메인 페이지

![image](https://github.com/user-attachments/assets/2ef45b9d-c5ad-455c-8870-a941baa29519)


- 메인 대시보드 구성 및 거래 추가 기능
    - 최근 추가된 거래내역과 월별 수입·지출 금액을 한눈에 확인 가능
    - 수입/지출 비율 항목에 마우스를 올리면 상세 퍼센트  표시
    - **"새 거래 내역 추가 +"** 클릭시 새 거래내역 추가 페이지로 이동 → 거래내역 추가 가능

---

### 🧾 **거래 내역 입력 기능 페이지**

1. **수입/지출 구분 탭**
    - 사용자가 거래를 **수입** 또는 **지출**로 구분하여 입력할 수 있도록 상단 탭 제공.
2. **날짜 선택 기능**
    - 날짜 입력란을 통해 달력에서 원하는 날짜 선택 가능.
3. **금액 입력**
    - 숫자만 입력 가능하도록 처리된 **거래 금액** 입력 필드 제공.
4. **카테고리 선택**
    - 거래 유형(예: 월급, 식비, 기타 등)을 선택할 수 있는 드롭다운 방식의 카테고리 선택 기능.
5. **메모 입력 필드**
    - 거래 내역에 대한 간단한 설명이나 메모를 작성할 수 있는 입력창 제공.
6. **저장 버튼**
    - 입력한 내용을 저장하는 버튼으로, 해당 데이터를 거래 내역에 반영.

![image](https://github.com/user-attachments/assets/db2fdde3-4d75-434e-a2f1-c77b765d2dfd)


🔼 새 거래내역 추가 페이지 기본 화면

**수입/ 지출 버튼**

```
<div class="button-group">
          <button :class="{ incomeactive: type === 'income' }" @click="setType('income')">수입</button>
          <button :class="{ expenseactive: type === 'expense' }" @click="setType('expense')">지출</button>
        </div>
```

**금액**

```
<input type="number" v-model="form.amount" placeholder="ex: 10000" />

```

**메모**

```jsx
<input type="text" v-model="form.memo" placeholder="메모를 입력하세요" />
```

![image](https://github.com/user-attachments/assets/c89061ae-2567-44ef-b37b-d9744a48f2c3)


🔼  날짜 - 손쉬운 날짜 선택 가능

```
<label>날짜</label>
            <input type="date" v-model="form.date" />
```

![image](https://github.com/user-attachments/assets/0a1e91c8-ba48-4581-95e2-b049fcb3b08d)


🔼 수입 - 주수입/ 부수입/기타 선택 가능

```
 <label>카테고리</label>
            <select v-model="form.category">
              <option value="">선택</option>
              <option v-for="item in categoryOptions" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
```

![image](https://github.com/user-attachments/assets/3bc681ae-623e-4bb3-a2a2-10adbb10cc4a)


🔼 지출 - 여러 카테고리 중 선택 가능

```jsx
export default {
  income: ['💵주수입', '💰부수입', '🤑기타'],
  expense: ['🏠주거', '📞통신', '🚗교통', '🍙식비', '📚문화/여가/교육', '🛒쇼핑', '😷건강/의료'],
};

```

<br>

---

### 🔍거래내역 조회 기능

1. **월별 거래 내역 필터링**
    - 선택한 월(예: 2025-04)의 거래만 필터링하여 보여주는 기능.
2. **수입/지출 금액 합계 표시**
    - 해당 월의 **수입 합계**와 **지출 합계**, 그리고 전체 거래 건수를 상단에 요약 표시.
3. **카테고리별 거래 정보 제공**
    - 거래마다 날짜, 카테고리(예: 주수입, 부수입, 기타), 금액, 상세 내용을 표 형식으로 제공.
4. **거래 삭제 기능**
    - 각 거래 항목 우측의 휴지통 아이콘 클릭 시 해당 거래를 개별 삭제 가능.
    - 상단의 ‘전체 삭제’ 버튼으로 한 달치 거래 내역 전체 삭제 가능.
5. **거래 추가 버튼 제공**
    - 우측 하단의 + 버튼을 통해 수입, 지출 내용을 쉽게 추가할 수 있는 진입점 제공.

🔽 거래내역 전체 탭(수입+지출 금액 및 건수를 필터링하지 않고 합산 출력)

![image](https://github.com/user-attachments/assets/bfd39ccc-9a3e-4fbe-834c-8fb107605101)


🔽 거래내역 수입 탭(수입인 경우만 필터링하여 금액 및 건수 출력)

![image](https://github.com/user-attachments/assets/dd0adf0a-320d-48dd-a063-f4033a06b526)


🔽 거래내역 지출 탭(지출인 경우만 필터링하여 금액 및 건수 출력)

![image](https://github.com/user-attachments/assets/a05f5db9-7a20-4305-b4d2-877fa8e4295c)


🔽거래내역이 없는 경우(조회하려는 연도-월 기준으로 출력되는 자료가 없는 경우)

![image](https://github.com/user-attachments/assets/20ee3815-05dd-44fa-ae66-4548e448a5de)


---

### 📊 월간 요약 통계 기능

1. **수입/지출 통계 전환**
    - 버튼 클릭으로 수입 통계와 지출 통계 화면 전환
2. **통계 차트 제공**
    - 도넛 차트로 카테고리별 수입/지출 비율 시각화
3. **월별 통계 필터링**
    - 선택한 월의 수입/지출 내역만 필터링해 표시
4. **금액 합계 제공**
    - 해당 월의 수입/지출 총합 및 카테고리별 합계 표시
5. **상세 내역 확인**
    - 월별 수입/지출의 상세 내역 제공

![image](https://github.com/user-attachments/assets/2f7724cb-29f3-492f-988a-dc235cde11dc)

![image](https://github.com/user-attachments/assets/d71c1f6f-fc05-4603-ac38-6e9537c87a99)




🔼월간 수입 통계

![image](https://github.com/user-attachments/assets/ce4a8aa1-b847-4126-a44b-c97a737e7ebb)

![image](https://github.com/user-attachments/assets/a9789868-033f-400f-8d59-2ed254786734)





🔼월간 지출 통계

---

### 📊 월간 요약 달력 기능

1. **일간 수입/지출 총액**
    - 일간 수입/지출 총액을 달력에 표시
2. **월간 현황 제공**
    - 월간 총 수입, 총 지출, 순수익을 화면에 표시

![image](https://github.com/user-attachments/assets/491e6fd5-08fe-45a9-ae3a-5c3dc472aeed)
![image](https://github.com/user-attachments/assets/3e79b2d0-a13d-4d35-a806-e8d7aefd3be9)


🔼월간 요약 달력

---

### ⚙️설정 페이지

![image](https://github.com/user-attachments/assets/e2ac0ce2-572d-47b1-91a2-b827acce8c0f)


- 개인정보 저장 및 폰트/테마 색상 설정
    - 프로필 사진, 사용자 이름,  닉네임, E-mail 입력
    - 폰트/테마 설정 기능(글꼴/색상 변경, 다크모드/라이트모드 변경)
    
![image](https://github.com/user-attachments/assets/53dca60e-ed31-43a8-b8e8-f3753944a1b8)
![image](https://github.com/user-attachments/assets/53510f90-27c4-4944-b676-b61887939680)

🔼 테마 색상 변경(Orange, BabyPink)

![image](https://github.com/user-attachments/assets/160d0e00-48a9-4eb5-8b95-2135ec6cb113)

🔼 다크모드

![image](https://github.com/user-attachments/assets/e3b513c1-6a91-45ce-9420-fd3ce5b4af09)
![image](https://github.com/user-attachments/assets/0aa18787-eb31-4815-a356-eac14c551e36)

🔼 폰트 변경(Sunflower, Do Hyeon)

<br>

---

## 🖥️ 프로젝트 구현 결과 화면-PC버전

1. 구성도(PC버전)
    1. 메인페이지
        
       ![스크린샷 2025-04-11 145117](https://github.com/user-attachments/assets/5362e19a-8bc5-4c0f-b7de-a64c794dd215)

        
    2. 월간요약-달력
        
        ![스크린샷 2025-04-11 150653](https://github.com/user-attachments/assets/a556bc35-bf09-4160-8b16-1eae4e1ddf03)

        
    3. 월간요약-수입 통계
        
        ![스크린샷 2025-04-11 145951](https://github.com/user-attachments/assets/e54ebe84-2960-4a73-b2d3-ecf6354c6010)
       ![스크린샷 2025-04-11 150005](https://github.com/user-attachments/assets/29abe416-d7bf-410b-b39f-b2d0a11d9756)


        
    5. 월간요약-지출 통계
        
        ![스크린샷 2025-04-11 150034](https://github.com/user-attachments/assets/0f42b722-d165-4025-95ec-dfa9a830454e)
       ![스크린샷 2025-04-11 150049](https://github.com/user-attachments/assets/9f33933d-bbc0-49ea-a159-6b291d9e0ade)


        
    6. 거래내역 페이지
        
        ![스크린샷 2025-04-11 145351](https://github.com/user-attachments/assets/84e196a1-753e-4b80-a28e-e4bd8a653ca3)

        
    7. 설정페이지
        
        ![스크린샷 2025-04-11 150108](https://github.com/user-attachments/assets/a3918e25-f422-490d-a0d3-21868ab9fe8c)

        
    8. 새 거래 내역 추가 페이지
        
        ![스크린샷 2025-04-11 145221](https://github.com/user-attachments/assets/957483e4-b11e-4cfe-83fa-5880f3009b87)

        
        ![스크린샷 2025-04-11 145247](https://github.com/user-attachments/assets/f4c01717-8525-43ca-a9dc-0b1100af004a)

        
        ![스크린샷 2025-04-11 145303](https://github.com/user-attachments/assets/4d8a4e66-0686-4fc7-9e7c-821ff013be1b)

        
        ![스크린샷 2025-04-11 145319](https://github.com/user-attachments/assets/cf93ec9e-3b65-44b7-9649-880673251d0d)

    <br>
    
    ---
    

## 📱 프로젝트 구현 결과 화면-모바일 버전(아이폰 12pro 기준)

- 메인페이지 & 월간요약-달력

![image](https://github.com/user-attachments/assets/2ca197f6-7ae4-4fc0-b4b9-f558de86b85f)|![image](https://github.com/user-attachments/assets/1fa7dabf-d27f-4dc1-97c8-31e1259f97bd)

<br>

- 월간요약-통계

![image](https://github.com/user-attachments/assets/cfb4e6d3-2b0b-4890-a7c7-e55dd226a594)|![image](https://github.com/user-attachments/assets/2b9f3baf-a577-4db4-8e1b-63f35bbebb04)

<br>

- 거래내역 페이지 & 설정 페이지
    
![image](https://github.com/user-attachments/assets/f9267bc0-0f1d-4611-9b7a-628d72daf577)|![image](https://github.com/user-attachments/assets/f71d57b5-c6c3-42c2-9027-1e53fac04740)

<br>

- 설정-테마변경(Pink, Orange 적용시 메인화면)

![image](https://github.com/user-attachments/assets/2e1f00f1-70e5-4f49-8852-308440a6819c)|![image](https://github.com/user-attachments/assets/c4c82751-f568-4bee-bd89-efbc8babd4ed)

<br>

---

### ✏️프로젝트 후기

|이름|사진|소감|
|:-|:-|:-|
|김경민|이미지|github 사용을 모르는 부분이 많아서.. 많은 시련과 고난을 겪었습니다… 조장님과 조원분들이 화날법도 한데.. 화 안 내고 친절하게 도와주셔서 잘 해결할 수 있었습니다 !!!(조원 분들께 무한한 감사를..🙇🏻‍♀️)<br><br>알고 있다고 생각했던 부분이 어려웠고 몰랐다고 생각했던 부분이 의외로 쉬웠던 부분이 있어서 이 부분에서 많이 배웠다고 생각합니다 !!<br><br>팀 프로젝트를 통해 혼자 공부하던 것보다 훨씬 더 많은 것들을 빠른 시간 내에 배울 수 있었습니다.. 우리조 최고 ..👍🏻👍🏻<br><br>코딩별거아니조 !!|
|김예주|이미지|아직 Github가 익숙하지 않고 이런 팀 프로젝트는 처음 해보는 경험이어서 어려웠지만 팀원 분들이 적극적으로 도와주셔서 끝까지 프로젝트를 잘 마무리할 수 있었습니다.<br><br>직접 화면을 구성하고 기능을 구현하는 것으로 이번 프로젝트를 통해 부족했던 부분을 많이 배울 수 있었던 것 같습니다!|
|안병우|이미지|Vue.js에 대해 더 깊이 이해할 수 있게 되었으며, 컴포넌트를 활용할 수 있게 되어 좋았습니다.<br><br>오랜만에 밤새면서 코딩했더니 아주 즐거운 시간이 되었습니다.|
|이가은|이미지|Vue를 활용해 직접 가계부 프로젝트를 만들면서 컴포넌트 기반 개발 방식에 익숙해질 수 있었던 것 같습니다!!✨<br><br>처음에는 레이아웃 구현과 상태 관리가 어려웠지만, 점점 구조를 이해하면서 흥미가 생겼습니다.🤩<br>Figma 디자인을 기준으로 UI를 구현하며 실제 서비스를 만들듯이 작업하면서 기능 구현뿐만 아니라 사용자 경험도 고려하게 되면서 개발 관점이 넓어졌고, 이번 프로젝트를 통해 Vue의 장점과 실전 감각을 동시에 익힐 수 있는 좋은 기회였다고 생각합니다!|
|이은솔|이미지|Vue.js와 Github가 처음에는 어색하고 어려웠지만, 프로젝트를 진행하면서 이해하고 친숙해질 수 있어 좋았습니다!<br><br>팀원 분들이 많이 알려주시고 도와주셔서 프로젝트를 즐겁게 마무리할 수 있었습니다!|
|장수영|이미지|Vue.js를 처음 사용해보았지만, 적극적인 팀원들과 함께 프로젝트를 진행하면서 새로운 언어에 빠르게 적응할 수 있었고 Git도 더욱 심도 있게 활용해볼 수 있어서 좋았습니다!<br>다시 한번 적극적으로 참여해주신 팀원분들 감사드립니당🙇🏻‍♀️|

---


import axios from "axios";

const API_URL = "http://localhost:3000/transactions";

const ApiService = {
    // 전체 조회
    getAll() {
        return axios.get(API_URL);
    },

    // 단일 조회
    get(id) {
        return axios.get(`${API_URL}/${id}`);
    },

    // 생성
    create(post) {
        return axios.post(API_URL, post);
    },

    // 수정
    update(id, post) {
        return axios.put(`${API_URL}/${id}`, post);
    },

    // 삭제
    delete(id) {
        return axios.delete(`${API_URL}/${id}`);
    },
};

// ===== 기능별 함수들 =====

// 전체 조회 및 마지막 ID 구하기
async function fetchAllAndGetLastId() {
    const res = await ApiService.getAll();
    res.data.forEach((item) => console.log(item));

    if (res.data.length === 0) return null;

    const ids = res.data.map((item) => parseInt(item.id));
    const lastId = Math.max(...ids);

    console.log("마지막에 저장된 데이터의 id:", lastId);
    return lastId;
}

// 특정 ID 조회
async function fetchById(id) {
    const res = await ApiService.get(String(id));
    console.log("조회 결과:", res.data);
    return res.data;
}

// 데이터 삽입
async function insertNewData(newId) {
    const newData = {
        id: String(newId),
        type: "expense",
        data: "2025-04-10",
        category: "쇼핑",
        amount: 10000,
        memo: "충동구매",
    };

    const res = await ApiService.create(newData);
    console.log("삽입 완료:", res.data);
}

// 데이터 수정
async function updateData(idToUpdate) {
    const updatedData = {
        id: String(idToUpdate),
        type: "expense",
        date: "2025-04-05",
        category: "식비",
        amount: 25000,
        memo: "메모",
    };

    const res = await ApiService.update(String(idToUpdate), updatedData);
    console.log("수정 완료:", res.data);
}

// 데이터 삭제
async function deleteData(idToDelete) {
    await ApiService.delete(String(idToDelete));
    console.log(`${idToDelete}번 데이터 삭제 완료`);
}

// 전체 함수 실행
async function runTestFlow() {
    try {
        console.log("=====전체 조회=====");
        const lastId = await fetchAllAndGetLastId();
        if (lastId === null) return;

        console.log("=====특정 id 조회=====");
        await fetchById(1);

        console.log("=====데이터 삽입=====");
        const newId = lastId + 1;
        await insertNewData(newId);

        console.log("=====삽입 후 전체 조회=====");
        await fetchAllAndGetLastId();

        console.log("=====데이터 수정=====");
        await updateData(newId);
        await fetchById(newId);

        console.log("=====데이터 삭제=====");
        await deleteData(newId);

        console.log("=====삭제 후 전체 조회=====");
        await fetchAllAndGetLastId();
    } catch (error) {
        console.error("에러 발생: ", error);
        if (error.response) {
            console.error("응답 코드:", error.response.status);
            console.error("응답 메시지:", error.response.data);
        }
    }
}

runTestFlow();

export default ApiService;

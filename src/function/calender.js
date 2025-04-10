// composables/useCalendar.js
import { ref } from "vue";

// 날짜 관련 유틸 함수
function getEndOfDay(year, month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
                ? 29
                : 28;
        default:
            console.warn("Unknown month:", month);
            return 0;
    }
}

function getStartWeek(targetYear, targetMonth, rootYear, rootDayOfWeekIndex) {
    let year = rootYear;
    let month = 1;
    let sumOfDay = rootDayOfWeekIndex;

    while (true) {
        if (targetYear > year) {
            for (let i = 0; i < 12; i++) {
                sumOfDay += getEndOfDay(year, i + 1);
            }
            year++;
        } else if (targetYear === year) {
            if (targetMonth > month) {
                sumOfDay += getEndOfDay(year, month);
                month++;
            } else {
                return sumOfDay % 7;
            }
        }
    }
}

function isToday(year, month, day) {
    const today = new Date();
    return (
        year === today.getFullYear() &&
        month === today.getMonth() + 1 &&
        day === today.getDate()
    );
}

// ✅ Composition API 로직 추출
export function useCalendar() {
    const weekNames = [
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
        "일요일",
    ];
    const rootYear = 1904;
    const rootDayOfWeekIndex = 4;

    const currentYear = ref(new Date().getFullYear());
    const currentMonth = ref(new Date().getMonth() + 1);
    const currentCalendarMatrix = ref([]);
    const currentMonthStartWeekIndex = ref(0);
    const endOfDay = ref(0);

    function init() {
        currentMonthStartWeekIndex.value = getStartWeek(
            currentYear.value,
            currentMonth.value,
            rootYear,
            rootDayOfWeekIndex
        );
        endOfDay.value = getEndOfDay(currentYear.value, currentMonth.value);
        initCalendar();
    }

    function initCalendar() {
        currentCalendarMatrix.value = [];
        let day = 1;

        for (let i = 0; i < 6; i++) {
            let calendarRow = [];
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < currentMonthStartWeekIndex.value) {
                    calendarRow.push("");
                } else if (day <= endOfDay.value) {
                    calendarRow.push(day++);
                } else {
                    calendarRow.push("");
                }
            }
            currentCalendarMatrix.value.push(calendarRow);
        }
    }

    function onClickPrev() {
        if (currentMonth.value === 1) {
            currentMonth.value = 12;
            currentYear.value--;
        } else {
            currentMonth.value--;
        }
        init();
    }

    function onClickNext() {
        if (currentMonth.value === 12) {
            currentMonth.value = 1;
            currentYear.value++;
        } else {
            currentMonth.value++;
        }
        init();
    }

    return {
        weekNames,
        currentYear,
        currentMonth,
        currentCalendarMatrix,
        init,
        onClickPrev,
        onClickNext,
        isToday,
    };
}

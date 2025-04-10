// fonts.js
import { ref } from "vue";

export function useSetting() {
    const fontFamily = ref("Black Han Sans");

    function changeFont(newFont) {
        fontFamily.value = newFont;
        document.documentElement.style.setProperty(
            "--main-font",
            `"${newFont}"`
        );
    }

    return {
        fontFamily,
        changeFont,
    };
}

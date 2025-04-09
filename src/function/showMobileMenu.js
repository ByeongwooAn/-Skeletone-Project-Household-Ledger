import { ref, onMounted, onUnmounted } from "vue";

export function showMobileMenu() {
    const showMenu = ref(false);
    const menuRef = ref(null);

    const toggleMenu = () => {
        showMenu.value = !showMenu.value;
    };

    const handleClickOutside = (event) => {
        if (menuRef.value && !menuRef.value.contains(event.target)) {
            showMenu.value = false;
        }
    };

    onMounted(() => {
        document.addEventListener("click", handleClickOutside);
    });

    onUnmounted(() => {
        document.removeEventListener("click", handleClickOutside);
    });

    return {
        showMenu,
        menuRef,
        toggleMenu,
    };
}

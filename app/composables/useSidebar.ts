// composables/useSidebar.ts
// Global singleton state for sidebar open/collapsed across the layout

const isOpen = ref(true)         // mobile drawer open
const isCollapsed = ref(false)   // desktop collapsed (icon-only)

export function useSidebar() {
  const toggleMobile = () => {
    isOpen.value = !isOpen.value
  }

  const closeMobile = () => {
    isOpen.value = false
  }

  const toggleDesktop = () => {
    isCollapsed.value = !isCollapsed.value
  }

  return {
    isOpen,
    isCollapsed,
    toggleMobile,
    closeMobile,
    toggleDesktop,
  }
}

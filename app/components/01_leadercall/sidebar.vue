<script setup lang="ts">
import { useSidebar } from "~/composables/useSidebar";
import {
  ChevronLeft,
  Home,
  BarChart2,
  BookPlus,
  ClipboardList,
} from "lucide-vue-next";
import type { Component } from "vue";

const { isOpen, isCollapsed, closeMobile, toggleDesktop } = useSidebar();
const route = useRoute();
const router = useRouter();

interface MenuItem {
  label: string;
  icon: Component;
  to: string;
  permission: number[];
}

const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: Home, to: "/", permission: [7, 8] },
  {
    label: "Information Form",
    icon: BookPlus,
    to: "/01_informationform",
    permission: [1, 8, 9],
  },
  {
    label: "Action Form",
    icon: BookPlus,
    to: "/02_actionform",
    permission: [1, 8, 9],
  },
  {
    label: "Confirm Lists",
    icon: ClipboardList,
    to: "/03_confirmform",
    permission: [8, 9],
  },
];

const isActive = (item: MenuItem) =>
  route.path === item.to || route.path.startsWith(item.to + "/");

const userSession = useCookie("user_session");

const permission_user = computed(() => {
  return Number(userSession.value?.permission);
});

const filteredMenuItems = computed(() => {
  return menuItems.filter((item) => {
    if (Array.isArray(item.permission)) {
      console.log(item.permission);
      return item.permission.some((p) => p == permission_user.value);
    }

    // 🔹 กรณีเช็คจากรหัสพนักงาน
    // if (Array.isArray(item.empCodeAllow)) {
    //   const hasAccess = item.empCodeAllow.includes(empno);
    //   console.log(
    //     `👤 เมนู "${item.name}" | empCode = ${empno} | แสดงผล: ${hasAccess}`,
    //   );
    //   return hasAccess;
    // }
  });
});

const checkAccessToCurrentRoute = () => {
  const currentPath = route.path;
  console.log(currentPath);
  const menuItem = menuItems.find((m) => m.to === currentPath);

  if (!menuItem) return;

  // 🔹 เช็คจากรหัสพนักงาน
  // if (Array.isArray(menuItem.empCodeAllow)) {
  //   const hasAccess = menuItem.empCodeAllow.includes(empno);
  //   // console.log(hasAccess);
  //   if (!hasAccess) {
  //     const firstAllowed = filteredMenuItems.value[0];
  //     router.push(firstAllowed ? firstAllowed.path : "/");
  //   }
  // }

  // 🔹 เช็คจาก permission
  if (Array.isArray(menuItem.permission)) {
    const hasAccess = menuItem.permission.some(
      (perm) => perm == permission_user.value,
    );
    console.log(hasAccess);
    if (!hasAccess) {
      const firstAllowed = filteredMenuItems.value[0];
      router.push(firstAllowed ? firstAllowed.to : "/");
    }
  }
};

watch(
  () => route.path,
  () => closeMobile(),
);

onMounted(async () => {
  await checkAccessToCurrentRoute();
});
</script>

<template>
  <!-- Mobile overlay -->
  <Transition name="fade">
    <div v-if="isOpen" class="sidebar-overlay" @click="closeMobile" />
  </Transition>

  <!-- Sidebar panel -->
  <aside
    :class="[
      'sidebar',
      !isOpen && 'sidebar--hidden',
      isCollapsed && 'sidebar--collapsed',
    ]"
  >
    <!-- Brand -->
    <div class="sidebar-brand">
      <div class="sidebar-logo">
        <span class="sidebar-logo-icon">📡</span>
        <Transition name="slide-x">
          <span v-if="!isCollapsed" class="sidebar-logo-text">AM Leader</span>
        </Transition>
      </div>

      <!-- Desktop collapse toggle -->
      <button
        class="sidebar-collapse-btn"
        :title="isCollapsed ? 'Expand' : 'Collapse'"
        @click="toggleDesktop"
      >
        <span :class="['sidebar-collapse-icon', isCollapsed && 'rotate-180']"
          ><ChevronLeft :size="20"
        /></span>
      </button>

      <!-- Mobile close -->
      <button class="sidebar-close-btn" @click="closeMobile">✕</button>
    </div>

    <!-- Navigation -->
    <nav class="sidebar-nav">
      <ul class="sidebar-menu">
        <li v-for="item in filteredMenuItems" :key="item.to">
          <NuxtLink
            :to="item.to"
            :class="['sidebar-link', isActive(item) && 'sidebar-link--active']"
            :title="isCollapsed ? item.label : ''"
          >
            <span class="sidebar-link-icon"
              ><component :is="item.icon" :size="20"
            /></span>
            <Transition name="slide-x">
              <span v-if="!isCollapsed" class="sidebar-link-label">{{
                item.label
              }}</span>
            </Transition>
            <span
              v-if="isActive(item) && !isCollapsed"
              class="sidebar-active-dot"
            />
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

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

interface MenuItem {
  label: string;
  icon: Component;
  to: string;
}

const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: Home, to: "/" },
  { label: "Information Form", icon: BookPlus, to: "/01_informationform" },
  { label: "Action Form", icon: BookPlus, to: "/02_actionform" },
  { label: "Confirm Lists", icon: ClipboardList, to: "/03_confirmform" },
];

const isActive = (item: MenuItem) =>
  route.path === item.to || route.path.startsWith(item.to + "/");

watch(
  () => route.path,
  () => closeMobile(),
);
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
        <li v-for="item in menuItems" :key="item.to">
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

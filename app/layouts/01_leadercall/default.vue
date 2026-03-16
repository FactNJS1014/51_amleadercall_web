<script setup lang="ts">
import Sidebar from "~/components/01_leadercall/sidebar.vue";
import { useSidebar } from "~/composables/useSidebar";

const { isOpen, isCollapsed, toggleMobile } = useSidebar();
</script>

<template>
  <div class="app-shell">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main area -->
    <div
      :class="[
        'app-main',
        !isOpen
          ? 'app-main--full'
          : isCollapsed
            ? 'app-main--collapsed'
            : 'app-main--expanded',
      ]"
    >
      <!-- Top Navbar -->
      <header class="app-topbar">
        <!-- Hamburger (mobile only) -->
        <button
          class="topbar-hamburger md:hidden"
          aria-label="Open menu"
          @click="toggleMobile"
        >
          <span class="hamburger-bar" />
          <span class="hamburger-bar" />
          <span class="hamburger-bar" />
        </button>

        <!-- Page title -->
        <div class="topbar-title">
          <span class="topbar-page-title">
            <slot name="page-title">AM Leader Call</slot>
          </span>
        </div>

        <!-- Right actions -->
        <div class="topbar-actions">
          <slot name="topbar-actions" />
          <div class="topbar-avatar">AM</div>
        </div>
      </header>

      <!-- Page content -->
      <main class="app-content">
        <slot />
      </main>
    </div>
  </div>
</template>

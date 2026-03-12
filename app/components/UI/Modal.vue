<script setup lang="ts">
interface Props {
  isOpen: boolean;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
  color?: "emerald" | "blue" | "red" | "amber" | "slate" | "violet";
  closeOnClickOutside?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  size: "md",
  color: "emerald",
  closeOnClickOutside: true,
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};

const handleBackdropClick = () => {
  if (props.closeOnClickOutside) {
    closeModal();
  }
};

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  full: "max-w-[95%] w-full h-[95%]",
};

// Map colors to explicit tailwind classes to ensure they are picked up by the compiler
const colorMap = {
  emerald: {
    header: "bg-emerald-600",
    footerButton:
      "bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500 shadow-emerald-100",
  },
  blue: {
    header: "bg-blue-600",
    footerButton:
      "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 shadow-blue-100",
  },
  red: {
    header: "bg-red-600",
    footerButton:
      "bg-red-600 hover:bg-red-700 focus:ring-red-500 shadow-red-100",
  },
  amber: {
    header: "bg-amber-600",
    footerButton:
      "bg-amber-600 hover:bg-amber-700 focus:ring-amber-500 shadow-amber-100",
  },
  slate: {
    header: "bg-slate-600",
    footerButton:
      "bg-slate-600 hover:bg-slate-700 focus:ring-slate-500 shadow-slate-100",
  },
  violet: {
    header: "bg-violet-600",
    footerButton:
      "bg-violet-600 hover:bg-violet-700 focus:ring-violet-500 shadow-violet-100",
  },
};

const colorClasses = computed(
  () => colorMap[props.color as keyof typeof colorMap] || colorMap.emerald,
);
const modalSizeClass = computed(
  () => sizeClasses[props.size as keyof typeof sizeClasses] || sizeClasses.md,
);
</script>

<template>
  <Teleport to="body">
    <div class="relative z-[1000]">
      <!-- Backdrop Transition -->
      <Transition
        enter-active-class="ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isOpen"
          class="fixed inset-0 bg-slate-900/75 transition-opacity"
          aria-hidden="true"
          @click="handleBackdropClick"
        ></div>
      </Transition>

      <!-- Modal Panel Wrapper -->
      <div v-if="isOpen" class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <Transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            appear
          >
            <div
              v-if="isOpen"
              class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 w-full border border-slate-200"
              :class="[modalSizeClass]"
            >
              <!-- Header -->
              <div
                class="px-6 py-4 flex items-center justify-between"
                :class="[colorClasses.header]"
              >
                <h3
                  class="text-lg font-bold text-white uppercase tracking-wide"
                  id="modal-title"
                >
                  {{ title }}
                </h3>
                <button
                  @click="closeModal"
                  type="button"
                  class="text-white hover:bg-white/20 rounded-lg p-1.5 transition-colors duration-200"
                >
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <!-- Body -->
              <div class="px-6 py-6 bg-white max-h-[70vh] overflow-y-auto">
                <slot></slot>
              </div>

              <!-- Footer -->
              <div
                v-if="$slots.footer"
                class="px-6 py-4 bg-slate-50 flex flex-row-reverse gap-3 border-t border-slate-100"
              >
                <slot name="footer"></slot>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </Teleport>
</template>

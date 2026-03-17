<template>
  <!-- Show List Action Record -->
  <div class="card animate-fade-in">
    <div class="card-title">
      <div class="flex gap-4 items-center">
        <span>⚖️</span>

        <span class="text-xl font-extrabold tracking-tight"
          >รายการรอการอนุมัติ</span
        >
        <span
          class="text-xs text-white/60 font-medium uppercase tracking-widest"
          >Confirm Action Records</span
        >
      </div>
    </div>

    <div class="card-body bg-slate-50/20 p-6 space-y-8">
      <div
        v-for="item in data_inf_act"
        :key="item.AMLDRACT_HREC_ID"
        class="bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500"
      >
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200"
            >
              <FileCheck2 class="text-white w-6 h-6" />
            </div>
            <div class="flex flex-col">
              <h3
                class="text-lg font-black text-slate-800 tracking-tight leading-none"
              >
                Leader Call Approval
              </h3>
              <span
                class="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1"
                >Review and Confirm Records</span
              >
            </div>
          </div>
          <div
            class="bg-indigo-50 text-indigo-600 px-6 py-2.5 rounded-2xl font-black text-sm tracking-tighter border border-indigo-100 shadow-sm"
          >
            # {{ item.AMLDRINF_DOC_NUM }}
          </div>
        </div>

        <div class="space-y-8">
          <!-- Section 1: Information -->
          <div class="space-y-4">
            <div class="flex items-center gap-2 px-2">
              <span class="w-2 h-2 rounded-full bg-blue-500"></span>
              <span
                class="text-[16px] uppercase font-black tracking-[0.2em] text-blue-500"
                >Section 1: Source Information</span
              >
            </div>

            <div
              class="table-container shadow-sm overflow-hidden rounded-3xl border border-slate-200/50"
            >
              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead>
                    <tr class="text-center">
                      <th
                        class="px-6 py-4 bg-slate-100/80 text-slate-600 font-bold uppercase tracking-wider text-[14px] border-b border-slate-200 min-w-[300px]"
                      >
                        ผู้บันทึก
                      </th>
                      <th
                        class="px-6 py-4 bg-slate-100/80 text-slate-600 font-bold uppercase tracking-wider text-[14px] border-b border-slate-200 min-w-[150px]"
                      >
                        Line
                      </th>
                      <th
                        class="px-6 py-4 bg-slate-100/80 text-slate-600 font-bold uppercase tracking-wider text-[14px] border-b border-slate-200"
                      >
                        Customer
                      </th>
                      <th
                        class="px-6 py-4 bg-slate-100/80 text-slate-600 font-bold uppercase tracking-wider text-[14px] border-b border-slate-200 min-w-[250px]"
                      >
                        Work Order
                      </th>
                      <th
                        class="px-6 py-4 bg-slate-100/80 text-slate-600 font-bold uppercase tracking-wider text-[14px] border-b border-slate-200 min-w-[250px]"
                      >
                        Model Code
                      </th>
                      <th
                        class="px-6 py-4 bg-slate-100/80 text-slate-600 font-bold uppercase tracking-wider text-[14px] border-b border-slate-200 min-w-[250px]"
                      >
                        Model Name
                      </th>
                      <th
                        class="px-6 py-4 bg-slate-100/80 text-slate-600 font-bold uppercase tracking-wider text-[14px] border-b border-slate-200 min-w-[200px]"
                      >
                        Process
                      </th>
                      <th
                        class="px-6 py-4 bg-slate-100/80 text-slate-600 font-bold uppercase tracking-wider text-[14px] border-b border-slate-200 min-w-[200px]"
                      >
                        Cause
                      </th>
                      <th
                        class="px-6 py-4 bg-slate-100/80 text-slate-600 font-bold uppercase tracking-wider text-[14px] border-b border-slate-200 min-w-[150px]"
                      >
                        Lot Size
                      </th>
                      <th
                        class="px-6 py-4 bg-slate-100/80 text-slate-600 font-bold uppercase tracking-wider text-[14px] border-b border-slate-200 min-w-[250px]"
                      >
                        Location
                      </th>
                      <th
                        class="px-6 py-4 bg-slate-100/80 text-slate-600 font-bold uppercase tracking-wider text-[14px] border-b border-slate-200 min-w-[250px]"
                      >
                        Machine
                      </th>
                      <th
                        class="px-6 py-4 bg-slate-100/80 text-slate-600 font-bold uppercase tracking-wider text-[14px] border-b border-slate-200 min-w-[150px]"
                      >
                        Qty (NG)
                      </th>
                      <th
                        class="px-6 py-4 bg-slate-100/80 text-slate-600 font-bold uppercase tracking-wider text-[14px] border-b border-slate-200 min-w-[200px]"
                      >
                        Image
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    <tr class="text-center bg-white/50">
                      <td class="px-6 py-4 text-slate-700 font-medium">
                        {{ item.AMLDRINF_EMPHREC }}
                      </td>
                      <td class="px-6 py-4">
                        <span class="badge badge-blue">{{
                          item.AMLDRINF_HREC_LINE
                        }}</span>
                      </td>
                      <td class="px-6 py-4 font-bold">
                        {{ item.AMLDRINF_HREC_CUS }}
                      </td>
                      <td class="px-6 py-4 font-mono text-[15px]">
                        {{ item.AMLDRINF_HREC_WON }}
                      </td>
                      <td
                        class="px-6 py-4 text-[14px] text-left max-w-[150px] truncate"
                        :title="item.AMLDRINF_HREC_MDLCD"
                      >
                        {{ item.AMLDRINF_HREC_MDLCD }}
                      </td>
                      <td
                        class="px-6 py-4 text-[14px] text-left max-w-[150px] truncate"
                        :title="item.AMLDRINF_HREC_MDLNM"
                      >
                        {{ item.AMLDRINF_HREC_MDLNM }}
                      </td>
                      <td class="px-6 py-4 font-bold text-indigo-600">
                        {{ item.AMLDRINF_HREC_PROCS }}
                      </td>
                      <td
                        class="px-6 py-4 font-black italic text-rose-500 text-xs"
                      >
                        {{ item.AMLDRINF_HREC_CSTYPE }}
                      </td>
                      <td class="px-6 py-4 font-extrabold text-blue-600">
                        {{ item.AMLDRINF_HREC_LOTS }}
                      </td>
                      <td class="px-6 py-4 font-mono text-[15px]">
                        {{ item.AMLDRINF_HREC_LOCATE }}
                      </td>
                      <td class="px-6 py-4 font-mono text-[15px]">
                        {{ item.AMLDRINF_HREC_MACHINE }}
                      </td>
                      <td class="px-6 py-4 font-mono text-[15px]">
                        {{ item.AMLDRINF_HREC_QTYNG }}
                      </td>
                      <td class="px-6 py-4 flex items-center justify-center">
                        <img
                          :src="`http://127.0.0.1:8000/images_information/${item.AMLDRINF_HREC_IMAGE}`"
                          class="w-12 h-12 object-cover rounded-2xl cursor-pointer hover:rotate-3 hover:scale-110 transition-all duration-300 ring-2 ring-white shadow-sm"
                          @click="
                            previewImage = `http://127.0.0.1:8000/images_information/${item.AMLDRINF_HREC_IMAGE}`
                          "
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class="bg-indigo-50/50 p-4 rounded-3xl border border-indigo-100/30 flex items-start gap-3"
            >
              <AlertCircle class="w-5 h-5 text-indigo-400 mt-0.5" />
              <div class="flex flex-col">
                <span
                  class="text-[10px] uppercase font-black tracking-widest text-indigo-400"
                  >Problem Description</span
                >
                <p class="text-indigo-900 font-medium leading-relaxed">
                  {{ item.AMLDRINF_HREC_PROB }}
                </p>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
            <!-- Section 2: Action Details -->
            <div class="space-y-4">
              <div class="flex items-center gap-2 px-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span
                  class="text-[16px] uppercase font-black tracking-[0.2em] text-emerald-500"
                  >Section 2: Action Log</span
                >
              </div>

              <div class="space-y-4">
                <div
                  class="bg-slate-50/80 p-5 rounded-[2rem] border border-slate-100 space-y-3"
                >
                  <div class="flex flex-col">
                    <label
                      class="text-[9px] uppercase font-black tracking-widest text-slate-400 mb-1"
                      >Root Cause</label
                    >
                    <p class="text-slate-700 font-semibold leading-relaxed">
                      {{ item.AMLDRACT_HREC_RTCAUSE }}
                    </p>
                  </div>
                  <div class="flex flex-col">
                    <label
                      class="text-[9px] uppercase font-black tracking-widest text-slate-400 mb-1"
                      >Action Taken</label
                    >
                    <p class="text-slate-700 font-semibold leading-relaxed">
                      {{ item.AMLDRACT_HREC_ACTION }}
                    </p>
                  </div>
                  <div class="flex items-center gap-6 pt-2">
                    <div class="flex flex-col text-center space-y-2">
                      <label
                        class="text-[9px] uppercase font-black tracking-widest text-slate-400"
                        >Type</label
                      >
                      <span
                        class="font-extrabold text-green-600 uppercase text-sm"
                        v-if="item.AMLDRACT_HREC_EDITTYPE === 'close'"
                        >{{ item.AMLDRACT_HREC_EDITTYPE }}: สามารถแก้ไขได้</span
                      >
                      <span
                        class="font-extrabold text-red-600 uppercase text-sm"
                        v-else-if="item.AMLDRACT_HREC_EDITTYPE === 'open'"
                        >{{ item.AMLDRACT_HREC_EDITTYPE }}:
                        ไม่สามารถแก้ไขได้</span
                      >
                      <span
                        class="font-extrabold text-amber-600 uppercase text-sm"
                        v-else-if="item.AMLDRACT_HREC_EDITTYPE === 'temporary'"
                        >{{ item.AMLDRACT_HREC_EDITTYPE }}:
                        แก้ไขได้ชั่วคราว</span
                      >
                    </div>
                    <div class="flex flex-col text-center space-y-2">
                      <label
                        class="text-[9px] uppercase font-black tracking-widest text-slate-400"
                        >Action By</label
                      >
                      <span class="font-bold text-slate-600 text-sm">{{
                        item.AMLDRACT_HREC_ACTIONEMP || "-"
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex items-center gap-2 px-2">
                <span class="w-2 h-2 rounded-full bg-slate-400"></span>
                <span
                  class="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400"
                  >Visual Evidence</span
                >
              </div>
              <div
                class="relative group/img overflow-hidden rounded-[2.5rem] ring-8 ring-slate-50 shadow-inner"
              >
                <img
                  :src="`http://127.0.0.1:8000/images_action/${item.AMLDRACT_HREC_IMAGE}`"
                  class="w-full h-44 object-cover cursor-pointer hover:scale-110 transition-transform duration-700"
                  @click="
                    previewImage = `http://127.0.0.1:8000/images_action/${item.AMLDRACT_HREC_IMAGE}`
                  "
                />
                <div
                  class="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 text-white opacity-0 group-hover/img:opacity-100 transition-opacity"
                >
                  <Maximize2 class="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="mt-10 pt-8 border-t-2 border-slate-50 flex justify-end gap-3"
        >
          <button
            class="group relative overflow-hidden bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-200 px-6 py-3 rounded-2xl flex items-center gap-2 transition-all duration-300"
            @click="sendBackToEdit(item.AMLDRINF_HREC_ID)"
          >
            <div
              class="absolute inset-x-0 bottom-0 h-0.5 bg-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            ></div>
            <Undo2
              class="w-5 h-5 text-slate-400 group-hover:text-rose-500 transition-colors"
            />
            <span
              class="text-sm font-bold text-slate-600 group-hover:text-rose-700 transition-colors"
              >ส่งกลับไปแก้ไข</span
            >
          </button>

          <button
            class="btn-save px-12 group"
            @click="
              showConfirmModal(
                item.AMLDRINF_HREC_ID,
                item.AMLDRACT_HREC_ID,
                item.AMLDRINF_HREC_STARTTIME,
              )
            "
          >
            <Send
              class="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform"
            />
            <span>อนุมัติรายการนี้</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="previewImage"
        class="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        @click.self="previewImage = null"
      >
        <div class="relative max-w-[90vw] max-h-[90vh]">
          <!-- Close Button -->
          <button
            @click="previewImage = null"
            class="absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center bg-white text-gray-700 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition z-10"
          >
            <X :size="18" />
          </button>
          <!-- Image -->
          <img
            :src="previewImage"
            class="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </Transition>
  </Teleport>

  <!-- Modal Send Back To Edit -->
  <Modal
    :is-open="showModal"
    @close="showModal = false"
    size="lg"
    color="violet"
    title="Action Form"
  >
    <form class="space-y-2" @submit.prevent="submitForm">
      <div class="grid grid-cols-1 gap-3">
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <label for="Root Cause" class="text-[16px] font-semibold"
              >เลือกฟอร์มที่ให้กลับไปแก้ไข:
            </label>
          </div>
          <select
            v-model="form_name"
            class="w-full px-2 py-1 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-violet-500"
          >
            <option value="" disabled selected>Choose Form</option>
            <option value="information">Form Information (ส่วนที่ 1)</option>
            <option value="action">Form Action (ส่วนที่ 2)</option>
          </select>
        </div>
      </div>
      <div class="flex justify-end gap-3">
        <button
          type="button"
          @click="showModal = false"
          class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
        >
          <X :size="17" />
          ยกเลิก
        </button>
        <button
          type="submit"
          class="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
        >
          <Send :size="17" />
          ยืนยัน
        </button>
      </div>
    </form>
  </Modal>

  <!-- Modal Confirm -->
  <Modal
    :is-open="showConfirm"
    @close="showConfirm = false"
    size="lg"
    color="violet"
    title="Action Form"
  >
    <form class="space-y-2" @submit.prevent="confirmForm">
      <div class="grid grid-cols-1 gap-3">
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <label for="Root Cause" class="text-[16px] font-semibold"
              >Result:
            </label>
          </div>
          <input
            type="text"
            v-model="result"
            class="w-full px-2 py-1 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-violet-500"
          />
        </div>
      </div>
      <div class="flex justify-end gap-3">
        <button
          type="button"
          @click="showConfirm = false"
          class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
        >
          <X :size="17" />
          ยกเลิก
        </button>
        <button
          type="submit"
          class="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
        >
          <Send :size="17" />
          ยืนยัน
        </button>
      </div>
    </form>
  </Modal>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import {
  X,
  Send,
  Image,
  Undo2,
  FileCheck2,
  AlertCircle,
  Maximize2,
} from "lucide-vue-next";
import Modal from "~/components/UI/Modal.vue";

/**
 * TODO: Show List Information and Action Record
 */
const data_inf_act = ref<any[]>([]);
const previewImage = ref<string | null>(null);
const form_name = ref<string>("");
const showModal = ref<boolean>(false);
const hrec_id = ref<string>("");

const showConfirm = ref<boolean>(false);
const inf_id = ref<string>("");
const act_id = ref<string>("");
const start_time = ref<string>("");
const result = ref<string>("");
const employee_confirm = ref<string>("");

const AMLDRCONF_HREC_ID = ref<string>("");

const userSession = useCookie("user_session");

watch(
  () => userSession?.value?.empno,
  (val) => {
    if (val) {
      employee_confirm.value = val;
      console.log("employee_confirm.value:", employee_confirm.value);
    }
  },
  { immediate: true },
);

/**
 * TODO: Get List Information and Action Record
 */
const getListInfAct = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/confirm/record",
    );
    data_inf_act.value = response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error fetching data",
    });
  }
};

/**
 * TODO: Send Back To Edit
 */
const sendBackToEdit = async (id: string) => {
  hrec_id.value = id;
  showModal.value = true;
};

const submitForm = async () => {
  try {
    const response = await axios.put(
      `http://127.0.0.1:8000/api/confirm/send-back-to-edit/${hrec_id.value}`,
      {
        form_name: form_name.value,
      },
    );
    if (response.data.status === "success") {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Data sent back to edit successfully",
        timer: 2000,
        showConfirmButton: false,
      });
      getListInfAct();
      showModal.value = false;
      console.log(response.data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error fetching data",
    });
  }
};

/**
 * TODO:แสดง modal สำหรับอนุมัติข้อมูล
 */

const showConfirmModal = (
  inf_hrec_id: string,
  act_hrec_id: string,
  start_time_inf: string,
) => {
  inf_id.value = inf_hrec_id;
  act_id.value = act_hrec_id;
  start_time.value = start_time_inf;
  showConfirm.value = true;
};

const confirmForm = async () => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/confirm/insert`,
      {
        inf_id: inf_id.value,
        act_id: act_id.value,
        result: result.value,
        start_time: start_time.value,
        end_time: dayjs(new Date()).format("HH:mm"),
        employee_confirm: employee_confirm.value,
      },
    );
    if (response.data.status === "success") {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Data confirmed successfully",
        timer: 2000,
        showConfirmButton: false,
      });
      clearForm();
      getListInfAct();
      showConfirm.value = false;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error fetching data",
    });
  }
};

/**
 * TODO: clear form
 */
const clearForm = () => {
  result.value = "";
};

onMounted(() => {
  getListInfAct();
});
</script>

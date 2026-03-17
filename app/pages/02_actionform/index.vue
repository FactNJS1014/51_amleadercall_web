<template>
  <div class="card mb-8 animate-fade-in" v-if="data_rec.length > 0">
    <div class="card-title">
      <div class="flex gap-4 items-center">
        <span>⚡</span>

        <span class="text-xl font-extrabold tracking-tight"
          >รายการรอแจ้ง Action</span
        >
        <span
          class="text-xs text-white/60 font-medium uppercase tracking-widest"
          >Pending Action Records</span
        >
      </div>
    </div>
    <div class="card-body bg-slate-50/30 p-4">
      <div
        class="table-container shadow-sm overflow-hidden rounded-2xl border border-slate-200/60"
      >
        <div class="max-h-[calc(100vh-24rem)] overflow-y-auto">
          <table class="w-full">
            <!-- HEADER -->
            <thead class="sticky top-0 z-20">
              <tr class="text-center">
                <th
                  class="px-6 py-4 min-w-[200px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Action
                </th>
                <th
                  class="px-6 py-4 min-w-[160px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  หมายเลขเอกสาร
                </th>
                <th
                  class="px-6 py-4 min-w-[70px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Line
                </th>
                <th
                  class="px-6 py-4 min-w-[100px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Customer
                </th>
                <th
                  class="px-6 py-4 min-w-[200px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Work Order
                </th>
                <th
                  class="px-6 py-4 min-w-[200px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Model Code
                </th>
                <th
                  class="px-6 py-4 min-w-[200px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Model Name
                </th>
                <th
                  class="px-6 py-4 min-w-[100px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Lot Size
                </th>
              </tr>
            </thead>

            <!-- BODY -->
            <tbody class="divide-y divide-slate-100">
              <tr
                v-for="item in data_rec"
                :key="item.AMLDRINF_HREC_ID + '-' + item.AMLDRINF_HREC_LINE"
                v-memo="[item]"
                class="hover:bg-indigo-50/30 transition-colors text-center"
              >
                <!-- ACTION -->
                <td class="px-6 py-4">
                  <div class="flex gap-2 justify-center">
                    <button
                      class="btn-primary py-1.5 px-4 text-xs"
                      @click="chooseShowForm(item.AMLDRINF_HREC_ID)"
                    >
                      <div class="flex items-center gap-2">
                        <FileText class="w-4 h-4" />
                        <span>เปิดฟอร์ม</span>
                      </div>
                    </button>
                  </div>
                </td>

                <td class="px-6 py-4">
                  <span class="font-bold text-slate-900">{{
                    item.AMLDRINF_DOC_NUM
                  }}</span>
                </td>

                <td class="px-6 py-4">
                  <span class="badge badge-blue">{{
                    item.AMLDRINF_HREC_LINE
                  }}</span>
                </td>
                <td class="px-6 py-4 font-semibold text-slate-700">
                  {{ item.AMLDRINF_HREC_CUS }}
                </td>
                <td class="px-6 py-4 font-mono text-xs opacity-60">
                  {{ item.AMLDRINF_HREC_WON }}
                </td>
                <td class="px-6 py-4 text-slate-500">
                  {{ item.AMLDRINF_HREC_MDLCD }}
                </td>
                <td class="px-6 py-4 text-slate-500 text-left">
                  {{ item.AMLDRINF_HREC_MDLNM }}
                </td>
                <td class="px-6 py-4 font-medium">
                  {{ item.AMLDRINF_HREC_LOTS }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="card animate-fade-in" style="animation-delay: 0.2s">
    <div class="card-title">
      <div class="flex gap-4 items-center">
        <span>✅</span>

        <span class="text-xl font-extrabold tracking-tight"
          >รายการที่แจ้ง Action แล้ว</span
        >
        <span
          class="text-xs text-white/60 font-medium uppercase tracking-widest"
          >Action Check List</span
        >
      </div>
    </div>

    <div class="card-body bg-slate-50/20 p-6 space-y-6">
      <div
        v-for="item in data_action"
        :key="item.AMLDRACT_HREC_ID"
        class="bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 group"
      >
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <div class="flex flex-col gap-2">
              <label
                class="text-[10px] uppercase tracking-widest font-black text-indigo-400"
                >Root Cause</label
              >
              <p
                class="text-slate-800 font-medium leading-relaxed bg-slate-50/80 p-4 rounded-3xl border border-slate-100"
              >
                {{ item.AMLDRACT_HREC_RTCAUSE }}
              </p>
            </div>
            <div class="flex flex-col gap-2">
              <label
                class="text-[10px] uppercase tracking-widest font-black text-indigo-400"
                >Action Taken</label
              >
              <p
                class="text-slate-800 font-medium leading-relaxed bg-slate-50/80 p-4 rounded-3xl border border-slate-100"
              >
                {{ item.AMLDRACT_HREC_ACTION }}
              </p>
            </div>
          </div>

          <div class="space-y-6">
            <div
              class="flex items-center justify-between bg-indigo-50/50 p-4 rounded-3xl border border-indigo-100/50"
            >
              <div class="flex flex-col">
                <label
                  class="text-[10px] uppercase tracking-widest font-black text-indigo-400"
                  >Type</label
                >
                <span
                  v-if="item.AMLDRACT_HREC_EDITTYPE === 'close'"
                  class="font-extrabold text-emerald-600 uppercase"
                  >{{ item.AMLDRACT_HREC_EDITTYPE }}</span
                >
                <span
                  v-else-if="item.AMLDRACT_HREC_EDITTYPE === 'open'"
                  class="font-extrabold text-rose-600 uppercase"
                  >{{ item.AMLDRACT_HREC_EDITTYPE }}</span
                >
                <span v-else class="font-extrabold text-amber-600 uppercase">{{
                  item.AMLDRACT_HREC_EDITTYPE
                }}</span>
              </div>
              <div
                class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm"
              >
                <CheckCircle2
                  v-if="item.AMLDRACT_HREC_EDITTYPE === 'close'"
                  class="text-emerald-500"
                />
                <CircleX
                  v-else-if="item.AMLDRACT_HREC_EDITTYPE === 'open'"
                  class="text-rose-500"
                />

                <AlertCircle v-else class="text-amber-500" />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label
                class="text-[10px] uppercase tracking-widest font-black text-indigo-400"
                >Evidence</label
              >
              <div
                class="relative group/img overflow-hidden rounded-[2rem] ring-4 ring-slate-50 shadow-inner"
              >
                <img
                  :src="`http://127.0.0.1:8000/images_action/${item.AMLDRACT_HREC_IMAGE}`"
                  class="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform duration-700"
                  @click="
                    previewImage = `http://127.0.0.1:8000/images_action/${item.AMLDRACT_HREC_IMAGE}`
                  "
                />
                <div
                  class="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none"
                >
                  <Maximize2 class="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-slate-100 flex justify-end gap-3">
          <button
            class="w-12 h-12 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl transition-all duration-300 active:scale-90"
            @click="editItems(item)"
            title="แก้ไข"
          >
            <Pencil class="w-5 h-5" />
          </button>
          <button
            class="btn-save px-8"
            @click="checksubmit(item.AMLDRACT_HREC_ID)"
          >
            <Send class="w-5 h-5 mr-2" />
            <span>ส่งตรวจสอบ</span>
          </button>
        </div>
      </div>

      <!-- REJECTED SECTION -->
      <div v-if="action_reject.length > 0" class="mt-12 space-y-6">
        <div class="flex items-center gap-4 px-2">
          <div
            class="w-10 h-10 bg-rose-500 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-200"
          >
            <AlertTriangle class="text-white w-5 h-5" />
          </div>
          <div class="flex flex-col">
            <h3 class="text-xl font-black text-rose-600 tracking-tight">
              Rejected Actions
            </h3>
            <p
              class="text-xs text-rose-400 font-bold uppercase tracking-widest"
            >
              ข้อมูลที่ถูกส่งกลับมาให้แก้ไข
            </p>
          </div>
        </div>

        <div
          v-for="item in action_reject"
          :key="item.AMLDRACT_HREC_ID"
          class="bg-rose-50/50 backdrop-blur-sm border-2 border-rose-100 border-dashed rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl hover:bg-rose-50 transition-all duration-500"
        >
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <div class="flex flex-col gap-2">
                <label
                  class="text-[10px] uppercase tracking-widest font-black text-rose-400"
                  >Root Cause (Rejected)</label
                >
                <p
                  class="text-rose-900 font-medium leading-relaxed bg-white/60 p-4 rounded-3xl border border-rose-100/50 italic"
                >
                  {{ item.AMLDRACT_HREC_RTCAUSE }}
                </p>
              </div>
              <div class="flex flex-col gap-2">
                <label
                  class="text-[10px] uppercase tracking-widest font-black text-rose-400"
                  >Action Taken</label
                >
                <p
                  class="text-rose-900 font-medium leading-relaxed bg-white/60 p-4 rounded-3xl border border-rose-100/50"
                >
                  {{ item.AMLDRACT_HREC_ACTION }}
                </p>
              </div>
            </div>

            <div class="space-y-6">
              <div
                class="flex items-center justify-between bg-rose-100/50 p-4 rounded-3xl border border-rose-200/30"
              >
                <div class="flex flex-col">
                  <label
                    class="text-[10px] uppercase tracking-widest font-black text-rose-400"
                    >Type</label
                  >
                  <span
                    v-if="item.AMLDRACT_HREC_EDITTYPE === 'close'"
                    class="font-extrabold text-emerald-700 uppercase"
                    >{{ item.AMLDRACT_HREC_EDITTYPE }}</span
                  >
                  <span
                    v-else-if="item.AMLDRACT_HREC_EDITTYPE === 'open'"
                    class="font-extrabold text-rose-700 uppercase"
                    >{{ item.AMLDRACT_HREC_EDITTYPE }}</span
                  >
                  <span
                    v-else
                    class="font-extrabold text-amber-700 uppercase"
                    >{{ item.AMLDRACT_HREC_EDITTYPE }}</span
                  >
                </div>
                <div
                  class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm"
                >
                  <CheckCircle2
                    v-if="item.AMLDRACT_HREC_EDITTYPE === 'close'"
                    class="text-emerald-500"
                  />
                  <CircleX
                    v-else-if="item.AMLDRACT_HREC_EDITTYPE === 'open'"
                    class="text-rose-500"
                  />

                  <AlertCircle v-else class="text-amber-500" />
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <label
                  class="text-[10px] uppercase tracking-widest font-black text-rose-400"
                  >Evidence</label
                >
                <div
                  class="relative group/img overflow-hidden rounded-[2rem] ring-4 ring-white shadow-md"
                >
                  <img
                    :src="`http://127.0.0.1:8000/images_action/${item.AMLDRACT_HREC_IMAGE}`"
                    class="w-full h-48 object-cover cursor-pointer saturate-50 hover:saturate-100 transition-all duration-700"
                    @click="
                      previewImage = `http://127.0.0.1:8000/images_action/${item.AMLDRACT_HREC_IMAGE}`
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="mt-8 pt-6 border-t border-rose-100 flex justify-end gap-3"
          >
            <button
              class="w-12 h-12 flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white rounded-2xl shadow-lg shadow-rose-200 transition-all duration-300 active:scale-90"
              @click="editItems(item)"
              title="แก้ไข"
            >
              <Pencil class="w-5 h-5" />
            </button>
            <button
              class="btn-save bg-rose-600 hover:bg-rose-700 px-8"
              @click="sendToUpdate(item.AMLDRACT_HREC_ID)"
            >
              <Send class="w-5 h-5 mr-2" />
              <span>ส่งข้อมูลอีกครั้ง</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal Form -->
  <Modal
    :is-open="showModal"
    @close="showModal = false"
    size="full"
    color="violet"
    title="Action Form"
  >
    <form class="space-y-2" @submit.prevent="submitForm">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <!-- <div class="flex flex-col gap-2">
          <label for="Root Cause"
            >Root Cause: <span class="text-red-500 mr-2">*</span>
            <span v-if="errors.root_cause" class="text-red-500">{{
              errors.root_cause
            }}</span>
          </label>
          <textarea
            v-model="act.root_cause"
            :class="{ 'border-red-500': errors.root_cause }"
            @input="clearError('root_cause')"
          >
          </textarea>
        </div> -->
        <div class="flex flex-col gap-1">
          <div class="flex items-center justify-between">
            <label for=""
              >Root Cause: <span class="text-red-500 mr-2">*</span>
              <span v-if="errors.root_cause" class="text-red-500">{{
                errors.root_cause
              }}</span>
            </label>
            <button
              type="button"
              @click="toggleVoiceInput_root_cause"
              :class="[
                'flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium transition-all duration-200',
                isListening_root_cause
                  ? 'bg-red-500 text-white animate-pulse'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
              ]"
              :title="
                isListening_root_cause
                  ? 'กำลังฟัง... (คลิกเพื่อหยุด)'
                  : 'พิมด้วยเสียง'
              "
            >
              <Mic2 :size="16" />
              <span>{{
                isListening_root_cause ? "กำลังฟัง..." : "พิมด้วยเสียง"
              }}</span>
            </button>
          </div>
          <textarea
            v-model="act.root_cause"
            class="border border-gray-300 rounded-sm px-2 py-2 focus:outline-none"
            :class="{ 'border-red-500': errors.root_cause }"
            @input="clearError('root_cause')"
            rows="3"
          ></textarea>
        </div>
        <div class="flex flex-col gap-1">
          <div class="flex items-center justify-between">
            <label for=""
              >Action: <span class="text-red-500 mr-2">*</span>
              <span v-if="errors.action" class="text-red-500">{{
                errors.action
              }}</span>
            </label>
            <button
              type="button"
              @click="toggleVoiceInput_action"
              :class="[
                'flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium transition-all duration-200',
                isListening_action
                  ? 'bg-red-500 text-white animate-pulse'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
              ]"
              :title="
                isListening_action
                  ? 'กำลังฟัง... (คลิกเพื่อหยุด)'
                  : 'พิมด้วยเสียง'
              "
            >
              <Mic2 :size="16" />
              <span>{{
                isListening_action ? "กำลังฟัง..." : "พิมด้วยเสียง"
              }}</span>
            </button>
          </div>
          <textarea
            v-model="act.action"
            class="border border-gray-300 rounded-sm px-2 py-2 focus:outline-none"
            :class="{ 'border-red-500': errors.action }"
            @input="clearError('action')"
            rows="3"
          ></textarea>
        </div>
        <div class="flex flex-col gap-2">
          <label for="employee">Action By: </label>
          <input
            type="text"
            v-model="act.empno"
            class="border border-gray-200 focus:outline-none px-2 py-2 rounded-sm"
            readonly
          />
        </div>
        <div class="flex flex-col col-span-2 gap-3">
          <label for=""
            >ประเภทการ Action: <span class="text-red-500 mr-2">*</span>
            <span v-if="errors.editType" class="text-red-500">{{
              errors.editType
            }}</span>
          </label>
          <div class="flex items-center gap-3">
            <label class="cursor-pointer">
              <input
                type="radio"
                name="processType"
                class="peer hidden"
                value="close"
                v-model="act.editType"
                @input="clearError('editType')"
              />
              <span
                class="font-medium text-gray-400 peer-checked:text-white peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:scale-110 transition-all duration-200 ease-in-out px-2 py-1 rounded-md text-lg border border-gray-300 peer-checked:border-none"
              >
                Close
              </span>
            </label>
            <label class="cursor-pointer">
              <input
                type="radio"
                name="processType"
                class="peer hidden"
                value="temporary"
                v-model="act.editType"
                @input="clearError('editType')"
              />
              <span
                class="font-medium text-gray-400 peer-checked:text-white peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:scale-110 transition-all duration-200 ease-in-out px-2 py-1 rounded-md text-lg border border-gray-300 peer-checked:border-none"
              >
                Temporary
              </span>
            </label>
            <label class="cursor-pointer">
              <input
                type="radio"
                name="processType"
                class="peer hidden"
                value="open"
                v-model="act.editType"
                @input="clearError('editType')"
              />
              <span
                class="font-medium text-gray-400 peer-checked:text-white peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:scale-110 transition-all duration-200 ease-in-out px-2 py-1 rounded-md text-lg border border-gray-300 peer-checked:border-none"
              >
                Open
              </span>
            </label>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="flex flex-col gap-2">
          <label>Image:</label>

          <!-- กรณีแก้ไข: มีรูปเดิมอยู่แล้ว -->
          <div
            v-if="edit_id && typeof act.image === 'string' && act.image"
            class="flex flex-col gap-2"
          >
            <div
              class="flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-md px-3 py-2 text-sm text-sky-800"
            >
              <span>🖼️</span>
              <span class="truncate max-w-[160px]" :title="String(act.image)">{{
                act.image
              }}</span>
            </div>
            <label
              class="bg-sky-500 hover:bg-sky-600 text-white px-3 py-1.5 rounded-lg text-sm transition text-center cursor-pointer flex items-center gap-2 justify-center"
            >
              <Camera :size="16" />
              ถ่ายรูป / เปลี่ยนรูป
              <input
                type="file"
                class="hidden"
                accept="image/*"
                capture="environment"
                @change="handleImageUpload"
              />
            </label>
          </div>

          <!-- กรณีเพิ่มใหม่ หรือเลือกรูปใหม่ตอนแก้ไข -->
          <label
            v-else
            class="flex items-center gap-2 cursor-pointer border border-dashed border-gray-400 rounded-md px-3 py-4 text-gray-500 hover:bg-gray-50 justify-center"
          >
            <Camera :size="20" />
            <span>ถ่ายรูป / เลือกรูปภาพ</span>
            <input
              type="file"
              class="hidden"
              accept="image/*"
              capture="environment"
              @change="handleImageUpload"
            />
          </label>
        </div>
        <div class="flex flex-col gap-1 col-span-2 items-center">
          <img
            v-if="imagePreview"
            :src="imagePreview"
            alt="image"
            class="max-w-full max-h-[300px] object-contain"
          />
        </div>
      </div>
    </form>
    <template #footer>
      <div class="flex justify-end gap-3">
        <button
          class="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg flex items-center gap-2"
          @click="showModal = false"
        >
          <X :size="17" />
          ปิด
        </button>
        <button
          class="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg flex items-center gap-2 text-white"
          @click="submitForm"
        >
          <Save :size="17" />
          บันทึก
        </button>
      </div>
    </template>
  </Modal>

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
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import axios from "axios";
import Swal from "sweetalert2";
import {
  FileText,
  X,
  Save,
  Pencil,
  Send,
  Image,
  Mic2,
  CheckCircle2,
  AlertCircle,
  Maximize2,
  AlertTriangle,
  XCircle,
  CircleX,
} from "lucide-vue-next";
import Modal from "~/components/UI/Modal.vue";
import type { ActionTypesForm } from "~/types/actionTypesForm";

/**
 *
 * TODO: กำหนดตัวแปรหรือสร้างตัวแปรที่ใช้เก็บข้อมูลที่ได้จากการเรียก API
 */

const data_rec = shallowRef<any>([]);
const showModal = ref(false);
const imagePreview = ref<string | null>(null);
const inf_hrec_id = ref<string>("");
const data_action = shallowRef<any>([]);
const previewImage = ref<string | null>(null);
const edit_id = ref<string>("");

const act = ref<ActionTypesForm>({
  root_cause: "",
  action: "",
  editType: "",
  image: null,
  empno: "",
});

const errors = reactive({
  root_cause: "",
  action: "",
  editType: "",
});

const userSession = useCookie("user_session");

watch(
  () => userSession?.value?.empno,
  (val) => {
    if (val) {
      act.value.empno = val;
      console.log("act.value.empno:", act.value.empno);
    }
  },
  { immediate: true },
);

/**
 * TODO: สร้างฟังก์ชันที่ใช้ในการเปิด Modal
 */

function chooseShowForm(id: string) {
  // console.log(id);
  clearForm();
  showModal.value = true;
  inf_hrec_id.value = id;
}

/**
 * TODO: สร้างฟังก์ชันที่ใช้ในการเรียก API
 */

const getData = async () => {
  try {
    const response = await $fetch("http://127.0.0.1:8000/api/info/record");
    data_rec.value = response;
    // console.log(data_rec.value);
  } catch (error) {
    console.error(error);
  }
};

/**
 * TODO: Validation form
 */
const valid = () => {
  let isValidate = true;

  if (!act.value.root_cause) {
    errors.root_cause = "Please input field required!";
    isValidate = false;
  }

  if (!act.value.action) {
    errors.action = "Please input field required!";
    isValidate = false;
  }

  if (!act.value.editType) {
    errors.editType = "Please select field required!";
    isValidate = false;
  }

  return isValidate;
};

/**
 * TODO: clearError
 */
const clearError = (field: keyof typeof errors) => {
  errors[field] = "";
};

/**
 * TODO: handleImageUpload
 */
const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (!file) return;

  // เช็คประเภทไฟล์
  const validImageTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/gif",
    "image/webp",
  ];

  if (!validImageTypes.includes(file.type)) {
    alert("กรุณาเลือกไฟล์รูปภาพเท่านั้น");
    target.value = "";
    return;
  }

  // สร้างชื่อไฟล์สุ่ม .jpg
  const randomName = `IMG-${Date.now()}-${Math.random().toString(36).substring(2, 9)}.jpg`;
  const renamedFile = new File([file], randomName, { type: "image/jpeg" });

  act.value.image = renamedFile;
  imagePreview.value = URL.createObjectURL(renamedFile);
};

/**
 * TODO: function save data
 */
const submitForm = async () => {
  try {
    if (!valid()) {
      Swal.fire({
        title: "Error!",
        text: "กรุณากรอกข้อมูลให้ครบถ้วน!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const formData = new FormData();
    formData.append("root_cause", act.value.root_cause);
    formData.append("action", act.value.action);
    formData.append("editType", act.value.editType);
    formData.append("empno", act.value.empno);
    formData.append("inf_hrec_id", inf_hrec_id.value);

    if (act.value.image instanceof File) {
      // กรณีเปลี่ยนรูปใหม่ → ส่งเป็น File object
      formData.append("image", act.value.image);
    } else if (typeof act.value.image === "string" && act.value.image) {
      // กรณีไม่เปลี่ยนรูป → ส่งชื่อไฟล์เดิม (string) ไปให้ API รู้ว่าใช้รูปเดิม
      formData.append("existing_image", act.value.image);
    }

    // for (const [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    if (edit_id.value) {
      formData.append("id", edit_id.value);
      formData.append("_method", "PUT");
      const res = await axios.post(
        "http://127.0.0.1:8000/api/action/update",
        formData,
      );
      if (res.data.status === "success") {
        clearForm();
        getActionData();
        if (action_reject.value.length > 0) {
          showActionReject();
        }
        showModal.value = false;
        console.log(res.data);
      }
    } else {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/action/insert",
        formData,
      );
      if (res.data.status === "success") {
        clearForm();
        getActionData();
        getData();

        showModal.value = false;
        console.log(res.data);
      }
      edit_id.value = "";
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Error!",
      text: "เกิดข้อผิดพลาดในการบันทึกข้อมูล!",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

/**
 * TODO: Voice to input
 */
const isListening_root_cause = ref(false);
const isListening_action = ref(false);
let recognition_root_cause: any = null;
let recognition_action: any = null;

const toggleVoiceInput_root_cause = () => {
  if (isListening_root_cause.value) {
    recognition_root_cause?.stop();
    isListening_root_cause.value = false;
    return;
  }

  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert(
      "เบราว์เซอร์ของคุณไม่รองรับการพิมด้วยเสียง\nกรุณาใช้ Chrome หรือ Edge",
    );
    return;
  }

  recognition_root_cause = new SpeechRecognition();
  recognition_root_cause.lang = "th-TH";
  recognition_root_cause.interimResults = false; // รับเฉพาะผลลัพธ์สุดท้าย
  recognition_root_cause.maxAlternatives = 1;

  recognition_root_cause.onstart = () => {
    isListening_root_cause.value = true;
  };

  recognition_root_cause.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;
    act.value.root_cause = act.value.root_cause
      ? act.value.root_cause + " " + transcript
      : transcript;
    clearError("root_cause");
    // ปิดไมโครโฟนอัตโนมัติเมื่อได้ผลลัพธ์
    recognition_root_cause.stop();
  };

  recognition_root_cause.onend = () => {
    isListening_root_cause.value = false;
  };

  recognition_root_cause.onerror = (event: any) => {
    console.error("Speech recognition error:", event.error);
    isListening_root_cause.value = false;
  };

  recognition_root_cause.start();
};

const toggleVoiceInput_action = () => {
  if (isListening_action.value) {
    recognition_action?.stop();
    isListening_action.value = false;
    return;
  }

  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert(
      "เบราว์เซอร์ของคุณไม่รองรับการพิมด้วยเสียง\nกรุณาใช้ Chrome หรือ Edge",
    );
    return;
  }

  recognition_action = new SpeechRecognition();
  recognition_action.lang = "th-TH";
  recognition_action.interimResults = false; // รับเฉพาะผลลัพธ์สุดท้าย
  recognition_action.maxAlternatives = 1;

  recognition_action.onstart = () => {
    isListening_action.value = true;
  };

  recognition_action.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;
    act.value.action = act.value.action
      ? act.value.action + " " + transcript
      : transcript;
    clearError("action");
    // ปิดไมโครโฟนอัตโนมัติเมื่อได้ผลลัพธ์
    recognition_action.stop();
  };

  recognition_action.onend = () => {
    isListening_action.value = false;
  };

  recognition_action.onerror = (event: any) => {
    console.error("Speech recognition error:", event.error);
    isListening_action.value = false;
  };

  recognition_action.start();
};

/**
 * TODO: clear form
 */
const clearForm = () => {
  act.value = {
    root_cause: "",
    action: "",
    editType: "",
    image: null,
    empno: userSession.value?.empno || "",
  };
  imagePreview.value = null;

  Object.keys(errors).forEach((key) => {
    errors[key as keyof typeof errors] = "";
  });
};

/**
 * TODO: function get data
 */
const getActionData = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/action/record/check",
    );
    // Handle both array response and object-wrapped response (e.g. { data: [...] })
    const result = response.data;
    data_action.value = Array.isArray(result) ? result : (result?.data ?? []);
    // console.log("data_action:", data_action.value);
  } catch (error) {
    console.error("getActionData error:", error);
  }
};

/**
 * TODO: function show data action reject
 */

const action_reject = ref<any>([]);
const showActionReject = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/action/record/reject/",
    );
    action_reject.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * TODO: function check submit
 */
const checksubmit = async (id: string) => {
  try {
    // console.log(id);
    const response = await axios.put(
      "http://127.0.0.1:8000/api/update/action-check/" + id,
    );
    if (response.data.status === "success") {
      getActionData();
    }
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

/**
 * TODO: Edit Data Action
 */
const editItems = (item: any) => {
  edit_id.value = item.AMLDRACT_HREC_ID;
  act.value.root_cause = item.AMLDRACT_HREC_RTCAUSE;
  act.value.action = item.AMLDRACT_HREC_ACTION;
  act.value.editType = item.AMLDRACT_HREC_EDITTYPE;
  act.value.empno = item.AMLDRACT_HREC_ACTIONEMP;
  act.value.image = item.AMLDRACT_HREC_IMAGE;

  imagePreview.value = item.AMLDRACT_HREC_IMAGE
    ? `http://127.0.0.1:8000/images_action/${item.AMLDRACT_HREC_IMAGE}`
    : null;
  showModal.value = true;
};

/**
 * TODO: Update After edit from reject
 */
const sendToUpdate = async (id: string) => {
  try {
    const response = await axios.put(
      "http://127.0.0.1:8000/api/update/reject-action/" + id,
    );
    if (response.data.status === "success") {
      showActionReject();
    }
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getData();
  getActionData();
  showActionReject();
});
</script>

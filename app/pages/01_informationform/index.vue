<template>
  <div class="mb-3">
    <button
      @click="openModal()"
      type="button"
      class="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 rounded-xl font-medium text-white transition-all shadow-lg active:scale-95"
    >
      <div class="flex items-center gap-2">
        <Plus :size="17" />
        <span>เพิ่มข้อมูล</span>
      </div>
    </button>
  </div>
  <div class="card">
    <div class="card-title">
      <div class="flex gap-3 items-center">
        <span class="text-[22px] bg-sky-500 p-1 rounded-lg">📃</span>
        <span>รายการตรวจสอบข้อมูลก่อนส่งให้ไปยังฟอร์มถัดไป</span>
      </div>
    </div>
    <div class="w-full bg-white rounded-xl shadow p-4">
      <div class="overflow-x-auto">
        <div
          class="max-h-[calc(100vh-12rem)] overflow-y-auto border border-gray-100"
        >
          <table class="min-w-auto w-full text-sm text-gray-700">
            <!-- HEADER -->
            <thead
              class="sticky top-0 bg-sky-500 text-white text-[14px] uppercase"
            >
              <tr class="text-center">
                <th class="px-3 py-3 min-w-[200px]">Action</th>
                <th class="px-3 py-3 min-w-[160px]">หมายเลขเอกสาร</th>
                <th class="px-3 py-3 min-w-[120px]">ผู้บันทึก</th>
                <th class="px-3 py-3 min-w-[140px]">เวลาบันทึกล่าสุด</th>
                <th class="px-3 py-3 min-w-[70px]">Line</th>
                <th class="px-3 py-3 min-w-[100px]">Customer</th>
                <th class="px-3 py-3 min-w-[200px]">Work Order</th>
                <th class="px-3 py-3 min-w-[200px]">Model Code</th>
                <th class="px-3 py-3 min-w-[200px]">Model Name</th>
                <th class="px-3 py-3 min-w-[100px]">Lot Size</th>
                <th class="px-3 py-3 min-w-[90px]">Process</th>
                <th class="px-3 py-3 min-w-[130px]">Cause Type</th>
                <th class="px-3 py-3 min-w-[180px]">Problem</th>
                <th class="px-3 py-3 min-w-[100px]">Location</th>
                <th class="px-3 py-3 min-w-[100px]">Machine</th>
                <th class="px-3 py-3 min-w-[140px]">จำนวนงานเสีย</th>
                <th class="px-3 py-3 min-w-[90px]">รูปภาพ</th>
              </tr>
            </thead>

            <!-- BODY -->
            <tbody class="divide-y">
              <tr
                v-for="item in data_rec"
                :key="item.AMLDRINF_HREC_ID"
                class="hover:bg-gray-50 transition text-center"
              >
                <!-- ACTION -->
                <td class="px-3 py-2">
                  <div class="flex gap-2">
                    <button
                      class="flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-sm transition"
                      @click="UpdateCheck(item.AMLDRINF_HREC_ID)"
                    >
                      <Send class="w-4 h-4" />
                      ยืนยัน
                    </button>

                    <button
                      class="flex items-center gap-1 bg-amber-400 hover:bg-amber-500 text-black px-3 py-1.5 rounded-lg text-sm transition"
                      @click="editForm(item)"
                    >
                      <Pencil class="w-4 h-4" />
                      แก้ไข
                    </button>

                    <button
                      class="flex items-center gap-1 bg-rose-500 hover:bg-rose-600 text-white px-3 py-1.5 rounded-lg text-sm transition"
                      @click="deleteForm(item.AMLDRINF_HREC_ID)"
                    >
                      <Trash class="w-4 h-4" />
                      ลบ
                    </button>
                  </div>
                </td>

                <td class="px-3 py-2">{{ item.AMLDRINF_DOC_NUM }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_EMPHREC }}</td>
                <td class="px-3 py-2">
                  {{ dayjs(item.AMLDRINF_HREC_LSTDT).format("HH:mm") }}
                </td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_LINE }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_CUS }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_WON }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_MDLCD }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_MDLNM }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_LOTS }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_PROCS }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_CSTYPE }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_PROB }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_LOCATE }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_MACHINE }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_QTYNG }}</td>
                <td class="px-3 py-2">
                  <template v-if="item.AMLDRINF_HREC_IMAGE">
                    <img
                      :src="`http://127.0.0.1:8000/images_information/${item.AMLDRINF_HREC_IMAGE}`"
                      class="w-12 h-12 object-cover rounded cursor-pointer hover:opacity-80 transition ring-1 ring-gray-200"
                      @click="
                        previewImage = `http://127.0.0.1:8000/images_information/${item.AMLDRINF_HREC_IMAGE}`
                      "
                    />
                  </template>
                  <span v-else class="text-gray-400 text-xs">-</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- Image Lightbox Popup -->
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

  <Modal
    :is-open="isModalOpen"
    title="Information Form "
    size="full"
    color="blue"
    @close="isModalOpen = false"
  >
    <form class="space-y-3" @submit.prevent="submitForm">
      <div class="space-x-2 flex items-center">
        <Hash :size="17" class="text-blue-600" />
        <label for="">Employee ID:</label>
        <input
          type="text"
          v-model="inf.employee_id"
          class="border border-gray-300 rounded-sm px-2 py-1 focus:outline-none"
          :class="{ 'border-red-500': errors.employee_id }"
          @input="clearError('employee_id')"
        />
        <span v-if="errors.employee_id" class="text-red-500">{{
          errors.employee_id
        }}</span>
      </div>
      <div class="grid md:grid-cols-3 grid-cols-2 gap-3">
        <div class="flex flex-col gap-1">
          <label for=""
            >Line: <span class="text-red-500 mr-2">*</span>
            <span v-if="errors.line" class="text-red-500">{{
              errors.line
            }}</span>
          </label>
          <select
            v-model="inf.line"
            class="border border-gray-300 rounded-sm px-2 py-2 focus:outline-none w-full"
            :class="{ 'border-red-500': errors.line }"
            @change="clearError('line')"
          >
            <option value="" disabled selected>Select Line</option>
            <option
              v-for="line in lines_prod"
              :key="line.value"
              :value="line.value"
            >
              {{ line.label }}
            </option>
          </select>
        </div>
        <div class="flex flex-col gap-1">
          <label for=""
            >Customer: <span class="text-red-500 mr-2">*</span
            ><span v-if="errors.customer" class="text-red-500">{{
              errors.customer
            }}</span></label
          >
          <Multiselect
            v-model="inf.customer"
            :options="options_cus"
            :searchable="true"
            :clearable="true"
            :close-on-select="true"
            :create-option="false"
            :preserve-search="false"
            :hide-selected="false"
            :placeholder="'Select Customer'"
            :class="{ 'border-red-500': errors.customer }"
            @change="clearError('customer')"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for=""
            >Work Order: <span class="text-red-500 mr-2">*</span
            ><span v-if="errors.won" class="text-red-500">{{
              errors.won
            }}</span></label
          >
          <Multiselect
            ref="wonSelect"
            v-model="inf.won"
            :options="options_won"
            :searchable="true"
            :clearable="true"
            :close-on-select="true"
            :create-option="false"
            :preserve-search="false"
            :hide-selected="false"
            :placeholder="'Select Work Order'"
            :class="{ 'border-red-500': errors.won }"
            @change="clearError('customer')"
          />
        </div>
      </div>
      <div class="grid md:grid-cols-3 grid-cols-2 gap-3">
        <div class="flex flex-col gap-1">
          <label for="">Model Code: </label>
          <input
            type="text"
            v-model="inf.model_code"
            class="border border-gray-300 rounded-sm px-2 py-2 focus:outline-none"
            readonly
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for="">Model Name: </label>
          <input
            type="text"
            v-model="inf.model_name"
            class="border border-gray-300 rounded-sm px-2 py-2 focus:outline-none"
            readonly
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for="">Lot Size: </label>
          <input
            type="number"
            v-model="inf.lots"
            class="border border-gray-300 rounded-sm px-2 py-2 focus:outline-none"
            readonly
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="flex flex-col gap-1">
          <label for=""
            >Process: <span class="text-red-500 mr-2">*</span>
            <span v-if="errors.procs" class="text-red-500">{{
              errors.procs
            }}</span>
          </label>
          <Multiselect
            v-model="inf.procs"
            :options="processes"
            :searchable="true"
            :clearable="true"
            :close-on-select="true"
            :create-option="false"
            :preserve-search="false"
            :hide-selected="false"
            :placeholder="'Select Process'"
            :class="{ 'border-red-500': errors.procs }"
            @change="clearError('procs')"
          />
        </div>
        <div class="flex flex-col col-span-2 gap-3">
          <label for=""
            >Cause: <span class="text-red-500 mr-2">*</span>
            <span v-if="errors.cause" class="text-red-500">{{
              errors.cause
            }}</span>
          </label>
          <div class="flex items-center gap-3">
            <label class="cursor-pointer">
              <input
                type="radio"
                name="processType"
                class="peer hidden"
                value="Man"
                v-model="inf.cause"
                @input="clearError('cause')"
              />
              <span
                class="font-medium text-gray-400 peer-checked:text-white peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:scale-110 transition-all duration-200 ease-in-out px-2 py-1 rounded-md text-lg border border-gray-300 peer-checked:border-none"
              >
                Man
              </span>
            </label>
            <label class="cursor-pointer">
              <input
                type="radio"
                name="processType"
                class="peer hidden"
                value="Machine"
                v-model="inf.cause"
                @input="clearError('cause')"
              />
              <span
                class="font-medium text-gray-400 peer-checked:text-white peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:scale-110 transition-all duration-200 ease-in-out px-2 py-1 rounded-md text-lg border border-gray-300 peer-checked:border-none"
              >
                Machine
              </span>
            </label>
            <label class="cursor-pointer">
              <input
                type="radio"
                name="processType"
                class="peer hidden"
                value="Method"
                v-model="inf.cause"
                @input="clearError('cause')"
              />
              <span
                class="font-medium text-gray-400 peer-checked:text-white peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:scale-110 transition-all duration-200 ease-in-out px-2 py-1 rounded-md text-lg border border-gray-300 peer-checked:border-none"
              >
                Method
              </span>
            </label>
            <label class="cursor-pointer">
              <input
                type="radio"
                name="processType"
                class="peer hidden"
                value="Mat."
                v-model="inf.cause"
                @input="clearError('cause')"
              />
              <span
                class="font-medium text-gray-400 peer-checked:text-white peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:scale-110 transition-all duration-200 ease-in-out px-2 py-1 rounded-md text-lg border border-gray-300 peer-checked:border-none"
              >
                Mat.
              </span>
            </label>
            <label class="cursor-pointer">
              <input
                type="radio"
                name="processType"
                class="peer hidden"
                value="Etc."
                v-model="inf.cause"
                @input="clearError('cause')"
              />
              <span
                class="font-medium text-gray-400 peer-checked:text-white peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:scale-110 transition-all duration-200 ease-in-out px-2 py-1 rounded-md text-lg border border-gray-300 peer-checked:border-none"
              >
                Etc.
              </span>
            </label>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="flex flex-col gap-1">
          <div class="flex items-center justify-between">
            <label for=""
              >Problem: <span class="text-red-500 mr-2">*</span>
              <span v-if="errors.prob" class="text-red-500">{{
                errors.prob
              }}</span>
            </label>
            <button
              type="button"
              @click="toggleVoiceInput"
              :class="[
                'flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium transition-all duration-200',
                isListening
                  ? 'bg-red-500 text-white animate-pulse'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              ]"
              :title="isListening ? 'กำลังฟัง... (คลิกเพื่อหยุด)' : 'พิมด้วยเสียง'"
            >
              <Mic2 :size="16" />
              <span>{{ isListening ? 'กำลังฟัง...' : 'พิมด้วยเสียง' }}</span>
            </button>
          </div>
          <textarea
            v-model="inf.prob"
            class="border border-gray-300 rounded-sm px-2 py-2 focus:outline-none"
            :class="{ 'border-red-500': errors.prob }"
            @input="clearError('prob')"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div class="flex flex-col gap-1">
          <label for=""
            >Location: <span class="text-red-500 mr-2">*</span>
            <span v-if="errors.locate" class="text-red-500">{{
              errors.locate
            }}</span>
          </label>
          <input
            type="text"
            v-model="inf.locate"
            class="border border-gray-300 rounded-sm px-2 py-2 focus:outline-none"
            :class="{ 'border-red-500': errors.locate }"
            @input="clearError('locate')"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for=""
            >Machine: <span class="text-red-500 mr-2">*</span>
            <span v-if="errors.machine" class="text-red-500">{{
              errors.machine
            }}</span>
          </label>
          <input
            type="text"
            v-model="inf.machine"
            class="border border-gray-300 rounded-sm px-2 py-2 focus:outline-none"
            :class="{ 'border-red-500': errors.machine }"
            @input="clearError('machine')"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for=""
            >Qty (NG): <span class="text-red-500 mr-2">*</span>
            <span v-if="errors.qty_ng" class="text-red-500">{{
              errors.qty_ng
            }}</span>
          </label>
          <input
            type="number"
            v-model="inf.qty_ng"
            class="border border-gray-300 rounded-sm px-2 py-2 focus:outline-none"
            :class="{ 'border-red-500': errors.qty_ng }"
            @input="clearError('qty_ng')"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for=""
            >Start Time: <span class="text-red-500 mr-2">*</span>
            <span v-if="errors.start_time" class="text-red-500">{{
              errors.start_time
            }}</span>
          </label>
          <input
            type="time"
            v-model="inf.start_time"
            class="border border-gray-300 rounded-sm px-2 py-2 focus:outline-none"
            :class="{ 'border-red-500': errors.start_time }"
            @input="clearError('start_time')"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="flex flex-col gap-2">
          <label>Image:</label>

          <!-- กรณีแก้ไข: มีรูปเดิมอยู่แล้ว -->
          <div
            v-if="id_hrec && typeof inf.image === 'string' && inf.image"
            class="flex flex-col gap-2"
          >
            <div
              class="flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-md px-3 py-2 text-sm text-sky-800"
            >
              <span>🖼️</span>
              <span class="truncate max-w-[160px]" :title="String(inf.image)">{{
                inf.image
              }}</span>
            </div>
            <label
              class="bg-sky-500 hover:bg-sky-600 text-white px-3 py-1.5 rounded-lg text-sm transition text-center cursor-pointer flex items-center gap-2 justify-center"
            >
              <Image />
              เปลี่ยนรูป
              <input type="file" class="hidden" @change="handleImageUpload" />
            </label>
          </div>

          <!-- กรณีเพิ่มใหม่ หรือเลือกรูปใหม่ตอนแก้ไข -->
          <input
            v-else
            type="file"
            @change="handleImageUpload"
            class="border border-gray-300 rounded-sm px-2 py-2 focus:outline-none"
          />
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
    <!-- เนื้อหาในส่วน Footer (Optional Slot) -->
    <template #footer>
      <button @click="submitForm" class="btn-save">
        <Save />
        บันทึก
      </button>
      <button @click="isModalOpen = false" class="btn-secondary">
        <X />
        Close
      </button>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import {
  Hash,
  Save,
  Plus,
  X,
  Send,
  Pencil,
  Trash,
  Image,
  Mic2,
} from "lucide-vue-next";
import type { InformationTypesForm } from "~/types/informationTypesForm";
import axios from "axios";
import Swal from "sweetalert2";
import Multiselect from "@vueform/multiselect";
import dayjs from "dayjs";
import Modal from "~/components/UI/Modal.vue";

/**
 * TODO: กำหนดหรือสร้างตัวแปร
 */

const inf = ref<InformationTypesForm>({
  employee_id: "",
  line: "",
  customer: "",
  won: "",
  model_code: "",
  model_name: "",
  lots: 0,
  procs: "",
  cause: "Man",
  prob: "",
  image: null,
  locate: "",
  machine: "",
  qty_ng: 0,
  start_time: dayjs(new Date()).format("HH:mm"),
});

/**
 * TODO: กำหนด varidations form
 */
const errors = reactive({
  employee_id: "",
  line: "",
  customer: "",
  won: "",
  procs: "",
  cause: "",
  prob: "",
  locate: "",
  machine: "",
  qty_ng: "",
  start_time: "",
});

const customers_list = ref<any[]>([]);
const options_cus = ref<any[]>([]);

const won_lists = ref<any[]>([]);
const options_won = ref<any[]>([]);
const wonSelect = ref<any>(null);

const check_won = ref<any[]>([]);

const isEditing = ref(false); // flag กันไม่ให้ watch ล้าง won ตอน edit

// ---- Voice Input ----
const isListening = ref(false);
let recognition: any = null;

const toggleVoiceInput = () => {
  if (isListening.value) {
    recognition?.stop();
    isListening.value = false;
    return;
  }

  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("เบราว์เซอร์ของคุณไม่รองรับการพิมด้วยเสียง\nกรุณาใช้ Chrome หรือ Edge");
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "th-TH";
  recognition.interimResults = false; // รับเฉพาะผลลัพธ์สุดท้าย
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    isListening.value = true;
  };

  recognition.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;
    inf.value.prob = inf.value.prob
      ? inf.value.prob + " " + transcript
      : transcript;
    clearError("prob");
    // ปิดไมโครโฟนอัตโนมัติเมื่อได้ผลลัพธ์
    recognition.stop();
  };

  recognition.onend = () => {
    isListening.value = false;
  };

  recognition.onerror = (event: any) => {
    console.error("Speech recognition error:", event.error);
    isListening.value = false;
  };

  recognition.start();
};
// ---- End Voice Input ----


const imagePreview = ref<string | null>(null);
const previewImage = ref<string | null>(null);

const isModalOpen = ref(false);

const data_rec = shallowRef<any[]>([]);

const id_hrec = ref<string>("");

/**
 * TODO: function open modal
 */
const openModal = () => {
  resetForm();
  id_hrec.value = "";
  isModalOpen.value = true;
};

/**
 * TODO: สร้างตัวแปรสำหรับเก็บข้อมูล line
 */
const lines_prod = ref([
  { value: "SMT-1", label: "SMT-1" },
  { value: "SMT-2", label: "SMT-2" },
  { value: "SMT-3", label: "SMT-3" },
  { value: "SMT-4", label: "SMT-4" },
  { value: "SMT-5", label: "SMT-5" },
  { value: "SMT-6", label: "SMT-6" },
  { value: "SMT-7", label: "SMT-7" },
  { value: "SMT-8", label: "SMT-8" },
  { value: "SMT-9", label: "SMT-9" },
  { value: "SMT-10", label: "SMT-10" },
  { value: "SMT-11", label: "SMT-11" },
  { value: "SMT-12", label: "SMT-12" },
  { value: "SMT-13", label: "SMT-13" },
  { value: "SMT-14", label: "SMT-14" },
  { value: "SMT-15", label: "SMT-15" },
  { value: "SMT-16", label: "SMT-16" },
  { value: "SMT-17", label: "SMT-17" },
  { value: "SMT-18", label: "SMT-18" },
  { value: "SMT-19", label: "SMT-19" },
  { value: "SMT-20", label: "SMT-20" },
  { value: "JV-1", label: "JV-1" },
  { value: "JV-2", label: "JV-2" },
  { value: "AV-1", label: "AV-1" },
  { value: "AV-2", label: "AV-2" },
  { value: "AV-3", label: "AV-3" },
  { value: "AV-4", label: "AV-4" },
  { value: "RH-1", label: "RH-1" },
  { value: "RH-2", label: "RH-2" },
  { value: "RH-3", label: "RH-3" },
  { value: "RH-4", label: "RH-4" },
]);

const processes = ref([
  { value: "AX", label: "AX" },
  { value: "RD", label: "RD" },
  { value: "RF", label: "RF" },
  { value: "CP", label: "CP" },
  { value: "RF1", label: "RF1" },
  { value: "RF2", label: "RF2" },
]);

/**
 * TODO: กำหนดฟังก์ชัน
 */

const validateForm = () => {
  let isValid = true;

  if (!inf.value.employee_id) {
    errors.employee_id = "Employee ID is required";
    isValid = false;
  }

  if (!inf.value.line) {
    errors.line = "Line is required";
    isValid = false;
  }

  if (!inf.value.customer) {
    errors.customer = "Customer is required";
    isValid = false;
  }

  if (!inf.value.won) {
    errors.won = "Work Order is required";
    isValid = false;
  }

  if (!inf.value.cause) {
    errors.cause = "Cause is required";
    isValid = false;
  }

  if (!inf.value.prob) {
    errors.prob = "Problem is required";
    isValid = false;
  }

  if (!inf.value.locate) {
    errors.locate = "Location is required";
    isValid = false;
  }

  if (!inf.value.machine) {
    errors.machine = "Machine is required";
    isValid = false;
  }

  if (!inf.value.qty_ng) {
    errors.qty_ng = "Qty (NG) is required";
    isValid = false;
  }

  if (!inf.value.start_time) {
    errors.start_time = "Start Time is required";
    isValid = false;
  }

  return isValid;
};

const submitForm = async (e?: Event) => {
  if (e) e.preventDefault();

  try {
    if (!validateForm()) {
      Swal.fire({
        title: "Error!",
        text: "กรุณากรอกข้อมูลให้ครบถ้วน!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const formData = new FormData();

    formData.append("emp_id", inf.value.employee_id);
    formData.append("line", inf.value.line);
    formData.append("customer", inf.value.customer);
    formData.append("won", inf.value.won);
    formData.append("model_code", inf.value.model_code);
    formData.append("model_name", inf.value.model_name);
    formData.append("lots", String(inf.value.lots));
    formData.append("procs", inf.value.procs);
    formData.append("cause", inf.value.cause);
    formData.append("prob", inf.value.prob);
    formData.append("locate", inf.value.locate);
    formData.append("machine", inf.value.machine);
    formData.append("qty_ng", String(inf.value.qty_ng));
    formData.append("start_time", inf.value.start_time);

    // append image file
    if (inf.value.image instanceof File) {
      // กรณีเปลี่ยนรูปใหม่ → ส่งเป็น File object
      formData.append("image", inf.value.image);
    } else if (typeof inf.value.image === "string" && inf.value.image) {
      // กรณีไม่เปลี่ยนรูป → ส่งชื่อไฟล์เดิม (string) ไปให้ API รู้ว่าใช้รูปเดิม
      formData.append("existing_image", inf.value.image);
    }

    if (id_hrec.value) {
      formData.append("id_hrec", id_hrec.value);
      formData.append("_method", "PUT"); // สำคัญ
      const res = await axios.post(
        "http://127.0.0.1:8000/api/info/update",
        formData,
      );
      console.log(res.data);

      if (res.data.status === "success") {
        getRecordInfo();
        resetForm();
        isModalOpen.value = false;
      }
    } else {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/info/insert",
        formData,
      );
      if (res.data.status === "success") {
        getRecordInfo();
        resetForm();
        isModalOpen.value = false;
      }
    }
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: "Something went wrong!",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

const resetForm = () => {
  inf.value = {
    employee_id: "",
    line: "",
    customer: "",
    won: "",
    model_code: "",
    model_name: "",
    lots: 0,
    procs: "",
    cause: "Man",
    prob: "",
    image: null,
    locate: "",
    machine: "",
    qty_ng: 0,
    start_time: dayjs(new Date()).format("HH:mm"),
  };

  imagePreview.value = null;

  Object.keys(errors).forEach((key) => {
    errors[key as keyof typeof errors] = "";
  });
};

const getCustomer = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/vcus");

    customers_list.value = response.data;
    options_cus.value = customers_list.value.map((item: any) => {
      return {
        value: item.BGCD.trim(),
        label: item.BGCD.trim(),
      };
    });
    // console.log(options_cus.value);
  } catch (error) {
    console.error(error);
  }
};

const getWorkOrder = async (customer: string) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/vwork/${encodeURIComponent(customer)}`,
    );
    const data = response.data;
    options_won.value = data.map((item: any) => ({
      value: item.WON.trim(),
      label: item.WON.trim(),
    }));
  } catch (error) {
    console.error(error);
  }
};

const getCheckModelByWon = async (won: string) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/vcheckmodel/${encodeURIComponent(won)}`,
    );
    const model = response.data;
    if (model) {
      inf.value.model_code = model.MDLCD?.trim() || "";
      inf.value.model_name = model.MDLNM?.trim() || "";
      inf.value.lots = parseInt(model.WONQT) || 0;
    }
  } catch (error) {
    console.error(error);
  }
};

const getRecordInfo = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/info/record/check",
    );

    data_rec.value = response.data;
    // console.log(data_rec.value);
  } catch (error) {
    console.error(error);
  }
};

const UpdateCheck = async (id: string) => {
  // console.log(id);
  try {
    const response = await axios.put(
      "http://127.0.0.1:8000/api/update/check/" + id,
    );
    if (response.data.status === "success") {
      getRecordInfo();
    }
  } catch (error) {
    console.error(error);
  }
};

const editForm = async (item: any) => {
  isEditing.value = true;

  inf.value.employee_id = item.AMLDRINF_EMPHREC;
  inf.value.line = item.AMLDRINF_HREC_LINE;
  inf.value.image = item.AMLDRINF_HREC_IMAGE ?? null;
  inf.value.model_code = item.AMLDRINF_HREC_MDLCD;
  inf.value.model_name = item.AMLDRINF_HREC_MDLNM;
  inf.value.lots = item.AMLDRINF_HREC_LOTS;
  inf.value.procs = item.AMLDRINF_HREC_PROCS;
  inf.value.cause = item.AMLDRINF_HREC_CSTYPE;
  inf.value.prob = item.AMLDRINF_HREC_PROB;
  inf.value.locate = item.AMLDRINF_HREC_LOCATE;
  inf.value.machine = item.AMLDRINF_HREC_MACHINE;
  inf.value.qty_ng = item.AMLDRINF_HREC_QTYNG;
  inf.value.customer = item.AMLDRINF_HREC_CUS;

  id_hrec.value = item.AMLDRINF_HREC_ID;

  imagePreview.value = item.AMLDRINF_HREC_IMAGE
    ? `http://127.0.0.1:8000/images_information/${item.AMLDRINF_HREC_IMAGE}`
    : null;

  // เปิด modal ก่อนเลย ไม่ต้องรอ API
  isModalOpen.value = true;

  // โหลด won options แบบ async ใน background
  await getWorkOrder(item.AMLDRINF_HREC_CUS);
  inf.value.won = item.AMLDRINF_HREC_WON;

  isEditing.value = false;
};

const deleteForm = async (id: string) => {
  try {
    const button = await Swal.fire({
      icon: "warning",
      title: "ยืนยันการลบ",
      text: "คุณต้องการลบข้อมูลนี้หรือไม่?",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "ลบ",
      cancelButtonText: "ยกเลิก",
    });
    if (button.isConfirmed) {
      const response = await axios.delete(
        "http://127.0.0.1:8000/api/info/delete/" + id,
      );
      if (response.data.status === "success") {
        getRecordInfo();
      }
    }
  } catch (error) {
    console.error(error);
  }
};

/**
 * TODO: สังเกตว่าถ้าไม่ใส่ข้อมูลในช่อง employee_id แล้วกด submit จะขึ้น error
 * TODO: แต่ถ้าใส่ข้อมูลในช่อง employee_id แล้วกด submit จะไม่ขึ้น error
 * TODO: ให้แก้ให้ถูกต้อง
 */
const clearError = (field: keyof typeof errors) => {
  errors[field] = "";
};

/**
 * TODO: ฟังก์ชันสำหรับจัดการรูปภาพ
 */
const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (!file) return;

  // เช็คประเภทไฟล์
  const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];

  if (!validImageTypes.includes(file.type)) {
    alert("กรุณาเลือกไฟล์รูปภาพเท่านั้น");
    target.value = "";
    return;
  }

  inf.value.image = file;
  imagePreview.value = URL.createObjectURL(file);
};

watch(
  () => inf.value.customer,
  (val) => {
    if (!val) return;
    if (isEditing.value) return; // ข้ามการล้าง won ตอน edit
    options_won.value = [];
    inf.value.won = "";
    getWorkOrder(val);
  },
);

watch(
  () => inf.value.won,
  (val) => {
    if (!val) return;
    getCheckModelByWon(val);
  },
);

onMounted(() => {
  getCustomer();
  getRecordInfo();
});
</script>

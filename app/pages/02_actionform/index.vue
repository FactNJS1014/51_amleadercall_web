<template>
  <div class="card" v-if="data_rec.length > 0">
    <div class="w-full bg-white rounded-xl shadow p-4">
      <div class="overflow-x-auto">
        <div
          class="max-h-[calc(100vh-12rem)] overflow-y-auto border border-gray-100"
        >
          <table class="min-w-auto w-full text-sm text-gray-700">
            <!-- HEADER -->
            <thead
              class="sticky top-0 bg-violet-700 text-white text-[14px] uppercase"
            >
              <tr class="text-center">
                <th class="px-3 py-3 min-w-[200px]">Action</th>
                <th class="px-3 py-3 min-w-[160px]">หมายเลขเอกสาร</th>
                <th class="px-3 py-3 min-w-[70px]">Line</th>
                <th class="px-3 py-3 min-w-[100px]">Customer</th>
                <th class="px-3 py-3 min-w-[200px]">Work Order</th>
                <th class="px-3 py-3 min-w-[200px]">Model Code</th>
                <th class="px-3 py-3 min-w-[200px]">Model Name</th>
                <th class="px-3 py-3 min-w-[100px]">Lot Size</th>
              </tr>
            </thead>

            <!-- BODY -->
            <tbody class="divide-y">
              <tr
                v-for="item in data_rec"
                :key="item.AMLDRINF_HREC_ID + '-' + item.AMLDRINF_HREC_LINE"
                v-memo="[item]"
                class="hover:bg-gray-50 transition text-center"
              >
                <!-- ACTION -->
                <td class="px-3 py-2">
                  <div class="flex gap-2 justify-center">
                    <button
                      class="flex items-center gap-1 bg-violet-500 hover:bg-violet-600 text-white px-3 py-1.5 rounded-lg text-sm transition cursor-pointer"
                      @click="chooseShowForm(item.AMLDRINF_HREC_ID)"
                    >
                      <FileText class="w-4 h-4" />
                      เปิดฟอร์ม
                    </button>
                  </div>
                </td>

                <td class="px-3 py-2">
                  <span
                    class="bg-sky-200 text-sky-900 px-2 py-1 rounded text-[14px] font-medium"
                  >
                    {{ item.AMLDRINF_DOC_NUM }}
                  </span>
                </td>

                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_LINE }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_CUS }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_WON }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_MDLCD }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_MDLNM }}</td>
                <td class="px-3 py-2">{{ item.AMLDRINF_HREC_LOTS }}</td>
              </tr>
            </tbody>
          </table>
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
        <div class="flex flex-col gap-2">
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
        </div>
        <div class="flex flex-col gap-2">
          <label for="Action"
            >Action: <span class="text-red-500 mr-2">*</span>
            <span v-if="errors.action" class="text-red-500">{{
              errors.action
            }}</span>
          </label>
          <textarea
            v-model="act.action"
            :class="{ 'border-red-500': errors.action }"
            @input="clearError('action')"
          >
          </textarea>
        </div>
        <div class="flex flex-col gap-2">
          <label for="employee">Action By: </label>
          <input
            type="text"
            v-model="act.empno"
            class="border border-gray-200 focus:outline-none px-2 py-2 rounded-sm"
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

  <!-- Show List Action Record -->
  <div class="card mt-3">
    <div class="card-title">
      <div class="flex gap-3 items-center">
        <span class="text-[22px] bg-sky-500 p-1 rounded-lg">📃</span>
        <span>รายการตรวจสอบข้อมูลก่อนส่งอนุมัติ</span>
      </div>
    </div>

    <div class="p-3 space-y-3">
      <div
        v-for="item in data_action"
        :key="item.AMLDRACT_HREC_ID"
        class="card p-3"
      >
        <div
          class="max-h-[calc(100vh-12rem)] overflow-y-auto border border-gray-100"
        >
          <table class="min-w-auto w-full text-sm text-gray-700">
            <!-- HEADER -->
            <thead
              class="sticky top-0 bg-violet-700 text-white text-[14px] uppercase"
            >
              <tr class="text-center">
                <th class="px-3 py-3 min-w-[200px]">ประเภทการ Action</th>
                <th class="px-3 py-3 min-w-[400px]">Root Cause</th>
                <th class="px-3 py-3 min-w-[400px]">Action</th>
                <th class="px-3 py-3 min-w-[100px]">Image</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in data_action"
                :key="item.AMLDRACT_HREC_ID"
                class="hover:bg-gray-50 transition text-center"
              >
                <td class="px-3 py-2">
                  <span
                    class="bg-blue-200 text-blue-900 px-2 py-1 rounded-md font-semibold text-[16px]"
                    >{{ item.AMLDRACT_HREC_EDITTYPE }}</span
                  >
                </td>
                <td class="px-3 py-2">{{ item.AMLDRACT_HREC_RTCAUSE }}</td>
                <td class="px-3 py-2">{{ item.AMLDRACT_HREC_ACTION }}</td>
                <td class="px-3 py-2">
                  <img
                    :src="`http://127.0.0.1:8000/images_action/${item.AMLDRACT_HREC_IMAGE}`"
                    class="w-12 h-12 object-cover rounded cursor-pointer hover:opacity-80 transition ring-1 ring-gray-200"
                    @click="
                      previewImage = `http://127.0.0.1:8000/images_action/${item.AMLDRACT_HREC_IMAGE}`
                    "
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr class="border-gray-200 my-3" />
        <div class="flex justify-end gap-3">
          <button
            class="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
            @click="editItems(item)"
          >
            <Pencil :size="17" />
            แก้ไข
          </button>
          <button
            class="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
            @click="checksubmit(item.AMLDRACT_HREC_ID)"
          >
            <Send :size="17" />
            ยืนยัน
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
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import axios from "axios";
import Swal from "sweetalert2";
import { FileText, X, Save, Pencil, Send, Image } from "lucide-vue-next";
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
  const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];

  if (!validImageTypes.includes(file.type)) {
    alert("กรุณาเลือกไฟล์รูปภาพเท่านั้น");
    target.value = "";
    return;
  }

  act.value.image = file;
  imagePreview.value = URL.createObjectURL(file);
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

    if (act.value.image) {
      formData.append("image", act.value.image);
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
        showModal.value = false;
        console.log(res.data);
      }
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
 * TODO: clear form
 */
const clearForm = () => {
  act.value = {
    root_cause: "",
    action: "",
    editType: "",
    image: null,
    empno: "",
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

onMounted(() => {
  getData();
  getActionData();
});
</script>

<template>
  <div class="mb-8 animate-fade-in">
    <button
      @click="openModal()"
      type="button"
      class="btn-primary shadow-2xl shadow-indigo-200/50 scale-105 hover:scale-110 active:scale-95"
    >
      <div class="flex items-center gap-3">
        <div class="bg-white/20 p-1.5 rounded-lg backdrop-blur-md">
          <Plus :size="20" />
        </div>
        <span class="text-lg tracking-tight">เพิ่มรายการใหม่</span>
      </div>
    </button>
  </div>
  <div class="card animate-fade-in" style="animation-delay: 0.1s">
    <div class="card-title">
      <div class="flex gap-4 items-center space-x-4">
        <span>📃</span>

        <span class="text-xl font-extrabold tracking-tight"
          >รายการ Information Checking</span
        >
        <span
          class="text-xs text-white/60 font-medium uppercase tracking-widest"
          >Information Checking</span
        >
      </div>
    </div>
    <div class="card-body bg-slate-50/30">
      <div class="table-container shadow-sm">
        <div class="max-h-[calc(100vh-24rem)] overflow-y-auto">
          <table class="w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-4 min-w-[200px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  Action
                </th>
                <th
                  class="px-6 py-4 min-w-[250px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  หมายเลขเอกสาร
                </th>
                <th
                  class="px-6 py-4 min-w-[300px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  ผู้บันทึก
                </th>
                <th
                  class="px-6 py-4 min-w-[180px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  เวลาบันทึกล่าสุด
                </th>
                <th
                  class="px-6 py-4 min-w-[200px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  Line
                </th>
                <th
                  class="px-6 py-4 min-w-[100px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  Customer
                </th>
                <th
                  class="px-6 py-4 min-w-[250px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  Work Order
                </th>
                <th
                  class="px-6 py-4 min-w-[250px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  Model Code
                </th>
                <th
                  class="px-6 py-4 min-w-[250px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  Model Name
                </th>
                <th
                  class="px-6 py-4 min-w-[160px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Lot Size
                </th>
                <th
                  class="px-6 py-4 min-w-[90px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Process
                </th>
                <th
                  class="px-6 py-4 min-w-[130px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Cause Type
                </th>
                <th
                  class="px-6 py-4 min-w-[280px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Problem
                </th>
                <th
                  class="px-6 py-4 min-w-[250px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Location
                </th>
                <th
                  class="px-6 py-4 min-w-[250px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Machine
                </th>
                <th
                  class="px-6 py-4 min-w-[170px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  จำนวนงานเสีย
                </th>
                <th
                  class="px-6 py-4 min-w-[100px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  รูปภาพ
                </th>
              </tr>
            </thead>

            <!-- BODY -->
            <tbody class="divide-y divide-slate-100">
              <tr
                v-for="item in data_rec"
                :key="item.AMLDRINF_HREC_ID"
                class="hover:bg-indigo-50/30 transition-colors text-center"
              >
                <!-- ACTION -->
                <td class="px-6 py-4">
                  <div class="flex gap-2 justify-center">
                    <button
                      class="w-20 h-10 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-200 active:scale-90"
                      @click="UpdateCheck(item.AMLDRINF_HREC_ID)"
                      title="ยืนยัน"
                    >
                      <Send class="w-4 h-4" />
                      <span class="ml-2">ยืนยัน</span>
                    </button>

                    <button
                      class="w-20 h-10 flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-black rounded-xl transition-all hover:shadow-lg hover:shadow-amber-200 active:scale-90"
                      @click="editForm(item)"
                      title="แก้ไข"
                    >
                      <Pencil class="w-4 h-4" />
                      <span class="ml-2">แก้ไข</span>
                    </button>

                    <button
                      class="w-20 h-10 flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white rounded-xl transition-all hover:shadow-lg hover:shadow-rose-100 active:scale-90"
                      @click="deleteForm(item.AMLDRINF_HREC_ID)"
                      title="ลบ"
                    >
                      <Trash class="w-4 h-4" />
                      <span class="ml-2">ลบ</span>
                    </button>
                  </div>
                </td>

                <td class="px-6 py-4 font-bold text-slate-900 leading-none">
                  {{ item.AMLDRINF_DOC_NUM }}
                </td>
                <td class="px-6 py-4">{{ findUser(item.AMLDRINF_EMPHREC) }}</td>
                <td
                  class="px-6 py-4"
                  v-if="item.AMLDRINF_HREC_UPDATELSTDT === null"
                >
                  {{
                    dayjs(item.AMLDRINF_HREC_LSTDT).format("DD/MM/YYYY HH:mm")
                  }}
                </td>
                <td class="px-6 py-4" v-else>
                  {{
                    dayjs(item.AMLDRINF_HREC_UPDATELSTDT).format(
                      "DD/MM/YYYY HH:mm",
                    )
                  }}
                </td>
                <td class="px-6 py-4">
                  <span class="badge badge-blue">{{
                    item.AMLDRINF_HREC_LINE
                  }}</span>
                </td>
                <td class="px-6 py-4 font-semibold text-slate-700">
                  {{ item.AMLDRINF_HREC_CUS }}
                </td>
                <td class="px-6 py-4 font-mono text-[15px]">
                  {{ item.AMLDRINF_HREC_WON }}
                </td>
                <td class="px-6 py-4">{{ item.AMLDRINF_HREC_MDLCD }}</td>
                <td class="px-6 py-4">
                  {{ item.AMLDRINF_HREC_MDLNM }}
                </td>
                <td class="px-6 py-4 font-medium">
                  {{ item.AMLDRINF_HREC_LOTS }}
                </td>
                <td class="px-6 py-4">
                  <span class="badge badge-emerald">{{
                    item.AMLDRINF_HREC_PROCS
                  }}</span>
                </td>
                <td class="px-6 py-4">
                  <span class="font-bold text-indigo-600 uppercase text-sm">{{
                    item.AMLDRINF_HREC_CSTYPE
                  }}</span>
                </td>
                <td class="px-6 py-4 min-w-[200px] text-sm">
                  {{ item.AMLDRINF_HREC_PROB }}
                </td>
                <td class="px-6 py-4">
                  {{ item.AMLDRINF_HREC_LOCATE }}
                </td>
                <td class="px-6 py-4">
                  {{ item.AMLDRINF_HREC_MACHINE }}
                </td>
                <td class="px-6 py-4 font-black text-rose-600 text-base">
                  {{ item.AMLDRINF_HREC_QTYNG }}
                </td>
                <td class="px-6 py-4 flex items-center justify-center">
                  <template v-if="item.AMLDRINF_HREC_IMAGE">
                    <img
                      :src="`http://172.22.64.11/51_amleadercall/51_amleadercall_api/images_information/${item.AMLDRINF_HREC_IMAGE}`"
                      class="w-14 h-14 object-cover rounded-2xl cursor-pointer hover:rotate-2 hover:scale-110 transition-all duration-300 ring-2 ring-white shadow-md shadow-slate-200"
                      @click="
                        previewImage = `http://172.22.64.11/51_amleadercall/51_amleadercall_api/images_information/${item.AMLDRINF_HREC_IMAGE}`
                      "
                    />
                  </template>
                  <span v-else class="text-slate-300 font-bold">-</span>
                </td>
              </tr>
            </tbody>

            <!-- BODY REJECT (STD = 4) -->
            <tbody
              v-if="data_reject.length > 0"
              class="divide-y divide-rose-100 relative"
            >
              <!-- Section label row -->
              <tr class="bg-rose-50/80 backdrop-blur-sm sticky left-0 z-10">
                <td
                  colspan="17"
                  class="px-8 py-4 text-rose-700 font-extrabold text-sm uppercase tracking-tight text-left flex items-center gap-2"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"
                  ></span>
                  รายการที่ถูก Reject (ส่งกลับมาแก้ไข)
                </td>
              </tr>
              <tr
                v-for="item in data_reject"
                :key="item.AMLDRINF_HREC_ID"
                class="bg-rose-50/30 hover:bg-rose-50 transition-colors text-center"
              >
                <!-- ACTION -->
                <td class="px-6 py-4">
                  <div class="flex gap-2 justify-center">
                    <button
                      class="w-10 h-10 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-200 active:scale-90"
                      @click="UpdateRejectInfo(item.AMLDRINF_HREC_ID)"
                      title="ยืนยัน"
                    >
                      <Send class="w-4 h-4" />
                      <span class="ml-2">ยืนยัน</span>
                    </button>
                    <button
                      class="w-10 h-10 flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-black rounded-xl transition-all hover:shadow-lg hover:shadow-amber-200 active:scale-90"
                      @click="editForm(item)"
                      title="แก้ไข"
                    >
                      <Pencil class="w-4 h-4" />
                      <span class="ml-2">แก้ไข</span>
                    </button>

                    <button
                      class="w-10 h-10 flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white rounded-xl transition-all hover:shadow-lg hover:shadow-rose-100 active:scale-90"
                      @click="deleteForm(item.AMLDRINF_HREC_ID)"
                      title="ลบ"
                    >
                      <Trash class="w-4 h-4" />
                      <span class="ml-2">ลบ</span>
                    </button>
                  </div>
                </td>

                <td class="px-6 py-4 font-bold text-rose-900 leading-none">
                  {{ item.AMLDRINF_DOC_NUM }}
                </td>
                <td class="px-6 py-4">{{ item.AMLDRINF_EMPHREC }}</td>
                <td class="px-6 py-4 text-rose-800">
                  {{ dayjs(item.AMLDRINF_HREC_LSTDT).format("HH:mm") }}
                </td>
                <td class="px-6 py-4">
                  <span class="badge badge-rose">{{
                    item.AMLDRINF_HREC_LINE
                  }}</span>
                </td>
                <td class="px-6 py-4 text-rose-900 font-semibold">
                  {{ item.AMLDRINF_HREC_CUS }}
                </td>
                <td class="px-6 py-4 font-mono text-xs opacity-60">
                  {{ item.AMLDRINF_HREC_WON }}
                </td>
                <td class="px-6 py-4">{{ item.AMLDRINF_HREC_MDLCD }}</td>
                <td class="px-6 py-4 text-rose-800/80">
                  {{ item.AMLDRINF_HREC_MDLNM }}
                </td>
                <td class="px-6 py-4">{{ item.AMLDRINF_HREC_LOTS }}</td>
                <td class="px-6 py-4">
                  <span class="badge badge-rose">{{
                    item.AMLDRINF_HREC_PROCS
                  }}</span>
                </td>
                <td class="px-6 py-4">
                  <span class="font-bold text-rose-600 uppercase text-xs">{{
                    item.AMLDRINF_HREC_CSTYPE
                  }}</span>
                </td>
                <td
                  class="px-6 py-4 italic text-rose-800/60 text-xs leading-relaxed text-left"
                >
                  {{ item.AMLDRINF_HREC_PROB }}
                </td>
                <td class="px-6 py-4">{{ item.AMLDRINF_HREC_LOCATE }}</td>
                <td class="px-6 py-4">{{ item.AMLDRINF_HREC_MACHINE }}</td>
                <td class="px-6 py-4 font-black text-rose-900">
                  {{ item.AMLDRINF_QTYNG }}
                </td>
                <td class="px-6 py-4 flex items-center justify-center">
                  <template v-if="item.AMLDRINF_HREC_IMAGE">
                    <img
                      :src="`http://172.22.64.11/51_amleadercall/51_amleadercall_api/images_information/${item.AMLDRINF_HREC_IMAGE}`"
                      class="w-14 h-14 object-cover rounded-2xl cursor-pointer hover:rotate-2 hover:scale-110 transition-all duration-300 ring-2 ring-white shadow-md shadow-rose-200"
                      @click="
                        previewImage = `http://172.22.64.11/51_amleadercall/51_amleadercall_api/images_information/${item.AMLDRINF_HREC_IMAGE}`
                      "
                    />
                  </template>
                  <span v-else class="text-rose-200 font-bold">-</span>
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
      <div class="grid md:grid-cols-3 grid-cols-2 gap-3">
        <div class="flex items-center gap-1">
          <label for="" class="text-sm w-[200px]">Employee ID:</label>
          <input
            type="text"
            v-model="inf.employee_id"
            class="border border-gray-300 rounded-sm px-2 py-2 focus:outline-none w-full"
            readonly
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="employee"
            >บันทึกโดย: <span class="text-red-500 mr-2">*</span>
            <span v-if="errors.bysection" class="text-red-500">{{
              errors.bysection
            }}</span></label
          >
          <select
            v-model="inf.bysection"
            class="border border-gray-200 focus:outline-none px-2 py-2 rounded-sm"
          >
            <option value="" disabled selected>-- กรุณาเลือก --</option>
            <option
              v-for="item in List_section"
              :key="item.id"
              :value="item.value"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
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
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
              ]"
              :title="
                isListening ? 'กำลังฟัง... (คลิกเพื่อหยุด)' : 'พิมด้วยเสียง'
              "
            >
              <Mic2 :size="16" />
              <span>{{ isListening ? "กำลังฟัง..." : "พิมด้วยเสียง" }}</span>
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
          <label>
            Image:
            <span class="text-red-500 mr-2">
              * (บังคับต้องถ่ายรูปหรือเลือกรูปภาพ)
            </span>
          </label>

          <!-- MOBILE / TABLET → เปิดกล้อง -->
          <button
            v-if="isMobileOrTablet && !isCameraOpen"
            @click="startCamera"
            class="flex items-center gap-2 cursor-pointer border border-dashed border-gray-400 rounded-md px-3 py-4 text-gray-500 hover:bg-gray-50 justify-center"
          >
            <Camera :size="20" />
            <span>ถ่ายรูป</span>
          </button>

          <!-- DESKTOP → เลือกไฟล์ -->
          <label
            v-else-if="!isMobileOrTablet"
            class="flex items-center gap-2 cursor-pointer border border-dashed border-gray-400 rounded-md px-3 py-4 text-gray-500 hover:bg-gray-50 justify-center"
          >
            <Camera :size="20" />
            <span>เลือกรูปภาพ</span>
            <input
              type="file"
              class="hidden"
              accept="image/*"
              @change="handleImageUpload"
            />
          </label>

          <!-- FULLSCREEN CAMERA -->
          <div
            v-if="isCameraOpen"
            class="fixed inset-0 bg-black z-50 flex flex-col justify-between"
          >
            <!-- กล้อง -->
            <video
              ref="video"
              autoplay
              playsinline
              class="w-full h-full object-cover"
            ></video>

            <!-- ปุ่มควบคุม -->
            <div
              class="absolute bottom-0 left-0 w-full flex justify-center items-center gap-6 pb-6"
            >
              <!-- ยกเลิก -->
              <button
                @click="stopCamera"
                class="bg-white/20 backdrop-blur text-white px-5 py-2 rounded-full"
              >
                ยกเลิก
              </button>

              <!-- ปุ่มถ่ายรูป -->
              <button
                @click="takePhoto"
                class="w-16 h-16 rounded-full bg-white border-4 border-gray-300"
              ></button>
            </div>
          </div>
        </div>

        <!-- Preview -->
        <div class="flex flex-col gap-1 col-span-2 items-center">
          <img
            v-if="imagePreview"
            :src="imagePreview"
            alt="image"
            class="max-w-full max-h-[300px] object-contain"
          />

          <!-- ปุ่มหลังถ่าย -->
          <div v-if="imagePreview" class="flex gap-2 mt-2">
            <button
              @click="retake"
              class="bg-red-500 text-white px-4 py-2 rounded"
            >
              ถ่ายใหม่
            </button>

            <button
              @click="confirmImage"
              class="bg-green-600 text-white px-4 py-2 rounded"
            >
              ใช้รูปนี้
            </button>
          </div>
        </div>
      </div>
    </form>
    <!-- เนื้อหาในส่วน Footer (Optional Slot) -->
    <template #footer>
      <button @click="submitForm" class="btn-save" :disabled="isSubmit">
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
  Camera,
  Mic2,
} from "lucide-vue-next";
import type { InformationTypesForm } from "~/types/informationTypesForm";
import axios from "axios";
import Swal from "sweetalert2";
import Multiselect from "@vueform/multiselect";
import dayjs from "dayjs";
import Modal from "~/components/UI/Modal.vue";

/**
 * TODO: Check Device
 */
const isMobileOrTablet = ref(false);

onMounted(() => {
  const ua = navigator.userAgent.toLowerCase();

  isMobileOrTablet.value = /android|iphone|ipad|ipod|tablet|mobile/.test(ua);
});

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
  bysection: "",
});

const List_section = ref<any>([
  { id: 1, name: "AM Prodcution", value: "AM-Prod" },
  { id: 2, name: "AM Engineer", value: "AME" },
]);

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
  bysection: "",
});

const customers_list = ref<any[]>([]);
const options_cus = ref<any[]>([]);

const options_won = ref<any[]>([]);
const data_reject = ref<any[]>([]);

const isEditing = ref(false); // flag กันไม่ให้ watch ล้าง won ตอน edit
const userSession = useCookie("user_session");
// console.log("userSession:", userSession?.value?.empno);

watch(
  () => userSession?.value?.empno,
  (val) => {
    if (val) {
      inf.value.employee_id = val;
      console.log("inf.value.employee_id:", inf.value.employee_id);
    }
  },
  { immediate: true },
);
const isListening = ref(false);
let recognition: any = null;

const toggleVoiceInput = () => {
  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("เบราว์เซอร์ไม่รองรับ");
    return;
  }

  // ✅ สร้างครั้งเดียว
  if (!recognition) {
    recognition = new SpeechRecognition();

    recognition.lang = "th-TH";
    recognition.interimResults = false;
    recognition.continuous = false; // สำคัญ
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      isListening.value = true;
    };

    recognition.onresult = (event: any) => {
      // ✅ ใช้ result ล่าสุดเท่านั้น
      const lastIndex = event.results.length - 1;
      const result = event.results[lastIndex];

      if (!result.isFinal) return;

      const transcript = result[0].transcript.trim();

      // ✅ กันซ้ำ
      if (!transcript) return;

      inf.value.prob = inf.value.prob
        ? inf.value.prob + " " + transcript
        : transcript;

      clearError("prob");
    };

    recognition.onend = () => {
      isListening.value = false;
    };

    recognition.onerror = (event: any) => {
      console.error("error:", event.error);
      isListening.value = false;
    };
  }

  // toggle
  if (isListening.value) {
    recognition.stop();
    return;
  }

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
  { value: "Label", label: "Label" },
  { value: "Laser", label: "Laser" },
  { value: "IC-ROM", label: "IC-ROM" },
]);

/**
 * TODO: กำหนดฟังก์ชัน
 */

const validateForm = () => {
  let isValid = true;

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

  if (!inf.value.bysection) {
    errors.bysection = "By Section is required";
    isValid = false;
  }

  return isValid;
};

const isSubmit = ref(false);

const submitForm = async (e?: Event) => {
  if (e) e.preventDefault();

  if (isSubmit.value) return;

  isSubmit.value = true;

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
        "http://172.22.64.11/51_amleadercall/51_amleadercall_api/api/info/update",
        formData,
      );
      console.log(res.data);

      if (res.data.status === "success") {
        getRecordInfo();
        resetForm();
        if (data_reject.value.length > 0) {
          getReject();
        }
        isModalOpen.value = false;
      }
    } else {
      const res = await axios.post(
        "http://172.22.64.11/51_amleadercall/51_amleadercall_api/api/info/insert",
        formData,
      );
      if (res.data.status === "success") {
        getRecordInfo();
        resetForm();
        isModalOpen.value = false;
      }
      id_hrec.value = "";
    }
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: "Something went wrong!",
      icon: "error",
      confirmButtonText: "OK",
    });
  } finally {
    isSubmit.value = false;
  }
};

const resetForm = () => {
  inf.value = {
    employee_id: userSession.value?.empno || "",
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
    bysection: "",
  };

  imagePreview.value = null;

  Object.keys(errors).forEach((key) => {
    errors[key as keyof typeof errors] = "";
  });
};

const getCustomer = async () => {
  try {
    const response = await axios.get(
      "http://172.22.64.11/51_amleadercall/51_amleadercall_api/api/vcus",
    );

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
      `http://172.22.64.11/51_amleadercall/51_amleadercall_api/api/vwork/${encodeURIComponent(customer)}`,
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
      `http://172.22.64.11/51_amleadercall/51_amleadercall_api/api/vcheckmodel/${encodeURIComponent(won)}`,
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
      "http://172.22.64.11/51_amleadercall/51_amleadercall_api/api/info/record/check",
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
      "http://172.22.64.11/51_amleadercall/51_amleadercall_api/api/update/check/" +
        id,
    );
    if (response.data.status === "success") {
      getRecordInfo();
    }
  } catch (error) {
    console.error(error);
  }
};

const UpdateRejectInfo = async (id: string) => {
  try {
    console.log(id);
    const response = await axios.put(
      "http://172.22.64.11/51_amleadercall/51_amleadercall_api/api/update/reject-info/" +
        id,
    );
    if (response.data.status === "success") {
      getReject();
    }
  } catch (error) {
    console.error(error);
  }
};

const getReject = async () => {
  try {
    const { data } = await axios.get(
      "http://172.22.64.11/51_amleadercall/51_amleadercall_api/api/info/record/reject",
    );

    data_reject.value = data;

    console.log("Reject:", data_reject.value);
  } catch (error) {
    console.error("Error getReject:", error);
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
  inf.value.bysection = item.AMLDRINF_HREC_BYSEC;

  id_hrec.value = item.AMLDRINF_HREC_ID;

  imagePreview.value = item.AMLDRINF_HREC_IMAGE
    ? `http://172.22.64.11/51_amleadercall/51_amleadercall_api/images_information/${item.AMLDRINF_HREC_IMAGE}`
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
        "http://172.22.64.11/51_amleadercall/51_amleadercall_api/api/info/delete/" +
          id,
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
  const value = inf.value[field];

  if (value && value !== "") {
    errors[field] = "";
  }
};

/**
 * TODO: ฟังก์ชันสำหรับจัดการรูปภาพ
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
  const randomName = `${Math.random().toString(36).substring(2, 9)}.jpg`;
  const renamedFile = new File([file], randomName, { type: "image/jpeg" });

  inf.value.image = renamedFile;
  imagePreview.value = URL.createObjectURL(renamedFile);
};
const video = ref<HTMLVideoElement | null>(null);
const isCameraOpen = ref(false);
const stream = ref<MediaStream | null>(null);

const startCamera = async () => {
  try {
    isCameraOpen.value = true;

    stream.value = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
    });

    if (video.value) {
      video.value.srcObject = stream.value;
    }
  } catch (err) {
    alert("เปิดกล้องไม่ได้");
  }
};

const stopCamera = () => {
  stream.value?.getTracks().forEach((t) => t.stop());
  isCameraOpen.value = false;
};

const takePhoto = () => {
  if (!video.value) return;

  const canvas = document.createElement("canvas");
  canvas.width = video.value.videoWidth;
  canvas.height = video.value.videoHeight;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.drawImage(video.value, 0, 0);

  canvas.toBlob((blob) => {
    if (!blob) return;

    const file = new File([blob], `${Date.now()}.jpg`, {
      type: "image/jpeg",
    });

    inf.value.image = file;
    imagePreview.value = URL.createObjectURL(blob);

    stopCamera();
  }, "image/jpeg");
};

const retake = () => {
  imagePreview.value = null;
  startCamera();
};

const confirmImage = () => {
  console.log(inf.value.image);
};

/**
 * TODO: Get Users from api
 */
const options_user = ref<any[]>([]);
const getUsers = async () => {
  try {
    const response = await axios.get(
      "http://172.22.64.11/51_amleadercall/51_amleadercall_api/api/users",
    );
    options_user.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const findUser = (empno: string) => {
  const user = options_user.value.find((user) => user.VEMPLOYEE_ID === empno);
  return user ? user.VEMPLOYEE_ENFNAME + " " + user.VEMPLOYEE_ENLNAME : "";
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
  getUsers();
  getCustomer();
  getRecordInfo();
  getReject();
});
</script>

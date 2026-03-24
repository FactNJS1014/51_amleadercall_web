<template>
  <div class="p-4 lg:p-6 bg-slate-50 min-h-screen space-y-6">
    <!-- Header -->
    <div class="flex items-center gap-3 mb-2">
      <div
        class="bg-gradient-to-r from-blue-500 to-indigo-600 p-2.5 text-white rounded-xl shadow-lg shadow-blue-500/30"
      >
        <Boxes :size="28" />
      </div>
      <h2 class="text-2xl font-bold text-slate-800 tracking-tight">
        Report Leader Call (SMT & AUTO)
      </h2>
    </div>
    <!-- Stats Cards Wrapper -->
    <div class="w-full flex flex-col sm:flex-row gap-6">
      <!-- Record Complete Card -->
      <div
        class="sm:w-1/2 w-full h-1/2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-xl shadow-emerald-500/20 text-white relative overflow-hidden flex flex-col justify-between p-6 hover:-translate-y-1 transition-transform duration-300"
        @click="scrollToTable()"
      >
        <div
          class="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4"
        >
          <CircleCheck :size="120" stroke-width="1.5" />
        </div>
        <div class="relative z-10 flex items-center gap-3 mb-6">
          <div class="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
            <CircleCheck :size="24" class="text-white" />
          </div>
          <div>
            <h3 class="font-bold text-emerald-50 leading-tight">Completed</h3>
            <p class="text-emerald-100 text-xs font-medium">Total Records</p>
          </div>
        </div>
        <div class="relative z-10 flex items-end gap-2">
          <h3 class="text-5xl font-black tracking-tight">
            {{ fetch_rec_all.length }}
          </h3>
        </div>
      </div>

      <!-- Pending Action Card -->
      <div
        class="sm:w-1/2 w-full h-1/2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl shadow-xl shadow-amber-500/20 text-white relative overflow-hidden flex flex-col justify-between p-6 hover:-translate-y-1 transition-transform duration-300"
        @click="showPending = !showPending"
        :class="showPending ? 'border-4 border-amber-500' : ''"
      >
        <div
          class="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4"
        >
          <ClipboardClock :size="120" stroke-width="1.5" />
        </div>
        <div class="relative z-10 flex items-center gap-3 mb-6">
          <div class="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
            <ClipboardClock :size="24" class="text-white" />
          </div>
          <div>
            <h3 class="font-bold text-amber-50 leading-tight">
              Actions Pending
            </h3>
            <p class="text-amber-100 text-xs font-medium">Required</p>
          </div>
        </div>
        <div class="relative z-10 flex items-end gap-2">
          <h3 class="text-5xl font-black tracking-tight">
            {{ fetch_no_action.length }}
          </h3>
        </div>
      </div>
      <!-- Pending Confirm Card -->
      <div
        class="sm:w-1/2 w-full h-1/2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-xl shadow-blue-500/20 text-white relative overflow-hidden flex flex-col justify-between p-6 hover:-translate-y-1 transition-transform duration-300"
        @click="showPendingConfirm = !showPendingConfirm"
        :class="showPendingConfirm ? 'border-4 border-blue-500' : ''"
      >
        <div
          class="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4"
        >
          <AlarmClockCheck :size="120" stroke-width="1.5" />
        </div>
        <div class="relative z-10 flex items-center gap-3 mb-6">
          <div class="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
            <AlarmClockCheck :size="24" class="text-white" />
          </div>
          <div>
            <h3 class="font-bold text-amber-50 leading-tight">
              Confirm Pending
            </h3>
            <p class="text-amber-100 text-xs font-medium">Required</p>
          </div>
        </div>
        <div class="relative z-10 flex items-end gap-2">
          <h3 class="text-5xl font-black tracking-tight">
            {{ fetch_no_confirm.length }}
          </h3>
        </div>
      </div>
    </div>

    <div
      class="w-full bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col overflow-hidden p-4"
    >
      <!-- Top Cards Panel -->
      <div class="flex gap-6 lg:flex-row flex-col">
        <!-- Filter Card -->
        <div class="w-full">
          <div
            class="px-5 py-4 border-b border-slate-100 bg-gray-500 flex items-center justify-between rounded-t-lg"
          >
            <h3 class="font-bold text-white flex items-center gap-2">
              <Search :size="18" class="text-indigo-200" /> Filter Options
            </h3>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4"
            >
              <!-- Start Date -->
              <div class="w-full">
                <label
                  for="filter_startdate"
                  class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block"
                  >Start Date</label
                >
                <input
                  type="date"
                  id="filter_startdate"
                  v-model="filter_startdate"
                  class="w-full rounded-lg border-slate-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm px-3 py-2.5 bg-slate-50 hover:bg-white transition-colors"
                />
              </div>
              <!-- End Date -->
              <div>
                <label
                  for="filter_enddate"
                  class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block"
                  >End Date</label
                >
                <input
                  type="date"
                  id="filter_enddate"
                  v-model="filter_enddate"
                  class="w-full rounded-lg border-slate-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm px-3 py-2.5 bg-slate-50 hover:bg-white transition-colors"
                />
              </div>
              <!-- Line -->
              <div>
                <label
                  for="filter_line"
                  class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block"
                  >Line</label
                >
                <Multiselect
                  id="filter_line"
                  v-model="filter_line"
                  :options="fetch_line"
                  :searchable="false"
                  :clearable="true"
                  class="mt-1 text-sm border-slate-200"
                />
              </div>
              <!-- Customer -->
              <div>
                <label
                  for="filter_cus"
                  class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block"
                  >Customer</label
                >
                <Multiselect
                  id="filter_cus"
                  v-model="filter_cus"
                  :options="options_cus"
                  :searchable="true"
                  :clearable="true"
                  class="mt-1 text-sm border-slate-200"
                />
              </div>
            </div>

            <div
              class="flex justify-between border-t border-slate-100 mt-4 pt-4"
            >
              <div class="flex gap-2 items-center">
                <div class="flex gap-2">
                  <p class="text-rose-500 text-sm font-bold">สีแดง (open) =</p>
                  <p class="text-rose-500 text-sm">ไม่สามารถแก้ไขได้</p>
                </div>
                <span class="hidden lg:block">,</span>
                <div class="flex gap-2">
                  <p class="text-amber-500 text-sm font-bold">
                    สีเหลือง (temporary) =
                  </p>
                  <p class="text-amber-500 text-sm">แก้ไขได้ชั่วคราว</p>
                </div>
                <span class="hidden lg:block">,</span>
                <div class="flex gap-2">
                  <p class="text-emerald-500 text-sm font-bold">
                    สีเขียว (close) =
                  </p>
                  <p class="text-emerald-500 text-sm">สามารถแก้ไขได้</p>
                </div>
              </div>

              <div class="flex gap-3">
                <button
                  @click="exportData()"
                  class="px-4 py-2.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-xl font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  <Download :size="18" /> Export
                </button>
                <button
                  @click="searchData()"
                  class="px-6 py-2.5 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-200 font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  <Search :size="18" /> ค้นหา
                </button>
              </div>
            </div>

            <!-- Action Buttons -->
          </div>
        </div>
      </div>
      <div class="table-container shadow-sm border">
        <div
          class="overflow-x-auto max-h-[calc(100vh-28rem)] overflow-y-auto w-full"
        >
          <table class="w-full" ref="tableRef">
            <thead class="sticky top-0 z-10">
              <tr>
                <th
                  class="px-6 py-4 min-w-[180px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-r border-slate-200"
                  rowspan="2"
                >
                  หมายเลขเอกสาร
                </th>
                <th
                  colspan="16"
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-r border-slate-200"
                >
                  Information
                </th>
                <th
                  colspan="6"
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-r border-slate-200"
                >
                  Action
                </th>
                <th
                  colspan="5"
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  Confirm
                </th>
              </tr>
              <tr>
                <th
                  class="px-6 py-4 min-w-[250px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  ผู้บันทึก
                </th>
                <th
                  class="px-6 py-4 min-w-[180px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  เวลาบันทึก
                </th>
                <th
                  class="px-6 py-4 min-w-[120px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  Line
                </th>
                <th
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  Customer
                </th>
                <th
                  class="px-6 py-4 min-w-[200px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  Work Order
                </th>
                <th
                  class="px-6 py-4 min-w-[200px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  Model Code
                </th>
                <th
                  class="px-6 py-4 min-w-[250px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
                >
                  Model Name
                </th>
                <th
                  class="px-6 py-4 min-w-[120px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Lot Size
                </th>
                <th
                  class="px-6 py-4 min-w-[120px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Process
                </th>
                <th
                  class="px-6 py-4 min-w-[190px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Cause Type
                </th>
                <th
                  class="px-6 py-4 min-w-[300px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Problem
                </th>
                <th
                  class="px-6 py-4 min-w-[200px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Location
                </th>
                <th
                  class="px-6 py-4 min-w-[200px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Machine
                </th>
                <th
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  จำนวนงานเสีย
                </th>
                <th
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Start Time
                </th>
                <th
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-r border-slate-200"
                >
                  รูปภาพ
                </th>
                <th
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Root Cause
                </th>
                <th
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Action
                </th>
                <th
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Action Type
                </th>
                <th
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Action By
                </th>
                <th
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  รูปภาพ
                </th>
                <th
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-r border-slate-200"
                >
                  เวลาบันทึกล่าสุด
                </th>
                <th
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Result
                </th>
                <th
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  End Time
                </th>
                <th
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Total Time
                </th>
                <th
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                >
                  Confirm By
                </th>
                <th
                  class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-r border-slate-200"
                >
                  เวลาบันทึกล่าสุด
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-if="paginatedData.length === 0">
                <td
                  colspan="15"
                  class="px-6 py-12 text-center text-slate-500 font-medium bg-white"
                >
                  <div class="flex flex-col items-center justify-center gap-3">
                    <DatabaseSearch :size="48" class="text-slate-300" />
                    <span class="text-lg">ไม่พบข้อมูล</span>
                  </div>
                </td>
              </tr>
              <tr
                v-for="item in paginatedData"
                :key="item.AMLDRINF_HREC_ID"
                class="hover:bg-indigo-50/30 transition-colors text-center bg-white"
              >
                <td
                  class="px-6 py-4 font-bold text-slate-900 whitespace-nowrap"
                  v-if="item.AMLDRACT_HREC_EDITTYPE === 'close'"
                >
                  <span class="text-green-500">{{
                    item.AMLDRINF_DOC_NUM
                  }}</span>
                </td>
                <td
                  class="px-6 py-4 font-bold text-slate-900 whitespace-nowrap"
                  v-if="item.AMLDRACT_HREC_EDITTYPE === 'temporary'"
                >
                  <span class="text-amber-500">{{
                    item.AMLDRINF_DOC_NUM
                  }}</span>
                </td>
                <td
                  class="px-6 py-4 font-bold text-slate-900 whitespace-nowrap"
                  v-if="item.AMLDRACT_HREC_EDITTYPE === 'open'"
                >
                  <span class="text-red-500">{{ item.AMLDRINF_DOC_NUM }}</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ findUser(item.AMLDRINF_EMPHREC) }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap"
                  v-if="item.AMLDRINF_HREC_UPDATELSTDT === null"
                >
                  {{
                    dayjs(item.AMLDRINF_HREC_LSTDT).format("DD/MM/YYYY HH:mm")
                  }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap" v-else>
                  {{
                    dayjs(item.AMLDRINF_HREC_UPDATELSTDT).format(
                      "DD/MM/YYYY HH:mm",
                    )
                  }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="badge badge-blue">{{
                    item.AMLDRINF_HREC_LINE
                  }}</span>
                </td>
                <td
                  class="px-6 py-4 font-semibold text-slate-700 whitespace-nowrap"
                >
                  {{ item.AMLDRINF_HREC_CUS }}
                </td>
                <td class="px-6 py-4 font-mono text-[15px] whitespace-nowrap">
                  {{ item.AMLDRINF_HREC_WON }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ item.AMLDRINF_HREC_MDLCD }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ item.AMLDRINF_HREC_MDLNM }}
                </td>
                <td class="px-6 py-4 font-medium whitespace-nowrap">
                  {{ item.AMLDRINF_HREC_LOTS }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="badge badge-emerald">{{
                    item.AMLDRINF_HREC_PROCS
                  }}</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="font-bold text-indigo-600 uppercase text-sm">{{
                    item.AMLDRINF_HREC_CSTYPE
                  }}</span>
                </td>
                <td class="px-6 py-4 min-w-[200px] text-sm text-left">
                  {{ item.AMLDRINF_HREC_PROB }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ item.AMLDRINF_HREC_LOCATE }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ item.AMLDRINF_HREC_MACHINE }}
                </td>
                <td
                  class="px-6 py-4 font-black text-rose-600 text-base whitespace-nowrap"
                >
                  {{ item.AMLDRINF_HREC_QTYNG }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ item.AMLDRINF_HREC_STARTTIME }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap flex items-center justify-center border-r border-slate-200"
                >
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
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ item.AMLDRACT_HREC_RTCAUSE }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ item.AMLDRACT_HREC_ACTION }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ item.AMLDRACT_HREC_EDITTYPE }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ findUser(item.AMLDRACT_HREC_ACTIONEMP) }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap flex items-center justify-center"
                >
                  <template v-if="item.AMLDRACT_HREC_IMAGE">
                    <img
                      :src="`http://172.22.64.11/51_amleadercall/51_amleadercall_api/images_action/${item.AMLDRACT_HREC_IMAGE}`"
                      class="w-14 h-14 object-cover rounded-2xl cursor-pointer hover:rotate-2 hover:scale-110 transition-all duration-300 ring-2 ring-white shadow-md shadow-rose-200"
                      @click="
                        previewImage = `http://172.22.64.11/51_amleadercall/51_amleadercall_api/images_action/${item.AMLDRACT_HREC_IMAGE}`
                      "
                    />
                  </template>
                  <span v-else class="text-rose-200 font-bold">-</span>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap border-r border-slate-200"
                  v-if="item.AMLDRACT_HREC_UPDATELSTDT === null"
                >
                  {{
                    dayjs(item.AMLDRACT_HREC_LSTDT).format("DD/MM/YYYY HH:mm")
                  }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap border-r border-slate-200"
                  v-else
                >
                  {{
                    dayjs(item.AMLDRACT_HREC_UPDATELSTDT).format(
                      "DD/MM/YYYY HH:mm",
                    )
                  }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ item.AMLDRCONF_HREC_RESULT }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ item.AMLDRCONF_HREC_ENDTIME }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ item.AMLDRCONF_HREC_TOTALTIME }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ findUser(item.AMLDRCONF_HREC_EMPNO) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{
                    dayjs(item.AMLDRCONF_HREC_LSTDT).format("DD/MM/YYYY HH:mm")
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination Control -->
        <div
          class="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-slate-50 border-t border-slate-200"
        >
          <div class="text-sm text-slate-500 mb-4 sm:mb-0">
            Showing
            <span class="font-medium text-slate-900">{{
              fetch_rec_all.length > 0 ? startIndex + 1 : 0
            }}</span>
            to
            <span class="font-medium text-slate-900">{{
              Math.min(endIndex, fetch_rec_all.length)
            }}</span>
            of
            <span class="font-medium text-slate-900">{{
              fetch_rec_all.length
            }}</span>
            entries
          </div>
          <div class="flex items-center space-x-2">
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              class="px-3 py-1.5 border border-slate-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white text-sm font-medium text-slate-700 transition-colors bg-white shadow-sm"
            >
              Previous
            </button>

            <div class="hidden sm:flex space-x-1">
              <template v-for="page in displayedPages" :key="page">
                <span v-if="page === '...'" class="px-3 py-1.5 text-slate-500"
                  >...</span
                >
                <button
                  v-else
                  @click="goToPage(page as number)"
                  :class="[
                    'px-3 py-1.5 border rounded-md text-sm font-medium transition-colors shadow-sm',
                    currentPage === page
                      ? 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50',
                  ]"
                >
                  {{ page }}
                </button>
              </template>
            </div>

            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="px-3 py-1.5 border border-slate-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white text-sm font-medium text-slate-700 transition-colors bg-white shadow-sm"
            >
              Next
            </button>

            <div
              class="ml-2 flex items-center gap-2 border-l border-slate-300 pl-4"
            >
              <span class="text-sm text-slate-500 hidden md:inline"
                >Per page:</span
              >
              <select
                v-model="itemsPerPage"
                class="border border-slate-300 rounded-md text-sm px-2 py-1.5 focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-sm"
                @change="currentPage = 1"
              >
                <option :value="10">10</option>
                <option :value="20">20</option>
                <option :value="50">50</option>
                <option :value="100">100</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="previewImage"
        class="fixed inset-0 z-[1200] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        @click.self="previewImage = ''"
      >
        <div class="relative max-w-[90vw] max-h-[90vh]">
          <!-- Close Button -->
          <button
            @click="previewImage = ''"
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
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="showPending"
        class="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        @click.self="showPending = false"
      >
        <div
          class="bg-white w-[90vw] max-h-[90vh] rounded-xl p-6 overflow-auto relative"
        >
          <div class="relative max-w-[90vw] max-h-[90vh]">
            <!-- Close Button -->
            <button
              @click="showPending = false"
              class="absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center bg-white text-gray-700 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition z-10"
            >
              <X :size="18" />
            </button>
            <!-- Title -->
            <div class="flex items-center gap-2 mb-4">
              <ClipboardClock :size="24" class="text-indigo-600" />
              <h2 class="text-lg font-bold">Pending Actions</h2>
            </div>

            <div class="max-h-[calc(100vh-24rem)] overflow-y-auto">
              <table class="w-full">
                <thead>
                  <tr>
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
                      class="px-6 py-4 min-w-[120px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
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
                    v-for="item in fetch_no_action"
                    :key="item.AMLDRINF_HREC_ID"
                    class="hover:bg-indigo-50/30 transition-colors text-center"
                  >
                    <td class="px-6 py-4 font-bold text-slate-900 leading-none">
                      {{ item.AMLDRINF_DOC_NUM }}
                    </td>
                    <td class="px-6 py-4">
                      {{ findUser(item.AMLDRINF_EMPHREC) }}
                    </td>
                    <td class="px-6 py-4">
                      {{ dayjs(item.AMLDRINF_HREC_LSTDT).format("HH:mm") }}
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
                      <span
                        class="font-bold text-indigo-600 uppercase text-sm"
                        >{{ item.AMLDRINF_HREC_CSTYPE }}</span
                      >
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
              </table>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="showPendingConfirm"
        class="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        @click.self="showPendingConfirm = false"
      >
        <div
          class="bg-white w-[90vw] max-h-[90vh] rounded-xl p-6 overflow-auto relative"
        >
          <div class="relative max-w-[90vw] max-h-[90vh]">
            <!-- Close Button -->
            <button
              @click="showPendingConfirm = false"
              class="absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center bg-white text-gray-700 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition z-10"
            >
              <X :size="18" />
            </button>
            <!-- Title -->
            <div class="flex items-center gap-2 mb-4">
              <ClipboardClock :size="24" class="text-indigo-600" />
              <h2 class="text-lg font-bold">Pending Actions</h2>
            </div>

            <div class="max-h-[calc(100vh-24rem)] overflow-y-auto">
              <table class="w-full">
                <thead>
                  <tr>
                    <th
                      class="px-6 py-4 min-w-[180px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-r border-slate-200"
                      rowspan="2"
                    >
                      หมายเลขเอกสาร
                    </th>
                    <th
                      colspan="15"
                      class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-r border-slate-200"
                    >
                      Information
                    </th>
                    <th
                      colspan="6"
                      class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-sm border-r border-slate-200"
                    >
                      Action
                    </th>
                  </tr>
                  <tr>
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
                      class="px-6 py-4 min-w-[120px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
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
                    <th
                      class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                    >
                      Root Cause
                    </th>
                    <th
                      class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                    >
                      Action
                    </th>
                    <th
                      class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                    >
                      Action Type
                    </th>
                    <th
                      class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                    >
                      Action By
                    </th>
                    <th
                      class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-b border-slate-200"
                    >
                      รูปภาพ
                    </th>
                    <th
                      class="px-6 py-4 min-w-[150px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-xs border-r border-slate-200"
                    >
                      เวลาบันทึกล่าสุด
                    </th>
                  </tr>
                </thead>

                <!-- BODY -->
                <tbody class="divide-y divide-slate-100">
                  <tr
                    v-for="item in fetch_no_confirm"
                    :key="item.AMLDRINF_HREC_ID"
                    class="hover:bg-indigo-50/30 transition-colors text-center"
                  >
                    <td class="px-6 py-4 font-bold text-slate-900 leading-none">
                      {{ item.AMLDRINF_DOC_NUM }}
                    </td>
                    <td class="px-6 py-4">
                      {{ findUser(item.AMLDRINF_EMPHREC) }}
                    </td>
                    <td class="px-6 py-4">
                      {{ dayjs(item.AMLDRINF_HREC_LSTDT).format("HH:mm") }}
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
                      <span
                        class="font-bold text-indigo-600 uppercase text-sm"
                        >{{ item.AMLDRINF_HREC_CSTYPE }}</span
                      >
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
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ item.AMLDRACT_HREC_RTCAUSE }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ item.AMLDRACT_HREC_ACTION }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ item.AMLDRACT_HREC_EDITTYPE }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ findUser(item.AMLDRACT_HREC_ACTIONEMP) }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap flex items-center justify-center"
                    >
                      <template v-if="item.AMLDRACT_HREC_IMAGE">
                        <img
                          :src="`http://172.22.64.11/51_amleadercall/51_amleadercall_api/images_action/${item.AMLDRACT_HREC_IMAGE}`"
                          class="w-14 h-14 object-cover rounded-2xl cursor-pointer hover:rotate-2 hover:scale-110 transition-all duration-300 ring-2 ring-white shadow-md shadow-rose-200"
                          @click="
                            previewImage = `http://172.22.64.11/51_amleadercall/51_amleadercall_api/images_action/${item.AMLDRACT_HREC_IMAGE}`
                          "
                        />
                      </template>
                      <span v-else class="text-rose-200 font-bold">-</span>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap border-r border-slate-200"
                      v-if="item.AMLDRACT_HREC_UPDATELSTDT === null"
                    >
                      {{
                        dayjs(item.AMLDRACT_HREC_LSTDT).format(
                          "DD/MM/YYYY HH:mm",
                        )
                      }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap border-r border-slate-200"
                      v-else
                    >
                      {{
                        dayjs(item.AMLDRACT_HREC_UPDATELSTDT).format(
                          "DD/MM/YYYY HH:mm",
                        )
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script setup lang="ts">
import {
  Boxes,
  DatabaseSearch,
  Search,
  Download,
  X,
  CircleCheck,
  ClipboardClock,
  AlarmClockCheck,
} from "lucide-vue-next";
import Multiselect from "@vueform/multiselect";
import axios from "axios";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

/**
 * TODO: สร้างตัวแปรสำหรับเก็บข้อมูล
 */
const showPending = ref(false);
const showPendingConfirm = ref(false);
const tableRef = ref<HTMLElement | null>(null);

/**
 * TODO: Scrollable table
 */

const scrollToTable = () => {
  tableRef.value?.scrollIntoView({
    behavior: "smooth", // เลื่อนนุ่ม ๆ
    block: "start", // ไปชิดด้านบน
  });
};

// Pagination variables
const currentPage = ref(1);
const itemsPerPage = ref(10);

const totalPages = computed(() =>
  Math.max(1, Math.ceil(fetch_rec_all.value.length / itemsPerPage.value)),
);
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);
const endIndex = computed(() => startIndex.value + itemsPerPage.value);
const paginatedData = computed(() =>
  fetch_rec_all.value.slice(startIndex.value, endIndex.value),
);

const displayedPages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  const delta = 2;
  const pages: (number | string)[] = [];

  for (let i = 1; i <= total; i++) {
    if (
      i === 1 ||
      i === total ||
      (i >= current - delta && i <= current + delta)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }
  return pages;
});

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
const goToPage = (page: number) => {
  currentPage.value = page;
};

// Actions
const searchData = () => {
  let filtered = [...original_rec_all.value];

  if (filter_startdate.value && filter_enddate.value) {
    const start = dayjs(filter_startdate.value).startOf("day").valueOf();
    const end = dayjs(filter_enddate.value).endOf("day").valueOf();
    filtered = filtered.filter((item: any) => {
      if (!item.AMLDRINF_HREC_LSTDT) return false;
      const d = dayjs(item.AMLDRINF_HREC_LSTDT).valueOf();
      return d >= start && d <= end;
    });
  } else if (filter_startdate.value) {
    filtered = filtered.filter((item: any) => {
      if (item.AMLDRINF_HREC_UPDATELSTDT === null) {
        return item.AMLDRINF_HREC_LSTDT?.startsWith(filter_startdate.value);
      } else {
        return item.AMLDRINF_HREC_UPDATELSTDT?.startsWith(
          filter_startdate.value,
        );
      }
    });
  } else if (filter_enddate.value) {
    filtered = filtered.filter((item: any) => {
      if (item.AMLDRINF_HREC_UPDATELSTDT === null) {
        return item.AMLDRINF_HREC_LSTDT?.startsWith(filter_enddate.value);
      } else {
        return item.AMLDRINF_HREC_UPDATELSTDT?.startsWith(filter_enddate.value);
      }
    });
  }

  if (filter_line.value) {
    filtered = filtered.filter(
      (item: any) => item.AMLDRINF_HREC_LINE === filter_line.value,
    );
  }

  if (filter_cus.value) {
    filtered = filtered.filter(
      (item: any) => item.AMLDRINF_HREC_CUS === filter_cus.value,
    );
  }

  fetch_rec_all.value = filtered;
  currentPage.value = 1;
};

const getBase64ImageFromUrl = async (url: string) => {
  try {
    const res = await fetch(url, { mode: "no-cors" });
    // We try to fetch the image. If there are CORS issues, 'no-cors' might still fail to give a valid blob for FileReader,
    // but since the API and the front-end are on the same localhost (127.0.0.1:8000), it should work without no-cors.
    // However, let's use standard fetch and handle the blob explicitly.
    const res2 = await fetch(url);
    if (!res2.ok) return null;
    const blob = await res2.blob();
    return await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (err) {
    console.error("Image loading error:", err);
    return null;
  }
};

const exportData = async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Report Leader Call");

  // Row 1 Header Layout - Setup precise cell headers
  worksheet.getCell("A1").value = "หมายเลขเอกสาร";
  worksheet.getCell("B1").value = "Information";
  worksheet.getCell("R1").value = "Action";
  worksheet.getCell("W1").value = "Confirm";

  // Merge Headers
  worksheet.mergeCells("A1:A2");
  worksheet.mergeCells("B1:Q1");
  worksheet.mergeCells("R1:V1");
  worksheet.mergeCells("W1:AA1");

  // Row 2 Sub-headers
  const row2 = worksheet.getRow(2);
  const subHeaders = [
    "หมายเลขเอกสาร", // A2 (Merged)
    "ผู้บันทึก",
    "เวลาบันทึก",
    "Line",
    "Customer",
    "Work Order",
    "Model Code",
    "Model Name",
    "Lot Size",
    "Process",
    "Cause Type",
    "Problem",
    "Location",
    "Machine",
    "จำนวนงานเสีย",
    "Start Time",
    "รูปภาพ",
    "Root Cause",
    "Action",
    "Action By",
    "รูปภาพ",
    "เวลาบันทึกล่าสุด",
    "Result",
    "End Time",
    "Total Time",
    "Confirm By",
    "เวลาบันทึกล่าสุด",
  ];
  subHeaders.forEach((text, index) => {
    row2.getCell(index + 1).value = text;
  });

  // Styling Headers
  for (let i = 1; i <= 2; i++) {
    worksheet.getRow(i).eachCell({ includeEmpty: true }, (cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFF1F5F9" },
      };
      cell.font = { bold: true, color: { argb: "FF475569" } };
      cell.alignment = { vertical: "middle", horizontal: "center" };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });
  }

  // Adjust widths
  const widths = [
    20, 20, 20, 10, 15, 20, 20, 25, 10, 15, 15, 40, 20, 20, 15, 15, 20, 30, 30,
    20, 20, 20, 15, 15, 15, 20, 20,
  ];
  widths.forEach((width, i) => {
    worksheet.getColumn(i + 1).width = width;
  });

  // Start from row 3
  let rowIndex = 3;

  // Map Data Rows
  for (let i = 0; i < fetch_rec_all.value.length; i++) {
    const item = fetch_rec_all.value[i];

    const timeRec = item.AMLDRINF_HREC_UPDATELSTDT
      ? dayjs(item.AMLDRINF_HREC_UPDATELSTDT).format("DD/MM/YYYY HH:mm")
      : item.AMLDRINF_HREC_LSTDT
        ? dayjs(item.AMLDRINF_HREC_LSTDT).format("DD/MM/YYYY HH:mm")
        : "-";

    const actionTime = item.AMLDRACT_HREC_UPDATELSTDT
      ? dayjs(item.AMLDRACT_HREC_UPDATELSTDT).format("DD/MM/YYYY HH:mm")
      : item.AMLDRACT_HREC_LSTDT
        ? dayjs(item.AMLDRACT_HREC_LSTDT).format("DD/MM/YYYY HH:mm")
        : "-";

    const confirmTime = item.AMLDRCONF_HREC_LSTDT
      ? dayjs(item.AMLDRCONF_HREC_LSTDT).format("DD/MM/YYYY HH:mm")
      : "-";

    const rowData = [
      item.AMLDRINF_DOC_NUM || "-",
      findUser(item.AMLDRINF_EMPHREC) || "-",
      timeRec,
      item.AMLDRINF_HREC_LINE || "-",
      item.AMLDRINF_HREC_CUS || "-",
      item.AMLDRINF_HREC_WON || "-",
      item.AMLDRINF_HREC_MDLCD || "-",
      item.AMLDRINF_HREC_MDLNM || "-",
      item.AMLDRINF_HREC_LOTS || "-", // 9
      item.AMLDRINF_HREC_PROCS || "-",
      item.AMLDRINF_HREC_CSTYPE || "-", // 11
      item.AMLDRINF_HREC_PROB || "-", // 12
      item.AMLDRINF_HREC_LOCATE || "-",
      item.AMLDRINF_HREC_MACHINE || "-",
      item.AMLDRINF_HREC_QTYNG || "-", // 15
      item.AMLDRINF_HREC_STARTTIME || "-", // 16
      "", // Q (17) - Information Image Placeholder
      item.AMLDRACT_HREC_RTCAUSE || "-", // 18
      item.AMLDRACT_HREC_ACTION || "-", // 19
      findUser(item.AMLDRACT_HREC_ACTIONEMP) || "-", // 20
      "", // U (21) - Action Image Placeholder
      actionTime, // 22
      item.AMLDRCONF_HREC_RESULT || "-", // 23
      item.AMLDRCONF_HREC_ENDTIME || "-", // 24
      item.AMLDRCONF_HREC_TOTALTIME || "-", // 25
      findUser(item.AMLDRCONF_HREC_EMPNO) || "-", // 26
      confirmTime, // 27
    ];

    const row = worksheet.getRow(rowIndex);
    rowData.forEach((val, colIndex) => {
      row.getCell(colIndex + 1).value = val;
    });

    let hasImage = false;

    // Handle Image 1 (Information) - Column Q (17)
    if (item.AMLDRINF_HREC_IMAGE) {
      const url = `http://172.22.64.11/51_amleadercall/51_amleadercall_api/images_information/${item.AMLDRINF_HREC_IMAGE}`;
      const base64Str = await getBase64ImageFromUrl(url);
      if (base64Str) {
        const ext =
          item.AMLDRINF_HREC_IMAGE.split(".").pop().toLowerCase() === "png"
            ? "png"
            : "jpeg";
        const imageId = workbook.addImage({
          base64: base64Str,
          extension: ext as "jpeg" | "png",
        });
        worksheet.addImage(imageId, {
          tl: { col: 16, row: rowIndex - 1 }, // Column Q (0-indexed is 16)
          ext: { width: 80, height: 80 },
        });
        hasImage = true;
      }
    }

    // Handle Image 2 (Action) - Column U (21)
    if (item.AMLDRACT_HREC_IMAGE) {
      const url = `http://172.22.64.11/51_amleadercall/51_amleadercall_api/images_action/${item.AMLDRACT_HREC_IMAGE}`;
      const base64Str = await getBase64ImageFromUrl(url);
      if (base64Str) {
        const ext =
          item.AMLDRACT_HREC_IMAGE.split(".").pop().toLowerCase() === "png"
            ? "png"
            : "jpeg";
        const imageId = workbook.addImage({
          base64: base64Str,
          extension: ext as "jpeg" | "png",
        });
        worksheet.addImage(imageId, {
          tl: { col: 20, row: rowIndex - 1 }, // Column U (0-indexed is 20)
          ext: { width: 80, height: 80 },
        });
        hasImage = true;
      }
    }

    // Expand row height if either image exists
    row.height = hasImage ? 65 : 30;

    // Center and wrap cells
    for (let c = 1; c <= 27; c++) {
      const cell = row.getCell(c);
      cell.alignment = { vertical: "middle", horizontal: "center" };
      if (c === 12 || c === 18 || c === 19) {
        cell.alignment = {
          vertical: "middle",
          horizontal: "left",
          wrapText: true,
        };
      }
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    }

    rowIndex++;
  }

  const buffer = await workbook.xlsx.writeBuffer();

  // Set FileName
  const currentDate = dayjs().format("YYYY-MM-DD");
  const lineText = filter_line.value ? `_${filter_line.value}` : "";
  const fileName = `Report_Leader_Call_${currentDate}${lineText}.xlsx`;

  saveAs(new Blob([buffer]), fileName);
};

// filter

const filter_startdate = ref<string>("");
const filter_enddate = ref<string>("");
const filter_line = ref<string>("");
const filter_cus = ref<string>("");
const previewImage = ref<string>("");

//fetch data

const fetch_customer = ref<any>([]);
const fetch_line = ref([
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

/**
 * TODO: สร้างฟังก์ชันสำหรับดึงข้อมูล
 */

const options_cus = ref<any>([]);

const getCustomer = async () => {
  try {
    const response = await axios.get(
      "http://172.22.64.11/51_amleadercall/51_amleadercall_api/api/vcus",
    );

    fetch_customer.value = response.data;
    options_cus.value = fetch_customer.value.map((item: any) => {
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

const original_rec_all = ref<any>([]);
const fetch_rec_all = ref<any>([]);
const fetch_no_action = ref<any>([]);
const fetch_no_confirm = ref<any>([]);

const get_rec_all = async () => {
  try {
    const response = await axios.get(
      "http://172.22.64.11/51_amleadercall/51_amleadercall_api/api/all-record",
    );

    original_rec_all.value = response.data.complete;
    fetch_rec_all.value = response.data.complete;
    fetch_no_action.value = response.data.no_action;
    fetch_no_confirm.value = response.data.no_confirm;
    console.log(fetch_rec_all.value);
  } catch (error) {
    console.error(error);
  }
};

/**
 * TODO: Get Users
 */
const options_user = ref<any>([]);
const getUsers = async () => {
  try {
    const response = await axios.get(
      "http://172.22.64.11/51_amleadercall/51_amleadercall_api/api/users",
    );
    options_user.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

const findUser = (empno: string) => {
  const user = options_user.value.find(
    (user: any) => user.VEMPLOYEE_ID === empno,
  );
  return user ? user.VEMPLOYEE_ENFNAME + " " + user.VEMPLOYEE_ENLNAME : "";
};

onMounted(() => {
  getUsers();
  getCustomer();
  get_rec_all();
});
</script>

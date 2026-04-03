## Variables

- `Employee ID` => String, into database=LINECALL_SYSTEM -> table=AM_LDR_INFOHREC_TBL -> column=AMLDRINF_EMPHREC
- `LINE` => String, into database=LINECALL_SYSTEM -> table=AM_LDR_INFOHREC_TBL -> column=AMLDRINF_HREC_LINE
- `Customer` => String, into database=LINECALL_SYSTEM -> table=AM_LDR_INFOHREC_TBL -> column=AMLDRINF_HREC_CUS
- `Work Order` => String, into database=LINECALL_SYSTEM -> table=AM_LDR_INFOHREC_TBL -> column=AMLDRINF_HREC_WON
- `Model Code` => String, into database=LINECALL_SYSTEM -> table=AM_LDR_INFOHREC_TBL -> column=AMLDRINF_HREC_MDLCD
- `Model Name` => String, into database=LINECALL_SYSTEM -> table=AM_LDR_INFOHREC_TBL -> column=AMLDRINF_HREC_MDLNM
- `Lot Size` => Integer, into database=LINECALL_SYSTEM -> table=AM_LDR_INFOHREC_TBL -> column=AMLDRINF_HREC_LOTS
- `Process` => String, into database=LINECALL_SYSTEM -> table=AM_LDR_INFOHREC_TBL -> column=AMLDRINF_HREC_PROCS
- `Cause` => String, into database=LINECALL_SYSTEM -> table=AM_LDR_INFOHREC_TBL -> column=AMLDRINF_HREC_CSTYPE
- `Problem` => String, into database=LINECALL_SYSTEM -> table=AM_LDR_INFOHREC_TBL -> column=AMLDRINF_HREC_PROB
- `Image` => String, into database=LINECALL_SYSTEM -> table=AM_LDR_INFOHREC_TBL -> column=AMLDRINF_HREC_IMAGE
- `Location` => String, into database=LINECALL_SYSTEM -> table=AM_LDR_INFOHREC_TBL -> column=AMLDRINF_HREC_LOCATE
- `Machine` => String, into database=LINECALL_SYSTEM -> table=AM_LDR_INFOHREC_TBL -> column=AMLDRINF_HREC_MACHINE
- `Qty (NG)` => String, into database=LINECALL_SYSTEM -> table=AM_LDR_INFOHREC_TBL -> column=AMLDRINF_HREC_QTYNG
- `Start Time` => String, into database=LINECALL_SYSTEM -> table=AM_LDR_INFOHREC_TBL -> column=AMLDRINF_HREC_STARTTIME

AMLDRINF_HREC_STD

- 0 คือ แสดงข้อมูลเพื่อตรวจสอบ
- 1 คือ แสดงข้อมูลในหน้า action form
- 2 คือ การลบข้อมูล
- 3 คือ สถานะการบันทึกข้อมูลในหน้า action form (complete in information form)
- 4 คือ สถานะถูก Reject

##### AM_LDR_ACTIONHREC_TBL

AMLDRACT_HREC_STD

- 0 คือ แสดงข้อมูลเพื่อตรวจสอบ
- 1 คือ แสดงข้อมูลในหน้า confirm form
- 2 คือ สถานะถูก Reject

## Database

- Database: LINECALL_SYSTEM
- Table: AM_LDR_INFOHREC_TBL

### APT Insert Data

#### Insert Data into AM_LDR_INFOHREC_TBL

```http
POST /api/info/insert
```

### API Get Data

#### 1. Get Work Order , Model Code , Model Name and lot size

```http
GET /vwork
```

#### 2. Get Record Data from AM_LDR_INFOHREC_TBL

```http
GET /info/record
```

Backup Code in informationform.vue

<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="flex flex-col gap-2">
          <label
            >Image:
            <span class="text-red-500 mr-2"
              >* (บังคับต้องถ่ายรูปหรือเลือกรูปภาพ)</span
            ></label
          >

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

Backup Code Actionform.vue

<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="flex flex-col gap-2">
          <label
            >Image:
            <span class="text-red-500 mr-2"
              >* (บังคับต้องถ่ายรูปหรือเลือกรูปภาพ)</span
            ></label
          >

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

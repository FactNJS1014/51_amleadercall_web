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

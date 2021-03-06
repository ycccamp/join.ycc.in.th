import React from 'react'

import {FormContainer, Paper, Row} from './Layout'
import Button from './Button'
import Input from './Input'
import Select from './Select'
import TextArea from './TextArea'
import DatePicker from './DatePicker'
import {UploadField} from './Upload'

import withWizard from '../core/form'
import {next} from '../core/step'

const toOptions = i => ({value: i, label: i})

const Options = options =>
  Object.entries(options).map(([value, label]) => ({value, label}))

export const religions = {
  atheist: 'ไม่นับถือศาสนา',
  buddhist: 'ศาสนาพุทธ',
  christianity: 'ศาสนาคริสต์',
  islam: 'ศาสนาอิสลาม',
  other: 'ศาสนาอื่นๆ'
}

export const grades = {
  m3: 'มัธยมศึกษาปีที่ 3',
  m4: 'มัธยมศึกษาปีที่ 4',
  m5: 'มัธยมศึกษาปีที่ 5',
  m6: 'มัธยมศึกษาปีที่ 6',
  p1: 'ปวช.',
  other: 'อื่นๆ'
}

export const genders = {
  male: 'ชาย',
  female: 'หญิง',
  other: 'เพศอื่นๆ',
  none: 'ไม่ระบุ'
}

export const shirtSizes = {
  XS: 'XS (รอบอก 31 นิ้ว ความยาว 25 นิ้ว)',
  S: 'S (รอบอก 36 นิ้ว ความยาว 28 นิ้ว)',
  M: 'M (รอบอก 38 นิ้ว ความยาว 28.5 นิ้ว)',
  L: 'L (รอบอก 42 นิ้ว ความยาว 30 นิ้ว)',
  XL: 'XL (รอบอก 44 นิ้ว ความยาว 30.5 นิ้ว)',
  XXL: 'XXL (รอบอก 48 นิ้ว ความยาว 32 นิ้ว)'
}

const religionOptions = Options(religions)
const gradeOptions = Options(grades)
const genderOptions = Options(genders)
const shirtSizeOptions = Options(shirtSizes)

// prettier-ignore
const bloodGroups = ['O+', 'O−', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map(toOptions)

const PersonalForm = ({next, handleSubmit}) => (
  <FormContainer onSubmit={handleSubmit}>
    <UploadField name="photo" />

    <Paper>
      <Row>
        <Input name="firstname" label="ชื่อ" />
        <Input name="lastname" label="นามสกุล" />
      </Row>

      <Row>
        <Input name="nickname" label="ชื่อเล่น" />
        <DatePicker name="birthdate" label="วันเกิด" float />
        <Select name="gender" label="เพศ" options={genderOptions} />
      </Row>
    </Paper>

    <Paper>
      <Row>
        <Select name="class" label="ระดับชั้น" options={gradeOptions} />
        <Input name="school" label="โรงเรียน" />
      </Row>

      <Row>
        <Select name="religion" label="ศาสนา" options={religionOptions} />
        <Input name="phone" label="เบอร์โทรศัพท์" />
      </Row>
      <Row>
        <Input name="email" label="อีเมล" type="email" />
        <Input name="socialMedia" label="Social Media" />
      </Row>
    </Paper>

    <Paper>
      <Row>
        <Select name="shirtSize" label="ไซส์เสื้อ" options={shirtSizeOptions} />
        <Select name="bloodGroup" label="กรุ๊ปเลือด" options={bloodGroups} />
      </Row>

      <Row>
        <Input name="address" label="ที่อยู่" />
      </Row>
    </Paper>

    <Paper>
      <Row>
        <Input name="disease" label="โรคประจำตัว" />
      </Row>

      <Row>
        <Input name="foodAllergy" label="อาหารที่แพ้" />
      </Row>

      <Row>
        <Input name="drugAllergy" label="ยาที่แพ้" />
      </Row>
    </Paper>

    <Paper>
      <Row>
        <TextArea
          name="activity"
          label="กิจกรรมหรือผลงานที่น้องๆ เคยทำหรือเข้าร่วม"
        />

        <TextArea name="expectation" label="คาดหวังอะไรจากค่ายนี้บ้าง" />
      </Row>
    </Paper>

    <Row>
      <Button disabled>ขั้นตอนก่อนหน้า</Button>

      <Button onClick={next} type="submit">
        ขั้นตอนถัดไป
      </Button>
    </Row>
  </FormContainer>
)

export default withWizard(PersonalForm)

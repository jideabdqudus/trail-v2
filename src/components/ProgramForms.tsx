import React from 'react'
import { Select } from 'antd';
import { useDispatch } from 'react-redux';


import { toastify } from '../helpers';
import {getFormReportforProgram} from "../actions/program.js"

interface Props{
  program: any
  id: string
}

export const ProgramForms: React.FC<Props> = ({program, id}) => {
  const { Option } = Select;
  const {form} = program
  const dispatch = useDispatch()
  function onChange(value: any) {
    dispatch(getFormReportforProgram(id, value))
  }
  function onBlur() {
    return null
  }
  function onFocus() {
    if(form.length <= 0){
      toastify.alertError("This program has no form attached to it")
    }
  }
  function onSearch(val: any) {
    console.log('search:', val);
    return null
  }
  return (
    <div>
      <label style={{display:"block"}}>Select Form</label>
      <Select
        showSearch
        style={{ width: 350 }}
        placeholder="Select"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {form?.length > 0 && form.map((f: any)=>(
          <Option value={f.path} key={f.name}>{f.name}</Option>
        ))}
      </Select>
    </div>
  )
}

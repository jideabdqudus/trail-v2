import React from 'react'
import { Button, Row, Select, Col } from 'antd';

import { toastify } from '../helpers';

interface Props{
  program: any
  onChange:(value:any)=>void
  printDocument:any
  reportValue: number | undefined
}

export const ProgramForms: React.FC<Props> = ({program,  onChange, printDocument, reportValue}) => {
  const { Option } = Select;
  const {form} = program
  function onBlur() {
    return null
  }
  function onFocus() {
    if(form.length <= 0){
      toastify.alertError("This program has no form attached to it")
    }
  }
  function onSearch(val: any) {
    return null
  }
  return (
    <div>
      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 21 }}>
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
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 2 }}>
          {reportValue && reportValue > 0 ? <Button className='download-pdf-btn' onClick={printDocument}>Download Pdf</Button> : null}
        </Col>
      </Row>
    </div>
  )
}

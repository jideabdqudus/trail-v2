import React from 'react'
import {Divider, Checkbox, Row, Col} from "antd"

interface Props {
  sdgsAndIndicators: any
  onClickSdg: (e: any)=> void
  indicatorsUnderSdgs: [] | undefined
}
export const SdgGroup:React.FC<Props> = ({sdgsAndIndicators, onClickSdg, indicatorsUnderSdgs}) => { 
  function onChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
  }
  return (
    <div className="sdg-group">
       <Divider orientation="right">Select SDGs for the programme</Divider>
            <ul>
              {sdgsAndIndicators && sdgsAndIndicators.map((sdgs: any)=>(
                <li key={sdgs.id}>
                  <input type="checkbox" value={sdgs.id} name={sdgs.name} id={sdgs.id} onClick={onClickSdg} />
                  <label htmlFor={sdgs.id}><img src={sdgs.image} alt="SDGs" /></label>
                </li>             
              ))}
            </ul>
            <Divider orientation="right">Select SDG Indicators</Divider>
            <Row>
              {indicatorsUnderSdgs && indicatorsUnderSdgs?.length > 0 ? indicatorsUnderSdgs.map((indicator: any)=>{
                return (
                  indicator.map((indi: any)=>{
                   
                    return(
                      <Checkbox.Group className="indicator-style" onChange={onChange} key={indi.id}>
                          <Col span={12}>
                            <Checkbox value={indi.id}>{indi.description}</Checkbox>
                          </Col>
                       </Checkbox.Group> 
                       )}))
                  }): null}
              </Row>
    </div>
  )
}



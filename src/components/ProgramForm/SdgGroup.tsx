import React from 'react'
import {Divider, Checkbox, Spin} from "antd"

interface Props {
  sdgsAndIndicators: any
  onClickSdg: (e: any)=> void
  indicatorsUnderSdgs: [] | undefined
  onSelectIndicator: (checkedValues: any)=> void
  loading?: boolean, 
}
export const SdgGroup:React.FC<Props> = ({sdgsAndIndicators, onClickSdg, indicatorsUnderSdgs, onSelectIndicator, loading}) => { 
  return (
    <div className="sdg-group">
     
      {sdgsAndIndicators && <Divider orientation="right">Select SDGs for the programme</Divider>}
           {loading?  <div className="sdg-loader"> <Spin tip="Loading Development Goals..." /> </div> :          
            <ul>
              {sdgsAndIndicators && sdgsAndIndicators.map((sdgs: any)=>(
                <li key={sdgs.id}>
                  <input type="checkbox" value={sdgs.id} name={sdgs.name} id={sdgs.id} onClick={onClickSdg} />
                  <label htmlFor={sdgs.id}><img src={sdgs.image} alt="SDGs" /></label>
                </li>             
              ))}
            </ul> }
            {indicatorsUnderSdgs && indicatorsUnderSdgs?.length > 0 ?  <Divider orientation="right">Select SDG Indicators</Divider> : null }
            

              {indicatorsUnderSdgs && indicatorsUnderSdgs?.length > 0 ? indicatorsUnderSdgs.map((indicator: any)=>{
                  return (
                  indicator.map((indi: any, i: number)=>{
                    return(
                        <div className="indicator-style">
                        {i === 0 && <h1>{indi.sdg}</h1>}
                        <Checkbox.Group className="indicator-style__checks" onChange={onSelectIndicator} key={indi.id}> 
                              <Checkbox value={indi.id}>{indi.description}</Checkbox>
                        </Checkbox.Group>
                        </div>
                       )}))
                  }): null} 
               </div>
  )
}



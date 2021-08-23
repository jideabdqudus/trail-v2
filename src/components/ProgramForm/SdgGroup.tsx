import React from 'react'
import {Divider, Checkbox, Spin} from "antd"

interface Props {
  sdgsAndIndicators: any
  onClickSdg: (e: any)=> void
  indicatorsUnderSdgs: [] | undefined
  onSelectIndicator: (checkedValues: any)=> void
  loading?: boolean,
  sdgId: any 
  selectedSdgs: any,
  getIndicators: ()=> void
}
export const SdgGroup:React.FC<Props> = ({sdgsAndIndicators, onClickSdg, onSelectIndicator, loading, sdgId, selectedSdgs, getIndicators}) => { 
  return (
    <div className="sdg-group">
     <Divider orientation="right">Select SDGs for the programme</Divider>
      { loading?  
        <div className="sdg-loader"> 
          <Spin tip="Loading Development Goals..." /> 
        </div> 
        : 
        <ul>
          {sdgsAndIndicators && sdgsAndIndicators.map((sdgs: any)=>(
            <li key={sdgs.id}>
              <input type="checkbox" value={sdgs.id} name={sdgs.name} id={sdgs.id} onClick={onClickSdg} />
              <label htmlFor={sdgs.id}><img src={sdgs.image} alt="SDGs" /></label>
            </li>             
          ))}
        </ul>
      }
      
      {getIndicators()}     
      
      { selectedSdgs && selectedSdgs?.length > 0 ?  
        <Divider orientation="right">Select SDG Indicators</Divider> : null }

      { selectedSdgs && selectedSdgs?.length > 0 ? selectedSdgs.map((sdg: any)=>{
        return (
          sdg.indicators.map((indicator: any, i: number)=>{
           return (
            <div className="indicator-style" key={indicator.id}>
              {i === 0 && <h1>{sdg.name}</h1>}
                <Checkbox.Group className="indicator-style__checks" onChange={onSelectIndicator}> 
                      <Checkbox value={indicator.id}>{indicator.description}</Checkbox>
                </Checkbox.Group>
            </div>
            )}))
          })
          : 
          null
      }              
      </div>

  )
}



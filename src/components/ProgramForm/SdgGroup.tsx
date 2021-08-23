import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Divider} from "antd"


import {getIndicatorsUnderSdgs} from "../../actions/program.js"
import {  IPrograms  } from '../../type.d'

interface Props {
  sdgsAndIndicators: any
}
export const SdgGroup:React.FC<Props> = ({sdgsAndIndicators}) => {
  const dispatch = useDispatch()
  const {indicatorsUnderSdgs} = useSelector((state: IPrograms) => state.program)
  const onClickSdg = (e: any)=>{
    console.log(e.target.value)
    dispatch(getIndicatorsUnderSdgs(e.target.value))
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
{/* 
              <h1>Select Sdg indicators</h1>
              {indicatorsUnderSdgs && indicatorsUnderSdgs?.length > 0 ? indicatorsUnderSdgs.map((indicator: any)=>{
                return (
                  indicator.map((indi: any)=>{
                    return(
                    <div key={indi.id}>
                   <h1 style={{color:"red"}}>{indi.description}</h1>
                  </div>
                  )}
                )
                )
              }): null} */}
    </div>
  )
}



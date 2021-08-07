import React from 'react'
import {Checkbox, Form, Col, Row} from 'antd'

interface Props {
  sdgsAndIndicators: any
}
export const SdgGroup:React.FC<Props> = ({sdgsAndIndicators}) => {
  return (
    <div className="sdg-group">
            <ul>
              {sdgsAndIndicators && sdgsAndIndicators.splice(sdgsAndIndicators.length-5, 5).map((sdgs: any)=>(
              <li key={sdgs.id}>
                <input type="checkbox" value={sdgs.id} name={sdgs.name} id={sdgs.id} 
                // onChange={(e)=> {e.target: e.target.value}} 
                onClick={(e)=>console.log(e.target)} />
                <label htmlFor={sdgs.id}><img src={sdgs.image} alt="asas" /></label>
              </li>             
              )) }
              </ul>
    </div>
  )
}

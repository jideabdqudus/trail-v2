import React from 'react'
import {Checkbox, Form, Col, Row} from 'antd'

interface Props {
  sdg: any
}
export const SdgGroup:React.FC<Props> = ({sdg}) => {
  console.log(sdg)
  return (
    <div className="sdg-group">
            <ul>
              {sdg && sdg.map((sdgs: any)=>(
              <li>
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

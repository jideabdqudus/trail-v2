import React, {useState, useEffect} from 'react'
import {Divider, Checkbox} from "antd"

interface Props {
  sdgsAndIndicators: any
  onClickSdg: (e: any)=> void
  indicatorsUnderSdgs: [] | undefined
  onSelectIndicator: (checkedValues: any)=> void
  loading?: boolean, 
}
export const SdgGroup:React.FC<Props> = ({sdgsAndIndicators, onClickSdg, indicatorsUnderSdgs, onSelectIndicator, loading}) => { 
  const [available, setAvailable] = useState<any>([])
  const [value, setValue] = useState<any>("")
  const [random, setRandom] = useState<any>([])
  let arr: any = []
  const onClickHere = (e: any)=>{
    // console.log(random)
    setAvailable([...available, e.target.value])
    // dispatch(getIndicatorsUnderSdgs(e.target.value))
  }

  const setIndicators = ()=>{
    sdgsAndIndicators.filter((sdgs : any)=>{
      available.map((ava: any)=>{
        if(sdgs.id === ava){
            arr.push(sdgs)
        }
        return null
      })
      return null
    })
  }

  return (
    <div className="sdg-group">
      {sdgsAndIndicators && <Divider orientation="right">Select SDGs for the programme</Divider>}
           {/* {loading?  <div className="sdg-loader"> <Spin tip="Loading Development Goals..." /> </div> :          
            <ul>
              {sdgsAndIndicators && sdgsAndIndicators.map((sdgs: any)=>(
                <li key={sdgs.id}>
                  <input type="checkbox" value={sdgs.id} name={sdgs.name} id={sdgs.id} onClick={onClickSdg} />
                  <label htmlFor={sdgs.id}><img src={sdgs.image} alt="SDGs" /></label>
                </li>             
              ))}
            </ul> } */}
            <ul>
              {sdgsAndIndicators && sdgsAndIndicators.map((sdgs: any)=>(
                <li key={sdgs.id}>
                  <input type="checkbox" value={sdgs.id} name={sdgs.name} id={sdgs.id} onClick={onClickHere} />
                  <label htmlFor={sdgs.id}><img src={sdgs.image} alt="SDGs" /></label>
                </li>             
              ))}
            </ul>
            {setIndicators()}
            
            {arr && arr?.length > 0 ?  <Divider orientation="right">Select SDG Indicators</Divider> : null }
              { arr && arr?.length > 0 ? arr.map((ar: any)=>{
                return (
                  ar.indicators.map((indi: any, i: number)=>{
                  return (
                    <div className="indicator-style">
                        {i === 0 && <h1>{indi.sdg}</h1>}
                    <Checkbox.Group className="indicator-style__checks" onChange={onSelectIndicator} key={indi.id}> 
                          <Checkbox value={indi.id}>{indi.description}</Checkbox>
                    </Checkbox.Group>
                    </div>
                  )})
                )
               }): null}              
      </div>

  )
}



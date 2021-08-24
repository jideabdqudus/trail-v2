import React,{useState} from 'react'
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
  const [available, setAvailable] = useState<any>([])
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
     <Divider orientation="right">Select SDGs for the programme</Divider>
      { loading?
        <div className="sdg-loader">
          <Spin tip="Loading Development Goals..." />
        </div>
        :
        <ul>
          {sdgsAndIndicators && sdgsAndIndicators.map((sdgs: any)=>(
            <li key={sdgs.id}>
              <input type="checkbox" value={sdgs.id} name={sdgs.name} id={sdgs.id} onClick={onClickHere} />
              <label htmlFor={sdgs.id}><img src={sdgs.image} alt="SDGs" /></label>
            </li>
          ))}
        </ul>
      }
 
      {setIndicators()} 

      { arr && arr?.length > 0 ?
        <Divider orientation="right">Select SDG Indicators</Divider> : null }

      { arr && arr?.length > 0 ? arr.map((sdg: any)=>{
        return (
          sdg.indicators.map((indicator: any, i: number)=>{
            return (
            <div className="indicator-style">
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
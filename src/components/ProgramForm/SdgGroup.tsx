import React,{ useState} from 'react'
import {Divider, Checkbox, Spin,} from "antd"

interface Props {
  sdgsAndIndicators: any
  onClickSdg: (e: any)=> void
  indicatorsUnderSdgs: [] | undefined
  loading?: boolean,
  sdgId: any
  selectedSdgs: any,
  formData: any, 
  getIndicators: ()=> void
  setFormData:any
}
export const SdgGroup:React.FC<Props> = ({
  sdgsAndIndicators, 
  loading, 
  setFormData, 
  formData}) => {
    
  const [available, setAvailable] = useState<any>([])
  const [indicatorValue, setIndicatorValue] = useState<any>([])
  let arr: any = []
  const onClickHere = (e: any)=>{
    if (available.includes(e.target.value)){
      let valueIndex =  available.indexOf(e.target.value)
      available.splice(valueIndex, 1)
      setAvailable([...available])
      indicatorValue.splice(valueIndex, 1)
      setIndicatorValue([...indicatorValue])
    }else{
      setAvailable([...available, e.target.value])
      setIndicatorValue([...indicatorValue, {id: e.target.value, indicators: []}])
    }
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
  const onSelectIndicator = (e: any, sdgId: any, indicatorDesc: any, indicatorId: any, indicatorIndex: any, checkedValues?: any, ) => {
    // eslint-disable-next-line 
    indicatorValue.map((mad: any)=>{
      if (mad.id === sdgId){
        if (mad.indicators.includes(indicatorId)){
            let indicatorIndexinArray = mad.indicators.indexOf(indicatorId)
            mad.indicators.splice(indicatorIndexinArray, 1)
        }else{
          mad.indicators.push(indicatorId)
        }
      }
    })
    setFormData({...formData, sdgs: [...indicatorValue]})
  }
  setIndicators()
  console.log(available, 'available')
  console.log(indicatorValue, 'indicator value')
  console.log(arr, 'array returned')
  return (
    <div className="sdg-group">
     <Divider orientation="right">Select SDGs for the program</Divider>
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
 
      {/* {setIndicators()}  */}

      { arr && arr?.length > 0 ?
        <Divider orientation="right">Select SDG Indicators</Divider> : null }

      { arr && arr?.length > 0 ? arr.reverse().map((sdg: any)=>{
        return (
          sdg.indicators.map((indicator: any, i: number)=>{
            return (
            <div className="indicator-style">
              {i === 0 && <h1>{sdg.name}</h1>}
                <Checkbox.Group className="indicator-style__checks" 
                onChange={(e)=>onSelectIndicator(e, sdg.id, indicator.description, indicator.id, i)}>
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
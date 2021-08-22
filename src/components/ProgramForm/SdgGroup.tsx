import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'


import {getIndicatorsUnderSdgs} from "../../actions/program.js"
import {  IPrograms  } from '../../type.d'

interface Props {
  sdgsAndIndicators: any
}
export const SdgGroup:React.FC<Props> = ({sdgsAndIndicators}) => {
  // const [copy, setCopy] = useState<any>([])
  // const [setValue] = useState<any>("")
  const dispatch = useDispatch()
  const {indicatorsUnderSdgs} = useSelector((state: IPrograms) => state.program)
  // const copy = [...sdgsAndIndicators]
  // console.log(copy, "cop")
  // let arr: any = []
  // copy.filter(item => item.id === arr[0] || item.id === arr[1])
  const onClickSdg = (e: any)=>{
    console.log(e.target.value)
    // setValue(e.target.value)
    dispatch(getIndicatorsUnderSdgs(e.target.value))
  }
  useEffect(() => {
    // getIndicatorsUnderSdgs(value)
    console.log(indicatorsUnderSdgs)
  },[indicatorsUnderSdgs])
  return (
    <div className="sdg-group">
            <ul>
              {sdgsAndIndicators && sdgsAndIndicators.map((sdgs: any)=>(
              <li key={sdgs.id}>
                <input type="checkbox" value={sdgs.id} name={sdgs.name} id={sdgs.id} 
                onClick={onClickSdg} />
                <label htmlFor={sdgs.id}><img src={sdgs.image} alt="asas" /></label>
              </li>             
              )) }
              </ul>

              <h1>Select Sdg indicators</h1>
              {indicatorsUnderSdgs && indicatorsUnderSdgs?.length > 0 ? indicatorsUnderSdgs.forEach((indicator: any)=>{
                return (
                  indicator.map((indi: any)=>{
                    return(
                    <div key={indi.id}>
                   <h1 style={{color:"red"}}>{indi.description}</h1>
                  </div>
                  )}
                )
                )
              }): null}
    </div>
  )
}



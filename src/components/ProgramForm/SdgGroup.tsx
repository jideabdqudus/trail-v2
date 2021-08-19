import React from 'react'

interface Props {
  sdgsAndIndicators: any
}
export const SdgGroup:React.FC<Props> = ({sdgsAndIndicators}) => {
  const copy = [...sdgsAndIndicators]
  console.log(copy, "cop")
  let arr: any = []
  copy.filter(item => item.id === arr[0] || item.id === arr[1])
  const onClickSdg = (e: any)=>{
    arr.push(e.target.value)
    console.log(arr, "arra")
    console.log(copy)
  }
  return (
    <div className="sdg-group">
            <ul>
              {sdgsAndIndicators && sdgsAndIndicators.splice(sdgsAndIndicators.length-5, 5).map((sdgs: any)=>(
              <li key={sdgs.id}>
                <input type="checkbox" value={sdgs.id} name={sdgs.name} id={sdgs.id} 
                onClick={onClickSdg} />
                <label htmlFor={sdgs.id}><img src={sdgs.image} alt="asas" /></label>
              </li>             
              )) }
              </ul>

              <h1>Select Sdg indicators</h1>
              {copy && copy.filter(item => item.id === arr[0] || item.id === arr[1]).map((item: any)=>(
                <div key={item.id}>
                  {item.name}
                  {item.indicators.map((indicator: any)=>(
                    <ul>
                      <li>{indicator.description}</li>
                    </ul>
                  ))}
                </div>
              ))}
    </div>
  )
}



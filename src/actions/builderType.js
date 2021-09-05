export const builderTypeNumber=(inputTypeNumber)=>{
    return {
      type: "COMPONENT_TYPES_NUMBER",
      payload: inputTypeNumber
    }
}

export const builderTypeRadio=(inputTypeRadio)=>{
    return {
      type: "COMPONENT_TYPES_RADIO",
      payload: inputTypeRadio
    }
}
export const builderTypeText=(inputTypeText)=>{
    return {
      type: "COMPONENT_TYPES_TEXT",
      payload: inputTypeText
    }
}

export const deleteAComponent=(id)=>{
    return{
        type: "DELET_A_COMPONENT",
        payload:id
    }
}

export const onChangeComponent=(value,id)=>{
  return{
    type: "ONCHANGE",
    payload: value
  }

}

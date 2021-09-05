const initialState={
    components:[],
    
 }


 const builderType= (state=initialState, action)=>{
    switch(action.type){
        case "COMPONENT_TYPES_NUMBER": return{
            components: [...state.components,
                {
               question: '',
               targetValue: null,
               targetType: 'Percentage',
               inputType: action.payload,
               input: true,
               placeholder: '',
               linkedIndicator: null,
               indicatorquestion: '',
               value: 'number',
                }
           ]
           
        }
        case "COMPONENT_TYPES_RADIO": return{

            components: [...state.components,
                 {
                question: '',
                targetValue: null,
                targetType: 'Percentage',
                inputType: action.payload,
                input: true,
                placeholder: '',
                linkedIndicator: null,
                indicatorquestion: '',
                value: 'number',
                 }
            ]
            
        }
        case "COMPONENT_TYPES_TEXT": return{
            components: [...state.components,
                {
               question: '',
               targetValue: null,
               targetType: 'Percentage',
               inputType: action.payload,
               input: true,
               placeholder: '',
               linkedIndicator: null,
               indicatorquestion: '',
               value: 'number',
                }
           ]
        }
        case "DELET_A_COMPONENT": return{
            
                ...state.components,
               components: state.components.filter((_,index)=> {
                 return   index !== action.payload
                })

            
        }

        case "ONCHANGE": return{
            ...state.component,
            components:[...state.components,action.payload] //not working as it should
        }
        default: 
        return state
    }
}


export default builderType
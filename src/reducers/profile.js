import {GET_PROFILE,PROFILE_LOADING,PROFILE_UPDATE, PROFILE_ERROR} from "../constants/types"

const initialState={
    profile:{},
    loading: false,
    error: ''
}

const profile=(state=initialState, action)=>{
    switch (action.type){
        case PROFILE_LOADING: return{
            ...state,
            loading: true
        }
        case PROFILE_ERROR: return{
            ...state,
            loading: false,
            error: action.payload
        }
        case GET_PROFILE: return{
            ...state,
            loading: false,
            profile: action.payload.data
        }
        case PROFILE_UPDATE:return{
            ...state,
            profile: action.payload
        }
        default: 
            return state
            
    }
}

export default profile
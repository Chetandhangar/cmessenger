import { ReactReduxContext } from "react-redux";
import { userConstant } from "../actions/constant"

const initialState = {
    user: [],
    chat : []
   
}

export default (state = initialState, action) => {
    switch(action.type) {
        case  `${userConstant.GET_REALTIME_USER}_REQUEST`:
         break;
        case `${userConstant.GET_REALTIME_USER}_SUCCESS`:
        state = {
            ...state,
            user : action.payload.user
        }
        break;
        case userConstant.GET_REALTIME_MESSAGES:
        state = {
            ...state,
            chat : action.payload.chat
        }
        break;
        case `${userConstant.GET_REALTIME_MESSAGES}_FAILURE`:
           state ={
               ...state,
               chat : []
           }
           break;
        
    }

    return state;
} 
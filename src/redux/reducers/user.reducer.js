import { ReactReduxContext } from "react-redux";
import { userConstant } from "../actions/constant"

const initialState = {
    user: []
   
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
    }

    return state;
}
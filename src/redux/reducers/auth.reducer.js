import {authConstant} from '../actions/constant'
const initialState ={
    firstname : '',
    lastname : '',
    email:'',
    authenticating: false,
    authenticated: false,
    error: null
}

export default (state = initialState, action) =>{

    console.log(action);

   switch(action.type)
   {
    case `${authConstant.USER_LOGIN}_REQUEST`:
        state ={
            ...state,
            authenticating: true
        }

        break;
    case `${authConstant.USER_LOGIN}_SUCCESS`:
        state={
            ...state,
            ...action.payload.user,
            authenticated:true,
            authenticating:false
        }
        break;
    case `${authConstant.USER_LOGIN}_FAILURE`:
        state={
            ...state,
            authenticating:false,
            authenticated:false,
            //error: action.payload.error
        }
        break;

   }
    
   return state;
}
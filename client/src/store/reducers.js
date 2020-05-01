import * as actionTypes from './actions';
import { login, register } from "../Utils/api-auth";

const intialState = {
    first_name:"",
    last_name:"",
    bio:"",
    password:"",
    collections:[{}],
    interests:[],
    email:"",
    location:"",
    contacts:[{
        link:"",
        platform:""
    },{
        link:"",
        platform:""
    },{
        link:"",
        platform:""
    },
    {
        link:"",
        platform:""
    },
    {
        link:"",
        platform:""
    }],
    open: false,
    error: "",
    show: false
};

const reducers = (state=intialState,action) => {
    const userData = {user:{...state}};
    switch(action.type){
        case(actionTypes.LOGIN):
            login(userData).then()
        break;
        case(actionTypes.MODIFY):
            return {
                ...state,
                [action.name]:action.value
            };
        case(actionTypes.REGISTER):
            if (state.email && state.password){
            register(userData).then((data) => {
                  if (data.error) {
                      return {
                          ...state,
                          error: data.error,
                          show:true  
                      }
                  } else {
                    return {
                        ...state,
                        ...data.user,
                        open: true,
                        show:true
                    }
                  }
                })
            }
            else if (!state.password) {
                return {
                    ...state,
                    error: "please provide password",
                    show:true
                }
            }
            else if (!state.email) {
                return {
                    ...state,
                    error: "please provide email",
                    show:true
                }
            }
            break;            
        default:
            return {
                ...state
            }
    }
};

export default reducers;
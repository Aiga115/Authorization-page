import Login from "../login/login";
import {POST_USER} from "../types/types";




let initialState = {
    auto_info: JSON.parse(localStorage.getItem("user-info")) || []
}
export const reducer =(state=initialState,action)=>{
    async function login(){
        let result = await fetch('https://warm-escarpment-21852.herokuapp.com/account/api/token/',{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
        ,
        body:JSON.stringify(action.payload)
  })
  
  result = await result.json();
  localStorage.setItem("user-info",JSON.stringify(result));}
  switch(action.type)
  {
    case POST_USER:
      return { ...state, auto_info: [...state.auto_info, action.payload] };
    default:
      return state;

  }
}
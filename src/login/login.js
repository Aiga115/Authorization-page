import React from "react"
import "./login.css"
import { useForm} from "react-hook-form";

import {useState,useEffect} from 'react';
import {Link,useHistory} from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postUser } from "../actions/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export default function Login(){
    const users = useSelector((state) => state.auto_info);
    const dispatch = useDispatch();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const history = useHistory();
   useEffect(()=>{
        if(localStorage.getItem("user-info")){
            history.push("/main-page");
        }
    },[])

    const { register,errors ,handleSubmit} = useForm();
   

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

      //login
      async function login(){
        console.warn(email, password);
        let item = {email,password};
        let result = await fetch('https://warm-escarpment-21852.herokuapp.com/account/api/token/',{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
        
        ,
        body:JSON.stringify(item)
  })
  
  result = await result.json();
  localStorage.setItem("user-info",JSON.stringify(result));}
    /* function login(){
          console.warn(email, password);
          let item ={email,password};
          dispatch(postUser(item))
      }*/
      function onSubmit(){
          console.log("Submitted")
      }

    return(
        <>
        <div className="container">
           <div className="login_form">
               <span>LOGO</span>
               <h2>Авторизация</h2>
               <form className="inputs" onSubmit={handleSubmit(onSubmit)}>
               <input type="email" 
                      name="email" 
                      placeholder="Почта"
                      onChange={(e)=>setEmail(e.target.value)}
                      ref={register({
                        required: "Enter your e-mail",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Enter a valid e-mail address",
                        },
                       })}
                      />
               
               <div className ="passField">
               <input type={passwordShown ? "text" : "password"}
                      name="password" 
                      placeholder="Пароль"
                      onChange={(e)=>setPassword(e.target.value)}
                      ref={register({ required: "This is required." })}
                      />
                      <i onClick={togglePasswordVisiblity} >{eye}</i>
               </div>
               <Link to="/forgotten"><p id="p">Забыли пароль?</p></Link>
               </form>
               <button type="submit" className="login_form__button" onClick={login}>Войти</button>
           </div>
        </div>
        </>
    )
} 
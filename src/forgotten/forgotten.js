import React from "react"
import "./forgotten.css"
import {Link} from "react-router-dom"

export default function Forgotten(){
    return (
        <>
        <div className="forgotten-container">
            <div className="wrapper">
            <span>LOGO</span>
            <h2 id="h2_forgotten">Забыли пароль?</h2>
            <div className="text">
             <p id="#p-forget">Обратитесь к администратору для замены вашего пароля.</p>
             <p id="#p-forget">Если вы являетесь администратором, то следует обратиться к супер администратору</p>
            </div>
            <Link to="/">
            <button>Назад</button>
            </Link>
            </div>
             </div>
        </>
    )
}
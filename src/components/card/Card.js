import React from 'react'
import s from "./card.module.scss"
export default function Card({username,useremail,userwebsite,userimg,gender,javaScript,html,css}) {
    return (
        <div className={s.card} >
            <div className={s.image}>
                <img src={userimg||"/1.webp"} alt="" />
            </div>
            <div className={s.data}>
                <h4>{username}</h4>
                <h4>{gender}</h4>
                <h4>{useremail}</h4>
                <a href="/">{userwebsite}</a>
                <h4>{javaScript && "JavaScript, "}  {html && "Html, "} { css && "Css"} </h4>
            </div>
        </div>
    )
}

import React, {  } from 'react'
import Form from '../form/Form'
import Navbar from '../navbar/Navbar'

import s from "./home.module.scss"
export default function Home() {
    return (
        <div className={s.container}>
            <Navbar />
            <Form/>
        </div>
    )
} 
 
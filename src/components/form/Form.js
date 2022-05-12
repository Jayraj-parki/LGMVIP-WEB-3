import React, { useRef, useState } from 'react'
import Card from '../card/Card'
import s from "./form.module.scss"
export default function Form() {
    const [users, setUser] = useState([])
    const name = useRef()
    const email = useRef()
    const website = useRef()
    const img = useRef()
    const [gender, setGender] = useState("Male")
    const [javaScript, setJavaScript] = useState(false)
    const [html, setHtml] = useState(false)
    const [css, setCss] = useState(false)
    // const name=useRef()
    const handleForm = (e) => {
        e.preventDefault()
        const username = name.current.value
        const useremail = email.current.value
        const userwebsite = website.current.value
        const userimg = img.current.value
        name.current.value = ""
        email.current.value = ""
        website.current.value = ""
        img.current.value = ""
        setGender("Male")
        setJavaScript(false)
        setHtml(false)
        setCss(false)
        const obj = {
            username,useremail,userwebsite,userimg,gender,javaScript,html,css
        }
        setUser([...users, obj])
    }
    const clearForm=()=>{
        name.current.value = ""
        email.current.value = ""
        website.current.value = ""
        img.current.value = ""
        setGender("Male")
        setJavaScript(false)
        setHtml(false)
        setCss(false)
    }
    return (
        <div className={s.container}>
            <div className={s.wrapper}>

                <div className={s.formFilling}>
                    <form className={s.form}>
                        <div className={s.field}>
                            <span>Name</span>
                            <input required ref={name} type="text" placeholder="John Doe" />
                        </div>
                        <div className={s.field}>
                            <span>Email</span>
                            <input required ref={email} type="email" placeholder="abc@xyz.com" />
                        </div>
                        <div className={s.field}>
                            <span>Website</span>
                            <input required ref={website} type="url" placeholder="https://www.url.com" />
                        </div>
                        <div className={s.field}>
                            <span>Image Link</span>
                            <input required ref={img} type="url" placeholder="https://www.image.com/1.png" />
                        </div>
                        <div className={s.field}>
                            <span>Gender</span>
                            <div className={s.content}>
                                <div className="s.">
                                    <input required type="radio" checked={gender === "Male"} name="gender" value="Male" onClick={() => setGender('Male')} />
                                    <span>Male</span>
                                </div>
                                <div className="s.">
                                    <input required type="radio" checked={gender === "Female"} name="gender" value="Female" onClick={() => setGender('Female')} />
                                    <span>Female</span>
                                </div>
                            </div>
                        </div>
                        <div className={s.field}>
                            <span>Skills</span>
                            <div className={s.content}>
                                <div>
                                    <input type="checkbox" checked={javaScript} onClick={() => setJavaScript(!javaScript)} name="JavaScript" value="JavaScript" />
                                    <span>JavaScript</span>
                                </div>
                                <div>
                                    <input type="checkbox" checked={html} onClick={() => setHtml(!html)} name="Html" value="Html" />
                                    <span>Html</span>
                                </div>
                                <div>
                                    <input type="checkbox" checked={css} onClick={() => setCss(!css)} name="Css" value="Css" />
                                    <span>Css</span>
                                </div>
                            </div>
                        </div>
                        <div className={s.fieldBtn}>
                            <button className={s.submit} type="submit" onClick={(e) => handleForm(e)}>Enroll Student</button>
                            <button className={s.cancel}  type="button" onClick={() => clearForm()}>Clear</button>
                        </div>
                    </form>
                </div>
                <div className={s.list}>
                    <h2>Enrolled Students</h2>
                    <div className={s.wrapper_two}>
                        <div className={s.listOfStudent}>
                            {
                                users?.map((val) => <Card
                                    username={val.username}
                                    useremail={val.useremail}
                                    userwebsite={val.userwebsite}
                                    userimg={val.userimg}
                                    gender={val.gender}
                                    javaScript={val.javaScript}
                                    html={val.html}
                                    css={val.css}

                                    />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

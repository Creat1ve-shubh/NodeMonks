'use client'
import { Abril_Fatface } from "next/font/google"
import { useState } from 'react'
import Link from "next/link"
import { FiMail, FiPhone } from 'react-icons/fi'
import axios from "axios"

const abrilFatface = Abril_Fatface({
    weight: "400",
    subsets: ["latin"]
})
export default function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

        
    return (
        <div id="contact" className="h-screen w-screen flex ">
            <div className="h-full w-1/2 overflow-hidden blur-3xl">
                <iframe src="https://my.spline.design/orangeblob-jOM0Derv1R7lQ6jCZZfrHVUJ/" height={"120%"} width={"120%"} />
            </div>
            <div className="h-full w-1/2 flex flex-col justify-center items-center">
                <h1 className={`${abrilFatface.className} text-5xl underline decoration-wavy decoration-amber-500`} > Get In Touch</h1>
                <div className=" flex justify-evenly items-center gap-4 text-lg mt-7 ">
                    <Link href="mailto:shivanshsri.04@gmail.com" className=" p-2 rounded-lg bg-zinc-800 flex justify-center items-center gap-2"><FiMail color="orange" /> Mail Us</Link>
                    <Link href="tel:+918107991540" className="p-2 rounded-lg bg-zinc-800 flex gap-2 items-center justify-center"><FiPhone color="orange" /> Get On a Call</Link>
                </div>
                <div className="border-t-2 border-amber-500/60 h-1 w-1/3 m-4"></div>
                <form className="flex flex-col w-1/2 gap-2">
                    <h1 className="text-xl underline decoration-amber-500 mb-3">Leave a message</h1>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="p-2 rounded-lg border-2 border-zinc-800" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="p-2 rounded-lg border-2 border-zinc-800" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="message">Message</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="message" className="p-2 rounded-lg border-2 border-zinc-800" ></textarea>
                    </div>
                    <button type="submit" className="w-full h-10 bg-gradient-to-br from-yellow-500 to-orange-500 cursor-pointer text-lg rounded-xl " >Send</button>
                </form>
            </div>
        </div>
    )
}
import React, { useState } from 'react'
import {auth, db} from '../firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
const style = {
    form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[20%] bg-green-500`
}

function SendMessage({scroll}) {

    const [inputValue, setInputValue] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault();
        if(inputValue === ""){
            alert("Please enter a valid message")
            return;
        }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: inputValue,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInputValue("")
        scroll.current.scrollIntoView({behavior: "smooth"})
    }

  return (
    <form onSubmit={sendMessage} className={style.form}>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} className={style.input} type="text" placeholder='Message'/>
        <button className={style.button} type="submit">Send</button>
    </form>
  )
}

export default SendMessage
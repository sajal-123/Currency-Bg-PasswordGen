// import React from 'react'
import { useState, useCallback,useEffect,useRef } from "react"
// useref is used for taking the reference of anything

function Password() {
    const [isNumber, SetisNumber] = useState(false);
    const [isCharacter, SetisCharacter] = useState(false);
    const [length, setLength] = useState(8);
    const [password, setPassword] = useState("")

    // UseRef
    const passwordRef=useRef();


    // const passwordGenerator=useCallback(fn,[])
    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz";
        if (isNumber) str += "0123456789";
        if (isCharacter) str += "!@#$%^&*-=_+";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);

    }, [length, isCharacter, isNumber,setPassword])
    //    1st priority with the optimization
    const copyPasswordToClipboard=useCallback(()=>{
        passwordRef.current?.select();
        // upto this range it will we copy
        passwordRef.current?.setSelectionRange(0,5);
        // here we can use window directly because it is react while in react it can't because we were in server site 
        window.navigator.clipboard.writeText(password)
    },[password])
    //  2nd Prefered approach 
    // const copyPasswordToClipboard=useCallback(()=>{
    //     // here we can use window directly because it is react while in react it can't because we were in server site 
    //     window.navigator.clipboard.writeText(password)
    // },[password])
    useEffect(()=>{
      passwordGenerator();
   },[length,isNumber,isCharacter])
    return (
        < >
            <div className="w-full h-screen duration-200" style={{ backgroundColor: "black" }}>
                <br />
                <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
                    <h1 className="text-4xl text-center text-white my-3">Passwrod generator</h1>
                    <div className="flex shadow rounded-lg overflow-hidden mb-4 p-1 text-center justify-center">
                        <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={passwordRef}/>
                        <button className="outline-none bg-blue-700 text-white px-3 h-10 shrink-0" onClick={copyPasswordToClipboard}>Copy</button>
                    </div>
                    <div className="flex text-sm gap-x-2">
                        <div className="flex items-center gap-x-1">
                            <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e) => { setLength(e.target.value) }} />
                            <label>Length :{length}</label>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <input type="checkbox" id="numberInput"  defaultChecked={isNumber} className="cursor-pointer" onChange={() => { SetisNumber((prev)=>!prev) }} />
                            <label htmlFor="numberInput">Number</label>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <input type="checkbox" id="characterInput" defaultChecked={isCharacter} className="cursor-pointer" onChange={() => { SetisCharacter((prev)=>!prev) }} />
                            <label htmlFor="numberInput">Character</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Password

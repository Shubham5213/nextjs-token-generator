"use client";
import React, { useEffect, useState } from 'react'

export default function LoginPage(){

    const [code, setCode]=useState(""); 
    const [hash, setHash]=useState(""); 
    const [show, setShow]=useState(false); 
    const [msg, setMsg]=useState(null); 
    const [valid, setValid]=useState(null); 
    const url="http://localhost:5000";
    
    const handleSubmit=async()=>{
        const body= {
            hash
        }
        let res= await fetch(`${url}/api/codes/use`,
                {   cache: 'no-store', 
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                });
        const data = await res.json();
        setMsg(data.msg);
        setValid(data.valid);
    }
    const handleRefresh=async()=>{
        setMsg(null);
        setHash("");
        await fetchCode();
    }

    const fetchCode=async ()=>{
        let res = await fetch(`${url}/api/codes`, { cache: 'no-store', method:'GET', headers: {
        'Content-Type': 'application/json',
         } });
        let data= await res.json();
        setCode(data.code.hash);
    }
    useEffect(()=>{
        fetchCode();
    },[])
  return (
    <div className="flex items-center justify-center min-h-screen translate-y-[-10vh] space-x-10">
        <hr />
        <div className="flex flex-col">
            <label htmlFor="genCode" className="text-white text-2xl font-bold">Generate Code:</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="genCode"
                type={show?"password":"text"}
                value={code}
                readOnly={true}
                />
            <button onClick={handleRefresh} className=" w-30 bg-orange-500 hover:shadow-2xl text-white text-xl font-bold py-2 px-4 rounded-xl">
                      Refresh
                  </button>
        </div>
        <div className='flex flex-col'>
            <label htmlFor="inputCode" className="text-white text-2xl font-bold">Enter your Code:</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="inputCode"
                type="text"
                value={hash}
                onChange={(e) => setHash(e.target.value)}
                placeholder="Enter Code"
                />
                {valid===null ? null: valid ?<div className="text-green-500 text-xl font-bold">{msg}</div>
                :<p className="text-red-500 text-xl font-bold">{msg}</p>
                }
                <button onClick={handleSubmit} className=" w-30 bg-orange-500 hover:shadow-2xl text-white text-xl font-bold py-2 px-4 rounded-xl">
                      Verify Code
                  </button>
        </div>
        </div>
  )
}





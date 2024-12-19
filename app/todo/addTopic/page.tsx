'use client'

import { useState } from "react";
import {useRouter} from 'next/navigation';

export default function AddTopic() {
    const [title,setTitle] = useState('')
    const [description,setDiscription] = useState('');
    const router = useRouter();
     const handleSubmit =async (e:any)=>{
        e.preventDefault();
       if(!title || !description){
        alert('Title and description are required.')
       }

       //C:\nextJsProjects\next-app\api\topics
       try{
       const res = await fetch('http://localhost:3000/topics',{
            method:'POST',
            headers:{
                'Content-type':"application/json"
            },
            body:JSON.stringify({title, description}),
        });
        if(res.ok){
        router.push('/todo')
        }else{
          throw new Error('Failed to create a topic')
        }
       }catch(error){

       }
     }
    return (
    <form onSubmit={handleSubmit}>
        <input className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Topic Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
        />
        <input className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Topic Description"
            value={description}
            onChange={(e)=>setDiscription(e.target.value)}
        />
        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
            Add Topic
        </button>
    </form>
    )
}
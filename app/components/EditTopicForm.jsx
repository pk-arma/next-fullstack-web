"use client"
// import { useRouter } from "next/dist/client/router";
import { useState } from "react";

export default  function EditTopicForm ({id="",newTitle="",newDiscription=""}){
  
    console.log("newDescription",newTitle,newDiscription)
    const [title,setTitle] = useState(newTitle||'')
    const [description,setDiscription] = useState(newDiscription||'');
    // const router = useRouter();
     const handleSubmit =async (e)=>{
        e.preventDefault();
       if(!title || !description){
        alert('Title and description are required.')
       }

       //C:\nextJsProjects\next-app\api\topics
       try{
       const res = await fetch(`http://localhost:3000/topics/${id}`,{
            method:'PUT',
            headers:{
                'Content-type':"application/json"
            },
            body:JSON.stringify({title, description}),
        });
        if(res.ok){
        // router.push('/todo')
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
                  Update Topic
             </button>
     </form>
     )
 }
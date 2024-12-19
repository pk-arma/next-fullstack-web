"use client"
interface RemoveBtnProps {
    id: string; // You can replace 'string' with the specific type of `_id` if needed
  }
  
const RemoveBtn:React.FC<RemoveBtnProps> =({id})=>{
    const removeTopic = async ()=>{
        const comfirmed = confirm('Are you sure?');
        if(comfirmed){
            await fetch(`http://localhost:3000/topics?id=${id}`,{
                method:"DELETE"
            })
        }
    }
    return (
        <>
        <button onClick={removeTopic} > remove</button>
        </>
    )
}

export default RemoveBtn;
import EditTopicForm from '@/app/components/EditTopicForm'
const getTopicById = async(id)=>{
  try{
    const res = await fetch(`http://localhost:3000/topics/${id}`,{
      cache:"no-store",
    })
    if(!res.ok){
      throw new Error("failed")
    }
  console.log(res)
    return res.json()
  }catch(error){
    console.log(error)
  }
}

export default async function EditTopic ({params}){
  const { id } = await params
   const {topic} = await getTopicById(id);
    const {title,description} = topic;
     console.log(topic)
return <EditTopicForm id={id} newTitle={title} newDiscription={description} />
}

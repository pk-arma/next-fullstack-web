import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from './RemoveBtn'
const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/topics', {
            cache: 'no-store'
        })
        if (!res.ok) {
            throw new Error('Failed')
        }
        return res.json();
    } catch (error) {
        console.log(error)
    }
}
interface RemoveBtnProps {
    id: string;
  }

export default async function TopicList() {
    const { topics } = await getTopics()||[];
     console.log("topics",topics)
    return (
        <>
        {topics&& topics?.map((t:any)=> (
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">
                       {t.title}
                    </h2>
                    <div>
                       {t.description}
                    </div>
                </div>
                <div className="flex gap-2">
                    <div>
                       <RemoveBtn id={t._id}/>
                    </div>
                    <Link href={`/todo/editTopic/${t._id}`}>
                        <HiPencilAlt size={24} />
                    </Link>
                </div>
            </div>
        ))
}
</>
     
    )
}
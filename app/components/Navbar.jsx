import Link from 'next/link'


export default function Navbar (){
    return (
        <nav className="flex justify-between items-center bg-slate-800 py-3 px-8">

            <Link className='text-white font-bold' href={'/todo'}>
            home
            </Link>
            <Link className='bg-white p-2 ' href={'/todo/addTopic'}>
              Add Topic
            </Link>
        </nav>
    )
}

import Posts from '@/app/ui/posts'
const Team = async()=>{
    const data = await fetch('https://api.vercel.app/blog')
    // const posts = await data.json()
    const posts: { title: string }[] = await data.json()
     console.log("posts",posts)
    return(
        <div>
        <h1> this is a Team Page</h1>
        <Posts posts={posts}/>
        </div>
    )
}


export default Team;

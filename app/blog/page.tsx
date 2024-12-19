import Posts from '@/app/ui/posts'
import { Suspense } from 'react'
import Loading from './loading'
 
export default async function Page() {
  // Don't await the data fetching function
  const data = await fetch('https://api.vercel.app/blog')
  // const posts = await data.json()
  const posts: { title: string }[] = await data.json()
 
  return (
    <Suspense fallback={<Loading/>}>
     <div>
      <main>
        {/* Any content wrapped in a <Suspense> boundary will be streamed */}
        <Suspense fallback={<Loading />}>
          {/* <Posts posts={posts}/> */}
        </Suspense>
      </main>
    </div>
    </Suspense>
  )
}
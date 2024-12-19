
export default async function Home() {

  const data = await fetch('https://api.vercel.app/blog')
  // const posts = await data.json()
  const posts: { title: string }[] = await data.json()
  return (
    <div >
     click on any side bar menu to see...
    </div>
  );
}

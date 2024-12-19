
import Navbar from '@/app/components/Navbar'
export default function TodoLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
    team:React.ReactNode,
    analytics:React.ReactNode,
  }>) {
    return (
<main>
     <Navbar/>
{children}
</main>
    )
}


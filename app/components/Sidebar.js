"use client";


import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div style={{ 
            position:"fixed",
            zIndex:2,
            width: "200px", // Increased width for better visibility
            height: "100vh",
            background: "#f4f4f4",
            top:0,
            boxShadow: "2px 0 5px rgba(0,0,0,0.1)", // Add shadow for better styling
            boxSizing:"border-box"
           }}>
            <h3>Sidebar Menu</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ padding: "10px" }}>
                    <Link href='/dashboard' style={{ textDecoration: "none", color: pathname === "/dashboard" ? "blue" : "black" }}>
                        Dashboard
                    </Link>
                </li>
                <li  style={{padding:"10px"}}>
                    <Link href='/blog' style={{ textDecoration: "none", color: pathname === "/blog" ? "blue" : "black" }}>
                        Blog
                    </Link>
                </li>
                <li style={{padding:'10px'}}>
                   <Link href='/todo' style={{ textDecoration: "none", color: pathname === "/todo" ? "blue" : "black" }}> Todo </Link>
                </li>
                <li style={{padding:"10px"}}>
                    <Link href='/about' style={{ textDecoration: "none", color: pathname === "/about" ? "blue" : "black" }}>
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
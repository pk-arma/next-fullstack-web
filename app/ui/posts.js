'use client'
import { use } from 'react'
 
export default function Posts({ posts }) {
  return (
    <ul>
      {posts?.map((post,index) => (
        <li key={index}>{post.title}</li>
      ))}
    </ul>
  )
}
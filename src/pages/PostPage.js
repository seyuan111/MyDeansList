"use client"
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router'

const PostPage = () => {

  const [post, setPost] = useState({
    name: "",
    age: "",
    occupation: "",
    contact: ""
  })

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:5500/posts/${id}`)
      setPost(res.data)
    }
    fetchPost()
  },[id])


  return (
    <div className="mt-4">
      <div>
        <div className="max-h-[500px] overflow-hidden">
          <img className="mt-4" src={post.image}></img>
        </div>
      <div>
        <h1>Name: {post.name}</h1>
        <p className="mb-2">age: {post.age}</p>
        <p className="mb-2">major: {post.major}</p>
        <p className="mb-2">occupation: {post.occupation}</p>
        <h2>Description: {post.bio}</h2>
      </div>
      </div>
    </div>
  )
}

export default PostPage
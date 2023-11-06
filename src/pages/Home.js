"use client"
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

const Home = () => {
  const [posts, setPosts] = useState([]) //empty array in the state

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`http://localhost:5500/posts/`)
      setPosts(res.data)
    }
    fetchPosts()
  },[])

  const handleDelete = async (id) => {
    try{
      await axios.delete(`http://localhost:5500/posts/${id}`) //remove item from DB
      setPosts(posts.filter((post) => post._id !== id)) //remove item from state
    } catch(error){
      console.log(`There is an issue deleteing this post`, error)
    }
  }
  
  return (
    <div>
      <NavBar />
      <div className="mt-4">
        <h1 className="text-xl font-bold mb-6">My Deans List:</h1>
        {posts.map((post) => (
          <div className="mb-4" key={post._id}>
            <div className="w-8 justify-center items-center">
              <img variant="top" src={post.image}></img>
              <div>
                <h1 className="my-6">Name: {post.name}</h1>
                <p className="my-6">Age: {post.age}</p>
                <p className="my-6">Major: {post.major}</p>
                <p className="my-6">Occupation: {post.occupation}</p>
                <p className="my-6">Contact: {post.contact}</p>
                  <div className="flex">
                    <Link href={`/posts/${post._id}`}>
                      <button className="px-4 py-2 rounded mr-4 bg-blue-500 text-white">More Info</button>
                    </Link>
                      <button className="px-4 py-2 rounded mr-4 bg-red-500 text-white" onClick={() => handleDelete(post._id)}>Delete</button>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Home
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
      const res = await axios.get(`https://concerned-frog-culottes.cyclic.app/posts/`)
      const sortedPosts = res.data.sort((a, b) => a.name.localeCompare(b.name));
      setPosts(sortedPosts);
    }
    fetchPosts()
  },[])

  const handleDelete = async (id) => {
    try{
      await axios.delete(`https://concerned-frog-culottes.cyclic.app/posts/${id}`) //remove item from DB
      setPosts(posts.filter((post) => post._id !== id)) //remove item from state
    } catch(error){
      console.log(`There is an issue deleteing this post`, error)
    }
  }
  
  return (
    <div>
      <NavBar />
      <div className="mt-4 justify-center items-center mx-auto gap-4">
        <h1 className="text-2xl font-bold mb-6">My Deans List:</h1>
        {posts.map((post) => (
          <div className="mb-4" key={post._id}>
              <div className="bg-gray-300 items-center flex flex-col grid-col-3">
                <h1 className="my-4 text-xl font-bold">Name: {post.name}</h1>
                <p className="my-4 text-xl">Age: {post.age}</p>
                <p className="my-4 text-xl">Email: {post.email}</p>
                <p className="my-4 text-xl">Occupation: {post.occupation}</p>
                <p className="my-4 text-xl">Contact: {post.contact}</p>
                  <div className="flex mb-6">
                      <button className="px-4 py-2 rounded mr-4 duration-300 hover:bg-red-900 bg-red-500 text-white" onClick={() => handleDelete(post._id)}>Delete</button>
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
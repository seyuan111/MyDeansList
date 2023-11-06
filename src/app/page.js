import React from 'react'
import Image from 'next/image'
import HomePage from '../pages/Home'
import NewPost from '../pages/NewPost'
import PostPage from '../pages/PostPage'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Footer />
    </div>
  )
}

"use client"
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.css'

const PostPage = ({Container, Card}) => {

  const [post, setPost] = useState({
    name: "",
    age: "",
    major: "",
    occupation: "",
    image: "",
    bio: ""
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
    <Container className="mt-4">
      <Card>
        <div style="max-h-[500px] overflow-hidden">
          <Card.Img variant="top" src={post.image}></Card.Img>
        </div>
      <Card.Body>
        <Card.Title>Name: {post.name}</Card.Title>
        <Card.Subtitle className="mb-2">age: {post.age}</Card.Subtitle>
        <Card.Subtitle className="mb-2">major: {post.major}</Card.Subtitle>
        <Card.Subtitle className="mb-2">occupation: {post.occupation}</Card.Subtitle>
        <Card.Text>Description: {post.bio}</Card.Text>
      </Card.Body>
      </Card>
    </Container>
  )
}

export default PostPage
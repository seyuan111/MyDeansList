"use client"
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.css'

const Home = ({Container, Card, Button, Row, Col}) => {
  const [posts, setPosts] = useState([]) //empty array in the state

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`http://localhost:5500/posts/`)
      setPost(res.data)
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
    <Container>
      <Row>
        {posts.map((post) => (
          <Col md={4} className="mb-4" key={post._id}>
            <Card className="w-8">
              <Card.Img variant="top" src={post.image}></Card.Img>
              <Card.Body>
                <Card.Title>Name: {post.name}</Card.Title>
                <Link href={`/posts/${post._id}`}>
                  <Button className="mr-4 bg-blue-500 text-white">More Info</Button>
                </Link>
                  <Button className="mr-4 bg-red-500 text-white" onClick={() => handleDelete(post._id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home
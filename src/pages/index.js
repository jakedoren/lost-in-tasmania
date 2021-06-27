import React from "react"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Synopsis from '../components/Synopsis'
import Author from "../components/Author"

export default function Home() {
  
  return (
    <div>
      <Layout>
        <Hero />
        <Synopsis />
        <Author />
      </Layout>
    </div>
  )
}

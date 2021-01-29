import React from "react"
import { Link } from 'gatsby'
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <section>
      <Navbar />
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>UX designer & web developer based in Manchester.</p>
        <Link to="/projects">My Portfolio Projects</Link>
      </div>
    </section>
  )
}
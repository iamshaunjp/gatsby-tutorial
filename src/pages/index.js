import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <section>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link to="/projects">My Portfolio Projects</Link>
        </div>
      </section>
    </Layout>
  )
}
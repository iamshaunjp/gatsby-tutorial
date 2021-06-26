import '../styles/global.css'

import Navbar from './Navbar'
import React from 'react'

export default function Layout({ children }) {
  // const data = useStaticQuery(graphql`
  //   {
  //     site {
  //       siteMetadata {
  //         copyright
  //       }
  //     }
  //   }
  // `)
  // const { copyright } = data.site.siteMetadata

  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        { children }
      </div>
      <footer>
        <p> copyright </p>
      </footer>
    </div>
  )
}
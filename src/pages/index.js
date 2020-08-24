import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { TweenLite, Power3 } from "gsap"

import "../index.css"
import Layout from "../components/Layout/Layout"

const IndexPage = () => {
  //Query to get data from gatsby-config.js file
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  //Animation
  let helloText = useRef(null)
  useEffect(() => {
    TweenLite.from(helloText, 0.8, {
      opacity: 0,
      x: -100,
      ease: Power3.easeOut,
    })
  }, [])

  return (
    <Layout>
      <div className="container">
        <h1 className="hello-text" ref={el => (helloText = el)}>
          Hello
        </h1>
        <h2 className="tag-line">
          {`I'm ${data.site.siteMetadata.author}, Full-stack developer living in beautiful Toronto.`}
        </h2>
      </div>
    </Layout>
  )
}

export default IndexPage

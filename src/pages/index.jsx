import React from "react"
// import {Link} from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoIndex from "../components/video"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <img src="https://images.unsplash.com/photo-1581404917879-53e19259fdda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80" className="img-fluid" alt=""/>
      <VideoIndex/>
  </Layout>
)

export default IndexPage

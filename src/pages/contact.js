import * as React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Header from "../components/header"

const SecondPage = () => (
  <div>
      <Header/>
    <SEO title="Page two" />
    <h1>jjgggjg</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage

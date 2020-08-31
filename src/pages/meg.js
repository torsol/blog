import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const Meg = ({ data, location }) => {

    return (
        <Layout location={location} title="Om Meg">
            <SEO title="Om meg" />
            <Bio />
        </Layout>
    )
}

export default Meg
import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const KontaktInfo = ({ data, location }) => {

    return (
        <Layout location={location} title="Kontaktinfo">
            <SEO title="Om meg" />
            <Bio />
        </Layout>
    )
}

export default KontaktInfo
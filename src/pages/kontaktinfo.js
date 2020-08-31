import React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const KontaktInfo = ({ data, location }) => {

    return (
        <Layout location={location} title="Kontaktinfo">
            <h2>Mer info kommer..</h2>
            <SEO title="Om meg" />
            <Bio />
        </Layout>
    )
}

export default KontaktInfo
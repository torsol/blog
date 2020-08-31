import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const Meg = ({ data, location }) => {
    const { author, social } = data.site.siteMetadata

    return (
        <Layout location={location} title="Torstein Solberg">
            <SEO title="Om meg" />
            <div
                style={{
                    display: `flex`,
                }}
            >
                <Image
                    fixed={data.avatar.childImageSharp.fixed}
                    alt={author.name}
                    style={{
                        marginRight: rhythm(1/2),
                        marginBottom: 0,
                        minWidth: 120,
                        borderRadius: `100%`,
                    }}
                    imgStyle={{
                        borderRadius: `50%`,
                    }}
                />
                <p>Heisann, mitt navn er Torstein, 22 år gammel, født og oppvokst i Bærum. Jeg lagde denne nettsiden som et prosjekt for å lære mer om 
                    programmering, samt dele/vise fram det jeg holder på med innenfor IT-verdenen og studiet. 
                </p>
            </div>
            <h2> sdkljfølasjdfkløj</h2>
            <Bio />
        </Layout>
    )
}

export default Meg

export const pageQuery = graphql`
query {
  avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
    childImageSharp {
      fixed(width: 120, height: 120, quality: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  site {
    siteMetadata {
      author {
        name
        summary
      }
      social {
        github
        linkedin
      }
    }
  }
}
`
import React from "react"
import Header from "./header"

import { rhythm } from "../utils/typography"

const Layout = ({ title, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header title={title} />
      <main>{children}</main>
    </div>
  )
}

export default Layout

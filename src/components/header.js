import React from "react"
import { Link } from "gatsby"
import { scale } from "../utils/typography"



const Header = ({ title }) => {
    return (
        <h1
          style={{
            ...scale(1.3),
            marginTop: 0
          }}
        >
          <Link className="no-line-link"
            to={`/`}
          >
            {title}
          </Link>
        </h1>
    )
  }
  
  export default Header
  
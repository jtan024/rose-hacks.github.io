/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';


import Header from "./header"
import "./layout.css"
import "../styles/global.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <main>{children}</main>
        <footer className={'footer'}>
          <div className={'social row-item'}>
          <li><a href={'https://www.facebook.com/rosehackucr/'} target={'_blank'}><h2 className={'icon'}> <FaFacebookF /> </h2></a></li>
          <li><a href={'https://twitter.com/rosehack_ucr'} target={'_blank'}><h2 className={'icon'}> <FaTwitter /> </h2></a></li>
           <li><a href={'https://www.linkedin.com/company/rose-hack/'} target={'_blank'}><h2 className={'icon'}> <FaLinkedinIn /> </h2></a></li>
            <li><a href={'https://www.instagram.com/rosehackucr/'} target={'_blank'}><h2 className={'icon'}> <FaInstagram /> </h2></a></li>
          </div>
          Built with ❤️
          {` `}
          in Riverside, California




        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

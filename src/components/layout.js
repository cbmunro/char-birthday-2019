/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./layout.css"
import { Helmet } from "react-helmet"

import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

export const Main = styled.main`
  position: relative;
`

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Happy 29th b-day!</title>
      </Helmet>
      <Container>
        <div></div>
        <Main>{children}</Main>
        <div></div>
      </Container>
    </>
  )
}

export default Layout

import React from "react"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import styled from "styled-components"
import { colors } from "../style/variables"
import GalleryImage from "../components/Gallery/GalleryImage"

const GalleryWrapper = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: ${colors.background};
  position: relative;
`

const GalleryPage = () => {
  return (
    <>
      <Navigation />
      <GalleryWrapper />
      <GalleryImage />
      <Footer />
    </>
  )
}

export default GalleryPage

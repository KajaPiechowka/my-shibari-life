import React from "react"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import styled from "styled-components"
import { colors } from "../style/variables"
import GalleryImage from "../components/Gallery/GalleryImage"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const GalleryWrapper = styled.div`
  width: 100vw;
  height: auto;
  background-color: ${colors.background};
  position: relative;
`

const gallery = graphql`
  {
    allDatoCmsGallery {
      nodes {
        id
        titlePl
        descriptionPl
        photoMain {
          fluid(maxWidth: 800) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const ImageWrapper = styled.div`
  padding-top: 20vh;
  width: 90%;
  height: 100%;
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  flex-wrap: wrap;
`
const SingleGalleryImage = styled(Image)`
  width: 30%;
  height: 40vh;
  margin: 1rem;
`

const GalleryPage = () => {
  const media = useStaticQuery(gallery)
  return (
    <>
      <Navigation />
      {console.log(media)}
      <GalleryWrapper>
        <ImageWrapper>
          {media.allDatoCmsGallery.nodes.map(element => (
            <SingleGalleryImage
              key={element.id}
              fluid={element.photoMain.fluid}
            />
          ))}
        </ImageWrapper>
      </GalleryWrapper>
      <GalleryImage />
      <Footer />
    </>
  )
}

export default GalleryPage

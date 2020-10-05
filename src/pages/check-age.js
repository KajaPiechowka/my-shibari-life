import React from "react"
import styled from "styled-components"
import Button from "../components/Button/Button"
import { colors } from "../style/variables"
import { Link } from "gatsby"

const CheckAgeBackground = styled.div`
  background-image: url("/hero.jpg");
  background-position: bottom;
  background-color: ${colors.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const CheckAgeWrapper = styled.div`
  background-color: ${colors.window};
  padding: 3rem;
  border-radius: 2px;
  h3 {
    max-width: 400px;
    text-align: center;
    color: ${colors.text};
    margin-bottom: 2rem;
    text-shadow: 2px 2px 8px #141313;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`
const StyledLinkTo = styled(Link)`
  text-decoration: none;
  color: ${colors.text};
`
const StyledLinkBack = styled.a`
  text-decoration: none;
  color: ${colors.text};
`

const CheckAgePage = () => {
  return (
    <CheckAgeBackground>
      <CheckAgeWrapper>
        <h3>Strona zawiera treści przeznaczone dla osób dorosłych</h3>
        <ButtonWrapper>
          <Button>
            <StyledLinkBack href="http://google.com">Rezygnuję</StyledLinkBack>
          </Button>
          <Button>
            <StyledLinkTo to="/my-shibari-life">Wchodzę</StyledLinkTo>
          </Button>
        </ButtonWrapper>
      </CheckAgeWrapper>
    </CheckAgeBackground>
  )
}

export default CheckAgePage

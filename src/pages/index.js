import React from "react"
import Box from "../components/Box"
import styled from "styled-components"
import GlobalStyles from "../components/GlobalStyles"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
  h1 {
    color: white;
    margin: 2rem;
  }
  span.yellow {
    color: yellow;
  }
`

export default function Home() {
  return (
    <Main>
      <GlobalStyles />
      <h1>
        NEO TOKYO <span className="yellow">PRICE GENERATOR</span>
      </h1>
      <Box />
    </Main>
  )
}

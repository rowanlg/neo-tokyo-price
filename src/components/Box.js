import React from "react"
import styled from "styled-components"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  width: 600px;
  transition: all 0.5s ease;
  .tabs {
    width: 100%;
    display: flex;
    justify-content: space-between;
    div:nth-child(1) {
      background-color: #171717;
      border-top-left-radius: 3px;
    }
    div:nth-child(2) {
      background-color: #353535;
    }
    div:nth-child(3) {
      background-color: #2a2a2a;
    }
    div:nth-child(4) {
      background-color: #222222;
    }
    div {
      width: 25%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.1rem;
      cursor: pointer;
      color: #fff;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
  .main-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 150px 0 180px 0;
    width: 600px;
    p {
      margin: 0 0 0.5rem 0;
      color: #fff;
    }
    input {
      font-family: "VT323";
      background-color: #2b2b2b;
      border: 1px solid yellow;
      color: #fff;
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      button {
        background-color: #171717;
        color: #fff;
        border: 2px solid #fff;
        border-radius: 3px;
        margin: 0.5rem;
        font-family: "VT323";
        padding: 2px 5px 3px 5px;
        cursor: pointer;
      }
    }
  }
`

const Box = () => {
  const [tab, setTab] = React.useState(1)
  const [tokenID, setTokenID] = React.useState(0)

  const colors = {
    1: "#171717",
    2: "#353535",
    3: "#2a2a2a",
    4: "#222222",
  }

  const handleSubmit = event => {
    event.preventDefault()
    const tokenNumber = tokenID

    if (!Number(tokenID)) {
      alert("Number, filthbag")
      return
    }
    console.log("submitting", tokenID)
  }

  const handleChange = event => {
    const token = event.target.value
    setTokenID(token)
  }

  return (
    <Section style={{ backgroundColor: colors[tab] }}>
      <div className="tabs">
        <div
          onClick={() => {
            setTab(1)
          }}
        >
          IDENTITY
        </div>
        <div
          onClick={() => {
            setTab(2)
          }}
        >
          VAULT
        </div>
        <div
          onClick={() => {
            setTab(3)
          }}
        >
          CACHE
        </div>
        <div
          onClick={() => {
            setTab(4)
          }}
        >
          ?
        </div>
      </div>
      {tab === 1 && (
        <div className="main-section">
          <p>INPUT TOKENID...</p>
          <form onSubmit={handleSubmit}>
            <input type="number" name="token" onChange={handleChange} />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      )}
      {tab === 2 && (
        <div className="main-section">
          <p>INPUT TOKENID...</p>
          <form onSubmit={handleSubmit}>
            <input type="number" name="token" onChange={handleChange} />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      )}
      {tab === 3 && (
        <div className="main-section">
          <p>INPUT TOKENID...</p>
          <form onSubmit={handleSubmit}>
            <input type="number" name="token" onChange={handleChange} />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      )}
      {tab === 4 && (
        <div className="main-section">
          <p>INPUT TOKENID...</p>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              name="token"
              onChange={handleChange}
              disabled
            />
            <button type="submit" disabled>
              SUBMIT
            </button>
          </form>
        </div>
      )}
    </Section>
  )
}

export default Box

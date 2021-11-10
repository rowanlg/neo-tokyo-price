import React from "react"
import styled from "styled-components"
import Img from "../images/citadel144.png"

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
    /* padding: 150px 0 180px 0; */
    height: 360px;
    width: 600px;
    padding-bottom: 1rem;
    h3 {
      color: #fff;
    }
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
    .white-container {
      background-color: #fff;
      padding: 0.5rem 1rem;
      display: flex;
      width: 420px;
      align-items: center;
      justify-content: space-between;
      border-radius: 3px;
      img {
        width: 200px;
        margin: 1rem;
      }
      .results-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
        max-width: 200px;
        p {
          color: #000;
        }
        .pink {
          color: pink;
        }
        .red {
          color: red;
        }
        .green {
          color: green;
        }
        .orange {
          color: orange;
        }
        .row-space {
          display: flex;
          justify-content: space-between;
          width: 150px;
        }
        .row-center {
          display: flex;
          justify-content: center;
          width: 150px;
          margin-bottom: -0.7rem;
          margin-top: 0.4rem;
        }
      }
    }
  }
`
// const PopUp = styled.section`
//   position: absolute;
//   height: inherit;
//   width: 600px;
//   background-color: red;
// `

const Box = () => {
  const [tab, setTab] = React.useState(1)
  const [tokenID, setTokenID] = React.useState(0)
  const [popup1, setPopup1] = React.useState(false)
  const [popup2, setPopup2] = React.useState(false)
  const [popup3, setPopup3] = React.useState(false)
  const [popup4, setPopup4] = React.useState(false)

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
    setTokenID(event.target.value)
  }

  return (
    <Section style={{ backgroundColor: colors[tab] }}>
      {/* <PopUp>hello</PopUp> */}
      <div className="tabs">
        <div
          onClick={() => {
            setTab(1)
            setPopup2(false)
            setPopup3(false)
            setPopup4(false)
          }}
        >
          IDENTITY
        </div>
        <div
          onClick={() => {
            setTab(2)
            setPopup1(false)
            setPopup3(false)
            setPopup4(false)
          }}
        >
          VAULT
        </div>
        <div
          onClick={() => {
            setTab(3)
            setPopup1(false)
            setPopup2(false)
            setPopup4(false)
          }}
        >
          CACHE
        </div>
        <div
          onClick={() => {
            setTab(4)
            setPopup1(false)
            setPopup2(false)
            setPopup3(false)
          }}
        >
          LAND
        </div>
      </div>
      {tab === 1 && popup1 === false && (
        <div className="main-section">
          <p>INPUT IDENTITY TOKENID...</p>
          <form onSubmit={handleSubmit}>
            <input type="number" name="token" onChange={handleChange} />
            <button
              type="submit"
              onClick={() => {
                setPopup1(true)
              }}
            >
              SUBMIT
            </button>
          </form>
        </div>
      )}
      {tab === 1 && popup1 && (
        <div className="main-section">
          <h3>IDENTITY #144</h3>
          <div className="white-container">
            <img src={Img} alt="image" />
            <div className="results-text">
              <div className="row-space">
                <p className="pink">RARITY</p>
                <p>1794</p>
              </div>
              <div className="row-space">
                <p className="red">FLOOR</p>
                <p>19E/$100,000</p>
              </div>
              <div className="row-space">
                <p className="green">HIGH</p>
                <p>70E/$300,000</p>
              </div>
              <div className="row-center">
                <p className="orange">MARKET PRICE</p>
              </div>
              <div className="row-center">
                <p>22E/$140,000</p>
              </div>
              <div className="row-center" style={{ marginTop: "1rem" }}>
                <p
                  style={{
                    border: "1px solid #000",
                    padding: "2px 8px",
                    cursor: "pointer",
                    borderRadius: "3px",
                  }}
                  onClick={() => {
                    setPopup1(false)
                  }}
                >
                  RESET
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 2 && (
        <div className="main-section">
          <p>INPUT VAULT TOKENID...</p>
          <form onSubmit={handleSubmit}>
            <input type="number" name="token" onChange={handleChange} />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      )}
      {tab === 3 && (
        <div className="main-section">
          <p>INPUT CACHE TOKENID...</p>
          <form onSubmit={handleSubmit}>
            <input type="number" name="token" onChange={handleChange} />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      )}
      {tab === 4 && (
        <div className="main-section">
          <p>INPUT LAND TOKENID...</p>
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

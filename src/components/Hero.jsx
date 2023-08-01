import React from "react";
import styled from "styled-components";
import homeImage from "../assets/video.mp4";
export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
          <div className="divVideo">
              <video
                  src={homeImage}
                     preload='auto' autoPlay
                     playsInline muted loop title="video"
                     style={{width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover'}}/>
          </div>
      </div>
      <div className="content">
        <div className="title">
          <h1>ПОДОРОЖУЙТЕ, ЩОБ ДОСЛІДЖУВАТИ</h1>
          <p>
            Ми - визначений і надійний партнер у світі подорожей, пропонуючи вам незабутні та захоплюючі
            пригоди. Наша мета - забезпечити вам найкращий відпочинок, враховуючи ваші унікальні потреби та бажання.
          </p>
        </div>
        {/*<div className="search">*/}
        {/*  <div className="container">*/}
        {/*    <label htmlFor="">Where you want to go</label>*/}
        {/*    <input type="text" placeholder="Search Your location" />*/}
        {/*  </div>*/}
        {/*  <div className="container">*/}
        {/*    <label htmlFor="">Check-in</label>*/}
        {/*    <input type="date" />*/}
        {/*  </div>*/}
        {/*  <div className="container">*/}
        {/*    <label htmlFor="">Check-out</label>*/}
        {/*    <input type="date" />*/}
        {/*  </div>*/}
        {/*  <button>Explore Now</button>*/}
        {/*</div>*/}
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    //img {
    //  width: 100%;
    //  filter: brightness(60%);
    //}
  }
  .divVideo{
    width: 100%;
    height: 50vh;
  }
  .content {
    background-color: #00000075;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 20vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      //background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .divVideo{
      height: 100%;
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
          width: 70%;
          margin: 20px auto 0;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;

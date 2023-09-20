import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/tetana.jpeg";
import image1 from "../assets/viber.webp";
import image2 from "../assets/telegram.webp";
import image3 from "../assets/whatsapp.webp";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2 style={{color: "azure"}}>Про мене</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            <img src={avatarImage} width='100px' height='100px' alt="" style={{borderRadius: '50%', marginRight: '20px'}} />
            <span style={{fontSize: '20px', fontWeight: 500}}>Тетяна Мандрик</span>
          </div>
          <div className="info">
            <ul className="details">
              <li style={{listStyleType: 'disclosure-closed'}}>твій особистий тур агент</li>
              <li style={{listStyleType: 'disclosure-closed'}}>тури, візи, страхування</li>
              <li style={{listStyleType: 'disclosure-closed'}}>більше 5 років на туристичному ринку</li>
              <li style={{listStyleType: 'disclosure-closed'}}>відвідала більше 500 готелей світу</li>
              <li style={{listStyleType: 'disclosure-closed'}}>більше 3000 задоволених туристів</li>
            </ul>
          </div>
        </div>
        <div className="testimonial">
          <p>Мене можна знайти:</p>
          <a href="https://www.google.com/maps/place/48%C2%B058'33.3%22N+23%C2%B058'37.6%22E/@48.976016,23.976891,19.75z
          /data=!4m4!3m3!8m2!3d48.9759133!4d23.9771017?entry=ttu" className='map'
             target='_blank' rel="noreferrer"><p style={{fontSize: '20px'}}>Івано-Франківська обл, м. Долина, тц Еко Маркет, 3 поверх</p></a>
          <div className="info info2">
            <p>Поставте питання, ми онлайн</p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <a href="viber://chat?number=%2B380979844090" target='_blank' rel="noreferrer">
              <img src={image1} alt="viber" width='30px' height='30px' style={{margin: '0 20px 20px'}} /></a>
            {/*<a href="https://t.me/d" target='_blank' rel="noreferrer">*/}
            {/*  <img src={image2} alt="telegram" width='30px' height='30px' style={{margin: '0 20px 20px'}} /></a>*/}
            <a href="https://wa.me/+380979844090" target='_blank' rel="noreferrer">
              <img src={image3} alt="whats up" width='30px' height='30px' style={{margin: '0 20px 20px'}} /></a>
          </div>
          </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .info2{
    margin-bottom: 20px;
  }
  .map{
    font-size: 0.9rem;
    text-decoration: none;
    color: #1d2025;
  }
  .map:hover{
    color: #4539e6;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      //&:hover {
      //  transform: translateX(0.4rem) translateY(-1rem);
      //  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      //}
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;

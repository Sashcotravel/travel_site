import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Отримайте найкращі ціни",
      subTitle:
          "Бронюйте нас і ми запропонуємо Вам найкращі ціни та умови оплати",
    },
    // {
    //   icon: service2,
    //   title: "Covid Safe",
    //   subTitle:
    //     "У нас є всі підібрані готелі, у яких є всі запобіжні заходи для безпечного середовища для COVID-19.",
    // },
    {
      icon: service3,
      title: "Гнучка оплата",
      subTitle:
      "При бронюванні туру можлива оплата частинами, 50% одразу а решту суми не пізніше як за 2 тижні до вильоту",
    },
    // {
    //   icon: service4,
    //   title: "Знайдіть найкраще поблизу",
    //   subTitle:
    //     "Знайдіть найкращі готелі та місця, які варто відвідати поблизу, одним клацанням миші.",
    // },
  ];
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service" key={index}>
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    //&:hover {
    //  transform: translateX(0.4rem) translateY(-1rem);
    //  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    //}
    .icon {
      img {
        height: 2.4rem;
      }
    }
    h3{
      font-size: 25px;
    }
    p{
      font-size: 20px;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

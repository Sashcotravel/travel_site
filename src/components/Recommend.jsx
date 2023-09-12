import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/egipt.png";
import Destination2 from "../assets/Turkey.jpg";
import Destination3 from "../assets/Montenegro.jpeg";
import Destination4 from "../assets/Greece.jpg";
import Destination5 from "../assets/bolgaria.png";
import Destination6 from "../assets/kipr.png";
import Page1 from "../Travel Page/page1";
import Page4 from "../Travel Page/page4";
import Page3 from "../Travel Page/page3";
import Page2 from "../Travel Page/page2";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Египет",
      subTitle: "Якщо ви плануєте сімейний відпочинок з дітьми, то напевно вже знаєте, що одним з найпопулярніших напрямків для такої поїздки є Єгипет. І це цілком виправдано! Комфортний переліт, відмінна інфраструктура, найчистіші пляжі з блакитними лагунами і кораловими рифами. Вибір готелів для сімейного відпочинку в Єгипті справді великий. Тут можна підібрати варіант на будь-який смак і гаманець. При цьому майже в кожному готелі для маленьких туристів обладнаний дитячий клуб з цікавою розважальною програмою, невеликий басейн і навіть водні гірки, а вечорами проходять захоплюючі вистави та музичні шоу для всієї родини.",
    },
    {
      image: Destination2,
      title: "Туреччина",
      subTitle: "І звичайно, в Туреччині дітей чекає величезна кількість розваг. Практично кожен день з гавань Кемера в невеликі одноденні круїзи, уздовж узбережжя Середземного моря, відправляються дерев'яні парусні яхти - гюлети. Парк «Місячне сяйво» - найпопулярніше місце відпочинку в Кемері. Парк Moonlight, де розташований єдиний пісочний пляж в місті, атракціони, дельфінарій і ресторани, а ще безліч дельфінаріїв і аквапарків!",
    },
    {
      image: Destination3,
      title: "Чорногорія",
      subTitle: "Крім цього, діти тут зможуть добре оздоровитися, адже одна з граней цієї чудової країни - лікування та оздоровлення! З давніх-давен пісок і вода деяких пляжів Чорногорії відомі своїми цілющими властивостями. Так, відомий Ульцинський Великий пляж вкритий найдрібнішим піском. Він багатий мінералами, відпочинок на цьому пляжі в нагоді тим, хто хворий на ревматизм, артрит або м'язовими захворюваннями. Та й веселих забав тут дуже багато! Наприклад, парк пригод Ловчен - місце для веселих і активних. У цьому унікальному місці можна випробувати себе, долаючи перешкоди на мотузкових атракціонах на вершинах дерев. Парк «Ловчен», або «Ігри серед дерев» - єдиний проект такого роду на Балканах.",
    },
    {
      image: Destination4,
      title: "Греція",
      subTitle: "Греція - дуже затишна країна для сімейного відпочинку. Тут є все, щоб відчувати себе як вдома, де є море, смачна їжа, різні сири і фантастичні вина. Відпочинок з дітьми тут буде радісним і легким, адже крім оздоровлення для дітей тут є дуже багато місць, щоб розважатися, як з батьками так і без. Радимо відвідати акваріум «Водний світ» - перший акваріум на Криті був створений як реабілітаційний центр для потерпілих від восьминогів, черепашок, крокодилів. Планувати поїздку в аквапарк Water Park треба заздалегідь і розраховувати на цілий день. За менший час тут просто не впоратися.",
    },
    {
      image: Destination5,
      title: "Болгарія",
      subTitle: "У готелях з дитячим клубом і анімацією з вашим малюком будуть займатися професійні аніматори. Цілий день з дітьми малюють, читають, ліплять з пластиліну, грають в цікаві рухливі ігри, які розвивають фантазію. Хорошим прикладом сервісу для дітей слугують дитячі клуби «Solvex», організовані нашими партнерами. Щоб переконатися в перевагах клубу, експерти туроператора Join UP! рекомендують сім'ям з дітьми вибирати, наприклад, такі готелі: Park Hotel Odessos 4 * Золоті піски, Elitsa 3 * + Албена, Yunona 3 * Сонячний берег, Atrium Beach / Andalusia 4 * Курорт Еленіте.",
    },
    {
      image: Destination6,
      title: "Кіпр",
      subTitle: "Кіпр, орієнтований на активну молодь, пропонує безліч розваг, як денних, так і нічних. Тим, хто не хоче упускати плюси сонячних днів, варто відправитися на пляж і спробувати себе у дайвінгу, серфінгу або орендувати яхту і відправитися у відкрите море. Так, на курорті Айя-Напа варто відвідати клуби Castle і Soho, Диско бар Senior Frog, в яких вирує життя, грають кращі діджеї Європи, змішують дивовижні коктейлі і танцюють до повної знемоги. Можна відправитися в бар-ресторан Kahlua, щоб відновити сили, і пограти в місцевому казино.",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];
  const [active, setActive] = useState(1);

  const packages = [
    "Перерва на вихідні",
    "Відпочинковий пакет",
    "Груповий тур",
    "Довгострокова повільна подорож",
  ];


  return (
    <Section id="recommend">
      <div className="title">
        <h2>Рекомендовані напрямки</h2>
      </div>
      <div className="packages">
        {/*<ul>*/}
        {/*  {packages.map((pkg, index) => {*/}
        {/*    return (*/}
        {/*      <li style={{cursor: 'pointer'}} key={index}*/}
        {/*        className={active === index + 1 ? "active" : ""}*/}
        {/*        onClick={() => setActive(index + 1)}*/}
        {/*      >*/}
        {/*        {pkg}*/}
        {/*      </li>*/}
        {/*    );*/}
        {/*  })}*/}
        {/*</ul>*/}
      </div>
      <div>
        <Page1 data={data}/>
        {/*{active === 2 && <Page2 data={data}/>}*/}
        {/*{active === 3 && <Page3 data={data}/>}*/}
        {/*{active === 4 && <Page4 data={data}/>}*/}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
    color: azure;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      //padding: 1rem;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      //background-color: #8338ec14;
      background-color: #e4f0fb;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 11px;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;

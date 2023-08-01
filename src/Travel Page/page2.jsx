import React from 'react';
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

const Page2 = ({ data }) => {
    return (
        <div className="destinations">
            {data.map((destination, index) => {
                return (
                    <div className="destination" key={index}>
                        <img src={destination.image} alt="" />
                        <h3>{destination.title}</h3>
                        <p>{destination.subTitle}</p>
                        <div className="info">
                            <div className="services">
                                <img src={info1} alt="" />
                                <img src={info2} alt="" />
                                <img src={info3} alt="" />
                            </div>
                            <h4>{destination.cost}</h4>
                        </div>
                        <div className="distance">
                            <span>1000 Kms</span>
                            <span>{destination.duration}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Page2;
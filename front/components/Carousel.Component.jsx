import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import './Carousel.Component.scss'; 
const images = [
        {
            url: "/img/package.png",
            description: "최고의 커피를 집에서 받아보세요."
        },
        {
            url: "/img/coffee.png",
            description: "8시간동안 추출된 최상의 커피를 집앞으로 배송해 드립니다."
        },
        {
            url: "img/tea-time.png",
            // url2: "img/love.png",
            description: "소중한 사람에게 따뜻한 커피 한 잔을 선물해주세요."
        }
]

const CarouselContainer = () => {
    return(
        <Carousel 
            showThumbs={false} 
            autoPlay={true}
            infiniteLoop={true}	
        >
            {
            images.map((item,index) => {
                let backgroundColor=''; 
                if(index === 0){
                    backgroundColor = '#c8dee5';
                } else if(index ===1) {
                    backgroundColor = '#c8e5e0';
                } else {
                    backgroundColor = '#a2842f';
                }
                let style = `background-color: "${backgroundColor}"`
                return(
                    <div key={item.index} className='carousel-container' style={{}}>
                        <img className="carousel-image" src={item.url}/>
                        {item.url2? <img className="carousel-image carousel-image2" src={item.url2}/> : null }
                        <div className="carousel-description">{item.description} </div>
                    </div>);
                })}
        </Carousel>
    )
}

export default CarouselContainer;
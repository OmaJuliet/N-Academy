import { useState } from 'react'
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import './carousel.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



function Carousel() {
    const [sliderRef, setSliderRef] = useState(null);


    const sliderSettings = {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                },
            },
        ],
    }

    const courseCards = [
        {
            id: '1',
            tag: "free",
            imageSrc:
                'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
            title: 'Introduction to NFT',
            description: 'Lorem ipsum dolor sit amet, consectur dolori. A townhall different from balablu....bulabla.....blublu....',
            pricingText: <FaStar />,
        },
        {
            id: '2',
            tag: "premium",
            imageSrc:
                'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            title: 'NFT & Coretti Course',
            description: 'Lorem ipsum dolor sit amet, consectur dolori. A townhall different from balablu....bulabla.....blublu....',
            pricingText: <FaStar />,
        },
        {
            id: '3',
            tag: "paid",
            imageSrc:
                'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
            title: 'Intro to Smart Contracts',
            description: 'Lorem ipsum dolor sit amet, consectur dolori. A townhall different from balablu....bulabla.....blublu....',
            pricingText: <FaStar />,
        },
        {
            id: '4',
            tag: "free",
            imageSrc:
                'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Blockchain Fundamentals',
            description: 'Lorem ipsum dolor sit amet, consectur dolori. A townhall different from balablu....bulabla.....blublu....',
            pricingText: <FaStar />,
        },
        {
            id: '5',
            tag: "premium",
            imageSrc:
                'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            title: 'Solidity Handbook',
            description: 'Lorem ipsum dolor sit amet, consectur dolori. A townhall different from balablu....bulabla.....blublu....',
            pricingText: <FaStar />,
        },
        {
            id: '6',
            tag: "paid",
            imageSrc:
                'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80',
            title: 'Ethereum Basics',
            description: 'Lorem ipsum dolor sit amet, consectur dolori. A townhall different from balablu....bulabla.....blublu....',
            pricingText: <FaStar />,
        },
        {
            id: '7',
            tag: "free",
            imageSrc:
                'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
            title: 'Decentralized Applications',
            description: 'Lorem ipsum dolor sit amet, consectur dolori. A townhall different from balablu....bulabla.....blublu....',
            pricingText: <FaStar />,
        },
        {
            id: '8',
            tag: "premium",
            imageSrc:
                'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
            title: 'Blockchain Development',
            description: 'Lorem ipsum dolor sit amet, consectur dolori. A townhall different from balablu....bulabla.....blublu....',
            pricingText: <FaStar />,
        },
    ]

    return (
        <div className='content'>
            <section className="segments">
                <h2>our beginner courses</h2>
                <div className='tabs'>
                    <button className="active-btn">All</button>
                    <button className="button">Paid</button>
                    <button className="button">Free</button>
                    <button className="button">Premium</button>
                </div>
            </section>

            <Slider ref={setSliderRef} {...sliderSettings}>
                {courseCards.map((card, index) => (
                    <div key={index} className='cards'>

                        <img src={card.imageSrc} alt={card.title} className='card-image' />
                        <div className='text-info'>
                            <div className='card-header'>
                                <h2>{card.title}</h2>
                                <span>{card.pricingText}{card.pricingText}{card.pricingText}</span>
                            </div>
                            <p>{card.description}</p>
                            {/* <ul>
                                {card.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul> */}
                            {/* <p>{card.features}</p> */}
                        </div>
                        <div className="card-btns">
                            <button>Buy Now</button>
                            <button>Save </button>
                        </div>
                    </div>
                ))}
            </Slider>

            <div className='controls'>
                <button onClick={sliderRef?.slickPrev}>
                    <FaArrowLeft />
                </button>
                <button onClick={sliderRef?.slickNext}>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Carousel;

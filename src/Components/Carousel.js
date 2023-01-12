import { useState } from 'react'
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import './carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { motion } from 'framer-motion';
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const notify = () => {
  toast("Course has been added to your purchase cart")
}

const notifyme = () => {
        toast.success('Item has been added to saved courses', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
  }


function Carousel() {
    const [sliderRef, setSliderRef] = useState(null);

    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);


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
        <>
        <div className='center-3 z-0' />
        <div className='content z-10'>
            <motion.section
                initial={{
                    y:80,
                    opacity:0,
                }}
                transition={{ duration: .6 }}
                whileInView={{ opacity: 1, y:0 }}
                className="segments">
                <h2>our beginner courses</h2>
                <div className='tabs'>
                    <button className="active-btn bg-gradient-to-r from-fuchsia-500 to-indigo-500">All</button>
                    <button className="button">Paid</button>
                    <button className="button">Free</button>
                    <button className="button">Premium</button>
                </div>
            </motion.section>

            <Slider ref={setSliderRef} {...sliderSettings}>
                {courseCards.map((card, index) => (
                    <div key={index} className='cards'>
                        <motion.div
                            initial={false}
                            animate={
                              isLoaded && isInView
                                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                            }
                            transition={{ duration: 1, delay: 1 }}
                            // viewport={{ once: true }}
                            onViewportEnter={() => setIsInView(true)}
                        >
                            <img src={card.imageSrc} onLoad={() => setIsLoaded(true)} alt={card.title} className='card-image' />
                        </motion.div>
                        <div className='text-info'>
                            <div className='card-header'>
                                <h2>{card.title}</h2>
                                <span>{card.pricingText}{card.pricingText}{card.pricingText}</span>
                            </div>
                            <p>{card.description}</p>
                        </div>
                        <div className="card-btns">
                            <button onClick={notify}>Buy Now</button>
                            <button className='' onClick={notifyme}>Save </button>
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
        <ToastContainer />
        </>
    )
}

export default Carousel;

import Typewriter from 'typewriter-effect'
import Link from 'next/link'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'
import MongoImage from '../../assets/images/home-slider.png'

const Structure = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        }
    }
    return (
        <div className="py-10 space-y-10 text-gray-900 bg-gray-100">
            <div className="main-container">
                <div className="px-4 sm:px-6 md:px-8 ">
                    <div className="flex items-center justify-center w-12 h-12 mb-8 rounded-xl bg-gradient-to-br from-purple-400 to-pink-600">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><g clipPath="url(#constraint-based_svg__clip0)"><g filter="url(#constraint-based_svg__filter0_dd)"><rect x="18" y="18" width="12" height="12" rx="2" fill="#F3E8FF"></rect></g><path fillRule="evenodd" clipRule="evenodd" d="M24 16a7 7 0 100-14 7 7 0 000 14zm0-4a3 3 0 100-6 3 3 0 000 6z" fill="#D8B4FE"></path><path d="M15.423 23a2 2 0 010 2l-2.346 4.062a2 2 0 01-1.732 1h-4.69a2 2 0 01-1.732-1L2.577 25a2 2 0 010-2l2.346-4.062a2 2 0 011.732-1h4.69a2 2 0 011.732 1L15.423 23z" fill="#D8B4FE"></path><g filter="url(#constraint-based_svg__filter1_dd)"><path d="M7.268 3c.77-1.333 2.694-1.333 3.464 0l5.196 9c.77 1.333-.192 3-1.732 3H3.804c-1.54 0-2.502-1.667-1.732-3l5.196-9z" fill="#F3E8FF"></path></g></g><defs><filter id="constraint-based_svg__filter0_dd" x="15" y="16" width="18" height="18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix><feBlend in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend></filter><filter id="constraint-based_svg__filter1_dd" x="-1.199" y="0" width="20.398" height="19" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix><feBlend in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend></filter><clipPath id="constraint-based_svg__clip0"><path fill="#fff" d="M0 0h32v32H0z"></path></clipPath></defs></svg>
                    </div>
                    <h2 className="mb-3 font-semibold tracking-wide text-purple-800 uppercase sm:text-lg sm:leading-snug">
                        Structured Roadmaps
                    </h2>
                    <p className="mb-8 text-3xl font-extrabold leading-none tracking-tight sm:text-5xl lg:text-6xl wrapper">
                        What should I learn
                    </p>
                    <br />
                    <p className="mb-8 text-3xl font-extrabold leading-none tracking-tight sm:text-5xl lg:text-6xl wrapper mt-[-25px] flex">
                        after

                        <Typewriter
                            options={{
                                strings: ['Javascript Basis', 'React.JS', 'Next.JS Framework', 'ACCE Studies'],
                                autoStart: true,
                                loop: true,
                            }}

                        />
                        ?
                    </p>
                    <p className='max-w-4xl mb-6 space-y-6 text-lg font-medium sm:text-2xl sm:leading-10'>
                        Chances are that you&apos;re NOT willing to spend years of your time figuring out the right tech stack. We got you. Our industry experts figured out a perfect learning path for you that is short, complete, and fully relevant in 2022. Seriously.
                    </p>
                    <Link href="#">
                        <a className='inline-flex text-lg font-medium text-purple-600 transition-colors duration-200 rounded-md sm:text-2xl focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none hover:text-purple-800'>
                            Learn more
                        </a>
                    </Link>
                    {/* <div>
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            // showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            // autoPlay={true}
                            // autoPlaySpeed={1000}
                            // keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerclassName="carousel-container"
                            // removeArrowOnDeviceType={["tablet", "mobile"]}
                            // deviceType={this.props.deviceType}
                            dotListclassName="custom-dot-list-style"
                            itemclassName="carousel-item-padding-40-px"
                        >
                            <div>
                                <div className='flex-shrink-0 h-48 bg-white'>
                                    <span>
                                        <Image src={MongoImage} className="object-cover" />
                                    </span>
                                    <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
                                        <div className='flex-1'>
                                            <p className='text-sm font-medium text-indigo-600'>
                                                1h interactive course
                                            </p>
                                            <p className='mt-2 text-xl font-semibold text-gray-900'>
                                                Full Stack Real Interview Questions
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>Item 2</div>
                            <div>Item 3</div>
                            <div>Item 4</div>
                        </Carousel>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Structure
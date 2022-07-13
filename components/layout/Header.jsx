import Image from "next/image"
import LogoIcon from '../../assets/images/logo.png'
import Styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { IoMdArrowDropup } from "react-icons/io";
import HTML from '../../assets/images/html.png'

const header = () => {
    return (
        <div className='black-bg'>
            <div className="main-container text-white py-[16px] px-[24px]">
                <div className="flex items-center justify-between">
                    <Link href="#">
                        <a className="flex items-center mt-[8px]">
                            <span className={`${Styles.Logospan}`} >
                                <Image src={LogoIcon} className={`${Styles.Logo}`} alt="Logo" />
                            </span>
                            {/* <span className="text-[20px] leading-[28px] white-text font-semibold ml-[8px]">codedamn</span> */}
                        </a>
                    </Link>
                    <nav>
                        <ul className="flex">
                            <li className="px-[12px] text-[16px] leading-[24px] drop-down font-medium relative">
                                <Link href="">
                                    <a className=" white-text opacity-80 self-stretch  hover:opacity-100 ">Start learning</a>
                                </Link>
                                <div className="absolute bg-gray-800 rounded-md menu-shadow z-10 left-[-90px] top-[45px] hover-dropdwon">
                                    <div className="w-[300px]">
                                        <IoMdArrowDropup className="text-[42px] absolute left-[42%] z-10 top-[-27px] opacity-90 menu-icon-color" />
                                        <ul className="p-4 space-y-8">
                                            <li className="opacity-80 hover:opacity-100">
                                                <Link href="#">
                                                    <a className="flex flex-col">
                                                        <span className="font-semibold">Frontend learning path </span>
                                                        <span className="text-xs">Become a frontend React web developer by learning through interactive courses</span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="opacity-80 hover:opacity-100">
                                                <Link href="#">
                                                    <a className="flex flex-col">
                                                        <span className="font-semibold">Backend learning path</span>
                                                        <span className="text-xs">Become a backend developer by learning through interactive courses</span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="opacity-80 hover:opacity-100">
                                                <Link href="#">
                                                    <a className="flex flex-col">
                                                        <span className="font-semibold">Full-stack learning path
                                                            <span className="inline-flex items-center px-2 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Popular</span>
                                                        </span><span className="text-xs">Become a full-stack web developer by learning through interactive courses</span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="opacity-80 hover:opacity-100">
                                                <Link href="#">
                                                    <a className="flex flex-col">
                                                        <span className="font-semibold">Web 3.0 And Blockchain
                                                            <span className="inline-flex items-center px-2 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Beta</span>
                                                        </span><span className="text-xs">Start your Web 3.0 journey building with ethereum, solidity, and more</span>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                        <Link href="#">
                                            <a className="flex-shrink-0 m-2 block w-full px-6 py-2 text-sm font-semibold text-center  bg-gray-900 hover:bg-gray-700 border-gray-800 border rounded-md md:w-auto">Explore All Paths</a>
                                        </Link>
                                        <Link href="#">
                                            <a className="flex-shrink-0 m-2 block w-full px-6 py-2 text-sm font-semibold text-center  bg-gray-900 hover:bg-gray-700 border-gray-800 border rounded-md md:w-auto">Explore All Paths</a>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li className="px-[12px] text-[16px] leading-[24px] font-medium white-text playground-menu opacity-80 self-stretch relative hover:opacity-100  cursor-pointer">
                                <Link href="">
                                    <a>Playgrounds</a>
                                </Link>
                                <div className="absolute bg-gray-800 rounded-md menu-shadow z-10 left-[-90px] top-[45px] playground-menu-hover">
                                    <div className="w-[600px]">
                                        <IoMdArrowDropup className="text-[42px] absolute left-[42%] z-10 top-[-27px] opacity-90 menu-icon-color" />
                                        <ul className="flex p-4 space-x-2">
                                            <li className="flex-1">
                                                <h2 className="font-semibold">Start a practice playground</h2>
                                                <p className="text-sm">Practice anything inside browser without any download/setup</p>
                                                <div className="space-y-3 mt-4 text-sm">
                                                    <Link href="#">
                                                        <a className="opacity-80 flex items-center space-x-2 hover:opacity-100">
                                                            <span className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
                                                                <Image src={HTML} alt="Html image" />
                                                            </span>
                                                            <span>HTML/CSS</span>
                                                        </a>
                                                    </Link>
                                                    <Link href="#">
                                                        <a className="opacity-80 flex items-center space-x-2 hover:opacity-100">
                                                            <span className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
                                                                <Image src={HTML} alt="Html image" />
                                                            </span>
                                                            <span>HTML/CSS</span>
                                                        </a>
                                                    </Link>
                                                    <Link href="#">
                                                        <a className="opacity-80 flex items-center space-x-2 hover:opacity-100">
                                                            <span className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
                                                                <Image src={HTML} alt="Html image" />
                                                            </span>
                                                            <span>HTML/CSS</span>
                                                        </a>
                                                    </Link>
                                                    <Link href="#">
                                                        <a className="opacity-80 flex items-center space-x-2 hover:opacity-100">
                                                            <span className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
                                                                <Image src={HTML} alt="Html image" />
                                                            </span>
                                                            <span>HTML/CSS</span>
                                                        </a>
                                                    </Link>
                                                    <Link href="#">
                                                        <a className="opacity-80 flex items-center space-x-2 hover:opacity-100">
                                                            <span className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
                                                                <Image src={HTML} alt="Html image" />
                                                            </span>
                                                            <span>HTML/CSS</span>
                                                        </a>
                                                    </Link>
                                                    <Link href="#">
                                                        <a className="opacity-80 flex items-center space-x-2 hover:opacity-100">
                                                            <span className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
                                                                <Image src={HTML} alt="Html image" />
                                                            </span>
                                                            <span>HTML/CSS</span>
                                                        </a>
                                                    </Link>
                                                    <Link href="#">
                                                        <a className="opacity-80 flex items-center space-x-2 hover:opacity-100">
                                                            <span className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
                                                                <Image src={HTML} alt="Html image" />
                                                            </span>
                                                            <span>HTML/CSS</span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="flex-1">
                                                <h2 className="font-semibold">Build a project</h2>
                                                <p className="text-sm">Build projects, get community feedback and gain confidence</p>
                                                <ul className="space-y-2 mt-4 text-sm">
                                                    <li className="opacity-80 hover:opacity-100">
                                                        <Link href="#">
                                                            <a>Explore frontend projects</a>
                                                        </Link>
                                                    </li>
                                                    <li className="opacity-80 hover:opacity-100">
                                                        <Link href="#">
                                                            <a>Explore backend projects</a>
                                                        </Link>
                                                    </li>
                                                    <li className="opacity-80 hover:opacity-100">
                                                        <Link href="#">
                                                            <a>Explore full stack projects</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="px-[12px] text-[16px] leading-[24px] font-medium white-text opacity-80 self-stretch hover:opacity-100  cursor-pointer">
                                <Link href="">
                                    <a>Pricing</a>
                                </Link>
                            </li>
                            <li className="px-[12px] text-[16px] leading-[24px] font-medium white-text opacity-80 self-stretch hover:opacity-100  cursor-pointer">
                                <Link href="">
                                    <a>Contact Us</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex items-center">
                        <Link href="#">
                            <a className="font-medium text-[16px] leading-[24px] white-text">Sign in</a>
                        </Link>
                        <div>
                            <Link href="/register">
                                <a className="lg:mx-4 inline-flex items-center px-4 py-1.5 text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-cyan-600 all-button text-center">Create Free Account</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header
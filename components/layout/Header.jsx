import Image from "next/image"
import LogoIcon from '../../assets/images/logo.png'
import Styles from '../../styles/Home.module.css'
import Link from 'next/link'

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
                            <li className="px-[12px] text-[16px] leading-[24px] font-medium relative">
                                <Link href="">
                                    <a className=" white-text opacity-80 self-stretch hover:opacity-100 ">Start learning</a>
                                </Link>
                            </li>
                            <li className="px-[12px] text-[16px] leading-[24px] font-medium white-text opacity-80 self-stretch hover:opacity-100  cursor-pointer">
                                <Link href="">
                                    <a>Playgrounds</a>
                                </Link>
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
                        <Link  href="#">
                            <a className="font-medium text-[16px] leading-[24px] white-text">Sign in</a>
                        </Link>
                        <div>
                            <Link  href="#">
                                <a className="lg:mx-4 inline-flex items-center px-4 py-1.5 text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-cyan-600 hover:bg-gradient-to-l text-center">Create Free Account</a>                                
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header
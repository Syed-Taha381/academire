import Image from "next/image"
import Apple from '../../assets/images/apple.png'
import Microsoft from '../../assets/images/microsoft.png'
import google from '../../assets/images/google.png'
import amazon from '../../assets/images/amazon.png'
import Styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Explore = () => {
    return (
        <section className='relative py-12 overflow-hidden bg-gray-100'>
            <div className='max-w-4xl px-4 mx-auto sm:px-6 lg:px-8'>
                <p className='text-sm font-semibold tracking-wide text-center text-gray-500 uppercase'>
                    Over 60,000+ people use codedamn today. <br />
                    Learn modern programming skills and become eligible to work at top companies.
                </p>
                <div className='flex items-center justify-center mt-6 -ml-6 space-x-4'>
                    <div className='relative flex-1 text-center'>
                        <span className={`${Styles.botomImage}`}>
                            <Image src={Apple} alt="Icon" />
                        </span>
                    </div>
                    <div className='relative flex-1 text-center'>
                        <span className={`${Styles.MicrosoftImage}`}>
                            <Image src={Microsoft} alt="Icon" />
                        </span>
                    </div>
                    <div className='relative flex-1 text-center'>
                        <span className={`${Styles.MicrosoftImage}`}>
                            <Image src={google} alt="Icon" />
                        </span>
                    </div>
                    <div className='relative flex-1 text-center'>
                        <span className={`${Styles.MicrosoftImage}`}>
                            <Image src={amazon} alt="Icon" />
                        </span>
                    </div>
                </div>
                <div className="max-w-4xl mx-4 mt-6 text-center lg:mx-auto">
                    <Link href="#">
                        <a className="flex-none block w-full px-6 py-3 text-xl font-semibold leading-6 text-white transition-colors duration-200 bg-gray-900 border border-transparent sm:w-auto hover:bg-gray-700 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none">
                            Explore All Learning Paths
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Explore
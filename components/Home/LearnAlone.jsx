import Link from 'next/link'

const LearnAlone = () => {
    return (
        <div className='py-10 space-y-10 text-gray-900 bg-gray-50'>
            <section className='main-container'>
                <div className='px-4 mb-10 sm:px-6 md:px-8 sm:mb-16 md:mb-20'>
                    <div className='flex items-center justify-center w-12 h-12 mb-8 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><g filter="url(#browser-support_svg__filter0_dd)" clipPath="url(#browser-support_svg__clip0)"><path fill="#E9D5FF" fillRule="evenodd" d="M5.204 8.755A26.79 26.79 0 008.65 9.988c.366-1.61.877-3.077 1.506-4.335.31-.62.657-1.204 1.04-1.737a13.044 13.044 0 00-5.992 4.84zm-.99 1.75a28.804 28.804 0 004.07 1.457A28.3 28.3 0 008 16c0 1.395.099 2.75.285 4.038a28.804 28.804 0 00-4.07 1.457A12.947 12.947 0 013 16c0-1.965.435-3.827 1.215-5.495zM10 16c0 1.242.084 2.44.239 3.572A29.07 29.07 0 0115 19.017v-6.034a29.07 29.07 0 01-4.761-.555A26.384 26.384 0 0010 16zm7-3.017v6.034a29.07 29.07 0 014.761.555C21.916 18.44 22 17.242 22 16s-.084-2.44-.239-3.572a29.07 29.07 0 01-4.761.555zm-2 8.035a27.056 27.056 0 00-4.406.523c.334 1.479.796 2.802 1.35 3.911.92 1.84 2 2.928 3.056 3.348v-7.782zm2 7.782v-7.782c1.504.055 2.976.232 4.406.523-.334 1.479-.796 2.802-1.35 3.911-.92 1.84-2 2.928-3.056 3.348zm0-17.818V3.2c1.056.42 2.136 1.508 3.055 3.348.555 1.11 1.017 2.432 1.351 3.91-1.43.291-2.902.47-4.406.524zM15 3.2v7.782a27.056 27.056 0 01-4.406-.523c.334-1.479.796-2.802 1.35-3.911.92-1.84 2-2.929 3.056-3.348zM5.204 23.245a26.796 26.796 0 013.446-1.233c.366 1.61.877 3.077 1.506 4.335.31.62.657 1.204 1.04 1.737a13.044 13.044 0 01-5.992-4.84zm16.64 3.102a12.72 12.72 0 01-1.04 1.737 13.044 13.044 0 005.992-4.84 26.798 26.798 0 00-3.446-1.232c-.366 1.61-.877 3.077-1.506 4.335zm5.941-4.852a28.799 28.799 0 00-4.07-1.457C23.901 18.75 24 17.395 24 16c0-1.395-.099-2.75-.285-4.038a28.799 28.799 0 004.07-1.457A12.946 12.946 0 0129 16c0 1.965-.436 3.827-1.215 5.495zm-.989-12.74a26.792 26.792 0 01-3.446 1.233c-.366-1.61-.877-3.077-1.506-4.335-.31-.62-.657-1.204-1.04-1.737a13.044 13.044 0 015.992 4.84zm-23.905-.05C5.452 4.111 10.362 1 16 1s10.548 3.11 13.11 7.705A14.937 14.937 0 0131 16c0 2.646-.686 5.135-1.89 7.295C26.547 27.889 21.637 31 16 31c-5.638 0-10.548-3.11-13.11-7.705A14.936 14.936 0 011 16c0-2.646.686-5.135 1.89-7.295z" clipRule="evenodd"></path></g><defs><clipPath id="browser-support_svg__clip0"><path fill="#fff" d="M0 0h32v32H0z"></path></clipPath><filter id="browser-support_svg__filter0_dd" width="36" height="36" x="-2" y="-1" colorinterpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix><feBlend in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend></filter></defs></svg>
                    </div>
                    <h2 className='mb-3 font-semibold tracking-wide text-purple-600 uppercase sm:text-lg sm:leading-snug'>Never learn alone.</h2>
                    <p className='max-w-4xl mb-6 space-y-6 text-lg font-medium sm:text-2xl sm:leading-10'>
                        The best part about learning with friends is learning with friends. We tightly integrate our learning platform with our Discord community of learners, teachers, and our reward system. <br />
                        Ask questions 24x7, answer questions of others, gain XP, complete the courses and grow together.
                    </p>
                    <Link  href="#">
                        <a className='inline-flex text-lg font-medium text-purple-600 transition-colors duration-200 rounded-md sm:text-2xl focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none hover:text-purple-800'>
                        Join our discord server
                        </a>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default LearnAlone
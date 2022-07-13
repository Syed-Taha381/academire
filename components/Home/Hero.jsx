import Link from 'next/link'

const Hero = () => {
    return (
        <div className='black-bg pt-[8px] pb-[54px] h-[100vh]'>
            <div className='main-container px-[16px] flex flex-row items-center justify-center'>
                <div className='flex-1 max-w-3xl sm:text-center lg:text-left lg:flex lg:items-center'>
                    <div className='lg:py-24'>
                        <h1 className='mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                            <span className='block'>Learn Programming</span>
                            <span className='block pb-3 text-transparent bg-clip-text gradient-color from-indigo-200 to-cyan-400'>Interactively</span>
                        </h1>
                        <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>Build projects, practice and learn to code from scratch - without leaving your browser.</p>
                        <div className='mt-10 sm:mt-12'>
                            <Link href="#">
                                <a className='block w-full px-4 py-3 font-medium text-center md:text-lg text-white rounded-md shadow all-button  from-indigo-500 to-cyan-600'>
                                    Explore All Roadmaps
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='mt-12 flex-2 w-full lg:mt-0 lg:-right-16 lg:relative'>
                    <div className='w-md max-w-md px-4 rounded mx-auto sm:px-6 border border-gray-700 bg-opacity-40 lg:px-0'>
                        <div className='pt-4 pb-6'>
                            <div className='px-6 text-gray-200'>
                                <div>
                                    <p className='text-sm font-medium text-gray-200'>Sign up with</p>
                                    <div className='mt-2 space-y-2 sm:space-y-0 sm:flex sm:space-x-2'>
                                        <button tabIndex="-1" className='disabled:opacity-50  flex-1 disabled:cursor-wait w-full cursor-pointer inline-flex justify-center py-2 px-4 border rounded-md shadow-sm bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-700 text-sm font-medium'>
                                            <span className='sr-only'>Sign up with Google</span>
                                            <svg className="w-6 h-6 translate-x-0.5 translate-y-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><clipPath id="p.0"><path d="m0 0l20.0 0l0 20.0l-20.0 0l0 -20.0z" clipRule="nonzero"></path></clipPath><g clipPath="url(#p.0)"><path fill="currentColor" fillOpacity="0.0" d="m0 0l20.0 0l0 20.0l-20.0 0z" fillRule="evenodd"></path><path fill="currentColor" d="m19.850197 8.270351c0.8574047 4.880001 -1.987587 9.65214 -6.6881847 11.218641c-4.700598 1.5665016 -9.83958 -0.5449295 -12.08104 -4.963685c-2.2414603 -4.4187555 -0.909603 -9.81259 3.1310139 -12.6801605c4.040616 -2.867571 9.571754 -2.3443127 13.002944 1.2301085l-2.8127813 2.7000687l0 0c-2.0935059 -2.1808972 -5.468274 -2.500158 -7.933616 -0.75053835c-2.4653416 1.74962 -3.277961 5.040613 -1.9103565 7.7366734c1.3676047 2.6960592 4.5031037 3.9843292 7.3711267 3.0285425c2.868022 -0.95578575 4.6038647 -3.8674583 4.0807285 -6.844941z" fillRule="evenodd"></path><path fill="currentColor" d="m10.000263 8.268785l9.847767 0l0 3.496233l-9.847767 0z" fillRule="evenodd"></path></g></svg>
                                        </button>
                                        <button tabIndex="-1" className='disabled:opacity-50  flex-1 disabled:cursor-wait w-full cursor-pointer inline-flex justify-center py-2 px-4 border rounded-md shadow-sm bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-700 text-sm font-medium'>
                                            <span className='sr-only'>Sign up with Facebook</span>
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>                                    </button>
                                    </div>
                                </div>
                                <div className='relative my-4'>
                                    <div className='absolute inset-0 flex items-center'>
                                        <div className='w-full border-t border-gray-700'></div>
                                    </div>
                                    <div className='relative flex justify-center text-sm'>
                                        <span className='px-2 text-gray-300'>Or continue with</span>
                                    </div>
                                </div>
                                <form className='space-y-2 text-gray-200'>
                                    <div>
                                        <label htmlFor="Name" className="block mb-1 text-sm font-medium">Name</label>
                                        <input type="text" name="Name" placeholder="Enter your name" autoComplete="off" className="block placeholder:text-sm w-full px-3 box-border py-2 placeholder-gray-400 border rounded-md shadow-sm appearance-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 ring-indigo-500 sm:text-sm bg-gray-900 border-gray-700 text-gray-100" data-testid="name" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="Username" className="block mb-1 text-sm font-medium">Username</label>
                                        <input type="text" name="Username" data-testid="username" autoComplete="off" className="block placeholder:text-sm w-full px-3 box-border py-2 placeholder-gray-400 border rounded-md shadow-sm appearance-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 sm:text-sm bg-gray-900 border-gray-700 text-gray-100 ring-indigo-500" required="" minLength="3" maxLength="15" pattern="^[a-zA-Z0-9]+$" placeholder="Only alphanumeric allowed [a-z, A-Z, 0-9]"/>
                                        <small className="text-xs opacity-80 italic ml-1">Once set, username cannot be changed</small>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-1 text-sm font-medium">Email Address</label>
                                        <input type="email" data-testid="email" placeholder="Enter your email address" autoComplete="off" className="block placeholder:text-sm w-full px-3 box-border py-2 placeholder-gray-400 border rounded-md shadow-sm appearance-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 ring-indigo-500 sm:text-sm bg-gray-900 border-gray-700 text-gray-100 ring-indigo-500" required="" id="email" name="email" />
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="Password" className="block mb-1 text-sm font-medium text-gray-200">Password</label>
                                            <input type="password" data-testid="password" name="Password" placeholder="Enter a new password" autoComplete="off" className="block placeholder:text-sm w-full px-3 box-border py-2 placeholder-gray-400 border rounded-md shadow-sm appearance-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 ring-indigo-500 sm:text-sm bg-gray-900 border-gray-700 text-gray-100" required="" minLength="5" maxLength="50"/>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" data-testid="submit-btn" disabled="" className="box-border flex justify-center w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md mt-6 group disabled:cursor-not-allowed all-button disabled:opacity-50 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">Let&apos;s go!</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
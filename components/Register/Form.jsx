import Styles from '../../styles/Register.module.css'

const Form = () => {
    return (
        <div className='relative'>
            <div className='flex pt-[2rem] pb-[4rem] bg-gray-50'>
                <div className='flex flex-col justify-center flex-1 px-4 sm:px-6 lg:px-20 xl:px-24'>
                    <div>
                        <div className='text-center sm:mx-auto sm:w-full sm:max-w-md'>
                            <h1 className='text-3xl font-extrabold text-gray-900'>
                                Create a <span className='text-transparent bg-clip-text gradient-color from-orange-400 to-red-600'>Free Account</span>
                            </h1>
                            <p className='mt-2 text-sm text-gray-600 max-w'>Hands-on practice modules, learning paths for industry skills, projects, community, and more.</p>
                        </div>
                        <div className='px-4 py-8 mt-8 bg-white shadow sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:px-10'>
                            <div>
                                <div>
                                    <div className='grid grid-cols-2 gap-2 mt-1'>
                                        <div>
                                            <button data-testid="google-oauth-btn" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-wait hover:bg-gray-50">
                                                <span className="sr-only">Sign up with Google</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><clipPath id="p.0"><path d="m0 0l20.0 0l0 20.0l-20.0 0l0 -20.0z" clipRule="nonzero"></path></clipPath><g clipPath="url(#p.0)"><path fill="currentColor" fillOpacity="0.0" d="m0 0l20.0 0l0 20.0l-20.0 0z" fillRule="evenodd"></path><path fill="currentColor" d="m19.850197 8.270351c0.8574047 4.880001 -1.987587 9.65214 -6.6881847 11.218641c-4.700598 1.5665016 -9.83958 -0.5449295 -12.08104 -4.963685c-2.2414603 -4.4187555 -0.909603 -9.81259 3.1310139 -12.6801605c4.040616 -2.867571 9.571754 -2.3443127 13.002944 1.2301085l-2.8127813 2.7000687l0 0c-2.0935059 -2.1808972 -5.468274 -2.500158 -7.933616 -0.75053835c-2.4653416 1.74962 -3.277961 5.040613 -1.9103565 7.7366734c1.3676047 2.6960592 4.5031037 3.9843292 7.3711267 3.0285425c2.868022 -0.95578575 4.6038647 -3.8674583 4.0807285 -6.844941z" fillRule="evenodd"></path><path fill="currentColor" d="m10.000263 8.268785l9.847767 0l0 3.496233l-9.847767 0z" fillRule="evenodd"></path></g></svg></button>
                                        </div>
                                        <div>
                                            <button data-testid="github-oauth-btn" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-wait hover:bg-gray-50"><span className="sr-only">Sign up with GitHub</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg></button>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative mt-6'>
                                    <div className='absolute inset-0 flex items-center' aria-hidden="true">
                                        <div className='w-full border-t border-gray-300'></div>
                                    </div>
                                    <div className='relative flex justify-center text-sm'>
                                        <span className='px-2 text-gray-500 bg-white'>Or use email to signup</span>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <form className='space-y-2'>
                                    <div>
                                        <label htmlFor="Name" className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                                        <input name="Name" placeholder="Enter your name" autoComplete="off" className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 ring-indigo-500 sm:text-sm" data-testid="name" required="" value="" />
                                    </div>
                                    <div>
                                        <label htmlFor="Username" className="block mb-1 text-sm font-medium text-gray-700">Username</label>
                                        <input name="Username" data-testid="username" autoComplete="off" className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 sm:text-sm ring-indigo-500" required="" minLength="3" maxLength="15" pattern="^[a-zA-Z0-9]+$" placeholder="Only alphanumeric allowed [a-z, A-Z, 0-9]" type="text" value="" />
                                        <small className="text-xs ml-1 opacity-80 italic">Once set, username cannot be changed</small>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
                                        <input data-testid="email" placeholder="Enter your email address" autoComplete="off" className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 sm:text-sm ring-indigo-500" required="" type="email" id="email" name="email" value="" />
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="Password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                                            <input data-testid="password" name="Password" placeholder="Enter a new password" autoComplete="off" className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 ring-indigo-500 sm:text-sm" required="" minLength="5" maxLength="50" type="password" value="" />
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" data-testid="submit-btn" disabled="" className="flex justify-center w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md text-md group disabled:cursor-not-allowed disabled:opacity-50 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 all-button">Submit Details</button>
                                        <small className="flex justify-center mt-3"><span>Click submit details to proceed and<strong> verify your email</strong></span></small>
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

export default Form
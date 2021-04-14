import React from 'react';
import InputForm from './InputForm';

function SignUp() {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className=" grid min-h-screen place-items-center">
                <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                    <h1 className="text-xl font-semibold">Hello there 👋, <span className="font-normal">please fill in your information to continue</span></h1>
                    <form action="" className="mt-6">
                        <div className="flex justify-between gap-3">
                            <span className="w-1/2">
                                <InputForm label="First Name" placeholder="Buboy" name="firstname" required="required" autocomplete="given-name" type="text"/>
                            </span>
                            <span className="w-1/2">
                                <InputForm label="Last Name" placeholder="Binababoy" name="lastname" required="required" autocomplete="last-name" type="text"/>
                            </span>
                        </div>
                        <InputForm label="E-mail" name="email" type="email" placeholder="kikopinako@walangtulogstudioscom" autocomplete="email" required="required"/>
                        <InputForm label="Password" name="password" placeholder="********" type="password" required="required" />
                        <InputForm label="confirm password" placeholder="********" name="password-confirm" required="required" type="password"/>
                        <div className="flex justify-start">
                            <label className="block text-gray-500 font-bold my-4 items-center">
                                <input className="leading-loose text-pink-600 top-0" type="checkbox"/>
                                    <span className="ml-2 text-sm py-2 text-gray-500 text-left">Accept the
                                        <a href=" " className="font-semibold text-blue-500 p-1">
                                           Terms and Conditions of the site
                                        </a>and
                                        <a href=" " className="font-semibold text-blue-500 p-1">
                                            the information data policy.
                                        </a>
                                    </span>
                                   
                                </label>
                            </div>
                        <div className="flex w-full p-5">
                            <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                                <span className="mr-2 uppercase">Register</span>
                                <span>
                                    <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <p className="justify-between inline-block mt-4 text-xs text-blue-500 cursor-pointer hover:text-blue-500">Already registered?</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp

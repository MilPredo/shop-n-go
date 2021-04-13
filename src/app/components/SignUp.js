import React from 'react'

function SignUp() {
    return (
        <div>
            <div class="grid min-h-screen place-items-center">
                <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                    <h1 class="text-xl font-semibold">Hello there 👋, <span class="font-normal">please fill in your information to continue</span></h1>
                    <form class="mt-6">
                        <div class="flex justify-between gap-3">
                            <span class="w-1/2">
                                <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                                <input id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            </span>
                            <span class="w-1/2">
                                <label for="lastname" class="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
                                <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            </span>
                        </div>
                        <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                        <input id="password" type="password" name="password" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <label for="password-confirm" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm password</label>
                        <input id="password-confirm" type="password" name="password-confirm" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <div class="flex justify-start">
                                <label class="block text-gray-500 font-bold my-4 items-center">
                                    <input class="leading-loose text-pink-600 top-0" type="checkbox"/>
                                    
                                    <span class="ml-2 text-sm py-2 text-gray-500 text-left">Accept the
                                          <a href="#"
                                             class="font-semibold text-blue-500 p-1">
                                           Terms and Conditions of the site
                                          </a>and
                                          <a href="#"
                                             class="font-semibold text-blue-500 p-1">
                                            the information data policy.</a>
                                    </span>
                                   
                                </label>
                            </div>
                        <div class="flex w-full p-5">
                            <button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                                <span class="mr-2 uppercase">Register</span>
                                <span>
                                    <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <p class="justify-between inline-block mt-4 text-xs text-blue-500 cursor-pointer hover:text-blue-500">Already registered?</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp

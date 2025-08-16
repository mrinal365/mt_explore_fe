'use client'
import Button from '@/components/common/button';
import Input from '@/components/common/input'
import Loader from '@/pages/loader/Loader';
import { useRouter } from 'next/navigation';
import React from 'react'

const Register = () => {
    const router = useRouter();

    const navigateToLogin = () => {
        // This is the internal Next.js function
        router.push('/login');
    };
    // if(true){
    //     return <Loader/>
    // }
    return (
        <div className='flex justify-center items-center min-h-[100vh] min-w-[100vw] bg1 '>
            <section className=" ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 min-w-[100vw]">
                    <div className="w-full bg-[#ffffff] background-blur rounded-lg shadow border-2 border-gray-200  md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <Input label="Your email" placeholder="name@company.com" type="email" name="email" id="email" htmlFor="email" />
                                <Input label="Your username" placeholder="Enter username" type="text" name="username" id="username" htmlFor="username" />
                                <Input label="Password" placeholder="••••••••" type="password" name="password" id="password" htmlFor="password" />
                                <Button htmlType="submit" title='Create an account'/>
                                <p className="text-sm font-light text-gray-500"> Already an user?
                                    <span
                                        onClick={() => navigateToLogin()}
                                        className=" font-bold text-black hover:underline pl-2 cursor-pointer"
                                    >
                                         Login
                                    </span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register